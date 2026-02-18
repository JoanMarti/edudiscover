'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import type { AyudaCCAA } from '@/lib/data/ayudas';

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
export function FaqItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-semibold text-gray-900 pr-4">{pregunta}</span>
                {open
                    ? <ChevronUp size={18} className="text-primary-600 flex-shrink-0" />
                    : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                }
            </button>
            {open && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {respuesta}
                </div>
            )}
        </div>
    );
}

// ─── CCAA Card ────────────────────────────────────────────────────────────────
export function CcaaCard({ ccaa }: { ccaa: AyudaCCAA }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`rounded-2xl border-2 ${ccaa.color} overflow-hidden`}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-4 text-left"
            >
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{ccaa.emoji}</span>
                    <div>
                        <p className="font-bold text-gray-900">{ccaa.comunidad}</p>
                        <p className="text-xs text-gray-500">
                            {ccaa.ayudas.length} {ccaa.ayudas.length === 1 ? 'ayuda' : 'ayudas'} disponibles
                        </p>
                    </div>
                </div>
                {open
                    ? <ChevronUp size={16} className="text-gray-500" />
                    : <ChevronDown size={16} className="text-gray-500" />
                }
            </button>
            {open && (
                <div className="border-t border-gray-200 bg-white divide-y divide-gray-100">
                    {ccaa.ayudas.map((ayuda, i) => (
                        <div key={i} className="p-4">
                            <div className="flex items-start justify-between gap-3 mb-2">
                                <h4 className="font-semibold text-sm text-gray-900">{ayuda.nombre}</h4>
                                <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                                    {ayuda.importe}
                                </span>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">{ayuda.descripcion}</p>
                            <p className="text-xs text-gray-400 mb-3">{ayuda.organismo}</p>
                            <a
                                href={ayuda.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 font-medium"
                            >
                                Más información <ExternalLink size={11} />
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
