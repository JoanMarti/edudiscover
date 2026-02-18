import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Buscar Colegios en España | EduDiscover',
    description: 'Busca entre más de 12.500 colegios en España. Filtra por ciudad, tipo de centro, metodología, precio, etapa educativa y mucho más. Encuentra el colegio perfecto para tu hijo.',
    keywords: 'buscar colegios, colegios España, colegios por ciudad, colegios privados, colegios concertados, colegios públicos',
    openGraph: {
        title: 'Buscar Colegios en España | EduDiscover',
        description: 'Filtra entre más de 12.500 colegios por ciudad, tipo, metodología y precio.',
        type: 'website',
    },
};

export default function BuscarLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
