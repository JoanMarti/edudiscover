import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Star, School, Users, TrendingUp } from 'lucide-react';
import { getCityBySlug, cities } from '@/lib/data/cities';
import { schools, SCHOOL_TYPES } from '@/lib/data/schools';
import { formatRating, formatPrice } from '@/lib/utils';

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }));
}

export default function CityPage({ params }: { params: { city: string } }) {
    const city = getCityBySlug(params.city);

    if (!city) {
        notFound();
    }

    const citySchools = schools.filter(s => s.city === city.name);
    const avgRating = citySchools.reduce((acc, s) => acc + s.rating, 0) / citySchools.length;
    const publicSchools = citySchools.filter(s => s.type === 'publico').length;
    const privateSchools = citySchools.filter(s => s.type === 'privado').length;
    const concertadoSchools = citySchools.filter(s => s.type === 'concertado').length;

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative container-custom h-full flex flex-col justify-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Colegios en {city.name}
                    </h1>
                    <p className="text-xl text-primary-100 mb-6">
                        Encuentra el mejor colegio para tus hijos en {city.name}, {city.province}
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <School size={20} />
                            <span>{city.schoolCount} colegios</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star size={20} className="fill-yellow-400 text-yellow-400" />
                            <span>{formatRating(avgRating)} valoración media</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users size={20} />
                            <span>{publicSchools} públicos · {concertadoSchools} concertados · {privateSchools} privados</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white border-b">
                <div className="container-custom py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-1">{city.schoolCount}</div>
                            <div className="text-sm text-gray-600">Colegios totales</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-1">{publicSchools}</div>
                            <div className="text-sm text-gray-600">Colegios públicos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-1">{privateSchools}</div>
                            <div className="text-sm text-gray-600">Colegios privados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-1">{concertadoSchools}</div>
                            <div className="text-sm text-gray-600">Colegios concertados</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Schools List */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Todos los colegios</h2>
                            <Link href={`/buscar?city=${city.name}`} className="text-primary-600 hover:text-primary-700 font-medium">
                                Ver todos con filtros →
                            </Link>
                        </div>

                        <div className="space-y-6">
                            {citySchools.map(school => (
                                <div key={school.id} className="card p-6">
                                    <div className="flex gap-4">
                                        <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                                            <Image
                                                src={school.images[0]}
                                                alt={school.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <Link href={`/${school.slug}`} className="hover:text-primary-600">
                                                <h3 className="font-semibold text-lg mb-1">{school.name}</h3>
                                            </Link>
                                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                                <MapPin size={14} />
                                                <span>{school.neighborhood}</span>
                                            </div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Star className="fill-yellow-400 text-yellow-400" size={16} />
                                                    <span className="font-semibold">{formatRating(school.rating)}</span>
                                                </div>
                                                <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                                                    {SCHOOL_TYPES[school.type]}
                                                </span>
                                                {school.bilingual && (
                                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                                        Bilingüe
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-600">
                                                    {school.totalStudents} alumnos
                                                </span>
                                                <span className="font-semibold text-primary-600">
                                                    {school.priceMonthly ? formatPrice(school.priceMonthly) : 'Gratuito'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            {/* Browse by Type */}
                            <div className="card p-6">
                                <h3 className="font-semibold text-lg mb-4">Buscar por tipo</h3>
                                <div className="space-y-3">
                                    <Link
                                        href={`/buscar?city=${city.name}&type=publico`}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <span>Colegios públicos</span>
                                        <span className="text-primary-600 font-semibold">{publicSchools}</span>
                                    </Link>
                                    <Link
                                        href={`/buscar?city=${city.name}&type=concertado`}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <span>Colegios concertados</span>
                                        <span className="text-primary-600 font-semibold">{concertadoSchools}</span>
                                    </Link>
                                    <Link
                                        href={`/buscar?city=${city.name}&type=privado`}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <span>Colegios privados</span>
                                        <span className="text-primary-600 font-semibold">{privateSchools}</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Other Cities */}
                            <div className="card p-6">
                                <h3 className="font-semibold text-lg mb-4">Otras ciudades</h3>
                                <div className="space-y-2">
                                    {cities
                                        .filter(c => c.slug !== city.slug)
                                        .slice(0, 5)
                                        .map(c => (
                                            <Link
                                                key={c.slug}
                                                href={`/colegios-en-${c.slug}`}
                                                className="block text-primary-600 hover:text-primary-700 text-sm"
                                            >
                                                Colegios en {c.name} ({c.schoolCount})
                                            </Link>
                                        ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="card p-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                                <h3 className="font-semibold text-lg mb-2">¿No encuentras lo que buscas?</h3>
                                <p className="text-sm text-primary-100 mb-4">
                                    Usa nuestros filtros avanzados para encontrar el colegio perfecto
                                </p>
                                <Link href="/buscar" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 w-full text-center">
                                    Búsqueda avanzada
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO Content */}
                <div className="mt-12 prose max-w-none">
                    <h2>Guía de colegios en {city.name}</h2>
                    <p>
                        {city.name} cuenta con una amplia oferta educativa que incluye {city.schoolCount} colegios de diferentes tipos y metodologías.
                        En esta página encontrarás información detallada sobre todos los centros educativos de {city.name}, desde colegios públicos
                        hasta centros privados e internacionales.
                    </p>
                    <h3>Tipos de colegios en {city.name}</h3>
                    <ul>
                        <li><strong>Colegios públicos:</strong> {publicSchools} centros de educación pública gratuita</li>
                        <li><strong>Colegios concertados:</strong> {concertadoSchools} centros con financiación mixta</li>
                        <li><strong>Colegios privados:</strong> {privateSchools} centros de educación privada</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
