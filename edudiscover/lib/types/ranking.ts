// Types for School Ranking System

export interface Award {
    id: string;
    name: string;
    category: 'academic' | 'sports' | 'arts' | 'innovation' | 'sustainability' | 'other';
    year: number;
    issuedBy: string;
    description?: string;
    verified: boolean;
}

export interface ReviewSource {
    platform: string;
    rating: number; // 0-5
    totalReviews: number;
    url?: string;
    lastUpdated: string;
}

export interface AcademicRanking {
    nationalRank?: number;
    regionalRank?: number;
    cityRank?: number;
    selectividadAverage?: number; // Nota media EBAU/Selectividad (0-10)
    approvalRate?: number; // % aprobados (0-100)
    pisaScore?: number;
    lastUpdated: string;
}

export interface ParentReviews {
    googleMaps?: ReviewSource;
    micole?: ReviewSource;
    other: ReviewSource[];
    aggregatedRating: number; // Promedio ponderado (0-5)
    totalReviews: number;
}

export interface CategoryScores {
    academicExcellence: number; // 0-100
    facilities: number; // 0-100
    teachingQuality: number; // 0-100
    extracurriculars: number; // 0-100
    parentSatisfaction: number; // 0-100
}

export type BadgeType =
    | 'top_academic'
    | 'top_rated'
    | 'award_winner'
    | 'eco_school'
    | 'bilingual'
    | 'innovative'
    | 'top_10_city'
    | 'top_100_national';

export interface Badge {
    id: string;
    type: BadgeType;
    label: string;
    icon: string;
    color: string;
    description?: string;
}

export interface SchoolRanking {
    schoolId: string;

    // Academic Excellence
    academicRanking: AcademicRanking;

    // Awards and Recognitions
    awards: Award[];

    // Parent Reviews Aggregation
    parentReviews: ParentReviews;

    // Category Rankings
    categoryScores: CategoryScores;

    // Overall Score
    overallScore: number; // 0-100 (weighted average)

    // Badges
    badges: Badge[];

    // Metadata
    lastUpdated: string;
}

// Helper type for filtering
export interface RankingFilters {
    minOverallScore?: number;
    minAcademicScore?: number;
    minParentRating?: number;
    hasAwards?: boolean;
    badgeTypes?: BadgeType[];
    city?: string;
}
