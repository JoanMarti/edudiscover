'use client';

import { Search, MapPin, ChevronDown, School } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useCountry } from '@/lib/contexts/CountryContext';
import { cities } from '@/lib/data/cities';

export default function HeroSearch() {
    const t = useTranslations('Home');
    const tCommon = useTranslations('Common');
    const { selectedCountry, setIsOpen } = useCountry();
    const router = useRouter();

    const [schoolQuery, setSchoolQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (schoolQuery.trim()) params.append('q', schoolQuery.trim());
        if (selectedCity) params.append('city', selectedCity);
        params.append('country', selectedCountry.code);

        router.push(`/buscar?${params.toString()}`);
    };

    return (
        <section className="relative bg-[#FFF0F1] py-20 lg:py-32 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-100/40 to-transparent lg:block hidden" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-60 -translate-x-1/2 translate-y-1/2" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-primary-100 text-primary-700 text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:bg-primary-50 transition-colors"
                    >
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <span>Explora colegios en {selectedCountry.name}</span>
                    </button>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                        {t('heroTitle')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {t('heroSubtitle')}
                    </p>
                </div>

                {/* Airbnb-style Search Bar */}
                <form
                    onSubmit={handleSearch}
                    className="max-w-3xl mx-auto bg-white rounded-full p-2 shadow-floating flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-100 border border-gray-100 transition-shadow hover:shadow-card-hover"
                >
                    {/* Input: Keyword */}
                    <div className="flex-1 w-full px-6 py-3 relative group">
                        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-0.5 ml-1">{tCommon('school')}</label>
                        <input
                            type="text"
                            placeholder={t('searchPlaceholder')}
                            className="w-full bg-transparent border-none p-0 text-gray-600 placeholder:text-gray-400 focus:ring-0 text-sm truncate focus:outline-none"
                            value={schoolQuery}
                            onChange={(e) => setSchoolQuery(e.target.value)}
                        />
                    </div>

                    {/* Input: Location/City */}
                    <div className="flex-1 w-full px-6 py-3 relative group">
                        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-0.5 ml-1">{tCommon('location')}</label>
                        <div className="relative">
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="w-full bg-transparent border-none p-0 text-gray-600 focus:ring-0 text-sm appearance-none cursor-pointer focus:outline-none pr-8"
                            >
                                <option value="">{tCommon('anyCity')}</option>
                                {cities.map(city => (
                                    <option key={city.slug} value={city.name}>{city.name}</option>
                                ))}
                            </select>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <ChevronDown size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="p-2 w-full md:w-auto">
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3.5 flex items-center justify-center gap-2 font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
                        >
                            <Search size={20} strokeWidth={2.5} />
                            <span className="md:hidden">{tCommon('search')}</span>
                        </button>
                    </div>
                </form>

                {/* Quick Filters / Tags */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {[tCommon('bestRated'), tCommon('bilingual'), 'Montessori', 'Bachillerato Internacional'].map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            className="px-4 py-2 bg-white/60 hover:bg-white backdrop-blur-sm rounded-full text-sm text-gray-600 border border-transparent hover:border-gray-200 transition-all shadow-sm"
                            onClick={() => {
                                console.log('Quick filter:', tag);
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
