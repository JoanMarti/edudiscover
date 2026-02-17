'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">E</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">
                            Edu<span className="text-primary-600">Discover</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/buscar" className="text-gray-700 hover:text-primary-600 transition-colors">
                            Buscar colegios
                        </Link>
                        <Link href="/descubrir" className="text-gray-700 hover:text-primary-600 transition-colors">
                            Descubrir
                        </Link>
                        <Link href="/comparar" className="text-gray-700 hover:text-primary-600 transition-colors">
                            Comparar
                        </Link>
                        <Link href="/guias" className="text-gray-700 hover:text-primary-600 transition-colors">
                            Guías
                        </Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-primary-600 transition-colors">
                            Iniciar sesión
                        </button>
                        <button className="btn-primary text-sm">
                            Registrarse
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/buscar"
                                className="text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Buscar colegios
                            </Link>
                            <Link
                                href="/descubrir"
                                className="text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Descubrir
                            </Link>
                            <Link
                                href="/comparar"
                                className="text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Comparar
                            </Link>
                            <Link
                                href="/guias"
                                className="text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Guías
                            </Link>
                            <div className="pt-4 border-t border-gray-200 space-y-2">
                                <button className="w-full text-left text-gray-700 hover:text-primary-600 transition-colors">
                                    Iniciar sesión
                                </button>
                                <button className="btn-primary w-full text-sm">
                                    Registrarse
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
