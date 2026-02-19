import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function BrowseByMethodology() {
    const t = useTranslations('BrowseByMethodology');

    const methodologies = [
        { name: 'Montessori', count: 142, emoji: '🎨' },
        { name: 'Waldorf', count: 87, emoji: '🌱' },
        { name: 'Reggio Emilia', count: 45, emoji: '🎭' },
        { name: 'Bachillerato Internacional (IB)', count: 120, emoji: '🌍' },
        { name: 'Británico', count: 180, emoji: '🇬🇧' },
        { name: 'Americano', count: 85, emoji: '🇺🇸' },
    ];

    return (
        <section className="py-16">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    {t('title')}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {methodologies.map((methodology) => (
                        <Link
                            key={methodology.name}
                            href={`/colegios-${methodology.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="card p-6 text-center hover:shadow-lg transition-all group"
                        >
                            <div className="text-4xl mb-3">{methodology.emoji}</div>
                            <h3 className="font-semibold text-sm mb-2 group-hover:text-primary-600 transition-colors">
                                {methodology.name}
                            </h3>
                            <p className="text-xs text-gray-600">{t('schoolsCount', { count: methodology.count })}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
