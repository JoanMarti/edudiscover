'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import type { Metadata } from 'next';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'hola@edudiscover.es',
        detail: 'Respondemos en menos de 24h',
    },
    {
        icon: Phone,
        label: 'Teléfono',
        value: '+34 91 123 45 67',
        detail: 'Lunes a viernes, 9h-18h',
    },
    {
        icon: MapPin,
        label: 'Oficina',
        value: 'Calle Gran Vía 28, Madrid',
        detail: 'Visitas con cita previa',
    },
    {
        icon: Clock,
        label: 'Horario',
        value: 'Lun-Vie: 9:00 - 18:00',
        detail: 'Zona horaria CET',
    },
];

const subjects = [
    'Información general',
    'Registrar mi colegio',
    'Problema técnico',
    'Reclamación o incidencia',
    'Colaboración o prensa',
    'Otro',
];

export default function ContactoPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitted(true);
        setLoading(false);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="container-custom py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        ¿Tienes alguna pregunta, sugerencia o incidencia? Estamos aquí para ayudarte.
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Información de contacto</h2>
                        {contactInfo.map((info) => (
                            <div key={info.label} className="flex gap-4">
                                <div className="bg-primary-100 p-3 rounded-xl h-fit">
                                    <info.icon className="text-primary-600" size={20} />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{info.label}</div>
                                    <div className="text-gray-700">{info.value}</div>
                                    <div className="text-gray-500 text-sm">{info.detail}</div>
                                </div>
                            </div>
                        ))}

                        <div className="bg-primary-50 rounded-xl p-6 mt-8">
                            <h3 className="font-bold mb-2">¿Eres un colegio?</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Si quieres registrar o actualizar la información de tu centro educativo, contáctanos directamente.
                            </p>
                            <a href="mailto:colegios@edudiscover.es" className="text-primary-600 font-medium text-sm hover:underline">
                                colegios@edudiscover.es →
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        {submitted ? (
                            <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
                                <div className="flex justify-center mb-6">
                                    <CheckCircle className="text-green-500" size={64} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">¡Mensaje enviado!</h2>
                                <p className="text-gray-600 mb-8">
                                    Hemos recibido tu mensaje y te responderemos en menos de 24 horas laborables.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                                    className="btn-secondary"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={e => setForm({ ...form, name: e.target.value })}
                                                className="input w-full"
                                                placeholder="Tu nombre"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={e => setForm({ ...form, email: e.target.value })}
                                                className="input w-full"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Asunto *
                                        </label>
                                        <select
                                            required
                                            value={form.subject}
                                            onChange={e => setForm({ ...form, subject: e.target.value })}
                                            className="input w-full"
                                        >
                                            <option value="">Selecciona un asunto</option>
                                            {subjects.map(s => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            required
                                            rows={6}
                                            value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                            className="input w-full resize-none"
                                            placeholder="Cuéntanos en qué podemos ayudarte..."
                                        />
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <input type="checkbox" required id="privacy" className="rounded" />
                                        <label htmlFor="privacy">
                                            Acepto la{' '}
                                            <a href="/privacidad" className="text-primary-600 hover:underline">
                                                política de privacidad
                                            </a>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary w-full flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Enviar mensaje
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
