import { SchoolRanking } from '@/lib/types/ranking';

/**
 * Mock ranking data for demonstration
 * In production, this would come from a database or API
 */
export const schoolRankings: Record<string, SchoolRanking> = {
    // Colegio San Patricio (Madrid)
    'colegio-san-patricio-madrid': {
        schoolId: 'colegio-san-patricio-madrid',
        academicRanking: {
            nationalRank: 28,
            regionalRank: 5,
            cityRank: 4,
            selectividadAverage: 8.9,
            approvalRate: 97,
            lastUpdated: '2026-01-15'
        },
        awards: [
            {
                id: 'award-1',
                name: 'Excelencia Deportiva',
                category: 'sports',
                year: 2025,
                issuedBy: 'Comunidad de Madrid',
                verified: true
            },
            {
                id: 'award-2',
                name: 'Premio Innovación Educativa',
                category: 'innovation',
                year: 2024,
                issuedBy: 'Fundación Telefónica',
                verified: true
            }
        ],
        parentReviews: {
            googleMaps: {
                platform: 'Google Maps',
                rating: 4.5,
                totalReviews: 312,
                url: 'https://maps.google.com',
                lastUpdated: '2026-02-08'
            },
            micole: {
                platform: 'Micole',
                rating: 4.4,
                totalReviews: 98,
                url: 'https://micole.net',
                lastUpdated: '2026-01-28'
            },
            other: [],
            aggregatedRating: 4.47,
            totalReviews: 410
        },
        categoryScores: {
            academicExcellence: 93,
            facilities: 90,
            teachingQuality: 89,
            extracurriculars: 92,
            parentSatisfaction: 89
        },
        overallScore: 90.8,
        badges: [],
        lastUpdated: '2026-02-15'
    },

    // Colegio Montessori (Barcelona)
    'colegio-montessori-barcelona': {
        schoolId: 'colegio-montessori-barcelona',
        academicRanking: {
            nationalRank: 45,
            regionalRank: 8,
            cityRank: 3,
            selectividadAverage: 8.7,
            approvalRate: 98,
            lastUpdated: '2026-01-15'
        },
        awards: [
            {
                id: 'award-3',
                name: 'Premio Excelencia Educativa',
                category: 'academic',
                year: 2025,
                issuedBy: 'Generalitat de Catalunya',
                verified: true
            },
            {
                id: 'award-4',
                name: 'Sello Eco-Escuela',
                category: 'sustainability',
                year: 2024,
                issuedBy: 'ADEAC',
                verified: true
            }
        ],
        parentReviews: {
            googleMaps: {
                platform: 'Google Maps',
                rating: 4.6,
                totalReviews: 234,
                url: 'https://maps.google.com',
                lastUpdated: '2026-02-10'
            },
            micole: {
                platform: 'Micole',
                rating: 4.5,
                totalReviews: 89,
                url: 'https://micole.net',
                lastUpdated: '2026-02-01'
            },
            other: [],
            aggregatedRating: 4.55,
            totalReviews: 323
        },
        categoryScores: {
            academicExcellence: 92,
            facilities: 88,
            teachingQuality: 90,
            extracurriculars: 85,
            parentSatisfaction: 91
        },
        overallScore: 90.5,
        badges: [],
        lastUpdated: '2026-02-15'
    },

    // British School Valencia
    'colegio-britanico-valencia': {
        schoolId: 'colegio-britanico-valencia',
        academicRanking: {
            nationalRank: 18,
            regionalRank: 2,
            cityRank: 1,
            selectividadAverage: 9.0,
            approvalRate: 98,
            lastUpdated: '2026-01-15'
        },
        awards: [
            {
                id: 'award-5',
                name: 'Sello Calidad Europea',
                category: 'academic',
                year: 2025,
                issuedBy: 'Consejo Europeo',
                verified: true
            },
            {
                id: 'award-6',
                name: 'Centro Bilingüe Excelente',
                category: 'academic',
                year: 2024,
                issuedBy: 'Comunidad Valenciana',
                verified: true
            }
        ],
        parentReviews: {
            googleMaps: {
                platform: 'Google Maps',
                rating: 4.7,
                totalReviews: 389,
                url: 'https://maps.google.com',
                lastUpdated: '2026-02-11'
            },
            micole: {
                platform: 'Micole',
                rating: 4.6,
                totalReviews: 134,
                url: 'https://micole.net',
                lastUpdated: '2026-02-03'
            },
            other: [],
            aggregatedRating: 4.65,
            totalReviews: 523
        },
        categoryScores: {
            academicExcellence: 94,
            facilities: 92,
            teachingQuality: 93,
            extracurriculars: 88,
            parentSatisfaction: 93
        },
        overallScore: 93.2,
        badges: [],
        lastUpdated: '2026-02-15'
    },

    // CEIP Cervantes (Public school - Madrid)
    'colegio-publico-cervantes-madrid': {
        schoolId: 'colegio-publico-cervantes-madrid',
        academicRanking: {
            nationalRank: 156,
            regionalRank: 24,
            cityRank: 12,
            selectividadAverage: 7.8,
            approvalRate: 92,
            lastUpdated: '2026-01-15'
        },
        awards: [],
        parentReviews: {
            googleMaps: {
                platform: 'Google Maps',
                rating: 4.2,
                totalReviews: 145,
                url: 'https://maps.google.com',
                lastUpdated: '2026-02-05'
            },
            other: [],
            aggregatedRating: 4.2,
            totalReviews: 145
        },
        categoryScores: {
            academicExcellence: 82,
            facilities: 75,
            teachingQuality: 80,
            extracurriculars: 70,
            parentSatisfaction: 84
        },
        overallScore: 80.3,
        badges: [],
        lastUpdated: '2026-02-15'
    },

    // Waldorf Sevilla
    'colegio-waldorf-sevilla': {
        schoolId: 'colegio-waldorf-sevilla',
        academicRanking: {
            nationalRank: 89,
            regionalRank: 6,
            cityRank: 2,
            selectividadAverage: 8.3,
            approvalRate: 94,
            lastUpdated: '2026-01-15'
        },
        awards: [
            {
                id: 'award-7',
                name: 'Premio Innovación Pedagógica',
                category: 'innovation',
                year: 2025,
                issuedBy: 'Junta de Andalucía',
                verified: true
            }
        ],
        parentReviews: {
            googleMaps: {
                platform: 'Google Maps',
                rating: 4.4,
                totalReviews: 187,
                url: 'https://maps.google.com',
                lastUpdated: '2026-02-07'
            },
            micole: {
                platform: 'Micole',
                rating: 4.3,
                totalReviews: 76,
                url: 'https://micole.net',
                lastUpdated: '2026-01-30'
            },
            other: [],
            aggregatedRating: 4.35,
            totalReviews: 263
        },
        categoryScores: {
            academicExcellence: 86,
            facilities: 82,
            teachingQuality: 88,
            extracurriculars: 90,
            parentSatisfaction: 87
        },
        overallScore: 86.7,
        badges: [],
        lastUpdated: '2026-02-15'
    }
};

/**
 * Get ranking for a specific school
 */
export function getSchoolRanking(schoolId: string): SchoolRanking | undefined {
    return schoolRankings[schoolId];
}

/**
 * Get all rankings
 */
export function getAllRankings(): SchoolRanking[] {
    return Object.values(schoolRankings);
}

/**
 * Get top N schools by overall score
 */
export function getTopSchools(limit: number = 10): SchoolRanking[] {
    return getAllRankings()
        .sort((a, b) => b.overallScore - a.overallScore)
        .slice(0, limit);
}

/**
 * Get top schools by city
 */
export function getTopSchoolsByCity(city: string, limit: number = 10): SchoolRanking[] {
    // This would need to cross-reference with school data to filter by city
    // For now, returning all top schools
    return getTopSchools(limit);
}
