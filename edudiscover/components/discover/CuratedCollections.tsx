import Link from 'next/link';
import { ArrowRight, Star, Globe, Leaf, Trophy, Music, Microscope, Heart } from 'lucide-react';

const collections = [
    {
        id: 'mejor-valorados-madrid',
        title: 'Los mejor valorados de Madrid',
        description: 'Colegios con más de 4.5 estrellas según las familias madrileñas.',
        icon: Star,
        iconColor: 'text-yellow-500',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        count: '48 colegios',
        href: '/buscar?city=madrid&rating=4.5',
        tag: 'Más populares',
        tagColor: 'bg-yellow-100 text-yellow-700',
    },
    {
        id: 'bilingues-barcelona',
        title: 'Bilingües en Barcelona',
        description: 'Los mejores colegios con programa bilingüe inglés-español en la Ciudad Condal.',
        icon: Globe,
        iconColor: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        count: '62 colegios',
        href: '/buscar?city=barcelona&bilingual=true',
        tag: 'Bilingüe',
        tagColor: 'bg-blue-100 text-blue-700',
    },
    {
        id: 'montessori-espana',
        title: 'Mejores colegios Montessori',
        description: 'Centros con metodología Montessori certificada en toda España.',
        icon: Leaf,
        iconColor: 'text-green-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        count: '142 colegios',
        href: '/colegios-montessori',
        tag: 'Montessori',
        tagColor: 'bg-green-100 text-green-700',
    },
    {
        id: 'ib-espana',
        title: 'Bachillerato Internacional (IB)',
        description: 'Colegios con programa IB reconocido internacionalmente.',
        icon: Trophy,
        iconColor: 'text-purple-500',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        count: '120 colegios',
        href: '/colegios-bachillerato-internacional-(ib)',
        tag: 'Internacional',
        tagColor: 'bg-purple-100 text-purple-700',
    },
    {
        id: 'extraescolares',
        title: 'Más actividades extraescolares',
        description: 'Colegios con la oferta más amplia de deportes, arte y actividades.',
        icon: Music,
        iconColor: 'text-pink-500',
        bgColor: 'bg-pink-50',
        borderColor: 'border-pink-200',
        count: '215 colegios',
        href: '/buscar?services=extraescolares',
        tag: 'Actividades',
        tagColor: 'bg-pink-100 text-pink-700',
    },
    {
        id: 'stem-espana',
        title: 'Colegios con enfoque STEM',
        description: 'Centros con programas especializados en ciencia, tecnología e ingeniería.',
        icon: Microscope,
        iconColor: 'text-cyan-500',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        count: '89 colegios',
        href: '/buscar?methodology=stem',
        tag: 'STEM',
        tagColor: 'bg-cyan-100 text-cyan-700',
    },
    {
        id: 'inclusivos',
        title: 'Colegios inclusivos',
        description: 'Centros con programas de atención a la diversidad y necesidades especiales.',
        icon: Heart,
        iconColor: 'text-rose-500',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200',
        count: '340 colegios',
        href: '/buscar?services=inclusion',
        tag: 'Inclusión',
        tagColor: 'bg-rose-100 text-rose-700',
    },
    {
        id: 'internacionales-espana',
        title: 'Colegios internacionales',
        description: 'Los mejores colegios con currículum internacional en España.',
        icon: Globe,
        iconColor: 'text-indigo-500',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200',
        count: '385 colegios',
        href: '/colegios-internacional',
        tag: 'Internacional',
        tagColor: 'bg-indigo-100 text-indigo-700',
    },
];

export default function CuratedCollections() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Colecciones curadas
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Listas seleccionadas por nuestro equipo para ayudarte a encontrar exactamente lo que buscas.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {collections.map((col) => {
                        const Icon = col.icon;
                        return (
                            <Link
                                key={col.id}
                                href={col.href}
                                className={`group rounded-2xl border-2 ${col.bgColor} ${col.borderColor} p-5 hover:shadow-md transition-all duration-200 flex flex-col`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className={`p-2 rounded-xl bg-white shadow-sm`}>
                                        <Icon size={20} className={col.iconColor} />
                                    </div>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${col.tagColor}`}>
                                        {col.tag}
                                    </span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary-700 transition-colors">
                                    {col.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                                    {col.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-500">{col.count}</span>
                                    <ArrowRight size={16} className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
