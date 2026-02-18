import { Heart, Target, Users, School, Star, Shield } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sobre Nosotros | EduDiscover',
    description: 'Conoce el equipo y la misión detrás de EduDiscover, la plataforma líder para encontrar el mejor colegio en España.',
};

const stats = [
    { value: '12.500+', label: 'Colegios indexados' },
    { value: '50.000+', label: 'Familias activas' },
    { value: '180.000+', label: 'Opiniones verificadas' },
    { value: '52', label: 'Provincias cubiertas' },
];

const values = [
    {
        icon: Heart,
        title: 'Familias primero',
        description: 'Todo lo que hacemos está pensado para ayudar a las familias a tomar la mejor decisión educativa para sus hijos.',
    },
    {
        icon: Shield,
        title: 'Transparencia',
        description: 'Información verificada, opiniones auténticas y datos actualizados. Sin publicidad encubierta ni intereses ocultos.',
    },
    {
        icon: Target,
        title: 'Precisión',
        description: 'Nuestros datos provienen de fuentes oficiales y son revisados regularmente para garantizar su exactitud.',
    },
    {
        icon: Users,
        title: 'Comunidad',
        description: 'Construimos una comunidad de familias que comparten experiencias y se ayudan mutuamente en la elección escolar.',
    },
];

const team = [
    { name: 'María García', role: 'CEO & Co-fundadora', bg: 'bg-primary-100' },
    { name: 'Carlos López', role: 'CTO & Co-fundador', bg: 'bg-indigo-100' },
    { name: 'Ana Martínez', role: 'Directora de Contenido', bg: 'bg-pink-100' },
    { name: 'David Sánchez', role: 'Director de Producto', bg: 'bg-green-100' },
];

export default function SobreNosotrosPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                <div className="container-custom py-20">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">
                            Ayudamos a las familias a encontrar el colegio perfecto
                        </h1>
                        <p className="text-xl text-primary-100 leading-relaxed">
                            EduDiscover nació en 2023 con una misión clara: hacer que la búsqueda del colegio ideal sea más fácil, transparente y accesible para todas las familias de España.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 border-b">
                <div className="container-custom py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Nuestra misión</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Elegir el colegio adecuado es una de las decisiones más importantes que toman los padres. Sin embargo, el proceso puede ser abrumador: información dispersa, visitas a múltiples centros, listas de espera...
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            En EduDiscover centralizamos toda la información que necesitas: datos oficiales, opiniones de familias reales, rankings independientes y herramientas de comparación avanzadas.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Nuestro objetivo es que cada familia pueda tomar una decisión informada, con confianza y sin estrés.
                        </p>
                    </div>
                    <div className="bg-primary-50 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary-600 p-3 rounded-xl">
                                <School className="text-white" size={28} />
                            </div>
                            <div>
                                <div className="font-bold text-xl">EduDiscover</div>
                                <div className="text-gray-500 text-sm">La plataforma educativa de confianza</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {['Datos verificados de fuentes oficiales', 'Opiniones auténticas de familias reales', 'Comparador avanzado de colegios', 'Guías y recursos educativos gratuitos', 'Sin publicidad encubierta'].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <Star className="text-primary-600 flex-shrink-0" size={16} />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="bg-gray-50 py-16">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-center mb-12">Nuestros valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="bg-primary-100 p-3 rounded-xl w-fit mb-4">
                                    <value.icon className="text-primary-600" size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team */}
            <div className="container-custom py-16">
                <h2 className="text-3xl font-bold text-center mb-12">El equipo</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="text-center">
                            <div className={`${member.bg} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                                <span className="text-2xl font-bold text-gray-600">
                                    {member.name.charAt(0)}
                                </span>
                            </div>
                            <div className="font-semibold">{member.name}</div>
                            <div className="text-gray-500 text-sm">{member.role}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary-600 py-16">
                <div className="container-custom text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">¿Tienes un colegio?</h2>
                    <p className="text-primary-100 mb-8 max-w-xl mx-auto">
                        Únete a los más de 12.500 centros educativos que ya están en EduDiscover y llega a miles de familias.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contacto" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                            Registrar mi colegio
                        </Link>
                        <Link href="/buscar" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                            Explorar colegios
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
