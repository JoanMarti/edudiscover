'use client';

import { Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const LANGUAGES = [
    { code: 'es', name: 'Castellano', flag: '🇪🇸', isEmoji: true },
    { code: 'ca', name: 'Català', flag: '/flags/catalan.png', isEmoji: false },
    { code: 'gl', name: 'Galego', flag: '/flags/galician.png', isEmoji: false },
    { code: 'eu', name: 'Euskara', flag: '/flags/basque.png', isEmoji: false },
    { code: 'en', name: 'English', flag: '🇬🇧', isEmoji: true },
];

export default function LanguageSelector() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedLanguage = LANGUAGES.find(l => l.code === locale) || LANGUAGES[0];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (newLocale: string) => {
        setIsOpen(false);
        startTransition(() => {
            // Replace the locale in the pathname
            // Default pathname includes locale, e.g. /es/buscar
            // We need to switch /es/buscar to /en/buscar

            const segments = pathname.split('/');
            // segments[0] is empty string because pathname starts with /
            // segments[1] is the locale
            segments[1] = newLocale;
            const newPath = segments.join('/');

            router.replace(newPath);
        });
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Select language"
                disabled={isPending}
            >
                <div className="flex items-center justify-center w-5 h-5">
                    {selectedLanguage.isEmoji ? (
                        <span className="text-lg leading-none">{selectedLanguage.flag}</span>
                    ) : (
                        <Image
                            src={selectedLanguage.flag}
                            alt={selectedLanguage.name}
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                    )}
                </div>
                <span className="hidden md:inline text-sm font-medium text-gray-700">
                    {selectedLanguage.code.toUpperCase()}
                </span>
                <ChevronDown size={16} className="text-gray-600" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {LANGUAGES.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${locale === language.code ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                                }`}
                        >
                            <div className="flex items-center justify-center w-5 h-5">
                                {language.isEmoji ? (
                                    <span className="text-lg leading-none">{language.flag}</span>
                                ) : (
                                    <Image
                                        src={language.flag}
                                        alt={language.name}
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                )}
                            </div>
                            <span className="text-sm font-medium">{language.name}</span>
                            {locale === language.code && (
                                <span className="ml-auto text-primary-600">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
