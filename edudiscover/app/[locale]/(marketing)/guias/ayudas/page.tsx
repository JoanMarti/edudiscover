import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Euro, BookOpen, Trophy, Calendar, HelpCircle,
    ArrowRight, CheckCircle, ExternalLink, AlertCircle, Info
} from 'lucide-react';
import {
    ayudasNacionales,
    tiposAyuda,
    ayudasPorCCAA,
    calendarioSolicitudes,
    faqAyudas,
} from '@/lib/data/ayudas';
import { FaqItem, CcaaCard } from './AyudasClient';

export const metadata: Metadata = {
    title: 'Ayudas y Becas Educativas en España | EduDiscover',
    description: 'Guía completa de becas MEC, ayudas autonómicas y municipales para educación en España. Información por comunidad autónoma, tipo de ayuda y calendario de solicitudes.',
};

export default function AyudasPage() {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* ── Hero ── */}
            <div className="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white">
                <div className="container-custom py-14 md:py-20">
                    <div className="flex items-center gap-2 text-green-200 mb-4 text-sm font-medium">
                        <Link href="/guias" className="hover:text-white transition-colors">Guías</Link>
                        <span>/</span>
                        <span>Ayudas y Becas</span>
                    </div>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                            Guía completa de ayudas y becas educativas en España
                        </h1>
                        <p className="text-xl text-green-100 mb-8">
                            Todo lo que necesitas saber sobre las ayudas nacionales, autonómicas y municipales para financiar la educación de tus hijos.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { label: 'Becas nacionales', value: '7+', icon: '🏛️' },
                                { label: 'Comunidades autónomas', value: '17', icon: '🗺️' },
                                { label: 'Tipos de ayuda', value: '6', icon: '📋' },
                                { label: 'Importe máximo', value: '6.000€', icon: '💶' },
                            ].map(stat => (
                                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                                    <div className="text-lg mb-0.5">{stat.icon}</div>
                                    <div className="text-2xl font-bold">{stat.value}</div>
                                    <div className="text-xs text-green-200">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Alert importante ── */}
            <div className="bg-amber-50 border-b border-amber-200">
                <div className="container-custom py-3">
                    <div className="flex items-start gap-3 text-amber-800 text-sm">
                        <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                        <p>
                            <strong>Información actualizada para el curso 2024-2025.</strong> Los importes y plazos pueden variar. Consulta siempre la convocatoria oficial de cada organismo antes de solicitar.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12 space-y-16">

                {/* ── Ayudas Nacionales ── */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                            <Trophy size={20} className="text-primary-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Ayudas nacionales</h2>
                            <p className="text-gray-500 text-sm">Gestionadas por el Ministerio de Educación</p>
                        </div>
                    </div>

                    {/* Destacadas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                        {ayudasNacionales.filter(a => a.destacada).map(ayuda => (
                            <div key={ayuda.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                        {ayuda.organismo.split(' - ')[0]}
                                    </span>
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        <Calendar size={11} /> {ayuda.plazo.split(':')[0]}
                                    </span>
                                </div>
                                <h3 className="font-bold text-base mb-2 leading-snug">{ayuda.nombre}</h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{ayuda.descripcion}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-green-700">{ayuda.importe.split('(')[0].trim()}</span>
                                    <a
                                        href={ayuda.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 font-medium"
                                    >
                                        Ver convocatoria <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Resto de ayudas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ayudasNacionales.filter(a => !a.destacada).map(ayuda => (
                            <div key={ayuda.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-sm transition-shadow flex gap-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm mb-1">{ayuda.nombre}</h3>
                                    <p className="text-xs text-gray-500 mb-2">{ayuda.descripcion}</p>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-green-700">{ayuda.importe.split('(')[0].trim()}</span>
                                        <span className="text-xs text-gray-400">· {ayuda.plazo.split(':')[0]}</span>
                                    </div>
                                </div>
                                <a
                                    href={ayuda.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-500 hover:text-primary-600 transition-colors"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Por tipo de ayuda ── */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <BookOpen size={20} className="text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Por tipo de ayuda</h2>
                            <p className="text-gray-500 text-sm">Elige según lo que necesitas financiar</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {tiposAyuda.map(tipo => (
                            <div key={tipo.id} className={`rounded-2xl border-2 ${tipo.color} p-5`}>
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-3xl">{tipo.emoji}</span>
                                    <span className="text-xs font-bold bg-white/70 px-2.5 py-1 rounded-full">
                                        {tipo.importeMax}
                                    </span>
                                </div>
                                <h3 className="font-bold text-base mb-2">{tipo.nombre}</h3>
                                <p className="text-sm opacity-80 mb-4 leading-relaxed">{tipo.descripcion}</p>
                                <div className="space-y-1.5">
                                    {tipo.ejemplos.map(ej => (
                                        <div key={ej} className="flex items-center gap-2 text-xs">
                                            <CheckCircle size={12} className="flex-shrink-0" />
                                            <span>{ej}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Por comunidad autónoma ── */}
                <section>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                            <span className="text-lg">🗺️</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Por comunidad autónoma</h2>
                            <p className="text-gray-500 text-sm">Ayudas específicas de cada CCAA</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
                        <Info size={16} className="flex-shrink-0 mt-0.5" />
                        <p>Además de las becas nacionales, cada comunidad autónoma tiene sus propias convocatorias. Haz clic en tu comunidad para ver las ayudas disponibles.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ayudasPorCCAA.map(ccaa => (
                            <CcaaCard key={ccaa.slug} ccaa={ccaa} />
                        ))}
                    </div>
                </section>

                {/* ── Calendario ── */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                            <Calendar size={20} className="text-amber-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Calendario de solicitudes</h2>
                            <p className="text-gray-500 text-sm">Fechas clave para no perder ninguna convocatoria</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Período</th>
                                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Convocatoria</th>
                                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Ámbito</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {calendarioSolicitudes.map((item, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="font-semibold text-sm text-gray-900 whitespace-nowrap">{item.mes}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="font-medium text-sm text-gray-900 mb-0.5">{item.evento}</p>
                                                <p className="text-xs text-gray-500">{item.descripcion}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${item.tipo === 'nacional' ? 'bg-primary-100 text-primary-700' :
                                                        item.tipo === 'autonomica' ? 'bg-purple-100 text-purple-700' :
                                                            'bg-gray-100 text-gray-700'
                                                    }`}>
                                                    {item.tipo === 'nacional' ? '🏛️ Nacional' :
                                                        item.tipo === 'autonomica' ? '🗺️ Autonómica' : '🏙️ Municipal'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ── Guía paso a paso ── */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                            <CheckCircle size={20} className="text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Cómo solicitar una beca: paso a paso</h2>
                            <p className="text-gray-500 text-sm">Guía práctica para no perderte en el proceso</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                paso: '01',
                                titulo: 'Identifica las ayudas disponibles',
                                descripcion: 'Consulta las becas nacionales del MEC y las convocatorias de tu comunidad autónoma. Anota los plazos de solicitud.',
                                color: 'bg-blue-600',
                            },
                            {
                                paso: '02',
                                titulo: 'Comprueba los requisitos',
                                descripcion: 'Verifica el umbral de renta de tu unidad familiar, el rendimiento académico requerido y la etapa educativa cubierta.',
                                color: 'bg-indigo-600',
                            },
                            {
                                paso: '03',
                                titulo: 'Reúne la documentación',
                                descripcion: 'DNI/NIE, declaración de la renta, libro de familia, certificado de matrícula y cualquier documento adicional requerido.',
                                color: 'bg-violet-600',
                            },
                            {
                                paso: '04',
                                titulo: 'Presenta la solicitud',
                                descripcion: 'La mayoría de solicitudes se realizan online a través de la sede electrónica del organismo convocante. Necesitarás certificado digital o Cl@ve.',
                                color: 'bg-purple-600',
                            },
                            {
                                paso: '05',
                                titulo: 'Guarda el justificante',
                                descripcion: 'Conserva el número de expediente y el justificante de presentación. Te servirá para hacer seguimiento de tu solicitud.',
                                color: 'bg-pink-600',
                            },
                            {
                                paso: '06',
                                titulo: 'Haz seguimiento',
                                descripcion: 'Consulta el estado de tu solicitud en la sede electrónica. Si te requieren documentación adicional, responde en el plazo indicado.',
                                color: 'bg-rose-600',
                            },
                        ].map(step => (
                            <div key={step.paso} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <div className={`w-10 h-10 ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4`}>
                                    {step.paso}
                                </div>
                                <h3 className="font-bold mb-2">{step.titulo}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.descripcion}</p>
                            </div>
                        ))}
                    </div>

                    {/* Links útiles */}
                    <div className="mt-6 bg-gray-100 rounded-2xl p-6">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <ExternalLink size={16} className="text-primary-600" />
                            Recursos oficiales
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                { label: 'Becas MEC — Sede oficial', url: 'https://www.becaseducacion.gob.es' },
                                { label: 'Ministerio de Educación', url: 'https://www.educacionyfp.gob.es' },
                                { label: 'Cl@ve — Acceso electrónico', url: 'https://clave.gob.es' },
                                { label: 'AEAT — Certificado de renta', url: 'https://www.agenciatributaria.es' },
                                { label: 'Sede Electrónica del Estado', url: 'https://sede.administracion.gob.es' },
                                { label: 'Punto de Acceso General', url: 'https://administracion.gob.es' },
                            ].map(link => (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-200 border border-gray-200 transition-all group"
                                >
                                    <ExternalLink size={13} className="text-gray-400 group-hover:text-primary-500 flex-shrink-0" />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                            <HelpCircle size={20} className="text-orange-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
                            <p className="text-gray-500 text-sm">Resolvemos las dudas más habituales</p>
                        </div>
                    </div>

                    <div className="space-y-3 max-w-3xl">
                        {faqAyudas.map((faq, i) => (
                            <FaqItem key={i} pregunta={faq.pregunta} respuesta={faq.respuesta} />
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section>
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 md:p-14 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">¿Buscas el colegio adecuado para tu presupuesto?</h2>
                        <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
                            Filtra por precio, tipo de centro y ciudad para encontrar colegios que se ajusten a tu situación económica.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/buscar"
                                className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-7 py-3.5 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
                            >
                                Buscar colegios <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/guias"
                                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                            >
                                Ver más guías
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
