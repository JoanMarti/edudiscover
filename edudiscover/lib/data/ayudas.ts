// ─── Types ────────────────────────────────────────────────────────────────────

export interface AyudaNacional {
    id: string;
    nombre: string;
    organismo: string;
    descripcion: string;
    importe: string;
    etapas: string[];
    requisitos: string[];
    plazo: string;
    url: string;
    destacada: boolean;
}

export interface AyudaCCAA {
    comunidad: string;
    slug: string;
    emoji: string;
    color: string;
    ayudas: {
        nombre: string;
        descripcion: string;
        importe: string;
        organismo: string;
        url: string;
    }[];
}

export interface TipoAyuda {
    id: string;
    nombre: string;
    emoji: string;
    descripcion: string;
    importeMax: string;
    color: string;
    ejemplos: string[];
}

export interface CalendarioItem {
    mes: string;
    evento: string;
    tipo: 'nacional' | 'autonomica' | 'municipal';
    descripcion: string;
}

// ─── Ayudas Nacionales ────────────────────────────────────────────────────────

export const ayudasNacionales: AyudaNacional[] = [
    {
        id: 'beca-general-mec',
        nombre: 'Beca General del Ministerio de Educación',
        organismo: 'Ministerio de Educación, FP y Deportes',
        descripcion: 'La beca más importante del sistema educativo español. Cubre estudios postobligatorios: Bachillerato, FP, estudios universitarios y de máster.',
        importe: 'Desde 300€ hasta 6.000€/año según componentes',
        etapas: ['Bachillerato', 'FP', 'Universidad'],
        requisitos: [
            'Umbral de renta familiar (varía según nº miembros)',
            'Rendimiento académico mínimo',
            'Matrícula en centro sostenido con fondos públicos o privado',
            'Residencia en España',
        ],
        plazo: 'Convocatoria anual: septiembre–octubre',
        url: 'https://www.becaseducacion.gob.es',
        destacada: true,
    },
    {
        id: 'beca-excelencia',
        nombre: 'Becas de Excelencia Académica',
        organismo: 'Ministerio de Educación, FP y Deportes',
        descripcion: 'Para alumnos con expediente académico sobresaliente. Complementan la beca general con una cuantía adicional por rendimiento.',
        importe: 'Hasta 1.500€ adicionales',
        etapas: ['Bachillerato', 'FP', 'Universidad'],
        requisitos: [
            'Nota media superior a 8,5',
            'Haber obtenido beca general el año anterior',
        ],
        plazo: 'Misma convocatoria que la beca general',
        url: 'https://www.becaseducacion.gob.es',
        destacada: false,
    },
    {
        id: 'ayuda-libros',
        nombre: 'Programa de Gratuidad de Libros de Texto',
        organismo: 'Ministerio de Educación / CCAA',
        descripcion: 'Ayuda para la adquisición de libros de texto y material escolar en Educación Primaria y Secundaria Obligatoria.',
        importe: 'Hasta 200€/año por alumno',
        etapas: ['Primaria', 'Secundaria'],
        requisitos: [
            'Escolarización en centro público o concertado',
            'Umbral de renta (varía por CCAA)',
        ],
        plazo: 'Junio–julio (antes del inicio del curso)',
        url: 'https://www.educacionyfp.gob.es',
        destacada: true,
    },
    {
        id: 'ayuda-comedor',
        nombre: 'Ayudas de Comedor Escolar',
        organismo: 'CCAA y Ayuntamientos',
        descripcion: 'Subvención total o parcial del servicio de comedor escolar para familias con dificultades económicas.',
        importe: 'Desde gratuidad total hasta 50% de descuento',
        etapas: ['Infantil', 'Primaria', 'Secundaria'],
        requisitos: [
            'Renta familiar por debajo del umbral establecido',
            'Situación de vulnerabilidad social (en algunos casos)',
        ],
        plazo: 'Septiembre–octubre (inicio de curso)',
        url: 'https://www.educacionyfp.gob.es',
        destacada: true,
    },
    {
        id: 'ayuda-transporte',
        nombre: 'Ayudas de Transporte Escolar',
        organismo: 'CCAA y Ayuntamientos',
        descripcion: 'Transporte gratuito o subvencionado para alumnos que residen a más de 3 km del centro educativo más cercano.',
        importe: 'Gratuito en la mayoría de casos',
        etapas: ['Infantil', 'Primaria', 'Secundaria'],
        requisitos: [
            'Distancia mínima al centro (generalmente 3 km)',
            'Escolarización en centro público',
        ],
        plazo: 'Antes del inicio del curso escolar',
        url: 'https://www.educacionyfp.gob.es',
        destacada: false,
    },
    {
        id: 'beca-fp',
        nombre: 'Becas para Formación Profesional',
        organismo: 'Ministerio de Educación, FP y Deportes',
        descripcion: 'Ayudas específicas para alumnos de FP de Grado Medio y Superior, incluyendo ayudas para prácticas en empresa (FCT).',
        importe: 'Hasta 3.000€/año',
        etapas: ['FP Grado Medio', 'FP Grado Superior'],
        requisitos: [
            'Matrícula en ciclo formativo',
            'Umbral de renta familiar',
            'No tener título de la misma o superior nivel',
        ],
        plazo: 'Septiembre–octubre',
        url: 'https://www.becaseducacion.gob.es/becas-y-ayudas/fp.html',
        destacada: false,
    },
    {
        id: 'ayuda-nee',
        nombre: 'Ayudas para Educación Especial y NEE',
        organismo: 'Ministerio de Educación / CCAA',
        descripcion: 'Apoyo económico para alumnos con necesidades educativas especiales: logopedia, psicología, materiales adaptados y transporte especializado.',
        importe: 'Variable según necesidades (hasta 5.000€/año)',
        etapas: ['Infantil', 'Primaria', 'Secundaria', 'Bachillerato'],
        requisitos: [
            'Dictamen de escolarización o informe psicopedagógico',
            'Reconocimiento de NEE por el equipo de orientación',
        ],
        plazo: 'Todo el año (solicitud continua)',
        url: 'https://www.educacionyfp.gob.es',
        destacada: false,
    },
];

