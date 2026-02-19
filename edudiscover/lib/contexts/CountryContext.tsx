'use client';

import React, { createContext, useContext, useState } from 'react';
import { Country, COUNTRIES } from '@/lib/data/countries';
import { setCookie } from 'cookies-next';

type CountryContextType = {
    selectedCountry: Country;
    setSelectedCountry: (country: Country) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children, initialCountry }: { children: React.ReactNode, initialCountry?: Country }) {
    // Initialize with server-provided country (Source of Truth) or fallback to ES
    const [selectedCountry, setSelectedCountryState] = useState<Country>(
        initialCountry || COUNTRIES.find(c => c.code === 'ES')!
    );
    const [isOpen, setIsOpen] = useState(false);

    const setSelectedCountry = (country: Country) => {
        setSelectedCountryState(country);
        // Persist preference for future sessions/server-side reads
        setCookie('NEXT_LOCALE_COUNTRY', country.code, { maxAge: 60 * 60 * 24 * 365 });
        setIsOpen(false);
    };

    return (
        <CountryContext.Provider value={{ selectedCountry, setSelectedCountry, isOpen, setIsOpen }}>
            {children}
        </CountryContext.Provider>
    );
}

export function useCountry() {
    const context = useContext(CountryContext);
    if (context === undefined) {
        throw new Error('useCountry must be used within a CountryProvider');
    }
    return context;
}
