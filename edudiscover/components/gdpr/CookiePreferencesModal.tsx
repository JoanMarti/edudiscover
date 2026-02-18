'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { COOKIE_CATEGORIES } from '@/lib/constants/cookieCategories';
import { CookieConsent, CookieCategory } from '@/lib/types/cookieConsent.types';

interface CookiePreferencesModalProps {
    isOpen: boolean;
    onClose: () => void;
    consent: CookieConsent | null;
    onSave: (consent: Partial<CookieConsent>) => void;
    onAcceptAll: () => void;
}

export default function CookiePreferencesModal({
    isOpen,
    onClose,
    consent,
    onSave,
    onAcceptAll
}: CookiePreferencesModalProps) {
    if (!isOpen) return null;

    const [preferences, setPreferences] = useState<Omit<CookieConsent, 'timestamp'>>({
        essential: true,
        analytics: consent?.analytics || false,
        advertising: consent?.advertising || false,
        social: consent?.social || false
    });

    const handleToggle = (category: Exclude<CookieCategory, 'essential'>) => {
        setPreferences(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const handleSave = () => {
        onSave(preferences);
        onClose();
    };

    const handleAcceptAll = () => {
        onAcceptAll();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Preferencias de Cookies</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Cerrar"
                    >
                        <X size={24} className="text-gray-600" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <p className="text-gray-600 mb-6">
                        Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes personalizar
                        qué tipos de cookies deseas permitir. Ten en cuenta que deshabilitar algunas cookies puede
                        afectar tu experiencia de navegación.
                    </p>

                    <div className="space-y-4">
                        {COOKIE_CATEGORIES.map(category => (
                            <div
                                key={category.id}
                                className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            {category.name}
                                            {category.required && (
                                                <span className="ml-2 text-xs text-gray-500 font-normal">
                                                    (Siempre activas)
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">{category.description}</p>

                                        <details className="text-sm">
                                            <summary className="cursor-pointer text-primary-600 hover:text-primary-700 font-medium">
                                                Ver ejemplos
                                            </summary>
                                            <ul className="mt-2 ml-4 list-disc text-gray-600 space-y-1">
                                                {category.examples.map((example, idx) => (
                                                    <li key={idx}>{example}</li>
                                                ))}
                                            </ul>
                                        </details>
                                    </div>

                                    {/* Toggle Switch */}
                                    <div className="ml-4 flex-shrink-0">
                                        <button
                                            onClick={() => {
                                                if (category.id !== 'essential') {
                                                    handleToggle(category.id as Exclude<CookieCategory, 'essential'>);
                                                }
                                            }}
                                            disabled={category.required}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${category.id === 'essential' || preferences[category.id]
                                                ? 'bg-primary-600'
                                                : 'bg-gray-300'
                                                } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                            role="switch"
                                            aria-checked={category.id === 'essential' || preferences[category.id]}
                                            aria-label={`Toggle ${category.name}`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${category.id === 'essential' || preferences[category.id]
                                                    ? 'translate-x-6'
                                                    : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={handleSave}
                        className="btn-secondary flex-1 sm:flex-initial"
                    >
                        Guardar preferencias
                    </button>
                    <button
                        onClick={handleAcceptAll}
                        className="btn-primary flex-1 sm:flex-initial"
                    >
                        Aceptar todas
                    </button>
                </div>
            </div>
        </div>
    );
}
