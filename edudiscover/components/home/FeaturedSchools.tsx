import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Heart, GitCompare } from 'lucide-react';
import { getFeaturedSchools } from '@/lib/data/schools';
import { formatRating } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function FeaturedSchools() {
    const schools = getFeaturedSchools();
    const t = useTranslations('Common');
    const tTypes = useTranslations('SchoolTypes');
    const tStages = useTranslations('Stages');

    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            {t('featuredSchools')}
                        </h2>
                        <p className="text-gray-600">{t('featuredSchoolsSubtitle')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {schools.map((school) => (
                        <div key={school.id} className="card overflow-hidden group">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={school.images[0]}
                                    alt={school.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                                    <Heart size={18} className="text-gray-600" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <Link href={`/${school.slug}`} className="hover:text-primary-600 transition-colors">
                                            <h3 className="font-semibold text-lg mb-1">{school.name}</h3>
                                        </Link>
                                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                                            <MapPin size={14} />
                                            <span>{school.neighborhood}, {school.city}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{formatRating(school.rating)}</span>
                                    </div>
                                    <span className="text-sm text-gray-600">({school.reviewCount} {t('reviews')})</span>
                                </div>

                                {/* Type & Price */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                                        {/* Use translation for type, fallback to capitalized raw value if missing */}
                                        {tTypes.has(school.type) ? tTypes(school.type) : school.type.charAt(0).toUpperCase() + school.type.slice(1)}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-700">{school.priceRange}</span>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {school.stages.slice(0, 2).map((stage) => (
                                        <span key={stage} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                            {tStages.has(stage) ? tStages(stage) : stage.charAt(0).toUpperCase() + stage.slice(1)}
                                        </span>
                                    ))}
                                    {school.bilingual && (
                                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                            {t('bilingual')}
                                        </span>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Link href={`/${school.slug}`} className="btn-primary flex-1 text-sm py-2">
                                        {t('viewProfile')}
                                    </Link>
                                    <button className="btn-secondary p-2">
                                        <GitCompare size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
