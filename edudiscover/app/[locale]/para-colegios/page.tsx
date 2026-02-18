import type { Metadata } from 'next';
import Link from 'next/link';
import {
    BarChart3, Star, Users, Globe, CheckCircle, ArrowRight,
    TrendingUp, MessageSquare, Shield, Zap, Phone, Mail
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Para Colegios | EduDiscover — Aumenta tu visibilidad',
    description: 'Registra tu colegio en EduDiscover y llega a miles de familias que buscan el centro educativo perfecto. Gestiona tu perfil, reseñas y estadísticas.',
};

const benefits = [
    {
        icon: Globe,
        title: 'Visibilidad online',
        desc: 'Aparece en búsquedas de familias de toda España que buscan activamente un colegio como el tuyo.',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        icon: BarChart3,
        title: 'Estadísticas detalladas',
        desc: 'Accede a datos sobre cuántas familias visitan tu perfil, qué buscan y cómo te comparan con otros centros.',
        color: 'bg-purple-100 text-purple-600',
    },
    {
        icon: MessageSquare,
        title: 'Gestión de reseñas',
        desc: 'Responde a las opiniones de las familias y demuestra tu compromiso con la comunidad educativa.',
        color: 'bg-green-100 text-green-600',
    },
    {
        icon: Star,
        title: 'Perfil destacado',
        desc: 'Con el plan Premium, tu colegio aparece en posiciones destacadas y en las colecciones curadas de EduDiscover.',
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        icon: Users,
        title: 'Conexión con familias',
        desc: 'Recibe consultas directas de familias interesadas y gestiona las solicitudes de visita desde tu panel.',
        color: 'bg-pink-100 text-pink-600',
    },
    {
        icon: Shield,
        title: 'Información verificada',
        desc: 'Controla y actualiza la información de tu centro: instalaciones, metodología, precios y actividades.',
        color: 'bg-orange-100 text-orange-600',
    },
];

const plans = [
    {
        name: 'Básico',
        price: 'Gratuito',
        period: 'siempre',
        description: 'Para empezar a tener presencia en EduDiscover',
        features: [
            'Perfil básico del centro',
            'Aparición en búsquedas',
            'Recepción de reseñas',
            'Información de contacto',
            'Hasta 5 fotos',
        ],
        cta: 'Registrar mi colegio',
        highlighted: false,
        color: 'border-gray-200',
    },
    {
        name: 'Premium',
        price: '49€',
        period: '/mes',
        description: 'Para colegios que quieren destacar y crecer',
        features: [
            'Todo lo del plan Básico',
            'Posición destacada en búsquedas',
            'Estadísticas avanzadas de visitas',
            'Respuesta a reseñas',
            'Fotos y vídeo ilimitados',
            'Aparición en colecciones curadas',
            'Formulario de contacto directo',
            'Soporte prioritario',
        ],
        cta: 'Empezar prueba gratuita',
        highlighted: true,
        color: 'border-primary-500',
    },
    {
        name: 'Red de Centros',
        price: 'A medida',
        period: '',
        description: 'Para grupos escolares con múltiples centros',
        features: [
            'Todo lo del plan Premium',
            'Panel centralizado multi-centro',
            'API de integración',
            'Account manager dedicado',
            'Informes personalizados',
            'Contrato anual con descuento',
        ],
        cta: 'Contactar con ventas',
        highlighted: false,
        color: 'border-gray-200',
    },
];

const stats = [
    { value: '12.500+', label: 'Colegios en la plataforma' },
    { value: '85.000+', label: 'Familias activas al mes' },
    { value: '4,2', label: 'Valoración media de la plataforma' },
    { value: '320.000+', label: 'Búsquedas mensuales' },
];

const testimonials = [
    {
        quote: 'Desde que nos registramos en EduDiscover, hemos recibido un 40% más de solicitudes de información de familias nuevas.',
        author: 'María González',
        role: 'Directora, Colegio Montessori Vallés',
        avatar: '👩‍💼',
    },
    {
        quote: 'La herramienta de estadísticas nos ha ayudado a entender qué buscan las familias y a mejorar nuestra comunicación.',
        author: 'Carlos Martínez',
        role: 'Director de Marketing, Grupo Educativo Ábaco',
        avatar: '👨‍💼',
    },
    {
        quote: 'Poder responder a las reseñas de las familias ha mejorado enormemente nuestra reputación online.',
        author: 'Ana Ferrer',
        role: 'Secretaria, Colegio Bilingüe San Jordi',
        avatar: '👩‍🏫',
    },
];

