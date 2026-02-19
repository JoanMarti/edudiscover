# EduDiscover 🏫

> Platform for discovering, comparing, and contacting schools in Spain.

EduDiscover helps families find the perfect school for their children. It features over 12,500 educational centers, advanced filters, a comparison tool, parent guides, and a complete directory of educational scholarships and grants.

---

## ✨ Key Features

| Area | Description |
|---|---|
| 🔍 **Advanced Search** | Filter by city, school type, methodology, educational stage, price, and more |
| 🌐 **Internationalization** | Fully localized in **English, Spanish, Catalan, Galician, and Basque** |
| 🏫 **School Profiles** | Complete information: facilities, methodology, prices, reviews, and rankings |
| ⚖️ **Comparison Tool** | Compare up to 3 schools side-by-side with value highlights |
| 🧭 **Discover** | Explore by type, stage, city, methodology, and curated collections |
| 📚 **Parent Guides** | Articles and resources to make the best educational decisions |
| 💶 **Scholarships & Grants** | Complete guide: MEC scholarships, 17 autonomous communities, deadlines, and FAQ |
| 👤 **User Profile** | Manage children, preferences, budget, and active scholarships |
| 🍪 **GDPR** | Compliant cookie banner and preference modal |
| 🏢 **For Schools** | B2B landing page for school directors with visibility plans |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Inter (Google Fonts)
- **State:** React Context + localStorage
- **HTTP:** Axios (scraper)

---

## 📁 Project Structure

```
edudiscover/
├── app/
│   ├── [locale]/            # Internationalized routes
│   │   ├── (auth)/          # Login and registration
│   │   ├── (dashboard)/     # User profile
│   │   ├── (marketing)/     # Public pages (Search, Compare, Discover)
│   │   ├── [slug]/          # Dynamic school profile
│   │   └── ...
│   ├── api/                 # API routes
│   └── not-found.tsx        # Custom 404 page
├── components/
│   ├── auth/                # Authentication components
│   ├── discover/            # Discover sections
│   ├── home/                # Homepage sections
│   ├── layout/              # Header, Footer, LanguageSelector
│   ├── school/              # Actions (save, compare)
│   └── search/              # Search filters
├── lib/
│   ├── contexts/            # AuthContext, CountryContext
│   ├── data/                # Mock data (schools, cities, scholarships)
│   └── utils.ts             # Utilities
├── messages/                # Translation files (en.json, es.json, etc.)
├── public/                  # Static assets
└── scripts/                 # Data scrapers and integration scripts
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/JoanMarti/edudiscover.git
cd edudiscover

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

```bash
npm run dev             # Development server with hot-reload
npm run build           # Production build
npm run start           # Start production server
npm run lint            # Linting with ESLint
npm run scrape          # Run school data scraper
npm run verify:data     # Verify data integrity
```

---

## 📄 Available Pages

| Route | Description |
|---|---|
| `/` | Homepage with search, types, and featured schools |
| `/buscar` | Advanced search with filters |
| `/[slug]` | School profile (e.g., `/colegio-montessori-barcelona`) |
| `/comparar` | School comparison tool |
| `/descubrir` | Exploration by type, stage, city, and methodology |
| `/guias` | Parent guides hub |
| `/guias/ayudas` | Complete guide to educational scholarships |
| `/iniciar-sesion` | User login |
| `/registrarse` | User registration |
| `/perfil` | Profile with 4 tabs (personal, family, preferences, financial) |
| `/para-colegios` | B2B landing page |

---

## 🗺️ School Data

The project includes mock data in `lib/data/schools.ts` and a scraping system in `scripts/` to obtain real school data from public sources.

To run the scraper:

```bash
npx tsx scripts/scraper.ts
```

---

## 🔒 Authentication

Authentication is simulated using `localStorage` (no real backend). Demo credentials are:

- **Email:** `test@edudiscover.es`
- **Password:** `password123`

---

## 🍪 GDPR

The cookie system includes:
- **Essential** — always active
- **Analytics** — Google Analytics (simulated)
- **Marketing** — Personalized ads (simulated)
- **Social** — Social widgets (simulated)

Preferences are saved in `localStorage` under the key `edudiscover_cookie_consent`.

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'feat: add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

---

## 📝 License

MIT © [Joan Martí](https://github.com/JoanMarti)
