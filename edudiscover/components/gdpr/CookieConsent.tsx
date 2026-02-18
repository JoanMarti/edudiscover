'use client';

import { useState } from 'react';
import { useCookieConsent } from '@/lib/hooks/useCookieConsent';
import CookiePreferencesModal from './CookiePreferencesModal';

export default function CookieConsent() {
    const {
        showBanner,
        setShowBanner,
        acceptAll,
        rejectAll,
        updateConsent
    } = useCookieConsent();

    const [showModal, setShowModal] = useState(false);

    if (!showBanner) return null;

    const handleAccept = () => {
        acceptAll();
    };

    const handleReject = () => {
        rejectAll();
    };

    const handleShowPreferences = () => {
        setShowModal(true);
    };

    return (
        <>
            {/* Cookie Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-gray-200 shadow-2xl">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                        {/* Text Content */}
                        <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2 text-gray-900">
                                Nos preocupamos por tu privacidad
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Tanto nosotros como nuestros{' '}
                                <button
                                    onClick={handleShowPreferences}
                                    className="text-primary-600 hover:text-primary-700 underline font-medium"
                                >
                                    7 socios
                                </button>{' '}
                                almacenamos y accedemos a datos personales, como datos de navegación o identificadores
                                únicos, en tu dispositivo. Si seleccionas <strong>Acepto</strong>, estarás permitiendo
                                que las tecnologías de rastreo se muestren en encuentros y nuestros socios tratamos
                                datos para proporcionar:
                            </p>
                            <ul className="mt-2 ml-4 text-sm text-gray-700 space-y-1">
                                <li>• Utilizar datos de localización geográfica precisa</li>
                                <li>• Analizar activamente las características del dispositivo para su identificación</li>
                                <li>• Almacenar y/o acceder a información en un dispositivo</li>
                                <li>• Publicidad y contenido personalizados, medición de publicidad y contenido</li>
                                <li>• Investigación de audiencias y desarrollo de servicios</li>
                            </ul>
                            <p className="mt-2 text-sm text-gray-700">
                                Si seleccionas <strong>Rechazarlas todas</strong> o <strong>X</strong>, deshabilitas
                                los rastreadores, parte del contenido y los anuncios que podrían dejar de ser relevantes
                                para ti. Puedes volver a acceder a este menú para cambiar tus opciones o retirar tu
                                consentimiento en cualquier momento haciendo clic en el enlace{' '}
                                <button
                                    onClick={handleShowPreferences}
                                    className="text-primary-600 hover:text-primary-700 underline font-medium"
                                >
                                    «Gestionar las preferencias»
                                </button>{' '}
                                que aparece en el enlace en la parte inferior de la página web. Tu consentimiento tendrá
                                efecto dentro de nuestro{' '}
                                <a
                                    href="/politica-privacidad"
                                    className="text-primary-600 hover:text-primary-700 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Sitio web
                                </a>
                                . Para saber más, consulta nuestra{' '}
                                <a
                                    href="/politica-privacidad"
                                    className="text-primary-600 hover:text-primary-700 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    política de privacidad
                                </a>
                                .
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                <button
                                    onClick={handleShowPreferences}
                                    className="text-primary-600 hover:text-primary-700 underline font-medium"
                                >
                                    Lista de asociados (proveedores)
                                </button>
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[200px]">
                            <button
                                onClick={handleAccept}
                                className="btn-primary w-full whitespace-nowrap"
                            >
                                Acepto
                            </button>
                            <button
                                onClick={handleReject}
                                className="btn-secondary w-full whitespace-nowrap"
                            >
                                Rechazarlas todas
                            </button>
                            <button
                                onClick={handleShowPreferences}
                                className="btn-outline w-full whitespace-nowrap"
                            >
                                Mostrar los propósitos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preferences Modal */}
            <CookiePreferencesModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                consent={null}
                onSave={updateConsent}
                onAcceptAll={acceptAll}
            />
        </>
    );
}
