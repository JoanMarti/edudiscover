'use client';

import { useCountry } from '@/lib/contexts/CountryContext';
import { COUNTRIES, Country } from '@/lib/data/countries';
import { X, Search, Globe } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function CountrySelector() {
    const { isOpen, setIsOpen, selectedCountry, setSelectedCountry } = useCountry();
    const [searchQuery, setSearchQuery] = useState('');

    if (!isOpen) return null;

    const filteredCountries = useMemo(() => {
        if (!searchQuery) return COUNTRIES;
        return COUNTRIES.filter(c =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.code.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    // Group by region
    const groupedCountries = useMemo(() => {
        const groups: Record<string, Country[]> = {};
        filteredCountries.forEach(c => {
            if (!groups[c.region]) groups[c.region] = [];
            groups[c.region].push(c);
        });
        return groups;
    }, [filteredCountries]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <div className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <Globe className="text-primary-500" />
                        Selecciona tu región
                    </h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Search */}
                <div className="px-8 py-4 bg-gray-50/50">
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar país..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                            autoFocus
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-8 py-6">
                    {Object.entries(groupedCountries).length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            No se encontraron países
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Object.entries(groupedCountries).map(([region, countries]) => (
                                <div key={region} className="break-inside-avoid">
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                        {region}
                                    </h3>
                                    <div className="space-y-2">
                                        {countries.map(country => (
                                            <button
                                                key={country.code}
                                                onClick={() => setSelectedCountry(country)}
                                                className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${selectedCountry.code === country.code
                                                        ? 'bg-primary-50 border border-primary-200 shadow-sm'
                                                        : 'hover:bg-gray-50 border border-transparent hover:border-gray-200'
                                                    }`}
                                            >
                                                <span className="text-3xl">{country.flag}</span>
                                                <span className={`font-medium ${selectedCountry.code === country.code ? 'text-primary-700' : 'text-gray-700'
                                                    }`}>
                                                    {country.name}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
