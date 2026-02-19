import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff0f1',
                    100: '#ffe0e2',
                    200: '#ffc6c9',
                    300: '#ff9ba1',
                    400: '#ff646e',
                    500: '#e05d5d', // Base (Coral/Terracotta)
                    600: '#d93025',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                    950: '#450a0a',
                },
                accent: {
                    50: '#fafbf0',
                    100: '#f3f6d8',
                    200: '#e6eca8',
                    300: '#d4df6d',
                    400: '#bdd03c',
                    500: '#a3b824', // Greenish/Gold for stars? Or stick to yellow?
                    // Let's keep a warm yellow/orange for accents like stars
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            boxShadow: {
                'card': '0 6px 16px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 12px 32px rgba(0, 0, 0, 0.1)',
                'floating': '0 8px 20px rgba(0, 0, 0, 0.08)',
            },
        },
    },
    plugins: [],
};

export default config;