// ─── Tipos de Ayuda ───────────────────────────────────────────────────────────

export const tiposAyuda: TipoAyuda[] = [
    {
        id: 'comedor',
        nombre: 'Comedor Escolar',
        emoji: '🍽️',
        descripcion: 'Subvención del servicio de comedor para familias con dificultades económicas.',
        importeMax: 'Hasta gratuidad total',
        color: 'bg-orange-50 border-orange-200 text-orange-700',
        ejemplos: ['Gratuidad total', 'Reducción del 50%', 'Precio social (1–2€/día)'],
    },
    {
        id: 'libros',
        nombre: 'Libros y Material',
        emoji: '📚',
        descripcion: 'Ayuda para la compra de libros de texto, material escolar y dispositivos digitales.',
        importeMax: 'Hasta 200€/año',
        color: 'bg-blue-50 border-blue-200 text-blue-700',
        ejemplos: ['Banco de libros gratuito', 'Cheque-libro', 'Préstamo de tablets'],
    },
    {
        id: 'transporte',
        nombre: 'Transporte Escolar',
        emoji: '🚌',
        descripcion: 'Transporte gratuito o subvencionado para alumnos que viven lejos del centro.',
        importeMax: 'Generalmente gratuito',
        color: 'bg-green-50 border-green-200 text-green-700',
        ejemplos: ['Ruta escolar gratuita', 'Abono transporte público', 'Taxi escolar adaptado'],
    },
    {
        id: 'actividades',
        nombre: 'Actividades Extraescolares',
        emoji: '⚽',
        descripcion: 'Ayudas para participar en actividades deportivas, culturales y de ocio educativo.',
        importeMax: 'Hasta 300€/año',
        color: 'bg-purple-50 border-purple-200 text-purple-700',
        ejemplos: ['Deporte escolar', 'Escuelas de música', 'Campamentos de verano'],
    },
    {
        id: 'guarderia',
        nombre: 'Guarderías (0-3 años)',
        emoji: '👶',
        descripcion: 'Bonificaciones y ayudas para el primer ciclo de Educación Infantil (0-3 años).',
        importeMax: 'Hasta 100% de bonificación',
        color: 'bg-pink-50 border-pink-200 text-pink-700',
        ejemplos: ['Cheque guardería', 'Precio público reducido', 'Gratuidad para rentas bajas'],
    },
    {
        id: 'nee',
        nombre: 'Educación Especial y NEE',
        emoji: '♿',
        descripcion: 'Apoyos específicos para alumnos con necesidades educativas especiales.',
        importeMax: 'Hasta 5.000€/año',
        color: 'bg-teal-50 border-teal-200 text-teal-700',
        ejemplos: ['Logopedia', 'Psicología escolar', 'Materiales adaptados', 'Transporte especial'],
    },
];

