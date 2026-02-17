# Sistema de Scraping de Datos Educativos

Este directorio contiene el sistema de scraping para obtener datos reales de colegios desde fuentes oficiales del gobierno español.

## 📁 Estructura

```
scripts/
├── data-sources.ts    # Configuración de fuentes de datos
├── normalize.ts       # Funciones de normalización
├── scraper.ts         # Script principal de scraping
├── verify-data.ts     # Verificación de calidad de datos
└── integrate.ts       # Integración con la aplicación
```

## 🚀 Uso

### 1. Descargar datos

```bash
# Descargar datos de todas las fuentes
npm run scrape

# Descargar solo de Madrid
npm run scrape:madrid
```

Los datos se guardan en `lib/data/scraped/`

### 2. Verificar calidad

```bash
npm run verify:data
```

Muestra estadísticas sobre los datos descargados:
- Total de escuelas
- Porcentaje con coordenadas
- Porcentaje con datos de contacto
- Muestra de datos

### 3. Integrar con la aplicación

```bash
npm run integrate
```

Genera `lib/data/schools-real.ts` con los datos en formato TypeScript listo para usar en la aplicación.

## 📊 Fuentes de Datos

### Madrid Open Data
- **URL**: https://datos.madrid.es/egob/catalogo/300614-0-centros-educativos.json
- **Formato**: JSON
- **Cobertura**: ~1,700 centros educativos
- **Datos**: Nombre, dirección, coordenadas, tipo, servicios

## 🔄 Proceso de Scraping

1. **Descarga**: El scraper obtiene datos de las APIs oficiales
2. **Normalización**: Los datos se transforman a un formato unificado
3. **Validación**: Se verifica la calidad de los datos
4. **Integración**: Se genera código TypeScript para la app

## 📝 Modelo de Datos

```typescript
interface NormalizedSchool {
  id: string;
  name: string;
  slug: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    region: string;
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  type: 'public' | 'private' | 'charter';
  levels: string[];
  services: string[];
  metadata: {
    source: string;
    lastUpdated: string;
  };
}
```

## ➕ Añadir Nuevas Fuentes

Para añadir una nueva fuente de datos:

1. Edita `scripts/data-sources.ts`
2. Añade la configuración de la nueva fuente:

```typescript
export const dataSources: Record<string, DataSource> = {
  // ... fuentes existentes
  nuevaFuente: {
    name: 'Nombre de la Fuente',
    region: 'Región',
    url: 'https://api.ejemplo.com/datos.json',
    format: 'json',
    fieldMapping: {
      name: 'nombre',
      address: 'direccion',
      // ... mapeo de campos
    }
  }
};
```

3. Ejecuta el scraper:

```bash
npm run scrape
```

## ⚖️ Consideraciones Legales

- Todos los datos provienen de portales oficiales de datos abiertos
- Se respetan los términos de uso de cada portal
- Se incluye atribución a las fuentes de datos
- Se implementa rate limiting para no sobrecargar servidores

## 🔄 Actualización de Datos

Los datos oficiales se actualizan periódicamente (generalmente anual). Para actualizar:

```bash
npm run scrape
npm run integrate
```

Los datos antiguos se sobrescriben automáticamente.

## 📈 Estadísticas Actuales

- **Total de escuelas**: 1,701
- **Cobertura geográfica**: Madrid
- **Con coordenadas**: 99.6%
- **Última actualización**: ${new Date().toISOString().split('T')[0]}
