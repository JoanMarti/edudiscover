import { Search, Scale, Mail } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            icon: Search,
            title: 'Busca',
            description: 'Encuentra colegios por nombre, localización o características específicas',
        },
        {
            icon: Scale,
            title: 'Compara',
            description: 'Analiza hasta 3 colegios lado a lado: proyecto educativo, precios, opiniones',
        },
        {
            icon: Mail,
            title: 'Contacta',
            description: 'Envía solicitudes de información directamente a los colegios que te interesan',
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    ¿Cómo funciona?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                                    <Icon className="text-primary-600" size={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Signals */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Opiniones verificadas de familias reales</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Información actualizada por los propios colegios</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>100% gratis para familias</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
