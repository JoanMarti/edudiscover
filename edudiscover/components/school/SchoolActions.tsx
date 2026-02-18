'use client';

import { useState } from 'react';
import { Heart, GitCompare, Check } from 'lucide-react';
import Link from 'next/link';

interface SchoolActionsProps {
    schoolId: string;
    schoolSlug: string;
}

export default function SchoolActions({ schoolId, schoolSlug }: SchoolActionsProps) {
    const [saved, setSaved] = useState(() => {
        if (typeof window === 'undefined') return false;
        const savedSchools = JSON.parse(localStorage.getItem('edudiscover_saved_schools') || '[]');
        return savedSchools.includes(schoolId);
    });

    const [compareList, setCompareList] = useState<string[]>(() => {
        if (typeof window === 'undefined') return [];
        return JSON.parse(localStorage.getItem('edudiscover_compare_list') || '[]');
    });

    const inCompare = compareList.includes(schoolId);

    const handleSave = () => {
        const savedSchools = JSON.parse(localStorage.getItem('edudiscover_saved_schools') || '[]');
        let updated: string[];
        if (saved) {
            updated = savedSchools.filter((id: string) => id !== schoolId);
        } else {
            updated = [...savedSchools, schoolId];
        }
        localStorage.setItem('edudiscover_saved_schools', JSON.stringify(updated));
        setSaved(!saved);
    };

    const handleCompare = () => {
        const list = JSON.parse(localStorage.getItem('edudiscover_compare_list') || '[]');
        let updated: string[];
        if (inCompare) {
            updated = list.filter((id: string) => id !== schoolId);
        } else {
            if (list.length >= 3) {
                alert('Puedes comparar un máximo de 3 colegios a la vez.');
                return;
            }
            updated = [...list, schoolId];
        }
        localStorage.setItem('edudiscover_compare_list', JSON.stringify(updated));
        setCompareList(updated);
    };

    return (
        <div className="flex gap-2 items-center">
            <button
                onClick={handleSave}
                title={saved ? 'Guardado' : 'Guardar colegio'}
                className={`p-3 rounded-lg border transition-all ${saved
                        ? 'bg-red-50 border-red-200 text-red-500'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-red-200 hover:text-red-500'
                    }`}
            >
                <Heart size={20} className={saved ? 'fill-red-500' : ''} />
            </button>

            {inCompare ? (
                <Link
                    href={`/comparar?schools=${compareList.join(',')}`}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                    <Check size={16} />
                    Ver comparación ({compareList.length})
                </Link>
            ) : (
                <button
                    onClick={handleCompare}
                    title="Añadir al comparador"
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:border-primary-300 hover:text-primary-600 transition-all"
                >
                    <GitCompare size={16} />
                    Comparar
                </button>
            )}
        </div>
    );
}
