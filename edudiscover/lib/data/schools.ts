// School data types
export interface School {
    id: string;
    slug: string;
    name: string;
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

// Mock school data
export const schools: School[] = [
    {
        id: '1',
        slug: 'colegio-san-patricio-madrid',
        name: 'Colegio San Patricio',
        type: 'privado',
        ideario: 'laico',
        gender: 'mixto',
        city: 'Madrid',
        neighborhood: 'Chamartín',
        address: 'Calle Serrano 200',
        postalCode: '28002',
        latitude: 40.4468,
        longitude: -3.6778,
        phone: '+34 912 345 678',
        email: 'info@sanpatricio.com',
        website: 'https://www.sanpatricio.com',
        description: 'El Colegio San Patricio basa su modelo educativo en el aprendizaje personalizado y el desarrollo integral del alumno. Utilizamos una metodología activa que sitúa al estudiante en el centro del proceso de aprendizaje.',
        methodology: 'Bachillerato Internacional (IB)',
        founded: 1985,
        totalStudents: 420,
        studentsPerClass: 18,
        teacherStudentRatio: '18:1',
        rating: 4.8,
        reviewCount: 127,
        priceMonthly: 650,
        priceRange: '€€€',
        stages: ['infantil', 'primaria', 'secundaria', 'bachillerato'],
        languages: ['Español', 'Inglés', 'Francés'],
        bilingual: true,
        services: ['Comedor', 'Ruta escolar', 'Horario ampliado', 'Actividades extraescolares'],
        facilities: ['Gimnasio', 'Piscina', 'Laboratorios', 'Biblioteca', 'Campos deportivos'],
        images: [
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=600&fit=crop',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
        ],
        featured: true,
    },
    {
        id: '2',
        slug: 'colegio-montessori-barcelona',
        name: 'Colegio Montessori Barcelona',
        type: 'privado',
        ideario: 'laico',
        gender: 'mixto',
        city: 'Barcelona',
        neighborhood: 'Sarrià',
        address: 'Carrer de Balmes 350',
        postalCode: '08006',
        latitude: 41.3874,
        longitude: 2.1686,
        phone: '+34 934 567 890',
        email: 'info@montessori-bcn.com',
        website: 'https://www.montessori-bcn.com',
        description: 'Educación Montessori auténtica con guías certificadas AMI. Fomentamos la autonomía, creatividad y amor por el aprendizaje en un ambiente preparado.',
        methodology: 'Montessori',
        founded: 1995,
        totalStudents: 180,
        studentsPerClass: 15,
        teacherStudentRatio: '15:1',
        rating: 4.9,
        reviewCount: 89,
        priceMonthly: 520,
        priceRange: '€€',
        stages: ['infantil', 'primaria'],
        languages: ['Español', 'Catalán', 'Inglés'],
        bilingual: true,
        services: ['Comedor ecológico', 'Huerto escolar', 'Actividades extraescolares'],
        facilities: ['Aulas Montessori', 'Biblioteca', 'Huerto', 'Zonas verdes'],
        images: [
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
            'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
        ],
        featured: true,
    },
    {
        id: '3',
        slug: 'colegio-publico-cervantes-madrid',
        name: 'CEIP Cervantes',
        type: 'publico',
        ideario: 'laico',
        gender: 'mixto',
        city: 'Madrid',
        neighborhood: 'Retiro',
        address: 'Calle Alcalá 150',
        postalCode: '28009',
        latitude: 40.4200,
        longitude: -3.6789,
        phone: '+34 915 678 901',
        email: 'cervantes@educa.madrid.org',
        website: 'https://www.cervantes.madrid.org',
        description: 'Colegio público de referencia en el distrito de Retiro. Proyecto bilingüe español-inglés y fuerte compromiso con la inclusión educativa.',
        methodology: 'Tradicional',
        founded: 1960,
        totalStudents: 450,
        studentsPerClass: 25,
        teacherStudentRatio: '25:1',
        rating: 4.5,
        reviewCount: 203,
        priceRange: 'Gratuito',
        stages: ['infantil', 'primaria'],
        languages: ['Español', 'Inglés'],
        bilingual: true,
        services: ['Comedor', 'Actividades extraescolares', 'Apoyo educativo'],
        facilities: ['Gimnasio', 'Biblioteca', 'Aulas de informática', 'Patio'],
        images: [
            'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=600&fit=crop',
        ],
        featured: false,
    },
    {
        id: '4',
        slug: 'colegio-britanico-valencia',
        name: 'British School Valencia',
        type: 'internacional',
        ideario: 'laico',
        gender: 'mixto',
        city: 'Valencia',
        neighborhood: 'Campanar',
        address: 'Avenida de Burjassot 54',
        postalCode: '46009',
        latitude: 39.4840,
        longitude: -0.4030,
        phone: '+34 963 456 789',
        email: 'admissions@britishvalencia.com',
        website: 'https://www.britishvalencia.com',
        description: 'Educación británica de excelencia siguiendo el National Curriculum de Inglaterra. Preparamos a nuestros alumnos para los A-Levels y acceso a universidades internacionales.',
        methodology: 'Británico',
        founded: 2000,
        totalStudents: 320,
        studentsPerClass: 20,
        teacherStudentRatio: '20:1',
        rating: 4.7,
        reviewCount: 76,
        priceMonthly: 780,
        priceRange: '€€€',
        stages: ['infantil', 'primaria', 'secundaria', 'bachillerato'],
        languages: ['Inglés', 'Español', 'Francés'],
        bilingual: true,
        services: ['Comedor', 'Ruta escolar', 'Actividades extraescolares', 'Deportes'],
        facilities: ['Gimnasio', 'Laboratorios', 'Biblioteca', 'Campos deportivos', 'Teatro'],
        images: [
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop',
        ],
        featured: true,
    },
    {
        id: '5',
        slug: 'colegio-waldorf-sevilla',
        name: 'Escuela Waldorf Sevilla',
        type: 'privado',
        ideario: 'laico',
        gender: 'mixto',
        city: 'Sevilla',
        neighborhood: 'Nervión',
        address: 'Calle Luis Montoto 89',
        postalCode: '41005',
        latitude: 37.3772,
        longitude: -5.9869,
        phone: '+34 954 123 456',
        email: 'info@waldorf-sevilla.es',
        website: 'https://www.waldorf-sevilla.es',
        description: 'Pedagogía Waldorf que respeta el desarrollo natural del niño. Arte, música y movimiento integrados en todas las etapas educativas.',
        methodology: 'Waldorf',
        founded: 2005,
        totalStudents: 150,
        studentsPerClass: 18,
        teacherStudentRatio: '18:1',
        rating: 4.6,
        reviewCount: 54,
        priceMonthly: 480,
        priceRange: '€€',
        stages: ['infantil', 'primaria', 'secundaria'],
        languages: ['Español', 'Inglés', 'Alemán'],
        bilingual: false,
        services: ['Comedor ecológico', 'Talleres artísticos', 'Huerto escolar'],
        facilities: ['Aulas Waldorf', 'Taller de arte', 'Huerto', 'Zonas verdes'],
        images: [
            'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1200&h=600&fit=crop',
        ],
        featured: false,
    },
];

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
