export interface Review {
    id: string;
    schoolId: string;
    schoolName: string;
    schoolCity: string;
    authorName: string;
    relationship: string;
    yearsAtSchool: number;
    ratingOverall: number;
    ratingTeachers: number;
    ratingFacilities: number;
    ratingEducation: number;
    ratingCommunication: number;
    ratingValue?: number;
    reviewText: string;
    wouldRecommend: boolean;
    verified: boolean;
    helpfulCount: number;
    createdAt: string;
}

export const reviews: Review[] = [
    {
        id: '1',
        schoolId: '1',
        schoolName: 'Colegio San Patricio',
        schoolCity: 'Madrid',
        authorName: 'María G.',
        relationship: 'Madre de alumno de 5º Primaria',
        yearsAtSchool: 3,
        ratingOverall: 5,
        ratingTeachers: 5,
        ratingFacilities: 5,
        ratingEducation: 5,
        ratingCommunication: 4,
        ratingValue: 4,
        reviewText: 'Estamos encantados con el colegio. Los profesores son excelentes y muy dedicados. Mi hijo ha mejorado muchísimo tanto académicamente como en valores. El programa bilingüe es realmente efectivo.',
        wouldRecommend: true,
        verified: true,
        helpfulCount: 12,
        createdAt: '2026-01-15',
    },
    {
        id: '2',
        schoolId: '2',
        schoolName: 'Colegio Montessori Barcelona',
        schoolCity: 'Barcelona',
        authorName: 'Carlos R.',
        relationship: 'Padre de alumna de Infantil',
        yearsAtSchool: 2,
        ratingOverall: 5,
        ratingTeachers: 5,
        ratingFacilities: 4,
        ratingEducation: 5,
        ratingCommunication: 5,
        ratingValue: 5,
        reviewText: 'La metodología Montessori ha sido perfecta para nuestra hija. Ha desarrollado una autonomía increíble y ama aprender. Las guías son profesionales certificadas y se nota.',
        wouldRecommend: true,
        verified: true,
        helpfulCount: 8,
        createdAt: '2026-02-01',
    },
    {
        id: '3',
        schoolId: '3',
        schoolName: 'CEIP Cervantes',
        schoolCity: 'Madrid',
        authorName: 'Ana L.',
        relationship: 'Madre de alumno de 3º Primaria',
        yearsAtSchool: 4,
        ratingOverall: 4,
        ratingTeachers: 5,
        ratingFacilities: 3,
        ratingEducation: 4,
        ratingCommunication: 4,
        reviewText: 'Un colegio público de calidad. Los profesores están muy comprometidos y el ambiente es familiar. Las instalaciones podrían mejorar, pero la educación que reciben es excelente.',
        wouldRecommend: true,
        verified: true,
        helpfulCount: 15,
        createdAt: '2026-01-28',
    },
];

export function getReviewsBySchoolId(schoolId: string): Review[] {
    return reviews.filter(review => review.schoolId === schoolId);
}

export function getLatestReviews(limit: number = 3): Review[] {
    return reviews
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit);
}
