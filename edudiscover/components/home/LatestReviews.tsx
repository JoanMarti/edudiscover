import { Star } from 'lucide-react';
import { getLatestReviews } from '@/lib/data/reviews';
import { formatDate, formatRating } from '@/lib/utils';
import Link from 'next/link';

export default function LatestReviews() {
    const reviews = getLatestReviews(3);

    return (
        <section className="py-16">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Opiniones recientes de familias
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="card p-6">
                            {/* School Info */}
                            <div className="mb-4">
                                <Link href={`/${review.schoolId}`} className="font-semibold text-lg hover:text-primary-600 transition-colors">
                                    {review.schoolName}
                                </Link>
                                <p className="text-sm text-gray-600">{review.schoolCity}</p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={i < review.ratingOverall ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                                        />
                                    ))}
                                </div>
                                <span className="font-semibold">{formatRating(review.ratingOverall)}</span>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-700 mb-4 line-clamp-3">
                                "{review.reviewText}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-between text-sm">
                                <div>
                                    <p className="font-medium text-gray-900">{review.authorName}</p>
                                    <p className="text-gray-600">{review.relationship}</p>
                                </div>
                                {review.verified && (
                                    <span className="text-green-600 text-xs font-medium">✓ Verificada</span>
                                )}
                            </div>

                            {/* Date */}
                            <p className="text-xs text-gray-500 mt-3">{formatDate(review.createdAt)}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link href="/opiniones" className="text-primary-600 hover:text-primary-700 font-medium">
                        Ver todas las opiniones →
                    </Link>
                </div>
            </div>
        </section>
    );
}
