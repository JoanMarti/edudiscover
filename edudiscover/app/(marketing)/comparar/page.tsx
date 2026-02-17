'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { schools } from '@/lib/data/schools';
import { Star, X } from 'lucide-react';
import { formatRating, formatPrice } from '@/lib/utils';
import Link from 'next/link';

export default function ComparePage() {
    const searchParams = useSearchParams();
    const schoolIds = searchParams.get('schools')?.split(',') || [];

    const [selectedSchools, setSelectedSchools] = useState(
        schools.filter(s => schoolIds.includes(s.id)).slice(0, 3)
    );

    const removeSchool = (id: string) => {
        setSelectedSchools(selectedSchools.filter(s => s.id !== id));
    };

    if (selectedSchools.length === 0) {
        return (
            <div className="container-custom py-16">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Comparar colegios</h1>
                    <p className="text-gray-600 mb-8">
                        Añade colegios para compararlos lado a lado
                    </p>
                    <Link href="/buscar" className="btn-primary">
                        Buscar colegios
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container-custom py-8">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Comparar colegios
                </h1>
                <p className="text-gray-600">
                    Comparando {selectedSchools.length} {selectedSchools.length === 1 ? 'colegio' : 'colegios'}
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="bg-gray-50 p-4 text-left font-semibold sticky left-0 z-10 min-w-[200px]">
                                Atributo
                            </th>
                            {selectedSchools.map((school) => (
                                <th key={school.id} className="bg-white p-4 border-l min-w-[300px]">
                                    <div className="text-left">
                                        <div className="flex items-start justify-between mb-2">
                                            <Link href={`/${school.slug}`} className="font-semibold text-lg hover:text-primary-600">
                                                {school.name}
                                            </Link>
                                            <button
                                                onClick={() => removeSchool(school.id)}
                                                className="text-gray-400 hover:text-gray-600"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Star className="fill-yellow-400 text-yellow-400" size={16} />
                                            <span className="font-semibold">{formatRating(school.rating)}</span>
                                            <span className="text-gray-600">({school.reviewCount})</span>
                                        </div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Type */}
                        <tr className="border-t">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Tipo de centro</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    {school.type.charAt(0).toUpperCase() + school.type.slice(1)}
                                </td>
                            ))}
                        </tr>

                        {/* Location */}
                        <tr className="border-t bg-gray-50/50">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Ubicación</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    {school.neighborhood}, {school.city}
                                </td>
                            ))}
                        </tr>

                        {/* Price */}
                        <tr className="border-t">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Precio mensual</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l font-semibold">
                                    {school.priceMonthly ? formatPrice(school.priceMonthly) : 'Gratuito'}
                                </td>
                            ))}
                        </tr>

                        {/* Students */}
                        <tr className="border-t bg-gray-50/50">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Número de alumnos</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    {school.totalStudents}
                                </td>
                            ))}
                        </tr>

                        {/* Ratio */}
                        <tr className="border-t">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Ratio alumnos/profesor</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    {school.teacherStudentRatio}
                                </td>
                            ))}
                        </tr>

                        {/* Methodology */}
                        <tr className="border-t bg-gray-50/50">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Metodología</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    {school.methodology || 'Tradicional'}
                                </td>
                            ))}
                        </tr>

                        {/* Languages */}
                        <tr className="border-t">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Idiomas</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    {school.languages.join(', ')}
                                </td>
                            ))}
                        </tr>

                        {/* Bilingual */}
                        <tr className="border-t bg-gray-50/50">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Programa bilingüe</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    {school.bilingual ? '✓ Sí' : '✗ No'}
                                </td>
                            ))}
                        </tr>

                        {/* Stages */}
                        <tr className="border-t">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Etapas educativas</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    <div className="space-y-1">
                                        {school.stages.map(stage => (
                                            <div key={stage} className="text-sm">✓ {stage}</div>
                                        ))}
                                    </div>
                                </td>
                            ))}
                        </tr>

                        {/* Services */}
                        <tr className="border-t bg-gray-50/50">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Servicios</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    <div className="space-y-1">
                                        {school.services.slice(0, 4).map(service => (
                                            <div key={service} className="text-sm">✓ {service}</div>
                                        ))}
                                    </div>
                                </td>
                            ))}
                        </tr>

                        {/* Facilities */}
                        <tr className="border-t">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Instalaciones</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    <div className="space-y-1">
                                        {school.facilities.slice(0, 4).map(facility => (
                                            <div key={facility} className="text-sm">✓ {facility}</div>
                                        ))}
                                    </div>
                                </td>
                            ))}
                        </tr>

                        {/* Actions */}
                        <tr className="border-t bg-gray-50/50">
                            <td className="bg-gray-50 p-4 font-medium sticky left-0">Acciones</td>
                            {selectedSchools.map((school) => (
                                <td key={school.id} className="p-4 border-l">
                                    <Link href={`/${school.slug}`} className="btn-primary w-full text-sm">
                                        Ver perfil completo
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {selectedSchools.length < 3 && (
                <div className="mt-8 text-center">
                    <Link href="/buscar" className="btn-secondary">
                        Añadir otro colegio
                    </Link>
                </div>
            )}
        </div>
    );
}