export default function ParaColegiosPage() {
    return (
        <div className="bg-white">

            {/* ── Hero ── */}
            <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-indigo-900 text-white">
                <div className="container-custom py-20 md:py-28">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                            <Zap size={14} className="text-yellow-300" />
                            Para directores y equipos de comunicación
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Llega a las familias que buscan un colegio como el tuyo
                        </h1>
                        <p className="text-xl text-primary-100 mb-10 max-w-2xl">
                            Más de 85.000 familias usan EduDiscover cada mes para encontrar el colegio perfecto. Registra tu centro y empieza a recibir consultas hoy mismo.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg text-lg"
                            >
                                Registrar mi colegio gratis <ArrowRight size={20} />
                            </Link>
                            <a
                                href="#planes"
                                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-lg"
                            >
                                Ver planes
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Stats ── */}
            <div className="bg-gray-900 text-white">
                <div className="container-custom py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map(stat => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-primary-400 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Benefits ── */}
            <div className="container-custom py-20">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué registrar tu colegio?</h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        EduDiscover es el punto de referencia para familias que buscan colegio en España. Estar aquí es estar donde importa.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map(b => (
                        <div key={b.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${b.color}`}>
                                <b.icon size={22} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── How it works ── */}
            <div className="bg-gray-50 py-20">
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo funciona</h2>
                        <p className="text-gray-500 text-lg">En 3 pasos sencillos tu colegio ya está visible</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                step: '01',
                                title: 'Regístrate gratis',
                                desc: 'Crea tu cuenta de colegio con el email institucional. Sin tarjeta de crédito.',
                                color: 'bg-primary-600',
                            },
                            {
                                step: '02',
                                title: 'Completa tu perfil',
                                desc: 'Añade fotos, descripción, metodología, instalaciones, precios y actividades.',
                                color: 'bg-indigo-600',
                            },
                            {
                                step: '03',
                                title: 'Empieza a recibir consultas',
                                desc: 'Las familias te encontrarán en búsquedas y podrán contactarte directamente.',
                                color: 'bg-violet-600',
                            },
                        ].map(s => (
                            <div key={s.step} className="text-center">
                                <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4`}>
                                    {s.step}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Plans ── */}
            <div id="planes" className="container-custom py-20">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes y precios</h2>
                    <p className="text-gray-500 text-lg">Empieza gratis, escala cuando lo necesites</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {plans.map(plan => (
                        <div
                            key={plan.name}
                            className={`rounded-2xl border-2 ${plan.color} p-8 flex flex-col ${plan.highlighted ? 'shadow-xl relative' : ''}`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                                    Más popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-3xl font-black">{plan.price}</span>
                                    {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
                                </div>
                                <p className="text-sm text-gray-500">{plan.description}</p>
                            </div>
                            <ul className="space-y-3 flex-1 mb-8">
                                {plan.features.map(f => (
                                    <li key={f} className="flex items-start gap-2 text-sm">
                                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contacto"
                                className={`w-full text-center py-3 rounded-xl font-semibold transition-colors ${plan.highlighted
                                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Testimonials ── */}
            <div className="bg-primary-50 py-20">
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold mb-4">Lo que dicen los colegios</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map(t => (
                            <div key={t.author} className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">{t.avatar}</span>
                                    <div>
                                        <p className="font-semibold text-sm">{t.author}</p>
                                        <p className="text-xs text-gray-500">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CTA final ── */}
            <div className="container-custom py-20">
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
                    <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
                        Regístrate gratis hoy y empieza a conectar con familias que buscan un colegio como el tuyo.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
                        >
                            Registrar mi colegio gratis <ArrowRight size={18} />
                        </Link>
                        <a
                            href="mailto:colegios@edudiscover.es"
                            className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                        >
                            <Mail size={18} /> Hablar con el equipo
                        </a>
                    </div>
                    <p className="mt-6 text-primary-200 text-sm">
                        Sin tarjeta de crédito · Configuración en 10 minutos · Soporte en español
                    </p>
                </div>
            </div>

        </div>
    );
}
