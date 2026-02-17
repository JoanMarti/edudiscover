export interface City {
    id: string;
    name: string;
    slug: string;
    province: string;
    schoolCount: number;
    latitude: number;
    longitude: number;
    image: string;
}

export const cities: City[] = [
    {
        id: '1',
        name: 'Madrid',
        slug: 'madrid',
        province: 'Madrid',
        schoolCount: 1245,
        latitude: 40.4168,
        longitude: -3.7038,
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&h=400&fit=crop',
    },
    {
        id: '2',
        name: 'Barcelona',
        slug: 'barcelona',
        province: 'Barcelona',
        schoolCount: 987,
        latitude: 41.3851,
        longitude: 2.1734,
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop',
    },
    {
        id: '3',
        name: 'Valencia',
        slug: 'valencia',
        province: 'Valencia',
        schoolCount: 456,
        latitude: 39.4699,
        longitude: -0.3763,
        image: 'https://images.unsplash.com/photo-1590419690008-905895e8fe0d?w=600&h=400&fit=crop',
    },
    {
        id: '4',
        name: 'Sevilla',
        slug: 'sevilla',
        province: 'Sevilla',
        schoolCount: 378,
        latitude: 37.3891,
        longitude: -5.9845,
        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop',
    },
    {
        id: '5',
        name: 'Zaragoza',
        slug: 'zaragoza',
        province: 'Zaragoza',
        schoolCount: 298,
        latitude: 41.6488,
        longitude: -0.8891,
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&h=400&fit=crop',
    },
    {
        id: '6',
        name: 'Málaga',
        slug: 'malaga',
        province: 'Málaga',
        schoolCount: 267,
        latitude: 36.7213,
        longitude: -4.4214,
        image: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=600&h=400&fit=crop',
    },
    {
        id: '7',
        name: 'Bilbao',
        slug: 'bilbao',
        province: 'Vizcaya',
        schoolCount: 234,
        latitude: 43.2630,
        longitude: -2.9350,
        image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?w=600&h=400&fit=crop',
    },
    {
        id: '8',
        name: 'Alicante',
        slug: 'alicante',
        province: 'Alicante',
        schoolCount: 189,
        latitude: 38.3452,
        longitude: -0.4810,
        image: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=600&h=400&fit=crop',
    },
];

export function getCityBySlug(slug: string): City | undefined {
    return cities.find(city => city.slug === slug);
}

export function getTopCities(limit: number = 8): City[] {
    return cities.slice(0, limit);
}
