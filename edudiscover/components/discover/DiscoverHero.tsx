import { Compass } from 'lucide-react';

export default function DiscoverHero() {
    return (
        <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-16 md:py-20">
            <div className="container-custom text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
                    <Compass size={16} />
                    Exploración guiada
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Descubre el colegio
                    <br />
                    <span className="text-primary-200">perfecto para tu familia</span>
                </h1>
                <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
                    Explora más de 12.500 colegios en España por tipo, ciudad, metodología o etapa educativa. Sin prisa, sin filtros complicados.
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                    {[
                        { label: '12.500+ colegios', emoji: '🏫' },
                        { label: '50+ ciudades', emoji: '📍' },
                        { label: '8 metodologías', emoji: '🎓' },
                        { label: '6 etapas educativas', emoji: '📚' },
                    ].map((stat) => (
                        <div key={stat.label} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                            <span>{stat.emoji}</span>
                            <span className="font-medium">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
