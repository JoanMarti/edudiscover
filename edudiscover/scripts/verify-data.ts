#!/usr/bin/env tsx

/**
 * Verify scraped data quality
 */

import fs from 'fs/promises';
import path from 'path';
import { type NormalizedSchool } from './normalize';

const SCRAPED_DIR = path.join(process.cwd(), 'lib', 'data', 'scraped');

async function verifyData() {
    console.log('🔍 Verifying scraped data...\n');

    try {
        const files = await fs.readdir(SCRAPED_DIR);
        const jsonFiles = files.filter(f => f.endsWith('.json') && !f.endsWith('.meta.json'));

        if (jsonFiles.length === 0) {
            console.log('⚠️  No scraped data found. Run `npm run scrape` first.');
            return;
        }

        for (const file of jsonFiles) {
            const filePath = path.join(SCRAPED_DIR, file);
            const content = await fs.readFile(filePath, 'utf-8');
            const schools: NormalizedSchool[] = JSON.parse(content);

            console.log(`📄 ${file}`);
            console.log(`   Total schools: ${schools.length}`);

            // Verify data quality
            const withCoordinates = schools.filter(s => s.location.latitude && s.location.longitude);
            const withPhone = schools.filter(s => s.contact.phone);
            const withEmail = schools.filter(s => s.contact.email);
            const withWebsite = schools.filter(s => s.contact.website);

            console.log(`   With coordinates: ${withCoordinates.length} (${percent(withCoordinates.length, schools.length)}%)`);
            console.log(`   With phone: ${withPhone.length} (${percent(withPhone.length, schools.length)}%)`);
            console.log(`   With email: ${withEmail.length} (${percent(withEmail.length, schools.length)}%)`);
            console.log(`   With website: ${withWebsite.length} (${percent(withWebsite.length, schools.length)}%)`);

            // Sample data
            if (schools.length > 0) {
                console.log(`\n   Sample school:`);
                console.log(`   ${JSON.stringify(schools[0], null, 2)}`);
            }

            console.log('');
        }

        console.log('✅ Verification complete!');

    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

function percent(value: number, total: number): string {
    return ((value / total) * 100).toFixed(1);
}

verifyData();
