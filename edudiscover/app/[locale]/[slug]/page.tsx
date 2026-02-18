import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { getSchoolBySlug, SCHOOL_TYPES, STAGE_LABELS } from '@/lib/data/schools';
import { getReviewsBySchoolId } from '@/lib/data/reviews';
import { formatRating, formatPrice } from '@/lib/utils';
import EducationalStagesTimeline from '@/components/schools/EducationalStagesTimeline';
import { getSchoolRanking } from '@/lib/data/rankings';
import { SchoolRankingCard } from '@/components/schools/SchoolRankingCard';
import SchoolActions from '@/components/school/SchoolActions';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const school = getSchoolBySlug(params.slug);
    if (!school) {
        return { title: 'Colegio no encontrado | EduDiscover' };
    }
    const type = SCHOOL_TYPES[school.type] ?? school.type;
    const rating = formatRating(school.rating);
    return {
        title: `${school.name} — ${school.city} | EduDiscover`,
        description: `${school.name} es un colegio ${type.toLowerCase()} en ${school.city}. Valoración ${rating}/5 basada en ${school.reviewCount} opiniones. Consulta precios, instalaciones, metodología y más.`,
        keywords: `${school.name}, colegio ${school.city}, ${type} ${school.city}, opiniones ${school.name}`,
        openGraph: {
            title: `${school.name} | EduDiscover`,
            description: `Colegio ${type.toLowerCase()} en ${school.city}. Valoración ${rating}/5.`,
            type: 'website',
        },
    };
}

export default function SchoolProfilePage({ params }: { params: { slug: string } }) {
    const school = getSchoolBySlug(params.slug);

    if (!school) {
        notFound();
    }

    const reviews = getReviewsBySchoolId(school.id);

    return (
        <div className="bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="container-custom py-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">{school.name}</h1>
                            <div className="flex items-center gap-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Star className="fill-yellow-400 text-yellow-400" size={20} />
                                    <span className="font-semibold text-gray-900">{formatRating(school.rating)}</span>
                                    <span>({school.reviewCount} opiniones)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    <span>{school.address}, {school.city}</span>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded">
                                    {SCHOOL_TYPES[school.type]}
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                                    {school.ideario.charAt(0).toUpperCase() + school.ideario.slice(1)}
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                                    {school.gender.charAt(0).toUpperCase() + school.gender.slice(1)}
                                </span>
                            </div>
                        </div>
                        <SchoolActions schoolId={school.id} schoolSlug={school.slug} />
                    </div>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="container-custom py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 relative h-96 rounded-xl overflow-hidden">
                        <Image
                            src={school.images[0]}
                            alt={school.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                        {school.images.slice(1, 3).map((image, index) => (
                            <div key={index} className="relative h-44 rounded-xl overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`${school.name} ${index + 2}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-custom pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* General Information */}
                        <div className="card p-6">
                            <h2 className="text-2xl font-bold mb-4">Información general</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Tipo de centro</p>
                                    <p className="font-semibold">{SCHOOL_TYPES[school.type]}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Ideario</p>
                                    <p className="font-semibold">{school.ideario.charAt(0).toUpperCase() + school.ideario.slice(1)}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Género</p>
                                    <p className="font-semibold">{school.gender.charAt(0).toUpperCase() + school.gender.slice(1)}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Precio orientativo</p>
                                    <p className="font-semibold">{school.priceMonthly ? formatPrice(school.priceMonthly) : 'Gratuito'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Número de alumnos</p>
                                    <p className="font-semibold">{school.totalStudents}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Ratio alumnos/profesor</p>
                                    <p className="font-semibold">{school.teacherStudentRatio}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Año de fundación</p>
                                    <p className="font-semibold">{school.founded}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Idiomas</p>
                                    <p className="font-semibold">{school.languages.join(', ')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Ranking Section */}
                        {(() => {
                            const ranking = getSchoolRanking(school.slug);
                            return ranking ? (
                                <div className="card p-6">
                                    <h2 className="text-2xl font-bold mb-6">Rankings y Valoraciones</h2>
                                    <SchoolRankingCard ranking={ranking} variant="detailed" />
                                </div>
                            ) : null;
                        })()}

                        {/* Educational Project */}
                        <div className="card p-6">
                            <h2 className="text-2xl font-bold mb-4">Proyecto educativo</h2>
                            <p className="text-gray-700 mb-4">{school.description}</p>
                            {school.methodology && (
                                <div className="bg-primary-50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-1">Metodología</p>
                                    <p className="font-semibold text-primary-700">{school.methodology}</p>
                                </div>
                            )}
                        </div>

                        {/* Educational Stages */}
                        <div className="card p-6">
                            <h2 className="text-2xl font-bold mb-6">Etapas educativas</h2>
                            <EducationalStagesTimeline stages={school.stages} />
                        </div>

                        {/* Services */}
                        <div className="card p-6">
                            <h2 className="text-2xl font-bold mb-4">Servicios</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {school.services.map((service) => (
                                    <div key={service} className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Facilities */}
                        <div className="card p-6">
                            <h2 className="text-2xl font-bold mb-4">Instalaciones</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {school.facilities.map((facility) => (
                                    <div key={facility} className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>{facility}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reviews */}
                        <div className="card p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">Opiniones de familias</h2>
                                <div className="flex items-center gap-2">
                                    <Star className="fill-yellow-400 text-yellow-400" size={24} />
                                    <span className="text-2xl font-bold">{formatRating(school.rating)}</span>
                                    <span className="text-gray-600">/ 5</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <p className="font-semibold">{review.authorName}</p>
                                                <p className="text-sm text-gray-600">{review.relationship}</p>
                                            </div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className={i < review.ratingOverall ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700">{review.reviewText}</p>
                                        {review.verified && (
                                            <span className="inline-block mt-2 text-xs text-green-600 font-medium">✓ Opinión verificada</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="card p-6 sticky top-20">
                            <h3 className="font-semibold text-lg mb-4">Contactar con el colegio</h3>

                            <form className="space-y-4 mb-6">
                                <input
                                    type="text"
                                    placeholder="Nombre y apellidos"
                                    className="input"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input"
                                />
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    className="input"
                                />
                                <select className="input">
                                    <option>Etapa educativa</option>
                                    <option>Guardería</option>
                                    <option>Infantil</option>
                                    <option>Primaria</option>
                                    <option>Secundaria</option>
                                    <option>Bachillerato</option>
                                </select>
                                <textarea
                                    placeholder="Mensaje (opcional)"
                                    rows={4}
                                    className="input"
                                />
                                <button type="submit" className="btn-primary w-full">
                                    Enviar solicitud
                                </button>
                            </form>

                            <div className="border-t pt-6 space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone size={18} className="text-gray-600" />
                                    <a href={`tel:${school.phone}`} className="hover:text-primary-600">
                                        {school.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Mail size={18} className="text-gray-600" />
                                    <a href={`mailto:${school.email}`} className="hover:text-primary-600">
                                        {school.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Globe size={18} className="text-gray-600" />
                                    <a href={school.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
                                        Visitar web
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Responden en menos de 24h</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Sin compromiso</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Tus datos están seguros</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
