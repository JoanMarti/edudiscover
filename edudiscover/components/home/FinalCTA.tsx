import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <div className="container-custom text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    ¿Listo para encontrar el colegio ideal?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                    Miles de familias ya han encontrado su colegio perfecto
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/buscar" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4">
                        Empezar búsqueda
                    </Link>
                    <Link href="/registro" className="btn-secondary border-white text-white hover:bg-white/10 px-8 py-4">
                        Crear cuenta gratis
                    </Link>
                </div>
            </div>
        </section>
    );
}
