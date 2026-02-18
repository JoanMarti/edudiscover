export interface Country {
    code: string;
    name: string; // Translation key
    flag: string;
    region: 'Western Europe' | 'Southern Europe' | 'Northern Europe' | 'Eastern Europe' | 'Central Europe';
}

export const COUNTRIES: Country[] = [
    // Western Europe
    { code: 'FR', name: 'France', flag: '🇫🇷', region: 'Western Europe' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪', region: 'Western Europe' },
    { code: 'BE', name: 'Belgium', flag: '🇧🇪', region: 'Western Europe' },
    { code: 'NL', name: 'Netherlands', flag: '🇳🇱', region: 'Western Europe' },
    { code: 'LU', name: 'Luxembourg', flag: '🇱🇺', region: 'Western Europe' },
    { code: 'CH', name: 'Switzerland', flag: '🇨🇭', region: 'Western Europe' },
    { code: 'AT', name: 'Austria', flag: '🇦🇹', region: 'Western Europe' },
    { code: 'IE', name: 'Ireland', flag: '🇮🇪', region: 'Western Europe' },
    { code: 'UK', name: 'United Kingdom', flag: '🇬🇧', region: 'Western Europe' },

    // Southern Europe
    { code: 'ES', name: 'Spain', flag: '🇪🇸', region: 'Southern Europe' },
    { code: 'PT', name: 'Portugal', flag: '🇵🇹', region: 'Southern Europe' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹', region: 'Southern Europe' },
    { code: 'GR', name: 'Greece', flag: '🇬🇷', region: 'Southern Europe' },
    { code: 'CY', name: 'Cyprus', flag: '🇨🇾', region: 'Southern Europe' },
    { code: 'MT', name: 'Malta', flag: '🇲🇹', region: 'Southern Europe' },

    // Northern Europe
    { code: 'SE', name: 'Sweden', flag: '🇸🇪', region: 'Northern Europe' },
    { code: 'DK', name: 'Denmark', flag: '🇩🇰', region: 'Northern Europe' },
    { code: 'FI', name: 'Finland', flag: '🇫🇮', region: 'Northern Europe' },

    // Eastern/Central Europe
    { code: 'PL', name: 'Poland', flag: '🇵🇱', region: 'Central Europe' },
    { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿', region: 'Central Europe' },
    { code: 'HU', name: 'Hungary', flag: '🇭🇺', region: 'Central Europe' },
    { code: 'RO', name: 'Romania', flag: '🇷🇴', region: 'Eastern Europe' },
    { code: 'BG', name: 'Bulgaria', flag: '🇧🇬', region: 'Eastern Europe' },
    { code: 'HR', name: 'Croatia', flag: '🇭🇷', region: 'Southern Europe' },
    { code: 'SI', name: 'Slovenia', flag: '🇸🇮', region: 'Central Europe' },
    { code: 'SK', name: 'Slovakia', flag: '🇸🇰', region: 'Central Europe' },
    { code: 'EE', name: 'Estonia', flag: '🇪🇪', region: 'Eastern Europe' },
    { code: 'LV', name: 'Latvia', flag: '🇱🇻', region: 'Eastern Europe' },
    { code: 'LT', name: 'Lithuania', flag: '🇱🇹', region: 'Eastern Europe' },
];

export const getCountryByCode = (code: string) => COUNTRIES.find(c => c.code === code);
