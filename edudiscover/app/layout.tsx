import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.variable} font-sans`}>
                <AuthProvider>
                    <Header />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                    <CookieConsent />
                </AuthProvider>
            </body>
        </html>
    );
}
