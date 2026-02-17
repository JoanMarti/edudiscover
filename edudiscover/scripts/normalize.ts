/**
 * Normalize data from different sources into a unified format
 */

import { getNestedValue, type FieldMapping } from './data-sources';

export interface NormalizedSchool {
    id: string;
    name: string;
    slug: string;
    address: {
        street: string;
        postalCode: string;
        city: string;
        region: string;
    };
    contact: {
        phone?: string;
        email?: string;
        website?: string;
    };
    location: {
        latitude: number;
        longitude: number;
    };
    type: 'public' | 'private' | 'charter';
    levels: string[];
    services: string[];
    metadata: {
        source: string;
        lastUpdated: string;
    };
}

/**
 * Normalize a single school record
 */
export function normalizeSchool(
    rawData: any,
    fieldMapping: FieldMapping,
    sourceName: string,
    region: string
): NormalizedSchool | null {
    try {
        const name = getNestedValue(rawData, fieldMapping.name);
        if (!name) return null;

        const id = fieldMapping.id
            ? getNestedValue(rawData, fieldMapping.id)
            : generateId(name);

        const street = fieldMapping.street
            ? getNestedValue(rawData, fieldMapping.street)
            : fieldMapping.address
                ? getNestedValue(rawData, fieldMapping.address)
                : '';

        const postalCode = fieldMapping.postalCode
            ? getNestedValue(rawData, fieldMapping.postalCode)
            : '';

        const city = fieldMapping.city
            ? getNestedValue(rawData, fieldMapping.city)
            : region;

        const phone = fieldMapping.phone
            ? getNestedValue(rawData, fieldMapping.phone)
            : undefined;

        const email = fieldMapping.email
            ? getNestedValue(rawData, fieldMapping.email)
            : undefined;

        const website = fieldMapping.website
            ? getNestedValue(rawData, fieldMapping.website)
            : undefined;

        const latitude = fieldMapping.latitude
            ? parseFloat(getNestedValue(rawData, fieldMapping.latitude))
            : 0;

        const longitude = fieldMapping.longitude
            ? parseFloat(getNestedValue(rawData, fieldMapping.longitude))
            : 0;

        const typeRaw = fieldMapping.type
            ? getNestedValue(rawData, fieldMapping.type)
            : '';

        const type = normalizeSchoolType(typeRaw);

        const servicesRaw = fieldMapping.services
            ? getNestedValue(rawData, fieldMapping.services)
            : '';

        const services = normalizeServices(servicesRaw);

        const levelsRaw = fieldMapping.levels
            ? getNestedValue(rawData, fieldMapping.levels)
            : '';

        const levels = normalizeLevels(levelsRaw);

        return {
            id,
            name,
            slug: generateSlug(name),
            address: {
                street,
                postalCode,
                city,
                region
            },
            contact: {
                phone,
                email,
                website
            },
            location: {
                latitude,
                longitude
            },
            type,
            levels,
            services,
            metadata: {
                source: sourceName,
                lastUpdated: new Date().toISOString()
            }
        };
    } catch (error) {
        console.error('Error normalizing school:', error);
        return null;
    }
}

/**
 * Generate a unique ID from school name
 */
function generateId(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

/**
 * Generate URL-friendly slug
 */
function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

/**
 * Normalize school type
 */
function normalizeSchoolType(typeRaw: string): 'public' | 'private' | 'charter' {
    const typeLower = typeRaw?.toLowerCase() || '';

    if (typeLower.includes('público') || typeLower.includes('public')) {
        return 'public';
    } else if (typeLower.includes('concertado') || typeLower.includes('charter')) {
        return 'charter';
    } else {
        return 'private';
    }
}

/**
 * Normalize services array
 */
function normalizeServices(servicesRaw: any): string[] {
    if (!servicesRaw) return [];

    if (Array.isArray(servicesRaw)) {
        return servicesRaw;
    }

    if (typeof servicesRaw === 'string') {
        return servicesRaw.split(',').map(s => s.trim()).filter(Boolean);
    }

    return [];
}

/**
 * Normalize education levels
 */
function normalizeLevels(levelsRaw: any): string[] {
    if (!levelsRaw) return [];

    if (Array.isArray(levelsRaw)) {
        return levelsRaw;
    }

    if (typeof levelsRaw === 'string') {
        return levelsRaw.split(',').map(l => l.trim()).filter(Boolean);
    }

    return [];
}
