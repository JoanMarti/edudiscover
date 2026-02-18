'use client';

import Link from 'next/link';
import { Search, Menu, X, User, Heart, LogOut, Settings } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';

export default function Header() {
    const t = useTranslations('Navigation');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();
    const userMenuRef = useRef<HTMLDivElement>(null);

    // Close user menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        setUserMenuOpen(false);
        router.push('/');
    };

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
                            {t('search')}
                        </Link>
                        <Link href="/descubrir" className="text-gray-700 hover:text-primary-600 transition-colors">
                            {t('discover')}
                        </Link>
                        <Link href="/comparar" className="text-gray-700 hover:text-primary-600 transition-colors">
                            {t('compare')}
                        </Link>
                        <Link href="/guias" className="text-gray-700 hover:text-primary-600 transition-colors">
                            {t('guides')}
                        </Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSelector />
                        {isAuthenticated && user ? (
                            <div className="relative" ref={userMenuRef}>
                                <button
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                        <User size={18} className="text-primary-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">
                                        {user.profile.firstName}
                                    </span>
                                </button>

                                {/* User Dropdown */}
                                {userMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="text-sm font-medium text-gray-900">
                                                {user.profile.firstName} {user.profile.lastName}
                                            </p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                        <Link
                                            href="/perfil"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                            onClick={() => setUserMenuOpen(false)}
                                        >
                                            <Settings size={16} />
                                            {t('profile')}
                                        </Link>
                                        <Link
                                            href="/perfil#guardados"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                            onClick={() => setUserMenuOpen(false)}
                                        >
                                            <Heart size={16} />
                                            Guardados ({user.savedSchools.length})
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                        >
                                            <LogOut size={16} />
                                            {t('logout')}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link href="/iniciar-sesion" className="text-gray-700 hover:text-primary-600 transition-colors">
                                    {t('login')}
                                </Link>
                                <Link href="/registrarse" className="btn-primary text-sm">
                                    {t('register')}
                                </Link>
                            </>
                        )}
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
                                {t('search')}
                            </Link>
                            <Link
                                href="/descubrir"
                                className="text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('discover')}
                            </Link>
                            <Link
                                href="/comparar"
                                className="text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('compare')}
                            </Link>
                            <Link
                                href="/guias"
                                className="text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('guides')}
                            </Link>
                            <div className="pt-4 border-t border-gray-200 space-y-2">
                                {isAuthenticated && user ? (
                                    <>
                                        <Link
                                            href="/perfil"
                                            className="block text-gray-700 hover:text-primary-600 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {t('profile')}
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setMobileMenuOpen(false);
                                            }}
                                            className="w-full text-left text-red-600 hover:text-red-700 transition-colors"
                                        >
                                            {t('logout')}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href="/iniciar-sesion"
                                            className="block text-gray-700 hover:text-primary-600 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {t('login')}
                                        </Link>
                                        <Link
                                            href="/registrarse"
                                            className="btn-primary w-full text-sm text-center"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {t('register')}
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
