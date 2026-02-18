'use client';

import { Badge as BadgeType } from '@/lib/types/ranking';

interface Props {
    badge: BadgeType;
    size?: 'sm' | 'md' | 'lg';
}

export function RankingBadge({ badge, size = 'md' }: Props) {
    const sizeClasses = {
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-3 py-1.5',
        lg: 'text-base px-4 py-2'
    };

    const iconSizes = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    };

    return (
        <div
            className={`inline-flex items-center gap-1.5 rounded-full font-medium ${sizeClasses[size]}`}
            style={{
                backgroundColor: `${badge.color}15`,
                color: badge.color,
                border: `1px solid ${badge.color}40`
            }}
            title={badge.description}
        >
            <span className={iconSizes[size]}>{badge.icon}</span>
            <span>{badge.label}</span>
        </div>
    );
}
