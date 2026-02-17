import Link from 'next/link';
import { Building2, GraduationCap, Globe, School } from 'lucide-react';

export default function BrowseByType() {
    const types = [
        {
            id: 'publico',
            name: 'Colegios Públicos',
            description: 'Educación gratuita y de calidad',
            count: '2,450 colegios',
            icon: School,
            color: 'bg-blue-100 text-blue-600',
        },
        {
            id: 'concertado',
            name: 'Colegios Concertados',
            description: 'Gestión privada, financiación pública',
            count: '1,820 colegios',
            icon: Building2,
            color: 'bg-green-100 text-green-600',
        },
        {
            id: 'privado',
            name: 'Colegios Privados',
            description: 'Autonomía pedagógica y metodológica',
            count: '1,180 colegios',
            icon: GraduationCap,
            color: 'bg-purple-100 text-purple-600',
        },
        {
            id: 'internacional',
            name: 'Colegios Internacionales',
            description: 'Currículum internacional y multilingüe',
            count: '385 colegios',
            icon: Globe,
            color: 'bg-orange-100 text-orange-600',
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Explora colegios por tipo
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {types.map((type) => {
                        const Icon = type.icon;
                        return (
                            <Link
                                key={type.id}
                                href={`/colegios-${type.id}`}
                                className="card p-6 hover:shadow-lg transition-all group"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${type.color}`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                                    {type.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                                <p className="text-sm font-medium text-primary-600">{type.count}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
