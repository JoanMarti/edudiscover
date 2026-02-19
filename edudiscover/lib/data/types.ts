export interface School {
    id: string;
    slug: string;
    name: string;
    country: string; // ISO code (ES, UK, etc.)
    type: 'publico' | 'concertado' | 'privado' | 'internacional';
    ideario: 'religioso' | 'laico';
    gender: 'mixto' | 'ninas' | 'ninos';
    city: string;
    neighborhood: string;
    address: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    phone: string;
    email: string;
    website: string;
    description: string;
    methodology?: string;
    founded: number;
    totalStudents: number;
    studentsPerClass: number;
    teacherStudentRatio: string;
    rating: number;
    reviewCount: number;
    priceMonthly?: number;
    priceRange: '€' | '€€' | '€€€' | 'Gratuito';
    stages: EducationalStage[];
    languages: string[];
    bilingual: boolean;
    services: string[];
    facilities: string[];
    images: string[];
    featured: boolean;
}

export type EducationalStage =
    | 'guarderia'
    | 'infantil'
    | 'primaria'
    | 'secundaria'
    | 'bachillerato'
    | 'fp';

export const METHODOLOGIES = [
    'Montessori',
    'Waldorf',
    'Reggio Emilia',
    'Constructivista',
    'Tradicional',
    'Bachillerato Internacional (IB)',
    'Británico',
    'Americano',
    'Francés',
] as const;

export const SCHOOL_TYPES = {
    publico: 'Público',
    concertado: 'Concertado',
    privado: 'Privado',
    internacional: 'Internacional',
} as const;

export const STAGE_LABELS = {
    guarderia: 'Guardería (0-3 años)',
    infantil: 'Infantil (3-6 años)',
    primaria: 'Primaria (6-12 años)',
    secundaria: 'Secundaria (12-16 años)',
    bachillerato: 'Bachillerato (16-18 años)',
    fp: 'Formación Profesional',
} as const;
