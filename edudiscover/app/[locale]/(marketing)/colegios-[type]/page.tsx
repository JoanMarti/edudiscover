import Link from 'next/link';
import Image from 'next/image';
import { School, MapPin, Star, TrendingUp, CheckCircle } from 'lucide-react';
import { schools, SCHOOL_TYPES } from '@/lib/data/schools';
import { formatRating, formatPrice } from '@/lib/utils';

const TYPES = {
    publico: {
        title: 'Colegios Públicos',
        description: 'Educación pública gratuita de calidad',
        icon: '🏫',
        benefits: [
            'Educación gratuita',
            'Amplia red de centros',
            'Profesorado funcionario',
            'Diversidad cultural',
            'Programas bilingües',
        ],
    },
    concertado: {
        title: 'Colegios Concertados',
        description: 'Centros privados con financiación pública',
        icon: '🎓',
        benefits: [
            'Cuotas reducidas',
            'Ideario propio',
            'Instalaciones modernas',
            'Actividades extraescolares',
            'Atención personalizada',
        ],
    },
    privado: {
        title: 'Colegios Privados',
        description: 'Educación privada premium',
        icon: '🏛️',
        benefits: [
            'Ratios reducidas',
            'Metodologías innovadoras',
            'Instalaciones de primer nivel',
            'Programas internacionales',
            'Seguimiento individualizado',
        ],
    },
    internacional: {
        title: 'Colegios Internacionales',
        description: 'Educación internacional y multilingüe',
        icon: '🌍',
        benefits: [
            'Currículum internacional',
            'Educación multilingüe',
            'Comunidad internacional',
            'Preparación universitaria global',
            'Instalaciones premium',
        ],
    },
};

export async function generateStaticParams() {
    return Object.keys(TYPES).map((type) => ({
        type,
    }));
}

