/**
 * Real school data from official sources
 * Generated automatically from scraped data
 * Last updated: 2026-02-17T07:42:04.793Z
 */

export interface School {
  id: string;
  name: string;
  slug: string;
  type: 'public' | 'private' | 'charter';
  address: string;
  city: string;
  postalCode: string;
  region: string;
  phone?: string;
  email?: string;
  website?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  levels: string[];
  tuition?: string;
  imageUrl: string;
}

export const realSchools: School[] = [
  {
    "id": "4916066",
    "name": "ABC Schule (Alemán)",
    "slug": "abc-schule-aleman",
    "type": "private",
    "address": "CALLE LEIZARAN 27",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44793196689411,
      "lng": -3.6813824984159287
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167390",
    "name": "Academia Darío Estudio",
    "slug": "academia-dario-estudio",
    "type": "private",
    "address": "CALLE GRAN VIA 63",
    "city": "MADRID",
    "postalCode": "28013",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42249057800178,
      "lng": -3.7098176178133118
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6803",
    "name": "Agencia Estatal Consejo Superior de Investigaciones Científicas (CSIC)",
    "slug": "agencia-estatal-consejo-superior-de-investigaciones-cientificas-csic",
    "type": "private",
    "address": "CALLE SERRANO 117",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44088390288162,
      "lng": -3.687025811952775
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5373",
    "name": "Altair, Colegio Internacional",
    "slug": "altair-colegio-internacional",
    "type": "private",
    "address": "CALLE JOAQUIN BAU 4",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.463788404722166,
      "lng": -3.685847945340213
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11576332",
    "name": "Aula de estudio de Manoteras. Sala de estudio (Hortaleza)",
    "slug": "aula-de-estudio-de-manoteras-sala-de-estudio-hortaleza",
    "type": "private",
    "address": "CALLE CUEVAS DEL ALMANZORA 187",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.477775164880356,
      "lng": -3.6583397911756297
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Aforo: 60 plazas Acceso a ordenadores Wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10127337",
    "name": "Aula Municipal de Formación de Personas Adultas. Distrito Centro.",
    "slug": "aula-municipal-de-formacion-de-personas-adultas-distrito-centro",
    "type": "private",
    "address": "CALLE CASINO 3",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.406617104441125,
      "lng": -3.705325667737951
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5422896",
    "name": "Aula Municipal de Formación de Personas Adultas. Distrito Chamberí",
    "slug": "aula-municipal-de-formacion-de-personas-adultas-distrito-chamberi",
    "type": "private",
    "address": "CALLE ALMAGRO 5 I.F.E. DEL GOBIERNO LOCAL DE MADRID",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42852633195809,
      "lng": -3.695038704917714
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6599",
    "name": "Aula Municipal de Formación de Personas Adultas. Distrito Ciudad Lineal.",
    "slug": "aula-municipal-de-formacion-de-personas-adultas-distrito-ciudad-lineal",
    "type": "private",
    "address": "CALLE SANTA FELICIDAD 39 EN CENTRO CULTURAL ELIPA",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42443536952662,
      "lng": -3.650283533159248
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6605",
    "name": "Aula Municipal de Formación de Personas Adultas. Distrito San Blas - Canillejas.",
    "slug": "aula-municipal-de-formacion-de-personas-adultas-distrito-san-blas-canillejas",
    "type": "private",
    "address": "CALLE SAN ROMAN DEL VALLE 8 EN CENTRO CULTURAL ANTONIO MACHADO",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.420231627534996,
      "lng": -3.6218113860909074
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6602",
    "name": "Aula Municipal de Formación de Personas Adultas. Distrito Villaverde. Calle Doctor Martín Arévalo.",
    "slug": "aula-municipal-de-formacion-de-personas-adultas-distrito-villaverde-calle-doctor-martin-arevalo",
    "type": "private",
    "address": "CALLE DOCTOR MARTIN AREVALO 2 CENTRO CULTURAL ÁGATA",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34636268334182,
      "lng": -3.708524395897377
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6603",
    "name": "Aula Municipal de Formación de Personas Adultas. Distrito Villaverde. Plaza Los Pinazo.",
    "slug": "aula-municipal-de-formacion-de-personas-adultas-distrito-villaverde-plaza-los-pinazo",
    "type": "private",
    "address": "PLAZA PINAZO 9",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34268217960563,
      "lng": -3.6914488300328197
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5236566",
    "name": "Casa de Niños Daniel Vázquez Díaz",
    "slug": "casa-de-ninos-daniel-vazquez-diaz",
    "type": "private",
    "address": "CALLE ARMENTEROS 46",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.464777111936684,
      "lng": -3.7130226942453906
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5236471",
    "name": "Casa de Niños Giner de los Ríos",
    "slug": "casa-de-ninos-giner-de-los-rios",
    "type": "private",
    "address": "CALLE MEMBEZAR 25",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.379529471156005,
      "lng": -3.6684765035279683
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "73983",
    "name": "Casa de Niños Lope de Vega",
    "slug": "casa-de-ninos-lope-de-vega",
    "type": "private",
    "address": "CALLE INGLATERRA 8 UBICADA EN C. P. LOPE DE VEGA",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39460546257796,
      "lng": -3.7232402248952865
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "87760",
    "name": "Casa de Niños Nuestra Señora de la Fuencisla",
    "slug": "casa-de-ninos-nuestra-senora-de-la-fuencisla",
    "type": "private",
    "address": "CALLE TOMELLOSO 40 UBICADA EN C.P. NTRA. SRA FUENCISLA",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37993160366385,
      "lng": -3.698002522406683
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "73972",
    "name": "Casa de Niños República de Brasil",
    "slug": "casa-de-ninos-republica-de-brasil",
    "type": "private",
    "address": "AVENIDA FUEROS 34 UBICADA EN C. P. REPUBLICA BRASIL",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37024359769827,
      "lng": -3.6895277937794146
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "73975",
    "name": "Casa de Niños San Miguel",
    "slug": "casa-de-ninos-san-miguel",
    "type": "private",
    "address": "AVENIDA VIRGEN DEL CARMEN 32",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47440638983908,
      "lng": -3.6522282145254072
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5201907",
    "name": "Centro  de Educación Especial Colegio Gaudem",
    "slug": "centro-de-educacion-especial-colegio-gaudem",
    "type": "private",
    "address": "CALLE PLAYA DE BARLOVENTO 14",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4732974354175,
      "lng": -3.593893756961978
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6594",
    "name": "Centro de Educación de Personas Adultas (CEPA)  Cultural Moratalaz",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-cultural-moratalaz",
    "type": "private",
    "address": "CALLE CORREGIDOR ALONSO DE TOBAR 7",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40390156616064,
      "lng": -3.6493068024925437
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6573",
    "name": "Centro de Educación de Personas Adultas (CEPA) Aluche",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-aluche",
    "type": "private",
    "address": "CALLE OCA&amp;Ntilde;A 35",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38487436458853,
      "lng": -3.7549491681997784
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6593",
    "name": "Centro de Educación de Personas Adultas (CEPA) Arganzuela",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-arganzuela",
    "type": "private",
    "address": "CALLE BATALLA DEL SALADO 29",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40048840760928,
      "lng": -3.696099316089686
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6568",
    "name": "Centro de Educación de Personas Adultas (CEPA) Canillejas",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-canillejas",
    "type": "private",
    "address": "CALLE MUSAS 11",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43777090876528,
      "lng": -3.6083673551337316
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6559",
    "name": "Centro de Educación de Personas Adultas (CEPA) Cid Campeador",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-cid-campeador",
    "type": "private",
    "address": "CALLE ANSELMO LORENZO 12",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38180929683497,
      "lng": -3.770655091542908
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6600",
    "name": "Centro de Educación de Personas Adultas (CEPA) Ciudad Lineal",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-ciudad-lineal",
    "type": "private",
    "address": "CALLE HERMANOS GARCIA NOBLEJAS 70",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.429356738271636,
      "lng": -3.632176542386335
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6575",
    "name": "Centro de Educación de Personas Adultas (CEPA) Daoíz y Velarde",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-daoiz-y-velarde",
    "type": "private",
    "address": "CALLE FERNANDO ORTIZ 2 PLANTA 2",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36726447837039,
      "lng": -3.70278869828606
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "106258",
    "name": "Centro de Educación de Personas Adultas (CEPA) Distrito Centro",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-distrito-centro",
    "type": "private",
    "address": "CALLE SAN BERNARDO 70 PLANTA 2",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.426986172289,
      "lng": -3.7064088965008097
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6566",
    "name": "Centro de Educación de Personas Adultas (CEPA) Dulce Chacón",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-dulce-chacon",
    "type": "private",
    "address": "CALLE ABERTURA 2",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47719279779815,
      "lng": -3.6496196128895835
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6565",
    "name": "Centro de Educación de Personas Adultas (CEPA) Entrevías",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-entrevias",
    "type": "private",
    "address": "CALLE SERENA 394",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.376534838436406,
      "lng": -3.669555170253744
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6569",
    "name": "Centro de Educación de Personas Adultas (CEPA) Fuencarral",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-fuencarral",
    "type": "private",
    "address": "CALLE BRAILLE 10",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49585827702063,
      "lng": -3.6935516755513462
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6576",
    "name": "Centro de Educación de Personas Adultas (CEPA) Hortaleza - Mar Amarillo",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-hortaleza-mar-amarillo",
    "type": "private",
    "address": "CALLE MAR AMARILLO 21",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.474711439309345,
      "lng": -3.641055179806186
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6572",
    "name": "Centro de Educación de Personas Adultas (CEPA) Joaquín Sorolla",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-joaquin-sorolla",
    "type": "private",
    "address": "CALLE ALONSO HEREDIA 16",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43538087665309,
      "lng": -3.6728658642421848
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6590",
    "name": "Centro de Educación de Personas Adultas (CEPA) José Luis Sampedro",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-jose-luis-sampedro",
    "type": "private",
    "address": "CALLE CHANTADA 34",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47339957465879,
      "lng": -3.71321783045369
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6577",
    "name": "Centro de Educación de Personas Adultas (CEPA) La Albufera",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-la-albufera",
    "type": "private",
    "address": "CALLE NUESTRA SEÑORA DEL PERPETUO SOCORRO 23",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39282469144144,
      "lng": -3.6627605148418416
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "89255",
    "name": "Centro de Educación de Personas Adultas (CEPA) Las Rosas",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-las-rosas",
    "type": "private",
    "address": "CALLE ARCOS DE JALON 9",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42133318373782,
      "lng": -3.6242186981262017
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6591",
    "name": "Centro de Educación de Personas Adultas (CEPA) Los Rosales",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-los-rosales",
    "type": "private",
    "address": "CALLE CONCEPCION DE LA OLIVA 17",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35433860314418,
      "lng": -3.681690223350074
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6592",
    "name": "Centro de Educación de Personas Adultas (CEPA) Moncloa",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-moncloa",
    "type": "private",
    "address": "CALLE JUAN ALVAREZ MENDIZABAL 20",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42506690933013,
      "lng": -3.7150226450160404
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6574",
    "name": "Centro de Educación de Personas Adultas (CEPA) Oporto",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-oporto",
    "type": "private",
    "address": "AVENIDA OPORTO 46",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38627422119332,
      "lng": -3.724928367244892
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6560",
    "name": "Centro de Educación de Personas Adultas (CEPA) Orcasitas",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-orcasitas",
    "type": "private",
    "address": "CALLE OREJA 186",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.369719564506255,
      "lng": -3.7188222350181275
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6561",
    "name": "Centro de Educación de Personas Adultas (CEPA) Pablo Guzmán",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-pablo-guzman",
    "type": "private",
    "address": "CALLE ANDORRA 19",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46201425701107,
      "lng": -3.645428666115832
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6563",
    "name": "Centro de Educación de Personas Adultas (CEPA) Pan Bendito",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-pan-bendito",
    "type": "private",
    "address": "CALLE CAMINO VIEJO DE LEGANES 188",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37709154550978,
      "lng": -3.7343633992601113
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6562",
    "name": "Centro de Educación de Personas Adultas (CEPA) Tetuán",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-tetuan",
    "type": "private",
    "address": "CALLE PINOS ALTA 63",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46800805879142,
      "lng": -3.6982294060026586
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6571",
    "name": "Centro de Educación de Personas Adultas (CEPA) Vallecas",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-vallecas",
    "type": "private",
    "address": "PLAZA ANTONIO MARIA SEGOVIA 1",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.380739898338405,
      "lng": -3.6131112825279468
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6604",
    "name": "Centro de Educación de Personas Adultas (CEPA) Vicálvaro",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-vicalvaro",
    "type": "private",
    "address": "CALLE LAGO COMO 4",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.401494422765,
      "lng": -3.6066089833964288
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6567",
    "name": "Centro de Educación de Personas Adultas (CEPA) Villaverde",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-villaverde",
    "type": "private",
    "address": "CALLE VILLALONSO 10",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34961521901518,
      "lng": -3.708578221219303
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6564",
    "name": "Centro de Educación de Personas Adultas (CEPA) Vista Alegre",
    "slug": "centro-de-educacion-de-personas-adultas-cepa-vista-alegre",
    "type": "private",
    "address": "CALLE GENERAL RICARDOS 179",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38520839919127,
      "lng": -3.736682126224525
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10895555",
    "name": "Centro de Educación Especial  El Cole de Celia y Pepe",
    "slug": "centro-de-educacion-especial-el-cole-de-celia-y-pepe",
    "type": "private",
    "address": "CALLE SOPELANA 5",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50031655771553,
      "lng": -3.692415655591035
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6739",
    "name": "Centro de Educación Especial A LA PAR",
    "slug": "centro-de-educacion-especial-a-la-par",
    "type": "private",
    "address": "CALLE MONASTERIO DE LAS HUELGAS 15",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50225439644218,
      "lng": -3.7071407657054953
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6720",
    "name": "Centro de Educación Especial Ademo",
    "slug": "centro-de-educacion-especial-ademo",
    "type": "private",
    "address": "CALLE HACIENDA DE PAVONES 328",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.400303909876676,
      "lng": -3.638278951981349
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "174976",
    "name": "Centro de Educación Especial Aleph",
    "slug": "centro-de-educacion-especial-aleph",
    "type": "private",
    "address": "CALLE CUEVA DE MONTESINOS 49",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50031655771553,
      "lng": -3.692415655591035
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "- Programas de ocio y respiro en fin de semana y vacaciones - Programa de apoyo a familias (servicio de guardería) - Programa de Formación: Becas - Cursos - Charlas - Actividades - Formación de voluntariado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "25017",
    "name": "Centro de Educación Especial Araya",
    "slug": "centro-de-educacion-especial-araya",
    "type": "private",
    "address": "CALLE RAMON POWER 9",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.463645498800446,
      "lng": -3.631895392050736
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6023063",
    "name": "Centro de Educación Especial Atenpace",
    "slug": "centro-de-educacion-especial-atenpace",
    "type": "private",
    "address": "CALLE ISLAS MARQUESAS 27",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47636052326793,
      "lng": -3.7263818702595626
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "174909",
    "name": "Centro de Educación Especial Aucavi",
    "slug": "centro-de-educacion-especial-aucavi",
    "type": "private",
    "address": "CALLE RICARDO ORTIZ 29",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42741969436041,
      "lng": -3.657833554534665
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6748",
    "name": "Centro de Educación Especial Buenafuente",
    "slug": "centro-de-educacion-especial-buenafuente",
    "type": "private",
    "address": "CALLE PROTASIO GOMEZ 5",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.439602555887866,
      "lng": -3.6380727183101413
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23079",
    "name": "Centro de Educación Especial Cambrils",
    "slug": "centro-de-educacion-especial-cambrils",
    "type": "private",
    "address": "AVENIDA POBLADOS 151",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37365417775752,
      "lng": -3.7240645411834965
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6772498",
    "name": "Centro de Educación Especial Carmen Fernández Miranda FSDM",
    "slug": "centro-de-educacion-especial-carmen-fernandez-miranda-fsdm",
    "type": "private",
    "address": "CALLE CAIDOS DE LA DIVISION AZUL 15",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46683786129305,
      "lng": -3.672832899552353
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167685",
    "name": "Centro de Educación Especial Centro Bobath España",
    "slug": "centro-de-educacion-especial-centro-bobath-espana",
    "type": "private",
    "address": "CALLE MIRADOR DE LA REINA 115",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.490787943440864,
      "lng": -3.7199648746056417
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5387792",
    "name": "Centro de Educación Especial Centro Educativo Ponce de León",
    "slug": "centro-de-educacion-especial-centro-educativo-ponce-de-leon",
    "type": "private",
    "address": "CALLE EDUARDO BARREIROS 6",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.372401816293866,
      "lng": -3.696205055989539
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Integración (Auditivos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23080",
    "name": "Centro de Educación Especial Centro Nuevo de Pedagogía",
    "slug": "centro-de-educacion-especial-centro-nuevo-de-pedagogia",
    "type": "private",
    "address": "CALLE TAJO 6",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4486543475365,
      "lng": -3.682628010649591
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6741",
    "name": "Centro de Educación Especial Cisen",
    "slug": "centro-de-educacion-especial-cisen",
    "type": "private",
    "address": "CALLE VIRGEN DE ARANZAZU 5",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48573054670694,
      "lng": -3.6910032410406908
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5388127",
    "name": "Centro de Educación Especial C.R.E. Antonio Vicente Mosquete",
    "slug": "centro-de-educacion-especial-c-r-e-antonio-vicente-mosquete",
    "type": "private",
    "address": "AVENIDA DOCTOR GARCIA TAPIA (C/V A C/OBERÓN) 210",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.414653784980985,
      "lng": -3.6594300576131475
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "55806",
    "name": "Centro de Educación Especial del Hospital Infantil de San Rafael",
    "slug": "centro-de-educacion-especial-del-hospital-infantil-de-san-rafael",
    "type": "private",
    "address": "AVENIDA CONCHA ESPINA 32",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4514720015443,
      "lng": -3.6796806741247248
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5106",
    "name": "Centro de Educación Especial El Despertar",
    "slug": "centro-de-educacion-especial-el-despertar",
    "type": "private",
    "address": "CALLE ADONIS 1",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3866197264309,
      "lng": -3.773910285133272
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6749",
    "name": "Centro de Educación Especial Estudio  3",
    "slug": "centro-de-educacion-especial-estudio-3",
    "type": "private",
    "address": "CALLE TAPIA DE CASARIEGO 1",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46320294140069,
      "lng": -3.7769470476231937
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6736",
    "name": "Centro de Educación Especial Fundación Gotze",
    "slug": "centro-de-educacion-especial-fundacion-gotze",
    "type": "private",
    "address": "CARRETERA CASTILLA 5",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.449783762790766,
      "lng": -3.762794547009638
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Internado - Residencia"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6740",
    "name": "Centro de Educación Especial Instituto Psicopediatría Doctor Quintero Lumbreras",
    "slug": "centro-de-educacion-especial-instituto-psicopediatria-doctor-quintero-lumbreras",
    "type": "private",
    "address": "CAMINO VALVERDE 76",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.52285581856897,
      "lng": -3.6884411141167246
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Centro ocupacional"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6742",
    "name": "Centro de Educación Especial Instituto San José",
    "slug": "centro-de-educacion-especial-instituto-san-jose",
    "type": "private",
    "address": "CALLE PINAR DE SAN JOSE 98",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36208135098422,
      "lng": -3.774901548263788
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6738",
    "name": "Centro de Educación Especial Leo Kanner",
    "slug": "centro-de-educacion-especial-leo-kanner",
    "type": "private",
    "address": "CALLE PEÑA DEL SOL 22",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48995753937785,
      "lng": -3.702657560416243
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6750",
    "name": "Centro de Educación Especial Los Álamos",
    "slug": "centro-de-educacion-especial-los-alamos",
    "type": "private",
    "address": "RONDA SUR 229",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37336648575158,
      "lng": -3.665482524950977
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6747",
    "name": "Centro de Educación Especial María Corredentora",
    "slug": "centro-de-educacion-especial-maria-corredentora",
    "type": "private",
    "address": "CALLE LUIS DE LA MATA 24",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.454147741292225,
      "lng": -3.613927431938352
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6760",
    "name": "Centro de Educación Especial Nuestra Señora de las Victorias",
    "slug": "centro-de-educacion-especial-nuestra-senora-de-las-victorias",
    "type": "private",
    "address": "CALLE MULLER 25",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46411400366881,
      "lng": -3.699168080011844
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "1085",
    "name": "Centro de Educación Especial Numen",
    "slug": "centro-de-educacion-especial-numen",
    "type": "private",
    "address": "CALLE TABATINGA 11",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.444162574153324,
      "lng": -3.6328920823469915
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6755",
    "name": "Centro de Educación Especial Peripatos",
    "slug": "centro-de-educacion-especial-peripatos",
    "type": "private",
    "address": "CALLE CLARISAS 16",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38983591300815,
      "lng": -3.726712092188654
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6751",
    "name": "Centro de Educación Especial Tao. Sociedad Cooperativa Limitada de Pedagogía Terapéutica",
    "slug": "centro-de-educacion-especial-tao-sociedad-cooperativa-limitada-de-pedagogia-terapeutica",
    "type": "private",
    "address": "CALLE JOSE LUIS DE ARRESE 5",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42202035059318,
      "lng": -3.6551758296831087
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5574",
    "name": "Centro de Enseñanza Liceo Consul",
    "slug": "centro-de-ensenanza-liceo-consul",
    "type": "private",
    "address": "CALLE PEIRONCELY 7",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3819882800236,
      "lng": -3.6701501353017556
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10746501",
    "name": "Centro de Enseñanza Pablo VI. Instituto Católico de Estudios (ICE)",
    "slug": "centro-de-ensenanza-pablo-vi-instituto-catolico-de-estudios-ice",
    "type": "private",
    "address": "CALLE BRAVO MURILLO 297",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.461629590269965,
      "lng": -3.6981146452736002
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6408",
    "name": "Centro de Enseñanza Superior Cardenal Cisneros",
    "slug": "centro-de-ensenanza-superior-cardenal-cisneros",
    "type": "private",
    "address": "CALLE GENERAL DIAZ PORLIER 58",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.430655746270524,
      "lng": -3.676645132506573
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6368",
    "name": "Centro de Enseñanza Superior en Humanidades y Ciencias de la Educación Don Bosco",
    "slug": "centro-de-ensenanza-superior-en-humanidades-y-ciencias-de-la-educacion-don-bosco",
    "type": "private",
    "address": "CALLE MARIA AUXILIADORA 9",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4578663330372,
      "lng": -3.7154022232737973
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7029862",
    "name": "Centro de Enseñanza Superior Villanueva",
    "slug": "centro-de-ensenanza-superior-villanueva",
    "type": "private",
    "address": "CALLE COSTA BRAVA 2",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49594165711777,
      "lng": -3.702048289834191
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5503",
    "name": "Centro de Estudios Castilla",
    "slug": "centro-de-estudios-castilla",
    "type": "private",
    "address": "CALLE OSO 23",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40938249269965,
      "lng": -3.7053898947530897
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6190",
    "name": "Centro de Estudios Díaz-Balaguer",
    "slug": "centro-de-estudios-diaz-balaguer",
    "type": "private",
    "address": "CALLE FERNANDO EL CATOLICO 77",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.434227183633595,
      "lng": -3.717463045391063
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "91152",
    "name": "Centro de Estudios González Cañadas",
    "slug": "centro-de-estudios-gonzalez-canadas",
    "type": "private",
    "address": "CALLE FUENCARRAL 95",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42706254672683,
      "lng": -3.701719651116713
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4969522",
    "name": "Centro de Formación Profesional C.I.F.P. Profesor Raúl Vazquez",
    "slug": "centro-de-formacion-profesional-c-i-f-p-profesor-raul-vazquez",
    "type": "private",
    "address": "CARRETERA VILLAVERDE A VALLECAS KM 4 ",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3538372810062,
      "lng": -3.689643272810708
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12022672",
    "name": "Centro de Formación Profesional José Ramón Otero",
    "slug": "centro-de-formacion-profesional-jose-ramon-otero",
    "type": "private",
    "address": "CALLE FRANCISCO BRIZUELA 3",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.409342568909295,
      "lng": -3.7387758900343826
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11047975",
    "name": "Centro Educativo Global College",
    "slug": "centro-educativo-global-college",
    "type": "private",
    "address": "CALLE CASTELLON DE LA PLANA 8",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43997301440045,
      "lng": -3.6846395872903357
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6737",
    "name": "Centro Educativo Ponce de León",
    "slug": "centro-educativo-ponce-de-leon",
    "type": "private",
    "address": "CALLE EDUARDO BARREIROS 6",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.372401816293866,
      "lng": -3.696205055989539
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Integración (Auditivos) - Departamento de orientación - Trabajo Social - Gabinete médico (audiología) - Biblioteca"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8162638",
    "name": "Centro educativo-terapéutico Norte",
    "slug": "centro-educativo-terapeutico-norte",
    "type": "private",
    "address": "CALLE VIRGEN DE ARANZAZU 5",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48573061724817,
      "lng": -3.690991442742392
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8162600",
    "name": "Centro educativo-terapéutico Pradera de San Isidro",
    "slug": "centro-educativo-terapeutico-pradera-de-san-isidro",
    "type": "private",
    "address": "CALLE GORRION 2",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3961546670984,
      "lng": -3.727604859275025
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8162681",
    "name": "Centro educativo-terapéutico Vallecas",
    "slug": "centro-educativo-terapeutico-vallecas",
    "type": "private",
    "address": "CALLE QUIJORNA s/n",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36798162129648,
      "lng": -3.6229681432656577
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10618684",
    "name": "Centro Extranjero La Estrella del Pez Luna",
    "slug": "centro-extranjero-la-estrella-del-pez-luna",
    "type": "private",
    "address": "AVENIDA CASA QUEMADA 5",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.477502962616725,
      "lng": -3.835524056513188
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "187050",
    "name": "Centro Integrado de Enseñanzas Artísticas de Música y Educación Secundaria Federico Moreno Torroba",
    "slug": "centro-integrado-de-ensenanzas-artisticas-de-musica-y-educacion-secundaria-federico-moreno-torroba",
    "type": "private",
    "address": "CALLE GENERAL RICARDOS 177",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.385197375260255,
      "lng": -3.7364997414123096
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6792",
    "name": "Centro integrado de enseñanzas regladas a distancia",
    "slug": "centro-integrado-de-ensenanzas-regladas-a-distancia",
    "type": "private",
    "address": "PASEO PRADO 28 PLANTA 8",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41189616847529,
      "lng": -3.6933343227659106
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6608",
    "name": "Centro Municipal de Educación de Adultos. Distrito Arganzuela.",
    "slug": "centro-municipal-de-educacion-de-adultos-distrito-arganzuela",
    "type": "private",
    "address": "PASEO CHOPERA 10 Casa del Reloj",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3933877847248,
      "lng": -3.698565632659468
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6588",
    "name": "Centro Municipal de Educación de Adultos. Distrito Barajas.",
    "slug": "centro-municipal-de-educacion-de-adultos-distrito-barajas",
    "type": "private",
    "address": "CALLE PLAYA DE BOLNUEVO (acceso por Playa de San Juan, 7) 20",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47481507062831,
      "lng": -3.5918103084217825
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6745",
    "name": "Centro Pauta, Centro de día",
    "slug": "centro-pauta-centro-de-dia",
    "type": "private",
    "address": "CALLE POBLADURA DEL VALLE 13",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42684464649565,
      "lng": -3.618382814386489
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62689",
    "name": "Centro Regional Enseñanzas Integradas Sagrado Corazón de Jesús",
    "slug": "centro-regional-ensenanzas-integradas-sagrado-corazon-de-jesus",
    "type": "private",
    "address": "CAMINO CARRETERA DE EL PARDO A COLMENAR VIEJO KM.13500",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.528281841913156,
      "lng": -3.6921366876182233
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10344149",
    "name": "Centro Sociocultural Clara Campoamor (Retiro)",
    "slug": "centro-sociocultural-clara-campoamor-retiro",
    "type": "private",
    "address": "CENTRO CULTURAL DAOIZ Y VELARDE  PLANTA 1ª",
    "city": "MADRID",
    "postalCode": "",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.401997713964725,
      "lng": -3.677655206290768
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Sala de exposiciones Maruja Mallo 3 salas de estudio y lectura 3 aulas  Zona wifi    Se utilizan también otros espacios de las plantas segunda y tercera para diversas actividades culturales y para cesiones temporales a diferentes asociaciones y grupos culturales",
      "además de las reuniones de las mesas de los foros locales."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "117716",
    "name": "Centro Sociocultural Santa Petronila (Villaverde)",
    "slug": "centro-sociocultural-santa-petronila-villaverde",
    "type": "private",
    "address": "CALLE MARIA MARTINEZ OVIOL 12",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.350886994103284,
      "lng": -3.6914981254409645
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Sala de lectura y estudio Salón de actos / auditorio (aforo): 146 butacas y 3 para personas con movilidad reducida ( silla de ruedas)  Zonas de exposiciones en planta baja y segunda  16 aulas Ascensor Aseos adaptados Cambiador de bebe en planta baja Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6696",
    "name": "Centro Superior de Diseño de Moda de Madrid (Centro adscrito a la UPM)",
    "slug": "centro-superior-de-diseno-de-moda-de-madrid-centro-adscrito-a-la-upm",
    "type": "private",
    "address": "CARRETERA VALENCIA 7 Bloque I",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.388857066045915,
      "lng": -3.6286523028588005
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6383",
    "name": "Centro Universitario La Salle",
    "slug": "centro-universitario-la-salle",
    "type": "private",
    "address": "CALLE LA SALLE 10",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.466248901592856,
      "lng": -3.7820082470461647
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11047922",
    "name": "Colegio  Ingenio",
    "slug": "colegio-ingenio",
    "type": "private",
    "address": "CALLE ZENIT 15",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.463117247818126,
      "lng": -3.7903738759570067
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5694",
    "name": "Colegio  La Milagrosa",
    "slug": "colegio-la-milagrosa",
    "type": "private",
    "address": "CALLE MONSEÑOR OSCAR ROMERO 54",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.382249585320494,
      "lng": -3.745220862606841
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4967655",
    "name": "Colegio Ábaco",
    "slug": "colegio-abaco",
    "type": "private",
    "address": "AVENIDA PESETA 8",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36793783747553,
      "lng": -3.765345651608533
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5542",
    "name": "Colegio ADDIS",
    "slug": "colegio-addis",
    "type": "private",
    "address": "CALLE VIEJA DE PINTO 15",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34748760052361,
      "lng": -3.708724565537889
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5354",
    "name": "Colegio Afuera III A",
    "slug": "colegio-afuera-iii-a",
    "type": "private",
    "address": "CALLE FRANCISCO VITORIA 16 OTRA ENTRADA POR CONDE CARTAGENA 33",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40776454467921,
      "lng": -3.673033880862709
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5355",
    "name": "Colegio Afuera III B",
    "slug": "colegio-afuera-iii-b",
    "type": "private",
    "address": "CALLE ANGEL GANIVET 12",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40862111078754,
      "lng": -3.67291277265501
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5362",
    "name": "Colegio Ágora",
    "slug": "colegio-agora",
    "type": "private",
    "address": "CALLE MARQUES DE PORTUGALETE 17",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44686086723937,
      "lng": -3.6450987770080943
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5365",
    "name": "Colegio Agrupación  Escolar Europa",
    "slug": "colegio-agrupacion-escolar-europa",
    "type": "private",
    "address": "CALLE MIGUEL SOLAS 12",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.351288540068175,
      "lng": -3.6803734958787406
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5401",
    "name": "Colegio Agustiniano",
    "slug": "colegio-agustiniano",
    "type": "private",
    "address": "CALLE PEZ AUSTRAL 13",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41223072344434,
      "lng": -3.6656530813929002
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5367",
    "name": "Colegio Alameda de Osuna",
    "slug": "colegio-alameda-de-osuna",
    "type": "private",
    "address": "PASEO ALAMEDA DE OSUNA 60",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.455412287235895,
      "lng": -3.594337732128099
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "106073",
    "name": "Colegio Alemán Centro de Formación Empresarial",
    "slug": "colegio-aleman-centro-de-formacion-empresarial",
    "type": "private",
    "address": "AVENIDA BURGOS 12",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.473848069808064,
      "lng": -3.6757105430292083
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5506",
    "name": "Colegio Alemán de Madrid",
    "slug": "colegio-aleman-de-madrid",
    "type": "private",
    "address": "CALLE MONASTERIO DE GUADALUPE 7",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50675546824611,
      "lng": -3.704744879999933
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5427",
    "name": "Colegio Amor de Dios",
    "slug": "colegio-amor-de-dios",
    "type": "private",
    "address": "CALLE GUTIERREZ CANALES 15",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44792093298984,
      "lng": -3.614224540331551
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5375",
    "name": "Colegio Amor Misericordioso",
    "slug": "colegio-amor-misericordioso",
    "type": "private",
    "address": "PASEO SAN FRANCISCO DE SALES 42",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44274729932441,
      "lng": -3.7120234161629466
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Trastornos generales del desarrollo"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5351",
    "name": "Colegio Amorós",
    "slug": "colegio-amoros",
    "type": "private",
    "address": "CALLE JOAQUIN TURINA 37",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.371754628958094,
      "lng": -3.754846547530747
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Enfermería - Guardería"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6257",
    "name": "Colegio Antonio Vicente Mosquete C.R.E.",
    "slug": "colegio-antonio-vicente-mosquete-c-r-e",
    "type": "private",
    "address": "AVENIDA DOCTOR GARCIA TAPIA 210",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40799048012065,
      "lng": -3.634674500404179
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5377",
    "name": "Colegio Arcángel",
    "slug": "colegio-arcangel",
    "type": "private",
    "address": "CALLE ANGEL GANIVET 17",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408968326456666,
      "lng": -3.673623367576611
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5379",
    "name": "Colegio Arcángel Rafael",
    "slug": "colegio-arcangel-rafael",
    "type": "private",
    "address": "CALLE MAQUEDA 4",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39467656854902,
      "lng": -3.76537731059854
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6428087",
    "name": "Colegio Arenales Carabanchel",
    "slug": "colegio-arenales-carabanchel",
    "type": "private",
    "address": "AVENIDA POBLADOS 151",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37365417775752,
      "lng": -3.7240645411834965
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "135363",
    "name": "Colegio Aries",
    "slug": "colegio-aries",
    "type": "private",
    "address": "CALLE NUÑEZ DE BALBOA 10",
    "city": "MADRID",
    "postalCode": "28001",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42276661798991,
      "lng": -3.682867123273092
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4692403",
    "name": "Colegio Ártica",
    "slug": "colegio-artica",
    "type": "private",
    "address": "CALLE MORALES 25",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.360583854186764,
      "lng": -3.7561469709080026
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5387",
    "name": "Colegio Arturo Soria",
    "slug": "colegio-arturo-soria",
    "type": "private",
    "address": "CALLE DUQUE DE TAMAMES 9",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45076277154806,
      "lng": -3.6529430000477627
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8162020",
    "name": "Colegio Arzobispal-Seminario Menor de Madrid",
    "slug": "colegio-arzobispal-seminario-menor-de-madrid",
    "type": "private",
    "address": "PLAZA SAN FRANCISCO 5",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41106700931535,
      "lng": -3.714223383127092
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5383",
    "name": "Colegio Asunción Cuestablanca",
    "slug": "colegio-asuncion-cuestablanca",
    "type": "private",
    "address": "CALLE ASUNCION CUESTABLANCA 11 AVDA. BURGOS KM. 11,800",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50620422185563,
      "lng": -3.6544835805357625
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5984",
    "name": "Colegio Asunción - Vallecas",
    "slug": "colegio-asuncion-vallecas",
    "type": "private",
    "address": "CALLE MONTSENY 25",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40085710785851,
      "lng": -3.663243121489848
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5386",
    "name": "Colegio Azorín",
    "slug": "colegio-azorin",
    "type": "private",
    "address": "CALLE ARZUA 28",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47448650914233,
      "lng": -3.6475927417498615
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5390",
    "name": "Colegio Beata Filipina - Fundación Feliciana Viértola",
    "slug": "colegio-beata-filipina-fundacion-feliciana-viertola",
    "type": "private",
    "address": "CALLE JOSE DE CADALSO 50",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.380376416673656,
      "lng": -3.7725665317145918
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5391",
    "name": "Colegio Beata María Ana de Jesús",
    "slug": "colegio-beata-maria-ana-de-jesus",
    "type": "private",
    "address": "CALLE GUILLERMO DE OSMA 10",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39401854488283,
      "lng": -3.697052144961612
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6035",
    "name": "Colegio Bernadette",
    "slug": "colegio-bernadette",
    "type": "private",
    "address": "CALLE SANTA BERNARDITA 1",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45339127651407,
      "lng": -3.771703925317637
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5393",
    "name": "Colegio Bienaventurada Virgen María",
    "slug": "colegio-bienaventurada-virgen-maria",
    "type": "private",
    "address": "CALLE CULLERA 17",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.396397833685526,
      "lng": -3.74739179159026
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5394",
    "name": "Colegio Blanca de Castilla",
    "slug": "colegio-blanca-de-castilla",
    "type": "private",
    "address": "PASEO EDUARDO DATO 2",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43251892593524,
      "lng": -3.696270572884436
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6042",
    "name": "Colegio Bra Institución",
    "slug": "colegio-bra-institucion",
    "type": "private",
    "address": "CALLE MARIA LOMBILLO 5",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4436564050087,
      "lng": -3.6381110499185203
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5395",
    "name": "Colegio Brístol",
    "slug": "colegio-bristol",
    "type": "private",
    "address": "CALLE ENRIQUE DE PRADA 1",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4545163411813,
      "lng": -3.6140723098519967
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10389137",
    "name": "Colegio Británico  British Council Infants School El Viso",
    "slug": "colegio-britanico-british-council-infants-school-el-viso",
    "type": "private",
    "address": "CALLE ALFONSO RODRIGUEZ SANTAMARIA 23",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45324993377517,
      "lng": -3.6200989842514844
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8157229",
    "name": "Colegio británico Dallington School",
    "slug": "colegio-britanico-dallington-school",
    "type": "private",
    "address": "RONDA SOBRADIEL 20",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45209551419661,
      "lng": -3.6417877842979554
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5544",
    "name": "Colegio Británico Hastings School. Paseo Habana",
    "slug": "colegio-britanico-hastings-school-paseo-habana",
    "type": "private",
    "address": "PASEO HABANA 204",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46469048471495,
      "lng": -3.679546612944611
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5381875",
    "name": "Colegio Británico Holy Mary Catholic School",
    "slug": "colegio-britanico-holy-mary-catholic-school",
    "type": "private",
    "address": "CALLE CONDES DEL VAL 12",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.455297151992234,
      "lng": -3.6836151432841664
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5562",
    "name": "Colegio Británico Internacional. International School Of Madrid. C/ Rosa Jardón",
    "slug": "colegio-britanico-internacional-international-school-of-madrid-c-rosa-jardon",
    "type": "private",
    "address": "CALLE ROSA JARDON 3",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46579655352341,
      "lng": -3.6706403333547106
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7509592",
    "name": "Colegio Británico Maxwell School",
    "slug": "colegio-britanico-maxwell-school",
    "type": "private",
    "address": "CALLE SERRANO 158",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.445865301947755,
      "lng": -3.685040746901838
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161705",
    "name": "Colegio Británico Montessori School La Florida",
    "slug": "colegio-britanico-montessori-school-la-florida",
    "type": "private",
    "address": "CALLE MOTRICO 3",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46936867717704,
      "lng": -3.815650369837763
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "22745",
    "name": "Colegio Británico Numont School",
    "slug": "colegio-britanico-numont-school",
    "type": "private",
    "address": "CALLE PARMA 16",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45602618606362,
      "lng": -3.6493614482302235
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "52734",
    "name": "Colegio Británico Saint Anne's School",
    "slug": "colegio-britanico-saint-anne-s-school",
    "type": "private",
    "address": "AVENIDA ALFONSO XIII 162",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46043395493294,
      "lng": -3.6741253819113138
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10014256",
    "name": "Colegio Británico Santo Ángel British School",
    "slug": "colegio-britanico-santo-angel-british-school",
    "type": "private",
    "address": "CALLE ARROYO FONTARRON 209",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39840968301254,
      "lng": -3.643916340111507
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8157031",
    "name": "Colegio Británico St. George's School of Madrid",
    "slug": "colegio-britanico-st-george-s-school-of-madrid",
    "type": "private",
    "address": "CALLE PADRES DOMINICOS 1",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.502506183537584,
      "lng": -3.6568434369699965
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5615",
    "name": "Colegio Británico The English Montessori School",
    "slug": "colegio-britanico-the-english-montessori-school",
    "type": "private",
    "address": "CALLE LA SALLE 2",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46623025665317,
      "lng": -3.7795769575617575
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4706188",
    "name": "Colegio Británico Todo Niños Nursery School",
    "slug": "colegio-britanico-todo-ninos-nursery-school",
    "type": "private",
    "address": "CALLE SERRANO 163",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.448007498389266,
      "lng": -3.6838478779595962
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6151715",
    "name": "Colegio BrotMadrid",
    "slug": "colegio-brotmadrid",
    "type": "private",
    "address": "CALLE BLAS CABRERA 88",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.378170048924176,
      "lng": -3.7648792558014312
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5398",
    "name": "Colegio Calasancio Nuestra Señora de las Escuelas Pías. Calle Conde Peñalver",
    "slug": "colegio-calasancio-nuestra-senora-de-las-escuelas-pias-calle-conde-penalver",
    "type": "private",
    "address": "CALLE CONDE DE PE&amp;Ntilde;ALVER 51",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43105708399748,
      "lng": -3.6754117275528455
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399",
    "name": "Colegio Cardenal Spinola",
    "slug": "colegio-cardenal-spinola",
    "type": "private",
    "address": "CALLE CARDENAL MARCELO SPINOLA 34",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46759208022784,
      "lng": -3.6717198202313592
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5403",
    "name": "Colegio Casa de La Virgen",
    "slug": "colegio-casa-de-la-virgen",
    "type": "private",
    "address": "CALLE VIRGEN DEL VAL 1",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43591185786877,
      "lng": -3.6552517011044183
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6082",
    "name": "Colegio Cenit",
    "slug": "colegio-cenit",
    "type": "private",
    "address": "CALLE VITAL AZA 31",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.431673762601896,
      "lng": -3.643102660277916
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5348",
    "name": "Colegio Central",
    "slug": "colegio-central",
    "type": "private",
    "address": "CALLE MANUEL MUÑOZ 9",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38582624788764,
      "lng": -3.7020219749882264
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5529",
    "name": "Colegio Centro Cultural Elfo",
    "slug": "colegio-centro-cultural-elfo",
    "type": "private",
    "address": "CALLE ELFO 74",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43412790951792,
      "lng": -3.64889135757206
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5714",
    "name": "Colegio Centro Cultural Palomeras",
    "slug": "colegio-centro-cultural-palomeras",
    "type": "private",
    "address": "CALLE LUIS MARIN",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39233371211731,
      "lng": -3.6393937473241538
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Trastornos generales del desarrollo"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5408",
    "name": "Colegio Centro Cultural Salmantino",
    "slug": "colegio-centro-cultural-salmantino",
    "type": "public",
    "address": "CALLE PUERTO DE PAJARES 6",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39535463833124,
      "lng": -3.664449933610581
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5504",
    "name": "Colegio Cervantes",
    "slug": "colegio-cervantes",
    "type": "private",
    "address": "CALLE ELVAS 2",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38519634265388,
      "lng": -3.725260234497272
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6182",
    "name": "Colegio CEU San Pablo de Claudio Coello",
    "slug": "colegio-ceu-san-pablo-de-claudio-coello",
    "type": "private",
    "address": "CALLE MARTIN DE LOS HEROS 60",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42865250657665,
      "lng": -3.7171562302885173
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5931650",
    "name": "Colegio CEU San Pablo. Sanchinarro",
    "slug": "colegio-ceu-san-pablo-sanchinarro",
    "type": "private",
    "address": "AVENIDA ALCALDE CONDE DE MAYALDE 45",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49407256619707,
      "lng": -3.6506957327115046
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5517",
    "name": "Colegio Chamberí (MARISTAS)",
    "slug": "colegio-chamberi-maristas",
    "type": "private",
    "address": "CALLE RAFAEL CALVO 12",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43373968089263,
      "lng": -3.6955168195376604
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10830569",
    "name": "Colegio Ciudad de los Muchachos",
    "slug": "colegio-ciudad-de-los-muchachos",
    "type": "private",
    "address": "CALLE SANTA MARTA 15",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.402757905442456,
      "lng": -3.6620252314411874
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5415",
    "name": "Colegio Claret",
    "slug": "colegio-claret",
    "type": "private",
    "address": "CALLE CORAZON DE MARIA 1",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44039159191051,
      "lng": -3.672121095794982
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5508",
    "name": "Colegio Comunidad Infantil Villaverde",
    "slug": "colegio-comunidad-infantil-villaverde",
    "type": "private",
    "address": "CALLE VILLASTAR 10",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34328097682067,
      "lng": -3.7115534315675056
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5511",
    "name": "Colegio Corazón de María",
    "slug": "colegio-corazon-de-maria",
    "type": "private",
    "address": "CALLE ZIGIA 1",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43844248089428,
      "lng": -3.645808285371947
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5417",
    "name": "Colegio Corazón Inmaculado",
    "slug": "colegio-corazon-inmaculado",
    "type": "private",
    "address": "CALLE LOPEZ DE HOYOS 59",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.442318985283016,
      "lng": -3.676845074491575
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5512",
    "name": "Colegio Corpus Christi",
    "slug": "colegio-corpus-christi",
    "type": "private",
    "address": "CALLE AMARA 4",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44524186201111,
      "lng": -3.649458113130228
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5515",
    "name": "Colegio Cristo Rey. Avenida San Luis",
    "slug": "colegio-cristo-rey-avenida-san-luis",
    "type": "private",
    "address": "AVENIDA SAN LUIS 29",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47093501521475,
      "lng": -3.659095547590073
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5514",
    "name": "Colegio Cristo Rey. Calle Santa Úrsula",
    "slug": "colegio-cristo-rey-calle-santa-ursula",
    "type": "private",
    "address": "CALLE SANTA URSULA 5",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41235314365316,
      "lng": -3.7304311940756705
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5516",
    "name": "Colegio Cumbre Oxford",
    "slug": "colegio-cumbre-oxford",
    "type": "private",
    "address": "CALLE BUENDIA 50",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38223245633111,
      "lng": -3.6715427071492184
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6046",
    "name": "Colegio de Jesús",
    "slug": "colegio-de-jesus",
    "type": "private",
    "address": "CALLE TIMON 18",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47285639137393,
      "lng": -3.584983283436727
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5520",
    "name": "Colegio Decroly",
    "slug": "colegio-decroly",
    "type": "private",
    "address": "CALLE GUZMAN EL BUENO 60",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4369942607127,
      "lng": -3.7128823786921683
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5821",
    "name": "Colegio Diocesano Cristo de la Guía",
    "slug": "colegio-diocesano-cristo-de-la-guia",
    "type": "private",
    "address": "CALLE EZCARAY 3",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.410311030784285,
      "lng": -3.6136821061928113
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5381",
    "name": "Colegio Diocesano María Inmaculada. Calle Joaquín Turina",
    "slug": "colegio-diocesano-maria-inmaculada-calle-joaquin-turina",
    "type": "private",
    "address": "CALLE JOAQUIN TURINA 62",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37213951569106,
      "lng": -3.757984097817467
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6746",
    "name": "Colegio Dionisia Plaza",
    "slug": "colegio-dionisia-plaza",
    "type": "private",
    "address": "CALLE ESPINOS 10",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.462178140857326,
      "lng": -3.776616778579928
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5522",
    "name": "Colegio Divina Pastora. Calle Emilio Ortuño",
    "slug": "colegio-divina-pastora-calle-emilio-ortuno",
    "type": "private",
    "address": "CALLE EMILIO ORTUÑO 13",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.398972818221615,
      "lng": -3.666618384333272
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5523",
    "name": "Colegio Divina Pastora. Calle Santa Engracia",
    "slug": "colegio-divina-pastora-calle-santa-engracia",
    "type": "private",
    "address": "CALLE SANTA ENGRACIA 142",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44398605005671,
      "lng": -3.7024498258751786
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5524",
    "name": "Colegio Divino Corazón",
    "slug": "colegio-divino-corazon",
    "type": "private",
    "address": "CALLE DIVINO REDENTOR 55",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.469179592928505,
      "lng": -3.7002350782912776
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5525",
    "name": "Colegio Divino Maestro",
    "slug": "colegio-divino-maestro",
    "type": "private",
    "address": "PASEO EXTREMADURA 165 C/ DANTE, 10",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40806510668655,
      "lng": -3.7431130942477506
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6049",
    "name": "Colegio Dos Parques",
    "slug": "colegio-dos-parques",
    "type": "private",
    "address": "CALLE SAN ANASTASIO 4",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3973494112018,
      "lng": -3.7034142744354863
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5590259",
    "name": "Colegio Edith Stein",
    "slug": "colegio-edith-stein",
    "type": "private",
    "address": "CALLE SIMCA 20",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36623433807496,
      "lng": -3.7074603965255895
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5385",
    "name": "Colegio El Ave María",
    "slug": "colegio-el-ave-maria",
    "type": "private",
    "address": "CALLE DOCTOR SALGADO 16",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39768873990068,
      "lng": -3.664319691959553
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5366",
    "name": "Colegio El Carmelo Teresiano",
    "slug": "colegio-el-carmelo-teresiano",
    "type": "private",
    "address": "CALLE NUÑOMORAL 1",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37708211653675,
      "lng": -3.778831206316076
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5505",
    "name": "Colegio El Cid",
    "slug": "colegio-el-cid",
    "type": "private",
    "address": "CALLE SAN CIPRIANO 34",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40385080041611,
      "lng": -3.6058090930567794
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5737",
    "name": "Colegio El Porvenir",
    "slug": "colegio-el-porvenir",
    "type": "private",
    "address": "CALLE BRAVO MURILLO 85",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.444957207639106,
      "lng": -3.704228718581435
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Residencia"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6038",
    "name": "Colegio El Prado",
    "slug": "colegio-el-prado",
    "type": "private",
    "address": "CALLE COSTA BRAVA 4",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49617588602738,
      "lng": -3.702297599490761
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62744",
    "name": "Colegio El Valle",
    "slug": "colegio-el-valle",
    "type": "private",
    "address": "CALLE CORDEL DE PAVONES 2",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4027578376722,
      "lng": -3.617738099849234
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Enseñanza biling&amp;uuml;e"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4711013",
    "name": "Colegio El Valle II",
    "slug": "colegio-el-valle-ii",
    "type": "private",
    "address": "CALLE ANA DE AUSTRIA 60",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.500549935141635,
      "lng": -3.653897550903556
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4894255",
    "name": "Colegio El Valle III",
    "slug": "colegio-el-valle-iii",
    "type": "private",
    "address": "CALLE CEBREIRO 2",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.504482655978805,
      "lng": -3.662539633230735
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8157163",
    "name": "Colegio English For Fun (EE. UU.)",
    "slug": "colegio-english-for-fun-ee-uu",
    "type": "private",
    "address": "CALLE DARRO 5",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44896741579683,
      "lng": -3.6860510299134286
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5530",
    "name": "Colegio Enriqueta Aymer",
    "slug": "colegio-enriqueta-aymer",
    "type": "private",
    "address": "CALLE MIRABEL 38",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3794413138477,
      "lng": -3.7803427067261257
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "43526",
    "name": "Colegio Escuela Al - Nahda Al - Gadida de Madrid",
    "slug": "colegio-escuela-al-nahda-al-gadida-de-madrid",
    "type": "private",
    "address": "CALLE RODRIGUEZ MARIN 7",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.445525315927675,
      "lng": -3.6815940339066042
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "43523",
    "name": "Colegio Escuela Iraquí",
    "slug": "colegio-escuela-iraqui",
    "type": "private",
    "address": "RONDA ABUBILLA 18 PARQUE CONDE ORGAZ",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45222270923421,
      "lng": -3.6334276308527493
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "106077",
    "name": "Colegio Escuela Maternal Francesa Pomme D'Api (Ecole Maternelle Francaise)",
    "slug": "colegio-escuela-maternal-francesa-pomme-d-api-ecole-maternelle-francaise",
    "type": "private",
    "address": "AVENIDA MADROÑOS 69",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.456072348416264,
      "lng": -3.6312701257450044
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5723",
    "name": "Colegio Escuelas Santísimo Sacramento. Calle María Auxiliadora",
    "slug": "colegio-escuelas-santisimo-sacramento-calle-maria-auxiliadora",
    "type": "private",
    "address": "CALLE MARIA AUXILIADORA 9",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.457789320837215,
      "lng": -3.715425578651158
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5531",
    "name": "Colegio Espíritu Santo",
    "slug": "colegio-espiritu-santo",
    "type": "private",
    "address": "CALLE SAN EMILIO 54",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.426094470330256,
      "lng": -3.656406010247316
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6803100",
    "name": "Colegio Estadounidense City Country School",
    "slug": "colegio-estadounidense-city-country-school",
    "type": "private",
    "address": "CALLE ISLA SOLEDAD 2",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46765967459628,
      "lng": -3.724660292281194
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11018990",
    "name": "Colegio estadounidense Ellaluna American School",
    "slug": "colegio-estadounidense-ellaluna-american-school",
    "type": "private",
    "address": "CALLE PANDORA 23",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43986779389527,
      "lng": -3.6157430286238843
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7692927",
    "name": "Colegio Estadounidense Madrid Active School",
    "slug": "colegio-estadounidense-madrid-active-school",
    "type": "private",
    "address": "CALLE MARIA ZAYAS 8",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.459220655367346,
      "lng": -3.700768801420904
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10656604",
    "name": "Colegio Estadounidense Madrid Montessori School",
    "slug": "colegio-estadounidense-madrid-montessori-school",
    "type": "private",
    "address": "CALLE GENIL 11",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.448858723876356,
      "lng": -3.680972873591623
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5935431",
    "name": "Colegio Estudiantes las Tablas",
    "slug": "colegio-estudiantes-las-tablas",
    "type": "private",
    "address": "CALLE FROMISTA 1",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50860031023214,
      "lng": -3.6795057097908415
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5534",
    "name": "Colegio Estudio",
    "slug": "colegio-estudio",
    "type": "private",
    "address": "CALLE JIMENA MENENDEZ PIDAL 11",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47058208939406,
      "lng": -3.7660261067068563
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6085",
    "name": "Colegio Fem School",
    "slug": "colegio-fem-school",
    "type": "private",
    "address": "CALLE LOMA 4",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44528245809002,
      "lng": -3.715811795526845
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4964314",
    "name": "Colegio Fomento Fundación. Calle Padre Claret",
    "slug": "colegio-fomento-fundacion-calle-padre-claret",
    "type": "private",
    "address": "CALLE PADRE CLARET 23",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44877045459915,
      "lng": -3.6642445821635437
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5535",
    "name": "Colegio Fray Luis de León",
    "slug": "colegio-fray-luis-de-leon",
    "type": "private",
    "address": "CALLE EVARISTO SAN MIGUEL 10",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42688894697314,
      "lng": -3.7153456121746196
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5499",
    "name": "Colegio Fuentelarreyna",
    "slug": "colegio-fuentelarreyna",
    "type": "private",
    "address": "CALLE RAMON GOMEZ DE LA SERNA 62",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48148789385749,
      "lng": -3.726177574977664
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5536",
    "name": "Colegio Fundación Caldeiro",
    "slug": "colegio-fundacion-caldeiro",
    "type": "private",
    "address": "AVENIDA TOREROS 45",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43244118606638,
      "lng": -3.666665822126943
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5454",
    "name": "Colegio Fundación Santamarca",
    "slug": "colegio-fundacion-santamarca",
    "type": "private",
    "address": "CALLE MARCENADO 50",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.449560665567006,
      "lng": -3.6740285118162572
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5537",
    "name": "Colegio Gamo Diana",
    "slug": "colegio-gamo-diana",
    "type": "private",
    "address": "CALLE TEMBLEQUE 104",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39220202500326,
      "lng": -3.7622033255638203
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4967937",
    "name": "Colegio Gaudem",
    "slug": "colegio-gaudem",
    "type": "private",
    "address": "CALLE PLAYA DE BARLOVENTO 14",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4732974354175,
      "lng": -3.593893756961978
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración preferente: auditivos"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4694243",
    "name": "Colegio GSD Las Suertes",
    "slug": "colegio-gsd-las-suertes",
    "type": "private",
    "address": "CALLE RAFAEL DE LEON 10",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36607370900156,
      "lng": -3.600442517029481
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62443",
    "name": "Colegio GSD Moratalaz",
    "slug": "colegio-gsd-moratalaz",
    "type": "private",
    "address": "CALLE LUIS DE HOYOS SAINZ 170",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40373629860997,
      "lng": -3.62842399788048
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "50045492",
    "name": "Colegio GSD Valdebebas",
    "slug": "colegio-gsd-valdebebas",
    "type": "private",
    "address": "CALLE LEANDRO SILVA 10",
    "city": "MADRID",
    "postalCode": "28055",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.498053033768976,
      "lng": -3.6114414981740133
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5540",
    "name": "Colegio GSD Vallecas",
    "slug": "colegio-gsd-vallecas",
    "type": "private",
    "address": "AVENIDA PARQUE DE PALOMERAS BAJAS 14",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38005823463226,
      "lng": -3.662697468424171
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6183",
    "name": "Colegio Guzmán el Bueno",
    "slug": "colegio-guzman-el-bueno",
    "type": "private",
    "address": "CALLE EUGENIO SALAZAR 15",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44515634381383,
      "lng": -3.6738430099754424
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5164741",
    "name": "Colegio Highlands El Encinar",
    "slug": "colegio-highlands-el-encinar",
    "type": "private",
    "address": "CALLE SAN ENRIQUE DE OSSO 46",
    "city": "MADRID",
    "postalCode": "28055",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50402446123954,
      "lng": -3.638554034863201
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5369",
    "name": "Colegio Hispano Alemán",
    "slug": "colegio-hispano-aleman",
    "type": "public",
    "address": "CALLE SERRANO 186",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44870547259162,
      "lng": -3.68312381488991
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5547",
    "name": "Colegio Huérfanos de la Armada",
    "slug": "colegio-huerfanos-de-la-armada",
    "type": "private",
    "address": "CALLE ARTURO SORIA 285 TAMBIEN ARTURO SORIA, 278",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47196681032292,
      "lng": -3.667681780457799
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5561",
    "name": "Colegio Inmaculada Concepción",
    "slug": "colegio-inmaculada-concepcion",
    "type": "private",
    "address": "CALLE GENERAL DIAZ PORLIER 25",
    "city": "MADRID",
    "postalCode": "28001",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.426812397862776,
      "lng": -3.677196516487872
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5526",
    "name": "Colegio Institución del Divino Maestro",
    "slug": "colegio-institucion-del-divino-maestro",
    "type": "private",
    "address": "CALLE SAN VICENTE FERRER 82",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42626399126737,
      "lng": -3.7085723265826585
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5590344",
    "name": "Colegio Internacional Aravaca",
    "slug": "colegio-internacional-aravaca",
    "type": "private",
    "address": "CALLE SANTA BERNARDITA 3",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.453043526970916,
      "lng": -3.7725136823651324
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4517234",
    "name": "Colegio Internacional J.H. Newman",
    "slug": "colegio-internacional-j-h-newman",
    "type": "private",
    "address": "AVENIDA GUADALAJARA 28",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42102171950052,
      "lng": -3.615582949361254
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5761",
    "name": "Colegio Internacional Nicoli",
    "slug": "colegio-internacional-nicoli",
    "type": "private",
    "address": "PASEO EDUARDO DATO 4",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43268376893825,
      "lng": -3.6943269657722566
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6047",
    "name": "Colegio Japonés de Madrid",
    "slug": "colegio-japones-de-madrid",
    "type": "private",
    "address": "AVENIDA VICTORIA 98",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47254721960381,
      "lng": -3.8297976311001434
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5566",
    "name": "Colegio Jesús Maestro",
    "slug": "colegio-jesus-maestro",
    "type": "private",
    "address": "CALLE MELQUIADES ALVAREZ 8",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44119018547709,
      "lng": -3.7120704290289845
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5432",
    "name": "Colegio Jesús María - Nuestra Señora de la Caridad del Cobre",
    "slug": "colegio-jesus-maria-nuestra-senora-de-la-caridad-del-cobre",
    "type": "private",
    "address": "CALLE HERMANOS GARCIA NOBLEJAS 17",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43644796179091,
      "lng": -3.636698787046029
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6051",
    "name": "Colegio Jesús María. Calle Hermanos García Noblejas 68",
    "slug": "colegio-jesus-maria-calle-hermanos-garcia-noblejas-68",
    "type": "private",
    "address": "CALLE HERMANOS GARCIA NOBLEJAS 68",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42972344891397,
      "lng": -3.6324619700868404
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5567",
    "name": "Colegio Jesús María. Calle Juan Bravo",
    "slug": "colegio-jesus-maria-calle-juan-bravo",
    "type": "private",
    "address": "CALLE JUAN BRAVO 13",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4329333071959,
      "lng": -3.6826812218767166
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5501",
    "name": "Colegio Joyfe",
    "slug": "colegio-joyfe",
    "type": "private",
    "address": "CALLE VITAL AZA 65",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43319853033197,
      "lng": -3.63945054239953
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5428",
    "name": "Colegio Juan de Valdés",
    "slug": "colegio-juan-de-valdes",
    "type": "private",
    "address": "AVENIDA CANILLEJAS A VICALVARO 135",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4265647386469,
      "lng": -3.6100220598048907
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor  - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "32306",
    "name": "Colegio King's College (king's Infant School)",
    "slug": "colegio-king-s-college-king-s-infant-school",
    "type": "private",
    "address": "CALLE PRIETO UREÑA 9",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46499467850612,
      "lng": -3.6690989556440137
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5549",
    "name": "Colegio La Inmaculada - Marillac",
    "slug": "colegio-la-inmaculada-marillac",
    "type": "private",
    "address": "CALLE GARCIA DE PAREDES 37",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43677232110949,
      "lng": -3.6975760278612695
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5553",
    "name": "Colegio La Inmaculada. Avenida Virgen del Carmen",
    "slug": "colegio-la-inmaculada-avenida-virgen-del-carmen",
    "type": "private",
    "address": "AVENIDA VIRGEN DEL CARMEN 13",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.474027977949675,
      "lng": -3.653828943198728
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5554",
    "name": "Colegio La Inmaculada. Calle Navalperal",
    "slug": "colegio-la-inmaculada-calle-navalperal",
    "type": "private",
    "address": "CALLE NAVALPERAL 9",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46082857853069,
      "lng": -3.7264622302250108
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5632",
    "name": "Colegio La Merced",
    "slug": "colegio-la-merced",
    "type": "private",
    "address": "CALLE LUIS DE GONGORA 5",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42316472725149,
      "lng": -3.6967399396564007
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5638",
    "name": "Colegio La Milagrosa",
    "slug": "colegio-la-milagrosa",
    "type": "private",
    "address": "CALLE PUERTO DEL MONASTERIO 35",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.393425673046444,
      "lng": -3.6614852466622216
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5649",
    "name": "Colegio La Natividad",
    "slug": "colegio-la-natividad",
    "type": "private",
    "address": "CALLE TORROX 4",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36790531827837,
      "lng": -3.6903520115359543
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5364",
    "name": "Colegio La Presentación FESD Madrid",
    "slug": "colegio-la-presentacion-fesd-madrid",
    "type": "private",
    "address": "PLAZA VICALVARADA 1",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40996013914497,
      "lng": -3.6101903201022267
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134414",
    "name": "Colegio La Purísima",
    "slug": "colegio-la-purisima",
    "type": "private",
    "address": "CALLE RICARDO ORTIZ 29",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42741969436041,
      "lng": -3.657833554534665
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (preferentemente auditivos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6052",
    "name": "Colegio La Salle",
    "slug": "colegio-la-salle",
    "type": "private",
    "address": "CALLE GENERAL ROMERO BASART 50",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37843087041222,
      "lng": -3.773851914617546
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6039",
    "name": "Colegio La Salle - Sagrado Corazón",
    "slug": "colegio-la-salle-sagrado-corazon",
    "type": "public",
    "address": "AVENIDA CARDENAL HERRERA ORIA 242",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48244991586683,
      "lng": -3.717834650481561
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Compensación educativa"
    ],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5760",
    "name": "Colegio La Salle - San Rafael",
    "slug": "colegio-la-salle-san-rafael",
    "type": "private",
    "address": "CALLE FERNANDO EL CATOLICO 49",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43413030872986,
      "lng": -3.71273423116722
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5672",
    "name": "Colegio La Salle-La Paloma - Fundación Lara",
    "slug": "colegio-la-salle-la-paloma-fundacion-lara",
    "type": "private",
    "address": "CALLE PALOMA 21",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40813563191565,
      "lng": -3.711858874738309
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5457",
    "name": "Colegio las Naciones",
    "slug": "colegio-las-naciones",
    "type": "private",
    "address": "AVENIDA ALFONSO XIII 90",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45560251164679,
      "lng": -3.6668121368896482
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "31788",
    "name": "Colegio las Rosas",
    "slug": "colegio-las-rosas",
    "type": "private",
    "address": "CALLE CALABRIA 1 C/V AVDA. NIZA, 24",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43102274211902,
      "lng": -3.606879180677199
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4973344",
    "name": "Colegio Las Tablas Valverde",
    "slug": "colegio-las-tablas-valverde",
    "type": "private",
    "address": "PASEO TIERRA DE MELIDE 22",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50574998598262,
      "lng": -3.6614780727167
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5575",
    "name": "Colegio Liceo Francés",
    "slug": "colegio-liceo-frances",
    "type": "private",
    "address": "PLAZA LICEO 1",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4574358888289,
      "lng": -3.6437610353520764
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5576",
    "name": "Colegio Liceo Ibérico",
    "slug": "colegio-liceo-iberico",
    "type": "private",
    "address": "CALLE ANTONIO VICENT 62",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.394291012961865,
      "lng": -3.7102411231013193
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5578",
    "name": "Colegio Liceo Madariaga",
    "slug": "colegio-liceo-madariaga",
    "type": "private",
    "address": "CALLE FRANCISCO MADARIAGA 26",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43526312285783,
      "lng": -3.640802395251753
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5579",
    "name": "Colegio Liceo Oroquieta",
    "slug": "colegio-liceo-oroquieta",
    "type": "private",
    "address": "CALLE SAHARA 79 C/ VILLAYOYOSA 85",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35502206126822,
      "lng": -3.691892822353897
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5580",
    "name": "Colegio Liceo Rosales",
    "slug": "colegio-liceo-rosales",
    "type": "private",
    "address": "CALLE IGNACIO SANTOS VIÑUELAS 9",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34957930100439,
      "lng": -3.689081786571669
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5584",
    "name": "Colegio Liceo Sorolla B",
    "slug": "colegio-liceo-sorolla-b",
    "type": "private",
    "address": "CALLE NUEVA ZELANDA 21",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46638366727216,
      "lng": -3.7241393658674182
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5585",
    "name": "Colegio Liceo Versalles",
    "slug": "colegio-liceo-versalles",
    "type": "private",
    "address": "CALLE PUERTO DE SOMOSIERRA 9",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37857076076182,
      "lng": -3.622335287068757
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5409",
    "name": "Colegio López Vicuña",
    "slug": "colegio-lopez-vicuna",
    "type": "private",
    "address": "CALLE HINOJAL 7",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43214343900427,
      "lng": -3.6130316787039605
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5712",
    "name": "Colegio los Olmos",
    "slug": "colegio-los-olmos",
    "type": "private",
    "address": "CALLE ASTROS 13",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41137508892364,
      "lng": -3.667176834640208
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5748",
    "name": "Colegio los Robles",
    "slug": "colegio-los-robles",
    "type": "private",
    "address": "AVENIDA OSA MAYOR 239",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45491958728365,
      "lng": -3.793468792165956
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6267",
    "name": "Colegio Los Tilos",
    "slug": "colegio-los-tilos",
    "type": "private",
    "address": "CALLE EL BOSCO ",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40148296368549,
      "lng": -3.651406031292048
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5588",
    "name": "Colegio Lourdes",
    "slug": "colegio-lourdes",
    "type": "private",
    "address": "CALLE SAN ROBERTO 8",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40288540111211,
      "lng": -3.7596722994754836
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5502",
    "name": "Colegio Luis Feito",
    "slug": "colegio-luis-feito",
    "type": "private",
    "address": "CALLE LUIS FEITO 19",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39131049936472,
      "lng": -3.7441660517820923
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134180",
    "name": "Colegio Luz Casanova Embajadores",
    "slug": "colegio-luz-casanova-embajadores",
    "type": "private",
    "address": "CALLE ALDEA DEL FRESNO 1",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.396246560150374,
      "lng": -3.6965920027934485
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5594",
    "name": "Colegio Luz Casanova. Calle Alondra",
    "slug": "colegio-luz-casanova-calle-alondra",
    "type": "private",
    "address": "CALLE ALONDRA 18",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38788128293086,
      "lng": -3.735209403360524
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5596",
    "name": "Colegio Luz Casanova. Calle Madridejos",
    "slug": "colegio-luz-casanova-calle-madridejos",
    "type": "private",
    "address": "CALLE MADRIDEJOS 34",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38448926383852,
      "lng": -3.7099958354569194
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5597",
    "name": "Colegio Madre de Dios",
    "slug": "colegio-madre-de-dios",
    "type": "private",
    "address": "CALLE ANGEL MUÑOZ 5",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45420066030687,
      "lng": -3.6567502034234245
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor",
      "horario ampliado",
      "actividades extraescolares."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5598",
    "name": "Colegio Madres Concepcionistas",
    "slug": "colegio-madres-concepcionistas",
    "type": "private",
    "address": "CALLE PRINCESA 19",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42627923799975,
      "lng": -3.7134176081082986
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5599",
    "name": "Colegio Madres Mercedarias de Don Juan de Alarcón",
    "slug": "colegio-madres-mercedarias-de-don-juan-de-alarcon",
    "type": "private",
    "address": "CALLE VALVERDE 15",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.421538211958264,
      "lng": -3.702015877360922
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11124605",
    "name": "Colegio Madrid",
    "slug": "colegio-madrid",
    "type": "private",
    "address": "CALLE ARTURO SORIA 147",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47367454760774,
      "lng": -3.6652449364935857
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5371",
    "name": "Colegio Madrid Pinar",
    "slug": "colegio-madrid-pinar",
    "type": "private",
    "address": "CALLE MESENA 101",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47367454760774,
      "lng": -3.6652449364935857
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5602",
    "name": "Colegio María Auxiliadora",
    "slug": "colegio-maria-auxiliadora",
    "type": "private",
    "address": "CALLE VILLAAMIL 18",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45824081812296,
      "lng": -3.7064667742200044
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5605",
    "name": "Colegio María Cristina",
    "slug": "colegio-maria-cristina",
    "type": "private",
    "address": "CALLE ANTILLON 6",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.412934131508614,
      "lng": -3.7283041596896775
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6269",
    "name": "Colegio María Inmaculada. Calle Fuencarral",
    "slug": "colegio-maria-inmaculada-calle-fuencarral",
    "type": "private",
    "address": "CALLE FUENCARRAL 97",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4275118962553,
      "lng": -3.70190115388647
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5606",
    "name": "Colegio María Inmaculada. Calle Mogambo",
    "slug": "colegio-maria-inmaculada-calle-mogambo",
    "type": "private",
    "address": "CALLE MOGAMBO 5",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.379774328145274,
      "lng": -3.6571931808017073
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6270",
    "name": "Colegio María Inmaculada. Calle Ríos Rosas",
    "slug": "colegio-maria-inmaculada-calle-rios-rosas",
    "type": "private",
    "address": "CALLE RIOS ROSAS 35",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.441967561937844,
      "lng": -3.6980660100916305
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5612",
    "name": "Colegio María Inmaculada. Paseo General Martínez Campos",
    "slug": "colegio-maria-inmaculada-paseo-general-martinez-campos",
    "type": "private",
    "address": "PASEO GENERAL MARTINEZ CAMPOS 18",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43489028042732,
      "lng": -3.695941329828033
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6058",
    "name": "Colegio María Reina. Avenida Orcasur",
    "slug": "colegio-maria-reina-avenida-orcasur",
    "type": "private",
    "address": "AVENIDA ORCASUR 42",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3647167372444,
      "lng": -3.702215148248456
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5620",
    "name": "Colegio María Reina. Calle Aranzueque",
    "slug": "colegio-maria-reina-calle-aranzueque",
    "type": "private",
    "address": "CALLE ARANZUEQUE 4",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46138559999347,
      "lng": -3.7885557042555327
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5617",
    "name": "Colegio María Reina. Calle Gil Polo",
    "slug": "colegio-maria-reina-calle-gil-polo",
    "type": "private",
    "address": "CALLE GIL Y POLO 7",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43018266683097,
      "lng": -3.6423103604165754
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5418",
    "name": "Colegio María Virgen",
    "slug": "colegio-maria-virgen",
    "type": "private",
    "address": "CALLE PADRE DAMIAN 20",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45575572459104,
      "lng": -3.686804111158116
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transpoorte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6059",
    "name": "Colegio Mater Amabilis",
    "slug": "colegio-mater-amabilis",
    "type": "private",
    "address": "CALLE GAVIA SECA 15",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37910012984372,
      "lng": -3.619383271876178
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "22542",
    "name": "Colegio Mater Clementisima",
    "slug": "colegio-mater-clementisima",
    "type": "private",
    "address": "CALLE ANTONIO FOLGUERAS 14",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39080370178632,
      "lng": -3.6615420680611614
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5623",
    "name": "Colegio Mater Immaculata",
    "slug": "colegio-mater-immaculata",
    "type": "private",
    "address": "CALLE MADRE ANTONIA PARIS 1",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.444344955388196,
      "lng": -3.651949341214703
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5624",
    "name": "Colegio Mater Puríssima",
    "slug": "colegio-mater-purissima",
    "type": "private",
    "address": "CALLE MADRE CANDIDA MARIA DE JESUS 4",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.384656855874624,
      "lng": -3.701727081515074
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5627",
    "name": "Colegio Mater Salvatoris",
    "slug": "colegio-mater-salvatoris",
    "type": "private",
    "address": "CALLE VALDESQUI 4",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46463233373124,
      "lng": -3.772021290144723
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10297377",
    "name": "Colegio Mayor Alcalá",
    "slug": "colegio-mayor-alcala",
    "type": "private",
    "address": "CALLE DON RAMON MENENDEZ PIDAL 2",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44764820463789,
      "lng": -3.719503495059197
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo masculina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10297407",
    "name": "Colegio Mayor Alcor",
    "slug": "colegio-mayor-alcor",
    "type": "private",
    "address": "CALLE GENERAL AMPUDIA 7",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.443245742864015,
      "lng": -3.715255918766616
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6507",
    "name": "Colegio Mayor Antonio de Nebrija",
    "slug": "colegio-mayor-antonio-de-nebrija",
    "type": "private",
    "address": "AVENIDA SENECA 8",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43571333918665,
      "lng": -3.7284677239467596
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6548",
    "name": "Colegio Mayor Aquinas (Santo Tomás de Aquino)",
    "slug": "colegio-mayor-aquinas-santo-tomas-de-aquino",
    "type": "private",
    "address": "CALLE LEONARDO PRIETO CASTRO 6",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45204759324346,
      "lng": -3.7218395787782304
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixto."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10297432",
    "name": "Colegio Mayor Argentino Nuestra Señora de Luján",
    "slug": "colegio-mayor-argentino-nuestra-senora-de-lujan",
    "type": "private",
    "address": "CALLE MARTIN FIERRO 3",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43610678975899,
      "lng": -3.731701576349752
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10297437",
    "name": "Colegio Mayor Barberán y Collar",
    "slug": "colegio-mayor-barberan-y-collar",
    "type": "private",
    "address": "AVENIDA SENECA 16",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.434545397562495,
      "lng": -3.7331585246591557
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6533",
    "name": "Colegio Mayor Berrospe",
    "slug": "colegio-mayor-berrospe",
    "type": "private",
    "address": "AVENIDA MONCLOA 9",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44636760362397,
      "lng": -3.716758311138522
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10297474",
    "name": "Colegio Mayor Casa Do Brasil",
    "slug": "colegio-mayor-casa-do-brasil",
    "type": "private",
    "address": "AVENIDA MEMORIA 3",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43853583084271,
      "lng": -3.7252915757655174
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10297556",
    "name": "Colegio Mayor Chaminade",
    "slug": "colegio-mayor-chaminade",
    "type": "private",
    "address": "PASEO JUAN XXIII 9",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44734637151868,
      "lng": -3.7177116209853853
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10297714",
    "name": "Colegio Mayor Diego de Covarrubias",
    "slug": "colegio-mayor-diego-de-covarrubias",
    "type": "private",
    "address": "AVENIDA SENECA 10",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43543488509487,
      "lng": -3.7297224981364576
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10297748",
    "name": "Colegio Mayor Elías Ahúja",
    "slug": "colegio-mayor-elias-ahuja",
    "type": "private",
    "address": "CALLE RECTOR ROYO-VILLANOVA 4",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45084427289562,
      "lng": -3.7153019237576634
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo masculina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6522",
    "name": "Colegio Mayor Fundación SEPI",
    "slug": "colegio-mayor-fundacion-sepi",
    "type": "private",
    "address": "AVENIDA GREGORIO DEL AMO 2",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.446907485706866,
      "lng": -3.7188228498669362
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6520",
    "name": "Colegio Mayor Jaime del Amo",
    "slug": "colegio-mayor-jaime-del-amo",
    "type": "private",
    "address": "AVENIDA GREGORIO DEL AMO 5",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44582638073112,
      "lng": -3.72226686792607
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo masculino."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6521",
    "name": "Colegio Mayor Jorge Juan",
    "slug": "colegio-mayor-jorge-juan",
    "type": "private",
    "address": "AVENIDA SENECA 14",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4349249042721,
      "lng": -3.7317433524081887
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6523",
    "name": "Colegio Mayor Juan Luis Vives",
    "slug": "colegio-mayor-juan-luis-vives",
    "type": "private",
    "address": "CALLE FRANCISCO SUAREZ 7",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46502029145429,
      "lng": -3.6845899986944497
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6524",
    "name": "Colegio Mayor Juan XXIII Roncalli",
    "slug": "colegio-mayor-juan-xxiii-roncalli",
    "type": "private",
    "address": "CALLE RAMIRO DE MAEZTU 3",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44903948047641,
      "lng": -3.7180373012857046
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6527",
    "name": "Colegio Mayor Loyola",
    "slug": "colegio-mayor-loyola",
    "type": "private",
    "address": "PASEO JUAN XXIII 17",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45000544910973,
      "lng": -3.7153887868377877
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6528",
    "name": "Colegio Mayor Mara",
    "slug": "colegio-mayor-mara",
    "type": "private",
    "address": "PASEO JUAN XXIII 15",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44958307800659,
      "lng": -3.7160919870624136
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6529",
    "name": "Colegio Mayor Marqués de la Ensenada",
    "slug": "colegio-mayor-marques-de-la-ensenada",
    "type": "private",
    "address": "AVENIDA SENECA 18",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43444043139228,
      "lng": -3.733543743924688
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11955027",
    "name": "Colegio Mayor Mater Salvatoris",
    "slug": "colegio-mayor-mater-salvatoris",
    "type": "private",
    "address": "CALLE VALDESQUI 3",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46404258469897,
      "lng": -3.7710701028693103
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6530",
    "name": "Colegio Mayor Méndel",
    "slug": "colegio-mayor-mendel",
    "type": "private",
    "address": "CALLE RECTOR ROYO-VILLANOVA 6",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.450938406912854,
      "lng": -3.716699793684652
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6531",
    "name": "Colegio Mayor Moncloa",
    "slug": "colegio-mayor-moncloa",
    "type": "private",
    "address": "AVENIDA MONCLOA 3",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44587627267912,
      "lng": -3.715446297968531
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo masculina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6532",
    "name": "Colegio Mayor Montalbán",
    "slug": "colegio-mayor-montalban",
    "type": "private",
    "address": "CALLE DIEGO DE LEON 14",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.434842602381124,
      "lng": -3.684160626397251
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo masculina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11955131",
    "name": "Colegio Mayor Nuestra Señora de África",
    "slug": "colegio-mayor-nuestra-senora-de-africa",
    "type": "private",
    "address": "CALLE RAMIRO DE MAEZTU 2",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44925799673555,
      "lng": -3.7171006978828465
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6534",
    "name": "Colegio Mayor Nuestra Señora de Guadalupe",
    "slug": "colegio-mayor-nuestra-senora-de-guadalupe",
    "type": "private",
    "address": "AVENIDA SENECA 4",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4365837060789,
      "lng": -3.7255298689626724
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10298280",
    "name": "Colegio Mayor Pío XII",
    "slug": "colegio-mayor-pio-xii",
    "type": "private",
    "address": "PASEO JUAN XXIII 3",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44491451422515,
      "lng": -3.7200680644720574
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo masculina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6538",
    "name": "Colegio Mayor Poveda",
    "slug": "colegio-mayor-poveda",
    "type": "private",
    "address": "CALLE ISAAC PERAL 60",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.442963646266804,
      "lng": -3.7190211475612625
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6545",
    "name": "Colegio Mayor Santa María de Europa",
    "slug": "colegio-mayor-santa-maria-de-europa",
    "type": "private",
    "address": "CALLE CEA BERMUDEZ 17",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.438685506832634,
      "lng": -3.7091237782947606
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6544",
    "name": "Colegio Mayor Santa María del Pino",
    "slug": "colegio-mayor-santa-maria-del-pino",
    "type": "private",
    "address": "PASEO SAN FRANCISCO DE SALES 13",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44040601048909,
      "lng": -3.7162462206445745
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6546",
    "name": "Colegio Mayor Santa Mónica",
    "slug": "colegio-mayor-santa-monica",
    "type": "private",
    "address": "PASEO JUAN XXIII 19",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45035239946326,
      "lng": -3.7146291167019014
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "46080",
    "name": "Colegio Mayor Santa Teresa de Jesús",
    "slug": "colegio-mayor-santa-teresa-de-jesus",
    "type": "private",
    "address": "AVENIDA SENECA 12",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43522158947955,
      "lng": -3.730558119606541
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6552",
    "name": "Colegio Mayor Somosierra",
    "slug": "colegio-mayor-somosierra",
    "type": "private",
    "address": "CALLE VICTOR DE LA SERNA 13",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45338463229645,
      "lng": -3.672607650534373
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6519",
    "name": "Colegio Mayor Universitario Isabel de España",
    "slug": "colegio-mayor-universitario-isabel-de-espana",
    "type": "private",
    "address": "CALLE DON RAMON MENENDEZ PIDAL 5",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44841681111204,
      "lng": -3.7199730138128735
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6540",
    "name": "Colegio Mayor Universitario San Agustín",
    "slug": "colegio-mayor-universitario-san-agustin",
    "type": "private",
    "address": "TRAVESIA ANTONIO NEBRIJA 4",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43672037843154,
      "lng": -3.7276073977792428
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6542",
    "name": "Colegio Mayor Universitario San Pablo",
    "slug": "colegio-mayor-universitario-san-pablo",
    "type": "private",
    "address": "CALLE ISAAC PERAL 58",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.442163372591814,
      "lng": -3.7186016905372776
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo masculina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6549",
    "name": "Colegio Mayor Universitario Santillana",
    "slug": "colegio-mayor-universitario-santillana",
    "type": "private",
    "address": "CALLE MARBELLA 60",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49465964836949,
      "lng": -3.7062096187224456
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo masculina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6553",
    "name": "Colegio Mayor Vedruna",
    "slug": "colegio-mayor-vedruna",
    "type": "private",
    "address": "GLORIETA PRESIDENTE GARCIA MORENO 2",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.445605369642564,
      "lng": -3.714995329761434
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo femenina."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6525",
    "name": "Colegio Mayor Ximénez de Cisneros",
    "slug": "colegio-mayor-ximenez-de-cisneros",
    "type": "private",
    "address": "AVENIDA SENECA 8",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43571333918665,
      "lng": -3.7284677239467596
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5629",
    "name": "Colegio Menesiano",
    "slug": "colegio-menesiano",
    "type": "private",
    "address": "AVENIDA BRASILIA 11",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43795858894732,
      "lng": -3.6612848173165764
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5640",
    "name": "Colegio Minerva",
    "slug": "colegio-minerva",
    "type": "private",
    "address": "CALLE VILLARDONDIEGO 15",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40713296837946,
      "lng": -3.6081612836038923
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5642",
    "name": "Colegio Mirasierra",
    "slug": "colegio-mirasierra",
    "type": "private",
    "address": "CALLE ASCAO 33",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43065426548559,
      "lng": -3.640122017463213
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5641",
    "name": "Colegio Mirasol",
    "slug": "colegio-mirasol",
    "type": "private",
    "address": "CALLE PEÑA DORADA 4",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.484971529414466,
      "lng": -3.713613918066596
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5497",
    "name": "Colegio Montealto",
    "slug": "colegio-montealto",
    "type": "private",
    "address": "CALLE LA MASO 76",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.487292183649174,
      "lng": -3.714204863545418
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5645",
    "name": "Colegio Montpellier",
    "slug": "colegio-montpellier",
    "type": "private",
    "address": "CALLE VIRGEN DEL VAL 7",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.437962804054195,
      "lng": -3.6542104514222236
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6204",
    "name": "Colegio Montserrat",
    "slug": "colegio-montserrat",
    "type": "private",
    "address": "CALLE JOSE MARTINEZ DE VELASCO 1",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41624598997424,
      "lng": -3.667696421048724
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5648",
    "name": "Colegio Natividad de Nuestra Señora",
    "slug": "colegio-natividad-de-nuestra-senora",
    "type": "private",
    "address": "CALLE MARTINEZ IZQUIERDO 8",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43263153804126,
      "lng": -3.6711360146351573
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5430",
    "name": "Colegio Nazaret",
    "slug": "colegio-nazaret",
    "type": "private",
    "address": "CALLE CASTILLO DE UCLES 24",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42737829810719,
      "lng": -3.6263569598518295
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5382",
    "name": "Colegio Nazaret - Oporto",
    "slug": "colegio-nazaret-oporto",
    "type": "private",
    "address": "CALLE CLARISAS 4",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39025093638631,
      "lng": -3.7280479560629614
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5655",
    "name": "Colegio Nebrija Rosales",
    "slug": "colegio-nebrija-rosales",
    "type": "private",
    "address": "CALLE CARLOS DOMINGO 10",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.391002165073715,
      "lng": -3.744480783771296
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5546",
    "name": "Colegio neerlandés Nederlandstalige School Madrid",
    "slug": "colegio-neerlandes-nederlandstalige-school-madrid",
    "type": "private",
    "address": "CALLE ALONSO SAAVEDRA 20 Y Nº 22",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.470286632464095,
      "lng": -3.6637723512063873
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5656",
    "name": "Colegio Nervión",
    "slug": "colegio-nervion",
    "type": "private",
    "address": "CALLE NERVION 2",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4469068614183,
      "lng": -3.6841079435359054
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5352",
    "name": "Colegio Nuestra Señora de Fátima. Calle Alcalá",
    "slug": "colegio-nuestra-senora-de-fatima-calle-alcala",
    "type": "private",
    "address": "CALLE ALCALA 292",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.432594065961545,
      "lng": -3.6509044490781974
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6066",
    "name": "Colegio Nuestra Señora de Fátima. Calle Manuel Muñoz",
    "slug": "colegio-nuestra-senora-de-fatima-calle-manuel-munoz",
    "type": "private",
    "address": "CALLE MANUEL MUÑOZ 30",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.384876704918824,
      "lng": -3.701128511722845
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6064",
    "name": "Colegio Nuestra Señora de Gracia",
    "slug": "colegio-nuestra-senora-de-gracia",
    "type": "private",
    "address": "PASEO GIGANTES Y CABEZUDOS 12",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35968488685472,
      "lng": -3.694048574611277
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11955749",
    "name": "Colegio Nuestra Señora de la Consolación",
    "slug": "colegio-nuestra-senora-de-la-consolacion",
    "type": "private",
    "address": "PLAZA MADRE MOLAS 2",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46309663885419,
      "lng": -3.684584268773497
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5667",
    "name": "Colegio Nuestra Señora de la Estrella",
    "slug": "colegio-nuestra-senora-de-la-estrella",
    "type": "private",
    "address": "CALLE CRUCERO BALEARES 1",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39407194977698,
      "lng": -3.6603250522156263
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5669",
    "name": "Colegio Nuestra Señora de la Merced. Avenida Alfonso XIII",
    "slug": "colegio-nuestra-senora-de-la-merced-avenida-alfonso-xiii",
    "type": "private",
    "address": "AVENIDA ALFONSO XIII 165",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46016789814495,
      "lng": -3.6795600113405458
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5670",
    "name": "Colegio Nuestra Señora de la Merced. Calle José Luis Arrese",
    "slug": "colegio-nuestra-senora-de-la-merced-calle-jose-luis-arrese",
    "type": "private",
    "address": "CALLE JOSE LUIS DE ARRESE 5",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42202035059318,
      "lng": -3.6551758296831087
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5807",
    "name": "Colegio Nuestra Señora de la Merced. Calle Zaida",
    "slug": "colegio-nuestra-senora-de-la-merced-calle-zaida",
    "type": "private",
    "address": "CALLE ZAIDA 87 OTRA ENTRADA POR C/ JOSE GARRIDO 10",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39247289490103,
      "lng": -3.73568351648087
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5673",
    "name": "Colegio Nuestra Señora de la Paz",
    "slug": "colegio-nuestra-senora-de-la-paz",
    "type": "private",
    "address": "CALLE VALDERRIBAS 37",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.404845091517394,
      "lng": -3.6762102912144026
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5682",
    "name": "Colegio Nuestra Señora de la Providencia",
    "slug": "colegio-nuestra-senora-de-la-providencia",
    "type": "private",
    "address": "CALLE MONEDEROS 2",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38932490762421,
      "lng": -3.7029890946378794
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5496",
    "name": "Colegio Nuestra Señora de la Vega",
    "slug": "colegio-nuestra-senora-de-la-vega",
    "type": "private",
    "address": "CALLE CHANTADA 28",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47342973121865,
      "lng": -3.712371011419384
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5359",
    "name": "Colegio Nuestra Señora de las Delicias",
    "slug": "colegio-nuestra-senora-de-las-delicias",
    "type": "private",
    "address": "PASEO DELICIAS 67",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39791914941328,
      "lng": -3.694111102176117
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5683",
    "name": "Colegio Nuestra Señora de las Escuelas Pias. Calle Eugenia de Montijo",
    "slug": "colegio-nuestra-senora-de-las-escuelas-pias-calle-eugenia-de-montijo",
    "type": "private",
    "address": "CALLE EUGENIA DE MONTIJO 83",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.375719071596556,
      "lng": -3.7506265072656086
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6067",
    "name": "Colegio Nuestra Señora de las Escuelas Pias. Calle Ocaña",
    "slug": "colegio-nuestra-senora-de-las-escuelas-pias-calle-ocana",
    "type": "private",
    "address": "CALLE OCAÑA 191",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38936523944137,
      "lng": -3.7537942291118065
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5663",
    "name": "Colegio Nuestra Señora de las Maravillas",
    "slug": "colegio-nuestra-senora-de-las-maravillas",
    "type": "private",
    "address": "CALLE GUADALQUIVIR 9",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.446771076569846,
      "lng": -3.6872550860633133
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5431",
    "name": "Colegio Nuestra Señora de las Nieves",
    "slug": "colegio-nuestra-senora-de-las-nieves",
    "type": "private",
    "address": "CALLE ALCALA 589",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44585140058632,
      "lng": -3.613745809573345
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Integración preferente (Trastornos generales del desarrollo - motóricos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5406",
    "name": "Colegio Nuestra Señora de las Victorias",
    "slug": "colegio-nuestra-senora-de-las-victorias",
    "type": "private",
    "address": "CALLE APOSTOL SANTIAGO 72",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42887078736474,
      "lng": -3.654546747933514
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5685",
    "name": "Colegio Nuestra Señora de Loreto - Real Colegio",
    "slug": "colegio-nuestra-senora-de-loreto-real-colegio",
    "type": "private",
    "address": "CALLE O'DONELL 61",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.421352340076155,
      "lng": -3.6695622231675613
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6065",
    "name": "Colegio Nuestra Señora de Loreto. Calle General Aranaz",
    "slug": "colegio-nuestra-senora-de-loreto-calle-general-aranaz",
    "type": "private",
    "address": "CALLE GENERAL ARANAZ 66",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44617791995392,
      "lng": -3.6431701318481298
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5684",
    "name": "Colegio Nuestra Señora de Loreto. Calle Príncipe de Vergara",
    "slug": "colegio-nuestra-senora-de-loreto-calle-principe-de-vergara",
    "type": "private",
    "address": "CALLE PRINCIPE DE VERGARA 42",
    "city": "MADRID",
    "postalCode": "28001",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42808580922879,
      "lng": -3.6797321233510596
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5686",
    "name": "Colegio Nuestra Señora de los Ángeles",
    "slug": "colegio-nuestra-senora-de-los-angeles",
    "type": "private",
    "address": "CALLE LA CANCION DEL OLVIDO 55",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3556811381503,
      "lng": -3.7006375863957017
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5819",
    "name": "Colegio Nuestra Señora de los Dolores",
    "slug": "colegio-nuestra-senora-de-los-dolores",
    "type": "private",
    "address": "CALLE TORDO 15",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.391871924783224,
      "lng": -3.733850672668873
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5664",
    "name": "Colegio Nuestra Señora de Moratalaz",
    "slug": "colegio-nuestra-senora-de-moratalaz",
    "type": "private",
    "address": "AVENIDA MORATALAZ 91",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.406693440256234,
      "lng": -3.6556164457134446
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5665",
    "name": "Colegio Nuestra Señora de Santa María",
    "slug": "colegio-nuestra-senora-de-santa-maria",
    "type": "private",
    "address": "RONDA SOBRADIEL 80",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.453484753588164,
      "lng": -3.6463060794416333
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5687",
    "name": "Colegio Nuestra Señora del Buen Consejo. Calle Ábalos",
    "slug": "colegio-nuestra-senora-del-buen-consejo-calle-abalos",
    "type": "private",
    "address": "CALLE ABALOS 5",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45040061226383,
      "lng": -3.656441972319349
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6031",
    "name": "Colegio Nuestra Señora del Buen Consejo. Calle Juan Montalvo",
    "slug": "colegio-nuestra-senora-del-buen-consejo-calle-juan-montalvo",
    "type": "private",
    "address": "CALLE JUAN MONTALVO 30",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44713112572208,
      "lng": -3.712600329725245
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5688",
    "name": "Colegio Nuestra Señora del Carmen",
    "slug": "colegio-nuestra-senora-del-carmen",
    "type": "private",
    "address": "AVENIDA REAL DE PINTO 41",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.344851398974974,
      "lng": -3.7066835460239296
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6069",
    "name": "Colegio Nuestra Señora del Pilar. Calle Castelló",
    "slug": "colegio-nuestra-senora-del-pilar-calle-castello",
    "type": "private",
    "address": "CALLE CASTELLO 56",
    "city": "MADRID",
    "postalCode": "28001",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42827573973591,
      "lng": -3.6811369239131997
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5410",
    "name": "Colegio Nuestra Señora del Pilar. Calle San Benito",
    "slug": "colegio-nuestra-senora-del-pilar-calle-san-benito",
    "type": "public",
    "address": "CALLE SAN BENITO 6",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46844659522787,
      "lng": -3.6902952378463785
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5697",
    "name": "Colegio Nuestra Señora del Pilar. Calle Sanchez Preciados",
    "slug": "colegio-nuestra-senora-del-pilar-calle-sanchez-preciados",
    "type": "private",
    "address": "CALLE SANCHEZ PRECIADOS 62",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46315899708621,
      "lng": -3.709526040286489
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5698",
    "name": "Colegio Nuestra Señora del Recuerdo",
    "slug": "colegio-nuestra-senora-del-recuerdo",
    "type": "private",
    "address": "PLAZA DUQUE DE PASTRANA 5",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46856646277293,
      "lng": -3.677651132076904
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5357",
    "name": "Colegio Nuestra Señora del Sagrado Corazón",
    "slug": "colegio-nuestra-senora-del-sagrado-corazon",
    "type": "private",
    "address": "CALLE GRANDEZA ESPA&amp;Ntilde;OLA 89",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41012341265274,
      "lng": -3.735404259656213
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5703",
    "name": "Colegio Nueva Castilla",
    "slug": "colegio-nueva-castilla",
    "type": "private",
    "address": "CALLE MAZATERON 12",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.377884040619215,
      "lng": -3.6100552868828117
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5705",
    "name": "Colegio Nuevo Equipo",
    "slug": "colegio-nuevo-equipo",
    "type": "private",
    "address": "CALLE LOPEZ DE ARANDA 5",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44203351082303,
      "lng": -3.639970535645447
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6033",
    "name": "Colegio Nuevo Velázquez",
    "slug": "colegio-nuevo-velazquez",
    "type": "private",
    "address": "CALLE ROSA JARDON 9",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46564164865083,
      "lng": -3.6693884681864777
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5710",
    "name": "Colegio Obispo Perelló",
    "slug": "colegio-obispo-perello",
    "type": "private",
    "address": "CALLE VIRGEN DEL SAGRARIO 22",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.436019042068196,
      "lng": -3.649027441499575
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6071",
    "name": "Colegio Obra Social Nuestra Señora de Montserrat - San Simón y San Judas",
    "slug": "colegio-obra-social-nuestra-senora-de-montserrat-san-simon-y-san-judas",
    "type": "private",
    "address": "CALLE TREVELEZ 3",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.365226576238506,
      "lng": -3.702821115961881
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6037",
    "name": "Colegio Padre Piquer",
    "slug": "colegio-padre-piquer",
    "type": "private",
    "address": "CALLE CAÑAVERAL 96",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4715830569087,
      "lng": -3.691577788342787
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5420",
    "name": "Colegio Paraíso Sagrados Corazones",
    "slug": "colegio-paraiso-sagrados-corazones",
    "type": "private",
    "address": "CALLE PADRE DAMIAN 34",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45725868689584,
      "lng": -3.6855456594432248
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "102994",
    "name": "Colegio Parque Conde de Orgaz",
    "slug": "colegio-parque-conde-de-orgaz",
    "type": "private",
    "address": "CALLE GREGORIO BENITEZ 25",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45021999593895,
      "lng": -3.645319582308303
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "104141",
    "name": "Colegio Patrocinio de María",
    "slug": "colegio-patrocinio-de-maria",
    "type": "private",
    "address": "CALLE UMBRIA 31 TAMBIEN C/ JULIAN HERNANDEZ, 14",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.454718950485265,
      "lng": -3.6479218362657835
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Compensación Educativa"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5730",
    "name": "Colegio Patrocinio de San José",
    "slug": "colegio-patrocinio-de-san-jose",
    "type": "private",
    "address": "CALLE EDGAR NEVILLE 24",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45013907357042,
      "lng": -3.6966077126901413
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "104243",
    "name": "Colegio Pedagogía Waldorf de Aravaca",
    "slug": "colegio-pedagogia-waldorf-de-aravaca",
    "type": "private",
    "address": "CALLE ZENIT 10",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46327554248207,
      "lng": -3.7901583423651743
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "176850",
    "name": "Colegio Público Adolfo Suárez",
    "slug": "colegio-publico-adolfo-suarez",
    "type": "private",
    "address": "CALLE INFANTA CATALINA MICAELA 31",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48860266655876,
      "lng": -3.6525544243312855
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4693138",
    "name": "Colegio Público Agustín Rodriguez Sahagún",
    "slug": "colegio-publico-agustin-rodriguez-sahagun",
    "type": "private",
    "address": "CALLE LA GRANJA DE SAN ILDEFONSO 17",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36803998494376,
      "lng": -3.6221677428793977
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5075",
    "name": "Colegio Público Agustina Díez",
    "slug": "colegio-publico-agustina-diez",
    "type": "private",
    "address": "CALLE VESUBIO 5",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3881909372302,
      "lng": -3.647236724917086
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5076",
    "name": "Colegio Público Alberto Alcocer",
    "slug": "colegio-publico-alberto-alcocer",
    "type": "private",
    "address": "AVENIDA CANILLEJAS A VICALVARO 56",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43333782278732,
      "lng": -3.6120521748962555
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5077",
    "name": "Colegio Público Alcalde de Móstoles",
    "slug": "colegio-publico-alcalde-de-mostoles",
    "type": "private",
    "address": "CALLE ALDEANUEVA DE LA VERA 9",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37983690289588,
      "lng": -3.7764479299262628
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5078",
    "name": "Colegio Público Alfonso X El Sabio",
    "slug": "colegio-publico-alfonso-x-el-sabio",
    "type": "private",
    "address": "CALLE FUENTE DE SAN PEDRO 6",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.403201384467415,
      "lng": -3.6036948781029365
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte -  Horario ampliado - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10770379",
    "name": "Colegio Público Alfredo di Stefano",
    "slug": "colegio-publico-alfredo-di-stefano",
    "type": "private",
    "address": "calle felix candela 4",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43333782278732,
      "lng": -3.6120521748962555
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5079",
    "name": "Colegio Público Alhambra",
    "slug": "colegio-publico-alhambra",
    "type": "private",
    "address": "CALLE RAMON GOMEZ DE LA SERNA 103",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48349348726197,
      "lng": -3.726718327962491
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4690849",
    "name": "Colegio Público Álvaro de Bazan",
    "slug": "colegio-publico-alvaro-de-bazan",
    "type": "private",
    "address": "CALLE ZURICH 10",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42154331046489,
      "lng": -3.607241921623869
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor - Integración prefernete (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5080",
    "name": "Colegio Público Amadeo Vives",
    "slug": "colegio-publico-amadeo-vives",
    "type": "private",
    "address": "CALLE LOS YEBENES 6",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39743593771221,
      "lng": -3.755392529137971
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5081",
    "name": "Colegio Público Amador de los Ríos",
    "slug": "colegio-publico-amador-de-los-rios",
    "type": "private",
    "address": "PASEO MARQUES DE ZAFRA 16",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.426279629183625,
      "lng": -3.6665578263940595
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5083",
    "name": "Colegio Público Amós Acero",
    "slug": "colegio-publico-amos-acero",
    "type": "private",
    "address": "CALLE RODRIGUEZ ESPINOSA 54",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.390223332282275,
      "lng": -3.6637750346593543
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5295314",
    "name": "Colegio Público Angel Nieto",
    "slug": "colegio-publico-angel-nieto",
    "type": "private",
    "address": "AVENIDA LAS SUERTES 109",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36117774761706,
      "lng": -3.587611628781373
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5085",
    "name": "Colegio Público Antonio de Nebrija",
    "slug": "colegio-publico-antonio-de-nebrija",
    "type": "private",
    "address": "CALLE JUAN JOSE MARTINEZ SECO 77",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35186683091612,
      "lng": -3.6861847074521887
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5792171",
    "name": "Colegio Público Antonio Fontan",
    "slug": "colegio-publico-antonio-fontan",
    "type": "private",
    "address": "AVENIDA SANTUARIO DE VALVERDE 71",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.51157829071127,
      "lng": -3.6938180692699696
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5087",
    "name": "Colegio Público Antonio Machado",
    "slug": "colegio-publico-antonio-machado",
    "type": "private",
    "address": "CALLE ALLARIZ 3",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36742548683976,
      "lng": -3.7541975520390944
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora -  Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5088",
    "name": "Colegio Público Antonio Moreno Rosales",
    "slug": "colegio-publico-antonio-moreno-rosales",
    "type": "public",
    "address": "CALLE OLMO 4",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41147059852911,
      "lng": -3.701274799534028
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5091",
    "name": "Colegio Público Aragón",
    "slug": "colegio-publico-aragon",
    "type": "private",
    "address": "AVENIDA RAFAEL ALBERTI 2",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39244393012934,
      "lng": -3.6373799409076795
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5092",
    "name": "Colegio Público Aravaca",
    "slug": "colegio-publico-aravaca",
    "type": "private",
    "address": "CALLE ESTUDIO 6",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.460576198420775,
      "lng": -3.7857037462052063
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (General) - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5093",
    "name": "Colegio Público Arcipreste de Hita",
    "slug": "colegio-publico-arcipreste-de-hita",
    "type": "private",
    "address": "CALLE ANTONIO MORENO 25",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38481599116821,
      "lng": -3.725574252110717
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5094",
    "name": "Colegio Público Arquitecto Gaudí",
    "slug": "colegio-publico-arquitecto-gaudi",
    "type": "private",
    "address": "CALLE ROSA JARDON 10",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46541828100197,
      "lng": -3.669067772820547
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5095",
    "name": "Colegio Público Asturias",
    "slug": "colegio-publico-asturias",
    "type": "private",
    "address": "CALLE ASTURIANOS 2",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38310860341996,
      "lng": -3.6426052252549703
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5431144",
    "name": "Colegio Público Ausias March",
    "slug": "colegio-publico-ausias-march",
    "type": "private",
    "address": "CALLE ESTEFANITA 9",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34439346121857,
      "lng": -3.674746714234173
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5098",
    "name": "Colegio Público Azorín",
    "slug": "colegio-publico-azorin",
    "type": "private",
    "address": "CALLE GODELLA 57",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.342906888165004,
      "lng": -3.6870005154391885
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5099",
    "name": "Colegio Público Barcelona",
    "slug": "colegio-publico-barcelona",
    "type": "private",
    "address": "AVENIDA LA VERBENA DE LA PALOMA 14",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35841023700524,
      "lng": -3.696273094000059
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7635761",
    "name": "Colegio Público Blas de Lezo",
    "slug": "colegio-publico-blas-de-lezo",
    "type": "private",
    "address": "CALLE FROMISTA 27",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.511360317811224,
      "lng": -3.6719996242874196
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5100",
    "name": "Colegio Público Blas de Otero",
    "slug": "colegio-publico-blas-de-otero",
    "type": "private",
    "address": "CALLE PUENTELARRA 34",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38124773778207,
      "lng": -3.6119692564174404
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Planes de mejora - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5101",
    "name": "Colegio Público Bolivia",
    "slug": "colegio-publico-bolivia",
    "type": "private",
    "address": "CALLE VILLAVALIENTE 29",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.407634072188344,
      "lng": -3.7498731428601237
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5102",
    "name": "Colegio Público Bravo Murillo",
    "slug": "colegio-publico-bravo-murillo",
    "type": "private",
    "address": "CALLE ISLAS CIES 11",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48053890145454,
      "lng": -3.718014861516011
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5103",
    "name": "Colegio Público Breogán",
    "slug": "colegio-publico-breogan",
    "type": "private",
    "address": "CALLE GINZO DE LIMIA 2",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47540952287272,
      "lng": -3.7024232948074007
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5104",
    "name": "Colegio Público Calderón de la Barca",
    "slug": "colegio-publico-calderon-de-la-barca",
    "type": "private",
    "address": "CALLE CALDERON 2",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47070810904175,
      "lng": -3.5840209268472183
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5105",
    "name": "Colegio Público Camilo José Cela",
    "slug": "colegio-publico-camilo-jose-cela",
    "type": "private",
    "address": "CALLE MELCHOR FERNANDEZ ALMAGRO 22",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.477564401619375,
      "lng": -3.700652519727763
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5107",
    "name": "Colegio Público Capitán Cortés",
    "slug": "colegio-publico-capitan-cortes",
    "type": "private",
    "address": "CALLE MONSEÑOR OSCAR ROMERO 17",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38091347738878,
      "lng": -3.7428500011276635
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5108",
    "name": "Colegio Público Cardenal Herrera Oria",
    "slug": "colegio-publico-cardenal-herrera-oria",
    "type": "private",
    "address": "CALLE FERMIN CABALLERO 68",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48260881390874,
      "lng": -3.7110758224045726
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5110",
    "name": "Colegio Público Carlos Sáinz de los Terreros",
    "slug": "colegio-publico-carlos-sainz-de-los-terreros",
    "type": "private",
    "address": "CALLE CARTAMA 1",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38481313041185,
      "lng": -3.6390280931999377
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5111",
    "name": "Colegio Público Carlos V",
    "slug": "colegio-publico-carlos-v",
    "type": "private",
    "address": "CALLE VIRGEN DEL VAL 3",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43724098714693,
      "lng": -3.6544038942331123
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5112",
    "name": "Colegio Público Carmen Cabezuelo",
    "slug": "colegio-publico-carmen-cabezuelo",
    "type": "private",
    "address": "CALLE CANGAS DE ONIS 7",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.430112607702604,
      "lng": -3.628834506070179
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5792204",
    "name": "Colegio Público Carmen Laforet",
    "slug": "colegio-publico-carmen-laforet",
    "type": "private",
    "address": "CALLE TITANIO 16",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.400676319677835,
      "lng": -3.598982213500786
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5115",
    "name": "Colegio Público Cervantes",
    "slug": "colegio-publico-cervantes",
    "type": "private",
    "address": "CALLE RAIMUNDO FERNANDEZ VILLAVERDE 4",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.446612640189215,
      "lng": -3.7031139484944826
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5116",
    "name": "Colegio Público Ciudad de Badajoz",
    "slug": "colegio-publico-ciudad-de-badajoz",
    "type": "private",
    "address": "CALLE FRAY JOSE CERDEIRIÑA 51",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38398261095106,
      "lng": -3.7788988980894436
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5117",
    "name": "Colegio Público Ciudad de Córdoba",
    "slug": "colegio-publico-ciudad-de-cordoba",
    "type": "private",
    "address": "CALLE LILLO 1",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.362519348197296,
      "lng": -3.697610896320262
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5118",
    "name": "Colegio Público Ciudad de Guadalajara",
    "slug": "colegio-publico-ciudad-de-guadalajara",
    "type": "private",
    "address": "CALLE BERGANTIN 13",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.458947463149386,
      "lng": -3.5847918554675733
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5120",
    "name": "Colegio Público Ciudad de los Ángeles",
    "slug": "colegio-publico-ciudad-de-los-angeles",
    "type": "private",
    "address": "CALLE LA ALEGRIA DE LA HUERTA 6",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35564559555992,
      "lng": -3.696079786555593
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5121",
    "name": "Colegio Público Ciudad de Roma",
    "slug": "colegio-publico-ciudad-de-roma",
    "type": "private",
    "address": "CALLE JUAN ESPLANDIU 2",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41586394930115,
      "lng": -3.665205626185569
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5122",
    "name": "Colegio Público Ciudad de Valencia",
    "slug": "colegio-publico-ciudad-de-valencia",
    "type": "private",
    "address": "AVENIDA MEDITERRANEO 91",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.385260536182564,
      "lng": -3.604406503967331
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5123",
    "name": "Colegio Público Ciudad de Zaragoza",
    "slug": "colegio-publico-ciudad-de-zaragoza",
    "type": "private",
    "address": "CALLE MANUEL AGUILAR MUÑOZ 1",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.460302151327085,
      "lng": -3.5912198696737083
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5124",
    "name": "Colegio Público Ciudad Pegaso",
    "slug": "colegio-publico-ciudad-pegaso",
    "type": "private",
    "address": "AVENIDA SEPTIMA 12",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44724009402133,
      "lng": -3.5980274884924257
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5125",
    "name": "Colegio Público Claudio Moyano",
    "slug": "colegio-publico-claudio-moyano",
    "type": "private",
    "address": "CALLE CEA BERMUDEZ 26",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43896509232795,
      "lng": -3.708835358862963
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5277",
    "name": "Colegio Público Complejo Escolar Príncipe Felipe",
    "slug": "colegio-publico-complejo-escolar-principe-felipe",
    "type": "private",
    "address": "AVENIDA MONFORTE DE LEMOS 24",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.480219870681125,
      "lng": -3.7010104732977656
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5127",
    "name": "Colegio Público Concepción Arenal",
    "slug": "colegio-publico-concepcion-arenal",
    "type": "private",
    "address": "CALLE ANTONIO LOPEZ 1",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.397503508835996,
      "lng": -3.7150109370450957
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5128",
    "name": "Colegio Público Concha Espina",
    "slug": "colegio-publico-concha-espina",
    "type": "private",
    "address": "CALLE GERARDO DIEGO 6",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38577682775334,
      "lng": -3.643950119182148
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5129",
    "name": "Colegio Público Conde de Romanones",
    "slug": "colegio-publico-conde-de-romanones",
    "type": "private",
    "address": "CALLE ELFO 143",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43747986110289,
      "lng": -3.6423326381692056
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6149062",
    "name": "Colegio Público Cortes de Cádiz",
    "slug": "colegio-publico-cortes-de-cadiz",
    "type": "private",
    "address": "AVENIDA NICETO ALCALA ZAMORA 48",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49893432860617,
      "lng": -3.656017907963137
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5131",
    "name": "Colegio Público Costa Rica",
    "slug": "colegio-publico-costa-rica",
    "type": "private",
    "address": "CALLE CAMARENA 247",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38550403353863,
      "lng": -3.755989664410327
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5132",
    "name": "Colegio Público Cristóbal Colón",
    "slug": "colegio-publico-cristobal-colon",
    "type": "private",
    "address": "CARRETERA CARABANCHEL A VILLAVERDE 109",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35035079998796,
      "lng": -3.706057974681441
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Horario ampliado - Planes de mejora - Integración preferente (trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5133",
    "name": "Colegio Público Cuba",
    "slug": "colegio-publico-cuba",
    "type": "private",
    "address": "CALLE TEMBLEQUE 58",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39509014363514,
      "lng": -3.761411071256881
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Transporte - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5134",
    "name": "Colegio Público Dámaso Alonso",
    "slug": "colegio-publico-damaso-alonso",
    "type": "private",
    "address": "AVENIDA ESPINELA 1",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34604471386465,
      "lng": -3.7089567302070083
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Transporte - Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5135",
    "name": "Colegio Público Daniel Vázquez Díaz",
    "slug": "colegio-publico-daniel-vazquez-diaz",
    "type": "private",
    "address": "CALLE ARMENTEROS 46",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.464777111936684,
      "lng": -3.7130226942453906
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5387470",
    "name": "Colegio Público de Educación Especial Cátedra de Pediatría Hospital Clínico",
    "slug": "colegio-publico-de-educacion-especial-catedra-de-pediatria-hospital-clinico",
    "type": "private",
    "address": "CALLE PROFESOR MARTIN LAGOS 2",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43969162044758,
      "lng": -3.7195609709099218
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6729",
    "name": "Colegio Público de Educación Especial Francisco del Pozo",
    "slug": "colegio-publico-de-educacion-especial-francisco-del-pozo",
    "type": "private",
    "address": "CALLEJON DOMINE 6",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49435246094298,
      "lng": -3.6864068730715593
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6722",
    "name": "Colegio Público de Educación Especial Fray Pedro Ponce de León",
    "slug": "colegio-publico-de-educacion-especial-fray-pedro-ponce-de-leon",
    "type": "private",
    "address": "CALLE LOS YEBENES 76",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39376825198818,
      "lng": -3.7527828631948985
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6727",
    "name": "Colegio Público de Educación Especial Fundación Goyeneche",
    "slug": "colegio-publico-de-educacion-especial-fundacion-goyeneche",
    "type": "private",
    "address": "CALLE ARCOS DE JALON 22",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.420974388816376,
      "lng": -3.6210638106643493
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5387554",
    "name": "Colegio Público de Educación Especial Hospital del Niño Jesús",
    "slug": "colegio-publico-de-educacion-especial-hospital-del-nino-jesus",
    "type": "private",
    "address": "AVENIDA MENENDEZ PELAYO 65",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.413858634560945,
      "lng": -3.6769841290878675
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5387907",
    "name": "Colegio Público de Educación Especial Hospital Gregorio Marañón",
    "slug": "colegio-publico-de-educacion-especial-hospital-gregorio-maranon",
    "type": "private",
    "address": "CALLE O'Donnell 50",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42109995172939,
      "lng": -3.6711392764494044
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6728",
    "name": "Colegio Público de Educación Especial Infanta Elena",
    "slug": "colegio-publico-de-educacion-especial-infanta-elena",
    "type": "private",
    "address": "AVENIDA BADAJOZ 76",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.443607805693325,
      "lng": -3.650067343924694
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6723",
    "name": "Colegio Público de Educación Especial Inmaculada Concepción",
    "slug": "colegio-publico-de-educacion-especial-inmaculada-concepcion",
    "type": "private",
    "address": "CALLE SALDAÑA 30",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.390038391793176,
      "lng": -3.7260308959918866
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6724",
    "name": "Colegio Público de Educación Especial Joan Miró",
    "slug": "colegio-publico-de-educacion-especial-joan-miro",
    "type": "private",
    "address": "AVENIDA POBLADOS 183",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.371037409735024,
      "lng": -3.6968741960423133
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6731",
    "name": "Colegio Público de Educación Especial María Soriano",
    "slug": "colegio-publico-de-educacion-especial-maria-soriano",
    "type": "private",
    "address": "AVENIDA PESETA 30",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36290495205625,
      "lng": -3.762132345064474
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Residencia"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6726",
    "name": "Colegio Público de Educación Especial Princesa Sofía",
    "slug": "colegio-publico-de-educacion-especial-princesa-sofia",
    "type": "private",
    "address": "CARRETERA CANILLAS 51",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.463960024859325,
      "lng": -3.6450854077538772
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6725",
    "name": "Colegio Público de Educación Especial Vallecas",
    "slug": "colegio-publico-de-educacion-especial-vallecas",
    "type": "private",
    "address": "CARRETERA VALENCIA (Recinto Universitario) 7",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39115939800559,
      "lng": -3.6251375733473195
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5096",
    "name": "Colegio Público de Prácticas Asunción Rincón",
    "slug": "colegio-publico-de-practicas-asuncion-rincon",
    "type": "private",
    "address": "AVENIDA FILIPINAS 5",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43991596115193,
      "lng": -3.7109677259909084
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5136",
    "name": "Colegio Público Dionisio Ridruejo",
    "slug": "colegio-publico-dionisio-ridruejo",
    "type": "private",
    "address": "CALLE ZIPAQUIRA 14",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47301835441678,
      "lng": -3.6345431561438026
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5137",
    "name": "Colegio Público Doctor Conde Arruga",
    "slug": "colegio-publico-doctor-conde-arruga",
    "type": "private",
    "address": "CALLE HACIENDA DE PAVONES 105",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40382410472334,
      "lng": -3.643579973780007
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5138",
    "name": "Colegio Público Doctor Federico Rubio",
    "slug": "colegio-publico-doctor-federico-rubio",
    "type": "private",
    "address": "AVENIDA DOCTOR FEDERICO RUBIO Y GALI 53",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45242712056568,
      "lng": -3.7113472292938066
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5140",
    "name": "Colegio Público Doctor Severo Ochoa",
    "slug": "colegio-publico-doctor-severo-ochoa",
    "type": "private",
    "address": "CALLE EZCARAY 3",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.410311030784285,
      "lng": -3.6136821061928113
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5141",
    "name": "Colegio Público Doctor Tolosa Latour",
    "slug": "colegio-publico-doctor-tolosa-latour",
    "type": "private",
    "address": "CALLE ASTURIANOS 4",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38200381255466,
      "lng": -3.642005680937447
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6024",
    "name": "Colegio Público Eduardo Rojo",
    "slug": "colegio-publico-eduardo-rojo",
    "type": "private",
    "address": "CALLE EDUARDO ROJO 5",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38742706684719,
      "lng": -3.6628050333334046
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Integración preferente (Trastornos generales del desarrollo) - Enseñanza biling&amp;uuml;e"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5144",
    "name": "Colegio Público EEUU - Huarte de San Juan",
    "slug": "colegio-publico-eeuu-huarte-de-san-juan",
    "type": "private",
    "address": "PASEO COMANDANTE FORTEA 71",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42870179468233,
      "lng": -3.733708557423035
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Planes de mejora- Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "42014",
    "name": "Colegio Público El Espinillo",
    "slug": "colegio-publico-el-espinillo",
    "type": "private",
    "address": "CALLE UNANIMIDAD 1",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36157241219842,
      "lng": -3.6932788501569522
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "176810",
    "name": "Colegio Público El Greco",
    "slug": "colegio-publico-el-greco",
    "type": "private",
    "address": "CALLE ESTEFANITA 7",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.345482201202394,
      "lng": -3.674981279643457
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5220",
    "name": "Colegio Público El Madroño",
    "slug": "colegio-publico-el-madrono",
    "type": "private",
    "address": "CALLE LAS MARISMAS 14",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.402204300135466,
      "lng": -3.654488722948694
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5339",
    "name": "Colegio Público El Quijote",
    "slug": "colegio-publico-el-quijote",
    "type": "private",
    "address": "CALLE FUENTIDUEÑA 4",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.374905112512465,
      "lng": -3.6238093612915145
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte -  Horario ampliado - Planes de mejora - Convenio con British Council"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "64474",
    "name": "Colegio Público El Sol",
    "slug": "colegio-publico-el-sol",
    "type": "private",
    "address": "AVENIDA CANILLEJAS A VICALVARO 82",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.423997382335585,
      "lng": -3.611684586484881
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario Ampliado - Integración preferente: Audtitivos- Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5145",
    "name": "Colegio Público Emilia Pardo Bazán",
    "slug": "colegio-publico-emilia-pardo-bazan",
    "type": "private",
    "address": "CALLE VENTORRILLO 14",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40677803487061,
      "lng": -3.705527696367566
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5148",
    "name": "Colegio Público Ermita del Santo",
    "slug": "colegio-publico-ermita-del-santo",
    "type": "private",
    "address": "PASEO ERMITA DEL SANTO 18",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41091984789517,
      "lng": -3.7234030687601254
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5149",
    "name": "Colegio Público Escuelas Aguirre",
    "slug": "colegio-publico-escuelas-aguirre",
    "type": "private",
    "address": "CALLE PIO BAROJA 4",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41454970248996,
      "lng": -3.674350860475647
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Integración (preferentemente auditivos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5150",
    "name": "Colegio Público Escuelas Bosque",
    "slug": "colegio-publico-escuelas-bosque",
    "type": "private",
    "address": "AVENIDA SANTO ANGEL DE LA GUARDA 4",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45898733981378,
      "lng": -3.712536881730324
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Integración (preferentemente motóricos) - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5245",
    "name": "Colegio Público Esperanza",
    "slug": "colegio-publico-esperanza",
    "type": "private",
    "address": "CALLE ANDORRA 12",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46144263379954,
      "lng": -3.6457808079102354
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5152",
    "name": "Colegio Público Eugenio María de Hostos",
    "slug": "colegio-publico-eugenio-maria-de-hostos",
    "type": "private",
    "address": "CALLE VALDEVARNES 26",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.469162084516505,
      "lng": -3.7177757178062834
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5155",
    "name": "Colegio Público Felipe II",
    "slug": "colegio-publico-felipe-ii",
    "type": "private",
    "address": "AVENIDA ASTURIAS 70",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47290570166502,
      "lng": -3.699341838889918
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5156",
    "name": "Colegio Público Fernández de Moratín",
    "slug": "colegio-publico-fernandez-de-moratin",
    "type": "private",
    "address": "AVENIDA VALLADOLID 2",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42673321856838,
      "lng": -3.7273094844478685
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5158",
    "name": "Colegio Público Fernando el Católico",
    "slug": "colegio-publico-fernando-el-catolico",
    "type": "private",
    "address": "CALLE FERNANDO EL CATOLICO 16",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.434103689530446,
      "lng": -3.7097392943348284
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5159",
    "name": "Colegio Público Filósofo Séneca",
    "slug": "colegio-publico-filosofo-seneca",
    "type": "private",
    "address": "CALLE SANTA ADELA 21",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.478381551999256,
      "lng": -3.6502374703975162
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5160",
    "name": "Colegio Público Fontarrón",
    "slug": "colegio-publico-fontarron",
    "type": "private",
    "address": "CALLE ARROYO FONTARRON 24",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39511351284605,
      "lng": -3.6335755702199677
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Integración (preferentemente motóricos) - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5161",
    "name": "Colegio Público Francisco Arranz",
    "slug": "colegio-publico-francisco-arranz",
    "type": "private",
    "address": "CALLE SONDICA 2",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37492895164089,
      "lng": -3.762609414778231
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5162",
    "name": "Colegio Público Francisco de Goya",
    "slug": "colegio-publico-francisco-de-goya",
    "type": "private",
    "address": "CALLE ANTILLON 23",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.411189612846165,
      "lng": -3.727790340862767
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5163",
    "name": "Colegio Público Francisco de Luis",
    "slug": "colegio-publico-francisco-de-luis",
    "type": "private",
    "address": "CALLE CORREGIDOR RODRIGO RODRIGUEZ 5",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40883801642817,
      "lng": -3.660292565776491
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5164",
    "name": "Colegio Público Francisco de Quevedo",
    "slug": "colegio-publico-francisco-de-quevedo",
    "type": "private",
    "address": "CALLE GRANADA 16",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.404727692050116,
      "lng": -3.679332106624429
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5165",
    "name": "Colegio Público Francisco Fatóu",
    "slug": "colegio-publico-francisco-fatou",
    "type": "private",
    "address": "CAMINO SUERTE 23",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37597903288599,
      "lng": -3.6184358604020184
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte -  Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5166",
    "name": "Colegio Público Francisco Ruano",
    "slug": "colegio-publico-francisco-ruano",
    "type": "private",
    "address": "CALLE ALMURADIEL 150",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.380085637390486,
      "lng": -3.673547648504667
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5167",
    "name": "Colegio Público Fray Junípero Serra",
    "slug": "colegio-publico-fray-junipero-serra",
    "type": "private",
    "address": "CAMINO VALDERRIBAS 120",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.395309545329106,
      "lng": -3.658157243926342
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "176824",
    "name": "Colegio Público Gabriela Mistral",
    "slug": "colegio-publico-gabriela-mistral",
    "type": "private",
    "address": "CALLE MIRALLOS 3",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50774206131332,
      "lng": -3.6675525270094127
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5082",
    "name": "Colegio Público Gandhi",
    "slug": "colegio-publico-gandhi",
    "type": "private",
    "address": "CALLE GANDHI 10",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.423746261606965,
      "lng": -3.6365082780370956
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5168",
    "name": "Colegio Público García Morente",
    "slug": "colegio-publico-garcia-morente",
    "type": "private",
    "address": "RONDA SUR 229",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37336648575158,
      "lng": -3.665482524950977
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5169",
    "name": "Colegio Público Garcilaso de la Vega",
    "slug": "colegio-publico-garcilaso-de-la-vega",
    "type": "private",
    "address": "CALLE TREFACIO 18",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46699372886275,
      "lng": -3.634108987557183
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5171",
    "name": "Colegio Público Giner de los Ríos",
    "slug": "colegio-publico-giner-de-los-rios",
    "type": "private",
    "address": "CALLE MEMBEZAR 25",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.379529471156005,
      "lng": -3.6684765035279683
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5172",
    "name": "Colegio Público Gloria Fuertes",
    "slug": "colegio-publico-gloria-fuertes",
    "type": "private",
    "address": "CALLE CENSO 3",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.369311628795366,
      "lng": -3.7051368370067617
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5173",
    "name": "Colegio Público Gonzalo de Berceo",
    "slug": "colegio-publico-gonzalo-de-berceo",
    "type": "private",
    "address": "AVENIDA ABRANTES 5",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38471221481113,
      "lng": -3.722003386269505
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5174",
    "name": "Colegio Público Gonzalo Fernández de Córdoba",
    "slug": "colegio-publico-gonzalo-fernandez-de-cordoba",
    "type": "private",
    "address": "CALLE ADANERO 3",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39414213700213,
      "lng": -3.7792987452696023
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5176",
    "name": "Colegio Público Guindalera",
    "slug": "colegio-publico-guindalera",
    "type": "private",
    "address": "CALLE BOSTON 3",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.437285997697046,
      "lng": -3.6670202290755864
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5177",
    "name": "Colegio Público Gustavo Adolfo Bécquer",
    "slug": "colegio-publico-gustavo-adolfo-becquer",
    "type": "private",
    "address": "CALLE SANTA GENOVEVA 32",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42401892228641,
      "lng": -3.6490417567786837
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Transporte - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5178",
    "name": "Colegio Público Haití",
    "slug": "colegio-publico-haiti",
    "type": "private",
    "address": "CALLE GUABAIRO 22",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38607118178492,
      "lng": -3.7463468868792895
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5179",
    "name": "Colegio Público Hermanos Pinzón",
    "slug": "colegio-publico-hermanos-pinzon",
    "type": "private",
    "address": "CALLE AZOR 4",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.398581785882875,
      "lng": -3.7688034732056224
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5180",
    "name": "Colegio Público Hernán Cortés",
    "slug": "colegio-publico-hernan-cortes",
    "type": "private",
    "address": "CALLE LOS YEBENES 241",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.391183407465824,
      "lng": -3.7512812696024738
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Integración (preferentemente auditivos) - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5182",
    "name": "Colegio Público Honduras",
    "slug": "colegio-publico-honduras",
    "type": "private",
    "address": "PASEO FEDERICO GARCIA LORCA 19",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.377750319496414,
      "lng": -3.6207727531375826
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "31747",
    "name": "Colegio Público Hortaleza",
    "slug": "colegio-publico-hortaleza",
    "type": "private",
    "address": "CALLE VALDETORRES DE JARAMA 1",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47244065719513,
      "lng": -3.647738240999276
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Residencia"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5183",
    "name": "Colegio Público Ignacio Zuloaga",
    "slug": "colegio-publico-ignacio-zuloaga",
    "type": "private",
    "address": "CALLE ALEJANDRO RODRIGUEZ 34",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.456254963753004,
      "lng": -3.711505537451778
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "176840",
    "name": "Colegio Público Infanta Leonor",
    "slug": "colegio-publico-infanta-leonor",
    "type": "private",
    "address": "CALLE MONASTERIO DE EL PAULAR 140",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.499669521430285,
      "lng": -3.7114329556023478
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5184",
    "name": "Colegio Público Isaac Albéniz",
    "slug": "colegio-publico-isaac-albeniz",
    "type": "private",
    "address": "CALLE DRACENA 29",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46422875441015,
      "lng": -3.6691267410574406
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5185",
    "name": "Colegio Público Isaac Peral",
    "slug": "colegio-publico-isaac-peral",
    "type": "private",
    "address": "GLORIETA RUFINO NOVALVOS 5",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38629580500656,
      "lng": -3.7309272123026656
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5186",
    "name": "Colegio Público Isabel la Católica",
    "slug": "colegio-publico-isabel-la-catolica",
    "type": "private",
    "address": "CALLE BARCELO 2",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.426642215368176,
      "lng": -3.699722994908341
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5190",
    "name": "Colegio Público Jaime Balmes",
    "slug": "colegio-publico-jaime-balmes",
    "type": "private",
    "address": "CALLE SIERRA DE LA SOLANA 2",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3879037093727,
      "lng": -3.6707625153722523
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Integración (preferentemente auditivos) - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5191",
    "name": "Colegio Público Jaime Vera",
    "slug": "colegio-publico-jaime-vera",
    "type": "private",
    "address": "CALLE BRAVO MURILLO 162",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45247841346628,
      "lng": -3.702962807620527
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5192",
    "name": "Colegio Público Javier de Miguel",
    "slug": "colegio-publico-javier-de-miguel",
    "type": "private",
    "address": "CALLE JAVIER DE MIGUEL 90",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38617971853788,
      "lng": -3.657208307609012
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor  - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5193",
    "name": "Colegio Público Joaquín Costa",
    "slug": "colegio-publico-joaquin-costa",
    "type": "private",
    "address": "PASEO PONTONES 8",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40555135378083,
      "lng": -3.7145657673590473
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5194",
    "name": "Colegio Público Joaquín Dicenta",
    "slug": "colegio-publico-joaquin-dicenta",
    "type": "private",
    "address": "PASEO OLIVOS 70",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40563593391012,
      "lng": -3.7383841619985705
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6025",
    "name": "Colegio Público Joaquín Turina",
    "slug": "colegio-publico-joaquin-turina",
    "type": "private",
    "address": "CALLE ARTURO SORIA 332",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.480641242461274,
      "lng": -3.66632834447267
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5195",
    "name": "Colegio Público Jorge Guillén",
    "slug": "colegio-publico-jorge-guillen",
    "type": "private",
    "address": "AVENIDA EL FERROL 47",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47531422517472,
      "lng": -3.7077074438048214
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Integración preferente (motóricos) - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5196",
    "name": "Colegio Público Jorge Manrique",
    "slug": "colegio-publico-jorge-manrique",
    "type": "private",
    "address": "PLAZA PINTOR LUCAS 17",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38810858515369,
      "lng": -3.710375518289677
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5197",
    "name": "Colegio Público José Bergamín",
    "slug": "colegio-publico-jose-bergamin",
    "type": "private",
    "address": "CALLE BRAILLE 19",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.495510999757265,
      "lng": -3.6960480794830053
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5198",
    "name": "Colegio Público José Calvo Sotelo",
    "slug": "colegio-publico-jose-calvo-sotelo",
    "type": "private",
    "address": "AVENIDA CIUDAD DE BARCELONA 83",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4008413126834,
      "lng": -3.6737662524006756
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6518289",
    "name": "Colegio Público José de Echegaray",
    "slug": "colegio-publico-jose-de-echegaray",
    "type": "private",
    "address": "CALLE PUENTEDEY 14",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.368261154491805,
      "lng": -3.614501949365195
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5200",
    "name": "Colegio Público José María de Pereda",
    "slug": "colegio-publico-jose-maria-de-pereda",
    "type": "private",
    "address": "CALLE MESTANZA 94",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.381834618749636,
      "lng": -3.6748845263872902
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5201",
    "name": "Colegio Público José Ortega y Gasset",
    "slug": "colegio-publico-jose-ortega-y-gasset",
    "type": "private",
    "address": "CALLE ORENSE 87",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.461603417432755,
      "lng": -3.6942000296394557
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5430866",
    "name": "Colegio Público Josep Tarradellas",
    "slug": "colegio-publico-josep-tarradellas",
    "type": "private",
    "address": "CALLE TRIACASTELA 1",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50973426099199,
      "lng": -3.670452271301756
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5202",
    "name": "Colegio Público Jovellanos",
    "slug": "colegio-publico-jovellanos",
    "type": "private",
    "address": "CALLE MONROY 34",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.379270096494,
      "lng": -3.783014879023733
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5203",
    "name": "Colegio Público Juan de la Cierva",
    "slug": "colegio-publico-juan-de-la-cierva",
    "type": "private",
    "address": "CALLE VILLARROSA 7",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.354436009188994,
      "lng": -3.690461923731924
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5204",
    "name": "Colegio Público Juan Gris",
    "slug": "colegio-publico-juan-gris",
    "type": "private",
    "address": "CALLE MUELA DE SAN JUAN 31",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.372633463040025,
      "lng": -3.6173451376298167
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5205",
    "name": "Colegio Público Juan Ramón Jiménez",
    "slug": "colegio-publico-juan-ramon-jimenez",
    "type": "private",
    "address": "CALLE MARQUES DE VIANA 58",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46327856245691,
      "lng": -3.7032287227178435
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5206",
    "name": "Colegio Público Juan Sebastián Elcano",
    "slug": "colegio-publico-juan-sebastian-elcano",
    "type": "private",
    "address": "CALLE MIRASIERRA 29",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38904382319174,
      "lng": -3.704765272620041
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5207",
    "name": "Colegio Público Juan Zaragüeta",
    "slug": "colegio-publico-juan-zaragueta",
    "type": "private",
    "address": "CALLE VIA DE LOS POBLADOS 19",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47210978701385,
      "lng": -3.631007402473766
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Horario ampliado - Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5208",
    "name": "Colegio Público Julián Besteiro",
    "slug": "colegio-publico-julian-besteiro",
    "type": "private",
    "address": "AVENIDA ABRANTES 79",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38059274136839,
      "lng": -3.7281206806824976
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "176859",
    "name": "Colegio Público Julián Marías",
    "slug": "colegio-publico-julian-marias",
    "type": "private",
    "address": "CALLE BUDAPEST 11",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42714432750662,
      "lng": -3.6025767698118516
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5153",
    "name": "Colegio Público La Alameda",
    "slug": "colegio-publico-la-alameda",
    "type": "private",
    "address": "CALLE MUSAS 9",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43753723503757,
      "lng": -3.6084115811852313
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6023",
    "name": "Colegio Público La Dehesa del Príncipe",
    "slug": "colegio-publico-la-dehesa-del-principe",
    "type": "private",
    "address": "PASEO LANCEROS 4",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37977209501616,
      "lng": -3.7939529685128695
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5210",
    "name": "Colegio Público La Latina",
    "slug": "colegio-publico-la-latina",
    "type": "private",
    "address": "CALLE MAQUEDA 130",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.388887867589375,
      "lng": -3.7620245761086015
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5294",
    "name": "Colegio Público La Rioja",
    "slug": "colegio-publico-la-rioja",
    "type": "private",
    "address": "CALLE LEON FELIPE 3",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38815189100471,
      "lng": -3.6369932095993964
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5211",
    "name": "Colegio Público Legado Crespo",
    "slug": "colegio-publico-legado-crespo",
    "type": "private",
    "address": "PASEO ACACIAS 2",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.404805864280796,
      "lng": -3.7039161461158803
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5212",
    "name": "Colegio Público Leopoldo Alas",
    "slug": "colegio-publico-leopoldo-alas",
    "type": "private",
    "address": "CALLE PEDREZUELA 18",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42824645764569,
      "lng": -3.6534325307123314
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4974266",
    "name": "Colegio Público Leopoldo Calvo Sotelo",
    "slug": "colegio-publico-leopoldo-calvo-sotelo",
    "type": "private",
    "address": "CALLE CASTIELLO DE JACA 2",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50083316755261,
      "lng": -3.675143321637599
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5213",
    "name": "Colegio Público Lepanto",
    "slug": "colegio-publico-lepanto",
    "type": "private",
    "address": "CALLE VALDERREY 9",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46843902268448,
      "lng": -3.7210473028721722
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5214",
    "name": "Colegio Público Lope de Vega",
    "slug": "colegio-publico-lope-de-vega",
    "type": "private",
    "address": "CALLE INGLATERRA 8",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39460546257796,
      "lng": -3.7232402248952865
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5215",
    "name": "Colegio Público Lorenzo Luzuriaga",
    "slug": "colegio-publico-lorenzo-luzuriaga",
    "type": "private",
    "address": "CALLE VALENCIA DE DON JUAN 13",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48664862656937,
      "lng": -3.7016083209102453
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "64457",
    "name": "Colegio Público Los Almendros",
    "slug": "colegio-publico-los-almendros",
    "type": "private",
    "address": "CALLE LADERA DE LOS ALMENDROS 45",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39629114218003,
      "lng": -3.625774203881319
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5296",
    "name": "Colegio Público Los Rosales",
    "slug": "colegio-publico-los-rosales",
    "type": "private",
    "address": "AVENIDA LOS ROSALES 131",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35175390495651,
      "lng": -3.677834634453844
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4974277",
    "name": "Colegio Público Loyola de Palacio",
    "slug": "colegio-publico-loyola-de-palacio",
    "type": "private",
    "address": "CALLE EMBALSE DE NAVACERRADA 60",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36064250120841,
      "lng": -3.5984510871197415
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5216",
    "name": "Colegio Público Luis Bello",
    "slug": "colegio-publico-luis-bello",
    "type": "private",
    "address": "CALLE LUIS CABRERA 66",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44368060148635,
      "lng": -3.6735452726272593
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5217",
    "name": "Colegio Público Luis Cernuda",
    "slug": "colegio-publico-luis-cernuda",
    "type": "private",
    "address": "CALLE CARRIL DEL CONDE 64",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46131540437997,
      "lng": -3.6539887453598747
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5218",
    "name": "Colegio Público Luis de Góngora",
    "slug": "colegio-publico-luis-de-gongora",
    "type": "private",
    "address": "CALLE SARRIA 49",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47459730345878,
      "lng": -3.714412445984112
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "42017",
    "name": "Colegio Público Madrid Sur",
    "slug": "colegio-publico-madrid-sur",
    "type": "private",
    "address": "CALLE PUERTO DE BALBARAN 133",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37657755418934,
      "lng": -3.6553480036748622
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5792191",
    "name": "Colegio Público Maestro Padilla",
    "slug": "colegio-publico-maestro-padilla",
    "type": "private",
    "address": "AVENIDA PESETA 112",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3626409159049,
      "lng": -3.747372159760245
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5221",
    "name": "Colegio Público Manuel Bartolomé Cossío",
    "slug": "colegio-publico-manuel-bartolome-cossio",
    "type": "private",
    "address": "CALLE JOSE DE CADALSO 19",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38135498597348,
      "lng": -3.7717294965452615
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5222",
    "name": "Colegio Público Manuel de Falla",
    "slug": "colegio-publico-manuel-de-falla",
    "type": "private",
    "address": "CALLE JOSE ORTU&amp;Ntilde;O PONCE 2",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34625498819677,
      "lng": -3.705508952749143
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5223",
    "name": "Colegio Público Manuel Núñez de Arenas",
    "slug": "colegio-publico-manuel-nunez-de-arenas",
    "type": "private",
    "address": "CALLE MARTOS 120",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37525283072323,
      "lng": -3.661743346960403
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5224",
    "name": "Colegio Público Manuel Sáinz de Vicuña",
    "slug": "colegio-publico-manuel-sainz-de-vicuna",
    "type": "private",
    "address": "CALLE CAMINO DE LOS VINATEROS 104",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4094369606419,
      "lng": -3.6499859326517705
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5226",
    "name": "Colegio Público Marcelo Usera",
    "slug": "colegio-publico-marcelo-usera",
    "type": "private",
    "address": "CALLE PERALES DE TAJUÑA 1",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3871562007155,
      "lng": -3.699608733660164
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7048498",
    "name": "Colegio Público Margaret Thatcher",
    "slug": "colegio-publico-margaret-thatcher",
    "type": "private",
    "address": "GLORIETA PLAYA DE SAN LORENZO 4",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47047719759706,
      "lng": -3.5904597549954724
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11121459",
    "name": "Colegio Público María de Villota",
    "slug": "colegio-publico-maria-de-villota",
    "type": "private",
    "address": "CALLE CA&amp;Ntilde;ADA DEL SANTISIMO 23",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3672228027688,
      "lng": -3.596271400061752
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5209",
    "name": "Colegio Público María Moliner",
    "slug": "colegio-publico-maria-moliner",
    "type": "private",
    "address": "CALLE ARCOS DE JALON 34",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42217402076163,
      "lng": -3.619118046203692
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5228",
    "name": "Colegio Público Mariano José de Larra",
    "slug": "colegio-publico-mariano-jose-de-larra",
    "type": "private",
    "address": "CALLE LONGARES 11",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43061532814977,
      "lng": -3.6089740337850564
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5230",
    "name": "Colegio Público Marqués de Marcenado",
    "slug": "colegio-publico-marques-de-marcenado",
    "type": "private",
    "address": "CALLE LINNEO 31",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.410370492110424,
      "lng": -3.72048608485198
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5231",
    "name": "Colegio Público Marqués de Suanzes",
    "slug": "colegio-publico-marques-de-suanzes",
    "type": "private",
    "address": "AVENIDA VEINTICINCO DE SEPTIEMBRE 1",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44309078731439,
      "lng": -3.6245571705517694
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Integracion preferente (motóricos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5232",
    "name": "Colegio Público Martínez Montañés",
    "slug": "colegio-publico-martinez-montanes",
    "type": "private",
    "address": "CALLE HACIENDA DE PAVONES 223",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40191354205018,
      "lng": -3.6339103602187524
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5233",
    "name": "Colegio Público Méjico (México)",
    "slug": "colegio-publico-mejico-mexico",
    "type": "private",
    "address": "AVENIDA BADAJOZ 74",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44348651514203,
      "lng": -3.650809049182787
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Integración preferente (motóricos) - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5234",
    "name": "Colegio Público Méndez Núñez",
    "slug": "colegio-publico-mendez-nunez",
    "type": "private",
    "address": "CALLE ALICUN 9",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47897694855767,
      "lng": -3.659634305967847
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5235",
    "name": "Colegio Público Menéndez Pelayo",
    "slug": "colegio-publico-menendez-pelayo",
    "type": "private",
    "address": "CALLE MENDEZ ALVARO 16",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40557510310644,
      "lng": -3.691396695437019
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora -Integración preferente (auditivos)."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5236",
    "name": "Colegio Público Menéndez Pidal",
    "slug": "colegio-publico-menendez-pidal",
    "type": "private",
    "address": "CALLE ENCOMIENDA DE PALACIOS 85",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.400540243883796,
      "lng": -3.6411565174428118
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Integración preferente (Tratornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5237",
    "name": "Colegio Público Meseta de Orcasitas",
    "slug": "colegio-publico-meseta-de-orcasitas",
    "type": "private",
    "address": "CALLE CAMINO VIEJO DE VILLAVERDE 1",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37194535398157,
      "lng": -3.7105237988872513
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5238",
    "name": "Colegio Público Mesonero Romanos",
    "slug": "colegio-publico-mesonero-romanos",
    "type": "private",
    "address": "CALLE PONT DE MOLINS 31",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39368443066321,
      "lng": -3.644378931194483
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5239",
    "name": "Colegio Público Miguel Blasco Vilatela",
    "slug": "colegio-publico-miguel-blasco-vilatela",
    "type": "private",
    "address": "CALLE HERMANOS GARCIA NOBLEJAS 70",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42934657144525,
      "lng": -3.6321872882400443
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5240",
    "name": "Colegio Público Miguel de Unamuno",
    "slug": "colegio-publico-miguel-de-unamuno",
    "type": "private",
    "address": "CALLE ALICANTE 5",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39428331181165,
      "lng": -3.6934728308868783
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5242",
    "name": "Colegio Público Miguel Servet",
    "slug": "colegio-publico-miguel-servet",
    "type": "private",
    "address": "CALLE FRAGATA 33",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39409637138602,
      "lng": -3.736808786537968
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Integración - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5243",
    "name": "Colegio Público Mirasierra",
    "slug": "colegio-publico-mirasierra",
    "type": "private",
    "address": "CALLE LA MASO 22",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49113903549112,
      "lng": -3.7141984471966625
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5157",
    "name": "Colegio Público Monte de El Pardo",
    "slug": "colegio-publico-monte-de-el-pardo",
    "type": "private",
    "address": "AVENIDA GUARDIA 19",
    "city": "MADRID",
    "postalCode": "28048",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.51715726859882,
      "lng": -3.774264310704681
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5244",
    "name": "Colegio Público Navas de Tolosa",
    "slug": "colegio-publico-navas-de-tolosa",
    "type": "private",
    "address": "CALLE BENIMAMET 109",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.344340447262475,
      "lng": -3.685296004324213
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5247",
    "name": "Colegio Público Nuestra Señora de la Almudena",
    "slug": "colegio-publico-nuestra-senora-de-la-almudena",
    "type": "private",
    "address": "CALLE LOPE DE RUEDA 48",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.419015614377635,
      "lng": -3.6778727223264904
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5248",
    "name": "Colegio Público Nuestra Señora de la Concepción",
    "slug": "colegio-publico-nuestra-senora-de-la-concepcion",
    "type": "private",
    "address": "CALLE VIRGEN DEL SAGRARIO 24",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43714842135485,
      "lng": -3.6500522880397286
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5249",
    "name": "Colegio Público Nuestra Señora de la Fuencisla",
    "slug": "colegio-publico-nuestra-senora-de-la-fuencisla",
    "type": "private",
    "address": "CALLE TOMELLOSO 39",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.380200366406136,
      "lng": -3.698252688578992
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5250",
    "name": "Colegio Público Nuestra Señora de la Luz",
    "slug": "colegio-publico-nuestra-senora-de-la-luz",
    "type": "private",
    "address": "CALLE MAGNESIA 9",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34365972711248,
      "lng": -3.705611429857769
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Horario ampliado - Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5251",
    "name": "Colegio Público Nuestra Señora de la Paloma",
    "slug": "colegio-publico-nuestra-senora-de-la-paloma",
    "type": "private",
    "address": "CALLE TABERNILLAS 2",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4110845196558,
      "lng": -3.711383150975494
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5252",
    "name": "Colegio Público Nuestra Señora del Lucero",
    "slug": "colegio-publico-nuestra-senora-del-lucero",
    "type": "private",
    "address": "CALLE MUÑICO 1",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40242068072587,
      "lng": -3.7410476655898712
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Transporte - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11167184",
    "name": "Colegio Público Nuria Espert",
    "slug": "colegio-publico-nuria-espert",
    "type": "private",
    "address": "CALLE MARIA REICHE 34",
    "city": "MADRID",
    "postalCode": "28055",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.487409274945925,
      "lng": -3.6110407043008768
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5255",
    "name": "Colegio Público Pablo Picasso",
    "slug": "colegio-publico-pablo-picasso",
    "type": "private",
    "address": "CALLE ANGEL LUIS DE LA HERRAN 35",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47078626667984,
      "lng": -3.647156116262385
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5256",
    "name": "Colegio Público Padre Coloma",
    "slug": "colegio-publico-padre-coloma",
    "type": "private",
    "address": "CALLE GUTIERREZ CANALES 19",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.448484963114275,
      "lng": -3.6148900571656988
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5257",
    "name": "Colegio Público Padre Mariana",
    "slug": "colegio-publico-padre-mariana",
    "type": "private",
    "address": "RONDA SUR 145",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37703559395701,
      "lng": -3.671302626256522
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5258",
    "name": "Colegio Público Padre Poveda",
    "slug": "colegio-publico-padre-poveda",
    "type": "private",
    "address": "AVENIDA ALFONSO XIII 23",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.451218874985805,
      "lng": -3.6677240367753114
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5260",
    "name": "Colegio Público Palacio Valdés",
    "slug": "colegio-publico-palacio-valdes",
    "type": "private",
    "address": "PASEO PRADO 38",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41055699750786,
      "lng": -3.6929209140194783
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5261",
    "name": "Colegio Público Palomeras Bajas",
    "slug": "colegio-publico-palomeras-bajas",
    "type": "private",
    "address": "CALLE FELIPE DE DIEGO 6",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37919484869876,
      "lng": -3.6608630426434994
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Integración (General) - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5263",
    "name": "Colegio Público Parque Aluche",
    "slug": "colegio-publico-parque-aluche",
    "type": "private",
    "address": "CALLE QUERO 47",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39083157827759,
      "lng": -3.760997850579394
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Integración (preferentemente motóricos) - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5151",
    "name": "Colegio Público Parque Eugenia de Montijo",
    "slug": "colegio-publico-parque-eugenia-de-montijo",
    "type": "private",
    "address": "CALLE PARQUE EUGENIA DE MONTIJO 28",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37837446977044,
      "lng": -3.7523641127237983
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5264",
    "name": "Colegio Público Pasamonte",
    "slug": "colegio-publico-pasamonte",
    "type": "private",
    "address": "AVENIDA DOCTOR GARCIA TAPIA 47",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41226776087093,
      "lng": -3.6480330885473093
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Integración (General)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5253",
    "name": "Colegio Público Patriarca Obispo Eijo y Garay",
    "slug": "colegio-publico-patriarca-obispo-eijo-y-garay",
    "type": "private",
    "address": "CALLE LOPEZ DE HOYOS 40",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43969634718427,
      "lng": -3.6816176968334515
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "176881",
    "name": "Colegio Público Pedro Duque",
    "slug": "colegio-publico-pedro-duque",
    "type": "private",
    "address": "CALLE MARMOLINA 5",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39721845156279,
      "lng": -3.607306131972689
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Horario ampliado - Comedor - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5267",
    "name": "Colegio Público Perú",
    "slug": "colegio-publico-peru",
    "type": "private",
    "address": "CALLE BALEARES 18",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39379355659199,
      "lng": -3.713263165805392
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5268",
    "name": "Colegio Público Pi I Margall",
    "slug": "colegio-publico-pi-i-margall",
    "type": "private",
    "address": "PLAZA DOS DE MAYO 2",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42679288775549,
      "lng": -3.7045815049836723
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "176871",
    "name": "Colegio Público Pinar de San José",
    "slug": "colegio-publico-pinar-de-san-jose",
    "type": "private",
    "address": "CALLE PATRIMONIO DE LA HUMANIDAD 39",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36301638063713,
      "lng": -3.764359559786085
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor - Integración preferente: motóricos"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5269",
    "name": "Colegio Público Pinar del Rey",
    "slug": "colegio-publico-pinar-del-rey",
    "type": "private",
    "address": "AVENIDA SAN LUIS 23",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.471620244949925,
      "lng": -3.6542420626066923
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5270",
    "name": "Colegio Público Pintor Rosales",
    "slug": "colegio-publico-pintor-rosales",
    "type": "private",
    "address": "CALLE PRINCIPE DE VERGARA 139",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.444631112841606,
      "lng": -3.6786214824583503
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5271",
    "name": "Colegio Público Pío Baroja",
    "slug": "colegio-publico-pio-baroja",
    "type": "private",
    "address": "CALLE LUIS DE HOYOS SAINZ 84",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40354001887506,
      "lng": -3.6379441929941656
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5272",
    "name": "Colegio Público Pío XII",
    "slug": "colegio-publico-pio-xii",
    "type": "private",
    "address": "CALLE DELFIN 2",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46693859499291,
      "lng": -3.693889291907082
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5430971",
    "name": "Colegio Público Plácido Domingo",
    "slug": "colegio-publico-placido-domingo",
    "type": "private",
    "address": "CALLE TEJO 5",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39744510759389,
      "lng": -3.678351566632272
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5273",
    "name": "Colegio Público Portugal",
    "slug": "colegio-publico-portugal",
    "type": "private",
    "address": "CALLE JUAN ALVAREZ MENDIZABAL 20",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42491865180926,
      "lng": -3.7149121447760582
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5275",
    "name": "Colegio Público Pradolongo",
    "slug": "colegio-publico-pradolongo",
    "type": "private",
    "address": "CALLE PARQUE DE LA PALOMA 9",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37893066302815,
      "lng": -3.7158394380500623
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5276",
    "name": "Colegio Público Príncipe de Asturias",
    "slug": "colegio-publico-principe-de-asturias",
    "type": "private",
    "address": "CALLE KANT 2",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.54156879341023,
      "lng": -3.6968198242534527
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5278",
    "name": "Colegio Público Puerto Rico",
    "slug": "colegio-publico-puerto-rico",
    "type": "private",
    "address": "CALLE SEGURA 74",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36794449938085,
      "lng": -3.7193980638250013
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5279",
    "name": "Colegio Público Rabindranath Tagore",
    "slug": "colegio-publico-rabindranath-tagore",
    "type": "private",
    "address": "CALLE JULIO PALACIOS 35",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48309753300499,
      "lng": -3.695908037156805
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6027",
    "name": "Colegio Público Ramiro de Maeztu",
    "slug": "colegio-publico-ramiro-de-maeztu",
    "type": "private",
    "address": "CALLE SERRANO 127",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44209298097929,
      "lng": -3.6861462152769775
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5280",
    "name": "Colegio Público Ramón Gómez de la Serna",
    "slug": "colegio-publico-ramon-gomez-de-la-serna",
    "type": "private",
    "address": "CALLE GODELLA 170",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.33969327538041,
      "lng": -3.689581642256062
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5281",
    "name": "Colegio Público Ramón María del Valle Inclán",
    "slug": "colegio-publico-ramon-maria-del-valle-inclan",
    "type": "private",
    "address": "CALLE ALCONERA 1",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.429854215285445,
      "lng": -3.618280698226673
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5282",
    "name": "Colegio Público Ramón Pérez de Ayala",
    "slug": "colegio-publico-ramon-perez-de-ayala",
    "type": "private",
    "address": "CALLE MOTILLA DEL PALANCAR 19",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46634990040974,
      "lng": -3.6332300542597373
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5283",
    "name": "Colegio Público Real Armada",
    "slug": "colegio-publico-real-armada",
    "type": "private",
    "address": "CALLE CORREGIDOR JUAN FRANCISCO DE LUJAN 114",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.401704924123834,
      "lng": -3.645563131710102
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5284",
    "name": "Colegio Público Regimiento Inmemorial del Rey",
    "slug": "colegio-publico-regimiento-inmemorial-del-rey",
    "type": "private",
    "address": "AVENIDA MORATALAZ 51",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.407386072133015,
      "lng": -3.6573909677766716
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5170",
    "name": "Colegio Público Reina Victoria",
    "slug": "colegio-publico-reina-victoria",
    "type": "private",
    "address": "CALLE PRINCIPE DE VERGARA 61",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43350060791133,
      "lng": -3.679668747386544
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5289",
    "name": "Colegio Público República de Brasil",
    "slug": "colegio-publico-republica-de-brasil",
    "type": "private",
    "address": "AVENIDA FUEROS 34",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37043939785913,
      "lng": -3.6899302716018574
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5286",
    "name": "Colegio Público República de Chile",
    "slug": "colegio-publico-republica-de-chile",
    "type": "private",
    "address": "CALLE CASTILLO DE UCLES 28",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42809852476456,
      "lng": -3.6247839198679577
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5285",
    "name": "Colegio Público República de Colombia",
    "slug": "colegio-publico-republica-de-colombia",
    "type": "private",
    "address": "PLAZA ALLOZ 3",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37598607317299,
      "lng": -3.737129783095065
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5290",
    "name": "Colegio Público República de Ecuador",
    "slug": "colegio-publico-republica-de-ecuador",
    "type": "private",
    "address": "CALLE VALLE DE ORO 41",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38761083602051,
      "lng": -3.7252507882198085
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5291",
    "name": "Colegio Público República de El Salvador",
    "slug": "colegio-publico-republica-de-el-salvador",
    "type": "private",
    "address": "CALLE SACEDON 2",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34949911149915,
      "lng": -3.6979477280735917
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5262",
    "name": "Colegio Público República de Panamá",
    "slug": "colegio-publico-republica-de-panama",
    "type": "private",
    "address": "CALLE PEONES 2",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42658755563361,
      "lng": -3.617602405153018
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5287",
    "name": "Colegio Público República de Paraguay",
    "slug": "colegio-publico-republica-de-paraguay",
    "type": "private",
    "address": "CALLE MANRESA 60",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49194816139676,
      "lng": -3.695267856666852
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5292",
    "name": "Colegio Público República de Uruguay",
    "slug": "colegio-publico-republica-de-uruguay",
    "type": "private",
    "address": "AVENIDA NUESTRA SEÑORA DE VALVANERA 120",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39347350069245,
      "lng": -3.741232360556739
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5288",
    "name": "Colegio Público República de Venezuela",
    "slug": "colegio-publico-republica-de-venezuela",
    "type": "private",
    "address": "CALLE CERECINOS 8",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38358402272625,
      "lng": -3.713626711959121
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5293",
    "name": "Colegio Público República Dominicana",
    "slug": "colegio-publico-republica-dominicana",
    "type": "private",
    "address": "RONDA DON BOSCO 2",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37628543221565,
      "lng": -3.752199516614656
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Planes de mejora - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5295",
    "name": "Colegio Público Rosa Luxemburgo",
    "slug": "colegio-publico-rosa-luxemburgo",
    "type": "private",
    "address": "CALLE BARDEGUERAL 16",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.450031818221355,
      "lng": -3.7715711526219784
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5298",
    "name": "Colegio Público Rufino Blanco",
    "slug": "colegio-publico-rufino-blanco",
    "type": "private",
    "address": "CALLE GENERAL ALVAREZ DE CASTRO 46",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43821121285092,
      "lng": -3.7024604612596157
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5300",
    "name": "Colegio Público Sagunto",
    "slug": "colegio-publico-sagunto",
    "type": "private",
    "address": "CALLE PATERNA 14",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34116249559141,
      "lng": -3.6849106315684015
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5301",
    "name": "Colegio Público San Benito",
    "slug": "colegio-publico-san-benito",
    "type": "private",
    "address": "CALLE JUAN PEREZ ZUÑIGA 36",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4442650725657,
      "lng": -3.6469252698024386
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5302",
    "name": "Colegio Público San Carlos",
    "slug": "colegio-publico-san-carlos",
    "type": "private",
    "address": "CALLE VILLASTAR 8",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34402221395892,
      "lng": -3.7111491204293108
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5303",
    "name": "Colegio Público San Cristóbal",
    "slug": "colegio-publico-san-cristobal",
    "type": "private",
    "address": "CALLE BRAVO MURILLO 41",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43743329914089,
      "lng": -3.7044567612586508
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5304",
    "name": "Colegio Público San Eugenio y San Isidro",
    "slug": "colegio-publico-san-eugenio-y-san-isidro",
    "type": "private",
    "address": "CALLE PEÑUELAS 31",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.402134715838024,
      "lng": -3.7031694724884066
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5305",
    "name": "Colegio Público San Ignacio de Loyola",
    "slug": "colegio-publico-san-ignacio-de-loyola",
    "type": "private",
    "address": "AVENIDA ABRANTES 1",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38484910708361,
      "lng": -3.7217220947079097
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6028",
    "name": "Colegio Público San Ildefonso",
    "slug": "colegio-publico-san-ildefonso",
    "type": "private",
    "address": "CALLE ALFONSO VI 1",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41307968243987,
      "lng": -3.712170272137244
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5306",
    "name": "Colegio Público San Isidoro",
    "slug": "colegio-publico-san-isidoro",
    "type": "private",
    "address": "CALLE FUENTERRABIA 15",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40650867169137,
      "lng": -3.6813417078981567
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5308",
    "name": "Colegio Público San Juan Bautista",
    "slug": "colegio-publico-san-juan-bautista",
    "type": "private",
    "address": "CALLE SORZANO 1",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.451160716316814,
      "lng": -3.6590202395182456
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora - Convenio con Bristish Council"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5309",
    "name": "Colegio Público San Juan Bosco",
    "slug": "colegio-publico-san-juan-bosco",
    "type": "private",
    "address": "CALLE SANTA IRENE 2",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41968378283889,
      "lng": -3.652559914198146
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor -  Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5310",
    "name": "Colegio Público San Juan de la Cruz",
    "slug": "colegio-publico-san-juan-de-la-cruz",
    "type": "private",
    "address": "CALLE HONDURAS 10",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.459537375982286,
      "lng": -3.67954186336266
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5311",
    "name": "Colegio Público San Miguel",
    "slug": "colegio-publico-san-miguel",
    "type": "private",
    "address": "AVENIDA VIRGEN DEL CARMEN 32",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47440638983908,
      "lng": -3.6522282145254072
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado -Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5312",
    "name": "Colegio Público San Pablo",
    "slug": "colegio-publico-san-pablo",
    "type": "private",
    "address": "PLAZA PE&amp;Ntilde;A MORRAZ 1",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.389399772744945,
      "lng": -3.6517608828166077
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5313",
    "name": "Colegio Público San Roque",
    "slug": "colegio-publico-san-roque",
    "type": "private",
    "address": "CALLE OXIGENO 43",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34686367965085,
      "lng": -3.703195663444635
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5314",
    "name": "Colegio Público Santa María",
    "slug": "colegio-publico-santa-maria",
    "type": "private",
    "address": "CALLE CASINO 7",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.406129867007586,
      "lng": -3.7069233554021004
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5315",
    "name": "Colegio Público Santo Domingo",
    "slug": "colegio-publico-santo-domingo",
    "type": "private",
    "address": "CALLE SAN FELIU DE GUIXOLS 7",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39201829942787,
      "lng": -3.6458947958734735
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5316",
    "name": "Colegio Público Tirso de Molina",
    "slug": "colegio-publico-tirso-de-molina",
    "type": "private",
    "address": "CALLE BRONCE 1",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.392243024735016,
      "lng": -3.6881496913853913
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5317",
    "name": "Colegio Público Tomás Bretón",
    "slug": "colegio-publico-tomas-breton",
    "type": "private",
    "address": "CALLE ALEJANDRO DUMAS 4",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40106583461258,
      "lng": -3.7158617370259046
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor - Horario ampliado - Integración preferente (motóricos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "42016",
    "name": "Colegio Público Valdebernardo",
    "slug": "colegio-publico-valdebernardo",
    "type": "private",
    "address": "CALLE TREN DE ARGANDA 9",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40340595669721,
      "lng": -3.6178383019210627
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5318",
    "name": "Colegio Público Vasco Núñez de Balboa",
    "slug": "colegio-publico-vasco-nunez-de-balboa",
    "type": "private",
    "address": "CALLE NUESTRA SEÑORA DE VALVERDE 149",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49939736356688,
      "lng": -3.686422886278671
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5319",
    "name": "Colegio Público Vázquez de Mella",
    "slug": "colegio-publico-vazquez-de-mella",
    "type": "private",
    "address": "CALLE BAILEN 18",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41209542948543,
      "lng": -3.7139985334961243
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5320",
    "name": "Colegio Público Vicálvaro",
    "slug": "colegio-publico-vicalvaro",
    "type": "private",
    "address": "CALLE FORGES 15",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4050257573927,
      "lng": -3.601094918515076
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Planes de mejora"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5325",
    "name": "Colegio Público Virgen del Cerro",
    "slug": "colegio-publico-virgen-del-cerro",
    "type": "private",
    "address": "CALLE MOHERNANDO 1",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39595533182647,
      "lng": -3.6491021370173584
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte -  Horario ampliado - Comedor - Planes de mejora - Integración preferente (motóricos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5326",
    "name": "Colegio Público Virgen del Cortijo",
    "slug": "colegio-publico-virgen-del-cortijo",
    "type": "private",
    "address": "AVENIDA MANOTERAS 63",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.487253962803756,
      "lng": -3.6600221185724506
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado - Integración preferente (Trastorno generalizado del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4690940",
    "name": "Colegio Público Winston Churchill",
    "slug": "colegio-publico-winston-churchill",
    "type": "private",
    "address": "AVENIDA GRAN VIA DEL ESTE 5",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4029655566785,
      "lng": -3.595313927334039
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5740",
    "name": "Colegio Pureza de María",
    "slug": "colegio-pureza-de-maria",
    "type": "private",
    "address": "CALLE LIRA 10",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408098996245066,
      "lng": -3.668181603054124
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5741",
    "name": "Colegio Purísima Concepción",
    "slug": "colegio-purisima-concepcion",
    "type": "private",
    "address": "CALLE PUEBLA 20",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42229425809272,
      "lng": -3.7036151068198313
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5411",
    "name": "Colegio Rafaela Ybarra",
    "slug": "colegio-rafaela-ybarra",
    "type": "private",
    "address": "AVENIDA RAFAELA YBARRA 73",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37925455194446,
      "lng": -3.711531234682531
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5742",
    "name": "Colegio Raimundo Lulio",
    "slug": "colegio-raimundo-lulio",
    "type": "private",
    "address": "AVENIDA SAN DIEGO 63",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.386668087179274,
      "lng": -3.6678872984811024
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5743",
    "name": "Colegio Ramón y Cajal",
    "slug": "colegio-ramon-y-cajal",
    "type": "private",
    "address": "CALLE ARTURO SORIA 206",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46032824705804,
      "lng": -3.661232844138442
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10618357",
    "name": "Colegio Reggio",
    "slug": "colegio-reggio",
    "type": "private",
    "address": "CALLE QUINTANAPALLA 10",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50008099732123,
      "lng": -3.6675659218777112
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5744",
    "name": "Colegio Reinado del Corazón de Jesús",
    "slug": "colegio-reinado-del-corazon-de-jesus",
    "type": "private",
    "address": "CALLE WALIA 21 OTRA ENTRADA POR C/ HOMERO 33",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408333966598946,
      "lng": -3.671165658679592
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5745",
    "name": "Colegio Retiro",
    "slug": "colegio-retiro",
    "type": "private",
    "address": "CALLE POETA ESTEBAN DE VILLEGAS ",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408104986515454,
      "lng": -3.6810513839020333
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5752",
    "name": "Colegio Sagrada Familia de Urgel",
    "slug": "colegio-sagrada-familia-de-urgel",
    "type": "private",
    "address": "AVENIDA PALOMERAS 88",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38720298406216,
      "lng": -3.6546969438643155
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5751",
    "name": "Colegio Sagrada Familia. Calle Jorge Juan",
    "slug": "colegio-sagrada-familia-calle-jorge-juan",
    "type": "private",
    "address": "CALLE JORGE JUAN 165",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.422767812963976,
      "lng": -3.6646960170940597
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6073",
    "name": "Colegio Sagrada Familia. Calle Oberón",
    "slug": "colegio-sagrada-familia-calle-oberon",
    "type": "private",
    "address": "CALLE OBERON 6",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40655487479161,
      "lng": -3.6352502753782403
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5758",
    "name": "Colegio Sagrado Corazón de Jesús. Calle Ferraz",
    "slug": "colegio-sagrado-corazon-de-jesus-calle-ferraz",
    "type": "private",
    "address": "CALLE FERRAZ 63",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43083827284088,
      "lng": -3.7220484758736667
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5759",
    "name": "Colegio Sagrado Corazón de Jesús. Calle Valderribas",
    "slug": "colegio-sagrado-corazon-de-jesus-calle-valderribas",
    "type": "private",
    "address": "CALLE VALDERRIBAS 2",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40616136468069,
      "lng": -3.680654668855027
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5757",
    "name": "Colegio Sagrado Corazón de Jesús. Paseo General Martínez Campos",
    "slug": "colegio-sagrado-corazon-de-jesus-paseo-general-martinez-campos",
    "type": "private",
    "address": "PASEO GENERAL MARTINEZ CAMPOS 6 OTRA ENTRADA: C/ RAFAEL CALVO S/N",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43482436050229,
      "lng": -3.697909599373065
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5423",
    "name": "Colegio Sagrado Corazón. Avenida Alfonso XIII.",
    "slug": "colegio-sagrado-corazon-avenida-alfonso-xiii",
    "type": "private",
    "address": "AVENIDA ALFONSO XIII 127",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.460028879402834,
      "lng": -3.670972193064647
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5756",
    "name": "Colegio Sagrado Corazón. Calle Don Pedro",
    "slug": "colegio-sagrado-corazon-calle-don-pedro",
    "type": "private",
    "address": "CALLE DON PEDRO 14",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.411775126022896,
      "lng": -3.7133469134686043
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5754",
    "name": "Colegio Sagrado Corazón. Calle San Jaime",
    "slug": "colegio-sagrado-corazon-calle-san-jaime",
    "type": "private",
    "address": "CALLE SAN JAIME 21",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3800419599042,
      "lng": -3.6268372280590637
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5753",
    "name": "Colegio Sagrado Corazón. Calle Santa Magdalena Sofía",
    "slug": "colegio-sagrado-corazon-calle-santa-magdalena-sofia",
    "type": "private",
    "address": "CALLE SANTA MAGDALENA SOFIA 12",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46902503676227,
      "lng": -3.6762638013583677
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5755",
    "name": "Colegio Sagrado Corazón. Paseo Santa María de la Cabeza",
    "slug": "colegio-sagrado-corazon-paseo-santa-maria-de-la-cabeza",
    "type": "private",
    "address": "PASEO SANTA MARIA DE LA CABEZA 115",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39045463004952,
      "lng": -3.7097757039084076
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5490",
    "name": "Colegio Sagrado Corazón. Plaza Madre María Ana Mogas",
    "slug": "colegio-sagrado-corazon-plaza-madre-maria-ana-mogas",
    "type": "private",
    "address": "PLAZA MADRE MARIA ANA MOGAS 6",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49440950222116,
      "lng": -3.68893277065388
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6074",
    "name": "Colegio Sagrados Corazones. Calle Martín de los Heros",
    "slug": "colegio-sagrados-corazones-calle-martin-de-los-heros",
    "type": "private",
    "address": "CALLE MARTIN DE LOS HEROS 91",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43184096388032,
      "lng": -3.7201728672463394
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5764",
    "name": "Colegio Sagrados Corazones. Calle Pan y Toros",
    "slug": "colegio-sagrados-corazones-calle-pan-y-toros",
    "type": "private",
    "address": "CALLE PAN Y TOROS 45",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35703629330206,
      "lng": -3.6940331915712257
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6272",
    "name": "Colegio Salesianos Atocha",
    "slug": "colegio-salesianos-atocha",
    "type": "public",
    "address": "RONDA ATOCHA 27",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.406286572011396,
      "lng": -3.6974379644005113
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5421",
    "name": "Colegio San Agustín",
    "slug": "colegio-san-agustin",
    "type": "private",
    "address": "CALLE PADRE DAMIAN 18",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45432254112051,
      "lng": -3.6869310404427016
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5770",
    "name": "Colegio San Alberto Magno",
    "slug": "colegio-san-alberto-magno",
    "type": "private",
    "address": "TRAVESIA IVAN DE VARGAS 1",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40268361903559,
      "lng": -3.723715564179161
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5773",
    "name": "Colegio San Alfonso",
    "slug": "colegio-san-alfonso",
    "type": "private",
    "address": "CALLE MESON DE PAREDES 78",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.406897358889985,
      "lng": -3.7022055055400185
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5775",
    "name": "Colegio San Antonio",
    "slug": "colegio-san-antonio",
    "type": "private",
    "address": "CALLE BRAVO MURILLO 150",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45074721922927,
      "lng": -3.7032042113199437
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5358",
    "name": "Colegio San Bernardo",
    "slug": "colegio-san-bernardo",
    "type": "private",
    "address": "AVENIDA MANZANARES 20",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40801513126677,
      "lng": -3.722570557753457
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Integración"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5766",
    "name": "Colegio San Buenaventura",
    "slug": "colegio-san-buenaventura",
    "type": "private",
    "address": "CALLE EL GRECO 16",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40760870917065,
      "lng": -3.746832243048563
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5590",
    "name": "Colegio San Estanislao de Kostka (SEK) Santa Isabel",
    "slug": "colegio-san-estanislao-de-kostka-sek-santa-isabel",
    "type": "private",
    "address": "CALLE SAN ILDEFONSO 18",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.410454749070645,
      "lng": -3.6964438378117794
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6076",
    "name": "Colegio San Eulogio",
    "slug": "colegio-san-eulogio",
    "type": "private",
    "address": "CALLE LA REVOLTOSA 17",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3747912316543,
      "lng": -3.6215348343604767
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5767",
    "name": "Colegio San Fermín",
    "slug": "colegio-san-fermin",
    "type": "private",
    "address": "CALLE ESTAFETA 17",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37266922835702,
      "lng": -3.6921792960409503
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5498",
    "name": "Colegio San Francisco",
    "slug": "colegio-san-francisco",
    "type": "private",
    "address": "CALLE FORTALEZA 2",
    "city": "MADRID",
    "postalCode": "28048",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.53174377125472,
      "lng": -3.779450180514026
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5413",
    "name": "Colegio San Francisco de Asís",
    "slug": "colegio-san-francisco-de-asis",
    "type": "private",
    "address": "CALLE MADRE CARMEN DEL NIÑO JESUS 7",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45093581478766,
      "lng": -3.6807288475096285
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5768",
    "name": "Colegio San Gabriel",
    "slug": "colegio-san-gabriel",
    "type": "private",
    "address": "CALLE EUGENIA DE MONTIJO 92",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37769276521923,
      "lng": -3.7491287749270295
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5772",
    "name": "Colegio San Jaime Apóstol",
    "slug": "colegio-san-jaime-apostol",
    "type": "private",
    "address": "CALLE JUAN JOSE MARTINEZ SECO 54",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.351611985420796,
      "lng": -3.6881368760618827
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5771",
    "name": "Colegio San Javier",
    "slug": "colegio-san-javier",
    "type": "private",
    "address": "PASEO SANTA MARIA DE LA CABEZA 85",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39733884242238,
      "lng": -3.7021886731287
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6043",
    "name": "Colegio San José de Begoña",
    "slug": "colegio-san-jose-de-begona",
    "type": "private",
    "address": "CALLE MARCOS DE ORUETA 15",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48483511396788,
      "lng": -3.687065035609154
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5780",
    "name": "Colegio San José del Parque",
    "slug": "colegio-san-jose-del-parque",
    "type": "private",
    "address": "AVENIDA CHAMPAGNAT 2",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.450207848823084,
      "lng": -3.6393994682111694
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5781",
    "name": "Colegio San José - Lucero",
    "slug": "colegio-san-jose-lucero",
    "type": "private",
    "address": "CALLE PALMIPEDO 12",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40379234198255,
      "lng": -3.7462951052600655
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5779",
    "name": "Colegio San José. Calle Emilio Ferrari",
    "slug": "colegio-san-jose-calle-emilio-ferrari",
    "type": "private",
    "address": "CALLE EMILIO FERRARI 87",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42909088428024,
      "lng": -3.6393644785138735
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5774",
    "name": "Colegio San José. Calle Francisco Laguna",
    "slug": "colegio-san-jose-calle-francisco-laguna",
    "type": "private",
    "address": "CALLE FRANCISCO LAGUNA 21",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.390823171552924,
      "lng": -3.6706736565935993
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5778",
    "name": "Colegio San José. Calle Marqués de Viana",
    "slug": "colegio-san-jose-calle-marques-de-viana",
    "type": "private",
    "address": "CALLE MARQUES DE VIANA 43",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.462259347284196,
      "lng": -3.701944243508983
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5776",
    "name": "Colegio San José. Calle Moreno Nieto",
    "slug": "colegio-san-jose-calle-moreno-nieto",
    "type": "private",
    "address": "CALLE MORENO NIETO 1",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41199613125631,
      "lng": -3.7183937072776505
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5777",
    "name": "Colegio San José. Calle Pedro Escudero",
    "slug": "colegio-san-jose-calle-pedro-escudero",
    "type": "private",
    "address": "CALLE PEDRO ESCUDERO 21",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38802636908375,
      "lng": -3.655659256078871
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6077",
    "name": "Colegio San Juan Bautista",
    "slug": "colegio-san-juan-bautista",
    "type": "private",
    "address": "CALLE FRANCOS RODRIGUEZ 5",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45510291364264,
      "lng": -3.70396903286025
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6078",
    "name": "Colegio San Juan García",
    "slug": "colegio-san-juan-garcia",
    "type": "private",
    "address": "CALLE CAMARENA 57",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.395022148365726,
      "lng": -3.7552948542232087
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5783",
    "name": "Colegio San Luis Felca",
    "slug": "colegio-san-luis-felca",
    "type": "private",
    "address": "CALLE DOLORES BARRANCO 65",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38285412460477,
      "lng": -3.7092600237187625
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5784",
    "name": "Colegio San Martín",
    "slug": "colegio-san-martin",
    "type": "private",
    "address": "AVENIDA DOCTOR GARCIA TAPIA 124",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41186409171672,
      "lng": -3.6477227769507454
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6080",
    "name": "Colegio San Miguel Arcángel",
    "slug": "colegio-san-miguel-arcangel",
    "type": "private",
    "address": "CALLE REPULLES Y VARGAS 11",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.410309274496264,
      "lng": -3.7345105606244946
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5787",
    "name": "Colegio San Patricio",
    "slug": "colegio-san-patricio",
    "type": "private",
    "address": "CALLE SERRANO 200 Otra entrada por C/ Sil 23",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45038912189774,
      "lng": -3.681772893890903
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5788",
    "name": "Colegio San Pedro",
    "slug": "colegio-san-pedro",
    "type": "private",
    "address": "CALLE JOSE DEL PINO 53",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.350984783423186,
      "lng": -3.6890725410472816
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5789",
    "name": "Colegio San Pedro Apóstol",
    "slug": "colegio-san-pedro-apostol",
    "type": "private",
    "address": "CALLE BABILONIA 19",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.467524497304,
      "lng": -3.588251658872532
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5492",
    "name": "Colegio San Rafael Arcángel",
    "slug": "colegio-san-rafael-arcangel",
    "type": "private",
    "address": "CALLE OTERO Y DELAGE 105",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.476115616047736,
      "lng": -3.7309329974548016
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5414",
    "name": "Colegio San Ramón y San Antonio",
    "slug": "colegio-san-ramon-y-san-antonio",
    "type": "private",
    "address": "CALLE RODRIGUEZ MARIN 57",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45009082916007,
      "lng": -3.6788806458897585
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "22117",
    "name": "Colegio San Saturio",
    "slug": "colegio-san-saturio",
    "type": "private",
    "address": "CALLE SEBASTIAN HERRERA 23 OTRA ENTRADA POR C/ SEBASTIAN ELCANO, 18",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.404170115789505,
      "lng": -3.6988185060140832
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5794",
    "name": "Colegio San Viator",
    "slug": "colegio-san-viator",
    "type": "private",
    "address": "PLAZA FERNANDEZ LADREDA 2",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38464288591588,
      "lng": -3.717219417771738
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5434",
    "name": "Colegio San Vicente",
    "slug": "colegio-san-vicente",
    "type": "private",
    "address": "CALLE BUTRON 33",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42679478655967,
      "lng": -3.6073952479105014
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "31661",
    "name": "Colegio Santa Ana",
    "slug": "colegio-santa-ana",
    "type": "private",
    "address": "AVENIDA ALFONSO XIII 162",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46043395493294,
      "lng": -3.6741253819113138
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6036",
    "name": "Colegio Santa Ana y San Rafael",
    "slug": "colegio-santa-ana-y-san-rafael",
    "type": "private",
    "address": "CALLE DOCTOR ESQUERDO 53",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.421600482271224,
      "lng": -3.668715960678492
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6263",
    "name": "Colegio Santa Bárbara",
    "slug": "colegio-santa-barbara",
    "type": "private",
    "address": "PLAZA PAJA 4",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.412678727720156,
      "lng": -3.7114470842202367
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5674",
    "name": "Colegio Santa Beatriz de Silva",
    "slug": "colegio-santa-beatriz-de-silva",
    "type": "private",
    "address": "CALLE ALFONSO MARTINEZ CONDE 4",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.380727075803435,
      "lng": -3.729677174662924
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5422",
    "name": "Colegio Santa Catalina de Sena",
    "slug": "colegio-santa-catalina-de-sena",
    "type": "private",
    "address": "AVENIDA ALFONSO XIII 160",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46038718846832,
      "lng": -3.67287468758612
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5433",
    "name": "Colegio Santa Cruz. Calle Miguel Fleta",
    "slug": "colegio-santa-cruz-calle-miguel-fleta",
    "type": "private",
    "address": "CALLE MIGUEL FLETA 7",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.431727221436894,
      "lng": -3.631773366873145
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5681",
    "name": "Colegio Santa Elizabeth",
    "slug": "colegio-santa-elizabeth",
    "type": "private",
    "address": "CALLE VIERA Y CLAVIJO 14",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40818787760891,
      "lng": -3.6730498834009606
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5689",
    "name": "Colegio Santa Francisca Javier Cabrini",
    "slug": "colegio-santa-francisca-javier-cabrini",
    "type": "private",
    "address": "CALLE SANTA FRANCISCA JAVIER CABRINI 2",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46427693346334,
      "lng": -3.6374778905870855
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5691",
    "name": "Colegio Santa Gema Galgani",
    "slug": "colegio-santa-gema-galgani",
    "type": "private",
    "address": "CALLE ESCALONA 59",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39718226159854,
      "lng": -3.7611047008793963
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte -  Biling&amp;uuml;e"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5695",
    "name": "Colegio Santa Isabel",
    "slug": "colegio-santa-isabel",
    "type": "private",
    "address": "CALLE HORTALEZA 77",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42543839705617,
      "lng": -3.6976711133706144
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5491",
    "name": "Colegio Santa Joaquina Vedruna",
    "slug": "colegio-santa-joaquina-vedruna",
    "type": "private",
    "address": "TRAVESIA COSTA BRAVA 3",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49526305794226,
      "lng": -3.699809936975298
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5701",
    "name": "Colegio Santa María",
    "slug": "colegio-santa-maria",
    "type": "private",
    "address": "CALLE TOLOSA 6",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37290590001327,
      "lng": -3.716918272824381
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Integración preferente: Trastornos generales del desarrollo"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5388",
    "name": "Colegio Santa María de la Hispanidad",
    "slug": "colegio-santa-maria-de-la-hispanidad",
    "type": "private",
    "address": "CALLE ARMONIA 22",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45326802014473,
      "lng": -3.6116315114759936
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5412",
    "name": "Colegio Santa María de los Apóstoles",
    "slug": "colegio-santa-maria-de-los-apostoles",
    "type": "private",
    "address": "PLAZA GROSELLA 4 c/v c/ MADRE NAZARIA, 5",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37478754247059,
      "lng": -3.7497915965290645
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5706",
    "name": "Colegio Santa María de los Pinos",
    "slug": "colegio-santa-maria-de-los-pinos",
    "type": "private",
    "address": "CALLE ANGELILLO 9 TAMBIEN C/ SANTA. CRUZ DE RETAMAR 5 Y 14",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38164601608821,
      "lng": -3.644782566825699
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5713",
    "name": "Colegio Santa María de los Rosales",
    "slug": "colegio-santa-maria-de-los-rosales",
    "type": "private",
    "address": "CALLE VIRGEN DE LOS ROSALES 1",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45370097377894,
      "lng": -3.7698441139322796
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5707",
    "name": "Colegio Santa María del Bosque",
    "slug": "colegio-santa-maria-del-bosque",
    "type": "private",
    "address": "CALLE GAVIOTA 14",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38810190319303,
      "lng": -3.7345166675776844
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5971",
    "name": "Colegio Santa María del Camino",
    "slug": "colegio-santa-maria-del-camino",
    "type": "private",
    "address": "CALLE PEGUERINOS 13",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46862078165276,
      "lng": -3.735098296301845
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5708",
    "name": "Colegio Santa María del Carmen",
    "slug": "colegio-santa-maria-del-carmen",
    "type": "private",
    "address": "CALLE MISTERIOS 38",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.441272001839316,
      "lng": -3.6424512704586047
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5709",
    "name": "Colegio Santa María del Pilar",
    "slug": "colegio-santa-maria-del-pilar",
    "type": "private",
    "address": "CALLE REYES MAGOS 3",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.412117811138216,
      "lng": -3.6742558665346396
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5715",
    "name": "Colegio Santa María del Valle Cep",
    "slug": "colegio-santa-maria-del-valle-cep",
    "type": "private",
    "address": "CALLE VITRUVIO 19",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4439135022648,
      "lng": -3.6875443568162325
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5711",
    "name": "Colegio Santa María del Yermo",
    "slug": "colegio-santa-maria-del-yermo",
    "type": "private",
    "address": "CALLE GAZTAMBIDE 91",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.441080377499205,
      "lng": -3.7164393196427232
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5165473",
    "name": "Colegio Santa María la Blanca",
    "slug": "colegio-santa-maria-la-blanca",
    "type": "private",
    "address": "CALLE MONASTERIO DE OSEIRA 17",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.51054166910342,
      "lng": -3.6969116709157026
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración preferente: motóricos"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5716",
    "name": "Colegio Santa María Micaela",
    "slug": "colegio-santa-maria-micaela",
    "type": "private",
    "address": "CALLE VIA CARPETANA 105",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39441667711472,
      "lng": -3.738850744948106
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5718",
    "name": "Colegio Santa Rafaela María",
    "slug": "colegio-santa-rafaela-maria",
    "type": "private",
    "address": "CALLE SANTA RAFAELA MARIA DEL SAGRADO CORAZON 112",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37860045530123,
      "lng": -3.6733208120007768
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5720",
    "name": "Colegio Santa Rita",
    "slug": "colegio-santa-rita",
    "type": "private",
    "address": "CALLE EUGENIA DE MONTIJO 53",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38077637392742,
      "lng": -3.744556691745766
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "22702",
    "name": "Colegio Santa Rosa de Lima",
    "slug": "colegio-santa-rosa-de-lima",
    "type": "private",
    "address": "CARRETERA CANILLAS 43",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.463445199245385,
      "lng": -3.6469323192590597
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5721",
    "name": "Colegio Santa Susana",
    "slug": "colegio-santa-susana",
    "type": "private",
    "address": "CALLE PEDRO HEREDIA 28",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42960420145114,
      "lng": -3.663383982929057
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5724",
    "name": "Colegio Santísimo Sacramento. Calle Arturo Soria",
    "slug": "colegio-santisimo-sacramento-calle-arturo-soria",
    "type": "private",
    "address": "CALLE ARTURO SORIA 208",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.460542561054595,
      "lng": -3.6615651949990067
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5589",
    "name": "Colegio Santo Ángel",
    "slug": "colegio-santo-angel",
    "type": "private",
    "address": "CALLE ARROYO FONTARRON 209",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.398192806837095,
      "lng": -3.6436913203860186
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5436",
    "name": "Colegio Santo Ángel de la Guarda. Calle Alcalá",
    "slug": "colegio-santo-angel-de-la-guarda-calle-alcala",
    "type": "private",
    "address": "CALLE ALCALA 587",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44558802227044,
      "lng": -3.6141443427818647
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5593",
    "name": "Colegio Santo Ángel de la Guarda. Calle Villuercas",
    "slug": "colegio-santo-angel-de-la-guarda-calle-villuercas",
    "type": "private",
    "address": "CALLE VILLUERCAS 4",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37412176475386,
      "lng": -3.6673040042955427
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5349",
    "name": "Colegio Santo Domingo",
    "slug": "colegio-santo-domingo",
    "type": "private",
    "address": "GLORIETA PRESIDENTE GARCIA MORENO 3",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44595433392759,
      "lng": -3.7149698956682524
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6040",
    "name": "Colegio Santo Domingo Savio",
    "slug": "colegio-santo-domingo-savio",
    "type": "private",
    "address": "CALLE SANTO DOMINGO SAVIO 2",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43032479232779,
      "lng": -3.6345189511919482
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "43405",
    "name": "Colegio Scuola Materna Italiana de Madrid",
    "slug": "colegio-scuola-materna-italiana-de-madrid",
    "type": "private",
    "address": "CALLE AGUSTIN DE BETANCOURT 1",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.442066612982124,
      "lng": -3.695083815448108
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5568",
    "name": "Colegio Scuola Statale Italiana de Madrid",
    "slug": "colegio-scuola-statale-italiana-de-madrid",
    "type": "private",
    "address": "CALLE AGUSTIN DE BETANCOURT 1",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.442066612982124,
      "lng": -3.695083815448108
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5591",
    "name": "Colegio Senara",
    "slug": "colegio-senara",
    "type": "private",
    "address": "AVENIDA MORATALAZ 178",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408598071853035,
      "lng": -3.643731517276635
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5592",
    "name": "Colegio Siglo XXI",
    "slug": "colegio-siglo-xxi",
    "type": "private",
    "address": "CALLE LITUANIA 8",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40922947699016,
      "lng": -3.661156744900851
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5608",
    "name": "Colegio Stella Maris",
    "slug": "colegio-stella-maris",
    "type": "private",
    "address": "CALLE ARTURO SORIA 71",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.445202223957395,
      "lng": -3.646887087080783
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6125029",
    "name": "Colegio Stella Maris La Gavia",
    "slug": "colegio-stella-maris-la-gavia",
    "type": "private",
    "address": "CALLE PEÑARANDA DE BRACAMONTE 9",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37270234365836,
      "lng": -3.606025847123412
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8350056",
    "name": "Colegio Stella Maris &amp; Prep School",
    "slug": "colegio-stella-maris-amp-prep-school",
    "type": "private",
    "address": "CALLE VALDESQUI 16",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46430721453538,
      "lng": -3.7707908628812143
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6041",
    "name": "Colegio Tajamar",
    "slug": "colegio-tajamar",
    "type": "public",
    "address": "CALLE PIO FELIPE 12",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39676067827939,
      "lng": -3.6500761173002196
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5569",
    "name": "Colegio Timón",
    "slug": "colegio-timon",
    "type": "private",
    "address": "CALLE RUSIA 11",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42423100660826,
      "lng": -3.610095282640812
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5590457",
    "name": "Colegio Torrevilano",
    "slug": "colegio-torrevilano",
    "type": "private",
    "address": "CALLE EMBALSE DE NAVACERRADA 9",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.362829835280884,
      "lng": -3.602286371713942
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5618",
    "name": "Colegio Trabenco",
    "slug": "colegio-trabenco",
    "type": "private",
    "address": "CALLE REGUERA DE TOMATEROS 103",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37056007888366,
      "lng": -3.658411123895035
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "86516",
    "name": "Colegio Tres Olivos",
    "slug": "colegio-tres-olivos",
    "type": "private",
    "address": "CALLE CASILDEA DE VANDALIA 3 URBANIZACION TRES OLIVOS",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49912278125378,
      "lng": -3.6886623477439073
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración preferente: Auditivos"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5528",
    "name": "Colegio Trilema Avenida de América",
    "slug": "colegio-trilema-avenida-de-america",
    "type": "private",
    "address": "CALLE AGUSTIN DURAN 20",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43639334939346,
      "lng": -3.673366432838744
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5750",
    "name": "Colegio Trilema Safa",
    "slug": "colegio-trilema-safa",
    "type": "private",
    "address": "CALLE MERCEDES FORMICA 32",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42193498103712,
      "lng": -3.6646899465324823
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6206",
    "name": "Colegio T.E.M.S.",
    "slug": "colegio-t-e-m-s",
    "type": "private",
    "address": "CALLE LA SALLE 23",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46605017878715,
      "lng": -3.7822288716055814
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7053564",
    "name": "Colegio Union Chretienne de St. Chaumond (Francés)",
    "slug": "colegio-union-chretienne-de-st-chaumond-frances",
    "type": "private",
    "address": "CALLE RODRIGUEZ MARIN 30",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.445825583859786,
      "lng": -3.681090009272535
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "22394",
    "name": "Colegio Valdecás",
    "slug": "colegio-valdecas",
    "type": "private",
    "address": "CALLE JAVIER DE MIGUEL 17",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38829756013783,
      "lng": -3.6618238780874615
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4693693",
    "name": "Colegio Valdefuentes",
    "slug": "colegio-valdefuentes",
    "type": "private",
    "address": "CALLE ANA DE AUSTRIA 6",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.490945359486716,
      "lng": -3.665132261364935
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5495",
    "name": "Colegio Valdeluz",
    "slug": "colegio-valdeluz",
    "type": "private",
    "address": "CALLE FERMIN CABALLERO 53",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.483080231313636,
      "lng": -3.707659217554101
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633",
    "name": "Colegio Vedruna. Calle Espinar",
    "slug": "colegio-vedruna-calle-espinar",
    "type": "private",
    "address": "CALLE ESPINAR 41",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.384209584999894,
      "lng": -3.743039366504162
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5626",
    "name": "Colegio Vedruna. Calle Santa Joaquina Vedruna",
    "slug": "colegio-vedruna-calle-santa-joaquina-vedruna",
    "type": "private",
    "address": "CALLE SANTA JOAQUINA DE VEDRUNA 3",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34245837788525,
      "lng": -3.7149239290729055
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5587968",
    "name": "Colegio Villamadrid",
    "slug": "colegio-villamadrid",
    "type": "private",
    "address": "CALLE TRANSVERSAL SEXTA 17",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.33280700850064,
      "lng": -3.6991295415835874
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6062",
    "name": "Colegio Virgen de Atocha",
    "slug": "colegio-virgen-de-atocha",
    "type": "private",
    "address": "AVENIDA CIUDAD DE BARCELONA 1",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40543014980057,
      "lng": -3.683958885055893
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6044",
    "name": "Colegio Virgen de Mirasierra",
    "slug": "colegio-virgen-de-mirasierra",
    "type": "private",
    "address": "CALLE LA MASO 103",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.484058188431476,
      "lng": -3.7141705835340098
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5489",
    "name": "Colegio Virgen del Pilar",
    "slug": "colegio-virgen-del-pilar",
    "type": "private",
    "address": "CALLE MELCHOR FERNANDEZ ALMAGRO 70",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4759852999438,
      "lng": -3.7084577205434606
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado - Integración preferente (Trastornos generales del desarrollo)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5647",
    "name": "Colegio Virgen Milagrosa",
    "slug": "colegio-virgen-milagrosa",
    "type": "private",
    "address": "CALLE MAR DE CORAL 3",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47554292906961,
      "lng": -3.6407014970018707
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5595",
    "name": "Colegio Willoughby  College",
    "slug": "colegio-willoughby-college",
    "type": "private",
    "address": "CALLE MACARENA 37",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46167949350187,
      "lng": -3.6768152567621195
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5424",
    "name": "Colegio Wisdom School Madrid",
    "slug": "colegio-wisdom-school-madrid",
    "type": "private",
    "address": "CALLE JOSE RODRIGUEZ PINILLA 12",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46147537111087,
      "lng": -3.67936088084437
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5661",
    "name": "Colegio Zazuar",
    "slug": "colegio-zazuar",
    "type": "private",
    "address": "CALLE ZAZUAR 17",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38152024091152,
      "lng": -3.608131165636181
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6779",
    "name": "Consejería de Educación, Ciencia y Universidades. Comunidad de Madrid",
    "slug": "consejeria-de-educacion-ciencia-y-universidades-comunidad-de-madrid",
    "type": "private",
    "address": "CALLE ALCALA 32",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.418153836277156,
      "lng": -3.6977846949707227
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6785",
    "name": "Consejería de Educación, Ciencia y Universidades. Dirección del Área Territorial de Madrid Capital",
    "slug": "consejeria-de-educacion-ciencia-y-universidades-direccion-del-area-territorial-de-madrid-capital",
    "type": "public",
    "address": "CALLE VITRUVIO 2",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44189435548132,
      "lng": -3.6899901870279943
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "101755",
    "name": "Conservatorio Profesional de Danza Carmen Amaya",
    "slug": "conservatorio-profesional-de-danza-carmen-amaya",
    "type": "private",
    "address": "AVENIDA FELICIDAD 27",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35970210687039,
      "lng": -3.6890479990084355
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6681",
    "name": "Conservatorio Profesional de Danza Fortea",
    "slug": "conservatorio-profesional-de-danza-fortea",
    "type": "private",
    "address": "PASEO COMANDANTE FORTEA 42",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42754184442827,
      "lng": -3.7324112111503682
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6697",
    "name": "Conservatorio Profesional de Música Adolfo Salazar",
    "slug": "conservatorio-profesional-de-musica-adolfo-salazar",
    "type": "private",
    "address": "CALLE FERRAZ 62",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.428091747176865,
      "lng": -3.7190223615783022
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6672",
    "name": "Conservatorio Profesional de Música Amaniel",
    "slug": "conservatorio-profesional-de-musica-amaniel",
    "type": "private",
    "address": "CALLE AMANIEL 2",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42503902541332,
      "lng": -3.7091208409661056
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6689",
    "name": "Conservatorio Profesional de Música Arturo Soria",
    "slug": "conservatorio-profesional-de-musica-arturo-soria",
    "type": "private",
    "address": "CALLE ARTURO SORIA 140",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45152315200889,
      "lng": -3.6524320603700793
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6693",
    "name": "Conservatorio Profesional de Música Joaquín Turina",
    "slug": "conservatorio-profesional-de-musica-joaquin-turina",
    "type": "private",
    "address": "CALLE CEUTA 18",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.462194445399014,
      "lng": -3.6986526788629326
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6694",
    "name": "Conservatorio Profesional de Música Teresa Berganza",
    "slug": "conservatorio-profesional-de-musica-teresa-berganza",
    "type": "private",
    "address": "CALLE PALMIPEDO 3",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.403539710636096,
      "lng": -3.744974327600288
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "101754",
    "name": "Conservatorio Profesional de Música Victoria de los Ángeles",
    "slug": "conservatorio-profesional-de-musica-victoria-de-los-angeles",
    "type": "private",
    "address": "AVENIDA FELICIDAD 27",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35970210687039,
      "lng": -3.6890479990084355
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4631819",
    "name": "Conservatorio Superior de Danza María de Ávila",
    "slug": "conservatorio-superior-de-danza-maria-de-avila",
    "type": "private",
    "address": "CALLE GENERAL RICARDOS 177",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.385207193828954,
      "lng": -3.7364894865229403
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "124847",
    "name": "Consorcio Urbanístico Ciudad Universitaria",
    "slug": "consorcio-urbanistico-ciudad-universitaria",
    "type": "private",
    "address": "CALLE DONOSO CORTES 63 PLANTA 3",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43639755606272,
      "lng": -3.714774097746383
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6407",
    "name": "CUNEF Universidad",
    "slug": "cunef-universidad",
    "type": "private",
    "address": "CALLE ALMANSA 101",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44904877263805,
      "lng": -3.7147353562188137
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6791",
    "name": "Departamento de Coordinación y Enseñanzas Artísticas",
    "slug": "departamento-de-coordinacion-y-ensenanzas-artisticas",
    "type": "private",
    "address": "PASEO CHOPERA 41",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39415981141737,
      "lng": -3.6990213657093163
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Escuela de Cerámica",
      "Escuelas Municipales de Música y de Danza",
      "Escuela Municipal de Arte Dramático y Centro de Recursos. Coordinación de las Secciones de Educación de los Distritos. Información educativa y atención al Sistema de Sugerencias y Reclamaciones en materia educativa."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11015679",
    "name": "Departamento de Educación Infantil",
    "slug": "departamento-de-educacion-infantil",
    "type": "private",
    "address": "PASEO CHOPERA 41",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39416547587759,
      "lng": -3.6990118855714464
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11749306",
    "name": "Escuela de Animación de la Comunidad de Madrid",
    "slug": "escuela-de-animacion-de-la-comunidad-de-madrid",
    "type": "private",
    "address": " ",
    "city": "MADRID",
    "postalCode": "28001",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42800338506673,
      "lng": -3.6770780820573963
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10325615",
    "name": "Escuela de Arte de Madrid n. 3",
    "slug": "escuela-de-arte-de-madrid-n-3",
    "type": "private",
    "address": "CALLE ESTUDIOS 1",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4121781003121,
      "lng": -3.7073090017047767
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10325662",
    "name": "Escuela de Arte de Madrid n.10",
    "slug": "escuela-de-arte-de-madrid-n-10",
    "type": "private",
    "address": "AVENIDA CIUDAD DE BARCELONA 25",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4042660633821,
      "lng": -3.680470006180471
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "27188",
    "name": "Escuela de Arte Francisco Alcántara Cerámica",
    "slug": "escuela-de-arte-francisco-alcantara-ceramica",
    "type": "private",
    "address": "CALLE FRANCISCO Y JACINTO ALCANTARA 2",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42679841840511,
      "lng": -3.724159779973538
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6674",
    "name": "Escuela de Arte La Palma",
    "slug": "escuela-de-arte-la-palma",
    "type": "private",
    "address": "CALLE PALMA 46",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42656819920333,
      "lng": -3.7059702232791585
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6690",
    "name": "Escuela de Cerámica de la Moncloa",
    "slug": "escuela-de-ceramica-de-la-moncloa",
    "type": "private",
    "address": "CALLE FRANCISCO Y JACINTO ALCÁNTARA 2",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42670719570918,
      "lng": -3.7242795119747836
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Biblioteca - Sala de exposiciones - Salón de actos"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7407746",
    "name": "Escuela de Cine y Televisión de Madrid Séptima Ars",
    "slug": "escuela-de-cine-y-television-de-madrid-septima-ars",
    "type": "private",
    "address": "CALLE FUENTE DEL SAZ 5",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45369269524975,
      "lng": -3.68025132597766
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Diplomaturas y cursos de cine y televisión."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "26410",
    "name": "Escuela de Circo Carampa",
    "slug": "escuela-de-circo-carampa",
    "type": "private",
    "address": "CAMINO ROBLEDAL 2",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41520881876899,
      "lng": -3.745775797036337
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6498",
    "name": "Escuela de Práctica Jurídica",
    "slug": "escuela-de-practica-juridica",
    "type": "private",
    "address": "CALLE AMANIEL 2",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42503902541332,
      "lng": -3.7091208409661056
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190276",
    "name": "Escuela de Tiempo Libre Abancay",
    "slug": "escuela-de-tiempo-libre-abancay",
    "type": "private",
    "address": "CALLE ISLAS CIES 22 PLANTA Bajo C",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48007350796973,
      "lng": -3.7204166989390344
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "39592",
    "name": "Escuela de Tiempo Libre Acaya",
    "slug": "escuela-de-tiempo-libre-acaya",
    "type": "private",
    "address": "CALLE CONSTANCIA 39",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44281542475843,
      "lng": -3.6720509052131023
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10157908",
    "name": "Escuela de Tiempo Libre Acrescere",
    "slug": "escuela-de-tiempo-libre-acrescere",
    "type": "private",
    "address": "AVENIDA OSA MAYOR 19 PLANTA BAJO 1",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45980060324054,
      "lng": -3.778225530036907
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10514755",
    "name": "Escuela de Tiempo Libre Actúa",
    "slug": "escuela-de-tiempo-libre-actua",
    "type": "private",
    "address": "CALLE VALDEBERNARDO 26 entrada por calle Luis de Hoyos Sainz",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40334887230539,
      "lng": -3.6309814393314848
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "18595",
    "name": "Escuela de Tiempo Libre Arci-Nature",
    "slug": "escuela-de-tiempo-libre-arci-nature",
    "type": "private",
    "address": "CALLE TENIENTE MU&amp;Ntilde;OZ DIAZ 5",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39155917920927,
      "lng": -3.6575538754428076
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10157995",
    "name": "Escuela de Tiempo Libre Arpa4",
    "slug": "escuela-de-tiempo-libre-arpa4",
    "type": "private",
    "address": "CALLE ISABEL COLBRAND 10 PLANTA 5 Oficina 151",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.512478924435555,
      "lng": -3.6729334879475197
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4078",
    "name": "Escuela de Tiempo Libre ASDE - Insignia de Madera",
    "slug": "escuela-de-tiempo-libre-asde-insignia-de-madera",
    "type": "private",
    "address": "CALLE HORTALEZA 19 PLANTA 1 Izquierda",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42160426368212,
      "lng": -3.70023413561108
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10514428",
    "name": "Escuela de Tiempo Libre Cáritas de Madrid",
    "slug": "escuela-de-tiempo-libre-caritas-de-madrid",
    "type": "private",
    "address": "CALLE SANTA HORTENSIA 3",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44569990003311,
      "lng": -3.669995163569375
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190219",
    "name": "Escuela de Tiempo Libre Ceam",
    "slug": "escuela-de-tiempo-libre-ceam",
    "type": "private",
    "address": "CALLE CERRO DEL MURMULLO 13 PLANTA 2 Oficina 181",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36515296337739,
      "lng": -3.5831913475529618
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "18568",
    "name": "Escuela de Tiempo Libre Censa",
    "slug": "escuela-de-tiempo-libre-censa",
    "type": "private",
    "address": "CALLE MARQUES DE LA VALDAVIA 2 PLANTA 2",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.406321835178936,
      "lng": -3.6960712522158685
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10157937",
    "name": "Escuela de Tiempo Libre Coeduca",
    "slug": "escuela-de-tiempo-libre-coeduca",
    "type": "private",
    "address": "CALLE VELÁZQUEZ 15 PLANTA 1",
    "city": "MADRID",
    "postalCode": "28001",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42271504443609,
      "lng": -3.684546505007804
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "29398",
    "name": "Escuela de Tiempo Libre Don Bosco",
    "slug": "escuela-de-tiempo-libre-don-bosco",
    "type": "private",
    "address": "CALLE MARÍA AUXILIADORA 9",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45786153389685,
      "lng": -3.7154027564038006
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "18583",
    "name": "Escuela de Tiempo Libre Ealyr",
    "slug": "escuela-de-tiempo-libre-ealyr",
    "type": "private",
    "address": "CALLE MARTIN FIERRO 7",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4381730352489,
      "lng": -3.7325360017630174
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190236",
    "name": "Escuela de Tiempo Libre Educadores de Vallecas",
    "slug": "escuela-de-tiempo-libre-educadores-de-vallecas",
    "type": "private",
    "address": "CALLE JAVIER DE MIGUEL 92 PLANTA 2 local 5",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.385417868312054,
      "lng": -3.656517575126389
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "18584",
    "name": "Escuela de Tiempo Libre Eduma",
    "slug": "escuela-de-tiempo-libre-eduma",
    "type": "private",
    "address": "CALLE ALCÁNTARA 34 PLANTA Bajo H",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42907638399363,
      "lng": -3.6736471220213036
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5901006",
    "name": "Escuela de Tiempo Libre Francisco Giner de los Ríos",
    "slug": "escuela-de-tiempo-libre-francisco-giner-de-los-rios",
    "type": "private",
    "address": "PASEO GENERAL MARTINEZ CAMPOS 14",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43487601670182,
      "lng": -3.696813651958387
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10157571",
    "name": "Escuela de Tiempo Libre Gredos San Diego",
    "slug": "escuela-de-tiempo-libre-gredos-san-diego",
    "type": "private",
    "address": "CALLE JOSE GUTIERREZ MAROTO 26 PLANTA 1 B",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.366173759341564,
      "lng": -3.6033965524479097
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190323",
    "name": "Escuela de Tiempo Libre Ideotur",
    "slug": "escuela-de-tiempo-libre-ideotur",
    "type": "private",
    "address": "CALLE ALCALÁ 104 PLANTA 2 A",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.425216273946305,
      "lng": -3.6743748582296023
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5900953",
    "name": "Escuela de Tiempo Libre ISE-JCMadrid",
    "slug": "escuela-de-tiempo-libre-ise-jcmadrid",
    "type": "private",
    "address": "CALLE OCA&amp;Ntilde;A 14",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38394657080957,
      "lng": -3.754440693962786
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5901083",
    "name": "Escuela de Tiempo Libre Jeímaros",
    "slug": "escuela-de-tiempo-libre-jeimaros",
    "type": "private",
    "address": "CALLE ALMANSA 15 PLANTA 1 D",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44867322998196,
      "lng": -3.7049986432731816
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "18578",
    "name": "Escuela de Tiempo Libre La escalera",
    "slug": "escuela-de-tiempo-libre-la-escalera",
    "type": "private",
    "address": "CALLE FERNANDO EL CATOLICO 64",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43440052066234,
      "lng": -3.7141923339391005
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10157414",
    "name": "Escuela de Tiempo Libre La Frontera",
    "slug": "escuela-de-tiempo-libre-la-frontera",
    "type": "private",
    "address": "PLAZA TUBILLA 7 -8 posterior",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4903595458152,
      "lng": -3.685024432907573
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5900366",
    "name": "Escuela de Tiempo Libre Masi",
    "slug": "escuela-de-tiempo-libre-masi",
    "type": "private",
    "address": "CALLE VIA CARPETANA 180 LOCAL",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39745929209353,
      "lng": -3.7366542045503848
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23510",
    "name": "Escuela de Tiempo Libre Nuestra Señora del Recuerdo",
    "slug": "escuela-de-tiempo-libre-nuestra-senora-del-recuerdo",
    "type": "private",
    "address": "PLAZA DUQUE DE PASTRANA 5",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46856646277293,
      "lng": -3.677651132076904
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190305",
    "name": "Escuela de Tiempo Libre Padre Carlos",
    "slug": "escuela-de-tiempo-libre-padre-carlos",
    "type": "private",
    "address": "CALLE VIRGEN DEL VAL 1",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4359209332249,
      "lng": -3.6552399988846247
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190388",
    "name": "Escuela de Tiempo Libre Peñas Blancas",
    "slug": "escuela-de-tiempo-libre-penas-blancas",
    "type": "private",
    "address": "AVENIDA PORTUGAL 99 Local izquierda",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41633059885888,
      "lng": -3.7239914257003304
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10514654",
    "name": "Escuela de Tiempo Libre Santa Bárbara",
    "slug": "escuela-de-tiempo-libre-santa-barbara",
    "type": "private",
    "address": "PLAZA PAJA 4",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4126788002407,
      "lng": -3.7114352987414594
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "18572",
    "name": "Escuela de Tiempo Libre Scouts de Madrid MSC",
    "slug": "escuela-de-tiempo-libre-scouts-de-madrid-msc",
    "type": "private",
    "address": "CALLE ENTRE ARROYOS 19 BIS",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408610350006086,
      "lng": -3.6545298027540856
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11452218",
    "name": "Escuela de Tiempo Libre Shema",
    "slug": "escuela-de-tiempo-libre-shema",
    "type": "private",
    "address": "CALLE GENERAL RICARDOS 21 PLANTA Bajo C",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39638652905026,
      "lng": -3.7179281259542187
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "29408",
    "name": "Escuela de Tiempo Libre Tangente",
    "slug": "escuela-de-tiempo-libre-tangente",
    "type": "private",
    "address": "PASEO ACACIAS 3",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.404560457190534,
      "lng": -3.7036681171752335
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5901381",
    "name": "Escuela de Tiempo Libre YMCA",
    "slug": "escuela-de-tiempo-libre-ymca",
    "type": "private",
    "address": "CALLE ALBA DE TORMES 10",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37784401632526,
      "lng": -3.743841160925042
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6825",
    "name": "Escuela Diplomática",
    "slug": "escuela-diplomatica",
    "type": "private",
    "address": "PASEO JUAN XXIII 5",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44611945342036,
      "lng": -3.7189847319401963
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10649679",
    "name": "Escuela Infantil  Alaria Aravaca Nursery School",
    "slug": "escuela-infantil-alaria-aravaca-nursery-school",
    "type": "private",
    "address": "CALLE BARRIAL 7",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4629920353333,
      "lng": -3.7933309478248125
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10513108",
    "name": "Escuela Infantil  Alaria Serrano Nursery School",
    "slug": "escuela-infantil-alaria-serrano-nursery-school",
    "type": "private",
    "address": "CALLE SERRANO 212",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45130099284814,
      "lng": -3.6814401125394323
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10683740",
    "name": "Escuela Infantil  Allegra",
    "slug": "escuela-infantil-allegra",
    "type": "private",
    "address": "CALLE HIDRA 3",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45635178594441,
      "lng": -3.7728559783314006
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5247718",
    "name": "Escuela Infantil  Arco Iris",
    "slug": "escuela-infantil-arco-iris",
    "type": "private",
    "address": "CALLE DIEGO OLIVERA VICTORIO 10",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38343761825996,
      "lng": -3.6135441899036356
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10513260",
    "name": "Escuela Infantil  Aula Segre 3",
    "slug": "escuela-infantil-aula-segre-3",
    "type": "private",
    "address": "CALLE SEGRE 3",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45034689337473,
      "lng": -3.682822029314316
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62522",
    "name": "Escuela Infantil  Bambi",
    "slug": "escuela-infantil-bambi",
    "type": "private",
    "address": "PASEO GINEBRA 51",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42344987538248,
      "lng": -3.600987763312516
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11020690",
    "name": "Escuela Infantil  Barcos de Papel",
    "slug": "escuela-infantil-barcos-de-papel",
    "type": "private",
    "address": "CALLE JOSE ESCOBAR Y SALIENTE 41",
    "city": "MADRID",
    "postalCode": "28052",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40381287104927,
      "lng": -3.56395523629787
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10892480",
    "name": "Escuela Infantil  Bliss Nursery School",
    "slug": "escuela-infantil-bliss-nursery-school",
    "type": "private",
    "address": "CALLE MARIA DE MAEZTU 52",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49065507242019,
      "lng": -3.7276477723544272
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399592",
    "name": "Escuela Infantil  Chiquitin Pinar de Chamartin",
    "slug": "escuela-infantil-chiquitin-pinar-de-chamartin",
    "type": "private",
    "address": "CALLE GOLFO DE SALONICA 73",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48156703572108,
      "lng": -3.661995723175118
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10683482",
    "name": "Escuela Infantil  Colegio Internacional Arturo Soria Nursery School",
    "slug": "escuela-infantil-colegio-internacional-arturo-soria-nursery-school",
    "type": "private",
    "address": "CALLE LIDO 17",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45646430435577,
      "lng": -3.652945124699595
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10513570",
    "name": "Escuela Infantil  Cuentacuentos 2",
    "slug": "escuela-infantil-cuentacuentos-2",
    "type": "private",
    "address": "CALLE LA CENICIENTA 13",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.379440741542794,
      "lng": -3.6572370611305236
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10389300",
    "name": "Escuela Infantil  Duendecillos Lets Play",
    "slug": "escuela-infantil-duendecillos-lets-play",
    "type": "private",
    "address": "CALLE RAVENA 3",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41790210401758,
      "lng": -3.6194207135879664
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5145458",
    "name": "Escuela Infantil  El Tren de la Fresa",
    "slug": "escuela-infantil-el-tren-de-la-fresa",
    "type": "private",
    "address": "CALLE RAMIREZ DE PRADO 6",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39924356726499,
      "lng": -3.6880677759300298
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11047409",
    "name": "Escuela Infantil  Estrella Infantil III",
    "slug": "escuela-infantil-estrella-infantil-iii",
    "type": "private",
    "address": "CALLE RAFAEL SALAZAR ALONSO (locales 19-22) 17",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41542140804669,
      "lng": -3.6677749076720123
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10389462",
    "name": "Escuela Infantil  La Isla",
    "slug": "escuela-infantil-la-isla",
    "type": "private",
    "address": "CALLE AZUL 25",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.501146052663664,
      "lng": -3.6662479537293393
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10914277",
    "name": "Escuela Infantil  Little Artists",
    "slug": "escuela-infantil-little-artists",
    "type": "private",
    "address": "CALLE ESCUELA DE VALLECAS 12",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36015438660208,
      "lng": -3.5884995724080797
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10573098",
    "name": "Escuela Infantil  Lysmon. Clara del Rey",
    "slug": "escuela-infantil-lysmon-clara-del-rey",
    "type": "private",
    "address": "CALLE CORAZON DE MARIA 64",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44617545060558,
      "lng": -3.665881721908824
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10494524",
    "name": "Escuela Infantil  Montessori Village Piovera",
    "slug": "escuela-infantil-montessori-village-piovera",
    "type": "private",
    "address": "CALLE SOTILLO 1",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.455542640327195,
      "lng": -3.6375040672642798
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10546451",
    "name": "Escuela Infantil  My Little Planet Nursery School",
    "slug": "escuela-infantil-my-little-planet-nursery-school",
    "type": "private",
    "address": "CALLE AZOFRA 1",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.500410052398365,
      "lng": -3.6719998539222103
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10970537",
    "name": "Escuela Infantil  Nemomarlin Barajas",
    "slug": "escuela-infantil-nemomarlin-barajas",
    "type": "private",
    "address": "CALLE PLAYA DE ARO (locales 1 y 2) 5",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.472447912939614,
      "lng": -3.5900572935930564
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62217",
    "name": "Escuela Infantil  Nido (Alemán)",
    "slug": "escuela-infantil-nido-aleman",
    "type": "private",
    "address": "CALLE LUIS MURIEL 6",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.448748447116756,
      "lng": -3.688029952012335
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10791922",
    "name": "Escuela Infantil  Patuco 2",
    "slug": "escuela-infantil-patuco-2",
    "type": "private",
    "address": "CALLE CASTILLEJOS 26",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4561441526898,
      "lng": -3.7069131514987985
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10756497",
    "name": "Escuela Infantil  Pequeños Gigantes",
    "slug": "escuela-infantil-pequenos-gigantes",
    "type": "private",
    "address": "AVENIDA SANTUARIO DE VALVERDE 54",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50524793960263,
      "lng": -3.6977819551490927
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399221",
    "name": "Escuela Infantil  Peques",
    "slug": "escuela-infantil-peques",
    "type": "private",
    "address": "CALLE MONTES DE BARBANZA 5",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37797688217212,
      "lng": -3.618842875177412
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10683731",
    "name": "Escuela Infantil  Piecitos",
    "slug": "escuela-infantil-piecitos",
    "type": "private",
    "address": "CALLE JACOBEO 46",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.365993782322256,
      "lng": -3.761457040803996
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10124515",
    "name": "Escuela Infantil  Pizcas",
    "slug": "escuela-infantil-pizcas",
    "type": "private",
    "address": "CALLE GENERAL CABRERA 23",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45560061666907,
      "lng": -3.6961667681219743
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10683504",
    "name": "Escuela Infantil  Planeta Enano Niño Jesús",
    "slug": "escuela-infantil-planeta-enano-nino-jesus",
    "type": "private",
    "address": "AVENIDA MENENDEZ PELAYO 65",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.413865110086746,
      "lng": -3.67697406298161
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "54291",
    "name": "Escuela Infantil  Ramón y Cajal. Calle López de Hoyos",
    "slug": "escuela-infantil-ramon-y-cajal-calle-lopez-de-hoyos",
    "type": "private",
    "address": "CALLE LOPEZ DE HOYOS 386",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46132384331896,
      "lng": -3.658848269617723
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10683657",
    "name": "Escuela Infantil  Santander España",
    "slug": "escuela-infantil-santander-espana",
    "type": "private",
    "address": "CALLE JUAN IGNACIO LUCA DE TENA 11",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44760856398811,
      "lng": -3.6336937458845746
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10620238",
    "name": "Escuela Infantil  Valdebebitos",
    "slug": "escuela-infantil-valdebebitos",
    "type": "private",
    "address": "AVENIDA MANUEL FRAGA IRIBARNE 35",
    "city": "MADRID",
    "postalCode": "28055",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.488312453806834,
      "lng": -3.608781503074549
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4890144",
    "name": "Escuela Infantil  Vickie",
    "slug": "escuela-infantil-vickie",
    "type": "private",
    "address": "CALLE FRANCISCO LAGUNA 17",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39090226650377,
      "lng": -3.671016132630909
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134214",
    "name": "Escuela Infantil  Yaki",
    "slug": "escuela-infantil-yaki",
    "type": "private",
    "address": "AVENIDA RAMON Y CAJAL 49",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.452481011972715,
      "lng": -3.670684832902975
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6451110",
    "name": "Escuela Infantil ABC Go Nurseries Julián Camarillo",
    "slug": "escuela-infantil-abc-go-nurseries-julian-camarillo",
    "type": "private",
    "address": "CALLE ALFONSO GOMEZ 30",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43624657976726,
      "lng": -3.6273942709340155
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7076050",
    "name": "Escuela Infantil Acuarela",
    "slug": "escuela-infantil-acuarela",
    "type": "private",
    "address": "CALLE VILLA DE MARIN 29",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47726519062436,
      "lng": -3.699481453108662
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5360",
    "name": "Escuela Infantil Adela Abrines Castaños",
    "slug": "escuela-infantil-adela-abrines-castanos",
    "type": "private",
    "address": "CALLE GARROVILLAS 4",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37993443901293,
      "lng": -3.7793588343310573
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5361",
    "name": "Escuela Infantil Agarimo",
    "slug": "escuela-infantil-agarimo",
    "type": "private",
    "address": "CALLE FERNANDO EL CATOLICO 61",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43426126799022,
      "lng": -3.714869605740796
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7251628",
    "name": "Escuela Infantil Airbus Astrium Barajas",
    "slug": "escuela-infantil-airbus-astrium-barajas",
    "type": "private",
    "address": "AVENIDA ARAGON 404",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44715176424567,
      "lng": -3.539053333504962
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7519017",
    "name": "Escuela Infantil Alaria Bernabéu Nursery School",
    "slug": "escuela-infantil-alaria-bernabeu-nursery-school",
    "type": "private",
    "address": "CALLE JARAMA 9",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44993809814557,
      "lng": -3.6833957370086017
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6021",
    "name": "Escuela Infantil Albeniz 2",
    "slug": "escuela-infantil-albeniz-2",
    "type": "private",
    "address": "CALLE OCAÑA 112",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.387341073241586,
      "lng": -3.7519690451709304
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6151244",
    "name": "Escuela Infantil Alcalá 540",
    "slug": "escuela-infantil-alcala-540",
    "type": "private",
    "address": "CALLE ALCALA 540",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44272188062744,
      "lng": -3.6194480265117797
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5894",
    "name": "Escuela Infantil Alegre Koala",
    "slug": "escuela-infantil-alegre-koala",
    "type": "private",
    "address": "CALLE ARGANDA 32",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39961608260654,
      "lng": -3.7069612717319256
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "106070",
    "name": "Escuela Infantil Alemana Kinderparadies",
    "slug": "escuela-infantil-alemana-kinderparadies",
    "type": "private",
    "address": "CALLE PEÑA PINTADA 13",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.491937655840786,
      "lng": -3.7029614172216725
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5061",
    "name": "Escuela Infantil Alfar",
    "slug": "escuela-infantil-alfar",
    "type": "private",
    "address": "CALLE GERARDO DIEGO 15",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38499222389349,
      "lng": -3.644095805861491
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5094142",
    "name": "Escuela Infantil Alfonso X",
    "slug": "escuela-infantil-alfonso-x",
    "type": "private",
    "address": "CALLE DARIO GAZAPO 8",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39108798705391,
      "lng": -3.779310666802355
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5370",
    "name": "Escuela Infantil Alfredo López",
    "slug": "escuela-infantil-alfredo-lopez",
    "type": "private",
    "address": "CALLE VILLAESCUSA 50",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.420759201048,
      "lng": -3.6308573987647765
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "104515",
    "name": "Escuela Infantil Alicia",
    "slug": "escuela-infantil-alicia",
    "type": "private",
    "address": "CALLE FERRAZ 60",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42793901360149,
      "lng": -3.7188934091365997
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5301107",
    "name": "Escuela Infantil Alicia II",
    "slug": "escuela-infantil-alicia-ii",
    "type": "private",
    "address": "CALLE BENITO GUTIERREZ 27",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43122092509477,
      "lng": -3.719918673561681
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161607",
    "name": "Escuela Infantil Alzando el Vuelo",
    "slug": "escuela-infantil-alzando-el-vuelo",
    "type": "private",
    "address": "CALLE MONASTERIO DE EL PAULAR 79",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50372590019524,
      "lng": -3.7007240367136522
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "73981",
    "name": "Escuela Infantil Amadeo Vives",
    "slug": "escuela-infantil-amadeo-vives",
    "type": "private",
    "address": "CALLE YEBENES 6 UBICADA EN C. P. AMADEO VIVES",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39743593771221,
      "lng": -3.755392529137971
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "53866",
    "name": "Escuela Infantil Andal",
    "slug": "escuela-infantil-andal",
    "type": "private",
    "address": "CALLE ANTONIO DIAZ-CAÑABATE 18",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408487217027755,
      "lng": -3.672699299598766
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5539",
    "name": "Escuela Infantil Andal Alameda",
    "slug": "escuela-infantil-andal-alameda",
    "type": "private",
    "address": "PLAZA NAVIO 1",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45585643123747,
      "lng": -3.588527287437995
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4689857",
    "name": "Escuela Infantil Andal I",
    "slug": "escuela-infantil-andal-i",
    "type": "private",
    "address": "CALLE FRANCISCO VITORIA 4",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4082543166119,
      "lng": -3.674016955095668
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4689826",
    "name": "Escuela Infantil Andal II",
    "slug": "escuela-infantil-andal-ii",
    "type": "private",
    "address": "CALLE FRANCISCO VITORIA 21",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40763257078574,
      "lng": -3.6724904388404997
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5928",
    "name": "Escuela Infantil Angelitos de Nerey",
    "slug": "escuela-infantil-angelitos-de-nerey",
    "type": "private",
    "address": "CALLE JOSE LUIS DE ARRESE 38",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.421878912599716,
      "lng": -3.6515084294692732
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "166144",
    "name": "Escuela Infantil Arce",
    "slug": "escuela-infantil-arce",
    "type": "private",
    "address": "CALLE ALCALDE GARRIDO JUARISTI 6",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41419316593839,
      "lng": -3.6564671423272745
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5382722",
    "name": "Escuela Infantil Arco  Iris",
    "slug": "escuela-infantil-arco-iris",
    "type": "private",
    "address": "PLAZA CORREGIDOR SANCHO DE CORDOBA 3",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40796971271473,
      "lng": -3.6529653198967313
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4940671",
    "name": "Escuela Infantil Arienbaby",
    "slug": "escuela-infantil-arienbaby",
    "type": "private",
    "address": "CALLE CAROLINA PAINO 24",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38509596901069,
      "lng": -3.742495380072752
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5380",
    "name": "Escuela Infantil Arlequín",
    "slug": "escuela-infantil-arlequin",
    "type": "private",
    "address": "CALLE YEBENES 69",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.394320372237445,
      "lng": -3.7523883891443006
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "103611",
    "name": "Escuela Infantil Armonía",
    "slug": "escuela-infantil-armonia",
    "type": "private",
    "address": "CALLE ISLA DE CUBA 12",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45095350064064,
      "lng": -3.611480803826205
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "54309",
    "name": "Escuela Infantil A.E.I.O.U.",
    "slug": "escuela-infantil-a-e-i-o-u",
    "type": "private",
    "address": "CALLE YEBENES 92",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3925125534526,
      "lng": -3.753310884195862
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5360777",
    "name": "Escuela Infantil Babilín II",
    "slug": "escuela-infantil-babilin-ii",
    "type": "private",
    "address": "CALLE ALMAZAN 2",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.405465310476956,
      "lng": -3.7425188225366766
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5953",
    "name": "Escuela Infantil Bambi",
    "slug": "escuela-infantil-bambi",
    "type": "private",
    "address": "CALLE SULFATO 9",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34711079711755,
      "lng": -3.7143254356313946
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23111",
    "name": "Escuela Infantil Bambi y Tambor",
    "slug": "escuela-infantil-bambi-y-tambor",
    "type": "private",
    "address": "CALLE LITUANIA 2",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.409195233667155,
      "lng": -3.6624174748253324
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "104310",
    "name": "Escuela Infantil Bambinos",
    "slug": "escuela-infantil-bambinos",
    "type": "private",
    "address": "CALLE CONCEJAL FRANCISCO JOSE JIMENEZ MARTIN 142",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40030306875576,
      "lng": -3.7495089746709622
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23134",
    "name": "Escuela Infantil Bambis",
    "slug": "escuela-infantil-bambis",
    "type": "private",
    "address": "CALLE PICO DE MONTANCHEZ 12",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37790542679262,
      "lng": -3.6204089900633116
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5874",
    "name": "Escuela Infantil Bamby. Calle Mingorria",
    "slug": "escuela-infantil-bamby-calle-mingorria",
    "type": "private",
    "address": "CALLE MINGORRIA 16",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.393178748388046,
      "lng": -3.7805483995909515
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5391793",
    "name": "Escuela Infantil Benjamines",
    "slug": "escuela-infantil-benjamines",
    "type": "private",
    "address": "PLAZA PLATON 1",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44233465735811,
      "lng": -3.652177539229519
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5247775",
    "name": "Escuela Infantil Bërbel Inhelder",
    "slug": "escuela-infantil-berbel-inhelder",
    "type": "private",
    "address": "CALLE ERASMO DE ROTTERDAM 6",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.548576667037935,
      "lng": -3.6947166980078596
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5391709",
    "name": "Escuela Infantil Betaria",
    "slug": "escuela-infantil-betaria",
    "type": "private",
    "address": "CALLE PADRE RUBIO 14",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.470400131156026,
      "lng": -3.6920375063785813
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178919",
    "name": "Escuela Infantil Bichejos-Sanchinarro",
    "slug": "escuela-infantil-bichejos-sanchinarro",
    "type": "private",
    "address": "CALLE OÑA 137",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48793091495856,
      "lng": -3.661373884161226
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134164",
    "name": "Escuela Infantil Blancanitos 2",
    "slug": "escuela-infantil-blancanitos-2",
    "type": "private",
    "address": "CALLE NAVES 13",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39883024075779,
      "lng": -3.7068732805507416
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5114461",
    "name": "Escuela Infantil Bolboreta",
    "slug": "escuela-infantil-bolboreta",
    "type": "private",
    "address": "CALLE HALCON 30",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38785028206181,
      "lng": -3.742879083810638
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6001",
    "name": "Escuela Infantil Borja",
    "slug": "escuela-infantil-borja",
    "type": "private",
    "address": "RONDA SUR 239",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37560841079334,
      "lng": -3.6610046982580506
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6165523",
    "name": "Escuela Infantil Brains Madrid",
    "slug": "escuela-infantil-brains-madrid",
    "type": "private",
    "address": "AVENIDA TOREROS 9",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43203330251085,
      "lng": -3.670210475227037
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10494393",
    "name": "Escuela Infantil Británica  Dallington Infants",
    "slug": "escuela-infantil-britanica-dallington-infants",
    "type": "private",
    "address": "RONDA SOBRADIEL 20",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45209551419661,
      "lng": -3.6417877842979554
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "174538",
    "name": "Escuela Infantil Buen Bebé",
    "slug": "escuela-infantil-buen-bebe",
    "type": "private",
    "address": "CALLE PIO BAROJA 2",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4152231418074,
      "lng": -3.674734758227552
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5353",
    "name": "Escuela Infantil Buen Consejo",
    "slug": "escuela-infantil-buen-consejo",
    "type": "private",
    "address": "CALLE HIENDELAENCINA 10 COLONIA CAMARINES",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45864003177543,
      "lng": -3.7668103979030385
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6151194",
    "name": "Escuela Infantil B.B. VIP",
    "slug": "escuela-infantil-b-b-vip",
    "type": "private",
    "address": "CALLE GUETARIA 73- 85 (Locales 3 y 4) ",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.366446972075586,
      "lng": -3.7153657815500103
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10968046",
    "name": "Escuela Infantil B.R.A. Institucion Orgaz",
    "slug": "escuela-infantil-b-r-a-institucion-orgaz",
    "type": "private",
    "address": "CALLE FRASCUELO 2",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45444784463797,
      "lng": -3.6453366825114863
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4693125",
    "name": "Escuela Infantil Cadi Centro de Atención y Desarrollo Infantil",
    "slug": "escuela-infantil-cadi-centro-de-atencion-y-desarrollo-infantil",
    "type": "private",
    "address": "AVENIDA SANTUARIO DE VALVERDE 11",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50579344149904,
      "lng": -3.707378577201484
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4725170",
    "name": "Escuela Infantil Calasanz",
    "slug": "escuela-infantil-calasanz",
    "type": "private",
    "address": "CALLE MADRE ROSA BLANCO 5",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37171180452952,
      "lng": -3.7015574482227978
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5973",
    "name": "Escuela Infantil Can - Ta - Chimutri (Sol y Luna)",
    "slug": "escuela-infantil-can-ta-chimutri-sol-y-luna",
    "type": "private",
    "address": "CALLE RUPERTO ANDRES 6",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46754013448187,
      "lng": -3.723609179087372
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178421",
    "name": "Escuela Infantil Cangurito",
    "slug": "escuela-infantil-cangurito",
    "type": "private",
    "address": "CALLE GENERAL ARANAZ 65",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44510718032162,
      "lng": -3.641308591927001
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134258",
    "name": "Escuela Infantil Caperucita",
    "slug": "escuela-infantil-caperucita",
    "type": "private",
    "address": "CALLE ISLA DE NELSON 12",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.465124811816324,
      "lng": -3.72298240536992
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "179730",
    "name": "Escuela Infantil Caracol 2000",
    "slug": "escuela-infantil-caracol-2000",
    "type": "private",
    "address": "CALLE JULIAN CAMARILLO 52",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43826226446441,
      "lng": -3.617791761192481
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5784844",
    "name": "Escuela Infantil Caracola",
    "slug": "escuela-infantil-caracola",
    "type": "private",
    "address": "PASEO TIERRA DE MELIDE 28",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.507037862571295,
      "lng": -3.663119507661412
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5102856",
    "name": "Escuela Infantil Carana Valdemarín",
    "slug": "escuela-infantil-carana-valdemarin",
    "type": "private",
    "address": "CALLE CARLOS SAN JOSE 7",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46575530116354,
      "lng": -3.781871585924663
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5055",
    "name": "Escuela Infantil Carricoche",
    "slug": "escuela-infantil-carricoche",
    "type": "private",
    "address": "CALLE MOREJA 1",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.368128840184994,
      "lng": -3.698139870391324
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5451",
    "name": "Escuela Infantil Carrusel",
    "slug": "escuela-infantil-carrusel",
    "type": "private",
    "address": "CALLE LUIS DE SALAZAR 3",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44773694661014,
      "lng": -3.666934862729459
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62444",
    "name": "Escuela Infantil Cascabel",
    "slug": "escuela-infantil-cascabel",
    "type": "private",
    "address": "CALLE CONDADO DE TREVIÑO 35",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.480698522143776,
      "lng": -3.668889109311785
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4666369",
    "name": "Escuela Infantil Casita  Maravillas",
    "slug": "escuela-infantil-casita-maravillas",
    "type": "private",
    "address": "CALLE HIERRO 6",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.390792114910155,
      "lng": -3.691245484883511
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8158558",
    "name": "Escuela Infantil Casita Maravillas Nebulosas",
    "slug": "escuela-infantil-casita-maravillas-nebulosas",
    "type": "private",
    "address": "CALLE NEBULOSAS 10",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39478248963883,
      "lng": -3.6853004598120984
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5639",
    "name": "Escuela Infantil Catalina Laboure",
    "slug": "escuela-infantil-catalina-laboure",
    "type": "private",
    "address": "CALLE MARROQUINA 45",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408446072797005,
      "lng": -3.648361782249456
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4702887",
    "name": "Escuela Infantil Centro de Primer Ciclo de E.I. de la Univ. Complutense",
    "slug": "escuela-infantil-centro-de-primer-ciclo-de-e-i-de-la-univ-complutense",
    "type": "private",
    "address": "AVENIDA PUERTA DE HIERRO",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44742985473592,
      "lng": -3.7353862214813316
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62367",
    "name": "Escuela Infantil Cervantes Baby",
    "slug": "escuela-infantil-cervantes-baby",
    "type": "private",
    "address": "CALLE AVEFRIA 20",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.384202041554616,
      "lng": -3.7300798906793258
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190711",
    "name": "Escuela Infantil Chamberines",
    "slug": "escuela-infantil-chamberines",
    "type": "private",
    "address": "CALLE GARCIA DE PAREDES 14",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43685480495305,
      "lng": -3.7018096586040827
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5044",
    "name": "Escuela Infantil Chavalitos",
    "slug": "escuela-infantil-chavalitos",
    "type": "private",
    "address": "CALLE PRADALES 8",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40309528968897,
      "lng": -3.748208289437695
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5548",
    "name": "Escuela Infantil Chiqui",
    "slug": "escuela-infantil-chiqui",
    "type": "private",
    "address": "CALLE FERNANDO EL CATOLICO 13",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43379239446997,
      "lng": -3.707613833815629
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "180949",
    "name": "Escuela Infantil Chiqui Moratalaz.",
    "slug": "escuela-infantil-chiqui-moratalaz",
    "type": "private",
    "address": "CALLE JOSE DEL PRADO Y PALACIO 3",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40978458361225,
      "lng": -3.653843221008169
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "180946",
    "name": "Escuela Infantil Chiquikid",
    "slug": "escuela-infantil-chiquikid",
    "type": "private",
    "address": "CALLE MOLINOS 13",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45809079794467,
      "lng": -3.702997714197868
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4724285",
    "name": "Escuela Infantil Chiquitin Alcántara",
    "slug": "escuela-infantil-chiquitin-alcantara",
    "type": "private",
    "address": "CALLE ALCANTARA 52",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43056354336714,
      "lng": -3.6735322784053857
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5299892",
    "name": "Escuela Infantil Chiquitin Embajadores",
    "slug": "escuela-infantil-chiquitin-embajadores",
    "type": "private",
    "address": "CALLE SEBASTIAN ELCANO (Local) 16",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4045907367003,
      "lng": -3.69928246467361
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4724287",
    "name": "Escuela Infantil Chiquitín Nuevo Sur",
    "slug": "escuela-infantil-chiquitin-nuevo-sur",
    "type": "private",
    "address": "CALLE SITIO DE EL ESCORIAL 4",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3721538861132,
      "lng": -3.761282422912957
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "180958",
    "name": "Escuela Infantil Chiquitín Olimpio. Calle Olimpio López",
    "slug": "escuela-infantil-chiquitin-olimpio-calle-olimpio-lopez",
    "type": "private",
    "address": "CALLE OLIMPIO LOPEZ 10",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.468334207012845,
      "lng": -3.6522520388816133
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6802335",
    "name": "Escuela Infantil Chulapos",
    "slug": "escuela-infantil-chulapos",
    "type": "private",
    "address": "AVENIDA GRAN VIA DEL SURESTE 14",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36463015510953,
      "lng": -3.5885811272296375
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167564",
    "name": "Escuela Infantil Chuly",
    "slug": "escuela-infantil-chuly",
    "type": "private",
    "address": "CALLE NAVES 21",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39948693077921,
      "lng": -3.7059818534223012
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5391701",
    "name": "Escuela Infantil Chupetines",
    "slug": "escuela-infantil-chupetines",
    "type": "private",
    "address": "CALLE ANTONIA RODRIGUEZ SACRISTAN 13",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37311125879333,
      "lng": -3.7470991085098926
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134510",
    "name": "Escuela Infantil Cinco Estrellas",
    "slug": "escuela-infantil-cinco-estrellas",
    "type": "private",
    "address": "AVENIDA CANILLEJAS A VICALVARO 24",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44024935618107,
      "lng": -3.6151451641880876
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5114562",
    "name": "Escuela Infantil Ciudad Jardín",
    "slug": "escuela-infantil-ciudad-jardin",
    "type": "private",
    "address": "CALLE COLOMBIA 42",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.456816072250916,
      "lng": -3.6703859136466317
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5391687",
    "name": "Escuela Infantil Coco",
    "slug": "escuela-infantil-coco",
    "type": "private",
    "address": "CALLE MONSEÑOR OSCAR ROMERO 72",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38268180414603,
      "lng": -3.746651126405099
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "174530",
    "name": "Escuela Infantil Cocolankids",
    "slug": "escuela-infantil-cocolankids",
    "type": "private",
    "address": "PASEO DOCTOR VALLEJO NAGERA 25",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40193053525526,
      "lng": -3.7085763736389645
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4735838",
    "name": "Escuela Infantil Cocorico",
    "slug": "escuela-infantil-cocorico",
    "type": "private",
    "address": "CALLE CLARA DEL REY 8",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44129497691426,
      "lng": -3.6716938167924216
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5196287",
    "name": "Escuela Infantil Colegio Hispano Alemán",
    "slug": "escuela-infantil-colegio-hispano-aleman",
    "type": "private",
    "address": "CALLE ARGA 13",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.449248036689546,
      "lng": -3.6812542787073825
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4689875",
    "name": "Escuela Infantil Colores Saltarines",
    "slug": "escuela-infantil-colores-saltarines",
    "type": "private",
    "address": "CALLE VALLE DE ORO 10",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38802401144611,
      "lng": -3.72974413799101
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5227",
    "name": "Escuela Infantil Colorín Colorado",
    "slug": "escuela-infantil-colorin-colorado",
    "type": "private",
    "address": "CALLE CONDE DE TORRALBA 8",
    "city": "MADRID",
    "postalCode": "28046",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47840775764083,
      "lng": -3.6846989468583673
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6799707",
    "name": "Escuela Infantil Colorines",
    "slug": "escuela-infantil-colorines",
    "type": "private",
    "address": "CALLE FLORA TRISTAN 4",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35653636023506,
      "lng": -3.6857138787275723
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5711521",
    "name": "Escuela Infantil Colors",
    "slug": "escuela-infantil-colors",
    "type": "private",
    "address": "CALLE CONSENSO 25",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.357993727889294,
      "lng": -3.6860701684558643
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5975",
    "name": "Escuela Infantil Comendadoras de Santiago",
    "slug": "escuela-infantil-comendadoras-de-santiago",
    "type": "private",
    "address": "PLAZA COMENDADORAS 10",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4273968151307,
      "lng": -3.708949668437218
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5500",
    "name": "Escuela Infantil Conde de Elda",
    "slug": "escuela-infantil-conde-de-elda",
    "type": "private",
    "address": "CALLE PONFERRADA 16",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47467208571966,
      "lng": -3.712513909298784
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5035282",
    "name": "Escuela Infantil Congreso de los Diputados",
    "slug": "escuela-infantil-congreso-de-los-diputados",
    "type": "private",
    "address": "CARRERA SAN JERONIMO 36",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.416335424330754,
      "lng": -3.698307864142379
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181003",
    "name": "Escuela Infantil Contumami la Vaguada",
    "slug": "escuela-infantil-contumami-la-vaguada",
    "type": "private",
    "address": "PLAZA FONSAGRADA 10",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47805809225937,
      "lng": -3.7083379372214047
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134169",
    "name": "Escuela Infantil Cosquillas II",
    "slug": "escuela-infantil-cosquillas-ii",
    "type": "private",
    "address": "CALLE TENIENTE CORONEL NOREÑA 26",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38829313324962,
      "lng": -3.6933289122764474
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161671",
    "name": "Escuela Infantil Creativa La Gavia",
    "slug": "escuela-infantil-creativa-la-gavia",
    "type": "private",
    "address": "CALLE ENTREPE&amp;Ntilde;AS 27",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37110076643437,
      "lng": -3.605634570890115
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6009",
    "name": "Escuela Infantil Cri - Cri",
    "slug": "escuela-infantil-cri-cri",
    "type": "private",
    "address": "CALLE CORREGIDOR JUAN FRANCISCO DE LUJAN 21",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4028525301185,
      "lng": -3.6481666967045276
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5335",
    "name": "Escuela Infantil CSIC (Consejo Superior de Investigaciones Científicas)",
    "slug": "escuela-infantil-csic-consejo-superior-de-investigaciones-cientificas",
    "type": "private",
    "address": "CALLE JORGE MANRIQUE 27",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44318816255785,
      "lng": -3.686805888254794
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5236150",
    "name": "Escuela Infantil Cuartel General del Ejército del Aire",
    "slug": "escuela-infantil-cuartel-general-del-ejercito-del-aire",
    "type": "private",
    "address": "CALLE ROMERO ROBLEDO 8",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.432593580178384,
      "lng": -3.719390985599627
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5388944",
    "name": "Escuela Infantil Cuatro Pecas",
    "slug": "escuela-infantil-cuatro-pecas",
    "type": "private",
    "address": "RONDA SEGOVIA 13",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4120460771076,
      "lng": -3.717604567755335
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5885",
    "name": "Escuela Infantil Cuatro Pecas El Carmen",
    "slug": "escuela-infantil-cuatro-pecas-el-carmen",
    "type": "private",
    "address": "CALLE CAPITAN SALAZAR MARTINEZ 9",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40818271176574,
      "lng": -3.712990774723932
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5784991",
    "name": "Escuela Infantil Cuchitos",
    "slug": "escuela-infantil-cuchitos",
    "type": "private",
    "address": "CALLE GENERAL DIAZ PORLIER 99",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.434807286078666,
      "lng": -3.676533942680635
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178882",
    "name": "Escuela Infantil Cucutrás",
    "slug": "escuela-infantil-cucutras",
    "type": "private",
    "address": "PLAZA PATRICIO AGUADO 6",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46426562497467,
      "lng": -3.637091129196918
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7693454",
    "name": "Escuela Infantil Cucutrás II",
    "slug": "escuela-infantil-cucutras-ii",
    "type": "private",
    "address": "PLAZA PATRICIO AGUADO 6",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46430172406402,
      "lng": -3.637079674983128
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181011",
    "name": "Escuela Infantil Cuentacuentos",
    "slug": "escuela-infantil-cuentacuentos",
    "type": "private",
    "address": "AVENIDA PABLO NERUDA 51",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38412745427561,
      "lng": -3.6473038609001662
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5844",
    "name": "Escuela Infantil Cuna de Jesús",
    "slug": "escuela-infantil-cuna-de-jesus",
    "type": "private",
    "address": "CALLE FERRER DEL RIO 26",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43498241594533,
      "lng": -3.671218339550121
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5785131",
    "name": "Escuela Infantil De Oca a Oca",
    "slug": "escuela-infantil-de-oca-a-oca",
    "type": "private",
    "address": "CALLE TINTAS 6",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.389179269701714,
      "lng": -3.740749338740959
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4689360",
    "name": "Escuela Infantil De Peques",
    "slug": "escuela-infantil-de-peques",
    "type": "private",
    "address": "CALLE WALIA 7",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40752823629685,
      "lng": -3.671841205579265
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6526664",
    "name": "Escuela Infantil del Complejo Cuzco",
    "slug": "escuela-infantil-del-complejo-cuzco",
    "type": "private",
    "address": "PASEO CASTELLANA 162",
    "city": "MADRID",
    "postalCode": "28046",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45833513149752,
      "lng": -3.6893543428087257
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6526674",
    "name": "Escuela Infantil del Cuerpo Nacional de Policía",
    "slug": "escuela-infantil-del-cuerpo-nacional-de-policia",
    "type": "private",
    "address": "CALLE JULIAN GONZALEZ SEGADOR S/N ",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.467518780269025,
      "lng": -3.6482689488983264
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5027288",
    "name": "Escuela Infantil del Ministerio de Defensa",
    "slug": "escuela-infantil-del-ministerio-de-defensa",
    "type": "private",
    "address": "PASEO CASTELLANA 109",
    "city": "MADRID",
    "postalCode": "28046",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45551485327102,
      "lng": -3.6909412593195112
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5027289",
    "name": "Escuela Infantil del Ministerio de Fomento",
    "slug": "escuela-infantil-del-ministerio-de-fomento",
    "type": "private",
    "address": "PASEO CASTELLANA 67",
    "city": "MADRID",
    "postalCode": "28046",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44355310068128,
      "lng": -3.6920804671812695
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5362709",
    "name": "Escuela Infantil del Ministerio de Inmigración",
    "slug": "escuela-infantil-del-ministerio-de-inmigracion",
    "type": "private",
    "address": "CALLE JOSE ABASCAL 39",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43846918127899,
      "lng": -3.6970511917301576
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5929",
    "name": "Escuela Infantil Delphos",
    "slug": "escuela-infantil-delphos",
    "type": "private",
    "address": "CALLE ESTRECHO DE COREA 34",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.441017444019636,
      "lng": -3.647707729914161
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62446",
    "name": "Escuela Infantil Denenes",
    "slug": "escuela-infantil-denenes",
    "type": "private",
    "address": "CALLE VIRGEN DE LLUC 13",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4362445680186,
      "lng": -3.6473671662433267
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8158592",
    "name": "Escuela Infantil Diábolo",
    "slug": "escuela-infantil-diabolo",
    "type": "private",
    "address": "CALLE CACERES 10",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.398666517536626,
      "lng": -3.695674239964103
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4733728",
    "name": "Escuela Infantil Diciembre Garden",
    "slug": "escuela-infantil-diciembre-garden",
    "type": "private",
    "address": "CALLE DICIEMBRE 41",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44312298625488,
      "lng": -3.5694788944221445
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5963",
    "name": "Escuela Infantil Dina Condado",
    "slug": "escuela-infantil-dina-condado",
    "type": "private",
    "address": "CALLE CONDADO DE TREVIÑO 35",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.480698522143776,
      "lng": -3.668889109311785
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5379594",
    "name": "Escuela Infantil Dina Condado 2",
    "slug": "escuela-infantil-dina-condado-2",
    "type": "private",
    "address": "CALLE CONDADO DE TREVIÑO 35",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.480698522143776,
      "lng": -3.668889109311785
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "177754",
    "name": "Escuela Infantil Diventium",
    "slug": "escuela-infantil-diventium",
    "type": "private",
    "address": "CALLE EPOCA 6",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37848181618703,
      "lng": -3.7469228248945585
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7693065",
    "name": "Escuela Infantil Divertia",
    "slug": "escuela-infantil-divertia",
    "type": "private",
    "address": "CALLE GOLFO DE SALONICA 25",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.477663457819276,
      "lng": -3.6656028436031907
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178894",
    "name": "Escuela Infantil Domo",
    "slug": "escuela-infantil-domo",
    "type": "private",
    "address": "CALLE TORREGROSA 16",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4718533201172,
      "lng": -3.648051105759709
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8182123",
    "name": "Escuela Infantil Don Melitón IV",
    "slug": "escuela-infantil-don-meliton-iv",
    "type": "private",
    "address": "AVENIDA CERRO MILANO 141",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36397122895315,
      "lng": -3.5870560596598677
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10474991",
    "name": "Escuela Infantil Don Meliton V",
    "slug": "escuela-infantil-don-meliton-v",
    "type": "private",
    "address": "CALLE PUENTEDEY 29",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.366770142130115,
      "lng": -3.6102482274992176
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5103040",
    "name": "Escuela Infantil Educando",
    "slug": "escuela-infantil-educando",
    "type": "private",
    "address": "CALLE DOCTOR ESQUERDO 183",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40475688861089,
      "lng": -3.6712479758825918
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5785637",
    "name": "Escuela Infantil Educando II",
    "slug": "escuela-infantil-educando-ii",
    "type": "private",
    "address": "CALLE DOCTOR ESQUERDO 183",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40475688861089,
      "lng": -3.6712479758825918
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6124880",
    "name": "Escuela Infantil Educando Juntos",
    "slug": "escuela-infantil-educando-juntos",
    "type": "private",
    "address": "CALLE ADELFAS 12",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40308585723576,
      "lng": -3.6719973746197607
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5836",
    "name": "Escuela Infantil Educando Pitufos",
    "slug": "escuela-infantil-educando-pitufos",
    "type": "private",
    "address": "CALLE REYES MAGOS 6",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41168265136974,
      "lng": -3.6747229665527876
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5114565",
    "name": "Escuela Infantil Educavida Es-Cool",
    "slug": "escuela-infantil-educavida-es-cool",
    "type": "private",
    "address": "CALLE JUAN DE JUANES 10",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.402277357315704,
      "lng": -3.668489354645208
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5114649",
    "name": "Escuela Infantil Eduqa Las Tablas",
    "slug": "escuela-infantil-eduqa-las-tablas",
    "type": "private",
    "address": "AVENIDA BURGOS (Ciudad empresarial Adequa) 89",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49218613125773,
      "lng": -3.671788003444475
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5312922",
    "name": "Escuela Infantil Eduqa Valdebebas",
    "slug": "escuela-infantil-eduqa-valdebebas",
    "type": "private",
    "address": "CALLE VIA DE LOS POBLADOS 3",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47532864850089,
      "lng": -3.635376677188641
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62627",
    "name": "Escuela Infantil El Arrullo",
    "slug": "escuela-infantil-el-arrullo",
    "type": "private",
    "address": "BULEVAR JOSE PRAT 7 LOCAL 1 - 2",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39847798716477,
      "lng": -3.6245453684673117
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178182",
    "name": "Escuela Infantil El Arrullo  V",
    "slug": "escuela-infantil-el-arrullo-v",
    "type": "private",
    "address": "AVENIDA DOCTOR GARCIA TAPIA 232",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.405987943486146,
      "lng": -3.625215819343535
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5937",
    "name": "Escuela Infantil El Arrullo I",
    "slug": "escuela-infantil-el-arrullo-i",
    "type": "private",
    "address": "CALLE PEÑA NUEVA 74",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.370670754051595,
      "lng": -3.620472208487379
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6165600",
    "name": "Escuela Infantil El Arrullo VI",
    "slug": "escuela-infantil-el-arrullo-vi",
    "type": "private",
    "address": "CALLE MONTES DE BARBANZA 19",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.377246295910794,
      "lng": -3.61900111210019
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4689313",
    "name": "Escuela Infantil El Bebé",
    "slug": "escuela-infantil-el-bebe",
    "type": "private",
    "address": "CALLE ISLAS MASCAREÑAS 11",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48014047012414,
      "lng": -3.7312716011805818
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5040",
    "name": "Escuela Infantil El Belén",
    "slug": "escuela-infantil-el-belen",
    "type": "private",
    "address": "CALLE BRAILLE 23",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49550431376966,
      "lng": -3.6971572791709693
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4539315",
    "name": "Escuela Infantil El Bosque Encantado. Calle Antonio López",
    "slug": "escuela-infantil-el-bosque-encantado-calle-antonio-lopez",
    "type": "private",
    "address": "CALLE ANTONIO LOPEZ 246",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38190615793458,
      "lng": -3.6959383986282845
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5878",
    "name": "Escuela Infantil El Camino",
    "slug": "escuela-infantil-el-camino",
    "type": "private",
    "address": "CALLE SALITRE 33",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408680379910116,
      "lng": -3.6993601487611505
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5043",
    "name": "Escuela Infantil El Carmen. Calle Vélez Rubio",
    "slug": "escuela-infantil-el-carmen-calle-velez-rubio",
    "type": "private",
    "address": "CALLE VELEZ RUBIO 181",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47975590061556,
      "lng": -3.660479587469385
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5899",
    "name": "Escuela Infantil El Chovo",
    "slug": "escuela-infantil-el-chovo",
    "type": "private",
    "address": "CALLE CARLOS MARTIN ALVAREZ 23",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38988266793322,
      "lng": -3.6619100886916907
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4735839",
    "name": "Escuela Infantil El Desván II",
    "slug": "escuela-infantil-el-desvan-ii",
    "type": "private",
    "address": "CALLE LA DILIGENCIA 19",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38332453808825,
      "lng": -3.6539053992180586
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5391821",
    "name": "Escuela Infantil El Duende Azul",
    "slug": "escuela-infantil-el-duende-azul",
    "type": "private",
    "address": "CALLE CULLA 5",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36984033062821,
      "lng": -3.6190864716366464
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5785748",
    "name": "Escuela Infantil El Duende Travieso II",
    "slug": "escuela-infantil-el-duende-travieso-ii",
    "type": "private",
    "address": "PASEO ACACIAS 30",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4034400591062,
      "lng": -3.709228572338776
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5543",
    "name": "Escuela Infantil El Elefante",
    "slug": "escuela-infantil-el-elefante",
    "type": "private",
    "address": "CALLE BURGO DE OSMA 20",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.470049225175096,
      "lng": -3.662755532966571
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5345",
    "name": "Escuela Infantil El Encinar",
    "slug": "escuela-infantil-el-encinar",
    "type": "private",
    "address": "CALLE ESTRECHO DE MESINA 1",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45231782680988,
      "lng": -3.6519674238288373
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "105695",
    "name": "Escuela Infantil El Espinillo",
    "slug": "escuela-infantil-el-espinillo",
    "type": "private",
    "address": "PASAJE AVENENCIA 2",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35961694171659,
      "lng": -3.687323208473037
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor.  Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5273543",
    "name": "Escuela Infantil El Girasol",
    "slug": "escuela-infantil-el-girasol",
    "type": "private",
    "address": "CALLE GENERAL ARANAZ 54",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44394795479796,
      "lng": -3.639151479387643
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181020",
    "name": "Escuela Infantil El Igloo",
    "slug": "escuela-infantil-el-igloo",
    "type": "private",
    "address": "CALLE MARQUES DE LEMA 7",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4455289410362,
      "lng": -3.706498746411808
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5785782",
    "name": "Escuela Infantil El Jardín de Larín",
    "slug": "escuela-infantil-el-jardin-de-larin",
    "type": "private",
    "address": "CALLE ARCADIA 5",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.473448629153935,
      "lng": -3.5854485025408938
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10502289",
    "name": "Escuela Infantil El Jardín de Larín Playa de Aro",
    "slug": "escuela-infantil-el-jardin-de-larin-playa-de-aro",
    "type": "private",
    "address": "CALLE PLAYA DE ARO 11",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47234883742185,
      "lng": -3.589131323221162
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134325",
    "name": "Escuela Infantil El Jardín de los Genios",
    "slug": "escuela-infantil-el-jardin-de-los-genios",
    "type": "private",
    "address": "CALLE EVARISTO SAN MIGUEL 11",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42628925884782,
      "lng": -3.715837097545746
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4784641",
    "name": "Escuela Infantil El Jardín del Oeste",
    "slug": "escuela-infantil-el-jardin-del-oeste",
    "type": "private",
    "address": "CALLE ESTELLA 9",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.497216317030656,
      "lng": -3.6758741309533347
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5066",
    "name": "Escuela Infantil El Madroñal",
    "slug": "escuela-infantil-el-madronal",
    "type": "private",
    "address": "CALLE JOSE PAULETE 34",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39290896637105,
      "lng": -3.65093456975311
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4940395",
    "name": "Escuela Infantil El Monin",
    "slug": "escuela-infantil-el-monin",
    "type": "private",
    "address": "CALLE ALVARO CUNQUEIRO 32",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.478009905459906,
      "lng": -3.7291249052222426
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181029",
    "name": "Escuela Infantil El Mundo de Mozart",
    "slug": "escuela-infantil-el-mundo-de-mozart",
    "type": "private",
    "address": "CALLE NANCLARES DE OCA 14 LOCAL 1",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44452559514623,
      "lng": -3.57730873193774
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5114650",
    "name": "Escuela Infantil El Mundo de Mozart II",
    "slug": "escuela-infantil-el-mundo-de-mozart-ii",
    "type": "private",
    "address": "CALLE ARAMAYONA 5",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44383781506113,
      "lng": -3.5779278094903453
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10474928",
    "name": "Escuela infantil El Nido del Buho",
    "slug": "escuela-infantil-el-nido-del-buho",
    "type": "private",
    "address": "CALLE DONOSO CORTES 8",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43614870935858,
      "lng": -3.705327629417968
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5786127",
    "name": "Escuela Infantil El Osito",
    "slug": "escuela-infantil-el-osito",
    "type": "private",
    "address": "CALLE LOPEZ DE HOYOS 212",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44967203671333,
      "lng": -3.6656921711778954
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5398392",
    "name": "Escuela Infantil El Osito 2",
    "slug": "escuela-infantil-el-osito-2",
    "type": "private",
    "address": "CALLE CORAZON DE MARIA 58",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44544250072967,
      "lng": -3.666440503690981
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5455",
    "name": "Escuela Infantil El Osito de Luis de Larrainza",
    "slug": "escuela-infantil-el-osito-de-luis-de-larrainza",
    "type": "private",
    "address": "CALLE LUIS LARRAINZA 46",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45076081408548,
      "lng": -3.669040308958262
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5391834",
    "name": "Escuela Infantil El Parque de la Piovera",
    "slug": "escuela-infantil-el-parque-de-la-piovera",
    "type": "private",
    "address": "CALLE GUADALAJARA 21",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4510512165605,
      "lng": -3.61513751410999
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "174501",
    "name": "Escuela Infantil El Parque. Calle Cardenal Silíceo",
    "slug": "escuela-infantil-el-parque-calle-cardenal-siliceo",
    "type": "private",
    "address": "CALLE CARDENAL SILICEO 25",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44413329196467,
      "lng": -3.670059432869024
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23193",
    "name": "Escuela Infantil El Pequeño Sol",
    "slug": "escuela-infantil-el-pequeno-sol",
    "type": "private",
    "address": "CALLE EL ROMPEDIZO 1",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.376210759539376,
      "lng": -3.7649562793991644
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5250625",
    "name": "Escuela Infantil El Pilar",
    "slug": "escuela-infantil-el-pilar",
    "type": "private",
    "address": "CALLE SIENA 38",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.432977408788425,
      "lng": -3.6532189481944806
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134399",
    "name": "Escuela Infantil El Pinar",
    "slug": "escuela-infantil-el-pinar",
    "type": "private",
    "address": "CALLE CALERUEGA 51",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48106118085082,
      "lng": -3.671912584690235
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5738",
    "name": "Escuela Infantil El Príncipe",
    "slug": "escuela-infantil-el-principe",
    "type": "private",
    "address": "AVENIDA ARQUEROS 1",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38156875312879,
      "lng": -3.7920773557927174
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4785095",
    "name": "Escuela Infantil El Reino del Revés",
    "slug": "escuela-infantil-el-reino-del-reves",
    "type": "private",
    "address": "CALLE FERNANDO POO 8",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.399291456037886,
      "lng": -3.699604715730976
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5892",
    "name": "Escuela Infantil El Rey de la Casa",
    "slug": "escuela-infantil-el-rey-de-la-casa",
    "type": "private",
    "address": "CALLE MAQUEDA 54",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39253576971784,
      "lng": -3.764869980406497
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10014123",
    "name": "Escuela Infantil El Sitio de tu Recreo",
    "slug": "escuela-infantil-el-sitio-de-tu-recreo",
    "type": "private",
    "address": "CALLE JUAN DE AUSTRIA 7",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43214902349191,
      "lng": -3.699343855523591
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Jornada continuada"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "73973",
    "name": "Escuela Infantil El Sur",
    "slug": "escuela-infantil-el-sur",
    "type": "private",
    "address": "CALLE CIFUENTES 12",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3491955707943,
      "lng": -3.6989808154440773
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5747",
    "name": "Escuela Infantil El Trébol Mágico",
    "slug": "escuela-infantil-el-trebol-magico",
    "type": "private",
    "address": "CARRETERA VILLAVERDE A VALLECAS 3,5",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3538372810062,
      "lng": -3.689643272810708
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "53892",
    "name": "Escuela Infantil El Tren de los Niños",
    "slug": "escuela-infantil-el-tren-de-los-ninos",
    "type": "private",
    "address": "AVENIDA BURGOS 34 OTRA ESCUELA EN AVDA. BURGOS 28",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.480060668322494,
      "lng": -3.674781796395457
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5392503",
    "name": "Escuela Infantil El Tren de los Niños II",
    "slug": "escuela-infantil-el-tren-de-los-ninos-ii",
    "type": "private",
    "address": "AVENIDA BURGOS 28 OTRA ESCUELA EN AVDA. BURGOS 34",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.478536866182104,
      "lng": -3.6750024945360797
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5047",
    "name": "Escuela Infantil El Valle",
    "slug": "escuela-infantil-el-valle",
    "type": "private",
    "address": "AVENIDA VALLE 22",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.443852530502504,
      "lng": -3.7154075006615277
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11543269",
    "name": "Escuela Infantil El Viaje de Neu",
    "slug": "escuela-infantil-el-viaje-de-neu",
    "type": "private",
    "address": "CALLE JOAQUIN TURINA 1",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37331466635382,
      "lng": -3.751637947454835
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5940",
    "name": "Escuela Infantil Ellaluna",
    "slug": "escuela-infantil-ellaluna",
    "type": "private",
    "address": "CALLE PANDORA 23",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43986779389527,
      "lng": -3.6157430286238843
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5532",
    "name": "Escuela Infantil Espíritu Santo",
    "slug": "escuela-infantil-espiritu-santo",
    "type": "private",
    "address": "AVENIDA DAROCA 28",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.430173799975,
      "lng": -3.656716826505554
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "31565",
    "name": "Escuela Infantil Extremadura",
    "slug": "escuela-infantil-extremadura",
    "type": "private",
    "address": "CALLE ESFINGE 90",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.437961420160164,
      "lng": -3.606552474928769
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4539404",
    "name": "Escuela Infantil Fantasía II",
    "slug": "escuela-infantil-fantasia-ii",
    "type": "private",
    "address": "CALLE JUSTA GARCIA 12",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.382114125702664,
      "lng": -3.7094643188885605
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6020",
    "name": "Escuela Infantil Fisbis",
    "slug": "escuela-infantil-fisbis",
    "type": "private",
    "address": "CALLE SAN GRACIANO 2",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39296420351667,
      "lng": -3.7030505053806952
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5385348",
    "name": "Escuela Infantil Fundación Torat Moshe",
    "slug": "escuela-infantil-fundacion-torat-moshe",
    "type": "private",
    "address": "CALLE ALMARZA 24",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.467751029767975,
      "lng": -3.6613410261722397
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "174423",
    "name": "Escuela Infantil Gaia",
    "slug": "escuela-infantil-gaia",
    "type": "private",
    "address": "CALLE MERIDA 23",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40678907833064,
      "lng": -3.6336143282591804
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23407",
    "name": "Escuela Infantil Garabatos",
    "slug": "escuela-infantil-garabatos",
    "type": "private",
    "address": "CALLE JOAQUIN JORGE ALARCON 49",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4770033270959,
      "lng": -3.7230029213484
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "54316",
    "name": "Escuela Infantil Garabatos y Ocho Patos. Calle Laurel",
    "slug": "escuela-infantil-garabatos-y-ocho-patos-calle-laurel",
    "type": "private",
    "address": "CALLE LAUREL 33",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40159191233793,
      "lng": -3.7035409224167557
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "67314",
    "name": "Escuela Infantil Garabatos y Ocho Patos. Calle Melilla",
    "slug": "escuela-infantil-garabatos-y-ocho-patos-calle-melilla",
    "type": "private",
    "address": "CALLE MELILLA 6",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.401513077308735,
      "lng": -3.710539973809439
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "54314",
    "name": "Escuela Infantil Garabatos y Ocho Patos. Paseo Acacias",
    "slug": "escuela-infantil-garabatos-y-ocho-patos-paseo-acacias",
    "type": "private",
    "address": "PASEO ACACIAS 29",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40330314550398,
      "lng": -3.7080486745442114
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167638",
    "name": "Escuela Infantil Geppetto",
    "slug": "escuela-infantil-geppetto",
    "type": "private",
    "address": "CALLE ANA MARISCAL 1",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39491032460292,
      "lng": -3.6228863252481025
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4785312",
    "name": "Escuela Infantil Globitos",
    "slug": "escuela-infantil-globitos",
    "type": "private",
    "address": "CALLE BENISODA 14",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46595724127966,
      "lng": -3.588190802706838
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5918",
    "name": "Escuela Infantil Globos",
    "slug": "escuela-infantil-globos",
    "type": "private",
    "address": "CALLE ARROYO DE LA MEDIA LEGUA 29",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.410924661878624,
      "lng": -3.656152517097105
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4940386",
    "name": "Escuela Infantil Goofy",
    "slug": "escuela-infantil-goofy",
    "type": "private",
    "address": "CALLE ACEUCHAL 6",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.392169690591096,
      "lng": -3.7366110465107516
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "32068",
    "name": "Escuela Infantil Gran Vía",
    "slug": "escuela-infantil-gran-via",
    "type": "private",
    "address": "CALLE ALEJANDRO VILLEGAS 48",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46653241928136,
      "lng": -3.6490497753986935
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5935",
    "name": "Escuela Infantil Grazalema",
    "slug": "escuela-infantil-grazalema",
    "type": "private",
    "address": "PLAZA SIERRA DE GRAZALEMA 1",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37343952637305,
      "lng": -3.6182359516217373
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4701983",
    "name": "Escuela Infantil Grumete Madrid",
    "slug": "escuela-infantil-grumete-madrid",
    "type": "private",
    "address": "CALLE SERRANO GALVACHE 1",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47132618787692,
      "lng": -3.667852382970602
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6151466",
    "name": "Escuela Infantil Guarderia Moreno",
    "slug": "escuela-infantil-guarderia-moreno",
    "type": "private",
    "address": "CALLE MISTERIOS 8",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43895356487954,
      "lng": -3.6397644661005466
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6979363",
    "name": "Escuela Infantil Guardería Nido la Cigüeña",
    "slug": "escuela-infantil-guarderia-nido-la-ciguena",
    "type": "private",
    "address": "CALLE CODORNIZ 6",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38129446148227,
      "lng": -3.749427847661259
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6151745",
    "name": "Escuela Infantil Guardería Pluto",
    "slug": "escuela-infantil-guarderia-pluto",
    "type": "private",
    "address": "CALLE OCAÑA 93",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38634558868781,
      "lng": -3.755421773748161
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5234945",
    "name": "Escuela Infantil Guardia Real",
    "slug": "escuela-infantil-guardia-real",
    "type": "private",
    "address": "PASEO EL PARDO S/N (Cuartel del Rey) 1",
    "city": "MADRID",
    "postalCode": "28048",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.52113112310324,
      "lng": -3.778146719777724
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5027412",
    "name": "Escuela Infantil Guardilla Infantil",
    "slug": "escuela-infantil-guardilla-infantil",
    "type": "private",
    "address": "CALLE GUZMAN EL BUENO 110",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44454745648486,
      "lng": -3.7122900396933813
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5914",
    "name": "Escuela Infantil Guiñol",
    "slug": "escuela-infantil-guinol",
    "type": "private",
    "address": "AVENIDA DOCTOR GARCIA TAPIA 206",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.407894567094615,
      "lng": -3.635734288810848
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7687814",
    "name": "Escuela Infantil Halo Baby",
    "slug": "escuela-infantil-halo-baby",
    "type": "private",
    "address": "CALLE MAXIMO CARAZO 1",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.383756463219285,
      "lng": -3.710494732840636
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4666360",
    "name": "Escuela Infantil Hola Bicho Bola",
    "slug": "escuela-infantil-hola-bicho-bola",
    "type": "private",
    "address": "CALLE VICENTE JIMENEZ 7",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4469423787104,
      "lng": -3.6135788496047456
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4775250",
    "name": "Escuela Infantil Inizia Distrito C",
    "slug": "escuela-infantil-inizia-distrito-c",
    "type": "private",
    "address": "RONDA COMUNICACION 28",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.51340521081901,
      "lng": -3.6603138881964954
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5786486",
    "name": "Escuela Infantil Internacional Valdemarín",
    "slug": "escuela-infantil-internacional-valdemarin",
    "type": "private",
    "address": "CALLE TORREADRADA 1",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47117565698537,
      "lng": -3.7729455659015843
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4689660",
    "name": "Escuela Infantil Iris",
    "slug": "escuela-infantil-iris",
    "type": "private",
    "address": "CALLE CALANDA 14",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46099412130099,
      "lng": -3.643818591045767
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10474352",
    "name": "Escuela Infantil Isabel Zendal",
    "slug": "escuela-infantil-isabel-zendal",
    "type": "private",
    "address": "AVENIDA MONFORTE DE LEMOS 5",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4754750576538,
      "lng": -3.6900486898355545
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10502007",
    "name": "Escuela infantil ISM Preschool, S.L.",
    "slug": "escuela-infantil-ism-preschool-s-l",
    "type": "private",
    "address": "CALLE ROSA JARDON 1",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46594476679301,
      "lng": -3.671491088312282
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "104425",
    "name": "Escuela Infantil Jaizkibel",
    "slug": "escuela-infantil-jaizkibel",
    "type": "private",
    "address": "CALLE JOSE DEL HIERRO 29",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.439714463589155,
      "lng": -3.6455021005034283
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134175",
    "name": "Escuela Infantil Jardimar",
    "slug": "escuela-infantil-jardimar",
    "type": "private",
    "address": "CALLE COBOS DE SEGOVIA 5",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40639744783602,
      "lng": -3.7191089374919453
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5400227",
    "name": "Escuela Infantil Jardín  Kinderland",
    "slug": "escuela-infantil-jardin-kinderland",
    "type": "private",
    "address": "CALLE CAPITAN HAYA 13",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45535197052957,
      "lng": -3.6925671220629224
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6231659",
    "name": "Escuela Infantil Jardín de las Delicias",
    "slug": "escuela-infantil-jardin-de-las-delicias",
    "type": "private",
    "address": "CALLE TOMAS BRETON 43",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.397389163900975,
      "lng": -3.692349905497899
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5563",
    "name": "Escuela Infantil Jardín de las Delicias. Calle Tomás Bretón",
    "slug": "escuela-infantil-jardin-de-las-delicias-calle-tomas-breton",
    "type": "private",
    "address": "CALLE TOMAS BRETON 43",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39738008482426,
      "lng": -3.69236159607705
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5896",
    "name": "Escuela Infantil Jardín Infantil",
    "slug": "escuela-infantil-jardin-infantil",
    "type": "private",
    "address": "CALLE EMBAJADORES 173",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39365769384023,
      "lng": -3.6941380398407517
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5856",
    "name": "Escuela Infantil Jardín Kinderland",
    "slug": "escuela-infantil-jardin-kinderland",
    "type": "private",
    "address": "CALLE GENERAL YAGÜE 5",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45604321666331,
      "lng": -3.6929752099155344
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5565",
    "name": "Escuela Infantil Javier García Pita",
    "slug": "escuela-infantil-javier-garcia-pita",
    "type": "private",
    "address": "CALLE HUMANES 12",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39508010941629,
      "lng": -3.6461243663118723
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6010",
    "name": "Escuela Infantil Jesús Niño",
    "slug": "escuela-infantil-jesus-nino",
    "type": "private",
    "address": "CALLE FLORENCIO GARCIA 12",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43855176869111,
      "lng": -3.6407392927277145
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5906",
    "name": "Escuela Infantil Juguetones",
    "slug": "escuela-infantil-juguetones",
    "type": "private",
    "address": "CALLE CALERO PITA 15",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.381884882220646,
      "lng": -3.670891306711643
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5299910",
    "name": "Escuela Infantil Juncos",
    "slug": "escuela-infantil-juncos",
    "type": "private",
    "address": "CALLE SIERRA TOLEDANA 9",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40044740106885,
      "lng": -3.660846922509913
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "180977",
    "name": "Escuela Infantil Kids Retiro",
    "slug": "escuela-infantil-kids-retiro",
    "type": "private",
    "address": "CALLE LUIS MITJANS 29",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40357432149011,
      "lng": -3.670104900262818
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6151521",
    "name": "Escuela Infantil Kidsuanzes",
    "slug": "escuela-infantil-kidsuanzes",
    "type": "private",
    "address": "CALLE ALFONSO GOMEZ  (Bajo, locales A y C) 17",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4387150488037,
      "lng": -3.6288908392976156
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4879843",
    "name": "Escuela Infantil Kika",
    "slug": "escuela-infantil-kika",
    "type": "private",
    "address": "CALLE ANTRACITA 24",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39082521056264,
      "lng": -3.6872044462696443
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178639",
    "name": "Escuela Infantil kind for Kids",
    "slug": "escuela-infantil-kind-for-kids",
    "type": "private",
    "address": "CALLE TORRELAGUNA 65",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44354655513485,
      "lng": -3.6545357916408308
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167808",
    "name": "Escuela Infantil Kinder My Garden",
    "slug": "escuela-infantil-kinder-my-garden",
    "type": "private",
    "address": "CALLE BLANES 3",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.464817111671294,
      "lng": -3.589171670412987
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23425",
    "name": "Escuela Infantil La Abeja Maya",
    "slug": "escuela-infantil-la-abeja-maya",
    "type": "private",
    "address": "CALLE ISLAS BAHAMAS 33",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47812176301582,
      "lng": -3.722790763791926
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "174428",
    "name": "Escuela Infantil La Aldea",
    "slug": "escuela-infantil-la-aldea",
    "type": "private",
    "address": "CALLE PRINCIPAL 4",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.33415192329187,
      "lng": -3.6987078367678476
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5041",
    "name": "Escuela Infantil La Almudena",
    "slug": "escuela-infantil-la-almudena",
    "type": "private",
    "address": "CALLE MOTILLA DEL PALANCAR 19",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46634990040974,
      "lng": -3.6332300542597373
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5972",
    "name": "Escuela Infantil La Anunciata",
    "slug": "escuela-infantil-la-anunciata",
    "type": "private",
    "address": "CALLE CAMARENA 55",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39551467846988,
      "lng": -3.75436948267991
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5958",
    "name": "Escuela Infantil La Casa de los Hermanitos",
    "slug": "escuela-infantil-la-casa-de-los-hermanitos",
    "type": "private",
    "address": "CALLE LA CORTE DE FARAON 11",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36136384392612,
      "lng": -3.6965036954937434
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5466",
    "name": "Escuela Infantil La Casa del Niño - Salus Infirmorun",
    "slug": "escuela-infantil-la-casa-del-nino-salus-infirmorun",
    "type": "private",
    "address": "CALLE MATEO INURRIA 20 C/ DONOSO MONTESINOS 17",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46707998240384,
      "lng": -3.683769986965903
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5854",
    "name": "Escuela Infantil La Casa del Río",
    "slug": "escuela-infantil-la-casa-del-rio",
    "type": "private",
    "address": "PASEO COMANDANTE FORTEA 81 COLONIA DEL MANZANARES",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.429371584815904,
      "lng": -3.734635390084493
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5443314",
    "name": "Escuela Infantil La Casa Zipizape",
    "slug": "escuela-infantil-la-casa-zipizape",
    "type": "private",
    "address": "CAMINO GANAPANES 31",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47484920282757,
      "lng": -3.7159251455642925
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4689476",
    "name": "Escuela Infantil La Casita de Kika",
    "slug": "escuela-infantil-la-casita-de-kika",
    "type": "private",
    "address": "CALLE ALFONSO MARTINEZ CONDE 2",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.380831831397536,
      "lng": -3.7302084356205576
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6008",
    "name": "Escuela Infantil La Casita de los Pitufos",
    "slug": "escuela-infantil-la-casita-de-los-pitufos",
    "type": "private",
    "address": "CALLE SIERRA DE FILABRES 73",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.396989228081154,
      "lng": -3.6621917820838457
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5513",
    "name": "Escuela Infantil La Casita de los Pitufos II",
    "slug": "escuela-infantil-la-casita-de-los-pitufos-ii",
    "type": "private",
    "address": "AVENIDA MORATALAZ 141",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40704132769344,
      "lng": -3.6482422345288184
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5392575",
    "name": "Escuela Infantil La Cigüeña",
    "slug": "escuela-infantil-la-ciguena",
    "type": "private",
    "address": "CALLE MARINA USERA 28",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.380690110910095,
      "lng": -3.713949593830535
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6165897",
    "name": "Escuela Infantil La Colmena",
    "slug": "escuela-infantil-la-colmena",
    "type": "private",
    "address": "CALLE QUINTANAVIDES 11",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49831872469273,
      "lng": -3.669111285742584
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5817",
    "name": "Escuela Infantil La Cometa",
    "slug": "escuela-infantil-la-cometa",
    "type": "private",
    "address": "CALLE GONZALEZ ARIAS 10",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38085827831562,
      "lng": -3.7085793725352993
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5786250",
    "name": "Escuela Infantil La Cuncuna",
    "slug": "escuela-infantil-la-cuncuna",
    "type": "private",
    "address": "CALLE ANTONIO ROMERO 21",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37373195742766,
      "lng": -3.731745572555779
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10014249",
    "name": "Escuela Infantil La Estrella Infantil",
    "slug": "escuela-infantil-la-estrella-infantil",
    "type": "private",
    "address": "CALLE ESTRELLA POLAR 22",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41085823340638,
      "lng": -3.6661934969691106
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178885",
    "name": "Escuela Infantil La Guarde del Huerto",
    "slug": "escuela-infantil-la-guarde-del-huerto",
    "type": "private",
    "address": "CALLE SANTA SUSANA 30",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.479180756106,
      "lng": -3.645879961644151
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5056",
    "name": "Escuela Infantil La Jara",
    "slug": "escuela-infantil-la-jara",
    "type": "private",
    "address": "CALLE HIJAS DE JESUS 30",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.384279498519625,
      "lng": -3.7015582273336833
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167634",
    "name": "Escuela Infantil La Jirafa. Calle Sicelidas",
    "slug": "escuela-infantil-la-jirafa-calle-sicelidas",
    "type": "private",
    "address": "CALLE SICELIDAS 6",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46360780794781,
      "lng": -3.6371202995176346
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "El segundo ciclo de Educación Infantil lo imparten en Calle Alcorisa",
      "83 (tfno: 917 599 568)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5476",
    "name": "Escuela Infantil La Locomotora",
    "slug": "escuela-infantil-la-locomotora",
    "type": "private",
    "address": "PLAZA MONDARIZ 14",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47846068074359,
      "lng": -3.705852844938595
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5945",
    "name": "Escuela Infantil La Luna",
    "slug": "escuela-infantil-la-luna",
    "type": "private",
    "address": "AVENIDA SANTA EUGENIA 21",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38479500414189,
      "lng": -3.610705402677268
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5071",
    "name": "Escuela Infantil La Paloma",
    "slug": "escuela-infantil-la-paloma",
    "type": "private",
    "address": "CALLE CLAUDIO FERRERO FERRERO 2",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.382578590772404,
      "lng": -3.6158336971997422
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5054",
    "name": "Escuela Infantil La Plazuela",
    "slug": "escuela-infantil-la-plazuela",
    "type": "private",
    "address": "CALLE MARTIRES DE LA VENTILLA 32",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.470764394958216,
      "lng": -3.6906649650995
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "52573",
    "name": "Escuela Infantil La Pradera",
    "slug": "escuela-infantil-la-pradera",
    "type": "private",
    "address": "CALLE ANTONIO VICO 8",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39728802285175,
      "lng": -3.71925073743178
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5901",
    "name": "Escuela Infantil La Virgen Niña",
    "slug": "escuela-infantil-la-virgen-nina",
    "type": "private",
    "address": "CALLE GREGORIO BENITEZ 8",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44991728603662,
      "lng": -3.649503120718717
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167589",
    "name": "Escuela Infantil Lago Como",
    "slug": "escuela-infantil-lago-como",
    "type": "private",
    "address": "CALLE FUENTE CARRANTONA 33",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.406959425423054,
      "lng": -3.6321191957511765
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5392599",
    "name": "Escuela Infantil Laly",
    "slug": "escuela-infantil-laly",
    "type": "private",
    "address": "CALLE EUROPA 4",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.466098480407766,
      "lng": -3.6852108903876797
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181075",
    "name": "Escuela Infantil Lapizitos. Calle Condesa de Teba",
    "slug": "escuela-infantil-lapizitos-calle-condesa-de-teba",
    "type": "private",
    "address": "CALLE CONDESA DE TEBA 11",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37343394961597,
      "lng": -3.7584226598456083
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5994",
    "name": "Escuela Infantil las Acacias",
    "slug": "escuela-infantil-las-acacias",
    "type": "private",
    "address": "CALLE FRANCISCO DE DIEGO 44",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.456732784350756,
      "lng": -3.7158271592363117
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5826",
    "name": "Escuela Infantil las Gaviotas",
    "slug": "escuela-infantil-las-gaviotas",
    "type": "private",
    "address": "CALLE MEDINA DE POMAR 11",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.452002471966715,
      "lng": -3.58460192091081
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5045",
    "name": "Escuela Infantil las Maravillas",
    "slug": "escuela-infantil-las-maravillas",
    "type": "private",
    "address": "CALLE GENERAL GARCIA ESCAMEZ 4",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38229908611309,
      "lng": -3.7706564260144892
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6012",
    "name": "Escuela Infantil Lázaro",
    "slug": "escuela-infantil-lazaro",
    "type": "private",
    "address": "CALLE HERMANOS GOMEZ 42",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42924083980587,
      "lng": -3.6496342570804305
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5398038",
    "name": "Escuela Infantil Letras",
    "slug": "escuela-infantil-letras",
    "type": "private",
    "address": "CALLE FRANCISCO NAVACERRADA 5",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43099793870507,
      "lng": -3.6700940910575297
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8158133",
    "name": "Escuela Infantil Little Clovers",
    "slug": "escuela-infantil-little-clovers",
    "type": "private",
    "address": "CALLE ANTONIO CAVERO 91",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.462742278633314,
      "lng": -3.654969774618477
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "91118",
    "name": "Escuela Infantil Little Fem",
    "slug": "escuela-infantil-little-fem",
    "type": "private",
    "address": "CALLE GENERAL ASENSIO CABANILLAS 37",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44515701913572,
      "lng": -3.718605147983596
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8158206",
    "name": "Escuela Infantil Little Frogs",
    "slug": "escuela-infantil-little-frogs",
    "type": "private",
    "address": "CALLE PLAYA DE SAN JUAN 8",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.473875444178816,
      "lng": -3.5918579716655565
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "179665",
    "name": "Escuela Infantil Little Jungle",
    "slug": "escuela-infantil-little-jungle",
    "type": "private",
    "address": "CALLE LAGO TITICACA 6",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.402573035414164,
      "lng": -3.608414857220928
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5102537",
    "name": "Escuela Infantil Little Planet",
    "slug": "escuela-infantil-little-planet",
    "type": "private",
    "address": "CALLE GOLFO DE SALONICA 63",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.480625017999095,
      "lng": -3.662883127778531
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8158096",
    "name": "Escuela Infantil Little Witch",
    "slug": "escuela-infantil-little-witch",
    "type": "private",
    "address": "CALLE BUGANVILLA 2",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47146653101387,
      "lng": -3.676252904032727
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5052",
    "name": "Escuela Infantil los Ángeles",
    "slug": "escuela-infantil-los-angeles",
    "type": "private",
    "address": "CALLE BRAVO MURILLO 241",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45832782665456,
      "lng": -3.701054138389538
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23210",
    "name": "Escuela Infantil los Ángeles. Camino Viejo de Leganés",
    "slug": "escuela-infantil-los-angeles-camino-viejo-de-leganes",
    "type": "private",
    "address": "CALLE CAMINO VIEJO DE LEGANES 186",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37783180606918,
      "lng": -3.7344758031488503
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5918932",
    "name": "Escuela Infantil Los Angelotes Siglo XXI, SLU",
    "slug": "escuela-infantil-los-angelotes-siglo-xxi-slu",
    "type": "private",
    "address": "CALLE RAFAEL BERGAMIN 20",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44995690994581,
      "lng": -3.661579304523099
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5062",
    "name": "Escuela Infantil los Compañeros",
    "slug": "escuela-infantil-los-companeros",
    "type": "private",
    "address": "CALLE RAFAEL FERNANDEZ HIJICOS 12",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.391718903702795,
      "lng": -3.636524756683607
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4693126",
    "name": "Escuela Infantil Los Cucos",
    "slug": "escuela-infantil-los-cucos",
    "type": "private",
    "address": "CALLE SOTO HIDALGO 2",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45910369850015,
      "lng": -3.5806061978132173
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5063",
    "name": "Escuela Infantil Los Delfines",
    "slug": "escuela-infantil-los-delfines",
    "type": "private",
    "address": "CALLE ESTEBAN CARROS 18",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37205041089124,
      "lng": -3.6593208463721556
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5064",
    "name": "Escuela Infantil los Girasoles",
    "slug": "escuela-infantil-los-girasoles",
    "type": "private",
    "address": "CALLE RAMON PEREZ DE AYALA 58",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.400575925440776,
      "lng": -3.6524932147833136
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5065",
    "name": "Escuela Infantil los Gorriones",
    "slug": "escuela-infantil-los-gorriones",
    "type": "private",
    "address": "CALLE FUENGIROLA 25",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.383304717359735,
      "lng": -3.6413582871967494
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5572",
    "name": "Escuela Infantil los Lapazares",
    "slug": "escuela-infantil-los-lapazares",
    "type": "private",
    "address": "CALLE ANTONIO DURAN TOVAR 6",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39150158299917,
      "lng": -3.6623854596742067
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4713359",
    "name": "Escuela Infantil Los Madroños",
    "slug": "escuela-infantil-los-madronos",
    "type": "private",
    "address": "CALLE BERROCAL 1",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.348450567723916,
      "lng": -3.677318784422241
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6165684",
    "name": "Escuela Infantil Los Nanos Chiflados",
    "slug": "escuela-infantil-los-nanos-chiflados",
    "type": "private",
    "address": "CALLE MARCENADO 46",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44850859843297,
      "lng": -3.673687810461961
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4785132",
    "name": "Escuela Infantil Los Nidos de Manoteras",
    "slug": "escuela-infantil-los-nidos-de-manoteras",
    "type": "private",
    "address": "AVENIDA MANOTERAS 8",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48811638358004,
      "lng": -3.6713934372168335
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5149217",
    "name": "Escuela Infantil Los Pekes",
    "slug": "escuela-infantil-los-pekes",
    "type": "private",
    "address": "CALLE COMANDANTE ZORITA 53",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45184511176017,
      "lng": -3.6989465581352725
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178900",
    "name": "Escuela Infantil los Pequeños Pasos",
    "slug": "escuela-infantil-los-pequenos-pasos",
    "type": "private",
    "address": "CALLE MESENA 18 LOCAL 2",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46263060165768,
      "lng": -3.660347205921702
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5992",
    "name": "Escuela Infantil los Peques",
    "slug": "escuela-infantil-los-peques",
    "type": "private",
    "address": "CALLE FRANCOS RODRIGUEZ 51 CHALET 43",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.456703452543934,
      "lng": -3.708892015321942
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5734",
    "name": "Escuela Infantil los Pinos",
    "slug": "escuela-infantil-los-pinos",
    "type": "private",
    "address": "CALLE JOSE CELESTINO MUTIS 38",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42316364191438,
      "lng": -3.663226401946775
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5379727",
    "name": "Escuela Infantil los Pitufos. Calle  Villa de Marín",
    "slug": "escuela-infantil-los-pitufos-calle-villa-de-marin",
    "type": "private",
    "address": "CALLE VILLA DE MARIN 1",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47513570812564,
      "lng": -3.701523856940435
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5379726",
    "name": "Escuela Infantil Los Pitufos. Calle La Chulapona",
    "slug": "escuela-infantil-los-pitufos-calle-la-chulapona",
    "type": "private",
    "address": "CALLE LA CHULAPONA 8",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36017925049393,
      "lng": -3.697233461382134
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6022",
    "name": "Escuela Infantil los Pitufos. Calle Lérida",
    "slug": "escuela-infantil-los-pitufos-calle-lerida",
    "type": "private",
    "address": "CALLE LERIDA 93",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45845558037566,
      "lng": -3.6992981239619334
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5478",
    "name": "Escuela Infantil los Renacuajos",
    "slug": "escuela-infantil-los-renacuajos",
    "type": "private",
    "address": "CALLE MELCHOR FERNANDEZ ALMAGRO 31",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47751564012957,
      "lng": -3.6997789919134245
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5880",
    "name": "Escuela Infantil los Retoños",
    "slug": "escuela-infantil-los-retonos",
    "type": "private",
    "address": "CALLE CEBREROS 90",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40507645206699,
      "lng": -3.749726909093901
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5398059",
    "name": "Escuela Infantil Los Solecitos",
    "slug": "escuela-infantil-los-solecitos",
    "type": "private",
    "address": "CALLE VIA 19",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38697076887359,
      "lng": -3.722439864997107
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4890205",
    "name": "Escuela Infantil Los Soletes Proyectos Infantiles S.L. II",
    "slug": "escuela-infantil-los-soletes-proyectos-infantiles-s-l-ii",
    "type": "private",
    "address": "CALLE NEREIDA 12",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39186210158177,
      "lng": -3.680970196437432
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5346",
    "name": "Escuela Infantil los Titeres",
    "slug": "escuela-infantil-los-titeres",
    "type": "private",
    "address": "PLAZA ANOCIBAR S/N",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37701634113933,
      "lng": -3.7366226905690025
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "91133",
    "name": "Escuela Infantil Luismapetonga - Peluches",
    "slug": "escuela-infantil-luismapetonga-peluches",
    "type": "private",
    "address": "CALLE TOSCANA 156",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41902418179317,
      "lng": -3.6117220536407526
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5209700",
    "name": "Escuela Infantil Luna de Papel",
    "slug": "escuela-infantil-luna-de-papel",
    "type": "private",
    "address": "PASEO ERMITA DEL SANTO 19",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40852161067998,
      "lng": -3.723695598204224
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5398079",
    "name": "Escuela Infantil Luna Lunera",
    "slug": "escuela-infantil-luna-lunera",
    "type": "private",
    "address": "AVENIDA PESETA 60",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36142387277482,
      "lng": -3.755814815224328
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23110",
    "name": "Escuela Infantil Lunalu",
    "slug": "escuela-infantil-lunalu",
    "type": "private",
    "address": "CALLE CORREGIDOR JUAN FRANCISCO DE LUJAN 81",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40212470807059,
      "lng": -3.6462152853591077
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161652",
    "name": "Escuela Infantil Madiba",
    "slug": "escuela-infantil-madiba",
    "type": "private",
    "address": "PLAZA PZA FRANCISCO DE ASIS CABRERO S/N 5",
    "city": "MADRID",
    "postalCode": "28055",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49247416660146,
      "lng": -3.6118103492686924
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10619413",
    "name": "Escuela Infantil Madrid Chamartin",
    "slug": "escuela-infantil-madrid-chamartin",
    "type": "private",
    "address": "AVENIDA COMANDANTE FRANCO 8",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46541548233516,
      "lng": -3.6773934667388977
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23449",
    "name": "Escuela Infantil Mafalda",
    "slug": "escuela-infantil-mafalda",
    "type": "private",
    "address": "CALLE PALAFOX 18",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.431866199756236,
      "lng": -3.7014158945794455
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5601",
    "name": "Escuela Infantil Magos",
    "slug": "escuela-infantil-magos",
    "type": "private",
    "address": "CALLE DOCE DE OCTUBRE 24 LOCAL 6",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41577940003545,
      "lng": -3.6751292792758115
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "91132",
    "name": "Escuela Infantil Mamá Queca",
    "slug": "escuela-infantil-mama-queca",
    "type": "private",
    "address": "CALLE ARANZAZU 4",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.469151820515734,
      "lng": -3.651044947288839
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181051",
    "name": "Escuela Infantil Mamá Queca II",
    "slug": "escuela-infantil-mama-queca-ii",
    "type": "private",
    "address": "CALLE SANCHEZ GUERRERO 7",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46657288978962,
      "lng": -3.6530606973658335
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62330",
    "name": "Escuela Infantil Mamatina",
    "slug": "escuela-infantil-mamatina",
    "type": "private",
    "address": "CALLE HUMERA 37",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44942071532564,
      "lng": -3.7820713984695913
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5898",
    "name": "Escuela Infantil Margal",
    "slug": "escuela-infantil-margal",
    "type": "private",
    "address": "CALLE SIERRA TOLEDANA 7",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.400365717704936,
      "lng": -3.6609521808005088
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134230",
    "name": "Escuela Infantil Margot",
    "slug": "escuela-infantil-margot",
    "type": "private",
    "address": "CALLE VALDESANGIL 41",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46908701170943,
      "lng": -3.71680763852872
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5398134",
    "name": "Escuela Infantil María Auxiliadora",
    "slug": "escuela-infantil-maria-auxiliadora",
    "type": "private",
    "address": "CALLE PAN Y TOROS 19",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35935043853221,
      "lng": -3.694233576164746
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5611",
    "name": "Escuela Infantil María Inmaculada",
    "slug": "escuela-infantil-maria-inmaculada",
    "type": "private",
    "address": "CALLE LUIS RUIZ 26",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.431435458702204,
      "lng": -3.6389622599069518
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5630",
    "name": "Escuela Infantil Menagar",
    "slug": "escuela-infantil-menagar",
    "type": "private",
    "address": "CALLE CHILE 14",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45624445719778,
      "lng": -3.675722854513903
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5398104",
    "name": "Escuela Infantil Merlin",
    "slug": "escuela-infantil-merlin",
    "type": "private",
    "address": "CALLE MERCURIO 51",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.404991832566445,
      "lng": -3.6041469169667586
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4871260",
    "name": "Escuela Infantil Mi Casita",
    "slug": "escuela-infantil-mi-casita",
    "type": "private",
    "address": "CALLE CARACOLI 2",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47353371682618,
      "lng": -3.635845667385439
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178647",
    "name": "Escuela Infantil Mi Cole. Calle Martínez Villergas",
    "slug": "escuela-infantil-mi-cole-calle-martinez-villergas",
    "type": "private",
    "address": "CALLE MARTINEZ VILLERGAS 16",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.440816965029036,
      "lng": -3.6529175073820603
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62722",
    "name": "Escuela Infantil Mi Primer Cole",
    "slug": "escuela-infantil-mi-primer-cole",
    "type": "private",
    "address": "CALLE SILVANO 182",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.462457851341924,
      "lng": -3.6249842042981855
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5904",
    "name": "Escuela Infantil Mi Primer Cole 2",
    "slug": "escuela-infantil-mi-primer-cole-2",
    "type": "private",
    "address": "CALLE RAMON DE AGUINAGA 5",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42695244580077,
      "lng": -3.663923788029437
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5907",
    "name": "Escuela Infantil Mi Primer Cole 3",
    "slug": "escuela-infantil-mi-primer-cole-3",
    "type": "private",
    "address": "CALLE VEREDA DEL CARMEN 9",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42988103282442,
      "lng": -3.65113765464697
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178921",
    "name": "Escuela Infantil Mi Primer Cole 4",
    "slug": "escuela-infantil-mi-primer-cole-4",
    "type": "private",
    "address": "CALLE TIBERIADES 10",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46648988367397,
      "lng": -3.6372654897310106
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167571",
    "name": "Escuela Infantil Micos Mi Primer Cole",
    "slug": "escuela-infantil-micos-mi-primer-cole",
    "type": "private",
    "address": "CALLE GUADALQUIVIR 16",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4468543253188,
      "lng": -3.686890375186424
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6165966",
    "name": "Escuela Infantil Miniclub",
    "slug": "escuela-infantil-miniclub",
    "type": "private",
    "address": "CALLE CAMPO DE LA ESTRELLA (Local C2-7) 7",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.504420024439035,
      "lng": -3.671827431599567
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134351",
    "name": "Escuela Infantil Mínimos y Diminutos",
    "slug": "escuela-infantil-minimos-y-diminutos",
    "type": "private",
    "address": "CALLE SESEÑA 28",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39873426274983,
      "lng": -3.76073331347524
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4785401",
    "name": "Escuela Infantil Mis Bebes",
    "slug": "escuela-infantil-mis-bebes",
    "type": "private",
    "address": "AVENIDA MONASTERIO DE EL ESCORIAL 26",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50421375131137,
      "lng": -3.706417800809161
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8157241",
    "name": "Escuela Infantil Mis Primeros Pasitos",
    "slug": "escuela-infantil-mis-primeros-pasitos",
    "type": "private",
    "address": "CALLE VILLAMAYOR DE SANTIAGO 11",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37585328456374,
      "lng": -3.6098825322235633
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Jornada continuada"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5644",
    "name": "Escuela Infantil Monseñor Alves Bras",
    "slug": "escuela-infantil-monsenor-alves-bras",
    "type": "private",
    "address": "CALLE VILLAVICIOSA 24",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39764796641548,
      "lng": -3.7696884041660024
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4940672",
    "name": "Escuela Infantil Montemar",
    "slug": "escuela-infantil-montemar",
    "type": "private",
    "address": "CALLE MONASTERIO DE OSEIRA 19",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.51059842313387,
      "lng": -3.6964637301186376
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5312606",
    "name": "Escuela Infantil MS Kids",
    "slug": "escuela-infantil-ms-kids",
    "type": "private",
    "address": "CALLE HIERRO 15 17",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.392942618106495,
      "lng": -3.6916916558271247
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5364287",
    "name": "Escuela Infantil Mundo Mágico Luismapetonga",
    "slug": "escuela-infantil-mundo-magico-luismapetonga",
    "type": "private",
    "address": "CARRETERA VICALVARO A LA ESTACION DE O'DONNELL 18",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40398240204503,
      "lng": -3.5920349346805676
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "58241",
    "name": "Escuela infantil municipal Agua Dulce",
    "slug": "escuela-infantil-municipal-agua-dulce",
    "type": "private",
    "address": "CALLE LEÑEROS 25",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45406088024461,
      "lng": -3.7093713617566357
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4549323",
    "name": "Escuela infantil municipal Altair",
    "slug": "escuela-infantil-municipal-altair",
    "type": "private",
    "address": "CALLE JOSE DE CADALSO 43",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37813189249392,
      "lng": -3.7687005492302084
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5299172",
    "name": "Escuela infantil municipal Amanecer",
    "slug": "escuela-infantil-municipal-amanecer",
    "type": "private",
    "address": "CALLE TITANIO 7",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40198995600377,
      "lng": -3.6010443459563537
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633312",
    "name": "Escuela infantil municipal Ana de Austria",
    "slug": "escuela-infantil-municipal-ana-de-austria",
    "type": "private",
    "address": "CALLE ANA DE AUSTRIA 32",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49552153813781,
      "lng": -3.655736850911649
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11055694",
    "name": "Escuela infantil municipal Antonio Mercero",
    "slug": "escuela-infantil-municipal-antonio-mercero",
    "type": "private",
    "address": "AVENIDA VALLADOLID 49",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42943683896261,
      "lng": -3.731764974179636
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4724002",
    "name": "Escuela infantil municipal Campanilla",
    "slug": "escuela-infantil-municipal-campanilla",
    "type": "private",
    "address": "CALLE AVILA 4",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.452700492043,
      "lng": -3.7019980764784606
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5252087",
    "name": "Escuela infantil municipal Cielo Azul",
    "slug": "escuela-infantil-municipal-cielo-azul",
    "type": "private",
    "address": "BULEVAR INDALECIO PRIETO 16",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40182039479394,
      "lng": -3.6211941394147757
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633339",
    "name": "Escuela infantil municipal Doña Francisquita",
    "slug": "escuela-infantil-municipal-dona-francisquita",
    "type": "private",
    "address": "CALLE CAMBADOS 1",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47868156347292,
      "lng": -3.6302312847478593
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "28779",
    "name": "Escuela infantil municipal El Alba",
    "slug": "escuela-infantil-municipal-el-alba",
    "type": "private",
    "address": "CALLE TOLEDO 181",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4017650455756,
      "lng": -3.713512276375299
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5632719",
    "name": "Escuela infantil municipal El Barberillo de Lavapiés",
    "slug": "escuela-infantil-municipal-el-barberillo-de-lavapies",
    "type": "private",
    "address": "CALLE GRANITO 32",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39371756597044,
      "lng": -3.6901560198197485
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5632789",
    "name": "Escuela infantil municipal El Bateo",
    "slug": "escuela-infantil-municipal-el-bateo",
    "type": "private",
    "address": "CALLE PINOS DE OSUNA 3",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45115316018945,
      "lng": -3.5921656725702142
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "172970",
    "name": "Escuela infantil municipal El Bosque",
    "slug": "escuela-infantil-municipal-el-bosque",
    "type": "private",
    "address": "CALLE DELICIAS 32",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4043520221113,
      "lng": -3.695544214066272
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633412",
    "name": "Escuela infantil municipal El Caserío",
    "slug": "escuela-infantil-municipal-el-caserio",
    "type": "private",
    "address": "CALLE MARIA TERESA ROBLEDO 3",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3873926648154,
      "lng": -3.6577856265450226
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "100359",
    "name": "Escuela infantil municipal El Duende",
    "slug": "escuela-infantil-municipal-el-duende",
    "type": "private",
    "address": "CALLE PALMA 36",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42646911249971,
      "lng": -3.7049381572879123
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10936384",
    "name": "Escuela infantil municipal El Fresno",
    "slug": "escuela-infantil-municipal-el-fresno",
    "type": "private",
    "address": "CALLE SENDA DEL INFANTE 46",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.493754014053536,
      "lng": -3.7257050333315007
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "58242",
    "name": "Escuela infantil municipal El Lirón",
    "slug": "escuela-infantil-municipal-el-liron",
    "type": "private",
    "address": "CALLE PICO DE LOS ARTILLEROS 123",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40154142411511,
      "lng": -3.642568350981219
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10888967",
    "name": "Escuela infantil municipal El Mamut",
    "slug": "escuela-infantil-municipal-el-mamut",
    "type": "private",
    "address": "CALLE GANADOS DEL SALOBRAL 7",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.33746780068778,
      "lng": -3.6776394947920563
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4552951",
    "name": "Escuela infantil municipal El Manantial",
    "slug": "escuela-infantil-municipal-el-manantial",
    "type": "private",
    "address": "CALLE CARLOS FUENTES 2",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40278783515925,
      "lng": -3.7441981544259706
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5981488",
    "name": "Escuela infantil municipal El Olivar",
    "slug": "escuela-infantil-municipal-el-olivar",
    "type": "private",
    "address": "CALLE OLIVAR 48",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40955901220526,
      "lng": -3.7015495991222993
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5072",
    "name": "Escuela infantil municipal El Rocío",
    "slug": "escuela-infantil-municipal-el-rocio",
    "type": "private",
    "address": "CARRETERA CARABANCHEL A VILLAVERDE 107",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3509775884553,
      "lng": -3.7066886127927585
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5039",
    "name": "Escuela infantil municipal El Sol",
    "slug": "escuela-infantil-municipal-el-sol",
    "type": "private",
    "address": "CALLE ENRIQUE JARDIEL PONCELA 8",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46091554103502,
      "lng": -3.670320512563348
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10888974",
    "name": "Escuela infantil municipal El Tren de Arganda",
    "slug": "escuela-infantil-municipal-el-tren-de-arganda",
    "type": "private",
    "address": "PLAZA DOCTOR LAGUNA 11",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41471562186326,
      "lng": -3.673091236764771
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8226010",
    "name": "Escuela infantil municipal Escuelas de San Antón",
    "slug": "escuela-infantil-municipal-escuelas-de-san-anton",
    "type": "private",
    "address": "CALLE FARMACIA 13",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42378301276458,
      "lng": -3.6987856754744657
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633199",
    "name": "Escuela infantil municipal Fernando el Católico",
    "slug": "escuela-infantil-municipal-fernando-el-catolico",
    "type": "private",
    "address": "CALLE FERNANDO EL CATOLICO 16",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.434103689530446,
      "lng": -3.7097392943348284
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12683273",
    "name": "Escuela infantil municipal Fúcar",
    "slug": "escuela-infantil-municipal-fucar",
    "type": "private",
    "address": "COSTANILLA DESAMPARADOS 15",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41201484533784,
      "lng": -3.696612085925128
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633259",
    "name": "Escuela infantil municipal Gigantes y Cabezudos",
    "slug": "escuela-infantil-municipal-gigantes-y-cabezudos",
    "type": "private",
    "address": "CALLE RAFAEL BERGAMIN 28",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.450578924722464,
      "lng": -3.6599344009125048
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "58239",
    "name": "Escuela infantil municipal Hiedra",
    "slug": "escuela-infantil-municipal-hiedra",
    "type": "private",
    "address": "CALLE AMPOSTA 34",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42289407876372,
      "lng": -3.6192425284922436
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11647681",
    "name": "Escuela infantil municipal José Gómez Gil",
    "slug": "escuela-infantil-municipal-jose-gomez-gil",
    "type": "private",
    "address": "CALLE EMBALSE DE PINILLA 32",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35832412722327,
      "lng": -3.596702462592952
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633447",
    "name": "Escuela infantil municipal La Alegría de la Huerta",
    "slug": "escuela-infantil-municipal-la-alegria-de-la-huerta",
    "type": "private",
    "address": "CALLE HELSINKI 2",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4244413057318,
      "lng": -3.602635166157978
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10904841",
    "name": "Escuela infantil municipal La Ardilla",
    "slug": "escuela-infantil-municipal-la-ardilla",
    "type": "private",
    "address": "CALLE PRINCIPE CARLOS (C/V PINTOR IGNACIO ZULOAGA) 1",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48584075407322,
      "lng": -3.651798143659265
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10888979",
    "name": "Escuela infantil municipal La Bola de Cristal",
    "slug": "escuela-infantil-municipal-la-bola-de-cristal",
    "type": "private",
    "address": "CALLE ISLAS BISAGOS 13",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46769867537168,
      "lng": -3.7156569423684775
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4552960",
    "name": "Escuela infantil municipal La Brisa",
    "slug": "escuela-infantil-municipal-la-brisa",
    "type": "private",
    "address": "AVENIDA ASTURIAS 72",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47333501609979,
      "lng": -3.698367154592483
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11184076",
    "name": "Escuela infantil municipal La Bruja Avería - Lolo Rico",
    "slug": "escuela-infantil-municipal-la-bruja-averia-lolo-rico",
    "type": "private",
    "address": "CALLE RODAS 20",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40809923624453,
      "lng": -3.706383215058181
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5336",
    "name": "Escuela infantil municipal La Caracola",
    "slug": "escuela-infantil-municipal-la-caracola",
    "type": "private",
    "address": "CALLE BELORADO 1",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48807363495185,
      "lng": -3.6848207707128635
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5632722",
    "name": "Escuela infantil municipal La Chulapona",
    "slug": "escuela-infantil-municipal-la-chulapona",
    "type": "private",
    "address": "CALLE BAHIA DE POLLENSA 3",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.464346272894424,
      "lng": -3.5925288720620188
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "28783",
    "name": "Escuela infantil municipal La Colina",
    "slug": "escuela-infantil-municipal-la-colina",
    "type": "private",
    "address": "CALLE NUESTRA SEÑORA DE ARACELI 2",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47159015347659,
      "lng": -3.578814477331226
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "84666",
    "name": "Escuela infantil municipal La Cornisa",
    "slug": "escuela-infantil-municipal-la-cornisa",
    "type": "private",
    "address": "CALLE CRISTO DE LA VICTORIA 23",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3811789921249,
      "lng": -3.7017852385259076
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633276",
    "name": "Escuela infantil municipal La Corte de Faraón",
    "slug": "escuela-infantil-municipal-la-corte-de-faraon",
    "type": "private",
    "address": "CALLE CHANTADA 41",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47304239359628,
      "lng": -3.715280725332747
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633456",
    "name": "Escuela infantil municipal La del Manojo de Rosas",
    "slug": "escuela-infantil-municipal-la-del-manojo-de-rosas",
    "type": "private",
    "address": "CALLE RAVENA 12",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41827932953887,
      "lng": -3.616265188601519
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633393",
    "name": "Escuela infantil municipal La del Soto del Parral",
    "slug": "escuela-infantil-municipal-la-del-soto-del-parral",
    "type": "private",
    "address": "CALLE TROMPAS 19",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37197319564591,
      "lng": -3.7681711768688495
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633332",
    "name": "Escuela infantil municipal La Gran Vía",
    "slug": "escuela-infantil-municipal-la-gran-via",
    "type": "private",
    "address": "CALLE SILVANO 99",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.462802758823514,
      "lng": -3.634435221406373
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5073",
    "name": "Escuela infantil municipal La Luna",
    "slug": "escuela-infantil-municipal-la-luna",
    "type": "private",
    "address": "CALLE BENIMAMET 109",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.344340447262475,
      "lng": -3.685296004324213
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10957922",
    "name": "Escuela infantil municipal La Melonera",
    "slug": "escuela-infantil-municipal-la-melonera",
    "type": "private",
    "address": "CALLE EROS 2",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39390298324836,
      "lng": -3.680551491708351
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5299025",
    "name": "Escuela infantil municipal La Oliva",
    "slug": "escuela-infantil-municipal-la-oliva",
    "type": "private",
    "address": "CALLE GAINZA 46",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36563722434557,
      "lng": -3.7151923280205694
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5341",
    "name": "Escuela infantil municipal La Paloma",
    "slug": "escuela-infantil-municipal-la-paloma",
    "type": "private",
    "address": "CALLE TABERNILLAS 4",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41065179506282,
      "lng": -3.7115802564668754
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633158",
    "name": "Escuela infantil municipal La Patria Chica",
    "slug": "escuela-infantil-municipal-la-patria-chica",
    "type": "private",
    "address": "CALLE PATRIMONIO DE LA HUMANIDAD 31",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36168337750411,
      "lng": -3.7629430009334297
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633600",
    "name": "Escuela infantil municipal La Revoltosa",
    "slug": "escuela-infantil-municipal-la-revoltosa",
    "type": "private",
    "address": "CALLE JOSE ANTONIO REBOLLEDO Y PALMA 18",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36607876608522,
      "lng": -3.588947072838845
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633294",
    "name": "Escuela infantil municipal La Rosa del Azafrán",
    "slug": "escuela-infantil-municipal-la-rosa-del-azafran",
    "type": "private",
    "address": "CALLE CUEVA DE MONTESINOS 2",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50050331171224,
      "lng": -3.68829881383211
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633382",
    "name": "Escuela infantil municipal La Verbena de la Paloma",
    "slug": "escuela-infantil-municipal-la-verbena-de-la-paloma",
    "type": "private",
    "address": "CALLE FUERTE DE NAVIDAD 17",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.380491665056326,
      "lng": -3.7660767346972173
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Educación de 0 a 3 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5298904",
    "name": "Escuela infantil municipal Las Amapolas",
    "slug": "escuela-infantil-municipal-las-amapolas",
    "type": "private",
    "address": "CALLE OBOLO 14",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.370623480071096,
      "lng": -3.741251804918924
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5299104",
    "name": "Escuela infantil municipal Las Azaleas",
    "slug": "escuela-infantil-municipal-las-azaleas",
    "type": "private",
    "address": "CALLE PORTUGALETE 6",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42613036374425,
      "lng": -3.635469776500989
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11647597",
    "name": "Escuela infantil municipal Las Golondrinas",
    "slug": "escuela-infantil-municipal-las-golondrinas",
    "type": "private",
    "address": "CALLE JOSEFA VALCARCEL 158",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.449158416350244,
      "lng": -3.6102123944771636
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633460",
    "name": "Escuela infantil municipal Las Leandras",
    "slug": "escuela-infantil-municipal-las-leandras",
    "type": "private",
    "address": "CARRETERA ACCESO A LA ESTACION DE O'DONNELL ",
    "city": "MADRID",
    "postalCode": "",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.442551699479736,
      "lng": -3.589224618793631
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5252132",
    "name": "Escuela infantil municipal Las Mercedes",
    "slug": "escuela-infantil-municipal-las-mercedes",
    "type": "private",
    "address": "CALLE SAMANIEGO 22",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.442501078875445,
      "lng": -3.5804043676101007
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "132987",
    "name": "Escuela infantil municipal Las Nubes",
    "slug": "escuela-infantil-municipal-las-nubes",
    "type": "private",
    "address": "CALLE ANTONIO NEBRIJA 7",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40365358728283,
      "lng": -3.6842590892111273
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10957943",
    "name": "Escuela infantil municipal Las Pléyades",
    "slug": "escuela-infantil-municipal-las-pleyades",
    "type": "private",
    "address": "CALLE MANUEL GUTIERREZ MELLADO 21",
    "city": "MADRID",
    "postalCode": "28055",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49496785628896,
      "lng": -3.6201774927951726
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "132982",
    "name": "Escuela infantil municipal Las Viñas",
    "slug": "escuela-infantil-municipal-las-vinas",
    "type": "private",
    "address": "CALLE ESTUDIO 6",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.460576198420775,
      "lng": -3.7857037462052063
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633582",
    "name": "Escuela infantil municipal Los Gavilanes",
    "slug": "escuela-infantil-municipal-los-gavilanes",
    "type": "private",
    "address": "CALLE TIZIANO 7",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4510850477906,
      "lng": -3.7024647767258325
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "28784",
    "name": "Escuela infantil municipal Los Juncos",
    "slug": "escuela-infantil-municipal-los-juncos",
    "type": "private",
    "address": "PLAZA JUVENTUD 7",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40912749404517,
      "lng": -3.605774962043424
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5340",
    "name": "Escuela infantil municipal Los Pinos",
    "slug": "escuela-infantil-municipal-los-pinos",
    "type": "private",
    "address": "CALLE ROCAFORT 2",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34123812234347,
      "lng": -3.69037444346592
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633604",
    "name": "Escuela infantil municipal Los Sobrinos del Capitán Grant",
    "slug": "escuela-infantil-municipal-los-sobrinos-del-capitan-grant",
    "type": "private",
    "address": "AVENIDA LA GAVIA 22",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37360084784636,
      "lng": -3.611617365195693
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "187609",
    "name": "Escuela infantil municipal Luis Bello",
    "slug": "escuela-infantil-municipal-luis-bello",
    "type": "private",
    "address": "CALLE JUAN BAUTISTA DE TOLEDO 5",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.443633085040005,
      "lng": -3.6739692982111727
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633425",
    "name": "Escuela infantil municipal Luisa Fernanda",
    "slug": "escuela-infantil-municipal-luisa-fernanda",
    "type": "private",
    "address": "CALLE COCHERON DE LA VILLA 29",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38152351850743,
      "lng": -3.635992893537739
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11368108",
    "name": "Escuela infantil municipal Margarita Salas",
    "slug": "escuela-infantil-municipal-margarita-salas",
    "type": "private",
    "address": "CALLE CAVANILLES 54",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40438324670531,
      "lng": -3.6729005068427316
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12269488",
    "name": "Escuela infantil municipal María Moliner",
    "slug": "escuela-infantil-municipal-maria-moliner",
    "type": "private",
    "address": "PASEO DIRECCION 305",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.470079203938035,
      "lng": -3.7032397388198564
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5633596",
    "name": "Escuela infantil municipal Molinos de Viento",
    "slug": "escuela-infantil-municipal-molinos-de-viento",
    "type": "private",
    "address": "CAMINO FUENTE DE ARRIBA 4",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40321377463398,
      "lng": -3.609917274177793
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11647575",
    "name": "Escuela infantil municipal Muñeco de Nieve",
    "slug": "escuela-infantil-municipal-muneco-de-nieve",
    "type": "private",
    "address": "CALLE ENRIQUE URQUIJO 56",
    "city": "MADRID",
    "postalCode": "28052",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39930206378953,
      "lng": -3.5605912170897724
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "187607",
    "name": "Escuela infantil municipal Osa Menor",
    "slug": "escuela-infantil-municipal-osa-menor",
    "type": "private",
    "address": "CALLE MEJIA LEQUERICA 21",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4280399538175,
      "lng": -3.699501702258276
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11508438",
    "name": "Escuela infantil municipal Parque de Ingenieros",
    "slug": "escuela-infantil-municipal-parque-de-ingenieros",
    "type": "private",
    "address": "CALLE EL SANTO DE LA ISIDRA 2",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.354672479088904,
      "lng": -3.7047184178329884
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10957917",
    "name": "Escuela infantil municipal Pensamiento",
    "slug": "escuela-infantil-municipal-pensamiento",
    "type": "private",
    "address": "CALLE MIRASIERRA 27",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38943008851109,
      "lng": -3.7051307823732746
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10904800",
    "name": "Escuela infantil municipal Poeta Gloria Fuertes",
    "slug": "escuela-infantil-municipal-poeta-gloria-fuertes",
    "type": "private",
    "address": "CALLE CASTILLO DE CANDANCHU 46",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50444594533402,
      "lng": -3.67868023321698
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "88758",
    "name": "Escuela infantil municipal Ruiz Jiménez",
    "slug": "escuela-infantil-municipal-ruiz-jimenez",
    "type": "private",
    "address": "CALLE JOSE PICON 17",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.435092812438825,
      "lng": -3.672374874199507
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10888929",
    "name": "Escuela infantil municipal Sabina",
    "slug": "escuela-infantil-municipal-sabina",
    "type": "private",
    "address": "CALLE CAÑÓN DEL RIO LOBOS 4",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40488549196435,
      "lng": -3.6320315642486043
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "50199310",
    "name": "Escuela infantil municipal Salamanca (Próxima apertura Curso 2026-2027)",
    "slug": "escuela-infantil-municipal-salamanca-proxima-apertura-curso-2026-2027",
    "type": "private",
    "address": "CALLE FRANCISCO REMIRO 21",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43857869931732,
      "lng": -3.66658672914608
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "168220",
    "name": "Escuela infantil municipal Tarabilla",
    "slug": "escuela-infantil-municipal-tarabilla",
    "type": "private",
    "address": "CALLE GANDHI 14",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42369169272075,
      "lng": -3.6349635101992215
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4552561",
    "name": "Escuela infantil municipal VeoVeo",
    "slug": "escuela-infantil-municipal-veoveo",
    "type": "private",
    "address": "CALLE CONDESA DE VENADITO 3",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44410961610912,
      "lng": -3.6553313008969353
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "179661",
    "name": "Escuela Infantil Muñecos",
    "slug": "escuela-infantil-munecos",
    "type": "private",
    "address": "CALLE MINERVA 25",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40191646418931,
      "lng": -3.5995824257948654
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5273558",
    "name": "Escuela Infantil Muñequito",
    "slug": "escuela-infantil-munequito",
    "type": "private",
    "address": "CALLE POLAN 7 8",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37372070243927,
      "lng": -3.7263858039679465
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5847",
    "name": "Escuela Infantil Nanos",
    "slug": "escuela-infantil-nanos",
    "type": "private",
    "address": "CALLE LA BAÑEZA 43",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47493446301679,
      "lng": -3.7181557070193363
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161687",
    "name": "Escuela Infantil Nanos Doctor Vallejo",
    "slug": "escuela-infantil-nanos-doctor-vallejo",
    "type": "private",
    "address": "CALLE DOCTOR VALLEJO 3",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43600687847679,
      "lng": -3.6431439442132802
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "129931",
    "name": "Escuela Infantil Nayer Kids",
    "slug": "escuela-infantil-nayer-kids",
    "type": "private",
    "address": "AVENIDA PESETA 22",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36376847729877,
      "lng": -3.7640745610461126
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5653",
    "name": "Escuela Infantil Nazaret. Calle Arenas de Iguña",
    "slug": "escuela-infantil-nazaret-calle-arenas-de-iguna",
    "type": "private",
    "address": "CALLE ARENAS DE IGUÑA 1",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39161777178598,
      "lng": -3.646633272598276
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5654",
    "name": "Escuela Infantil Nazaret. Calle Quintiliano",
    "slug": "escuela-infantil-nazaret-calle-quintiliano",
    "type": "private",
    "address": "CALLE QUINTILIANO 3",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44169878040434,
      "lng": -3.676603027343607
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6124437",
    "name": "Escuela Infantil Nemomarlín",
    "slug": "escuela-infantil-nemomarlin",
    "type": "private",
    "address": "CALLE MELENDEZ VALDES 28",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.433031783064294,
      "lng": -3.7111781689083876
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "91122",
    "name": "Escuela Infantil Nemomarlin Aravaca",
    "slug": "escuela-infantil-nemomarlin-aravaca",
    "type": "private",
    "address": "CALLE LAMIACO 12",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.473695435588446,
      "lng": -3.821660138869749
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6123533",
    "name": "Escuela Infantil Nemomarlín Arganzuela",
    "slug": "escuela-infantil-nemomarlin-arganzuela",
    "type": "private",
    "address": "CALLE CARMEN COBEÑA 4",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40099372459026,
      "lng": -3.7114890337892765
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11017932",
    "name": "Escuela Infantil Nemomarlin Arroyo del Fresno",
    "slug": "escuela-infantil-nemomarlin-arroyo-del-fresno",
    "type": "private",
    "address": "CALLE ARROYO DEL MONTE 53",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4888090336165,
      "lng": -3.7282088427622946
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6149808",
    "name": "Escuela Infantil Nemomarlin Butarque",
    "slug": "escuela-infantil-nemomarlin-butarque",
    "type": "private",
    "address": "CALLE BERROCAL 3",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34761393721529,
      "lng": -3.677110241434162
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190710",
    "name": "Escuela Infantil Nemomarlin Carabanchel",
    "slug": "escuela-infantil-nemomarlin-carabanchel",
    "type": "private",
    "address": "CALLE PINAR DE SAN JOSE 23",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36224463326618,
      "lng": -3.7667084547003045
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161546",
    "name": "Escuela Infantil Nemomarlín Ciudad Jardín",
    "slug": "escuela-infantil-nemomarlin-ciudad-jardin",
    "type": "private",
    "address": "CALLE NIEREMBERG 8",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44743126498061,
      "lng": -3.671495472342756
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6226729",
    "name": "Escuela Infantil Nemomarlín Conde de Orgaz",
    "slug": "escuela-infantil-nemomarlin-conde-de-orgaz",
    "type": "private",
    "address": "CALLE TORONGA 25",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45648024974503,
      "lng": -3.6503211271902916
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10524642",
    "name": "Escuela Infantil Nemomarlín Cuatro Caminos",
    "slug": "escuela-infantil-nemomarlin-cuatro-caminos",
    "type": "private",
    "address": "CALLE BRAVO MURILLO 107",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.448353906147155,
      "lng": -3.705655685090862
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161458",
    "name": "Escuela Infantil Nemomarlín Guindalera",
    "slug": "escuela-infantil-nemomarlin-guindalera",
    "type": "private",
    "address": "CALLE MARIA TERESA 14",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43594245302815,
      "lng": -3.6687872901321534
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10511924",
    "name": "Escuela Infantil Nemomarlín Las Tablas",
    "slug": "escuela-infantil-nemomarlin-las-tablas",
    "type": "private",
    "address": "CALLE FROMISTA 5",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.5093256205363,
      "lng": -3.6771878078672056
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6151509",
    "name": "Escuela Infantil Nemomarlin Montecarmelo",
    "slug": "escuela-infantil-nemomarlin-montecarmelo",
    "type": "private",
    "address": "CALLE MONASTERIO DE LAS BATUECAS 15",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.504094266668645,
      "lng": -3.705330741758753
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6124460",
    "name": "Escuela Infantil Nemomarlín Paseo de la Habana",
    "slug": "escuela-infantil-nemomarlin-paseo-de-la-habana",
    "type": "private",
    "address": "PASEO LA HABANA (LOCAL 1 Y 2) 87",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.457317667265,
      "lng": -3.6816660158526244
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161414",
    "name": "Escuela Infantil Nemomarlín Pintor Rosales",
    "slug": "escuela-infantil-nemomarlin-pintor-rosales",
    "type": "private",
    "address": "PASEO PINTOR ROSALES 32",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42732035257515,
      "lng": -3.7198652917862693
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6822610",
    "name": "Escuela Infantil Nemomarlín Retiro",
    "slug": "escuela-infantil-nemomarlin-retiro",
    "type": "private",
    "address": "AVENIDA MENENDEZ PELAYO 71",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41094407811531,
      "lng": -3.6762359780329117
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161475",
    "name": "Escuela Infantil Nemomarlín Sanchinarro",
    "slug": "escuela-infantil-nemomarlin-sanchinarro",
    "type": "private",
    "address": "AVENIDA ALCALDE CONDE DE MAYALDE 7",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49094540144197,
      "lng": -3.6540757111531885
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161378",
    "name": "Escuela Infantil Nemomarlín Valdebebas",
    "slug": "escuela-infantil-nemomarlin-valdebebas",
    "type": "private",
    "address": "AVENIDA JUAN ANTONIO SAMARANCH 37",
    "city": "MADRID",
    "postalCode": "28055",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48374232114837,
      "lng": -3.6173000472210837
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4775237",
    "name": "Escuela Infantil Nenúfar",
    "slug": "escuela-infantil-nenufar",
    "type": "private",
    "address": "CALLE VILLAJIMENA 30",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40717761165793,
      "lng": -3.604802868406069
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181067",
    "name": "Escuela Infantil Nubbe",
    "slug": "escuela-infantil-nubbe",
    "type": "private",
    "address": "PLAZA TRES OLIVOS 16",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.501907632251445,
      "lng": -3.6899890315634942
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167587",
    "name": "Escuela Infantil Nubes 2",
    "slug": "escuela-infantil-nubes-2",
    "type": "private",
    "address": "CALLE SANTA SATURNINA 11",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39871083961462,
      "lng": -3.7184259352844493
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181088",
    "name": "Escuela Infantil Nubes. Calle Gabriel Usera 39",
    "slug": "escuela-infantil-nubes-calle-gabriel-usera-39",
    "type": "private",
    "address": "CALLE GABRIEL USERA 39",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38456106678152,
      "lng": -3.7085710471979563
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5809",
    "name": "Escuela Infantil Nuestra Señora de la Encarnación",
    "slug": "escuela-infantil-nuestra-senora-de-la-encarnacion",
    "type": "private",
    "address": "PLAZA INMACULADA CONCEPCION 1",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39285630514031,
      "lng": -3.711851125025007
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Capilla Misioneras de Jesús",
      "María y José"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5398853",
    "name": "Escuela Infantil Nuestra Señora de la Providencia",
    "slug": "escuela-infantil-nuestra-senora-de-la-providencia",
    "type": "private",
    "address": "CALLE MARQUES DE PORTUGALETE 14",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44644601405335,
      "lng": -3.64517735570686
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5860",
    "name": "Escuela Infantil Nuestra Señora de las Victorias",
    "slug": "escuela-infantil-nuestra-senora-de-las-victorias",
    "type": "private",
    "address": "CALLE FRAY JUNIPERO SERRA 26 SITUADA EN LA MISMA PARROQUIA",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46465951918645,
      "lng": -3.699834275026594
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5556",
    "name": "Escuela Infantil Nuestra Señora de los Dolores",
    "slug": "escuela-infantil-nuestra-senora-de-los-dolores",
    "type": "private",
    "address": "CALLE SAN BERNARDO 99",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43060607142658,
      "lng": -3.7056705556061242
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5911",
    "name": "Escuela Infantil Nuestra Señora del Camino",
    "slug": "escuela-infantil-nuestra-senora-del-camino",
    "type": "private",
    "address": "CALLE MARTINEZ DE LA RIVA 127 PLAZA PEñA GUDINA S/N",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38616039003938,
      "lng": -3.663746929150385
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5959",
    "name": "Escuela Infantil Nuestra Señora del Rosario",
    "slug": "escuela-infantil-nuestra-senora-del-rosario",
    "type": "private",
    "address": "CALLE RELAMPAGUITO C/  PUEBLA DE SANABRIA , 20",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.349849648819315,
      "lng": -3.708454908996045
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10524652",
    "name": "Escuela Infantil Nueva Vida",
    "slug": "escuela-infantil-nueva-vida",
    "type": "private",
    "address": " SAMBARA 80",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43552408237606,
      "lng": -3.647324885252539
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5160405",
    "name": "Escuela Infantil Nuevo Cascabel",
    "slug": "escuela-infantil-nuevo-cascabel",
    "type": "private",
    "address": "CALLE GOLFO DE SALONICA 29",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47821507865169,
      "lng": -3.665242562262053
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399062",
    "name": "Escuela Infantil Ñecos",
    "slug": "escuela-infantil-necos",
    "type": "private",
    "address": "CALLE GUILLEN DE CASTRO 10",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42778293171264,
      "lng": -3.6445274222091832
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399084",
    "name": "Escuela Infantil Okapi",
    "slug": "escuela-infantil-okapi",
    "type": "private",
    "address": "CALLE CORREGIDOR JOSE DE PASAMONTE 24",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.411429662881574,
      "lng": -3.6464692903056086
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7564901",
    "name": "Escuela Infantil Olavide",
    "slug": "escuela-infantil-olavide",
    "type": "private",
    "address": "CALLE GENERAL ALVAREZ DE CASTRO 22",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43572660171037,
      "lng": -3.7021516358353592
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5050",
    "name": "Escuela Infantil Ori Ori",
    "slug": "escuela-infantil-ori-ori",
    "type": "private",
    "address": "CALLE SANTA TECLA 3",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.443065366322614,
      "lng": -3.614168549394849
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "54292",
    "name": "Escuela Infantil Osobuco",
    "slug": "escuela-infantil-osobuco",
    "type": "private",
    "address": "CALLE HUELVA 4",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44919601242804,
      "lng": -3.665439828669336
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "104110",
    "name": "Escuela Infantil Osobuco II",
    "slug": "escuela-infantil-osobuco-ii",
    "type": "private",
    "address": "AVENIDA ALFONSO XIII 30",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45069924264139,
      "lng": -3.667223591620025
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4701740",
    "name": "Escuela Infantil Palmas Palmitas",
    "slug": "escuela-infantil-palmas-palmitas",
    "type": "private",
    "address": "CALLE SAN JUAN DE ORTEGA S/N",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.502340113837214,
      "lng": -3.6716296507477333
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5042",
    "name": "Escuela Infantil Parque de Hortaleza",
    "slug": "escuela-infantil-parque-de-hortaleza",
    "type": "private",
    "address": "CALLE MAR CASPIO 6",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47329815945445,
      "lng": -3.6442192191514455
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399140",
    "name": "Escuela Infantil Pasitos",
    "slug": "escuela-infantil-pasitos",
    "type": "private",
    "address": "CALLE ANDORRA 3",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46228659899211,
      "lng": -3.64629607235588
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5786529",
    "name": "Escuela Infantil Paso a paso",
    "slug": "escuela-infantil-paso-a-paso",
    "type": "private",
    "address": "CALLE VALDELASIERRA 7-B ",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39805083749249,
      "lng": -3.706579604414225
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5841",
    "name": "Escuela Infantil Patuco",
    "slug": "escuela-infantil-patuco",
    "type": "private",
    "address": "CALLE CASTILLEJOS 24",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.456135561407656,
      "lng": -3.7067711816066167
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5732",
    "name": "Escuela Infantil Pekes",
    "slug": "escuela-infantil-pekes",
    "type": "private",
    "address": "CALLE REAL DE ARGANDA 32",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37945676422025,
      "lng": -3.618396977134161
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399153",
    "name": "Escuela Infantil Pelocho",
    "slug": "escuela-infantil-pelocho",
    "type": "private",
    "address": "CALLE LIGONDE 3",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.511353057537924,
      "lng": -3.6693824700210826
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190209",
    "name": "Escuela Infantil Pentapolín",
    "slug": "escuela-infantil-pentapolin",
    "type": "private",
    "address": "CALLE ANTONIO SANFIZ 24",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46125610582297,
      "lng": -3.78772856122925
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4725727",
    "name": "Escuela Infantil Pepito Grillo",
    "slug": "escuela-infantil-pepito-grillo",
    "type": "private",
    "address": "PASEO GINEBRA 45",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.425483302013404,
      "lng": -3.606664350671101
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10124355",
    "name": "Escuela Infantil Pequeando",
    "slug": "escuela-infantil-pequeando",
    "type": "private",
    "address": "CALLE ALCALDE HENCHE DE LA PLATA 32",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49017980288805,
      "lng": -3.6492539527578467
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Jornada continuada"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181122",
    "name": "Escuela Infantil Pequemun",
    "slug": "escuela-infantil-pequemun",
    "type": "private",
    "address": "CALLE OLIVOS 8",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44443736929686,
      "lng": -3.7169820090268524
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4693282",
    "name": "Escuela Infantil Pequeña Gaia",
    "slug": "escuela-infantil-pequena-gaia",
    "type": "private",
    "address": "CALLE BERROCAL 72",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34102010633886,
      "lng": -3.6754195301701427
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4710990",
    "name": "Escuela Infantil Pequeñecos Parque Norte",
    "slug": "escuela-infantil-pequenecos-parque-norte",
    "type": "private",
    "address": "CALLE SERRANO GALVACHE 56",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4766271394155,
      "lng": -3.671880642864413
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399164",
    "name": "Escuela Infantil Pequeñilandia",
    "slug": "escuela-infantil-pequenilandia",
    "type": "private",
    "address": "CALLE VIRGEN DE LOS DESAMPARADOS 42",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34978864282171,
      "lng": -3.6992342195557466
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5726",
    "name": "Escuela Infantil Pequeñines. Calle Pingüino",
    "slug": "escuela-infantil-pequenines-calle-pinguino",
    "type": "private",
    "address": "CALLE PINGÜINO 7",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.379006693044076,
      "lng": -3.7507336764917305
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "42108",
    "name": "Escuela Infantil Pequeño Koala",
    "slug": "escuela-infantil-pequeno-koala",
    "type": "private",
    "address": "CAMINO VIEJO DE VICALVARO 20",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40486034949131,
      "lng": -3.615412122565672
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor - Transporte"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "181127",
    "name": "Escuela Infantil Pequeños Amigos",
    "slug": "escuela-infantil-pequenos-amigos",
    "type": "private",
    "address": "AVENIDA MONASTERIO DE EL ESCORIAL 74",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50791175255282,
      "lng": -3.6938038875493517
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4693116",
    "name": "Escuela Infantil Pequeños Bichitos",
    "slug": "escuela-infantil-pequenos-bichitos",
    "type": "private",
    "address": "CALLE OCAÑA 12",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38416123548589,
      "lng": -3.754678714030125
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399190",
    "name": "Escuela Infantil Peques. Calle Fernando VII.",
    "slug": "escuela-infantil-peques-calle-fernando-vii",
    "type": "private",
    "address": "CALLE FERNANDO VII 5",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43450309558073,
      "lng": -3.6182407478897662
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6226801",
    "name": "Escuela Infantil Peque`s School",
    "slug": "escuela-infantil-peque-s-school",
    "type": "private",
    "address": "AVENIDA BETANZOS 78",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.482438508086304,
      "lng": -3.713858456288056
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5067",
    "name": "Escuela Infantil Petirrojo",
    "slug": "escuela-infantil-petirrojo",
    "type": "private",
    "address": "CALLE LUIS BUÑUEL 4",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3871446957597,
      "lng": -3.644222346532531
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5884",
    "name": "Escuela Infantil Pícolos",
    "slug": "escuela-infantil-picolos",
    "type": "private",
    "address": "CALLE VALMOJADO 117",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39304035272798,
      "lng": -3.7580181025091717
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6802715",
    "name": "Escuela Infantil Pipolandia 2",
    "slug": "escuela-infantil-pipolandia-2",
    "type": "private",
    "address": "CALLE CACERES 50",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39902749930132,
      "lng": -3.7000497702642545
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5736",
    "name": "Escuela Infantil Pipo's. Calle Cáceres",
    "slug": "escuela-infantil-pipo-s-calle-caceres",
    "type": "private",
    "address": "CALLE CACERES 50",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39902764197817,
      "lng": -3.7000262040102516
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "176582",
    "name": "Escuela Infantil Pipo's. Calle General Palanca",
    "slug": "escuela-infantil-pipo-s-calle-general-palanca",
    "type": "private",
    "address": "CALLE GENERAL PALANCA 4",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39953183294026,
      "lng": -3.700078562205596
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62375",
    "name": "Escuela Infantil Pippo",
    "slug": "escuela-infantil-pippo",
    "type": "private",
    "address": "CALLE CLARA DEL REY 33",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44210971288812,
      "lng": -3.671018025319304
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "55850",
    "name": "Escuela Infantil Piruetas",
    "slug": "escuela-infantil-piruetas",
    "type": "private",
    "address": "AVENIDA CANILLEJAS A VICALVARO 82",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.423997382335585,
      "lng": -3.611684586484881
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6318091",
    "name": "Escuela Infantil Pompas",
    "slug": "escuela-infantil-pompas",
    "type": "private",
    "address": "CALLE LOS YEBENES 255",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38946974102784,
      "lng": -3.7515803449309417
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167963",
    "name": "Escuela Infantil Pozo del Tio Raimundo",
    "slug": "escuela-infantil-pozo-del-tio-raimundo",
    "type": "private",
    "address": "CALLE VILLACARRILLO 4",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37638065965038,
      "lng": -3.661448102594628
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5057",
    "name": "Escuela Infantil Pradolongo",
    "slug": "escuela-infantil-pradolongo",
    "type": "private",
    "address": "AVENIDA POBLADOS 144",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37221599896054,
      "lng": -3.708995346847683
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4983698",
    "name": "Escuela Infantil Preschool Fem",
    "slug": "escuela-infantil-preschool-fem",
    "type": "private",
    "address": "CALLE OLIVOS 9",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.444308544951745,
      "lng": -3.717416935434051
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11141038",
    "name": "Escuela Infantil Projardín Bruselas",
    "slug": "escuela-infantil-projardin-bruselas",
    "type": "private",
    "address": "CALLE BRISTOL 1",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43903854604498,
      "lng": -3.662476023631513
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5888",
    "name": "Escuela Infantil Projardín Delicias",
    "slug": "escuela-infantil-projardin-delicias",
    "type": "private",
    "address": "PASEO DELICIAS 65",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39870352710208,
      "lng": -3.694013103489115
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5483",
    "name": "Escuela Infantil Projardín Madrid - 2",
    "slug": "escuela-infantil-projardin-madrid-2",
    "type": "private",
    "address": "CALLE FERMIN CABALLERO 61",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48225138218338,
      "lng": -3.7106001144400707
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11138108",
    "name": "Escuela Infantil Projardín Pinar",
    "slug": "escuela-infantil-projardin-pinar",
    "type": "private",
    "address": "CALLE RAMON CAMARERO 3",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.481817556974185,
      "lng": -3.7295527396723003
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "104216",
    "name": "Escuela Infantil Projardín Retiro",
    "slug": "escuela-infantil-projardin-retiro",
    "type": "private",
    "address": "PLAZA DOCTOR LAGUNA 5",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41551531622078,
      "lng": -3.6725217673452337
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11035014",
    "name": "Escuela Infantil Projardín Valdebebas",
    "slug": "escuela-infantil-projardin-valdebebas",
    "type": "private",
    "address": "CALLE MARIA DE LAS MERCEDES DE BORBON 162",
    "city": "MADRID",
    "postalCode": "28055",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49313277122508,
      "lng": -3.616651764210203
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5990",
    "name": "Escuela Infantil Projardín Ventas",
    "slug": "escuela-infantil-projardin-ventas",
    "type": "private",
    "address": "CALLE RAMON PATUEL 10",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.428177116883376,
      "lng": -3.6561315338464513
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5037",
    "name": "Escuela Infantil Pública Cinco Lobitos",
    "slug": "escuela-infantil-publica-cinco-lobitos",
    "type": "private",
    "address": "CALLE MORALES s/n",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.365810064039415,
      "lng": -3.756005144266
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5046",
    "name": "Escuela Infantil Puerta del Ángel",
    "slug": "escuela-infantil-puerta-del-angel",
    "type": "private",
    "address": "CALLE JUAN TORNERO 13",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41153349091182,
      "lng": -3.7275465388441327
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399429",
    "name": "Escuela Infantil Quita y Pon",
    "slug": "escuela-infantil-quita-y-pon",
    "type": "private",
    "address": "CALLE DON QUIJOTE 41",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45006023092475,
      "lng": -3.6991285426158385
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5145583",
    "name": "Escuela Infantil Rayuela",
    "slug": "escuela-infantil-rayuela",
    "type": "private",
    "address": "AVENIDA VILLA DE VALLECAS",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36944041513951,
      "lng": -3.6197424217235596
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5786560",
    "name": "Escuela Infantil Reggio",
    "slug": "escuela-infantil-reggio",
    "type": "private",
    "address": "CALLE SAN JUAN DE ORTEGA 20",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.504567740717754,
      "lng": -3.674307394663462
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5444",
    "name": "Escuela Infantil Reina de los Ángeles",
    "slug": "escuela-infantil-reina-de-los-angeles",
    "type": "private",
    "address": "CALLE DARRO 30",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.450888105604584,
      "lng": -3.6857521533403865
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Transporte - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5068",
    "name": "Escuela Infantil Retamar",
    "slug": "escuela-infantil-retamar",
    "type": "private",
    "address": "CALLE FELIPE DE DIEGO 8",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37903525095834,
      "lng": -3.660413828066007
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "174507",
    "name": "Escuela Infantil Risitas",
    "slug": "escuela-infantil-risitas",
    "type": "private",
    "address": "CALLE JOAQUIN COSTA 12",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.445799915402674,
      "lng": -3.6869503930766427
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5034453",
    "name": "Escuela Infantil Rocío Durcal",
    "slug": "escuela-infantil-rocio-durcal",
    "type": "private",
    "address": "AVENIDA Avenida Ingeniero Emilio Herrera 12",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.490161265717425,
      "lng": -3.654138896646944
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5145532",
    "name": "Escuela Infantil Rocío Jurado",
    "slug": "escuela-infantil-rocio-jurado",
    "type": "private",
    "address": "CALLE BRIVIESCA 6",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.482230904025265,
      "lng": -3.6671817509593794
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5035",
    "name": "Escuela Infantil Roger de Flor",
    "slug": "escuela-infantil-roger-de-flor",
    "type": "private",
    "address": "PLAZA ROGER DE FLOR 18",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39365465828977,
      "lng": -3.7325974713012204
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5038",
    "name": "Escuela Infantil Rosa",
    "slug": "escuela-infantil-rosa",
    "type": "private",
    "address": "PASEO HABANA 173",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.465573450692105,
      "lng": -3.67953192085763
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399449",
    "name": "Escuela Infantil Rosalía Rendú",
    "slug": "escuela-infantil-rosalia-rendu",
    "type": "private",
    "address": "CALLE ESPADA 9",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4114877909952,
      "lng": -3.7043747060733887
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5979",
    "name": "Escuela Infantil Sagrada Familia",
    "slug": "escuela-infantil-sagrada-familia",
    "type": "private",
    "address": "CALLE RICARDO ORTIZ 114",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42308153093567,
      "lng": -3.657095794566087
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "134237",
    "name": "Escuela Infantil Sagrados Corazones",
    "slug": "escuela-infantil-sagrados-corazones",
    "type": "private",
    "address": "CALLE GENERAL CABRERA 19 23",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45560061666907,
      "lng": -3.6961667681219743
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5392",
    "name": "Escuela Infantil San Alonso de Orozco",
    "slug": "escuela-infantil-san-alonso-de-orozco",
    "type": "private",
    "address": "CALLE VICENTE ALEIXANDRE 6",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44574165407967,
      "lng": -3.717891477757883
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5059",
    "name": "Escuela Infantil San Fermín",
    "slug": "escuela-infantil-san-fermin",
    "type": "private",
    "address": "CALLE ESTAFETA 14",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37400084435418,
      "lng": -3.693971627360399
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "104655",
    "name": "Escuela Infantil San Gabriel Arcángel",
    "slug": "escuela-infantil-san-gabriel-arcangel",
    "type": "private",
    "address": "CALLE ISLA DE NELSON 1",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4650206738044,
      "lng": -3.7231221198865745
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399493",
    "name": "Escuela Infantil San Jorge",
    "slug": "escuela-infantil-san-jorge",
    "type": "private",
    "address": "CALLE GENERAL ARANAZ 85",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44731562722126,
      "lng": -3.6459403796788727
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5980",
    "name": "Escuela Infantil San José de Cluny",
    "slug": "escuela-infantil-san-jose-de-cluny",
    "type": "private",
    "address": "CALLE SAN RESTITUTO 24",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46505463319585,
      "lng": -3.711846089608026
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10915656",
    "name": "Escuela infantil San Marcos American Preschool Madrid",
    "slug": "escuela-infantil-san-marcos-american-preschool-madrid",
    "type": "private",
    "address": "CALLE MELENDEZ VALDES 36",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4330722357961,
      "lng": -3.712731907269191
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5400019",
    "name": "Escuela Infantil San Miguel II",
    "slug": "escuela-infantil-san-miguel-ii",
    "type": "private",
    "address": "CALLE CASTUERA 16",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40120451568239,
      "lng": -3.748034160091499
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5791",
    "name": "Escuela Infantil San Roque",
    "slug": "escuela-infantil-san-roque",
    "type": "private",
    "address": "CALLE ABOLENGO 10 C/V C/ OCA, 35",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38913511955554,
      "lng": -3.7363776865741594
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5793",
    "name": "Escuela Infantil San Simón y San Judas",
    "slug": "escuela-infantil-san-simon-y-san-judas",
    "type": "private",
    "address": "CALLE CAMPOTEJAR 39",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36440591817176,
      "lng": -3.704437933075662
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5813",
    "name": "Escuela Infantil San Vicente de Paul",
    "slug": "escuela-infantil-san-vicente-de-paul",
    "type": "private",
    "address": "PLAZA SAN VICENTE DE PAUL 1",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3853810852385,
      "lng": -3.725969104633047
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5474",
    "name": "Escuela Infantil San Víctor",
    "slug": "escuela-infantil-san-victor",
    "type": "private",
    "address": "PLAZA PICO SALVAGUARDIA 3",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.482156345725656,
      "lng": -3.7201322081393435
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4984176",
    "name": "Escuela Infantil Sancalo",
    "slug": "escuela-infantil-sancalo",
    "type": "private",
    "address": "CALLE VIRGEN DE ARANZAZU 1",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.485160776179555,
      "lng": -3.6898647011540557
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178905",
    "name": "Escuela Infantil Sandy",
    "slug": "escuela-infantil-sandy",
    "type": "private",
    "address": "CALLE SEO DE URGEL 15",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46940408613371,
      "lng": -3.6526398675390093
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6164920",
    "name": "Escuela Infantil Santa Bernardita",
    "slug": "escuela-infantil-santa-bernardita",
    "type": "private",
    "address": "CALLE PRINCIPE DE ASTURIAS 10",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42800688550452,
      "lng": -3.671655909864363
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5676",
    "name": "Escuela Infantil Santa Catalina",
    "slug": "escuela-infantil-santa-catalina",
    "type": "private",
    "address": "CALLE FUENTE DEL REY 44",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.458113912137115,
      "lng": -3.7767940646554945
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5677",
    "name": "Escuela Infantil Santa Claus",
    "slug": "escuela-infantil-santa-claus",
    "type": "private",
    "address": "CALLE NAPOLES 28",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45971403801882,
      "lng": -3.65039948759136
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5114820",
    "name": "Escuela Infantil Santa Elena",
    "slug": "escuela-infantil-santa-elena",
    "type": "private",
    "address": "CALLE ESCALONA 81",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.395771288480276,
      "lng": -3.7619489914541604
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5932",
    "name": "Escuela Infantil Santa Eugenia",
    "slug": "escuela-infantil-santa-eugenia",
    "type": "private",
    "address": "CALLE PUENTELARRA 9",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38274368866213,
      "lng": -3.6084720374611887
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5699",
    "name": "Escuela Infantil Santa Luisa",
    "slug": "escuela-infantil-santa-luisa",
    "type": "private",
    "address": "CALLE TANTALO 21",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35295451068664,
      "lng": -3.6804962221512376
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5927",
    "name": "Escuela Infantil Santa María",
    "slug": "escuela-infantil-santa-maria",
    "type": "private",
    "address": "CALLE VIRGEN DE LLUC 60",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43515150715169,
      "lng": -3.649502497495432
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5717",
    "name": "Escuela Infantil Santa Mónica",
    "slug": "escuela-infantil-santa-monica",
    "type": "private",
    "address": "CALLE VILLAMANIN 29",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.406918483954804,
      "lng": -3.7518569031237163
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5981",
    "name": "Escuela Infantil Santa Rosalía",
    "slug": "escuela-infantil-santa-rosalia",
    "type": "private",
    "address": "CALLE MOTILLA DEL PALANCAR 36",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46610045821224,
      "lng": -3.6310691153446317
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5324401",
    "name": "Escuela Infantil Santa Teresa",
    "slug": "escuela-infantil-santa-teresa",
    "type": "private",
    "address": "AVENIDA ANDALUCIA 10,2",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.374763035834626,
      "lng": -3.694568428890532
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "174426",
    "name": "Escuela Infantil Shantala",
    "slug": "escuela-infantil-shantala",
    "type": "private",
    "address": "CALLE MARTINEZ DE LA RIVA S/N ",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38861235714106,
      "lng": -3.665055245330256
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5205668",
    "name": "Escuela Infantil Sierra de Filabres Es-Cool",
    "slug": "escuela-infantil-sierra-de-filabres-es-cool",
    "type": "private",
    "address": "CALLE SIERRA DE FILABRES 71",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39704213224345,
      "lng": -3.662392620488967
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4539254",
    "name": "Escuela Infantil Smiles Bilingual Nursery School",
    "slug": "escuela-infantil-smiles-bilingual-nursery-school",
    "type": "private",
    "address": "CALLE PUENTE LA REINA 36",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50191830892272,
      "lng": -3.677526375886855
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4701865",
    "name": "Escuela Infantil Sol Solito",
    "slug": "escuela-infantil-sol-solito",
    "type": "private",
    "address": "CALLE MONASTERIO DE GUADALUPE 9",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50664785016741,
      "lng": -3.7031857994820703
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6306935",
    "name": "Escuela Infantil St Alice's Nursery",
    "slug": "escuela-infantil-st-alice-s-nursery",
    "type": "private",
    "address": "CALLE FERNANDEZ DE LA HOZ 21",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.433652361544084,
      "lng": -3.695056113294918
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7510761",
    "name": "Escuela Infantil St Alice's Nursery Galileo",
    "slug": "escuela-infantil-st-alice-s-nursery-galileo",
    "type": "private",
    "address": "CALLE GALILEO 47",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43469426332555,
      "lng": -3.710393958866762
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167651",
    "name": "Escuela Infantil Suecia Garden",
    "slug": "escuela-infantil-suecia-garden",
    "type": "private",
    "address": "CALLE SUECIA 11",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.422547506964925,
      "lng": -3.608158627961482
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4712241",
    "name": "Escuela Infantil Sunny Baby",
    "slug": "escuela-infantil-sunny-baby",
    "type": "private",
    "address": "CALLE CONCEJAL FRANCISCO JOSE JIMENEZ MARTIN 122",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40283353465173,
      "lng": -3.7313888911227835
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11035083",
    "name": "Escuela Infantil Superkids Daycare",
    "slug": "escuela-infantil-superkids-daycare",
    "type": "private",
    "address": "AVENIDA MONASTERIO DE EL ESCORIAL 36",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50401978415518,
      "lng": -3.702164729361991
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7173843",
    "name": "Escuela Infantil Surikata",
    "slug": "escuela-infantil-surikata",
    "type": "private",
    "address": "CALLE MANUEL POMBO ANGULO 24",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.507510844159754,
      "lng": -3.6544254652075026
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6848086",
    "name": "Escuela Infantil Tábata",
    "slug": "escuela-infantil-tabata",
    "type": "private",
    "address": "CALLE CELANOVA 9",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47204147967252,
      "lng": -3.713972476828558
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4710918",
    "name": "Escuela Infantil Tania Jardin",
    "slug": "escuela-infantil-tania-jardin",
    "type": "private",
    "address": "AVENIDA PALOMERAS 29",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38828632554722,
      "lng": -3.657476206650216
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167640",
    "name": "Escuela Infantil Tanuca",
    "slug": "escuela-infantil-tanuca",
    "type": "private",
    "address": "CALLE LONGARES 36",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42837938854002,
      "lng": -3.609295747132591
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8161696",
    "name": "Escuela Infantil Teddy",
    "slug": "escuela-infantil-teddy",
    "type": "private",
    "address": "CALLE LEON GIL DE PALACIO 5",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40244984701493,
      "lng": -3.679085302404853
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6516006",
    "name": "Escuela Infantil Teo Breton",
    "slug": "escuela-infantil-teo-breton",
    "type": "private",
    "address": "CALLE BRETON DE LOS HERREROS 46",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.439175536288815,
      "lng": -3.695011596754243
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5398045",
    "name": "Escuela Infantil Tiny Tots",
    "slug": "escuela-infantil-tiny-tots",
    "type": "private",
    "address": "AVENIDA PRUNOS 80",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45323197990347,
      "lng": -3.620087025844855
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399918",
    "name": "Escuela Infantil Tobogán II",
    "slug": "escuela-infantil-tobogan-ii",
    "type": "private",
    "address": "CALLE FERNANDO DIAZ DE MENDOZA 67",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.392514422091374,
      "lng": -3.7088429297020165
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5400126",
    "name": "Escuela Infantil Todo Niños Nursery",
    "slug": "escuela-infantil-todo-ninos-nursery",
    "type": "private",
    "address": "CAMINO BARRIAL 38",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46137796145396,
      "lng": -3.791351087126207
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8165057",
    "name": "Escuela Infantil Todo Niños Nursery Serrano",
    "slug": "escuela-infantil-todo-ninos-nursery-serrano",
    "type": "private",
    "address": "CALLE SERRANO 163",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.448007498389266,
      "lng": -3.6838478779595962
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "104289",
    "name": "Escuela Infantil Todo para la Infancia",
    "slug": "escuela-infantil-todo-para-la-infancia",
    "type": "private",
    "address": "AVENIDA DOCTOR FEDERICO RUBIO Y GALI 106",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.456140819288066,
      "lng": -3.713945657070304
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5399941",
    "name": "Escuela Infantil Topochitos",
    "slug": "escuela-infantil-topochitos",
    "type": "private",
    "address": "CALLE VILLAVA 12",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49975057418618,
      "lng": -3.6754039022765164
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7509520",
    "name": "Escuela Infantil Topochitos II",
    "slug": "escuela-infantil-topochitos-ii",
    "type": "private",
    "address": "CALLE CIRAUQUI , c/v CALLE VALCARLOS ",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.498758219777834,
      "lng": -3.6725498340831892
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "167653",
    "name": "Escuela Infantil Toscana Garden",
    "slug": "escuela-infantil-toscana-garden",
    "type": "private",
    "address": "CALLE TOSCANA 114",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41834773706608,
      "lng": -3.6135665281811296
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4539348",
    "name": "Escuela Infantil Trapitos",
    "slug": "escuela-infantil-trapitos",
    "type": "private",
    "address": "CALLE LIMONITA 1 c/v C/ Estefanita",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34336578935374,
      "lng": -3.6748542162045643
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5964",
    "name": "Escuela Infantil Trazos",
    "slug": "escuela-infantil-trazos",
    "type": "private",
    "address": "CALLE CONDES DE TORREANAZ 4",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42159910213041,
      "lng": -3.6673957115252365
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "23401",
    "name": "Escuela Infantil Trébol",
    "slug": "escuela-infantil-trebol",
    "type": "private",
    "address": "CALLE FINISTERRE 6 BAJO",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.475955829040565,
      "lng": -3.7014734064295247
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5775211",
    "name": "Escuela Infantil Valle de Oro",
    "slug": "escuela-infantil-valle-de-oro",
    "type": "private",
    "address": "CALLE VALLE DE ORO 35",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38836276293369,
      "lng": -3.730313330009253
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5337",
    "name": "Escuela Infantil Vallehermoso",
    "slug": "escuela-infantil-vallehermoso",
    "type": "private",
    "address": "CALLE FERNANDEZ DE LOS RIOS 42",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.435198773514514,
      "lng": -3.7089254967629195
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5560",
    "name": "Escuela Infantil Verbo Encarnado",
    "slug": "escuela-infantil-verbo-encarnado",
    "type": "private",
    "address": "CALLE ALENZA 28",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44565662224022,
      "lng": -3.7003210725969993
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5636",
    "name": "Escuela Infantil Vida",
    "slug": "escuela-infantil-vida",
    "type": "private",
    "address": "CALLE CORREGIDOR JOSE DE PASAMONTE 7",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41064762043625,
      "lng": -3.6493729272579434
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5481",
    "name": "Escuela Infantil Virgen de Begoña",
    "slug": "escuela-infantil-virgen-de-begona",
    "type": "private",
    "address": "CALLE ANGEL MUGICA 48",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48706942691237,
      "lng": -3.6885627273658987
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5651",
    "name": "Escuela Infantil Virgen del Parque",
    "slug": "escuela-infantil-virgen-del-parque",
    "type": "private",
    "address": "CALLE JACOBINIA 74",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37798813876779,
      "lng": -3.7535849535223127
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "177623",
    "name": "Escuela Infantil Woody",
    "slug": "escuela-infantil-woody",
    "type": "private",
    "address": "CALLE CAMARENA 96",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.393435200350744,
      "lng": -3.7568795921629565
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5069",
    "name": "Escuela Infantil Zaleo",
    "slug": "escuela-infantil-zaleo",
    "type": "private",
    "address": "CALLE FUENTE DE PIEDRA 10",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.382489697485596,
      "lng": -3.640490543936684
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "32433",
    "name": "Escuela Infantil Zazuar I",
    "slug": "escuela-infantil-zazuar-i",
    "type": "private",
    "address": "AVENIDA SANTA EUGENIA 62",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.378813477597056,
      "lng": -3.6088961122965793
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5931",
    "name": "Escuela Infantil Zazuar II",
    "slug": "escuela-infantil-zazuar-ii",
    "type": "private",
    "address": "CALLE FUENTESPINA 17",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37958623324837,
      "lng": -3.6058519166211727
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5400059",
    "name": "Escuela Infantil Zazuar III",
    "slug": "escuela-infantil-zazuar-iii",
    "type": "private",
    "address": "CALLE ZAZUAR 2",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.383514397921765,
      "lng": -3.605816421733714
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5060",
    "name": "Escuela Infantil Zofio",
    "slug": "escuela-infantil-zofio",
    "type": "private",
    "address": "CALLE FORNILLOS 3",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3826853418553,
      "lng": -3.714724643221355
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5486",
    "name": "Escuela Infantil 'Eduka, Escuela Infantil'",
    "slug": "escuela-infantil-eduka-escuela-infantil",
    "type": "private",
    "address": "CALLE ALICIA BAENA 19",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48047540194047,
      "lng": -3.726732972553289
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "179498",
    "name": "Escuela Infantil 'Infantil Peques'",
    "slug": "escuela-infantil-infantil-peques",
    "type": "private",
    "address": "CALLE ANGOSTA 3",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34419105400179,
      "lng": -3.711883732381164
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5247422",
    "name": "Escuela Infantil - Casa de Niños Bravo Murillo",
    "slug": "escuela-infantil-casa-de-ninos-bravo-murillo",
    "type": "private",
    "address": "CALLE ISLAS CIES 11",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.480844891953936,
      "lng": -3.7180653144183027
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6220506",
    "name": "Escuela Infantil ¿Dónde están las llaves?",
    "slug": "escuela-infantil-donde-estan-las-llaves",
    "type": "private",
    "address": "CALLE TOMAS BRETON 58",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39647748432474,
      "lng": -3.691138657498989
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5058",
    "name": "Escuela Infantil-Casa de Niños Albaicín",
    "slug": "escuela-infantil-casa-de-ninos-albaicin",
    "type": "private",
    "address": "CALLE ALBAICIN 1",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36850347505515,
      "lng": -3.7017361930432706
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado. Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4701888",
    "name": "Escuela Infantil-Casa de Niños El Señor don Gato",
    "slug": "escuela-infantil-casa-de-ninos-el-senor-don-gato",
    "type": "private",
    "address": "CALLE POETAS S/N",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.396932732253156,
      "lng": -3.625414854510772
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5709629",
    "name": "Escuela Infantil-Casa de Niños El Trébol",
    "slug": "escuela-infantil-casa-de-ninos-el-trebol",
    "type": "private",
    "address": "CALLE TRISTANA 2",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3829171513296,
      "lng": -3.6542548921297193
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "81780",
    "name": "Escuela Municipal de Arte Dramático",
    "slug": "escuela-municipal-de-arte-dramatico",
    "type": "private",
    "address": "CALLE MEJIA LEQUERICA 21",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4280399538175,
      "lng": -3.699501702258276
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Es un centro de enseñanza no reglada para personas interesadas en las artes escénicas a partir de 6 años y sin límite de edad."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4569173",
    "name": "Escuela municipal de música Almudena Cano (Arganzuela)",
    "slug": "escuela-municipal-de-musica-almudena-cano-arganzuela",
    "type": "private",
    "address": "PASAJE TORTOSA 4",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.405760767674415,
      "lng": -3.6926515865606193
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6685",
    "name": "Escuela municipal de música Antón García Abril (Villaverde)",
    "slug": "escuela-municipal-de-musica-anton-garcia-abril-villaverde",
    "type": "private",
    "address": "CALLE DOCTOR MARTIN AREVALO 2",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34636268334182,
      "lng": -3.708524395897377
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6698",
    "name": "Escuela municipal de música Antonio Machado (San Blas-Canillejas)",
    "slug": "escuela-municipal-de-musica-antonio-machado-san-blas-canillejas",
    "type": "private",
    "address": "CALLE SAN ROMAN DEL VALLE 8",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42027705095574,
      "lng": -3.621741078700336
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "125019",
    "name": "Escuela municipal de música Carmelo Alonso Bernaola (Fuencarral-El Pardo)",
    "slug": "escuela-municipal-de-musica-carmelo-alonso-bernaola-fuencarral-el-pardo",
    "type": "private",
    "address": "AVENIDA SOTO PALACIOS 7",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48876867947374,
      "lng": -3.6845918447368597
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "190712",
    "name": "Escuela municipal de música de Vicálvaro",
    "slug": "escuela-municipal-de-musica-de-vicalvaro",
    "type": "private",
    "address": "BULEVAR INDALECIO PRIETO 16",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40207320657617,
      "lng": -3.621090403479105
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6687",
    "name": "Escuela municipal de música Federico Chueca (Hortaleza)",
    "slug": "escuela-municipal-de-musica-federico-chueca-hortaleza",
    "type": "private",
    "address": "CALLE BENITA AVILA 23",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46550570624769,
      "lng": -3.650596897631368
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4953904",
    "name": "Escuela municipal de música Isaac Albéniz (Carabanchel)",
    "slug": "escuela-municipal-de-musica-isaac-albeniz-carabanchel",
    "type": "private",
    "address": "CALLE LONJA DE LA SEDA 4",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.366012559408354,
      "lng": -3.7553478337291613
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6683",
    "name": "Escuela municipal de música Maestro Barbieri (Usera)",
    "slug": "escuela-municipal-de-musica-maestro-barbieri-usera",
    "type": "private",
    "address": "CALLE CESTONA 3",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.372710384742504,
      "lng": -3.7135708871039514
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "141421",
    "name": "Escuela municipal de música Manuel Vázquez Montalbán (Tetuán)",
    "slug": "escuela-municipal-de-musica-manuel-vazquez-montalban-tetuan",
    "type": "private",
    "address": "CALLE FRANCOS RODRIGUEZ 67",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45749513485957,
      "lng": -3.710539712535917
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6699",
    "name": "Escuela municipal de música María Rodrigo (Chamartín)",
    "slug": "escuela-municipal-de-musica-maria-rodrigo-chamartin",
    "type": "private",
    "address": "CALLE MANTUANO 51",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44810636195716,
      "lng": -3.6762309620097398
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11407777",
    "name": "Escuela municipal de música Moratalaz",
    "slug": "escuela-municipal-de-musica-moratalaz",
    "type": "private",
    "address": "CALLE CORREGIDOR DIEGO DE VALDERRABANO 66",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.411866199426434,
      "lng": -3.6577097745433407
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "ESCUELA MUNICIPAL DE MÚSICA DE NUEVA APERTURA."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "80435",
    "name": "Escuela municipal de música Villa de Vallecas",
    "slug": "escuela-municipal-de-musica-villa-de-vallecas",
    "type": "private",
    "address": "CALLE AGUSTIN GARCIA MALLA 4",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38198119326615,
      "lng": -3.616358398702118
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4953973",
    "name": "Escuela municipal de música y danza Plácido Domingo (Retiro)",
    "slug": "escuela-municipal-de-musica-y-danza-placido-domingo-retiro",
    "type": "private",
    "address": "CALLE TELLEZ 31",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.401299659267984,
      "lng": -3.678578804960757
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4620440",
    "name": "Escuela Oficial de Idiomas de Madrid - Barajas (extensión de la Escuela Oficial de Idiomas de Madrid - Ciudad Lineal)",
    "slug": "escuela-oficial-de-idiomas-de-madrid-barajas-extension-de-la-escuela-oficial-de-idiomas-de-madrid-ciudad-lineal",
    "type": "private",
    "address": "CALLE ANTONIO SANCHA 11 Instituto de Educación Secundaria Alameda de Osuna. Pabellón B",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46028043276948,
      "lng": -3.5888239638691575
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6616",
    "name": "Escuela Oficial de Idiomas de Madrid - Carabanchel",
    "slug": "escuela-oficial-de-idiomas-de-madrid-carabanchel",
    "type": "private",
    "address": "CALLE PORTALEGRE 52",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38833496989179,
      "lng": -3.724624690546643
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6118469",
    "name": "Escuela Oficial de Idiomas de Madrid - Ciudad Lineal",
    "slug": "escuela-oficial-de-idiomas-de-madrid-ciudad-lineal",
    "type": "private",
    "address": "CALLE CARLOTA O'NEILL 15",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44330327662568,
      "lng": -3.649978808203324
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5726383",
    "name": "Escuela Oficial de Idiomas de Madrid - El Espinillo (extensión de la Escuela Oficial de Idiomas de Madrid - Villaverde)",
    "slug": "escuela-oficial-de-idiomas-de-madrid-el-espinillo-extension-de-la-escuela-oficial-de-idiomas-de-madrid-villaverde",
    "type": "private",
    "address": "CALLE ALIANZA 20 - 22",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.357580981429265,
      "lng": -3.6873547090837024
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6662",
    "name": "Escuela Oficial de Idiomas de Madrid - Embajadores",
    "slug": "escuela-oficial-de-idiomas-de-madrid-embajadores",
    "type": "private",
    "address": "CALLE EMBAJADORES 68",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40637302823684,
      "lng": -3.7034397413317492
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6114038",
    "name": "Escuela Oficial de Idiomas de Madrid - Jesús Maestro",
    "slug": "escuela-oficial-de-idiomas-de-madrid-jesus-maestro",
    "type": "private",
    "address": "CALLE JESUS MAESTRO 5",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44054494271324,
      "lng": -3.7114002528924153
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6661",
    "name": "Escuela Oficial de Idiomas de Madrid - Moratalaz",
    "slug": "escuela-oficial-de-idiomas-de-madrid-moratalaz",
    "type": "private",
    "address": "CALLE VALDEBERNARDO 3",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39850646593625,
      "lng": -3.6330456469604
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4620845",
    "name": "Escuela Oficial de Idiomas de Madrid - Puente de Vallecas (extensión de la Escuela Oficial de Idiomas de Madrid - Moratalaz)",
    "slug": "escuela-oficial-de-idiomas-de-madrid-puente-de-vallecas-extension-de-la-escuela-oficial-de-idiomas-de-madrid-moratalaz",
    "type": "private",
    "address": "RONDA SUR 229",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37337339266918,
      "lng": -3.665475648304398
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6617",
    "name": "Escuela Oficial de Idiomas de Madrid - San Blas",
    "slug": "escuela-oficial-de-idiomas-de-madrid-san-blas",
    "type": "private",
    "address": "CALLE CONSERVEROS  sin número",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42550705932689,
      "lng": -3.6183528905598195
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6663",
    "name": "Escuela Oficial de Idiomas de Madrid - Tribunal",
    "slug": "escuela-oficial-de-idiomas-de-madrid-tribunal",
    "type": "private",
    "address": "CALLE SANTA BRIGIDA 10",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.424461958362706,
      "lng": -3.699887133397163
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6618",
    "name": "Escuela Oficial de Idiomas de Madrid - Valdezarza",
    "slug": "escuela-oficial-de-idiomas-de-madrid-valdezarza",
    "type": "private",
    "address": "CALLE FERMIN CABALLERO 92",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47818438186267,
      "lng": -3.7215242514441575
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6650",
    "name": "Escuela Oficial de Idiomas de Madrid - Villaverde",
    "slug": "escuela-oficial-de-idiomas-de-madrid-villaverde",
    "type": "private",
    "address": "CALLE FERNANDO ORTIZ 2",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36726447837039,
      "lng": -3.70278869828606
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6376",
    "name": "Escuela Politécnica de Enseñanza Superior (EPES)",
    "slug": "escuela-politecnica-de-ensenanza-superior-epes",
    "type": "private",
    "address": "PASEO JUAN XXIII 11",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44793793568313,
      "lng": -3.717285250885199
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6259",
    "name": "Escuela Profesional Primero de Mayo",
    "slug": "escuela-profesional-primero-de-mayo",
    "type": "private",
    "address": "CALLE BARROS 11",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37668534058296,
      "lng": -3.668000754426395
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6673",
    "name": "Escuela Superior de Canto de Madrid",
    "slug": "escuela-superior-de-canto-de-madrid",
    "type": "private",
    "address": "CALLE SAN BERNARDO 44",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42448920807723,
      "lng": -3.707296602812826
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6695",
    "name": "Escuela Superior de Conservación y Restauración de Bienes Culturales",
    "slug": "escuela-superior-de-conservacion-y-restauracion-de-bienes-culturales",
    "type": "private",
    "address": "CALLE GUILLERMO ROLLAND 2",
    "city": "MADRID",
    "postalCode": "28013",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42019452653149,
      "lng": -3.7105119414782277
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6677",
    "name": "Escuela Superior de Diseño",
    "slug": "escuela-superior-de-diseno",
    "type": "private",
    "address": "CALLE CAMINO DE LOS VINATEROS 106",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.409090881121266,
      "lng": -3.6488257296912585
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5902219",
    "name": "Escuela Superior de Publicidad",
    "slug": "escuela-superior-de-publicidad",
    "type": "private",
    "address": "CALLE CHURRUCA 14",
    "city": "MADRID",
    "postalCode": "28004",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42775183793803,
      "lng": -3.7009605381161883
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6424",
    "name": "Escuela Técnica Superior de Arquitectura",
    "slug": "escuela-tecnica-superior-de-arquitectura",
    "type": "private",
    "address": "AVENIDA JUAN DE HERRERA 4",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43959650623064,
      "lng": -3.731162126785864
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6381",
    "name": "Escuela Técnica Superior de Edificación",
    "slug": "escuela-tecnica-superior-de-edificacion",
    "type": "private",
    "address": "AVENIDA JUAN DE HERRERA 6",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.439061141330214,
      "lng": -3.7317253526397614
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6418",
    "name": "Escuela Técnica Superior de Ingeniería Aeronáutica y del Espacio",
    "slug": "escuela-tecnica-superior-de-ingenieria-aeronautica-y-del-espacio",
    "type": "private",
    "address": "PLAZA CARDENAL CISNEROS 3",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44098319331987,
      "lng": -3.7246487290907204
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6419",
    "name": "Escuela Técnica Superior de Ingeniería Agronómica, Alimentaria y de Biosistemas",
    "slug": "escuela-tecnica-superior-de-ingenieria-agronomica-alimentaria-y-de-biosistemas",
    "type": "private",
    "address": "AVENIDA PUERTA DE HIERRO 2",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.440899945359334,
      "lng": -3.728076234171524
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6422",
    "name": "Escuela Técnica Superior de Ingeniería de Montes, Forestal y del Medio Natural",
    "slug": "escuela-tecnica-superior-de-ingenieria-de-montes-forestal-y-del-medio-natural",
    "type": "private",
    "address": "CALLE JOSE ANTONIO NOVAIS 10",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.448485414321894,
      "lng": -3.724507841206364
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6379",
    "name": "Escuela Técnica Superior de Ingeniería de Sistemas Informáticos",
    "slug": "escuela-tecnica-superior-de-ingenieria-de-sistemas-informaticos",
    "type": "private",
    "address": "CALLE ALAN TURING 1",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39037030758324,
      "lng": -3.626968215943057
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6387",
    "name": "Escuela Técnica Superior de Ingeniería y Diseño Industrial",
    "slug": "escuela-tecnica-superior-de-ingenieria-y-diseno-industrial",
    "type": "private",
    "address": "RONDA VALENCIA 3",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.405420030666505,
      "lng": -3.7005940001153337
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6417",
    "name": "Escuela Técnica Superior de Ingeniería y Sistemas de Telecomunicación",
    "slug": "escuela-tecnica-superior-de-ingenieria-y-sistemas-de-telecomunicacion",
    "type": "private",
    "address": "CALLE NIKOLA TESLA ",
    "city": "MADRID",
    "postalCode": "",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38879475945981,
      "lng": -3.629147669595368
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11999975",
    "name": "Escuela Técnica Superior de Ingenieros de Caminos, Canales y Puertos. Edificio Retiro",
    "slug": "escuela-tecnica-superior-de-ingenieros-de-caminos-canales-y-puertos-edificio-retiro",
    "type": "private",
    "address": "CALLE ALFONSO XII 3",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4094661942901,
      "lng": -3.688412783499902
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6421",
    "name": "Escuela Técnica Superior de Ingenieros de Minas y Energía.",
    "slug": "escuela-tecnica-superior-de-ingenieros-de-minas-y-energia",
    "type": "public",
    "address": "CALLE RIOS ROSAS 21",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44209227424258,
      "lng": -3.7003734646151534
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6375",
    "name": "Escuela Técnica Superior de Ingenieros de Telecomunicación",
    "slug": "escuela-tecnica-superior-de-ingenieros-de-telecomunicacion",
    "type": "private",
    "address": "AVENIDA COMPLUTENSE 30",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.453018384890925,
      "lng": -3.726745005476224
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6380",
    "name": "Escuela Técnica Superior de Ingenieros en Topografía, Geodesia y Cartografía",
    "slug": "escuela-tecnica-superior-de-ingenieros-en-topografia-geodesia-y-cartografia",
    "type": "private",
    "address": "CALLE ARBOLEDA 1",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3850312955634,
      "lng": -3.6262428071808612
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6427",
    "name": "Escuela Técnica Superior de Ingenieros Industriales",
    "slug": "escuela-tecnica-superior-de-ingenieros-industriales",
    "type": "private",
    "address": "CALLE JOSE GUTIERREZ ABASCAL 2",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44042600324054,
      "lng": -3.690212174964136
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6423",
    "name": "Escuela Técnica Superior de Ingenieros Navales",
    "slug": "escuela-tecnica-superior-de-ingenieros-navales",
    "type": "private",
    "address": "AVENIDA Arco de la Victoria 4",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4388050819418,
      "lng": -3.724433976834532
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6403",
    "name": "Escuela Universitaria de Enfermería de la Cruz Roja",
    "slug": "escuela-universitaria-de-enfermeria-de-la-cruz-roja",
    "type": "private",
    "address": "AVENIDA REINA VICTORIA 28",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.447245864225934,
      "lng": -3.7096954577510513
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6373",
    "name": "Escuela Universitaria de Enfermería. Fundación Jiménez Díaz",
    "slug": "escuela-universitaria-de-enfermeria-fundacion-jimenez-diaz",
    "type": "private",
    "address": "CALLE LISBOA 3",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.432178026136526,
      "lng": -3.7237339935316442
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6369",
    "name": "Escuela Universitaria de Magisterio",
    "slug": "escuela-universitaria-de-magisterio",
    "type": "private",
    "address": "AVENIDA NUESTRA SEÑORA DE FATIMA 102",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.378328008655004,
      "lng": -3.7488801858007923
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "136331",
    "name": "Escuelas Infantiles Municipales",
    "slug": "escuelas-infantiles-municipales",
    "type": "private",
    "address": "PASEO CHOPERA 41",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39415981141737,
      "lng": -3.6990213657093163
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12004930",
    "name": "Espacio de lectura Dolores Catarineu  (Moncloa-Aravaca)",
    "slug": "espacio-de-lectura-dolores-catarineu-moncloa-aravaca",
    "type": "private",
    "address": "CALLE CAROLI 1",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45874611322162,
      "lng": -3.7847137684669288
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Aforo: 32 personas Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12338092",
    "name": "Espacio de lectura Parque del Oeste  (Moncloa-Aravaca)",
    "slug": "espacio-de-lectura-parque-del-oeste-moncloa-aravaca",
    "type": "private",
    "address": "CALLE PROFESOR MARTIN ALMAGRO BASCH",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42559,
      "lng": -3.71955
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "No dispone de WiFi Aforo aproximado 150 personas"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6446",
    "name": "Facultad de Ciencias de la Actividad Física y del Deporte (INEF)",
    "slug": "facultad-de-ciencias-de-la-actividad-fisica-y-del-deporte-inef",
    "type": "private",
    "address": "CALLE MARTIN FIERRO 7",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4381730352489,
      "lng": -3.7325360017630174
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12778176",
    "name": "Fundación Instituto San José",
    "slug": "fundacion-instituto-san-jose",
    "type": "private",
    "address": "CALLE PINAR DE SAN JOSE 98",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36209379003986,
      "lng": -3.774890979411398
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6556",
    "name": "Fundación Residencia de Estudiantes",
    "slug": "fundacion-residencia-de-estudiantes",
    "type": "private",
    "address": "CALLE PINAR 21",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44065779577869,
      "lng": -3.6880526406060454
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "9104",
    "name": "Hospital Clínico San Carlos",
    "slug": "hospital-clinico-san-carlos",
    "type": "private",
    "address": "CALLE PROFESOR MARTIN LAGOS 2 S/N",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43961616299482,
      "lng": -3.719109522219449
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11298560",
    "name": "Hospital de Emergencias Enfermera Isabel Zendal",
    "slug": "hospital-de-emergencias-enfermera-isabel-zendal",
    "type": "private",
    "address": "AVENIDA MANUEL FRAGA IRIBARNE 2",
    "city": "MADRID",
    "postalCode": "28055",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48384801885397,
      "lng": -3.608088106837578
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Admisión: 917 996 334 / 917 996 316 Atención al trabajador: 917 996 311"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "9098",
    "name": "Hospital General Universitario Gregorio Marañón",
    "slug": "hospital-general-universitario-gregorio-maranon",
    "type": "private",
    "address": "CALLE DOCTOR ESQUERDO 46",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4193606775175,
      "lng": -3.6694000902908397
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "9099",
    "name": "Hospital Infantil Universitario Niño Jesús",
    "slug": "hospital-infantil-universitario-nino-jesus",
    "type": "private",
    "address": "AVENIDA MENENDEZ PELAYO 65",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.413865110086746,
      "lng": -3.67697406298161
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "9106",
    "name": "Hospital Universitario 12 de Octubre",
    "slug": "hospital-universitario-12-de-octubre",
    "type": "private",
    "address": "GLORIETA MALAGA 11",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37572414869552,
      "lng": -3.6961267591093314
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "9100",
    "name": "Hospital Universitario de La Princesa",
    "slug": "hospital-universitario-de-la-princesa",
    "type": "private",
    "address": "CALLE DIEGO DE LEON 62",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43442359020062,
      "lng": -3.675721186767279
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4820572",
    "name": "Hospital Universitario Infanta Leonor",
    "slug": "hospital-universitario-infanta-leonor",
    "type": "private",
    "address": "AVENIDA GRAN VIA DEL ESTE 80",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38536032339027,
      "lng": -3.618590816067447
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "9105",
    "name": "Hospital Universitario la Paz",
    "slug": "hospital-universitario-la-paz",
    "type": "private",
    "address": "PASEO CASTELLANA 261",
    "city": "MADRID",
    "postalCode": "28046",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48055987166965,
      "lng": -3.685862757907908
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "9102",
    "name": "Hospital Universitario Ramón y Cajal",
    "slug": "hospital-universitario-ramon-y-cajal",
    "type": "private",
    "address": "CALLE SAN MODESTO 50",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.487697116829246,
      "lng": -3.693996974370433
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "9110",
    "name": "Hospital Universitario Santa Cristina",
    "slug": "hospital-universitario-santa-cristina",
    "type": "private",
    "address": "CALLE MAESTRO VIVES 3",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42183127056853,
      "lng": -3.6710556654585007
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6840",
    "name": "ICEX Campus. Formación en internacionalización de empresas",
    "slug": "icex-campus-formacion-en-internacionalizacion-de-empresas",
    "type": "private",
    "address": "PASEO CASTELLANA 278",
    "city": "MADRID",
    "postalCode": "28046",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.475683578311994,
      "lng": -3.686260251300786
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Consulta catálogo de cursos en el siguiente enlace."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6254",
    "name": "Institución Profesional Salesiana",
    "slug": "institucion-profesional-salesiana",
    "type": "private",
    "address": "RONDA DON BOSCO 3",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37416216273272,
      "lng": -3.753141825067177
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6087",
    "name": "Instituto de Educación Secundaria (IES) Alameda de Osuna",
    "slug": "instituto-de-educacion-secundaria-ies-alameda-de-osuna",
    "type": "private",
    "address": "CALLE ANTONIO SANCHA 11",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.460269269312455,
      "lng": -3.5888370717050853
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8145525",
    "name": "Instituto de Educación Secundaria (IES) Alfredo Kraus",
    "slug": "instituto-de-educacion-secundaria-ies-alfredo-kraus",
    "type": "private",
    "address": "AVENIDA GUADALAJARA 126",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42393768765814,
      "lng": -3.6076288888602663
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11167230",
    "name": "Instituto de Educación Secundaria (IES) Ana Frank",
    "slug": "instituto-de-educacion-secundaria-ies-ana-frank",
    "type": "private",
    "address": "CALLE ARROYO DE POZUELO 1",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.451302606743475,
      "lng": -3.7680058212788845
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6088",
    "name": "Instituto de Educación Secundaria (IES) Antonio Domínguez Ortiz",
    "slug": "instituto-de-educacion-secundaria-ies-antonio-dominguez-ortiz",
    "type": "private",
    "address": "CALLE ANDALUCES 36",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38905798476675,
      "lng": -3.635474656654837
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10773928",
    "name": "Instituto de Educación Secundaria (IES) Antonio Fraguas 'Forges'",
    "slug": "instituto-de-educacion-secundaria-ies-antonio-fraguas-forges",
    "type": "private",
    "address": "CALLE LEGANES 10",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39894300185735,
      "lng": -3.68026427894108
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6089",
    "name": "Instituto de Educación Secundaria (IES) Antonio Machado",
    "slug": "instituto-de-educacion-secundaria-ies-antonio-machado",
    "type": "private",
    "address": "CALLE ALFONSO FERNANDEZ 25",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.366615432961616,
      "lng": -3.755460567687772
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6090",
    "name": "Instituto de Educación Secundaria (IES) Arcipreste de Hita",
    "slug": "instituto-de-educacion-secundaria-ies-arcipreste-de-hita",
    "type": "private",
    "address": "RONDA SUR 6",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.376852275346266,
      "lng": -3.671842687402548
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6091",
    "name": "Instituto de Educación Secundaria (IES) Arturo Soria",
    "slug": "instituto-de-educacion-secundaria-ies-arturo-soria",
    "type": "private",
    "address": "CALLE SOMONTIN 59",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.477666612968875,
      "lng": -3.660341135986484
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6092",
    "name": "Instituto de Educación Secundaria (IES) Avenida de los Toreros",
    "slug": "instituto-de-educacion-secundaria-ies-avenida-de-los-toreros",
    "type": "private",
    "address": "AVENIDA TOREROS 57",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43346107006072,
      "lng": -3.664777722452951
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6209",
    "name": "Instituto de Educación Secundaria (IES) Barajas",
    "slug": "instituto-de-educacion-secundaria-ies-barajas",
    "type": "private",
    "address": "AVENIDA AMERICA 119",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45054903333012,
      "lng": -3.5992596959233034
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6159",
    "name": "Instituto de Educación Secundaria (IES) Barrio de Bilbao",
    "slug": "instituto-de-educacion-secundaria-ies-barrio-de-bilbao",
    "type": "private",
    "address": "CALLE VILLAESCUSA 20",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42103061653263,
      "lng": -3.6306477550339884
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6150",
    "name": "Instituto de Educación Secundaria (IES) Barrio Simancas",
    "slug": "instituto-de-educacion-secundaria-ies-barrio-simancas",
    "type": "private",
    "address": "CALLE ZARATAN 6",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42926639158782,
      "lng": -3.6253959753163603
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6094",
    "name": "Instituto de Educación Secundaria (IES) Beatriz Galindo",
    "slug": "instituto-de-educacion-secundaria-ies-beatriz-galindo",
    "type": "private",
    "address": "CALLE GOYA 10",
    "city": "MADRID",
    "postalCode": "28001",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42514677325695,
      "lng": -3.686186172414762
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "50012617",
    "name": "Instituto de Educación Secundaria (IES) Blanca Fernández Ochoa",
    "slug": "instituto-de-educacion-secundaria-ies-blanca-fernandez-ochoa",
    "type": "private",
    "address": "CALLE MONASTERIO DE EL PAULAR 3",
    "city": "MADRID",
    "postalCode": "",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.50024302765204,
      "lng": -3.711515962552104
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6095",
    "name": "Instituto de Educación Secundaria (IES) Blas de Otero",
    "slug": "instituto-de-educacion-secundaria-ies-blas-de-otero",
    "type": "private",
    "address": "CALLE MAQUEDA 130",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.388887867589375,
      "lng": -3.7620245761086015
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6096",
    "name": "Instituto de Educación Secundaria (IES) Calderón de la Barca",
    "slug": "instituto-de-educacion-secundaria-ies-calderon-de-la-barca",
    "type": "private",
    "address": "CALLE ANTONIO DE LEYVA 84",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38779958366843,
      "lng": -3.716652025965236
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6097",
    "name": "Instituto de Educación Secundaria (IES) Cardenal Cisneros",
    "slug": "instituto-de-educacion-secundaria-ies-cardenal-cisneros",
    "type": "private",
    "address": "CALLE REYES 4",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42440032592892,
      "lng": -3.7083759450877016
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora. Club de Esgrima Cardenal Cisneros"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6098",
    "name": "Instituto de Educación Secundaria (IES) Cardenal Herrera Oria",
    "slug": "instituto-de-educacion-secundaria-ies-cardenal-herrera-oria",
    "type": "private",
    "address": "CALLE FERMIN CABALLERO 68",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.48260881390874,
      "lng": -3.7110758224045726
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6099",
    "name": "Instituto de Educación Secundaria (IES) Carlos III",
    "slug": "instituto-de-educacion-secundaria-ies-carlos-iii",
    "type": "private",
    "address": "CALLE ARCOS DE JALON 116",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42512415543117,
      "lng": -3.614960195117765
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6207",
    "name": "Instituto de Educación Secundaria (IES) Carlos María Rodríguez Valcárcel",
    "slug": "instituto-de-educacion-secundaria-ies-carlos-maria-rodriguez-valcarcel",
    "type": "private",
    "address": "PLAZA ENCUENTRO 4",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4053072296311,
      "lng": -3.652220706326448
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6100",
    "name": "Instituto de Educación Secundaria (IES) Celestino Mutis",
    "slug": "instituto-de-educacion-secundaria-ies-celestino-mutis",
    "type": "private",
    "address": "CALLE HUERTA DE VILLAVERDE 15",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34830726550713,
      "lng": -3.7131487809799326
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6101",
    "name": "Instituto de Educación Secundaria (IES) Cervantes",
    "slug": "instituto-de-educacion-secundaria-ies-cervantes",
    "type": "private",
    "address": "CALLE EMBAJADORES 70",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40592736276351,
      "lng": -3.7031971554552676
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6160",
    "name": "Instituto de Educación Secundaria (IES) Ciudad de Jaén",
    "slug": "instituto-de-educacion-secundaria-ies-ciudad-de-jaen",
    "type": "private",
    "address": "CAMINO RIO 5",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37164844454447,
      "lng": -3.700119741623105
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora. Integración preferente (motóricos)."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6102",
    "name": "Instituto de Educación Secundaria (IES) Ciudad de los Ángeles",
    "slug": "instituto-de-educacion-secundaria-ies-ciudad-de-los-angeles",
    "type": "private",
    "address": "CALLE ANOETA 16",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35283994612291,
      "lng": -3.698205911976654
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6103",
    "name": "Instituto de Educación Secundaria (IES) Ciudad de los Poetas",
    "slug": "instituto-de-educacion-secundaria-ies-ciudad-de-los-poetas",
    "type": "private",
    "address": "CALLE VALDESANGIL 25",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.467856823986736,
      "lng": -3.7176084747963416
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6086",
    "name": "Instituto de Educación Secundaria (IES) Ciudad Escolar",
    "slug": "instituto-de-educacion-secundaria-ies-ciudad-escolar",
    "type": "private",
    "address": "carretera colmenar viejo 12.800",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.528563960264655,
      "lng": -3.691273586506093
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en undefined, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6232",
    "name": "Instituto de Educación Secundaria (IES) Clara del Rey",
    "slug": "instituto-de-educacion-secundaria-ies-clara-del-rey",
    "type": "public",
    "address": "CALLE PADRE CLARET 8",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44637250004646,
      "lng": -3.6645157777352027
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6104",
    "name": "Instituto de Educación Secundaria (IES) Conde de Orgaz",
    "slug": "instituto-de-educacion-secundaria-ies-conde-de-orgaz",
    "type": "private",
    "address": "CALLE NAPOLES 56",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.460004213737875,
      "lng": -3.646852131012146
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6105",
    "name": "Instituto de Educación Secundaria (IES) Dámaso Alonso",
    "slug": "instituto-de-educacion-secundaria-ies-damaso-alonso",
    "type": "private",
    "address": "CALLE ALFREDO MARQUERIE 21",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.487347138609145,
      "lng": -3.7008132425610465
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6106",
    "name": "Instituto de Educación Secundaria (IES) Eijo y Garay",
    "slug": "instituto-de-educacion-secundaria-ies-eijo-y-garay",
    "type": "private",
    "address": "CALLE SEVERINO AZNAR EMBID 6",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.407648723183506,
      "lng": -3.737793320457927
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "62684",
    "name": "Instituto de Educación Secundaria (IES) El Espinillo",
    "slug": "instituto-de-educacion-secundaria-ies-el-espinillo",
    "type": "private",
    "address": "CALLE UNANIMIDAD 15",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.361584990765316,
      "lng": -3.688155833225709
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6217",
    "name": "Instituto de Educación Secundaria (IES) El Lago",
    "slug": "instituto-de-educacion-secundaria-ies-el-lago",
    "type": "public",
    "address": "PASEO PUERTA DEL ANGEL 5",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41580721645317,
      "lng": -3.7327080339044145
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6108",
    "name": "Instituto de Educación Secundaria (IES) Emilio Castelar",
    "slug": "instituto-de-educacion-secundaria-ies-emilio-castelar",
    "type": "private",
    "address": "CALLE RIO DE ORO 4",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.389273659273364,
      "lng": -3.7301582195119627
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6109",
    "name": "Instituto de Educación Secundaria (IES) Emperatriz María de Austria",
    "slug": "instituto-de-educacion-secundaria-ies-emperatriz-maria-de-austria",
    "type": "private",
    "address": "CALLE ANTONIO DE LEYVA 84",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38779958366843,
      "lng": -3.716652025965236
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6161",
    "name": "Instituto de Educación Secundaria (IES) Enrique Tierno Galván",
    "slug": "instituto-de-educacion-secundaria-ies-enrique-tierno-galvan",
    "type": "private",
    "address": "AVENIDA ANDALUCIA KM.6 KM 6,200",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.369925242949044,
      "lng": -3.696050003067571
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6213",
    "name": "Instituto de Educación Secundaria (IES) Escuela de la Vid",
    "slug": "instituto-de-educacion-secundaria-ies-escuela-de-la-vid",
    "type": "private",
    "address": "RONDA PROVINCIAS 5",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41114893423402,
      "lng": -3.742687363156784
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6214",
    "name": "Instituto de Educación Secundaria (IES) Escuela Superior de Hostelería y Turismo",
    "slug": "instituto-de-educacion-secundaria-ies-escuela-superior-de-hosteleria-y-turismo",
    "type": "private",
    "address": "PASEO PUERTA DEL ANGEL 5",
    "city": "MADRID",
    "postalCode": "28011",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41580721645317,
      "lng": -3.7327080339044145
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6110",
    "name": "Instituto de Educación Secundaria (IES) Felipe II",
    "slug": "instituto-de-educacion-secundaria-ies-felipe-ii",
    "type": "private",
    "address": "CALLE VALDEBERNARDO 1",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39738162149488,
      "lng": -3.633973906211737
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6111",
    "name": "Instituto de Educación Secundaria (IES) Fortuny",
    "slug": "instituto-de-educacion-secundaria-ies-fortuny",
    "type": "private",
    "address": "CALLE FORTUNY 24",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43371855186591,
      "lng": -3.690022497468036
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5793753",
    "name": "Instituto de Educación Secundaria (IES) Francisco Ayala",
    "slug": "instituto-de-educacion-secundaria-ies-francisco-ayala",
    "type": "private",
    "address": "CALLE JACOBEO 33",
    "city": "MADRID",
    "postalCode": "28054",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36572364957523,
      "lng": -3.760939176805745
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6112",
    "name": "Instituto de Educación Secundaria (IES) Francisco de Goya / La Elipa",
    "slug": "instituto-de-educacion-secundaria-ies-francisco-de-goya-la-elipa",
    "type": "private",
    "address": "CALLE SANTA IRENE 4",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.418495144790974,
      "lng": -3.65086284810799
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "- Educativos"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6165",
    "name": "Instituto de Educación Secundaria (IES) Francisco de Quevedo",
    "slug": "instituto-de-educacion-secundaria-ies-francisco-de-quevedo",
    "type": "private",
    "address": "CALLE SAN ROMAN DEL VALLE 6",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42150793321936,
      "lng": -3.6223653774863536
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6223",
    "name": "Instituto de Educación Secundaria (IES) Francisco Tomás y Valiente",
    "slug": "instituto-de-educacion-secundaria-ies-francisco-tomas-y-valiente",
    "type": "private",
    "address": "CALLE BENITA AVILA 3",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46372242242667,
      "lng": -3.650508920213377
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6119",
    "name": "Instituto de Educación Secundaria (IES) Gabriel García Márquez",
    "slug": "instituto-de-educacion-secundaria-ies-gabriel-garcia-marquez",
    "type": "private",
    "address": "CALLE NEVADO DEL RUIZ 1",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46984230325059,
      "lng": -3.6354333692014578
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6113",
    "name": "Instituto de Educación Secundaria (IES) García Morato",
    "slug": "instituto-de-educacion-secundaria-ies-garcia-morato",
    "type": "private",
    "address": "CALLE GENERAL SALIQUET 34",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37427307778163,
      "lng": -3.767785010967584
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6115",
    "name": "Instituto de Educación Secundaria (IES) Gómez Moreno",
    "slug": "instituto-de-educacion-secundaria-ies-gomez-moreno",
    "type": "private",
    "address": "AVENIDA HELLIN 5",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43251476600992,
      "lng": -3.6160532249765067
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (preferentemente auditivos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6116",
    "name": "Instituto de Educación Secundaria (IES) Gran Capitán",
    "slug": "instituto-de-educacion-secundaria-ies-gran-capitan",
    "type": "private",
    "address": "PASEO MELANCOLICOS 51",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.403715006538924,
      "lng": -3.7201322846875025
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6117",
    "name": "Instituto de Educación Secundaria (IES) Gregorio Marañón",
    "slug": "instituto-de-educacion-secundaria-ies-gregorio-maranon",
    "type": "private",
    "address": "AVENIDA EL FERROL 43",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47430854434283,
      "lng": -3.7101034755708167
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6231",
    "name": "Instituto de Educación Secundaria (IES) Hotel Escuela de la Comunidad de Madrid",
    "slug": "instituto-de-educacion-secundaria-ies-hotel-escuela-de-la-comunidad-de-madrid",
    "type": "private",
    "address": "RONDA PROVISIONAL CIUDAD ESCOLAR 7",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.526030789251074,
      "lng": -3.682767599474031
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Servicio de hotel",
      "restaurante y bar atendido por estudiantes de la Escuela de Hostelería"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6120",
    "name": "Instituto de Educación Secundaria (IES) Isaac Newton",
    "slug": "instituto-de-educacion-secundaria-ies-isaac-newton",
    "type": "private",
    "address": "CALLE JOAQUIN LORENZO 2",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.473031533383455,
      "lng": -3.722818756983547
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (preferentemente motóricos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6121",
    "name": "Instituto de Educación Secundaria (IES) Isabel la Católica",
    "slug": "instituto-de-educacion-secundaria-ies-isabel-la-catolica",
    "type": "private",
    "address": "CALLE ALFONSO XII 3",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40942102056066,
      "lng": -3.6885367745637776
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6215",
    "name": "Instituto de Educación Secundaria (IES) Islas Filipinas",
    "slug": "instituto-de-educacion-secundaria-ies-islas-filipinas",
    "type": "private",
    "address": "CALLE JESUS MAESTRO 3",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44058934417695,
      "lng": -3.7113403448052615
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (Preferentemente auditivos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6122",
    "name": "Instituto de Educación Secundaria (IES) Iturralde",
    "slug": "instituto-de-educacion-secundaria-ies-iturralde",
    "type": "private",
    "address": "CALLE NUESTRA SEÑORA DE LA LUZ 53",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.386012038462624,
      "lng": -3.751306277710789
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (General)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "100971",
    "name": "Instituto de Educación Secundaria (IES) Jaime Vera",
    "slug": "instituto-de-educacion-secundaria-ies-jaime-vera",
    "type": "private",
    "address": "CALLE INFANTA MERCEDES 47",
    "city": "MADRID",
    "postalCode": "28020",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45692226975866,
      "lng": -3.698102828195008
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6153",
    "name": "Instituto de Educación Secundaria (IES) Joaquín Rodrigo",
    "slug": "instituto-de-educacion-secundaria-ies-joaquin-rodrigo",
    "type": "private",
    "address": "CALLE CASALARREINA 28",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40897549865364,
      "lng": -3.6140942577626016
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6123",
    "name": "Instituto de Educación Secundaria (IES) Joaquín Turina",
    "slug": "instituto-de-educacion-secundaria-ies-joaquin-turina",
    "type": "private",
    "address": "CALLE GUZMAN EL BUENO 92",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.440608526864864,
      "lng": -3.7126139879125035
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6208",
    "name": "Instituto de Educación Secundaria (IES) Juan de la Cierva",
    "slug": "instituto-de-educacion-secundaria-ies-juan-de-la-cierva",
    "type": "private",
    "address": "CALLE LA CAOBA 1",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.402295133148854,
      "lng": -3.7064118610141668
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6124",
    "name": "Instituto de Educación Secundaria (IES) Juan de Villanueva",
    "slug": "instituto-de-educacion-secundaria-ies-juan-de-villanueva",
    "type": "private",
    "address": "CALLE CAMINO VIEJO DE VILLAVERDE 28",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36912076072016,
      "lng": -3.7112950823535185
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8146395",
    "name": "Instituto de Educación Secundaria (IES) Juan Ramón Jiménez",
    "slug": "instituto-de-educacion-secundaria-ies-juan-ramon-jimenez",
    "type": "private",
    "address": "CALLE ESTEFANITA 15",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34315044778978,
      "lng": -3.674182008873952
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6132",
    "name": "Instituto de Educación Secundaria (IES) Juana de Castilla",
    "slug": "instituto-de-educacion-secundaria-ies-juana-de-castilla",
    "type": "private",
    "address": "CALLE VALDEBERNARDO 3",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39843146459067,
      "lng": -3.63309996975464
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (Preferentemente motóricos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6093",
    "name": "Instituto de Educación Secundaria (IES) La Estrella",
    "slug": "instituto-de-educacion-secundaria-ies-la-estrella",
    "type": "private",
    "address": "CALLE ESTRELLA POLAR 10",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.409450182166985,
      "lng": -3.6666510401326065
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6162",
    "name": "Instituto de Educación Secundaria (IES) Las Musas",
    "slug": "instituto-de-educacion-secundaria-ies-las-musas",
    "type": "private",
    "address": "CALLE CARLOS II 1",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42773827618977,
      "lng": -3.6078635032359925
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6216",
    "name": "Instituto de Educación Secundaria (IES) Leonardo Da Vinci",
    "slug": "instituto-de-educacion-secundaria-ies-leonardo-da-vinci",
    "type": "private",
    "address": "CALLE BLAS CABRERA 90",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37804609167952,
      "lng": -3.7643058083390413
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6125",
    "name": "Instituto de Educación Secundaria (IES) Lope de Vega",
    "slug": "instituto-de-educacion-secundaria-ies-lope-de-vega",
    "type": "private",
    "address": "CALLE SAN BERNARDO 70",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.426979851696025,
      "lng": -3.7064224997167394
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "97726",
    "name": "Instituto de Educación Secundaria (IES) Madrid Sur",
    "slug": "instituto-de-educacion-secundaria-ies-madrid-sur",
    "type": "private",
    "address": "AVENIDA PARQUE DE PALOMERAS BAJAS 22",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.377454587016835,
      "lng": -3.6563813721457015
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10767946",
    "name": "Instituto de Educación Secundaria (IES) Malala Yousafzai",
    "slug": "instituto-de-educacion-secundaria-ies-malala-yousafzai",
    "type": "private",
    "address": "CALLE SIERRA DE ATAPUERCA 5",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.500672627188855,
      "lng": -3.673200936716817
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6518952",
    "name": "Instituto de Educación Secundaria (IES) Manuel Fraga Iribarne",
    "slug": "instituto-de-educacion-secundaria-ies-manuel-fraga-iribarne",
    "type": "private",
    "address": "AVENIDA NICETO ALCALA ZAMORA 54",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4994968321812,
      "lng": -3.6569084959295886
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6126",
    "name": "Instituto de Educación Secundaria (IES) María de Molina",
    "slug": "instituto-de-educacion-secundaria-ies-maria-de-molina",
    "type": "private",
    "address": "CALLE MIRABEL 22",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3804479457768,
      "lng": -3.7806959590474873
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10387806",
    "name": "Instituto de Educación Secundaria (IES) María Rodrigo",
    "slug": "instituto-de-educacion-secundaria-ies-maria-rodrigo",
    "type": "private",
    "address": "CALLE TALAMANCA DEL JARAMA, esquina GRANJA DE SAN ILDEFONSO ",
    "city": "MADRID",
    "postalCode": "28051",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3669635274679,
      "lng": -3.619625507906445
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6127",
    "name": "Instituto de Educación Secundaria (IES) Mariana Pineda",
    "slug": "instituto-de-educacion-secundaria-ies-mariana-pineda",
    "type": "private",
    "address": "CALLE ALCALDE GARRIDO JUARISTI 6",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41419316593839,
      "lng": -3.6564671423272745
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6128",
    "name": "Instituto de Educación Secundaria (IES) Mariano José de Larra",
    "slug": "instituto-de-educacion-secundaria-ies-mariano-jose-de-larra",
    "type": "private",
    "address": "CALLE CAMARENA 181",
    "city": "MADRID",
    "postalCode": "28047",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38818452268755,
      "lng": -3.753875320553469
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración preferente (Auditivos). Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6129",
    "name": "Instituto de Educación Secundaria (IES) Marqués de Suanzes",
    "slug": "instituto-de-educacion-secundaria-ies-marques-de-suanzes",
    "type": "private",
    "address": "AVENIDA VEINTICINCO DE SEPTIEMBRE 3",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44387198408691,
      "lng": -3.625036070003116
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6130",
    "name": "Instituto de Educación Secundaria (IES) Miguel Delibes",
    "slug": "instituto-de-educacion-secundaria-ies-miguel-delibes",
    "type": "private",
    "address": "CALLE VILLAESCUSA 17",
    "city": "MADRID",
    "postalCode": "28017",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42182594596347,
      "lng": -3.63183396936613
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6133",
    "name": "Instituto de Educación Secundaria (IES) Mirasierra",
    "slug": "instituto-de-educacion-secundaria-ies-mirasierra",
    "type": "private",
    "address": "CALLE PORTERA DEL CURA 4",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.491007592632585,
      "lng": -3.715058449001938
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6225",
    "name": "Instituto de Educación Secundaria (IES) Moratalaz",
    "slug": "instituto-de-educacion-secundaria-ies-moratalaz",
    "type": "private",
    "address": "CALLE CORREGIDOR DIEGO DE VALDERRABANO 35",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408278182902734,
      "lng": -3.6620902751641093
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6134",
    "name": "Instituto de Educación Secundaria (IES) Nuestra Señora de la Almudena",
    "slug": "instituto-de-educacion-secundaria-ies-nuestra-senora-de-la-almudena",
    "type": "private",
    "address": "PLAZA REMONTA 17",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46401954600425,
      "lng": -3.698400411395519
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "101114",
    "name": "Instituto de Educación Secundaria (IES) Numancia",
    "slug": "instituto-de-educacion-secundaria-ies-numancia",
    "type": "private",
    "address": "CALLE LAS MARISMAS 14",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.402204300135466,
      "lng": -3.654488722948694
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora. Integración preferente (motóricos)."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6136",
    "name": "Instituto de Educación Secundaria (IES) Ortega y Gasset",
    "slug": "instituto-de-educacion-secundaria-ies-ortega-y-gasset",
    "type": "private",
    "address": "CALLE SANTA FE 4",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43163480140256,
      "lng": -3.7357446569056294
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6226",
    "name": "Instituto de Educación Secundaria (IES) Pacífico",
    "slug": "instituto-de-educacion-secundaria-ies-pacifico",
    "type": "private",
    "address": "CALLE LUIS MITJANS 41",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40405975728252,
      "lng": -3.6687308977937696
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6155",
    "name": "Instituto de Educación Secundaria (IES) Palomeras - Vallecas",
    "slug": "instituto-de-educacion-secundaria-ies-palomeras-vallecas",
    "type": "private",
    "address": "CALLE ARBOLEDA ",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.385027135121874,
      "lng": -3.6262590221140574
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6156",
    "name": "Instituto de Educación Secundaria (IES) Parque Aluche",
    "slug": "instituto-de-educacion-secundaria-ies-parque-aluche",
    "type": "private",
    "address": "CALLE MAQUEDA 86",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39039761478656,
      "lng": -3.7639621139513095
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (preferentemente motóricos). Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6554627",
    "name": "Instituto de Educación Secundaria (IES) Pedro Salinas",
    "slug": "instituto-de-educacion-secundaria-ies-pedro-salinas",
    "type": "private",
    "address": "CALLE GENERAL MARVA 24",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38874886813379,
      "lng": -3.7088034483893
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6137",
    "name": "Instituto de Educación Secundaria (IES) Pérez Galdós",
    "slug": "instituto-de-educacion-secundaria-ies-perez-galdos",
    "type": "private",
    "address": "CALLE FERMIN CABALLERO 92",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.478174618141665,
      "lng": -3.721540775929924
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "53186",
    "name": "Instituto de Educación Secundaria (IES) Pío Baroja",
    "slug": "instituto-de-educacion-secundaria-ies-pio-baroja",
    "type": "private",
    "address": "CALLE TOLOSA 2",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37297425301285,
      "lng": -3.7189685986125345
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Programa de Actividades Extraescolares"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6218",
    "name": "Instituto de Educación Secundaria (IES) Pradolongo",
    "slug": "instituto-de-educacion-secundaria-ies-pradolongo",
    "type": "private",
    "address": "CALLE ALBARDIN 6",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3796429497218,
      "lng": -3.7172017324674167
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6219",
    "name": "Instituto de Educación Secundaria (IES) Príncipe Felipe",
    "slug": "instituto-de-educacion-secundaria-ies-principe-felipe",
    "type": "private",
    "address": "CALLE FINISTERRE 60",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.481962024356015,
      "lng": -3.7034118646526064
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6233",
    "name": "Instituto de Educación Secundaria (IES) Puerta Bonita",
    "slug": "instituto-de-educacion-secundaria-ies-puerta-bonita",
    "type": "public",
    "address": "CALLE PADRE AMIGO 5",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3795641278257,
      "lng": -3.7397251393302855
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6139",
    "name": "Instituto de Educación Secundaria (IES) Ramiro de Maeztu",
    "slug": "instituto-de-educacion-secundaria-ies-ramiro-de-maeztu",
    "type": "private",
    "address": "CALLE SERRANO 127",
    "city": "MADRID",
    "postalCode": "28006",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44209298097929,
      "lng": -3.6861462152769775
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6140",
    "name": "Instituto de Educación Secundaria (IES) Ramón y Cajal",
    "slug": "instituto-de-educacion-secundaria-ies-ramon-y-cajal",
    "type": "private",
    "address": "AVENIDA MANOTERAS 55",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.487253962803756,
      "lng": -3.6600221185724506
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6131",
    "name": "Instituto de Educación Secundaria (IES) Renacimiento",
    "slug": "instituto-de-educacion-secundaria-ies-renacimiento",
    "type": "private",
    "address": "CALLE CASTELLFLORITE 4",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39366237687734,
      "lng": -3.7384654469356606
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6141",
    "name": "Instituto de Educación Secundaria (IES) Rey Pastor",
    "slug": "instituto-de-educacion-secundaria-ies-rey-pastor",
    "type": "private",
    "address": "CALLE CORREGIDOR JOSE DE PASAMONTE 17",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.410654828140416,
      "lng": -3.6480883318964583
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6118",
    "name": "Instituto de Educación Secundaria (IES) Rosa Chacel",
    "slug": "instituto-de-educacion-secundaria-ies-rosa-chacel",
    "type": "private",
    "address": "CALLE ABIZANDA 70",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47721863150662,
      "lng": -3.6519722875694556
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6147",
    "name": "Instituto de Educación Secundaria (IES) Salvador Dalí",
    "slug": "instituto-de-educacion-secundaria-ies-salvador-dali",
    "type": "private",
    "address": "CALLE VERDAGUER Y GARCIA 2",
    "city": "MADRID",
    "postalCode": "28027",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43969816091729,
      "lng": -3.6563968141893874
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora. Integración preferente motóricos."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6157",
    "name": "Instituto de Educación Secundaria (IES) San Blas",
    "slug": "instituto-de-educacion-secundaria-ies-san-blas",
    "type": "private",
    "address": "CALLE ARCOS DE JALON 120",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42642038448032,
      "lng": -3.6134360587757692
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6142",
    "name": "Instituto de Educación Secundaria (IES) San Cristóbal de los Ángeles",
    "slug": "instituto-de-educacion-secundaria-ies-san-cristobal-de-los-angeles",
    "type": "private",
    "address": "PLAZA PINAZO 7",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34233618931469,
      "lng": -3.6905504735084342
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6163",
    "name": "Instituto de Educación Secundaria (IES) San Fernando",
    "slug": "instituto-de-educacion-secundaria-ies-san-fernando",
    "type": "private",
    "address": "CARRETERA COLMENAR VIEJO KM.13500",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.528281841913156,
      "lng": -3.6921366876182233
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Comedor. Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6143",
    "name": "Instituto de Educación Secundaria (IES) San Isidoro de Sevilla",
    "slug": "instituto-de-educacion-secundaria-ies-san-isidoro-de-sevilla",
    "type": "private",
    "address": "PLAZA MARQUES DE COMILLAS 1",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.445486369895626,
      "lng": -3.71924542198075
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6144",
    "name": "Instituto de Educación Secundaria (IES) San Isidro",
    "slug": "instituto-de-educacion-secundaria-ies-san-isidro",
    "type": "private",
    "address": "CALLE TOLEDO 39",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41263139194005,
      "lng": -3.707415693273498
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6145",
    "name": "Instituto de Educación Secundaria (IES) San Juan Bautista",
    "slug": "instituto-de-educacion-secundaria-ies-san-juan-bautista",
    "type": "private",
    "address": "CALLE SAN NEMESIO 1",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4520666725354,
      "lng": -3.6581328111658653
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora. Convenio con el British Council"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6221",
    "name": "Instituto de Educación Secundaria (IES) Santa Engracia",
    "slug": "instituto-de-educacion-secundaria-ies-santa-engracia",
    "type": "private",
    "address": "CALLE SANTA ENGRACIA 13",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42984936688401,
      "lng": -3.6967499772030163
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (Preferentemente auditivos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6164",
    "name": "Instituto de Educación Secundaria (IES) Santa Eugenia",
    "slug": "instituto-de-educacion-secundaria-ies-santa-eugenia",
    "type": "private",
    "address": "CALLE CERRO DE ALMODOVAR 5",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38466865123782,
      "lng": -3.603958826692157
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (preferentemente motóricos)"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6148",
    "name": "Instituto de Educación Secundaria (IES) Santa Teresa de Jesús",
    "slug": "instituto-de-educacion-secundaria-ies-santa-teresa-de-jesus",
    "type": "private",
    "address": "CALLE FOMENTO 9",
    "city": "MADRID",
    "postalCode": "28013",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.420551878917195,
      "lng": -3.7101037183250414
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6149",
    "name": "Instituto de Educación Secundaria (IES) Santamarca",
    "slug": "instituto-de-educacion-secundaria-ies-santamarca",
    "type": "private",
    "address": "CALLE PUERTO RICO 34",
    "city": "MADRID",
    "postalCode": "28016",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4558753288865,
      "lng": -3.6741387868229243
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6222",
    "name": "Instituto de Educación Secundaria (IES) Tetuán de las Victorias",
    "slug": "instituto-de-educacion-secundaria-ies-tetuan-de-las-victorias",
    "type": "private",
    "address": "CALLE VIA LIMITE 14",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47305798647611,
      "lng": -3.6904958177678564
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6152",
    "name": "Instituto de Educación Secundaria (IES) Tirso de Molina",
    "slug": "instituto-de-educacion-secundaria-ies-tirso-de-molina",
    "type": "private",
    "address": "AVENIDA ALBUFERA 144",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39127698943258,
      "lng": -3.6527687134182982
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "72546",
    "name": "Instituto de Educación Secundaria (IES) Valdebernardo",
    "slug": "instituto-de-educacion-secundaria-ies-valdebernardo",
    "type": "private",
    "address": "BULEVAR INDALECIO PRIETO 1",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40525429891849,
      "lng": -3.619245830201053
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6227",
    "name": "Instituto de Educación Secundaria (IES) Vallecas I",
    "slug": "instituto-de-educacion-secundaria-ies-vallecas-i",
    "type": "private",
    "address": "AVENIDA ALBUFERA 78",
    "city": "MADRID",
    "postalCode": "28038",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39500133010528,
      "lng": -3.663221010051645
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6228",
    "name": "Instituto de Educación Secundaria (IES) Vallecas - Magerit",
    "slug": "instituto-de-educacion-secundaria-ies-vallecas-magerit",
    "type": "private",
    "address": "CALLE ANTONIO FOLGUERAS 27",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.388886893006685,
      "lng": -3.661169848673086
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6154",
    "name": "Instituto de Educación Secundaria (IES) Villa de Vallecas",
    "slug": "instituto-de-educacion-secundaria-ies-villa-de-vallecas",
    "type": "private",
    "address": "CALLE VILLARINO DE LOS AIRES 14",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.375136477747475,
      "lng": -3.6243415829018666
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora. Convenio con el British Council."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6224",
    "name": "Instituto de Educación Secundaria (IES) Villablanca",
    "slug": "instituto-de-educacion-secundaria-ies-villablanca",
    "type": "private",
    "address": "CALLE VILLABLANCA 79",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40592177929774,
      "lng": -3.6003015022957117
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "176063",
    "name": "Instituto de Educación Secundaria (IES) Villaverde",
    "slug": "instituto-de-educacion-secundaria-ies-villaverde",
    "type": "private",
    "address": "CALLE ALIANZA 20",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35757164103424,
      "lng": -3.6873613214871783
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6158",
    "name": "Instituto de Educación Secundaria (IES) Virgen de La Paloma",
    "slug": "instituto-de-educacion-secundaria-ies-virgen-de-la-paloma",
    "type": "public",
    "address": "CALLE FRANCOS RODRIGUEZ 106",
    "city": "MADRID",
    "postalCode": "28039",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45928122069037,
      "lng": -3.7174582443330895
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [
      "Integración (Preferentemente auditivos)"
    ],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6210",
    "name": "Instituto de Educación Secundaria (IES) Vista Alegre",
    "slug": "instituto-de-educacion-secundaria-ies-vista-alegre",
    "type": "private",
    "address": "CALLE GENERAL RICARDOS 177",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.385197375260255,
      "lng": -3.7364997414123096
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Integración (preferentemente motóricos). Planes de mejora."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "109174",
    "name": "Instituto de Estudios Bursátiles",
    "slug": "instituto-de-estudios-bursatiles",
    "type": "private",
    "address": "AVENIDA TALGO 5",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.446914051263015,
      "lng": -3.7787937166693006
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "9357",
    "name": "Instituto de Salud Carlos III",
    "slug": "instituto-de-salud-carlos-iii",
    "type": "private",
    "address": "CALLE SINESIO DELGADO 4",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.474623368278294,
      "lng": -3.690923695046688
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6826",
    "name": "Instituto de Salud Carlos III. Centro Nacional de Epidemiología",
    "slug": "instituto-de-salud-carlos-iii-centro-nacional-de-epidemiologia",
    "type": "private",
    "address": "AVENIDA MONFORTE DE LEMOS 5",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.475476558696364,
      "lng": -3.6900419862500202
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "97192",
    "name": "Instituto de Salud Carlos III. Escuela Nacional de Medicina del Trabajo",
    "slug": "instituto-de-salud-carlos-iii-escuela-nacional-de-medicina-del-trabajo",
    "type": "private",
    "address": "CALLE SINESIO DELGADO 8",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47467830039234,
      "lng": -3.693859963015047
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "136647",
    "name": "Instituto del Cine Madrid",
    "slug": "instituto-del-cine-madrid",
    "type": "private",
    "address": "CALLE EDUARDO BENOT 2",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.422074442972935,
      "lng": -3.718224610037922
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Diplomaturas",
      "Másteres",
      "cursos y talleres."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6177",
    "name": "Instituto Vox",
    "slug": "instituto-vox",
    "type": "private",
    "address": "CALLE GRAN VIA 59",
    "city": "MADRID",
    "postalCode": "28013",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42201761462547,
      "lng": -3.7090817981929645
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Servicio de horario ampliado"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11616488",
    "name": "Madrid Innovation Lab (MIL)",
    "slug": "madrid-innovation-lab-mil",
    "type": "private",
    "address": "CALLE BRAVO MURILLO 39 Colonia “San Cristóbal” entrada desde la plaza y secundaria C/ Magallanes, 44",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43669308184112,
      "lng": -3.7047914352358498
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Actividades de información",
      "formación y capacitación dirigidas a público especializado",
      "entidades de enseñanza y público en general. Actividades de definición y desarrollo de casos de uso aplicando innovación abierta. Espacio a disposición de agentes del ecosistema para realizar conferencias",
      "mesas redondas",
      "presentanciones."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6781",
    "name": "Ministerio de Educación, Formación Profesional y Deportes",
    "slug": "ministerio-de-educacion-formacion-profesional-y-deportes",
    "type": "private",
    "address": "CALLE ALCALA 34",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41823072342494,
      "lng": -3.697464523417472
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "16",
    "name": "Ministerio de Educación, Formación Profesional y Deportes. Atención al ciudadano temas educativos",
    "slug": "ministerio-de-educacion-formacion-profesional-y-deportes-atencion-al-ciudadano-temas-educativos",
    "type": "private",
    "address": "CALLE LOS MADRAZO 17",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4176887473743,
      "lng": -3.696626402053037
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10014347",
    "name": "Norte Joven Fuencarral",
    "slug": "norte-joven-fuencarral",
    "type": "private",
    "address": "CALLE RIBADAVIA 20",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.472483367188964,
      "lng": -3.705094245869061
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6802",
    "name": "Organización de Estados Iberoamericanos para la Educación, la Ciencia y la Cultura (OEI)",
    "slug": "organizacion-de-estados-iberoamericanos-para-la-educacion-la-ciencia-y-la-cultura-oei",
    "type": "private",
    "address": "CALLE BRAVO MURILLO 38",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.438076082601214,
      "lng": -3.7040328804081515
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12813639",
    "name": "Parque de La Bombilla",
    "slug": "parque-de-la-bombilla",
    "type": "private",
    "address": "PASEO SENDA DEL REY ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42671,
      "lng": -3.72627
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "No dispone de WiFi Aforo aproximado 1.400"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12780120",
    "name": "Parque de la Montaña. Junto a Templo de Debod (Moncloa-Aravaca)",
    "slug": "parque-de-la-montana-junto-a-templo-de-debod-moncloa-aravaca",
    "type": "private",
    "address": "PARQUE DE LA MONTAÑA",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.424723,
      "lng": -3.717977
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "No dispone de WiFi Aforo aproximado 500 personas"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12813370",
    "name": "Parque Rosas (Aravaca)",
    "slug": "parque-rosas-aravaca",
    "type": "private",
    "address": "Calle RÍO NELA ESQUINA CALLE HÚMERA 1",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.451737,
      "lng": -3.781915
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "No dispone de WiFi Aforo aproximado 280"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12758138",
    "name": "Parroquia de la Asunción de Aravaca",
    "slug": "parroquia-de-la-asuncion-de-aravaca",
    "type": "private",
    "address": "CALLE BERENISA 45",
    "city": "MADRID",
    "postalCode": "28023",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45750401365236,
      "lng": -3.7830717384473393
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12813557",
    "name": "Plaza Lugar Poetas (Moncloa-Aravaca)",
    "slug": "plaza-lugar-poetas-moncloa-aravaca",
    "type": "private",
    "address": "CALLE ANTONIO MACHADO 22",
    "city": "MADRID",
    "postalCode": "",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46644791330993,
      "lng": -3.7190034169332566
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "No dispone de WiFi Aforo aproximado 500"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6070",
    "name": "Real Colegio Santa Isabel - La Asunción",
    "slug": "real-colegio-santa-isabel-la-asuncion",
    "type": "private",
    "address": "CALLE SANTA ISABEL 46",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40962511552305,
      "lng": -3.6965767139076444
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Horario ampliado - Comedor"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6692",
    "name": "Real Conservatorio Profesional de Danza Mariemma",
    "slug": "real-conservatorio-profesional-de-danza-mariemma",
    "type": "private",
    "address": "CALLE PADRE AMIGO 5",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3795692417791,
      "lng": -3.739703996300138
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6688",
    "name": "Real Conservatorio Superior de Música de Madrid",
    "slug": "real-conservatorio-superior-de-musica-de-madrid",
    "type": "private",
    "address": "CALLE DOCTOR MATA 2",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40911851656591,
      "lng": -3.694381844306605
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6680",
    "name": "Real Escuela Superior de Arte Dramático (RESAD)",
    "slug": "real-escuela-superior-de-arte-dramatico-resad",
    "type": "private",
    "address": "AVENIDA NAZARET 2",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.410647702865404,
      "lng": -3.674600787014209
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6334335",
    "name": "Real Observatorio Astronómico de Madrid",
    "slug": "real-observatorio-astronomico-de-madrid",
    "type": "private",
    "address": "CALLE ALFONSO XII 3",
    "city": "MADRID",
    "postalCode": "28014",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4094661942901,
      "lng": -3.688412783499902
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11954914",
    "name": "Residencia de Estudiantes Ciudad Escolar. Comunidad de Madrid.",
    "slug": "residencia-de-estudiantes-ciudad-escolar-comunidad-de-madrid",
    "type": "private",
    "address": "CARRETERA COLMENAR VIEJO  Km. 12,800",
    "city": "MADRID",
    "postalCode": "",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.52514591809954,
      "lng": -3.6853908329744214
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11163416",
    "name": "Residencia de estudiantes Palacio de Barradas",
    "slug": "residencia-de-estudiantes-palacio-de-barradas",
    "type": "private",
    "address": "CALLE SAN BERNARDO 63",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42645825034476,
      "lng": -3.706923606244769
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "55233",
    "name": "Residencia Universitaria Augustinus Nebrija",
    "slug": "residencia-universitaria-augustinus-nebrija",
    "type": "private",
    "address": "CALLE CEA BERMUDEZ 59",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43894007585974,
      "lng": -3.715531702478502
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "168328",
    "name": "Residencia Universitaria Erasmo",
    "slug": "residencia-universitaria-erasmo",
    "type": "private",
    "address": "CALLE ERASMO DE ROTTERDAM 5",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.548027795931425,
      "lng": -3.6989970922329403
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "185968",
    "name": "Residencia Universitaria Gómez Pardo",
    "slug": "residencia-universitaria-gomez-pardo",
    "type": "private",
    "address": "CALLE CRISTOBAL BORDIU 30",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.443040030471,
      "lng": -3.7009070820260876
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7614004",
    "name": "Residencia Universitaria José Pérez de Vargas",
    "slug": "residencia-universitaria-jose-perez-de-vargas",
    "type": "private",
    "address": "AVENIDA DAROCA 321",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.406276896821566,
      "lng": -3.6127600502928536
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12727283",
    "name": "Residencia Universitaria Nebrija Arturo Soria",
    "slug": "residencia-universitaria-nebrija-arturo-soria",
    "type": "private",
    "address": "CALLE ASURA 90",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45750817868435,
      "lng": -3.6544422302629136
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6461002",
    "name": "Residencia Universitaria Nebrija Chamberí",
    "slug": "residencia-universitaria-nebrija-chamberi",
    "type": "private",
    "address": "CALLE NICASIO GALLEGO 12",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42942134889185,
      "lng": -3.698902512090178
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8154142",
    "name": "Residencia Universitaria Nebrija - Corazonistas",
    "slug": "residencia-universitaria-nebrija-corazonistas",
    "type": "private",
    "address": "CALLE TUTOR 36",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42951144473094,
      "lng": -3.7166919067720485
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11954900",
    "name": "Residencia Universitaria Tagaste",
    "slug": "residencia-universitaria-tagaste",
    "type": "private",
    "address": "CALLE GENERAL PARDI&amp;Ntilde;AS 34",
    "city": "MADRID",
    "postalCode": "28001",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42668459434315,
      "lng": -3.6784079436749755
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Tipo mixta."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "84708",
    "name": "Residencia - Internado San Ildefonso",
    "slug": "residencia-internado-san-ildefonso",
    "type": "private",
    "address": "CALLE ALFONSO VI 1",
    "city": "MADRID",
    "postalCode": "28005",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.413034857916976,
      "lng": -3.712134440649956
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Residencia - Internado para menores entre 6 y 14 años"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815242",
    "name": "Sala de estudio Ágata",
    "slug": "sala-de-estudio-agata",
    "type": "private",
    "address": "CALLE DOCTOR MARTIN AREVALO 2",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34636268334182,
      "lng": -3.708524395897377
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 25"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4813751",
    "name": "Sala de estudio Alfonso XII (Fuencarral - El Pardo)",
    "slug": "sala-de-estudio-alfonso-xii-fuencarral-el-pardo",
    "type": "private",
    "address": "CALLE MIRA EL RIO 4",
    "city": "MADRID",
    "postalCode": "28048",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.519673311658686,
      "lng": -3.7779055687726535
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Aforo: 18 puestos.     El acceso a los puesto se hará por riguroso orden de llegada. Transcurrido 30 minutos desde el abandono del puesto",
      "de estudio",
      "éste podrá ser ocupado por otra persona. Está prohibido comer",
      "cambiarse de puesto o mover el mobiliario de la sala. Se solicita guardar silencio y atender las indicaciones del personal del Centro Cultural. El incumplimiento de estas normas podrá suponer la denegación de la utilización de la sala.    Wifi disponible."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4813737",
    "name": "Sala de estudio Alfredo Kraus (Fuencarral - El Pardo)",
    "slug": "sala-de-estudio-alfredo-kraus-fuencarral-el-pardo",
    "type": "private",
    "address": "GLORIETA PRADERA DE VAQUERIZAS 9",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49082275610172,
      "lng": -3.7216054330053647
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Aforo: 85 puestos.    El acceso a los puesto se hará por riguroso orden de llegada. Transcurrido 30 minutos desde el abandono del puesto",
      "de estudio",
      "éste podrá ser ocupado por otra persona. Está prohibido comer",
      "cambiarse de puesto o mover el mobiliario de la sala. Se solicita guardar silencio y atender las indicaciones del personal del Centro Cultural. El incumplimiento de estas normas podrá suponer la denegación de la utilización de la sala.    Wifi disponible."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "50067417",
    "name": "Sala de estudio Antonio López (Chamartín)",
    "slug": "sala-de-estudio-antonio-lopez-chamartin",
    "type": "private",
    "address": "CALLE PASTORA IMPERIO 4",
    "city": "MADRID",
    "postalCode": "28036",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.444902405213526,
      "lng": -3.6780788363404526
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 74 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815112",
    "name": "Sala de estudio Carril del Conde (Hortaleza)",
    "slug": "sala-de-estudio-carril-del-conde-hortaleza",
    "type": "private",
    "address": "CALLE CARRIL DEL CONDE 57 esquina a calle Santa Natalia, 2",
    "city": "MADRID",
    "postalCode": "28043",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46089499555313,
      "lng": -3.654366821391548
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 196 Wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5709413",
    "name": "Sala de estudio Centro cultural El Torito (Moratalaz)",
    "slug": "sala-de-estudio-centro-cultural-el-torito-moratalaz",
    "type": "private",
    "address": "AVENIDA MORATALAZ 130",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40610655994401,
      "lng": -3.646521482592748
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 21 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8000760",
    "name": "Sala de estudio Centro cultural Lope de Vega (Puente de Vallecas)",
    "slug": "sala-de-estudio-centro-cultural-lope-de-vega-puente-de-vallecas",
    "type": "private",
    "address": "CALLE CONCEJO DE TEVERGA 1",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.386296991431074,
      "lng": -3.671858416387963
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 41 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4816516",
    "name": "Sala de estudio Centro cultural Quinta del Berro - Rafael Altamira (Salamanca)",
    "slug": "sala-de-estudio-centro-cultural-quinta-del-berro-rafael-altamira-salamanca",
    "type": "private",
    "address": "CALLE ENRIQUE D'ALMONTE 1",
    "city": "MADRID",
    "postalCode": "28028",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42206923419431,
      "lng": -3.6629608041639368
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 24 Wiffi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4812338",
    "name": "Sala de estudio Centro Dotacional Integrado Arganzuela Ángel del Río",
    "slug": "sala-de-estudio-centro-dotacional-integrado-arganzuela-angel-del-rio",
    "type": "private",
    "address": "CALLE CANARIAS 17",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40242416544921,
      "lng": -3.6954440062549017
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura (aforo máximo): 171 personas. Zona wifi."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815363",
    "name": "Sala de estudio Centro Juvenil El Sitio de mi Recreo (Villa de Vallecas)",
    "slug": "sala-de-estudio-centro-juvenil-el-sitio-de-mi-recreo-villa-de-vallecas",
    "type": "private",
    "address": "CALLE REAL DE ARGANDA 39",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37953682427198,
      "lng": -3.616901585603186
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815051",
    "name": "Sala de estudio Centro Sociocultural Moratalaz",
    "slug": "sala-de-estudio-centro-sociocultural-moratalaz",
    "type": "private",
    "address": "CALLE FUENTE CARRANTONA 10",
    "city": "MADRID",
    "postalCode": "28030",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39928542551079,
      "lng": -3.636600379403484
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 65 Zona wifi."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4814996",
    "name": "Sala de estudio Centro Sociocultural Talleres de Creatividad (Puente de Vallecas)",
    "slug": "sala-de-estudio-centro-sociocultural-talleres-de-creatividad-puente-de-vallecas",
    "type": "private",
    "address": "CALLE SIERRA CARBONERA 74",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39010138870244,
      "lng": -3.6653235716960015
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8071924",
    "name": "Sala de estudio Ciudad Pegaso (San Blas - Canillejas)",
    "slug": "sala-de-estudio-ciudad-pegaso-san-blas-canillejas",
    "type": "private",
    "address": "AVENIDA SEPTIMA 11",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44844757572015,
      "lng": -3.598099871155595
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 50 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11875008",
    "name": "Sala de estudio Corín Tellado  (Moncloa-Aravaca)",
    "slug": "sala-de-estudio-corin-tellado-moncloa-aravaca",
    "type": "private",
    "address": "CALLE SANTA POLA 22",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.432243310641894,
      "lng": -3.7366613378902462
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 50 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12678028",
    "name": "Sala de Estudio del Centro Intergeneracional Río Esmeralda",
    "slug": "sala-de-estudio-del-centro-intergeneracional-rio-esmeralda",
    "type": "private",
    "address": "CALLE LAGO MARACAIBO 8",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.383202672832304,
      "lng": -3.6520212485606334
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Acceso a internet Mesas de trabajo"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8637537",
    "name": "Sala de Estudio del Centro Sociocultural Clara Campoamor (Retiro)",
    "slug": "sala-de-estudio-del-centro-sociocultural-clara-campoamor-retiro",
    "type": "private",
    "address": "PLAZA DAOIZ Y VELARDE 1",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40232608747992,
      "lng": -3.6774411939274305
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Sala Dulce Chacón (1&amp;ordf; planta): 20 puestos (Esta sala no podrá usarse como sala de estudio cuando esté ocupada por cesiones/actividades socioculturales)     Sala de estudio Gloria Fuertes (2&amp;ordf; planta): 24 puestos .  Sala Las Sinsombrero (2&amp;ordf; y 3&amp;ordf; planta): 24 puestos (Esta sala no podrá usarse como sala de estudio cuando esté ocupada por cesiones/actividades socioculturales). Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815414",
    "name": "Sala de estudio El Madroño (Vicálvaro)",
    "slug": "sala-de-estudio-el-madrono-vicalvaro",
    "type": "private",
    "address": "CALLE VILLARDONDIEGO 36",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40529229274289,
      "lng": -3.6086152959929514
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 32 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5753713",
    "name": "Sala de estudio Fernando Lázaro Carreter (Carabanchel)",
    "slug": "sala-de-estudio-fernando-lazaro-carreter-carabanchel",
    "type": "private",
    "address": "CALLE VERDAD 29",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39164455403764,
      "lng": -3.717137582860074
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 25 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5753557",
    "name": "Sala de estudio Fernando Vizcaíno Casas (Chamberí)",
    "slug": "sala-de-estudio-fernando-vizcaino-casas-chamberi",
    "type": "private",
    "address": "CALLE BLASCO DE GARAY 40",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43384489097444,
      "lng": -3.71143798482586
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 170 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6924985",
    "name": "Sala de estudio Francisco José González Tejera (Hortaleza)",
    "slug": "sala-de-estudio-francisco-jose-gonzalez-tejera-hortaleza",
    "type": "private",
    "address": "CALLE SANTA VIRGILIA 15",
    "city": "MADRID",
    "postalCode": "28033",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47682410775741,
      "lng": -3.6420497457238
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 50 plazas. Wifi."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8071938",
    "name": "Sala de estudio José Luis López Vázquez (San Blas - Canillejas)",
    "slug": "sala-de-estudio-jose-luis-lopez-vazquez-san-blas-canillejas",
    "type": "private",
    "address": "CALLE FEBRERO 4 PLANTA En la 2ª Planta del edificio",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.446826729909155,
      "lng": -3.5727382893523254
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 152 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4813757",
    "name": "Sala de estudio Julio Cortázar (Moncloa-Aravaca)",
    "slug": "sala-de-estudio-julio-cortazar-moncloa-aravaca",
    "type": "private",
    "address": "CALLE ANTONIO MACHADO 20",
    "city": "MADRID",
    "postalCode": "28035",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46678417843686,
      "lng": -3.7195598670929315
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815257",
    "name": "Sala de estudio Los Rosales",
    "slug": "sala-de-estudio-los-rosales",
    "type": "private",
    "address": "AVENIDA LOS ROSALES 133",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35074797433515,
      "lng": -3.6773064421969233
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 32"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6468021",
    "name": "Sala de estudio Luis García Berlanga (Tetuán)",
    "slug": "sala-de-estudio-luis-garcia-berlanga-tetuan",
    "type": "private",
    "address": "CALLE VI&amp;Ntilde;A VIRGEN 2",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4652835428932,
      "lng": -3.694060048143814
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 62 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4812602",
    "name": "Sala de estudio Luis Gonzaga (Chamartín)",
    "slug": "sala-de-estudio-luis-gonzaga-chamartin",
    "type": "private",
    "address": "CALLE PRINCIPE DE VERGARA 142",
    "city": "MADRID",
    "postalCode": "28002",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.444902405213526,
      "lng": -3.6780788363404526
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 98 (reducido 32) Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815260",
    "name": "Sala de estudio Marconi",
    "slug": "sala-de-estudio-marconi",
    "type": "private",
    "address": "ACCESO COLONIA MARCONI 4",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.334751832113774,
      "lng": -3.700809560921597
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 16"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5753637",
    "name": "Sala de estudio Montecarmelo (Fuencarral - El Pardo)",
    "slug": "sala-de-estudio-montecarmelo-fuencarral-el-pardo",
    "type": "private",
    "address": "Avenida Santuario de Valverde. 114 Carretera M-607 km 13-L10. Acceso a través del PAU Montecarmelo",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.51635495615339,
      "lng": -3.685946562681175
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Aforo: 24 puestos.    El acceso a los puesto se hará por riguroso orden de llegada. Transcurrido 30 minutos desde el abandono del puesto",
      "de estudio",
      "éste podrá ser ocupado por otra persona. Está prohibido comer",
      "cambiarse de puesto o mover el mobiliario de la sala. Se solicita guardar silencio y atender las indicaciones del personal del Centro Cultural. El incumplimiento de estas normas podrá suponer la denegación de la utilización de la sala.    Wifi disponible."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "10751094",
    "name": "Sala de estudio Motilla del Palancar (Hortaleza)",
    "slug": "sala-de-estudio-motilla-del-palancar-hortaleza",
    "type": "private",
    "address": "CALLE MOTILLA DEL PALANCAR 13 PLANTA local bajo",
    "city": "MADRID",
    "postalCode": "",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.46532067984838,
      "lng": -3.633321598436636
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 60 plazas. Wifi."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4814223",
    "name": "Sala de estudio Oporto (Carabanchel)",
    "slug": "sala-de-estudio-oporto-carabanchel",
    "type": "private",
    "address": "AVENIDA OPORTO 78",
    "city": "MADRID",
    "postalCode": "28019",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38682740756541,
      "lng": -3.7277493066262406
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 48 Zona wifi."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5753811",
    "name": "Sala de estudio San Cristóbal",
    "slug": "sala-de-estudio-san-cristobal",
    "type": "private",
    "address": "PLAZA PINAZO 9",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.34267317099495,
      "lng": -3.6914487380508842
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 40"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6478893",
    "name": "Sala de estudio Sanchinarro (Hortaleza)",
    "slug": "sala-de-estudio-sanchinarro-hortaleza",
    "type": "private",
    "address": "CALLE PRINCESA DE EBOLI 29",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.49042200599307,
      "lng": -3.6553467891079854
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 172 plazas. Wifi."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815268",
    "name": "Sala de estudio Santa Petronila",
    "slug": "sala-de-estudio-santa-petronila",
    "type": "private",
    "address": "CALLE MARIA MARTINEZ OVIOL 12",
    "city": "MADRID",
    "postalCode": "28021",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.35087114162283,
      "lng": -3.691508909255186
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 15"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815389",
    "name": "Sala de estudio Valdebernardo (Vicálvaro)",
    "slug": "sala-de-estudio-valdebernardo-vicalvaro",
    "type": "private",
    "address": "BULEVAR INDALECIO PRIETO 21",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.399832138328044,
      "lng": -3.6212720265227873
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Dos salas de estudio. Puestos de lectura: 60. Zona wifi."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11745306",
    "name": "Sala de estudio Villa del Prado de Arganzuela",
    "slug": "sala-de-estudio-villa-del-prado-de-arganzuela",
    "type": "private",
    "address": "CALLE VILLA DEL PRADO 27",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39951850544056,
      "lng": -3.6865740180088986
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura (aforo máximo): 50 personas. Sala con mesa con 6 asientos para reuniones o grupos de trabajo."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7989332",
    "name": "Sala de estudio y lectura del Centro Cultural Las Californias (Retiro)",
    "slug": "sala-de-estudio-y-lectura-del-centro-cultural-las-californias-retiro",
    "type": "private",
    "address": "CALLE LUIS PEIDRO 2",
    "city": "MADRID",
    "postalCode": "28007",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3970232448735,
      "lng": -3.673525754770304
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: En días laborales 36 puestos de estudio y el sábado 55."
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12205090",
    "name": "Sala de estudio y lectura Fuente de San Pedro - Valderrivas",
    "slug": "sala-de-estudio-y-lectura-fuente-de-san-pedro-valderrivas",
    "type": "private",
    "address": "CALLE TITANIO 5",
    "city": "MADRID",
    "postalCode": "28032",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.40218085880392,
      "lng": -3.60141148450391
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 64 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12684456",
    "name": "Sala de estudios Casita del Reloj (Salamanca)",
    "slug": "sala-de-estudios-casita-del-reloj-salamanca",
    "type": "private",
    "address": "PARQUE QUINTA FUENTE DEL BERRO ",
    "city": "MADRID",
    "postalCode": "",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42476290600173,
      "lng": -3.6608579170962035
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 19 Wiffi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4814317",
    "name": "Sala de lectura Centro sociocultural Cánovas del Castillo (Usera)",
    "slug": "sala-de-lectura-centro-sociocultural-canovas-del-castillo-usera",
    "type": "private",
    "address": "CALLE JULIO AGUIRRE 10",
    "city": "MADRID",
    "postalCode": "28026",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38627312379031,
      "lng": -3.700074755609488
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 20 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "4815493",
    "name": "Sala de lectura Pilares (Barajas)",
    "slug": "sala-de-lectura-pilares-barajas",
    "type": "private",
    "address": "CALLE LOS PILARES 3",
    "city": "MADRID",
    "postalCode": "28042",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.47505259096345,
      "lng": -3.5777887189944315
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 72 Wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "11947734",
    "name": "Sala de trabajo y lectura Centro Cultural Emilia Pardo Bazán",
    "slug": "sala-de-trabajo-y-lectura-centro-cultural-emilia-pardo-bazan",
    "type": "private",
    "address": "CALLE GOYA 1 PLANTA Subterráneo",
    "city": "MADRID",
    "postalCode": "28001",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42585800515975,
      "lng": -3.689601594290468
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Número de plazas: 57 Zona wifi Máquinas de café y refrescos"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7988710",
    "name": "Salas de estudio Centro cultural Mercado de Ibiza (Retiro)",
    "slug": "salas-de-estudio-centro-cultural-mercado-de-ibiza-retiro",
    "type": "private",
    "address": "CALLE IBIZA 8 PLANTA 1ª",
    "city": "MADRID",
    "postalCode": "28009",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.41817872037522,
      "lng": -3.677376337125393
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 33 y 25  Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5753771",
    "name": "Salas de estudio Centro Cultural Pozo del tío Raimundo (Puente de Vallecas)",
    "slug": "salas-de-estudio-centro-cultural-pozo-del-tio-raimundo-puente-de-vallecas",
    "type": "private",
    "address": "AVENIDA GLORIETAS 19",
    "city": "MADRID",
    "postalCode": "28053",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37381624358889,
      "lng": -3.6599325731670977
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 10 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "8071910",
    "name": "Salas de estudio Miguel de Cervantes (San Blas - Canillejas)",
    "slug": "salas-de-estudio-miguel-de-cervantes-san-blas-canillejas",
    "type": "private",
    "address": "CALLE ALIAGA 5",
    "city": "MADRID",
    "postalCode": "28022",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4366557020283,
      "lng": -3.6113517282299217
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Puestos de lectura: 126 Zona wifi"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "136322",
    "name": "Sección de Educación de Adultos",
    "slug": "seccion-de-educacion-de-adultos",
    "type": "private",
    "address": "PASEO CHOPERA 41",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39415981141737,
      "lng": -3.6990213657093163
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6805",
    "name": "Servicio de Actividades Educativas",
    "slug": "servicio-de-actividades-educativas",
    "type": "private",
    "address": "PASEO CHOPERA 41",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39415981141737,
      "lng": -3.6990213657093163
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "180384",
    "name": "Servicio de Educación Infantil y otros programas",
    "slug": "servicio-de-educacion-infantil-y-otros-programas",
    "type": "private",
    "address": "PASEO CHOPERA 41",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39415981141737,
      "lng": -3.6990213657093163
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "139974",
    "name": "Subdirección General de Educación y Juventud",
    "slug": "subdireccion-general-de-educacion-y-juventud",
    "type": "private",
    "address": "PASEO CHOPERA 41",
    "city": "MADRID",
    "postalCode": "28045",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.39415981141737,
      "lng": -3.6990213657093163
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12810776",
    "name": "Templete de la Música. Parque del Oeste",
    "slug": "templete-de-la-musica-parque-del-oeste",
    "type": "private",
    "address": "CALLE PROFESOR MARTIN ALMAGRO BASCH 5",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42344341691355,
      "lng": -3.7159940054784806
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "No dispone de WiFi Aforo aproximado 600 personas"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "12780394",
    "name": "Templo de Debod (Moncloa-Aravaca)",
    "slug": "templo-de-debod-moncloa-aravaca",
    "type": "public",
    "address": "CALLE FERRAZ 1",
    "city": "MADRID",
    "postalCode": "28008",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.424301175943256,
      "lng": -3.7162688083251094
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo público ubicado en MADRID, Madrid.",
    "features": [
      "No dispone de WiFi Aforo aproximado 600 personas"
    ],
    "levels": [],
    "tuition": "Gratuito",
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "41729",
    "name": "Unidad de Formación e Inserción Laboral (UFIL) Cid Campeador",
    "slug": "unidad-de-formacion-e-insercion-laboral-ufil-cid-campeador",
    "type": "private",
    "address": "CALLE GENERAL GARCIA ESCAMEZ 12",
    "city": "MADRID",
    "postalCode": "28044",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38183942270506,
      "lng": -3.7706865301632817
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Programa profesional general: Operaciones Auxiliares de Montaje de Instalaciones Electrotécnicas y de Telecomunicaciones en Edificios - Operaciones de Fontanería y Calefacción-Climatización Doméstica - Operaciones Básicas de Cocina - Servicios Auxiliares de Peluquería"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6286",
    "name": "Unidad de Formación e Inserción Laboral (UFIL) Puerta Bonita",
    "slug": "unidad-de-formacion-e-insercion-laboral-ufil-puerta-bonita",
    "type": "private",
    "address": "CALLE PADRE AMIGO 5",
    "city": "MADRID",
    "postalCode": "28025",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.3795641278257,
      "lng": -3.7397251393302855
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Programa profesional general: Actividades Auxiliares en Viveros",
      "Jardines y Centros de Jardinería - Operaciones Básicas de Cocina - Operaciones Básicas de Restaurante y Bar - Trabajos de Carpintería y Mueble"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6285",
    "name": "Unidad de Formación e Inserción Laboral (UFIL) Sierra Palomeras",
    "slug": "unidad-de-formacion-e-insercion-laboral-ufil-sierra-palomeras",
    "type": "private",
    "address": "CALLE sierra vieja 52",
    "city": "MADRID",
    "postalCode": "28031",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.37715556660079,
      "lng": -3.624148178606042
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Programas profesionales: General: Operaciones auxiliares de montaje de Instalaciones electrotécnicas y de telecomunicaciones en edificios - Servicios Auxiliares de peluquería - Servicios Auxiliares de estética"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "41732",
    "name": "Unidad de Formación e Inserción Laboral (UFIL) Tierruca",
    "slug": "unidad-de-formacion-e-insercion-laboral-ufil-tierruca",
    "type": "private",
    "address": "CALLE TIERRUCA 13",
    "city": "MADRID",
    "postalCode": "28018",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38491786147646,
      "lng": -3.649337832679725
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Programa profesional general: Operaciones de fontanería y calefacción-climatización doméstica - Operaciones básicas de cocina - Servicios auxiliares de peluquería"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "41734",
    "name": "Unidad de Formación e Inserción Laboral (UFIL) Virgen de África",
    "slug": "unidad-de-formacion-e-insercion-laboral-ufil-virgen-de-africa",
    "type": "private",
    "address": "CALLE SALVADOR MARTINEZ",
    "city": "MADRID",
    "postalCode": "28041",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.36743208563837,
      "lng": -3.7001350023821944
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [
      "Programa profesional general: Operaciones Auxiliares de Fabricación Mecánica - Servicios Auxiliares de Peluquería"
    ],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "32179",
    "name": "Universidad Autónoma de Madrid. Escuela Politécnica Superior",
    "slug": "universidad-autonoma-de-madrid-escuela-politecnica-superior",
    "type": "private",
    "address": "CALLE FRANCISCO TOMAS Y VALIENTE 11",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.54694594124175,
      "lng": -3.6915841963667
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6374",
    "name": "Universidad Autónoma de Madrid. Escuela Universitaria de Fisioterapia de la ONCE",
    "slug": "universidad-autonoma-de-madrid-escuela-universitaria-de-fisioterapia-de-la-once",
    "type": "private",
    "address": "CALLE NURIA 42",
    "city": "MADRID",
    "postalCode": "28034",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.493908768303584,
      "lng": -3.708268358490922
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6352",
    "name": "Universidad Autónoma de Madrid. Facultad de Ciencias",
    "slug": "universidad-autonoma-de-madrid-facultad-de-ciencias",
    "type": "private",
    "address": "CALLE FRANCISCO TOMAS Y VALIENTE 7",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.54537941407227,
      "lng": -3.6951833197962536
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6353",
    "name": "Universidad Autónoma de Madrid. Facultad de Ciencias Económicas y Empresariales",
    "slug": "universidad-autonoma-de-madrid-facultad-de-ciencias-economicas-y-empresariales",
    "type": "private",
    "address": "CALLE FRANCISCO TOMAS Y VALIENTE 5",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.54487238078954,
      "lng": -3.6966067777305702
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6354",
    "name": "Universidad Autónoma de Madrid. Facultad de Derecho",
    "slug": "universidad-autonoma-de-madrid-facultad-de-derecho",
    "type": "private",
    "address": "CALLE KELSEN 1",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.541584341026066,
      "lng": -3.6911146791930514
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6355",
    "name": "Universidad Autónoma de Madrid. Facultad de Filosofía y Letras",
    "slug": "universidad-autonoma-de-madrid-facultad-de-filosofia-y-letras",
    "type": "private",
    "address": "CALLE FRANCISCO TOMAS Y VALIENTE 1",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.544325916954385,
      "lng": -3.698365543129191
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6360",
    "name": "Universidad Autónoma de Madrid. Facultad de Formación de Profesorado y Educación",
    "slug": "universidad-autonoma-de-madrid-facultad-de-formacion-de-profesorado-y-educacion",
    "type": "private",
    "address": "CALLE FRANCISCO TOMAS Y VALIENTE 3",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.54451020545557,
      "lng": -3.697774510862534
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6357",
    "name": "Universidad Autónoma de Madrid. Facultad de Medicina",
    "slug": "universidad-autonoma-de-madrid-facultad-de-medicina",
    "type": "private",
    "address": "CALLE ARZOBISPO MORCILLO 4",
    "city": "MADRID",
    "postalCode": "28029",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4808908842711,
      "lng": -3.6909106726884695
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6356",
    "name": "Universidad Autónoma de Madrid. Facultad de Psicología",
    "slug": "universidad-autonoma-de-madrid-facultad-de-psicologia",
    "type": "private",
    "address": "CALLE IVAN PAVLOV 6",
    "city": "MADRID",
    "postalCode": "28049",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.543827683418954,
      "lng": -3.6924908365072424
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5321256",
    "name": "Universidad Complutense de Madrid. Centro Complutense para la Enseñanza del Español",
    "slug": "universidad-complutense-de-madrid-centro-complutense-para-la-ensenanza-del-espanol",
    "type": "private",
    "address": "PLAZA MENENDEZ PELAYO ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4489838961669,
      "lng": -3.730503351852514
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "5412137",
    "name": "Universidad Complutense de Madrid. Centro Superior de Idiomas Modernos",
    "slug": "universidad-complutense-de-madrid-centro-superior-de-idiomas-modernos",
    "type": "private",
    "address": "CALLE PROFESOR ARANGUREN ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.447654037490636,
      "lng": -3.732389406635356
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6492",
    "name": "Universidad Complutense de Madrid. Escuela Profesional de Medicina Legal y Forense",
    "slug": "universidad-complutense-de-madrid-escuela-profesional-de-medicina-legal-y-forense",
    "type": "private",
    "address": "AVENIDA COMPLUTENSE ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.443658832937935,
      "lng": -3.7273650145663653
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6501",
    "name": "Universidad Complutense de Madrid. Escuela Profesional de Relaciones Laborales",
    "slug": "universidad-complutense-de-madrid-escuela-profesional-de-relaciones-laborales",
    "type": "private",
    "address": "CALLE SAN BERNARDO 49",
    "city": "MADRID",
    "postalCode": "28015",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.424857288787685,
      "lng": -3.7075073443351645
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6320",
    "name": "Universidad Complutense de Madrid. Facultad de Bellas Artes",
    "slug": "universidad-complutense-de-madrid-facultad-de-bellas-artes",
    "type": "private",
    "address": "CALLE PINTOR EL GRECO 2",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43924887699439,
      "lng": -3.7339441902245993
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6306",
    "name": "Universidad Complutense de Madrid. Facultad de Ciencias Biológicas",
    "slug": "universidad-complutense-de-madrid-facultad-de-ciencias-biologicas",
    "type": "private",
    "address": "CALLE JOSE ANTONIO NOVAIS 12",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44860689706268,
      "lng": -3.7257076188100315
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6385",
    "name": "Universidad Complutense de Madrid. Facultad de Ciencias de la Documentación",
    "slug": "universidad-complutense-de-madrid-facultad-de-ciencias-de-la-documentacion",
    "type": "private",
    "address": "CALLE SANTISIMA TRINIDAD 37",
    "city": "MADRID",
    "postalCode": "28010",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.438157283286685,
      "lng": -3.701196886214348
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6319",
    "name": "Universidad Complutense de Madrid. Facultad de Ciencias de la Información",
    "slug": "universidad-complutense-de-madrid-facultad-de-ciencias-de-la-informacion",
    "type": "private",
    "address": "AVENIDA COMPLUTENSE ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.443658832937935,
      "lng": -3.7273650145663653
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6307",
    "name": "Universidad Complutense de Madrid. Facultad de Ciencias Físicas",
    "slug": "universidad-complutense-de-madrid-facultad-de-ciencias-fisicas",
    "type": "private",
    "address": "PLAZA CIENCIAS 1",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.450777002534814,
      "lng": -3.7260915899587603
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6305",
    "name": "Universidad Complutense de Madrid. Facultad de Ciencias Geológicas",
    "slug": "universidad-complutense-de-madrid-facultad-de-ciencias-geologicas",
    "type": "private",
    "address": "CALLE JOSE ANTONIO NOVAIS 12",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44860689706268,
      "lng": -3.7257076188100315
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6313",
    "name": "Universidad Complutense de Madrid. Facultad de Ciencias Matemáticas",
    "slug": "universidad-complutense-de-madrid-facultad-de-ciencias-matematicas",
    "type": "private",
    "address": "PLAZA CIENCIAS 3",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44945850908754,
      "lng": -3.7259383636708434
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6308",
    "name": "Universidad Complutense de Madrid. Facultad de Ciencias Químicas",
    "slug": "universidad-complutense-de-madrid-facultad-de-ciencias-quimicas",
    "type": "private",
    "address": "PLAZA CIENCIAS 2",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45059008963721,
      "lng": -3.72544215024058
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "44824",
    "name": "Universidad Complutense de Madrid. Facultad de Comercio y Turismo",
    "slug": "universidad-complutense-de-madrid-facultad-de-comercio-y-turismo",
    "type": "private",
    "address": "AVENIDA FILIPINAS 3",
    "city": "MADRID",
    "postalCode": "28003",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.43972279736298,
      "lng": -3.7115000631943875
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6316",
    "name": "Universidad Complutense de Madrid. Facultad de Derecho",
    "slug": "universidad-complutense-de-madrid-facultad-de-derecho",
    "type": "private",
    "address": "AVENIDA COMPLUTENSE ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.443658832937935,
      "lng": -3.7273650145663653
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6340",
    "name": "Universidad Complutense de Madrid. Facultad de Educación - Centro de Formación del Profesorado",
    "slug": "universidad-complutense-de-madrid-facultad-de-educacion-centro-de-formacion-del-profesorado",
    "type": "private",
    "address": "CALLE RECTOR ROYO-VILLANOVA 1",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.45009595969183,
      "lng": -3.7173415690104594
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6366",
    "name": "Universidad Complutense de Madrid. Facultad de Enfermería, Fisioterapia y Podología",
    "slug": "universidad-complutense-de-madrid-facultad-de-enfermeria-fisioterapia-y-podologia",
    "type": "private",
    "address": "PLAZA RAMON Y CAJAL 3",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44388989111186,
      "lng": -3.725275188293443
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6365",
    "name": "Universidad Complutense de Madrid. Facultad de Estudios Estadísticos",
    "slug": "universidad-complutense-de-madrid-facultad-de-estudios-estadisticos",
    "type": "private",
    "address": "AVENIDA PUERTA DE HIERRO ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44737250847304,
      "lng": -3.7365294545551797
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6303",
    "name": "Universidad Complutense de Madrid. Facultad de Farmacia",
    "slug": "universidad-complutense-de-madrid-facultad-de-farmacia",
    "type": "private",
    "address": "PLAZA RAMON Y CAJAL ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44451127873064,
      "lng": -3.7262019812409104
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6312",
    "name": "Universidad Complutense de Madrid. Facultad de Filología",
    "slug": "universidad-complutense-de-madrid-facultad-de-filologia",
    "type": "private",
    "address": "PLAZA MENENDEZ PELAYO ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4489838961669,
      "lng": -3.730503351852514
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6310",
    "name": "Universidad Complutense de Madrid. Facultad de Filosofía",
    "slug": "universidad-complutense-de-madrid-facultad-de-filosofia",
    "type": "charter",
    "address": "PLAZA MENENDEZ PELAYO ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4489838961669,
      "lng": -3.730503351852514
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo concertado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6309",
    "name": "Universidad Complutense de Madrid. Facultad de Geografía e Historia",
    "slug": "universidad-complutense-de-madrid-facultad-de-geografia-e-historia",
    "type": "private",
    "address": "CALLE PROFESOR ARANGUREN ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.447654037490636,
      "lng": -3.732389406635356
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "54821",
    "name": "Universidad Complutense de Madrid. Facultad de Informática",
    "slug": "universidad-complutense-de-madrid-facultad-de-informatica",
    "type": "private",
    "address": "CALLE PROFESOR JOSE GARCIA SANTESMASES 9",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.453077067733574,
      "lng": -3.733826683733914
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6304",
    "name": "Universidad Complutense de Madrid. Facultad de Medicina",
    "slug": "universidad-complutense-de-madrid-facultad-de-medicina",
    "type": "private",
    "address": "PLAZA RAMON Y CAJAL ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44451127873064,
      "lng": -3.7262019812409104
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6315",
    "name": "Universidad Complutense de Madrid. Facultad de Odontología",
    "slug": "universidad-complutense-de-madrid-facultad-de-odontologia",
    "type": "private",
    "address": "PLAZA RAMON Y CAJAL ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44451127873064,
      "lng": -3.7262019812409104
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6364",
    "name": "Universidad Complutense de Madrid. Facultad de Óptica y Optometría",
    "slug": "universidad-complutense-de-madrid-facultad-de-optica-y-optometria",
    "type": "private",
    "address": "CALLE ARCOS DE JALON 118",
    "city": "MADRID",
    "postalCode": "28037",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.42597819309277,
      "lng": -3.6140011950615656
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6314",
    "name": "Universidad Complutense de Madrid. Facultad de Veterinaria",
    "slug": "universidad-complutense-de-madrid-facultad-de-veterinaria",
    "type": "private",
    "address": "AVENIDA PUERTA DE HIERRO ",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44737250847304,
      "lng": -3.7365294545551797
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "135620",
    "name": "Universidad Complutense. Hospital Clínico Veterinario",
    "slug": "universidad-complutense-hospital-clinico-veterinario",
    "type": "private",
    "address": "AVENIDA PUERTA DE HIERRO 1",
    "city": "MADRID",
    "postalCode": "28040",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.44737250847304,
      "lng": -3.7365294545551797
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "178101",
    "name": "Universidad Nacional de Educación a Distancia (UNED). Centro Asociado Madrid - Escuelas Pías",
    "slug": "universidad-nacional-de-educacion-a-distancia-uned-centro-asociado-madrid-escuelas-pias",
    "type": "private",
    "address": "CALLE TRIBULETE 14",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4077959539866,
      "lng": -3.7025893902054015
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "45202",
    "name": "Universidad Nacional de Educación a Distancia (UNED). Centro Asociado Madrid - Gregorio Marañón",
    "slug": "universidad-nacional-de-educacion-a-distancia-uned-centro-asociado-madrid-gregorio-maranon",
    "type": "private",
    "address": "CALLE ARGUMOSA 3",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.408447184626155,
      "lng": -3.7001742404603184
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "53998",
    "name": "Universidad Nacional de Educación a Distancia (UNED). Centro Asociado Madrid - Jacinto Verdaguer",
    "slug": "universidad-nacional-de-educacion-a-distancia-uned-centro-asociado-madrid-jacinto-verdaguer",
    "type": "private",
    "address": "CALLE FUENTE DE LIMA 22",
    "city": "MADRID",
    "postalCode": "28024",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.38278645640315,
      "lng": -3.7824021083869606
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "6177184",
    "name": "Universidad Nacional de Educación a Distancia (UNED). Centro Asociado Madrid - Las Tablas",
    "slug": "universidad-nacional-de-educacion-a-distancia-uned-centro-asociado-madrid-las-tablas",
    "type": "private",
    "address": "AVENIDA SANTO DOMINGO DE LA CALZADA 9",
    "city": "MADRID",
    "postalCode": "28050",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.504821065488,
      "lng": -3.6658596724706185
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  },
  {
    "id": "7599405",
    "name": "Universidad Nacional de Educación a Distancia (UNED). Centro Universitario de Idiomas a Distancia (CUID)",
    "slug": "universidad-nacional-de-educacion-a-distancia-uned-centro-universitario-de-idiomas-a-distancia-cuid",
    "type": "private",
    "address": "CALLE TRIBULETE 14 PLANTA segunda",
    "city": "MADRID",
    "postalCode": "28012",
    "region": "Madrid",
    "coordinates": {
      "lat": 40.4077959539866,
      "lng": -3.7025893902054015
    },
    "rating": 0,
    "reviewCount": 0,
    "description": "Centro educativo privado ubicado en MADRID, Madrid.",
    "features": [],
    "levels": [],
    "imageUrl": "/placeholder-school.jpg"
  }
];

// Helper functions
export function getSchoolBySlug(slug: string): School | undefined {
  return realSchools.find(school => school.slug === slug);
}

export function getSchoolsByCity(city: string): School[] {
  return realSchools.filter(school => 
    school.city.toLowerCase() === city.toLowerCase()
  );
}

export function getSchoolsByType(type: 'public' | 'private' | 'charter'): School[] {
  return realSchools.filter(school => school.type === type);
}

export function searchSchools(query: string): School[] {
  const lowerQuery = query.toLowerCase();
  return realSchools.filter(school =>
    school.name.toLowerCase().includes(lowerQuery) ||
    school.city.toLowerCase().includes(lowerQuery) ||
    school.address.toLowerCase().includes(lowerQuery)
  );
}
