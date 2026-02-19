import { School } from './types';
import { schoolsES } from './schools-es';
import { schoolsUK } from './schools-uk';

// Re-export types and constants
export * from './types';

// Combine all schools
export const schools: School[] = [...schoolsES, ...schoolsUK];

// Helper functions
export function getSchoolBySlug(slug: string): School | undefined {
    return schools.find(school => school.slug === slug);
}

export function getSchoolsByCity(city: string): School[] {
    return schools.filter(school => school.city.toLowerCase() === city.toLowerCase());
}

export function getFeaturedSchools(): School[] {
    return schools.filter(school => school.featured);
}

export function searchSchools(query: string): School[] {
    const lowerQuery = query.toLowerCase();
    return schools.filter(school =>
        school.name.toLowerCase().includes(lowerQuery) ||
        school.city.toLowerCase().includes(lowerQuery) ||
        school.neighborhood.toLowerCase().includes(lowerQuery)
    );
}
