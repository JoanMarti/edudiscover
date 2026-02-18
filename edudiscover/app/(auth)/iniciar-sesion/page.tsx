'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import SocialLoginButtons from '@/components/auth/SocialLoginButtons';

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.email || !formData.password) {
            setError('Por favor completa todos los campos');
            return;
        }

        setIsLoading(true);

        try {
            const success = await login(formData.email, formData.password);

            if (success) {
                const redirectTo = searchParams.get('redirect') || '/perfil';
                router.push(redirectTo);
            } else {
                setError('Email o contraseña incorrectos');
            }
        } catch (error) {
            setError('Error al iniciar sesión. Inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 py-12 px-4">
            <div className="container-custom max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Iniciar sesión
                        </h1>
                        <p className="text-gray-600">
                            Accede a tu cuenta de EduDiscover
                        </p>
                    </div>

                    {/* Social Login */}
                    <SocialLoginButtons onSocialLogin={(provider) => {
                        // In production, this would handle OAuth flow
                        console.log(`Social login with ${provider}`);
                    }} />

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">o inicia sesión con email</span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                                <AlertCircle size={20} />
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="input pl-10 w-full"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <Link
                                    href="/recuperar-contrasena"
                                    className="text-sm text-primary-600 hover:text-primary-700"
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="input pl-10 pr-10 w-full"
                                    placeholder="Tu contraseña"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                checked={formData.rememberMe}
                                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                className="rounded text-primary-600 focus:ring-primary-500"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                                Recordarme
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-primary w-full py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">o</span>
                        </div>
                    </div>

                    {/* Register Link */}
                    <div className="text-center">
                        <p className="text-gray-600">
                            ¿No tienes cuenta?{' '}
                            <Link href="/registrarse" className="text-primary-600 hover:text-primary-700 font-medium">
                                Regístrate gratis
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
