import Link from 'next/link';
import { Search, Home, BookOpen, GitCompare, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Página no encontrada | EduDiscover',
    description: 'La página que buscas no existe. Vuelve al inicio o busca colegios en EduDiscover.',
};

const quickLinks = [
    { href: '/buscar', icon: Search, label: 'Buscar colegios', desc: 'Encuentra el colegio perfecto' },
    { href: '/comparar', icon: GitCompare, label: 'Comparar colegios', desc: 'Compara hasta 3 centros' },
    { href: '/guias', icon: BookOpen, label: 'Guías para padres', desc: 'Consejos y recursos útiles' },
    { href: '/', icon: Home, label: 'Inicio', desc: 'Volver a la página principal' },
];

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-20">
            {/* Illustration */}
            <div className="relative mb-8">
                <div className="w-40 h-40 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-7xl select-none">🏫</span>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                    🔍
                </div>
            </div>

            {/* Error code */}
            <p className="text-8xl font-black text-primary-200 mb-2 leading-none">404</p>

            {/* Message */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
                ¡Vaya! Esta página no existe
            </h1>
            <p className="text-gray-500 text-center max-w-md mb-10">
                Puede que la URL sea incorrecta o que la página haya sido movida. No te preocupes, te ayudamos a encontrar lo que buscas.
            </p>

            {/* Quick links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mb-10">
                {quickLinks.map(({ href, icon: Icon, label, desc }) => (
                    <Link
                        key={href}
                        href={href}
                        className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:border-primary-300 hover:shadow-md transition-all group"
                    >
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                            <Icon size={18} className="text-primary-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">{label}</p>
                            <p className="text-xs text-gray-500">{desc}</p>
                        </div>
                        <ArrowRight size={14} className="text-gray-400 group-hover:text-primary-500 flex-shrink-0 transition-colors" />
                    </Link>
                ))}
            </div>

            {/* Search shortcut */}
            <div className="w-full max-w-md">
                <p className="text-sm text-gray-500 text-center mb-3">O busca directamente un colegio</p>
                <form action="/buscar" method="GET" className="flex gap-2">
                    <input
                        type="text"
                        name="q"
                        placeholder="Nombre del colegio o ciudad..."
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                        type="submit"
                        className="btn-primary px-4 py-2.5 flex items-center gap-2 text-sm"
                    >
                        <Search size={16} />
                        Buscar
                    </button>
                </form>
            </div>
        </div>
    );
}
