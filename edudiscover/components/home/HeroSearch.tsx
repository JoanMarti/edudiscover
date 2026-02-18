'use client';

import { Search, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { cities } from '@/lib/data/cities';

export default function HeroSearch() {
    const t = useTranslations('Home');
    const [schoolQuery, setSchoolQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (schoolQuery.trim()) {
            params.set('q', schoolQuery.trim());
        }

        if (selectedCity) {
            params.set('city', selectedCity);
        }

        router.push(`/buscar?${params.toString()}`);
    };

    const handleQuickFilter = (filterType: string, filterValue: string | string[]) => {
        const params = new URLSearchParams();

        if (filterType === 'stages') {
            const stages = Array.isArray(filterValue) ? filterValue : [filterValue];
            params.set('stages', stages.join(','));
        } else if (filterType === 'types') {
            params.set('types', filterValue as string);
        }

        router.push(`/buscar?${params.toString()}`);
    };

    return (
        <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('heroTitle')}
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-primary-100">
                        {t('heroSubtitle')}
                    </p>

                    {/* Simplified Search Bar */}
                    <form onSubmit={handleSearch} className="mb-8">
                        <div className="bg-white rounded-xl shadow-2xl p-2 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-2">
                                {/* School Name Input */}
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder={t('searchPlaceholder')}
                                        value={schoolQuery}
                                        onChange={(e) => setSchoolQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 bg-gray-50"
                                    />
                                </div>

                                {/* Location Selector */}
                                <div className="flex-1 relative">
                                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 bg-gray-50 appearance-none cursor-pointer"
                                    >
                                        <option value="">Todas las ciudades</option>
                                        {cities.map(city => (
                                            <option key={city.slug} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                </div>

                                {/* Search Button */}
                                <button
                                    type="submit"
                                    className="btn-primary bg-accent-500 hover:bg-accent-600 focus:ring-accent-400 px-8 py-3 whitespace-nowrap"
                                >
                                    {t('searchButton')}
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Quick Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button
                            onClick={() => handleQuickFilter('stages', 'guarderia')}
                            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
                        >
                            Guarderías
                        </button>
                        <button
                            onClick={() => handleQuickFilter('stages', 'primaria')}
                            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
                        >
                            Colegios
                        </button>
                        <button
                            onClick={() => handleQuickFilter('stages', ['secundaria', 'bachillerato'])}
                            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
                        >
                            Institutos
                        </button>
                        <button
                            onClick={() => handleQuickFilter('types', 'internacional')}
                            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
                        >
                            Internacionales
                        </button>
                    </div>

                    {/* Trust Signal */}
                    <p className="text-primary-100 text-sm">
                        ✓ 12,500+ colegios en España · 45,000+ opiniones verificadas
                    </p>
                </div>
            </div>
        </section>
    );
}
