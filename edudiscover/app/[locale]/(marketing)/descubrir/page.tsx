import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, GraduationCap, Globe, School, Search } from 'lucide-react';
import { getTopCities } from '@/lib/data/cities';
import DiscoverHero from '@/components/discover/DiscoverHero';
import DiscoverByStage from '@/components/discover/DiscoverByStage';
import CuratedCollections from '@/components/discover/CuratedCollections';

export const metadata: Metadata = {
    title: 'Descubrir Colegios | EduDiscover',
    description: 'Explora más de 12.500 colegios en España por tipo, ciudad, metodología o etapa educativa. Encuentra el colegio perfecto para tu familia.',
};

const schoolTypes = [
    {
        id: 'publico',
        name: 'Colegios Públicos',
        description: 'Educación gratuita y de calidad garantizada por el Estado.',
        count: '2.450',
        icon: School,
        color: 'bg-blue-600',
        lightColor: 'bg-blue-50 text-blue-700',
        href: '/colegios-publico',
    },
    {
        id: 'concertado',
        name: 'Colegios Concertados',
        description: 'Gestión privada con financiación pública. Lo mejor de ambos mundos.',
        count: '1.820',
        icon: Building2,
        color: 'bg-emerald-600',
        lightColor: 'bg-emerald-50 text-emerald-700',
        href: '/colegios-concertado',
    },
    {
        id: 'privado',
        name: 'Colegios Privados',
        description: 'Autonomía pedagógica y metodológica. Proyectos educativos únicos.',
        count: '1.180',
        icon: GraduationCap,
        color: 'bg-violet-600',
        lightColor: 'bg-violet-50 text-violet-700',
        href: '/colegios-privado',
    },
    {
        id: 'internacional',
        name: 'Colegios Internacionales',
        description: 'Currículum internacional, multilingüe y preparación global.',
        count: '385',
        icon: Globe,
        color: 'bg-orange-600',
        lightColor: 'bg-orange-50 text-orange-700',
        href: '/colegios-internacional',
    },
];

const methodologies = [
    { name: 'Montessori', count: 142, emoji: '🎨', href: '/colegios-montessori' },
    { name: 'Waldorf', count: 87, emoji: '🌱', href: '/colegios-waldorf' },
    { name: 'Reggio Emilia', count: 45, emoji: '🎭', href: '/colegios-reggio-emilia' },
    { name: 'IB', count: 120, emoji: '🌍', href: '/colegios-bachillerato-internacional-(ib)' },
    { name: 'Británico', count: 180, emoji: '🇬🇧', href: '/colegios-británico' },
    { name: 'Americano', count: 85, emoji: '🇺🇸', href: '/colegios-americano' },
    { name: 'Francés', count: 32, emoji: '🇫🇷', href: '/colegios-francés' },
    { name: 'Constructivista', count: 210, emoji: '🧩', href: '/colegios-constructivista' },
];

export default function DescubrirPage() {
    const cities = getTopCities(12);

    return (
        <div className="bg-white">
            {/* Hero */}
            <DiscoverHero />

            {/* Por tipo de centro */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Explora por tipo de centro
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Cada tipo de colegio tiene sus propias características. ¿Cuál encaja mejor con tu familia?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {schoolTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                                <Link
                                    key={type.id}
                                    href={type.href}
                                    className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 flex flex-col"
                                >
                                    <div className={`w-12 h-12 rounded-xl ${type.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary-700 transition-colors">
                                        {type.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                                        {type.description}
                                    </p>
                                    <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${type.lightColor}`}>
                                        {type.count} colegios
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Por etapa educativa */}
            <DiscoverByStage />

            {/* Por metodología */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Explora por metodología educativa
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            La metodología define cómo aprenden tus hijos. Descubre cuál se adapta mejor a su forma de ser.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                        {methodologies.map((m) => (
                            <Link
                                key={m.name}
                                href={m.href}
                                className="group flex flex-col items-center text-center p-4 rounded-2xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 hover:shadow-md transition-all duration-200"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                    {m.emoji}
                                </div>
                                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary-700 transition-colors leading-tight">
                                    {m.name}
                                </h3>
                                <p className="text-xs text-gray-500">{m.count}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Por ciudad */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Explora por ciudad
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Más de 50 ciudades en toda España. Encuentra los mejores colegios cerca de ti.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {cities.map((city) => (
                            <Link
                                key={city.id}
                                href={`/colegios-en-${city.slug}`}
                                className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <Image
                                    src={city.image}
                                    alt={city.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                                    <h3 className="font-bold text-sm leading-tight">{city.name}</h3>
                                    <p className="text-xs text-gray-300">{city.schoolCount} colegios</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/buscar"
                            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                        >
                            Ver todas las ciudades →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Colecciones curadas */}
            <CuratedCollections />

            {/* CTA final */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 md:p-16 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ¿No encuentras lo que buscas?
                        </h2>
                        <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
                            Usa nuestro buscador avanzado con más de 20 filtros para encontrar exactamente el colegio que necesitas.
                        </p>
                        <Link
                            href="/buscar"
                            className="inline-flex items-center gap-3 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg text-lg"
                        >
                            <Search size={22} />
                            Ir al buscador avanzado
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