// ─── Ayudas por CCAA ──────────────────────────────────────────────────────────

export const ayudasPorCCAA: AyudaCCAA[] = [
    {
        comunidad: 'Andalucía',
        slug: 'andalucia',
        emoji: '🌻',
        color: 'bg-green-50 border-green-200',
        ayudas: [
            {
                nombre: 'Beca Adriano',
                descripcion: 'Becas de excelencia para alumnos andaluces con expediente sobresaliente.',
                importe: 'Hasta 3.000€',
                organismo: 'Junta de Andalucía - Consejería de Educación',
                url: 'https://www.juntadeandalucia.es/educacion',
            },
            {
                nombre: 'Ayuda Gratuidad Libros (Andalucía)',
                descripcion: 'Programa de gratuidad de libros de texto para Primaria y ESO en centros públicos.',
                importe: 'Gratuito (banco de libros)',
                organismo: 'Junta de Andalucía',
                url: 'https://www.juntadeandalucia.es/educacion',
            },
        ],
    },
    {
        comunidad: 'Cataluña',
        slug: 'cataluna',
        emoji: '🌹',
        color: 'bg-yellow-50 border-yellow-200',
        ayudas: [
            {
                nombre: 'Beques Menjador',
                descripcion: 'Becas de comedor escolar para familias con renta baja en Cataluña.',
                importe: 'Hasta gratuidad total',
                organismo: 'Departament d\'Educació - Generalitat de Catalunya',
                url: 'https://educacio.gencat.cat',
            },
            {
                nombre: 'Ajuts de material escolar',
                descripcion: 'Ayudas para la compra de material escolar y libros de texto.',
                importe: 'Hasta 150€',
                organismo: 'Generalitat de Catalunya',
                url: 'https://educacio.gencat.cat',
            },
        ],
    },
    {
        comunidad: 'Madrid',
        slug: 'madrid',
        emoji: '🐻',
        color: 'bg-red-50 border-red-200',
        ayudas: [
            {
                nombre: 'Beca Comunidad de Madrid',
                descripcion: 'Ayudas al estudio para Bachillerato y FP en la Comunidad de Madrid.',
                importe: 'Hasta 1.500€',
                organismo: 'Comunidad de Madrid - Consejería de Educación',
                url: 'https://www.comunidad.madrid/educacion',
            },
            {
                nombre: 'Ayuda Escolarización 0-3 años',
                descripcion: 'Bonificaciones en escuelas infantiles públicas de la red de la CAM.',
                importe: 'Hasta 80% de bonificación',
                organismo: 'Comunidad de Madrid',
                url: 'https://www.comunidad.madrid/educacion',
            },
        ],
    },
    {
        comunidad: 'País Vasco',
        slug: 'pais-vasco',
        emoji: '🌿',
        color: 'bg-emerald-50 border-emerald-200',
        ayudas: [
            {
                nombre: 'Diru-laguntzak ikasleentzat',
                descripcion: 'Becas del Gobierno Vasco para estudios postobligatorios y universitarios.',
                importe: 'Hasta 4.000€',
                organismo: 'Gobierno Vasco - Hezkuntza Saila',
                url: 'https://www.euskadi.eus/educacion',
            },
            {
                nombre: 'Ayuda Libros Euskadi',
                descripcion: 'Programa de gratuidad de libros de texto para todos los niveles obligatorios.',
                importe: 'Gratuito',
                organismo: 'Gobierno Vasco',
                url: 'https://www.euskadi.eus/educacion',
            },
        ],
    },
    {
        comunidad: 'Valencia',
        slug: 'valencia',
        emoji: '🍊',
        color: 'bg-orange-50 border-orange-200',
        ayudas: [
            {
                nombre: 'Beques Generalitat Valenciana',
                descripcion: 'Becas de comedor, transporte y material escolar para familias valencianas.',
                importe: 'Hasta 500€/año',
                organismo: 'Generalitat Valenciana - Conselleria d\'Educació',
                url: 'https://www.ceice.gva.es',
            },
        ],
    },
    {
        comunidad: 'Galicia',
        slug: 'galicia',
        emoji: '🐚',
        color: 'bg-blue-50 border-blue-200',
        ayudas: [
            {
                nombre: 'Bolsas de Estudo Xunta',
                descripcion: 'Ayudas al estudio de la Xunta de Galicia para niveles postobligatorios.',
                importe: 'Hasta 2.000€',
                organismo: 'Xunta de Galicia - Consellería de Educación',
                url: 'https://www.edu.xunta.gal',
            },
            {
                nombre: 'Fondo Solidario de Libros',
                descripcion: 'Banco de libros de texto gratuito para alumnos de ESO en centros públicos.',
                importe: 'Gratuito',
                organismo: 'Xunta de Galicia',
                url: 'https://www.edu.xunta.gal',
            },
        ],
    },
    {
        comunidad: 'Castilla y León',
        slug: 'castilla-y-leon',
        emoji: '🏰',
        color: 'bg-amber-50 border-amber-200',
        ayudas: [
            {
                nombre: 'Becas Castilla y León',
                descripcion: 'Ayudas para estudios de Bachillerato, FP y universitarios en la comunidad.',
                importe: 'Hasta 1.200€',
                organismo: 'Junta de Castilla y León - Consejería de Educación',
                url: 'https://www.educa.jcyl.es',
            },
        ],
    },
    {
        comunidad: 'Aragón',
        slug: 'aragon',
        emoji: '⚜️',
        color: 'bg-yellow-50 border-yellow-200',
        ayudas: [
            {
                nombre: 'Becas Gobierno de Aragón',
                descripcion: 'Ayudas al estudio para alumnos aragoneses en niveles postobligatorios.',
                importe: 'Hasta 1.500€',
                organismo: 'Gobierno de Aragón - Departamento de Educación',
                url: 'https://www.aragon.es/educacion',
            },
        ],
    },
    {
        comunidad: 'Canarias',
        slug: 'canarias',
        emoji: '🌴',
        color: 'bg-cyan-50 border-cyan-200',
        ayudas: [
            {
                nombre: 'Becas Canarias',
                descripcion: 'Ayudas al estudio del Gobierno de Canarias para Bachillerato y FP.',
                importe: 'Hasta 1.800€',
                organismo: 'Gobierno de Canarias - Consejería de Educación',
                url: 'https://www.gobiernodecanarias.org/educacion',
            },
            {
                nombre: 'Ayuda Comedor Canarias',
                descripcion: 'Becas de comedor escolar para familias en situación de vulnerabilidad.',
                importe: 'Hasta gratuidad total',
                organismo: 'Gobierno de Canarias',
                url: 'https://www.gobiernodecanarias.org/educacion',
            },
        ],
    },
    {
        comunidad: 'Castilla-La Mancha',
        slug: 'castilla-la-mancha',
        emoji: '🌾',
        color: 'bg-lime-50 border-lime-200',
        ayudas: [
            {
                nombre: 'Becas CLM',
                descripcion: 'Ayudas al estudio de la Junta de Comunidades de Castilla-La Mancha.',
                importe: 'Hasta 1.000€',
                organismo: 'Junta de Comunidades de CLM - Consejería de Educación',
                url: 'https://www.educa.jccm.es',
            },
        ],
    },
    {
        comunidad: 'Murcia',
        slug: 'murcia',
        emoji: '🌶️',
        color: 'bg-red-50 border-red-200',
        ayudas: [
            {
                nombre: 'Becas Región de Murcia',
                descripcion: 'Ayudas al estudio para alumnos de la Región de Murcia.',
                importe: 'Hasta 1.200€',
                organismo: 'Comunidad Autónoma de Murcia - Consejería de Educación',
                url: 'https://www.carm.es/educacion',
            },
        ],
    },
    {
        comunidad: 'Extremadura',
        slug: 'extremadura',
        emoji: '🦅',
        color: 'bg-green-50 border-green-200',
        ayudas: [
            {
                nombre: 'Becas Junta de Extremadura',
                descripcion: 'Ayudas al estudio y de comedor para alumnos extremeños.',
                importe: 'Hasta 1.500€',
                organismo: 'Junta de Extremadura - Consejería de Educación',
                url: 'https://www.educarex.es',
            },
        ],
    },
    {
        comunidad: 'Asturias',
        slug: 'asturias',
        emoji: '🏔️',
        color: 'bg-blue-50 border-blue-200',
        ayudas: [
            {
                nombre: 'Becas Principado de Asturias',
                descripcion: 'Ayudas al estudio para Bachillerato y FP en el Principado.',
                importe: 'Hasta 1.300€',
                organismo: 'Principado de Asturias - Consejería de Educación',
                url: 'https://www.educastur.es',
            },
        ],
    },
    {
        comunidad: 'Cantabria',
        slug: 'cantabria',
        emoji: '🌊',
        color: 'bg-sky-50 border-sky-200',
        ayudas: [
            {
                nombre: 'Becas Gobierno de Cantabria',
                descripcion: 'Ayudas al estudio para alumnos cántabros en niveles postobligatorios.',
                importe: 'Hasta 1.200€',
                organismo: 'Gobierno de Cantabria - Consejería de Educación',
                url: 'https://www.educantabria.es',
            },
        ],
    },
    {
        comunidad: 'La Rioja',
        slug: 'la-rioja',
        emoji: '🍇',
        color: 'bg-purple-50 border-purple-200',
        ayudas: [
            {
                nombre: 'Becas Gobierno de La Rioja',
                descripcion: 'Ayudas al estudio para Bachillerato, FP y universitarios riojanos.',
                importe: 'Hasta 1.000€',
                organismo: 'Gobierno de La Rioja - Consejería de Educación',
                url: 'https://www.larioja.org/educacion',
            },
        ],
    },
    {
        comunidad: 'Navarra',
        slug: 'navarra',
        emoji: '🐂',
        color: 'bg-red-50 border-red-200',
        ayudas: [
            {
                nombre: 'Becas Gobierno de Navarra',
                descripcion: 'Ayudas al estudio del Gobierno Foral de Navarra para postobligatorios.',
                importe: 'Hasta 2.500€',
                organismo: 'Gobierno de Navarra - Departamento de Educación',
                url: 'https://www.educacion.navarra.es',
            },
        ],
    },
    {
        comunidad: 'Baleares',
        slug: 'baleares',
        emoji: '🏖️',
        color: 'bg-teal-50 border-teal-200',
        ayudas: [
            {
                nombre: 'Beques Govern Balear',
                descripcion: 'Becas de comedor, transporte y material escolar del Govern de les Illes Balears.',
                importe: 'Hasta 600€/año',
                organismo: 'Govern de les Illes Balears - Conselleria d\'Educació',
                url: 'https://www.caib.es/educacio',
            },
        ],
    },
];

