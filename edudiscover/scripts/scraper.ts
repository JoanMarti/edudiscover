#!/usr/bin/env tsx

/**
 * Main scraper script for educational centers data
 * 
 * Usage:
 *   npm run scrape              # Scrape all sources
 *   npm run scrape:madrid       # Scrape only Madrid
 */

import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import { dataSources, type DataSource } from './data-sources';
import { normalizeSchool, type NormalizedSchool } from './normalize';

const OUTPUT_DIR = path.join(process.cwd(), 'lib', 'data', 'scraped');

/**
 * Main scraper function
 */
async function scrape(sourceName?: string) {
    console.log('🚀 Starting scraper...\n');

    // Determine which sources to scrape
    const sourcesToScrape = sourceName
        ? { [sourceName]: dataSources[sourceName] }
        : dataSources;

    if (!sourcesToScrape || Object.keys(sourcesToScrape).length === 0) {
        console.error(`❌ Source "${sourceName}" not found`);
        process.exit(1);
    }

    // Create output directory
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Scrape each source
    for (const [name, source] of Object.entries(sourcesToScrape)) {
        await scrapeSource(name, source);
    }

    console.log('\n✅ Scraping completed!');
}

/**
 * Scrape a single data source
 */
async function scrapeSource(name: string, source: DataSource) {
    console.log(`📥 Fetching data from ${source.name} (${source.region})...`);
    console.log(`   URL: ${source.url}`);

    try {
        // Fetch data
        const response = await axios.get(source.url, {
            timeout: 30000,
            headers: {
                'User-Agent': 'EduDiscover/1.0 (Educational Platform)',
                'Accept': 'application/json'
            }
        });

        console.log(`   Status: ${response.status}`);

        // Extract records from response
        const records = extractRecords(response.data, source.format);
        console.log(`   Found ${records.length} records`);

        // Normalize data
        console.log(`   Normalizing data...`);
        const normalizedSchools: NormalizedSchool[] = [];

        for (const record of records) {
            const normalized = normalizeSchool(
                record,
                source.fieldMapping,
                source.name,
                source.region
            );

            if (normalized) {
                normalizedSchools.push(normalized);
            }
        }

        console.log(`   Successfully normalized ${normalizedSchools.length} schools`);

        // Save to file
        const outputPath = path.join(OUTPUT_DIR, `${name}.json`);
        await fs.writeFile(
            outputPath,
            JSON.stringify(normalizedSchools, null, 2),
            'utf-8'
        );

        console.log(`   ✅ Saved to ${outputPath}\n`);

        // Save metadata
        const metadataPath = path.join(OUTPUT_DIR, `${name}.meta.json`);
        await fs.writeFile(
            metadataPath,
            JSON.stringify({
                source: source.name,
                region: source.region,
                url: source.url,
                totalRecords: records.length,
                normalizedRecords: normalizedSchools.length,
                lastUpdated: new Date().toISOString()
            }, null, 2),
            'utf-8'
        );

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`   ❌ HTTP Error: ${error.message}`);
            if (error.response) {
                console.error(`   Status: ${error.response.status}`);
                console.error(`   Data:`, error.response.data);
            }
        } else {
            console.error(`   ❌ Error:`, error);
        }
    }
}

/**
 * Extract records from API response based on format
 */
function extractRecords(data: any, format: string): any[] {
    if (format === 'json') {
        // Handle different JSON structures
        if (Array.isArray(data)) {
            return data;
        }

        // Madrid Open Data format
        if (data['@graph']) {
            return data['@graph'];
        }

        // Other common formats
        if (data.data && Array.isArray(data.data)) {
            return data.data;
        }

        if (data.results && Array.isArray(data.results)) {
            return data.results;
        }

        if (data.records && Array.isArray(data.records)) {
            return data.records;
        }
    }

    return [];
}

// Parse command line arguments
const args = process.argv.slice(2);
const sourceArg = args.find(arg => arg.startsWith('--source='));
const sourceName = sourceArg ? sourceArg.split('=')[1] : undefined;

// Run scraper
scrape(sourceName).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
