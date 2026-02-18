export type CookieCategory = 'essential' | 'analytics' | 'advertising' | 'social';

export interface CookieConsent {
    essential: boolean;      // Siempre true
    analytics: boolean;
    advertising: boolean;
    social: boolean;
    timestamp: string;
}

export interface CookieCategoryInfo {
    id: CookieCategory;
    name: string;
    description: string;
    required: boolean;
    examples: string[];
}
