import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">E</span>
                            </div>
                            <span className="text-xl font-bold text-white">
                                Edu<span className="text-primary-400">Discover</span>
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Encuentra el colegio perfecto para tu hijo. Más de 12,500 colegios en España.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Colegios */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Colegios</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/colegios-en-madrid" className="hover:text-primary-400 transition-colors">Colegios en Madrid</Link></li>
                            <li><Link href="/colegios-en-barcelona" className="hover:text-primary-400 transition-colors">Colegios en Barcelona</Link></li>
                            <li><Link href="/colegios-en-valencia" className="hover:text-primary-400 transition-colors">Colegios en Valencia</Link></li>
                            <li><Link href="/colegios-internacionales" className="hover:text-primary-400 transition-colors">Colegios Internacionales</Link></li>
                            <li><Link href="/colegios-bilingues" className="hover:text-primary-400 transition-colors">Colegios Bilingües</Link></li>
                        </ul>
                    </div>

                    {/* Recursos */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Recursos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/guias" className="hover:text-primary-400 transition-colors">Guías para padres</Link></li>
                            <li><Link href="/rankings" className="hover:text-primary-400 transition-colors">Rankings</Link></li>
                            <li><Link href="/comparar" className="hover:text-primary-400 transition-colors">Comparador</Link></li>
                            <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
                            <li><Link href="/ayuda" className="hover:text-primary-400 transition-colors">Ayuda</Link></li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/sobre-nosotros" className="hover:text-primary-400 transition-colors">Sobre nosotros</Link></li>
                            <li><Link href="/para-colegios" className="hover:text-primary-400 transition-colors">Para colegios</Link></li>
                            <li><Link href="/contacto" className="hover:text-primary-400 transition-colors">Contacto</Link></li>
                            <li><Link href="/privacidad" className="hover:text-primary-400 transition-colors">Privacidad</Link></li>
                            <li><Link href="/terminos" className="hover:text-primary-400 transition-colors">Términos</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
                    <p>&copy; 2026 EduDiscover. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
