'use client';

import { Trash2 } from 'lucide-react';
import { ScholarshipAid } from '@/lib/contexts/AuthContext';

interface ScholarshipCardProps {
    scholarship: ScholarshipAid;
    onRemove: (scholarshipId: string) => void;
}

const SCHOLARSHIP_TYPES = {
    scholarship: 'Beca',
    grant: 'Subvención',
    subsidy: 'Ayuda',
    other: 'Otro'
};

export default function ScholarshipCard({ scholarship, onRemove }: ScholarshipCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long'
        });
    };

    const isActive = () => {
        if (!scholarship.endDate) return true;
        return new Date(scholarship.endDate) > new Date();
    };

    return (
        <div className={`card p-4 hover:shadow-md transition-shadow ${isActive() ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-gray-300'}`}>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-lg">{scholarship.name}</h4>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded ${isActive()
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                            {isActive() ? 'Activa' : 'Finalizada'}
                        </span>
                    </div>

                    <div className="space-y-1 text-sm text-gray-700">
                        <p>
                            <span className="font-medium">Tipo:</span>{' '}
                            {SCHOLARSHIP_TYPES[scholarship.type]}
                        </p>

                        {scholarship.amount && (
                            <p>
                                <span className="font-medium">Importe:</span>{' '}
                                {scholarship.amount.toLocaleString('es-ES')}€
                            </p>
                        )}

                        <p>
                            <span className="font-medium">Inicio:</span>{' '}
                            {formatDate(scholarship.startDate)}
                        </p>

                        {scholarship.endDate && (
                            <p>
                                <span className="font-medium">Fin:</span>{' '}
                                {formatDate(scholarship.endDate)}
                            </p>
                        )}
                    </div>
                </div>

                <button
                    onClick={() => {
                        if (confirm(`¿Eliminar "${scholarship.name}"?`)) {
                            onRemove(scholarship.id);
                        }
                    }}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    title="Eliminar"
                >
                    <Trash2 size={16} className="text-red-600" />
                </button>
            </div>
        </div>
    );
}
