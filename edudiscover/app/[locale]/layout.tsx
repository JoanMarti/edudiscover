import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/lib/contexts/AuthContext";
import CookieConsent from "@/components/gdpr/CookieConsent";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "EduDiscover - Encuentra el colegio perfecto para tu hijo",
    description: "Descubre, compara y contacta con los mejores colegios de España. Opiniones verificadas, información completa y herramientas de comparación.",
    keywords: "colegios, escuelas, educación, España, comparar colegios, opiniones colegios",
};

export default async function LocaleLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${inter.variable} font-sans`}>
                <NextIntlClientProvider messages={messages}>
                    <AuthProvider>
                        <Header />
                        <main className="min-h-screen">
                            {children}
                        </main>
                        <Footer />
                        <CookieConsent />
                    </AuthProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
