'use client';

import { useState, useEffect } from 'react';
import { CookieConsent, CookieCategory } from '../types/cookieConsent.types';
import { DEFAULT_CONSENT, CONSENT_STORAGE_KEY } from '../constants/cookieCategories';

export function useCookieConsent() {
    const [consent, setConsent] = useState<CookieConsent | null>(null);
    const [showBanner, setShowBanner] = useState(false);

    // Load consent from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
        if (stored) {
            try {
                setConsent(JSON.parse(stored));
                setShowBanner(false);
            } catch (error) {
                console.error('Error parsing cookie consent:', error);
                setShowBanner(true);
            }
        } else {
            setShowBanner(true);
        }
    }, []);

    // Save consent to localStorage
    const saveConsent = (newConsent: CookieConsent) => {
        const consentWithTimestamp = {
            ...newConsent,
            essential: true, // Always true
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentWithTimestamp));
        setConsent(consentWithTimestamp);
        setShowBanner(false);
    };

    // Accept all cookies
    const acceptAll = () => {
        saveConsent({
            essential: true,
            analytics: true,
            advertising: true,
            social: true,
            timestamp: new Date().toISOString()
        });
    };

    // Reject all non-essential cookies
    const rejectAll = () => {
        saveConsent(DEFAULT_CONSENT);
    };

    // Update specific category
    const updateCategory = (category: CookieCategory, value: boolean) => {
        if (category === 'essential') return; // Can't disable essential

        const newConsent = {
            ...(consent || DEFAULT_CONSENT),
            [category]: value,
            timestamp: new Date().toISOString()
        };
        saveConsent(newConsent);
    };

    // Update multiple categories at once
    const updateConsent = (updates: Partial<CookieConsent>) => {
        const newConsent = {
            ...(consent || DEFAULT_CONSENT),
            ...updates,
            essential: true, // Always true
            timestamp: new Date().toISOString()
        };
        saveConsent(newConsent);
    };

    // Check if a category is allowed
    const isAllowed = (category: CookieCategory): boolean => {
        if (!consent) return category === 'essential';
        return consent[category] || false;
    };

    // Reset consent (for testing)
    const resetConsent = () => {
        localStorage.removeItem(CONSENT_STORAGE_KEY);
        setConsent(null);
        setShowBanner(true);
    };

    return {
        consent,
        showBanner,
        setShowBanner,
        acceptAll,
        rejectAll,
        updateCategory,
        updateConsent,
        isAllowed,
        resetConsent
    };
}
