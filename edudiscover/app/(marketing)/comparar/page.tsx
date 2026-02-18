'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { schools, SCHOOL_TYPES, STAGE_LABELS } from '@/lib/data/schools';
import type { School } from '@/lib/data/schools';
import {
    Star, X, Plus, Search, MapPin, Check, GitCompare,
    Users, BookOpen, Globe, DollarSign, Wrench, Building,
    ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';
import { formatRating, formatPrice } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

// ─── School Picker ────────────────────────────────────────────────────────────
function SchoolPicker({ onAdd, excludeIds }: { onAdd: (school: School) => void; excludeIds: string[] }) {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const results = useMemo(() => {
        if (!query.trim()) return schools.filter(s => !excludeIds.includes(s.id)).slice(0, 6);
        return schools
            .filter(s => !excludeIds.includes(s.id) && s.name.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 6);
    }, [query, excludeIds]);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div ref={ref} className="relative w-full">
            <div
                className="flex items-center gap-2 border-2 border-dashed border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-primary-400 hover:bg-primary-50 transition-all"
                onClick={() => setOpen(true)}
            >
                <Search size={16} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar colegio..."
                    value={query}
                    onChange={e => { setQuery(e.target.value); setOpen(true); }}
                    onFocus={() => setOpen(true)}
                    className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                />
            </div>
            {open && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                    {results.map(school => (
                        <button
                            key={school.id}
                            onClick={() => { onAdd(school); setQuery(''); setOpen(false); }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left transition-colors border-b border-gray-100 last:border-0"
                        >
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                <Image src={school.images[0]} alt={school.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm text-gray-900 truncate">{school.name}</p>
                                <p className="text-xs text-gray-500">{school.city} · {SCHOOL_TYPES[school.type]}</p>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-yellow-600">
                                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                {formatRating(school.rating)}
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

// ─── Cell highlight helpers ───────────────────────────────────────────────────
function getBestIdx(values: (number | null)[], lowerIsBetter = false): number {
    const valid = values.map((v, i) => ({ v, i })).filter(x => x.v !== null) as { v: number; i: number }[];
    if (valid.length === 0) return -1;
    return lowerIsBetter
        ? valid.reduce((a, b) => (a.v < b.v ? a : b)).i
        : valid.reduce((a, b) => (a.v > b.v ? a : b)).i;
}

function Cell({ children, highlight, className = '' }: { children: React.ReactNode; highlight?: boolean; className?: string }) {
    return (
        <td className={`p-4 border-l align-top ${highlight ? 'bg-green-50' : ''} ${className}`}>
            {highlight && (
                <div className="flex items-center gap-1 text-xs text-green-600 font-semibold mb-1">
                    <Check size={12} /> Mejor valor
                </div>
            )}
            {children}
        </td>
    );
}

// ─── Section header row ───────────────────────────────────────────────────────
function SectionRow({ icon: Icon, label, colCount }: { icon: React.ElementType; label: string; colCount: number }) {
    return (
        <tr className="bg-gray-100">
            <td colSpan={colCount + 1} className="px-4 py-2">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wide">
                    <Icon size={14} />
                    {label}
                </div>
            </td>
        </tr>
    );
}

// ─── Empty State ──────────────────────────────────────────────────────────────
function EmptyState({ onAdd }: { onAdd: (school: School) => void }) {
    const featured = schools.filter(s => s.featured).slice(0, 4);
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center py-16 px-4">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <GitCompare size={36} className="text-primary-600" />
            </div>
            <h1 className="text-3xl font-bold mb-3 text-center">Compara colegios lado a lado</h1>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                Añade hasta 3 colegios para comparar precio, metodología, instalaciones y mucho más.
            </p>

            <div className="w-full max-w-md mb-10">
                <SchoolPicker onAdd={onAdd} excludeIds={[]} />
            </div>

            <div className="w-full max-w-2xl">
                <p className="text-sm font-semibold text-gray-500 mb-4 text-center">O empieza con colegios destacados</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {featured.map(school => (
                        <button
                            key={school.id}
                            onClick={() => onAdd(school)}
                            className="group rounded-xl border border-gray-200 overflow-hidden hover:border-primary-300 hover:shadow-md transition-all text-left"
                        >
                            <div className="relative h-24 bg-gray-100">
                                <Image src={school.images[0]} alt={school.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-3">
                                <p className="font-semibold text-xs text-gray-900 leading-tight mb-1 line-clamp-2">{school.name}</p>
                                <p className="text-xs text-gray-500">{school.city}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ComparePage() {
    const searchParams = useSearchParams();
    const schoolIds = searchParams.get('schools')?.split(',') || [];

    const [selectedSchools, setSelectedSchools] = useState<School[]>(
        schools.filter(s => schoolIds.includes(s.id)).slice(0, 3)
    );

    const addSchool = (school: School) => {
        if (selectedSchools.length >= 3) return;
        if (selectedSchools.find(s => s.id === school.id)) return;
        setSelectedSchools([...selectedSchools, school]);
    };

    const removeSchool = (id: string) => {
        setSelectedSchools(selectedSchools.filter(s => s.id !== id));
    };

    if (selectedSchools.length === 0) {
        return <div className="container-custom"><EmptyState onAdd={addSchool} /></div>;
    }

    const n = selectedSchools.length;

    // Compute best indices for highlights
    const bestRating = getBestIdx(selectedSchools.map(s => s.rating));
    const bestPrice = getBestIdx(selectedSchools.map(s => s.priceMonthly ?? null), true);
    const bestRatio = getBestIdx(
        selectedSchools.map(s => {
            const parts = s.teacherStudentRatio.split(':');
            return parts.length === 2 ? parseFloat(parts[1]) : null;
        }),
        true
    );
    const bestStudents = getBestIdx(selectedSchools.map(s => s.totalStudents), true);
    const bestLanguages = getBestIdx(selectedSchools.map(s => s.languages.length));

    const colWidth = 'min-w-[260px]';
    const labelCol = 'w-[180px] min-w-[180px]';

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page header */}
            <div className="bg-white border-b sticky top-16 z-30">
                <div className="container-custom py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold">Comparar colegios</h1>
                        <p className="text-sm text-gray-500">
                            {n} {n === 1 ? 'colegio seleccionado' : 'colegios seleccionados'} · máx. 3
                        </p>
                    </div>
                    <Link href="/buscar" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
                        Buscar más <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            <div className="container-custom py-6">
                <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <table className="w-full border-collapse">
                        {/* ── School header cards ── */}
                        <thead>
                            <tr>
                                <th className={`${labelCol} bg-gray-50 p-4 sticky left-0 z-20`} />
                                {selectedSchools.map((school, i) => (
                                    <th key={school.id} className={`${colWidth} p-4 border-l bg-white align-top`}>
                                        <div className="relative h-36 rounded-xl overflow-hidden mb-3 bg-gray-100">
                                            <Image
                                                src={school.images[0]}
                                                alt={school.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <button
                                                onClick={() => removeSchool(school.id)}
                                                className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white transition-all shadow-sm"
                                            >
                                                <X size={14} />
                                            </button>
                                            {i === bestRating && (
                                                <div className="absolute bottom-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                                                    ⭐ Mejor valorado
                                                </div>
                                            )}
                                        </div>
                                        <Link href={`/${school.slug}`} className="font-bold text-base hover:text-primary-600 transition-colors block mb-1 leading-tight">
                                            {school.name}
                                        </Link>
                                        <div className="flex items-center gap-1.5 text-sm mb-1">
                                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                            <span className="font-semibold">{formatRating(school.rating)}</span>
                                            <span className="text-gray-500">({school.reviewCount})</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <MapPin size={12} />
                                            {school.city}
                                        </div>
                                    </th>
                                ))}
                                {/* Add school column */}
                                {n < 3 && (
                                    <th className={`${colWidth} p-4 border-l bg-gray-50/50 align-top`}>
                                        <div className="h-36 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center mb-3 text-gray-400">
                                            <Plus size={24} className="mb-1" />
                                            <span className="text-xs font-medium">Añadir colegio</span>
                                        </div>
                                        <SchoolPicker onAdd={addSchool} excludeIds={selectedSchools.map(s => s.id)} />
                                    </th>
                                )}
                            </tr>
                        </thead>

                        <tbody>
                            {/* ── GENERAL ── */}
                            <SectionRow icon={Building} label="Información general" colCount={n < 3 ? n + 1 : n} />

                            <tr className="border-t">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Tipo de centro</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        <span className="inline-block px-2.5 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                                            {SCHOOL_TYPES[s.type]}
                                        </span>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            <tr className="border-t bg-gray-50/30">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Ubicación</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        <div className="flex items-start gap-1.5 text-sm">
                                            <MapPin size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                            <span>{s.neighborhood}, {s.city}</span>
                                        </div>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            <tr className="border-t">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Fundado en</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        <span className="text-sm">{s.founded}</span>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            <tr className="border-t bg-gray-50/30">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>
                                    <div className="flex items-center gap-1.5"><Users size={14} className="text-gray-400" /> Alumnos totales</div>
                                </td>
                                {selectedSchools.map((s, i) => (
                                    <Cell key={s.id} highlight={i === bestStudents}>
                                        <span className="text-sm font-semibold">{s.totalStudents.toLocaleString()}</span>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            <tr className="border-t">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Ratio alumnos/clase</td>
                                {selectedSchools.map((s, i) => (
                                    <Cell key={s.id} highlight={i === bestRatio}>
                                        <span className="text-sm font-semibold">{s.teacherStudentRatio}</span>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            {/* ── ACADÉMICO ── */}
                            <SectionRow icon={BookOpen} label="Académico" colCount={n < 3 ? n + 1 : n} />

                            <tr className="border-t">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Metodología</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        <span className="inline-block px-2.5 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full">
                                            {s.methodology || 'Tradicional'}
                                        </span>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            <tr className="border-t bg-gray-50/30">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Etapas educativas</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        <div className="flex flex-wrap gap-1">
                                            {s.stages.map(stage => (
                                                <span key={stage} className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                                                    {STAGE_LABELS[stage].split(' ')[0]}
                                                </span>
                                            ))}
                                        </div>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            <tr className="border-t">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>
                                    <div className="flex items-center gap-1.5"><Globe size={14} className="text-gray-400" /> Idiomas</div>
                                </td>
                                {selectedSchools.map((s, i) => (
                                    <Cell key={s.id} highlight={i === bestLanguages}>
                                        <div className="flex flex-wrap gap-1">
                                            {s.languages.map(lang => (
                                                <span key={lang} className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            <tr className="border-t bg-gray-50/30">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Programa bilingüe</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        {s.bilingual ? (
                                            <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm">
                                                <Check size={14} className="text-green-500" /> Sí
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 text-gray-400 text-sm">
                                                <X size={14} /> No
                                            </span>
                                        )}
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            <tr className="border-t">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Ideario</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        <span className="text-sm capitalize">{s.ideario}</span>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            {/* ── ECONÓMICO ── */}
                            <SectionRow icon={DollarSign} label="Económico" colCount={n < 3 ? n + 1 : n} />

                            <tr className="border-t">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Precio mensual</td>
                                {selectedSchools.map((s, i) => (
                                    <Cell key={s.id} highlight={i === bestPrice && s.priceMonthly !== undefined}>
                                        <span className="text-lg font-bold text-gray-900">
                                            {s.priceMonthly ? formatPrice(s.priceMonthly) : 'Gratuito'}
                                        </span>
                                        {s.priceMonthly && <span className="text-xs text-gray-500 ml-1">/mes</span>}
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            <tr className="border-t bg-gray-50/30">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Rango de precio</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        <span className="text-base font-semibold text-gray-700">{s.priceRange}</span>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            {/* ── SERVICIOS ── */}
                            <SectionRow icon={Wrench} label="Servicios" colCount={n < 3 ? n + 1 : n} />

                            <tr className="border-t">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Servicios disponibles</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        <div className="space-y-1.5">
                                            {s.services.map(service => (
                                                <div key={service} className="flex items-center gap-2 text-sm">
                                                    <Check size={13} className="text-green-500 flex-shrink-0" />
                                                    <span>{service}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            {/* ── INSTALACIONES ── */}
                            <SectionRow icon={Building} label="Instalaciones" colCount={n < 3 ? n + 1 : n} />

                            <tr className="border-t">
                                <td className={`${labelCol} bg-gray-50 p-4 text-sm font-medium sticky left-0`}>Instalaciones</td>
                                {selectedSchools.map(s => (
                                    <Cell key={s.id}>
                                        <div className="space-y-1.5">
                                            {s.facilities.map(facility => (
                                                <div key={facility} className="flex items-center gap-2 text-sm">
                                                    <Check size={13} className="text-blue-500 flex-shrink-0" />
                                                    <span>{facility}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Cell>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>

                            {/* ── ACTIONS ── */}
                            <tr className="border-t bg-gray-50">
                                <td className={`${labelCol} bg-gray-50 p-4 sticky left-0`} />
                                {selectedSchools.map(s => (
                                    <td key={s.id} className="p-4 border-l">
                                        <Link
                                            href={`/${s.slug}`}
                                            className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors"
                                        >
                                            Ver perfil completo
                                            <ArrowRight size={14} />
                                        </Link>
                                    </td>
                                ))}
                                {n < 3 && <td className="border-l bg-gray-50/30" />}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