// ─── Calendario ───────────────────────────────────────────────────────────────

export const calendarioSolicitudes: CalendarioItem[] = [
    {
        mes: 'Enero – Febrero',
        evento: 'Apertura convocatoria becas universitarias (2º semestre)',
        tipo: 'nacional',
        descripcion: 'El MEC abre la convocatoria de becas para el segundo semestre universitario.',
    },
    {
        mes: 'Marzo – Abril',
        evento: 'Solicitud de plaza en guarderías públicas',
        tipo: 'autonomica',
        descripcion: 'La mayoría de CCAA abren el período de solicitud de plaza en escuelas infantiles 0-3 años.',
    },
    {
        mes: 'Mayo – Junio',
        evento: 'Solicitud de libros de texto y material escolar',
        tipo: 'autonomica',
        descripcion: 'Período para solicitar las ayudas de libros y material para el curso siguiente.',
    },
    {
        mes: 'Junio – Julio',
        evento: 'Convocatoria Beca General MEC (curso siguiente)',
        tipo: 'nacional',
        descripcion: 'El Ministerio de Educación publica la convocatoria de becas generales para el próximo curso.',
    },
    {
        mes: 'Agosto – Septiembre',
        evento: 'Solicitud de ayudas de comedor y transporte',
        tipo: 'autonomica',
        descripcion: 'Período de solicitud de becas de comedor y transporte escolar para el nuevo curso.',
    },
    {
        mes: 'Septiembre – Octubre',
        evento: 'Plazo de solicitud Beca General MEC',
        tipo: 'nacional',
        descripcion: 'Cierre del plazo de solicitud de la Beca General del Ministerio de Educación.',
    },
    {
        mes: 'Octubre – Noviembre',
        evento: 'Convocatorias autonómicas de becas al estudio',
        tipo: 'autonomica',
        descripcion: 'La mayoría de CCAA publican sus convocatorias propias de becas al estudio.',
    },
    {
        mes: 'Todo el año',
        evento: 'Ayudas de emergencia social y NEE',
        tipo: 'municipal',
        descripcion: 'Los servicios sociales municipales gestionan ayudas de emergencia en cualquier momento del año.',
    },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqAyudas = [
    {
        pregunta: '¿Puedo solicitar varias ayudas a la vez?',
        respuesta: 'Sí, en la mayoría de casos es compatible solicitar la Beca General MEC junto con ayudas autonómicas (comedor, libros, transporte). Sin embargo, algunas ayudas autonómicas son incompatibles entre sí. Consulta siempre las bases de cada convocatoria.',
    },
    {
        pregunta: '¿Cuál es el umbral de renta para las becas?',
        respuesta: 'El umbral varía según el número de miembros de la unidad familiar. Para la Beca General MEC 2024-25, el umbral para una familia de 4 miembros es de aproximadamente 39.000€ de renta anual. Cada CCAA tiene sus propios umbrales.',
    },
    {
        pregunta: '¿Qué documentación necesito para solicitar una beca?',
        respuesta: 'Generalmente necesitas: DNI/NIE de todos los miembros, declaración de la renta del año anterior, certificado de matrícula, libro de familia y, en algunos casos, certificado de discapacidad o situación de desempleo.',
    },
    {
        pregunta: '¿Qué pasa si no hice la declaración de la renta?',
        respuesta: 'Si no estás obligado a declarar, puedes aportar un certificado de imputaciones de la AEAT o una declaración responsable de ingresos. Si estás obligado pero no declaraste, deberás regularizar tu situación antes de solicitar la beca.',
    },
    {
        pregunta: '¿Las becas son compatibles con el cheque guardería?',
        respuesta: 'El cheque guardería (deducción fiscal) es compatible con las becas de guardería autonómicas. Sin embargo, si recibes una subvención directa que cubre el 100% del coste, no podrás aplicar la deducción fiscal por la parte subvencionada.',
    },
    {
        pregunta: '¿Qué hago si me deniegan la beca?',
        respuesta: 'Tienes derecho a presentar un recurso de alzada en el plazo de 1 mes desde la notificación de la denegación. Revisa los motivos de denegación y aporta la documentación adicional que se requiera. También puedes acudir a los servicios sociales de tu municipio para explorar otras ayudas.',
    },
];
