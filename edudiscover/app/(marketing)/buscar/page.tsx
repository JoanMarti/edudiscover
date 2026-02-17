'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, SlidersHorizontal, MapPin, Star, Heart, GitCompare, X, ChevronDown } from 'lucide-react';
import { schools, SCHOOL_TYPES, STAGE_LABELS } from '@/lib/data/schools';
import { cities } from '@/lib/data/cities';
import { formatRating, formatPrice } from '@/lib/utils';

type ViewMode = 'list' | 'grid';
type SortOption = 'relevance' | 'rating' | 'price-asc' | 'price-desc' | 'name';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';
    const initialCity = searchParams.get('city') || '';

    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [sortBy, setSortBy] = useState<SortOption>('relevance');
    const [showFilters, setShowFilters] = useState(true);

    // Filters
    const [selectedCity, setSelectedCity] = useState(initialCity);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedStages, setSelectedStages] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [minRating, setMinRating] = useState(0);
    const [bilingual, setBilingual] = useState(false);
    const [selectedMethodologies, setSelectedMethodologies] = useState<string[]>([]);

    // Filter and sort results
    const filteredSchools = useMemo(() => {
        let results = schools.filter(school => {
            // Search query
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesName = school.name.toLowerCase().includes(query);
                const matchesCity = school.city.toLowerCase().includes(query);
                const matchesNeighborhood = school.neighborhood.toLowerCase().includes(query);
                if (!matchesName && !matchesCity && !matchesNeighborhood) return false;
            }

            // City filter
            if (selectedCity && school.city !== selectedCity) return false;

            // Type filter
            if (selectedTypes.length > 0 && !selectedTypes.includes(school.type)) return false;

            // Stages filter
            if (selectedStages.length > 0) {
                const hasStage = selectedStages.some(stage => school.stages.includes(stage));
                if (!hasStage) return false;
            }

            // Price filter
            const price = school.priceMonthly || 0;
            if (price < priceRange[0] || price > priceRange[1]) return false;

            // Rating filter
            if (school.rating < minRating) return false;

            // Bilingual filter
            if (bilingual && !school.bilingual) return false;

            // Methodology filter
            if (selectedMethodologies.length > 0) {
                if (!school.methodology || !selectedMethodologies.includes(school.methodology)) return false;
            }

            return true;
        });

        // Sort results
        switch (sortBy) {
            case 'rating':
                results.sort((a, b) => b.rating - a.rating);
                break;
            case 'price-asc':
                results.sort((a, b) => (a.priceMonthly || 0) - (b.priceMonthly || 0));
                break;
            case 'price-desc':
                results.sort((a, b) => (b.priceMonthly || 0) - (a.priceMonthly || 0));
                break;
            case 'name':
                results.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Relevance - keep original order
                break;
        }

        return results;
    }, [searchQuery, selectedCity, selectedTypes, selectedStages, priceRange, minRating, bilingual, selectedMethodologies, sortBy]);

    const toggleType = (type: string) => {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const toggleStage = (stage: string) => {
        setSelectedStages(prev =>
            prev.includes(stage) ? prev.filter(s => s !== stage) : [...prev, stage]
        );
    };

    const toggleMethodology = (methodology: string) => {
        setSelectedMethodologies(prev =>
            prev.includes(methodology) ? prev.filter(m => m !== methodology) : [...prev, methodology]
        );
    };

    const clearFilters = () => {
        setSelectedCity('');
        setSelectedTypes([]);
        setSelectedStages([]);
        setPriceRange([0, 1000]);
        setMinRating(0);
        setBilingual(false);
        setSelectedMethodologies([]);
    };

    const activeFiltersCount =
        (selectedCity ? 1 : 0) +
        selectedTypes.length +
        selectedStages.length +
        (minRating > 0 ? 1 : 0) +
        (bilingual ? 1 : 0) +
        selectedMethodologies.length;

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Search Header */}
            <div className="bg-white border-b sticky top-16 z-10">
                <div className="container-custom py-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Bar */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Buscar colegios..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="btn-secondary px-6 py-3 flex items-center gap-2"
                        >
                            <SlidersHorizontal size={20} />
                            <span>Filtros</span>
                            {activeFiltersCount > 0 && (
                                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                                    {activeFiltersCount}
                                </span>
                            )}
                        </button>

                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="input px-4 py-3 min-w-[200px]"
                        >
                            <option value="relevance">Más relevantes</option>
                            <option value="rating">Mejor valorados</option>
                            <option value="price-asc">Precio: menor a mayor</option>
                            <option value="price-desc">Precio: mayor a menor</option>
                            <option value="name">Nombre A-Z</option>
                        </select>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-900">{filteredSchools.length}</span> colegios encontrados
                            {searchQuery && <span> para "{searchQuery}"</span>}
                        </p>
                        {activeFiltersCount > 0 && (
                            <button
                                onClick={clearFilters}
                                className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
                            >
                                <X size={16} />
                                Limpiar filtros
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="container-custom py-6">
                <div className="flex gap-6">
                    {/* Filters Sidebar */}
                    {showFilters && (
                        <aside className="w-80 flex-shrink-0">
                            <div className="bg-white rounded-lg p-6 sticky top-32 space-y-6">
                                <h3 className="font-semibold text-lg">Filtros</h3>

                                {/* City Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Ciudad
                                    </label>
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        className="input w-full"
                                    >
                                        <option value="">Todas las ciudades</option>
                                        {cities.map(city => (
                                            <option key={city.slug} value={city.name}>
                                                {city.name} ({city.schoolCount})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Type Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Tipo de centro
                                    </label>
                                    <div className="space-y-2">
                                        {Object.entries(SCHOOL_TYPES).map(([key, label]) => (
                                            <label key={key} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedTypes.includes(key)}
                                                    onChange={() => toggleType(key)}
                                                    className="rounded text-primary-600 focus:ring-primary-500"
                                                />
                                                <span className="text-sm">{label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Stages Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Etapas educativas
                                    </label>
                                    <div className="space-y-2">
                                        {Object.entries(STAGE_LABELS).map(([key, label]) => (
                                            <label key={key} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedStages.includes(key)}
                                                    onChange={() => toggleStage(key)}
                                                    className="rounded text-primary-600 focus:ring-primary-500"
                                                />
                                                <span className="text-sm">{label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Precio mensual
                                    </label>
                                    <div className="space-y-2">
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            step="50"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Gratuito</span>
                                            <span>{formatPrice(priceRange[1])}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Valoración mínima
                                    </label>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(rating => (
                                            <button
                                                key={rating}
                                                onClick={() => setMinRating(rating === minRating ? 0 : rating)}
                                                className={`p-1 ${rating <= minRating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            >
                                                <Star size={24} fill={rating <= minRating ? 'currentColor' : 'none'} />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Bilingual */}
                                <div>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={bilingual}
                                            onChange={(e) => setBilingual(e.target.checked)}
                                            className="rounded text-primary-600 focus:ring-primary-500"
                                        />
                                        <span className="text-sm font-medium">Solo colegios bilingües</span>
                                    </label>
                                </div>

                                {/* Methodology */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Metodología
                                    </label>
                                    <div className="space-y-2">
                                        {['Montessori', 'Waldorf', 'Reggio Emilia', 'IB', 'British', 'American'].map(method => (
                                            <label key={method} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedMethodologies.includes(method)}
                                                    onChange={() => toggleMethodology(method)}
                                                    className="rounded text-primary-600 focus:ring-primary-500"
                                                />
                                                <span className="text-sm">{method}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    )}

                    {/* Results */}
                    <div className="flex-1">
                        {filteredSchools.length === 0 ? (
                            <div className="bg-white rounded-lg p-12 text-center">
                                <p className="text-gray-600 text-lg mb-4">
                                    No se encontraron colegios con los filtros seleccionados
                                </p>
                                <button onClick={clearFilters} className="btn-primary">
                                    Limpiar filtros
                                </button>
                            </div>
                        ) : (
                            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
                                {filteredSchools.map(school => (
                                    <div key={school.id} className="card p-6 hover:shadow-card-hover transition-shadow">
                                        <div className="flex gap-4">
                                            {/* Image */}
                                            <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                                                <Image
                                                    src={school.images[0]}
                                                    alt={school.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex-1">
                                                        <Link href={`/${school.slug}`} className="hover:text-primary-600">
                                                            <h3 className="font-semibold text-lg mb-1">{school.name}</h3>
                                                        </Link>
                                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                                            <MapPin size={14} />
                                                            <span>{school.neighborhood}, {school.city}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                                                            <Heart size={20} className="text-gray-400" />
                                                        </button>
                                                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                                                            <GitCompare size={20} className="text-gray-400" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="fill-yellow-400 text-yellow-400" size={16} />
                                                        <span className="font-semibold">{formatRating(school.rating)}</span>
                                                    </div>
                                                    <span className="text-sm text-gray-600">({school.reviewCount} opiniones)</span>
                                                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                                                        {SCHOOL_TYPES[school.type]}
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm text-gray-600">
                                                        {school.stages.slice(0, 2).map(stage => STAGE_LABELS[stage]).join(' · ')}
                                                    </div>
                                                    <div className="font-semibold text-lg text-primary-600">
                                                        {school.priceMonthly ? formatPrice(school.priceMonthly) : 'Gratuito'}
                                                    </div>
                                                </div>

                                                <Link href={`/${school.slug}`} className="btn-primary mt-4 w-full text-center">
                                                    Ver perfil
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
