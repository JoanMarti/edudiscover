import { CookieCategoryInfo } from '../types/cookieConsent.types';

export const COOKIE_CATEGORIES: CookieCategoryInfo[] = [
    {
        id: 'essential',
        name: 'Cookies Esenciales',
        description: 'Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar. Permiten funciones como la navegación por páginas, el acceso a áreas seguras y recordar tus preferencias de privacidad.',
        required: true,
        examples: [
            'Gestión de sesión de usuario',
            'Preferencias de idioma',
            'Consentimiento de cookies',
            'Seguridad y autenticación'
        ]
    },
    {
        id: 'analytics',
        name: 'Cookies de Rendimiento y Análisis',
        description: 'Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, recopilando información de forma anónima. Esto nos permite mejorar la experiencia del usuario y el rendimiento del sitio.',
        required: false,
        examples: [
            'Google Analytics',
            'Análisis de páginas visitadas',
            'Tiempo de permanencia',
            'Fuentes de tráfico'
        ]
    },
    {
        id: 'advertising',
        name: 'Cookies de Publicidad y Personalización',
        description: 'Estas cookies se utilizan para mostrar anuncios relevantes y personalizados según tus intereses. También nos ayudan a medir la efectividad de nuestras campañas publicitarias y a limitar el número de veces que ves un anuncio.',
        required: false,
        examples: [
            'Google Ads',
            'Facebook Pixel',
            'Anuncios personalizados',
            'Retargeting'
        ]
    },
    {
        id: 'social',
        name: 'Cookies de Redes Sociales',
        description: 'Estas cookies permiten compartir contenido en redes sociales y mostrar contenido de plataformas sociales en nuestro sitio. También pueden rastrear tu navegación en otros sitios para crear un perfil de tus intereses.',
        required: false,
        examples: [
            'Botones de compartir en redes sociales',
            'Widgets de redes sociales',
            'Integración con Facebook, Twitter, LinkedIn',
            'Comentarios sociales'
        ]
    }
];

export const DEFAULT_CONSENT = {
    essential: true,
    analytics: false,
    advertising: false,
    social: false,
    timestamp: new Date().toISOString()
};

export const CONSENT_STORAGE_KEY = 'edudiscover_cookie_consent';