export default function SchoolTypePage({ params }: { params: { type: string } }) {
    const typeData = TYPES[params.type as keyof typeof TYPES];

    if (!typeData) {
        return null;
    }

    const typeSchools = schools.filter(s => s.type === params.type);
    const avgRating = typeSchools.reduce((acc, s) => acc + s.rating, 0) / typeSchools.length;
    const avgPrice = typeSchools.reduce((acc, s) => acc + (s.priceMonthly || 0), 0) / typeSchools.length;

    // Group by city
    const schoolsByCity = typeSchools.reduce((acc, school) => {
        if (!acc[school.city]) {
            acc[school.city] = [];
        }
        acc[school.city].push(school);
        return acc;
    }, {} as Record<string, typeof schools>);

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <div className="text-6xl mb-4">{typeData.icon}</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {typeData.title}
                        </h1>
                        <p className="text-xl text-primary-100 mb-6">
                            {typeData.description}
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <School size={20} />
                                <span>{typeSchools.length} colegios</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                                <span>{formatRating(avgRating)} valoración media</span>
                            </div>
                            {avgPrice > 0 && (
                                <div className="flex items-center gap-2">
                                    <TrendingUp size={20} />
                                    <span>{formatPrice(avgPrice)} precio medio</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white border-b">
                <div className="container-custom py-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Ventajas de los {typeData.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {typeData.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2 p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                                <span className="text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Schools by City */}
            <div className="container-custom py-12">
                <h2 className="text-3xl font-bold mb-8">
                    {typeData.title} por ciudad
                </h2>

                <div className="space-y-12">
                    {Object.entries(schoolsByCity).map(([city, citySchools]) => (
                        <div key={city}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-semibold flex items-center gap-2">
                                    <MapPin className="text-primary-600" size={24} />
                                    {city}
                                </h3>
                                <Link
                                    href={`/buscar?city=${city}&type=${params.type}`}
                                    className="text-primary-600 hover:text-primary-700 font-medium"
                                >
                                    Ver todos →
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {citySchools.slice(0, 3).map(school => (
                                    <div key={school.id} className="card p-6">
                                        <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                                            <Image
                                                src={school.images[0]}
                                                alt={school.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Link href={`/${school.slug}`} className="hover:text-primary-600">
                                            <h4 className="font-semibold text-lg mb-2">{school.name}</h4>
                                        </Link>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                            <MapPin size={14} />
                                            <span>{school.neighborhood}</span>
                                        </div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                                                <span className="font-semibold">{formatRating(school.rating)}</span>
                                            </div>
                                            <span className="text-sm text-gray-600">({school.reviewCount})</span>
                                            {school.bilingual && (
                                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                                    Bilingüe
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-sm text-gray-600">
                                                {school.totalStudents} alumnos
                                            </span>
                                            <span className="font-semibold text-primary-600">
                                                {school.priceMonthly ? formatPrice(school.priceMonthly) : 'Gratuito'}
                                            </span>
                                        </div>
                                        <Link href={`/${school.slug}`} className="btn-primary w-full text-center">
                                            Ver perfil
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SEO Content */}
            <div className="bg-white">
                <div className="container-custom py-12">
                    <div className="prose max-w-none">
                        <h2>Guía completa de {typeData.title}</h2>
                        <p>
                            Los {typeData.title.toLowerCase()} representan una opción educativa importante en España.
                            En esta página encontrarás información detallada sobre {typeSchools.length} centros de este tipo
                            distribuidos por toda España.
                        </p>

                        <h3>Características principales</h3>
                        <p>
                            Los {typeData.title.toLowerCase()} se caracterizan por {typeData.description.toLowerCase()}.
                            Con una valoración media de {formatRating(avgRating)} estrellas, estos centros ofrecen
                            una educación de calidad adaptada a las necesidades de cada familia.
                        </p>

                        {params.type === 'publico' && (
                            <>
                                <h3>Ventajas de la educación pública</h3>
                                <p>
                                    La educación pública en España es completamente gratuita y ofrece una formación de calidad
                                    garantizada por el Estado. Los colegios públicos cuentan con profesorado funcionario altamente
                                    cualificado y siguen el currículum oficial establecido por el Ministerio de Educación.
                                </p>
                            </>
                        )}

                        {params.type === 'concertado' && (
                            <>
                                <h3>¿Qué es un colegio concertado?</h3>
                                <p>
                                    Los colegios concertados son centros privados que reciben financiación pública, lo que permite
                                    ofrecer educación a precios más reducidos que los colegios privados. Estos centros suelen tener
                                    un ideario propio (religioso o laico) y ofrecen servicios adicionales como actividades extraescolares.
                                </p>
                            </>
                        )}

                        {params.type === 'privado' && (
                            <>
                                <h3>Educación privada de calidad</h3>
                                <p>
                                    Los colegios privados ofrecen una educación premium con ratios reducidas, metodologías innovadoras
                                    e instalaciones de primer nivel. Estos centros suelen implementar programas educativos internacionales
                                    y ofrecen un seguimiento muy personalizado de cada alumno.
                                </p>
                            </>
                        )}

                        {params.type === 'internacional' && (
                            <>
                                <h3>Educación internacional</h3>
                                <p>
                                    Los colegios internacionales ofrecen currículums reconocidos a nivel mundial como el IB (Bachillerato
                                    Internacional), el sistema británico o americano. Estos centros preparan a los estudiantes para
                                    acceder a universidades de todo el mundo y ofrecen una educación verdaderamente multilingüe.
                                </p>
                            </>
                        )}

                        <h3>Cómo elegir el mejor {typeData.title.toLowerCase().slice(0, -1)}</h3>
                        <p>
                            A la hora de elegir un colegio, es importante considerar factores como la ubicación, el proyecto
                            educativo, las instalaciones, las actividades extraescolares y, por supuesto, las opiniones de
                            otras familias. En EduDiscover te ayudamos a comparar todos estos aspectos para que tomes la
                            mejor decisión.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        ¿Buscas el mejor {typeData.title.toLowerCase().slice(0, -1)} para tus hijos?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8">
                        Compara colegios, lee opiniones y encuentra el centro perfecto
                    </p>
                    <Link href="/buscar" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
                        Buscar colegios
                    </Link>
                </div>
            </div>
        </div>
    );
}
