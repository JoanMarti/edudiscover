#!/usr/bin/env tsx

/**
 * Integration script to merge scraped data with application
 */

import fs from 'fs/promises';
import path from 'path';
import { type NormalizedSchool } from './normalize';

const SCRAPED_DIR = path.join(process.cwd(), 'lib', 'data', 'scraped');
const OUTPUT_FILE = path.join(process.cwd(), 'lib', 'data', 'schools-real.ts');

interface SchoolType {
    id: string;
    name: string;
    slug: string;
    type: 'public' | 'private' | 'charter';
    address: string;
    city: string;
    postalCode: string;
    region: string;
    phone?: string;
    email?: string;
    website?: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    rating: number;
    reviewCount: number;
    description: string;
    features: string[];
    levels: string[];
    tuition?: string;
    imageUrl: string;
}

async function integrate() {
    console.log('🔄 Integrating scraped data with application...\n');

    try {
        // Read all scraped data
        const files = await fs.readdir(SCRAPED_DIR);
        const jsonFiles = files.filter(f => f.endsWith('.json') && !f.endsWith('.meta.json'));

        if (jsonFiles.length === 0) {
            console.log('⚠️  No scraped data found. Run `npm run scrape` first.');
            return;
        }

        let allSchools: NormalizedSchool[] = [];

        for (const file of jsonFiles) {
            const filePath = path.join(SCRAPED_DIR, file);
            const content = await fs.readFile(filePath, 'utf-8');
            const schools: NormalizedSchool[] = JSON.parse(content);
            allSchools = allSchools.concat(schools);
        }

        console.log(`📊 Total schools loaded: ${allSchools.length}`);

        // Transform to application format
        const transformedSchools: SchoolType[] = allSchools
            .filter(school => school.location.latitude && school.location.longitude)
            .map(school => transformSchool(school));

        console.log(`✅ Transformed ${transformedSchools.length} schools`);

        // Generate TypeScript file
        const tsContent = generateTypeScriptFile(transformedSchools);

        await fs.writeFile(OUTPUT_FILE, tsContent, 'utf-8');

        console.log(`\n✅ Integration complete!`);
        console.log(`   Output: ${OUTPUT_FILE}`);
        console.log(`   Total schools: ${transformedSchools.length}`);

    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

function transformSchool(school: NormalizedSchool): SchoolType {
    return {
        id: school.id,
        name: school.name,
        slug: school.slug,
        type: school.type,
        address: school.address.street,
        city: school.address.city,
        postalCode: school.address.postalCode,
        region: school.address.region,
        phone: school.contact.phone,
        email: school.contact.email,
        website: school.contact.website,
        coordinates: {
            lat: school.location.latitude,
            lng: school.location.longitude
        },
        rating: 0, // Will be populated later with reviews
        reviewCount: 0,
        description: generateDescription(school),
        features: school.services,
        levels: school.levels,
        tuition: school.type === 'public' ? 'Gratuito' : undefined,
        imageUrl: '/placeholder-school.jpg' // Placeholder image
    };
}

function generateDescription(school: NormalizedSchool): string {
    const typeText = school.type === 'public' ? 'público' : school.type === 'charter' ? 'concertado' : 'privado';
    return `Centro educativo ${typeText} ubicado en ${school.address.city}, ${school.address.region}.`;
}

function generateTypeScriptFile(schools: SchoolType[]): string {
    return `/**
 * Real school data from official sources
 * Generated automatically from scraped data
 * Last updated: ${new Date().toISOString()}
 */

export interface School {
  id: string;
  name: string;
  slug: string;
  type: 'public' | 'private' | 'charter';
  address: string;
  city: string;
  postalCode: string;
  region: string;
  phone?: string;
  email?: string;
  website?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  levels: string[];
  tuition?: string;
  imageUrl: string;
}

export const realSchools: School[] = ${JSON.stringify(schools, null, 2)};

// Helper functions
export function getSchoolBySlug(slug: string): School | undefined {
  return realSchools.find(school => school.slug === slug);
}

export function getSchoolsByCity(city: string): School[] {
  return realSchools.filter(school => 
    school.city.toLowerCase() === city.toLowerCase()
  );
}

export function getSchoolsByType(type: 'public' | 'private' | 'charter'): School[] {
  return realSchools.filter(school => school.type === type);
}

export function searchSchools(query: string): School[] {
  const lowerQuery = query.toLowerCase();
  return realSchools.filter(school =>
    school.name.toLowerCase().includes(lowerQuery) ||
    school.city.toLowerCase().includes(lowerQuery) ||
    school.address.toLowerCase().includes(lowerQuery)
  );
}
`;
}

integrate();
