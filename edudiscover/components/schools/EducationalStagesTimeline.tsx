'use client';

import { EducationalStage, STAGE_LABELS } from '@/lib/data/schools';

interface EducationalStagesTimelineProps {
    stages: EducationalStage[];
}

// Define all possible stages in order with age ranges
const ALL_STAGES: { key: EducationalStage; label: string; ageRange: string }[] = [
    { key: 'guarderia', label: 'Infantil 1er cicle', ageRange: '(0-3 anys)' },
    { key: 'infantil', label: 'Infantil 2n cicle', ageRange: '(3-6 anys)' },
    { key: 'primaria', label: 'Primària', ageRange: '' },
    { key: 'secundaria', label: 'ESO', ageRange: '' },
    { key: 'bachillerato', label: 'Batxillerat', ageRange: '' },
    { key: 'fp', label: 'FP i altres', ageRange: '' },
];

export default function EducationalStagesTimeline({ stages }: EducationalStagesTimelineProps) {
    // Calculate which stages are active
    const activeStages = ALL_STAGES.map(stage => ({
        ...stage,
        isActive: stages.includes(stage.key)
    }));

    // Find the first and last active stage indices
    const firstActiveIndex = activeStages.findIndex(s => s.isActive);
    const lastActiveIndex = activeStages.map(s => s.isActive).lastIndexOf(true);

    return (
        <div className="space-y-4">
            {/* Timeline bar */}
            <div className="relative">
                {/* Background bar (gray) */}
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full -translate-y-1/2" />

                {/* Active bar (blue) - only shows between first and last active stage */}
                {firstActiveIndex !== -1 && lastActiveIndex !== -1 && (
                    <div
                        className="absolute top-1/2 h-2 bg-primary-600 rounded-full -translate-y-1/2 transition-all"
                        style={{
                            left: `${(firstActiveIndex / (ALL_STAGES.length - 1)) * 100}%`,
                            right: `${((ALL_STAGES.length - 1 - lastActiveIndex) / (ALL_STAGES.length - 1)) * 100}%`,
                        }}
                    />
                )}

                {/* Stage markers */}
                <div className="relative flex justify-between items-center">
                    {activeStages.map((stage, index) => (
                        <div
                            key={stage.key}
                            className="flex flex-col items-center"
                            style={{ width: `${100 / ALL_STAGES.length}%` }}
                        >
                            {/* Dot marker */}
                            <div
                                className={`w-4 h-4 rounded-full border-2 transition-all ${stage.isActive
                                        ? 'bg-primary-600 border-primary-600'
                                        : 'bg-white border-gray-300'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Stage labels */}
            <div className="flex justify-between text-center">
                {activeStages.map((stage) => (
                    <div
                        key={stage.key}
                        className="flex flex-col"
                        style={{ width: `${100 / ALL_STAGES.length}%` }}
                    >
                        <span className={`text-sm font-medium ${stage.isActive ? 'text-gray-900' : 'text-gray-400'
                            }`}>
                            {stage.label}
                        </span>
                        {stage.ageRange && (
                            <span className={`text-xs ${stage.isActive ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                {stage.ageRange}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
