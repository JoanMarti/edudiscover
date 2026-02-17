import Link from 'next/link';
import Image from 'next/image';
import { getTopCities } from '@/lib/data/cities';

export default function SearchByLocation() {
    const cities = getTopCities(8);

    return (
        <section className="py-16">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Busca colegios por ciudad
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {cities.map((city) => (
                        <Link
                            key={city.id}
                            href={`/colegios-en-${city.slug}`}
                            className="card overflow-hidden group cursor-pointer"
                        >
                            <div className="relative h-32 overflow-hidden">
                                <Image
                                    src={city.image}
                                    alt={city.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="font-semibold text-lg">{city.name}</h3>
                                    <p className="text-sm text-gray-200">{city.schoolCount} colegios</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link href="/buscar" className="text-primary-600 hover:text-primary-700 font-medium">
                        Ver todas las ciudades →
                    </Link>
                </div>
            </div>
        </section>
    );
}
