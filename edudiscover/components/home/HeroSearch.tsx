'use client';

import { Search, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/buscar?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Encuentra el colegio perfecto para tu hijo
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-primary-100">
                        Descubre, compara y contacta con los mejores colegios de España
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="mb-8">
                        <div className="flex flex-col md:flex-row gap-3 max-w-3xl mx-auto">
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Nombre del colegio o localización"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                />
                            </div>
                            <button type="submit" className="btn-primary bg-accent-500 hover:bg-accent-600 focus:ring-accent-400 px-8 py-4 whitespace-nowrap">
                                Buscar
                            </button>
                        </div>
                    </form>

                    {/* Quick Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors backdrop-blur-sm">
                            Guarderías
                        </button>
                        <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors backdrop-blur-sm">
                            Colegios
                        </button>
                        <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors backdrop-blur-sm">
                            Institutos
                        </button>
                        <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors backdrop-blur-sm">
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
