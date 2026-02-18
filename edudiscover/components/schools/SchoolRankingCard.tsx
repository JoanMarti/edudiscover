'use client';

import { SchoolRanking } from '@/lib/types/ranking';
import { RankingBadge } from './RankingBadge';
import { Star, TrendingUp, Award, Users } from 'lucide-react';

interface Props {
    ranking: SchoolRanking;
    variant?: 'compact' | 'detailed';
}

export function SchoolRankingCard({ ranking, variant = 'compact' }: Props) {
    const { overallScore, categoryScores, badges, parentReviews, academicRanking } = ranking;

    // Get score color
    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 80) return 'text-blue-600';
        if (score >= 70) return 'text-yellow-600';
        return 'text-gray-600';
    };

    // Get score background
    const getScoreBg = (score: number) => {
        if (score >= 90) return 'bg-green-50 border-green-200';
        if (score >= 80) return 'bg-blue-50 border-blue-200';
        if (score >= 70) return 'bg-yellow-50 border-yellow-200';
        return 'bg-gray-50 border-gray-200';
    };

    if (variant === 'compact') {
        return (
            <div className="flex items-center gap-3 flex-wrap">
                {/* Overall Score */}
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${getScoreBg(overallScore)}`}>
                    <TrendingUp size={16} className={getScoreColor(overallScore)} />
                    <span className={`font-bold ${getScoreColor(overallScore)}`}>
                        {overallScore.toFixed(1)}
                    </span>
                    <span className="text-xs text-gray-500">/ 100</span>
                </div>

                {/* Parent Rating */}
                {parentReviews.aggregatedRating > 0 && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg">
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <span className="font-semibold text-amber-700">
                            {parentReviews.aggregatedRating.toFixed(1)}
                        </span>
                        <span className="text-xs text-gray-500">
                            ({parentReviews.totalReviews})
                        </span>
                    </div>
                )}

                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                    {badges.slice(0, 3).map(badge => (
                        <RankingBadge key={badge.id} badge={badge} size="sm" />
                    ))}
                    {badges.length > 3 && (
                        <span className="text-xs text-gray-500">+{badges.length - 3} más</span>
                    )}
                </div>
            </div>
        );
    }

    // Detailed variant
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
            {/* Header with Overall Score */}
            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className={`text-4xl font-bold ${getScoreColor(overallScore)}`}>
                            {overallScore.toFixed(1)}
                        </div>
                        <div className="text-sm text-gray-500">
                            <div>Puntuación Global</div>
                            <div className="text-xs">sobre 100</div>
                        </div>
                    </div>

                    {/* Academic Ranking */}
                    {academicRanking.nationalRank && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Award size={16} />
                            <span>
                                #{academicRanking.nationalRank} Nacional
                                {academicRanking.cityRank && ` • #${academicRanking.cityRank} en la ciudad`}
                            </span>
                        </div>
                    )}
                </div>

                {/* Parent Reviews */}
                {parentReviews.aggregatedRating > 0 && (
                    <div className="text-right">
                        <div className="flex items-center gap-1 justify-end mb-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    className={`${i < Math.floor(parentReviews.aggregatedRating)
                                            ? 'text-amber-400 fill-amber-400'
                                            : 'text-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="text-sm text-gray-600">
                            <Users size={14} className="inline mr-1" />
                            {parentReviews.totalReviews} valoraciones
                        </div>
                    </div>
                )}
            </div>

            {/* Category Scores */}
            <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Puntuaciones por Categoría</h4>
                <div className="space-y-2">
                    {Object.entries(categoryScores).map(([key, score]) => {
                        const labels: Record<string, string> = {
                            academicExcellence: 'Excelencia Académica',
                            facilities: 'Instalaciones',
                            teachingQuality: 'Calidad Docente',
                            extracurriculars: 'Actividades Extracurriculares',
                            parentSatisfaction: 'Satisfacción de Padres'
                        };

                        return (
                            <div key={key}>
                                <div className="flex items-center justify-between text-sm mb-1">
                                    <span className="text-gray-700">{labels[key]}</span>
                                    <span className={`font-semibold ${getScoreColor(score)}`}>
                                        {score.toFixed(0)}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full transition-all ${score >= 90 ? 'bg-green-500' :
                                                score >= 80 ? 'bg-blue-500' :
                                                    score >= 70 ? 'bg-yellow-500' :
                                                        'bg-gray-400'
                                            }`}
                                        style={{ width: `${score}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Badges */}
            {badges.length > 0 && (
                <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Reconocimientos</h4>
                    <div className="flex flex-wrap gap-2">
                        {badges.map(badge => (
                            <RankingBadge key={badge.id} badge={badge} size="md" />
                        ))}
                    </div>
                </div>
            )}

            {/* Review Sources */}
            {(parentReviews.googleMaps || parentReviews.micole) && (
                <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Fuentes de Valoraciones</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {parentReviews.googleMaps && (
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">Google Maps</div>
                                <div className="flex items-center gap-1 text-amber-600">
                                    <Star size={14} className="fill-amber-600" />
                                    {parentReviews.googleMaps.rating.toFixed(1)} ({parentReviews.googleMaps.totalReviews})
                                </div>
                            </div>
                        )}
                        {parentReviews.micole && (
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">Micole</div>
                                <div className="flex items-center gap-1 text-amber-600">
                                    <Star size={14} className="fill-amber-600" />
                                    {parentReviews.micole.rating.toFixed(1)} ({parentReviews.micole.totalReviews})
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
