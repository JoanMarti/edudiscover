import Link from 'next/link';
import { BookOpen, GraduationCap, Heart, MapPin, Euro, Star, ArrowRight, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guías para Padres | EduDiscover',
    description: 'Todo lo que necesitas saber para elegir el mejor colegio para tu hijo. Guías, consejos y recursos para familias.',
};

const categories = [
    { icon: GraduationCap, label: 'Etapas Educativas', color: 'bg-blue-100 text-blue-700', href: '/guias' },
    { icon: Euro, label: 'Financiación y Becas', color: 'bg-green-100 text-green-700', href: '/guias/ayudas' },
    { icon: MapPin, label: 'Por Ciudad', color: 'bg-purple-100 text-purple-700', href: '/buscar' },
    { icon: Heart, label: 'Bienestar Escolar', color: 'bg-pink-100 text-pink-700', href: '/guias' },
    { icon: Star, label: 'Rankings', color: 'bg-yellow-100 text-yellow-700', href: '/guias' },
    { icon: BookOpen, label: 'Metodologías', color: 'bg-orange-100 text-orange-700', href: '/guias' },
];

const featuredGuides = [
    {
        title: 'Cómo elegir el colegio perfecto para tu hijo',
        excerpt: 'Una guía completa con todos los factores que debes considerar: ubicación, tipo de centro, metodología, precio y mucho más.',
        category: 'Guía Esencial',
        readTime: '8 min',
        color: 'bg-primary-600',
        href: '/guias',
    },
    {
        title: 'Diferencias entre colegio público, concertado y privado',
        excerpt: 'Analizamos en detalle las ventajas e inconvenientes de cada tipo de centro educativo para que puedas tomar la mejor decisión.',
        category: 'Tipos de Centro',
        readTime: '6 min',
        color: 'bg-indigo-600',
        href: '/guias',
    },
    {
        title: 'Guía de becas y ayudas para educación en España',
        excerpt: 'Descubre todas las ayudas disponibles: becas MEC, ayudas autonómicas, bonificaciones municipales y más.',
        category: 'Financiación',
        readTime: '10 min',
        color: 'bg-green-600',
        href: '/guias/ayudas',
    },
];

const articles = [
    {
        title: 'Etapa Infantil (0-6 años): qué buscar en una escuela',
        excerpt: 'Los primeros años son cruciales. Te explicamos qué aspectos son más importantes en la educación infantil.',
        category: 'Etapas Educativas',
        readTime: '5 min',
    },
    {
        title: 'Colegios bilingües: ventajas y cómo evaluarlos',
        excerpt: 'El bilingüismo es cada vez más valorado. Aprende a distinguir un buen programa bilingüe de uno superficial.',
        category: 'Metodologías',
        readTime: '7 min',
    },
    {
        title: 'Cómo preparar la visita a un colegio: preguntas clave',
        excerpt: '20 preguntas imprescindibles que debes hacer durante la jornada de puertas abiertas de un colegio.',
        category: 'Consejos Prácticos',
        readTime: '4 min',
    },
    {
        title: 'Metodología Montessori: qué es y para quién es ideal',
        excerpt: 'Exploramos en profundidad el método Montessori, sus principios y cómo saber si encaja con tu hijo.',
        category: 'Metodologías',
        readTime: '8 min',
    },
    {
        title: 'Colegios internacionales en España: guía completa',
        excerpt: 'Todo sobre los colegios internacionales: IB, British, American... cuál elegir según tus necesidades.',
        category: 'Tipos de Centro',
        readTime: '9 min',
    },
    {
        title: 'Cómo afrontar el cambio de colegio con tu hijo',
        excerpt: 'Consejos prácticos para gestionar el cambio de centro educativo minimizando el impacto emocional.',
        category: 'Bienestar Escolar',
        readTime: '6 min',
    },
];

export default function GuiasPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero */}
            <div className="bg-white border-b">
                <div className="container-custom py-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-primary-600 mb-3">
                            <BookOpen size={20} />
                            <span className="font-medium text-sm uppercase tracking-wide">Guías para Padres</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Todo lo que necesitas saber para elegir el mejor colegio
                        </h1>
                        <p className="text-xl text-gray-600">
                            Recursos, consejos y guías elaboradas por expertos en educación para ayudarte en la decisión más importante.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Categories */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Explorar por categoría</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((cat) => (
                            <Link
                                key={cat.label}
                                href={cat.href}
                                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                            >
                                <div className={`p-3 rounded-lg ${cat.color}`}>
                                    <cat.icon size={20} />
                                </div>
                                <span className="text-sm font-medium text-center">{cat.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* ── Ayudas y Becas — Banner destacado ── */}
                <div className="mb-12">
                    <Link
                        href="/guias/ayudas"
                        className="group block bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 md:p-10 text-white hover:shadow-xl transition-all"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-4">
                                    <Euro size={13} /> Guía destacada
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                    Ayudas y Becas Educativas en España
                                </h2>
                                <p className="text-green-100 text-base mb-4 max-w-xl">
                                    Guía completa con todas las becas nacionales, ayudas por comunidad autónoma (las 17 CCAA), tipos de ayuda y calendario de solicitudes.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['🏛️ Becas MEC', '🗺️ 17 CCAA', '📅 Calendario', '❓ FAQ'].map(tag => (
                                        <span key={tag} className="bg-white/15 text-white text-xs font-medium px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-shrink-0 flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-xl group-hover:bg-green-50 transition-colors self-start md:self-center">
                                Ver guía completa <ArrowRight size={18} />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Featured Guides */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Guías destacadas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredGuides.map((guide) => (
                            <Link
                                key={guide.title}
                                href={guide.href}
                                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group"
                            >
                                <div className={`${guide.color} h-3`} />
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                                            {guide.category}
                                        </span>
                                        <span className="text-xs text-gray-500 flex items-center gap-1">
                                            <Clock size={12} /> {guide.readTime}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                                        {guide.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">{guide.excerpt}</p>
                                    <div className="flex items-center gap-1 text-primary-600 text-sm font-medium">
                                        Leer guía <ArrowRight size={14} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* All Articles */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Todos los artículos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {articles.map((article) => (
                            <div
                                key={article.title}
                                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md hover:border-primary-200 transition-all cursor-pointer group"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        <Clock size={12} /> {article.readTime}
                                    </span>
                                </div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{article.excerpt}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">¿Listo para encontrar el colegio ideal?</h2>
                    <p className="text-primary-100 mb-8 max-w-xl mx-auto">
                        Usa nuestro buscador avanzado para filtrar por ciudad, tipo, precio y mucho más.
                    </p>
                    <Link href="/buscar" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors inline-block">
                        Buscar colegios
                    </Link>
                </div>
            </div>
        </div>
    );
}
