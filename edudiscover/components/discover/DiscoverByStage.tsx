import Link from 'next/link';

const stages = [
    {
        id: 'guarderia',
        name: 'Guardería',
        ages: '0–3 años',
        emoji: '🍼',
        description: 'Primeros pasos en un entorno seguro y estimulante.',
        color: 'from-pink-50 to-rose-50 border-pink-200 hover:border-pink-400',
        textColor: 'text-pink-700',
        badgeColor: 'bg-pink-100 text-pink-600',
        count: '3.200',
    },
    {
        id: 'infantil',
        name: 'Infantil',
        ages: '3–6 años',
        emoji: '🎨',
        description: 'Desarrollo de la creatividad, el juego y la socialización.',
        color: 'from-orange-50 to-amber-50 border-orange-200 hover:border-orange-400',
        textColor: 'text-orange-700',
        badgeColor: 'bg-orange-100 text-orange-600',
        count: '8.400',
    },
    {
        id: 'primaria',
        name: 'Primaria',
        ages: '6–12 años',
        emoji: '📖',
        description: 'Base académica sólida con valores y habilidades sociales.',
        color: 'from-yellow-50 to-lime-50 border-yellow-200 hover:border-yellow-400',
        textColor: 'text-yellow-700',
        badgeColor: 'bg-yellow-100 text-yellow-600',
        count: '9.100',
    },
    {
        id: 'secundaria',
        name: 'Secundaria',
        ages: '12–16 años',
        emoji: '🔬',
        description: 'Formación integral y orientación vocacional.',
        color: 'from-green-50 to-emerald-50 border-green-200 hover:border-green-400',
        textColor: 'text-green-700',
        badgeColor: 'bg-green-100 text-green-600',
        count: '7.800',
    },
    {
        id: 'bachillerato',
        name: 'Bachillerato',
        ages: '16–18 años',
        emoji: '🎯',
        description: 'Preparación para la universidad y el futuro profesional.',
        color: 'from-blue-50 to-sky-50 border-blue-200 hover:border-blue-400',
        textColor: 'text-blue-700',
        badgeColor: 'bg-blue-100 text-blue-600',
        count: '4.200',
    },
    {
        id: 'fp',
        name: 'FP',
        ages: '16+ años',
        emoji: '🛠️',
        description: 'Formación profesional práctica y salida laboral directa.',
        color: 'from-purple-50 to-violet-50 border-purple-200 hover:border-purple-400',
        textColor: 'text-purple-700',
        badgeColor: 'bg-purple-100 text-purple-600',
        count: '2.100',
    },
];

export default function DiscoverByStage() {
    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Explora por etapa educativa
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Cada etapa tiene sus propias necesidades. Encuentra el colegio ideal para el momento de tu hijo.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {stages.map((stage) => (
                        <Link
                            key={stage.id}
                            href={`/buscar?stage=${stage.id}`}
                            className={`group rounded-2xl border-2 bg-gradient-to-br p-6 transition-all duration-200 hover:shadow-md ${stage.color}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-4xl">{stage.emoji}</div>
                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${stage.badgeColor}`}>
                                    {stage.ages}
                                </span>
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${stage.textColor}`}>
                                {stage.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {stage.description}
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                {stage.count} colegios →
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
