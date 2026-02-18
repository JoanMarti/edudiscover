import { SchoolRanking, CategoryScores, Badge, BadgeType } from '@/lib/types/ranking';

/**
 * Service for calculating and managing school rankings
 */
export class RankingService {
    /**
     * Normalize a value to 0-100 scale
     */
    private static normalizeScore(value: number, min: number, max: number): number {
        if (max === min) return 50; // Default to middle if no variation
        return Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
    }

    /**
     * Calculate academic excellence score (0-100)
     * Formula: Selectividad × 0.40 + Approval Rate × 0.30 + Ranking × 0.20 + Awards × 0.10
     */
    static calculateAcademicScore(ranking: SchoolRanking): number {
        const { academicRanking, awards } = ranking;
        let score = 0;
        let totalWeight = 0;

        // Selectividad score (0-10 scale normalized to 0-100)
        if (academicRanking.selectividadAverage !== undefined) {
            const selectividadScore = (academicRanking.selectividadAverage / 10) * 100;
            score += selectividadScore * 0.40;
            totalWeight += 0.40;
        }

        // Approval rate (already 0-100)
        if (academicRanking.approvalRate !== undefined) {
            score += academicRanking.approvalRate * 0.30;
            totalWeight += 0.30;
        }

        // National ranking (inverse - lower rank is better)
        if (academicRanking.nationalRank !== undefined) {
            // Assume top 1000 schools, normalize inversely
            const rankScore = this.normalizeScore(1000 - academicRanking.nationalRank, 0, 1000);
            score += rankScore * 0.20;
            totalWeight += 0.20;
        }

        // Awards count (normalize to max 10 awards = 100 score)
        const academicAwards = awards.filter(a => a.category === 'academic').length;
        const awardsScore = Math.min(100, (academicAwards / 10) * 100);
        score += awardsScore * 0.10;
        totalWeight += 0.10;

        // Normalize by actual weights used
        return totalWeight > 0 ? score / totalWeight : 0;
    }

    /**
     * Calculate parent satisfaction score (0-100)
     * Formula: Google Maps × 0.50 + Micole × 0.30 + Others × 0.20
     */
    static calculateParentSatisfactionScore(ranking: SchoolRanking): number {
        const { parentReviews } = ranking;
        let score = 0;
        let totalWeight = 0;

        // Google Maps (0-5 scale normalized to 0-100)
        if (parentReviews.googleMaps) {
            const googleScore = (parentReviews.googleMaps.rating / 5) * 100;
            score += googleScore * 0.50;
            totalWeight += 0.50;
        }

        // Micole (0-5 scale normalized to 0-100)
        if (parentReviews.micole) {
            const micoleScore = (parentReviews.micole.rating / 5) * 100;
            score += micoleScore * 0.30;
            totalWeight += 0.30;
        }

        // Other sources average
        if (parentReviews.other.length > 0) {
            const avgOtherRating = parentReviews.other.reduce((sum, r) => sum + r.rating, 0) / parentReviews.other.length;
            const otherScore = (avgOtherRating / 5) * 100;
            score += otherScore * 0.20;
            totalWeight += 0.20;
        }

        return totalWeight > 0 ? score / totalWeight : 0;
    }

    /**
     * Calculate overall score
     * Formula: Academic × 0.35 + Parent Satisfaction × 0.30 + Facilities × 0.15 + Teaching × 0.15 + Extra × 0.05
     */
    static calculateOverallScore(ranking: SchoolRanking): number {
        const { categoryScores } = ranking;

        return (
            categoryScores.academicExcellence * 0.35 +
            categoryScores.parentSatisfaction * 0.30 +
            categoryScores.facilities * 0.15 +
            categoryScores.teachingQuality * 0.15 +
            categoryScores.extracurriculars * 0.05
        );
    }

    /**
     * Assign badges based on ranking data
     */
    static assignBadges(ranking: SchoolRanking, allRankings: SchoolRanking[]): Badge[] {
        const badges: Badge[] = [];

        // Top 10% overall
        if (ranking.overallScore >= 90) {
            badges.push({
                id: `${ranking.schoolId}-top-rated`,
                type: 'top_rated',
                label: 'Top 10%',
                icon: '⭐',
                color: '#FFD700',
                description: 'Entre el 10% mejor valorado'
            });
        }

        // Top 100 Nacional
        if (ranking.academicRanking.nationalRank && ranking.academicRanking.nationalRank <= 100) {
            badges.push({
                id: `${ranking.schoolId}-top-100`,
                type: 'top_100_national',
                label: 'Top 100 Nacional',
                icon: '🏆',
                color: '#C0C0C0',
                description: 'Entre los 100 mejores de España'
            });
        }

        // Top 10 in city
        if (ranking.academicRanking.cityRank && ranking.academicRanking.cityRank <= 10) {
            badges.push({
                id: `${ranking.schoolId}-top-city`,
                type: 'top_10_city',
                label: 'Top 10 Ciudad',
                icon: '🌟',
                color: '#4A90E2',
                description: 'Entre los 10 mejores de la ciudad'
            });
        }

        // Award winner
        if (ranking.awards.length > 0) {
            badges.push({
                id: `${ranking.schoolId}-awards`,
                type: 'award_winner',
                label: `${ranking.awards.length} Premio${ranking.awards.length > 1 ? 's' : ''}`,
                icon: '🏅',
                color: '#CD7F32',
                description: 'Ha recibido premios y reconocimientos'
            });
        }

        // Eco school (if has sustainability awards)
        const ecoAwards = ranking.awards.filter(a => a.category === 'sustainability');
        if (ecoAwards.length > 0) {
            badges.push({
                id: `${ranking.schoolId}-eco`,
                type: 'eco_school',
                label: 'Eco Escuela',
                icon: '🌱',
                color: '#4CAF50',
                description: 'Comprometido con la sostenibilidad'
            });
        }

        // Bilingual (placeholder - would need actual data)
        // This would be determined from school data, not ranking

        // Innovative (if has innovation awards)
        const innovationAwards = ranking.awards.filter(a => a.category === 'innovation');
        if (innovationAwards.length > 0) {
            badges.push({
                id: `${ranking.schoolId}-innovative`,
                type: 'innovative',
                label: 'Innovador',
                icon: '💡',
                color: '#9C27B0',
                description: 'Destacado en innovación educativa'
            });
        }

        return badges;
    }

    /**
     * Update category scores for a ranking
     */
    static updateCategoryScores(ranking: SchoolRanking): CategoryScores {
        return {
            academicExcellence: this.calculateAcademicScore(ranking),
            parentSatisfaction: this.calculateParentSatisfactionScore(ranking),
            facilities: ranking.categoryScores.facilities, // Would come from external data
            teachingQuality: ranking.categoryScores.teachingQuality, // Would come from external data
            extracurriculars: ranking.categoryScores.extracurriculars, // Would come from external data
        };
    }

    /**
     * Recalculate all scores and badges for a ranking
     */
    static recalculateRanking(ranking: SchoolRanking, allRankings: SchoolRanking[]): SchoolRanking {
        const updatedCategoryScores = this.updateCategoryScores(ranking);
        const updatedOverallScore = this.calculateOverallScore({
            ...ranking,
            categoryScores: updatedCategoryScores
        });
        const updatedBadges = this.assignBadges({
            ...ranking,
            categoryScores: updatedCategoryScores,
            overallScore: updatedOverallScore
        }, allRankings);

        return {
            ...ranking,
            categoryScores: updatedCategoryScores,
            overallScore: updatedOverallScore,
            badges: updatedBadges,
            lastUpdated: new Date().toISOString()
        };
    }
}
