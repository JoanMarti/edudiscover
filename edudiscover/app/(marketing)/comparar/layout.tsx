import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Comparar Colegios | EduDiscover',
    description: 'Compara hasta 3 colegios lado a lado. Analiza precio, valoraciones, instalaciones, metodología y servicios para tomar la mejor decisión para tu familia.',
    keywords: 'comparar colegios, comparador colegios España, diferencias entre colegios',
    openGraph: {
        title: 'Comparar Colegios | EduDiscover',
        description: 'Compara hasta 3 colegios lado a lado con todos los datos que necesitas.',
        type: 'website',
    },
};

export default function CompararLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
