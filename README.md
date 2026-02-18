# EduDiscover 🏫

> Plataforma para descubrir, comparar y contactar con colegios en España.

EduDiscover ayuda a las familias a encontrar el colegio perfecto para sus hijos. Con más de 12.500 centros educativos, filtros avanzados, comparador, guías para padres y un completo directorio de ayudas y becas educativas.

---

## ✨ Funcionalidades principales

| Área | Descripción |
|---|---|
| 🔍 **Búsqueda avanzada** | Filtra por ciudad, tipo de centro, metodología, etapa educativa, precio y más |
| 🏫 **Fichas de colegio** | Información completa: instalaciones, metodología, precios, opiniones y ranking |
| ⚖️ **Comparador** | Compara hasta 3 colegios lado a lado con highlights de mejor valor |
| 🧭 **Descubrir** | Explora por tipo, etapa, ciudad, metodología y colecciones curadas |
| 📚 **Guías para padres** | Artículos y recursos para tomar la mejor decisión educativa |
| 💶 **Ayudas y Becas** | Guía completa: becas MEC, 17 CCAA, calendario de solicitudes y FAQ |
| 👤 **Perfil de usuario** | Gestión de hijos, preferencias, presupuesto y becas activas |
| 🍪 **GDPR** | Banner de cookies y modal de preferencias compliant |
| 🏢 **Para colegios** | Landing B2B para directores con planes de visibilidad |

---

## 🛠️ Stack tecnológico

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Fuentes:** Inter (Google Fonts)
- **Estado:** React Context + localStorage
- **HTTP:** Axios (scraper)

---

## 📁 Estructura del proyecto

```
edudiscover/
├── app/
│   ├── (auth)/              # Login y registro
│   ├── (dashboard)/         # Perfil de usuario
│   ├── (marketing)/         # Páginas públicas
│   │   ├── buscar/          # Buscador con filtros
│   │   ├── comparar/        # Comparador de colegios
│   │   ├── descubrir/       # Exploración por categorías
│   │   └── guias/           # Hub de guías + /ayudas
│   ├── [slug]/              # Ficha dinámica de colegio
│   ├── para-colegios/       # Landing B2B
│   ├── not-found.tsx        # Página 404 personalizada
│   └── layout.tsx           # Layout raíz con GDPR
├── components/
│   ├── auth/                # Componentes de autenticación
│   ├── discover/            # Secciones de Descubrir
│   ├── gdpr/                # Banner y modal de cookies
│   ├── home/                # Secciones de la homepage
│   ├── layout/              # Header, Footer, LanguageSelector
│   ├── profile/             # Tabs del perfil de usuario
│   ├── school/              # Acciones (guardar, comparar)
│   ├── schools/             # Cards, rankings, timeline
│   └── search/              # Filtros de búsqueda
├── lib/
│   ├── constants/           # Categorías de cookies
│   ├── contexts/            # AuthContext
│   ├── data/                # Datos mock (colegios, ciudades, ayudas, rankings)
│   ├── hooks/               # useCookieConsent, useLocalStorage
│   ├── services/            # rankingService
│   ├── types/               # Tipos TypeScript
│   └── utils.ts             # Utilidades (formatRating, formatPrice)
├── public/
│   └── flags/               # Banderas autonómicas
└── scripts/                 # Scraper de datos de colegios
```

---

## 🚀 Cómo ejecutar en local

### Requisitos previos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JoanMarti/edudiscover.git
cd edudiscover/edudiscover

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con hot-reload
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter ESLint
```

---

## 📄 Páginas disponibles

| Ruta | Descripción |
|---|---|
| `/` | Homepage con búsqueda, tipos y colegios destacados |
| `/buscar` | Buscador avanzado con filtros |
| `/[slug]` | Ficha de colegio (ej: `/colegio-montessori-barcelona`) |
| `/comparar` | Comparador de hasta 3 colegios |
| `/descubrir` | Exploración por tipo, etapa, ciudad y metodología |
| `/guias` | Hub de guías para padres |
| `/guias/ayudas` | Guía completa de ayudas y becas educativas |
| `/iniciar-sesion` | Login de usuario |
| `/registrarse` | Registro de usuario |
| `/perfil` | Perfil con 4 tabs (personal, familia, preferencias, financiero) |
| `/para-colegios` | Landing B2B para directores de colegios |
| `/contacto` | Formulario de contacto |
| `/sobre-nosotros` | Página corporativa |
| `/privacidad` | Política de privacidad |
| `/terminos` | Términos y condiciones |

---

## 🗺️ Datos de colegios

El proyecto incluye datos mock en `lib/data/schools.ts` y un sistema de scraping en `scripts/` para obtener datos reales de colegios de fuentes públicas.

Para ejecutar el scraper:

```bash
npx ts-node scripts/scraper.ts
```

---

## 🔒 Autenticación

La autenticación es simulada con `localStorage` (sin backend real). Las credenciales de demo son:

- **Email:** `test@edudiscover.es`
- **Contraseña:** `password123`

---

## 🍪 GDPR

El sistema de cookies incluye:
- **Esenciales** — siempre activas
- **Analíticas** — Google Analytics (simulado)
- **Publicidad** — anuncios personalizados (simulado)
- **Redes sociales** — widgets sociales (simulado)

Las preferencias se guardan en `localStorage` bajo la clave `edudiscover_cookie_consent`.

---

## 🤝 Contribuir

1. Haz fork del repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Haz commit de tus cambios: `git commit -m 'feat: añadir nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📝 Licencia

MIT © [Joan Martí](https://github.com/JoanMarti)
