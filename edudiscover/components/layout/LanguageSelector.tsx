'use client';

import { Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const LANGUAGES = [
    { code: 'es', name: 'Castellano', flag: '🇪🇸', isEmoji: true },
    { code: 'ca', name: 'Català', flag: '/flags/catalan.png', isEmoji: false },
    { code: 'gl', name: 'Galego', flag: '/flags/galician.png', isEmoji: false },
    { code: 'eu', name: 'Euskara', flag: '/flags/basque.png', isEmoji: false },
    { code: 'en', name: 'English', flag: '🇬🇧', isEmoji: true },
];

export default function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    const handleLanguageChange = (language: typeof LANGUAGES[0]) => {
        setSelectedLanguage(language);
        setIsOpen(false);
        // In production, this would trigger i18n language change
        console.log(`Language changed to: ${language.code}`);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Select language"
            >
                <Globe size={18} className="text-gray-600" />
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
                            onClick={() => handleLanguageChange(language)}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${selectedLanguage.code === language.code ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                                }`}
                        >
                            <span className="text-sm font-medium">{language.name}</span>
                            {selectedLanguage.code === language.code && (
                                <span className="ml-auto text-primary-600">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
