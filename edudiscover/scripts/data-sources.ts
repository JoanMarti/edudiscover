/**
 * Data source configurations for educational centers scraping
 */

export interface DataSource {
    name: string;
    region: string;
    url: string;
    format: 'json' | 'csv' | 'xml';
    fieldMapping: FieldMapping;
}

export interface FieldMapping {
    id?: string;
    name: string;
    address?: string;
    street?: string;
    postalCode?: string;
    city?: string;
    phone?: string;
    email?: string;
    website?: string;
    latitude?: string;
    longitude?: string;
    type?: string;
    levels?: string;
    services?: string;
}

export const dataSources: Record<string, DataSource> = {
    madrid: {
        name: 'Madrid Open Data',
        region: 'Madrid',
        url: 'https://datos.madrid.es/egob/catalogo/300614-0-centros-educativos.json',
        format: 'json',
        fieldMapping: {
            id: 'id',
            name: 'title',
            address: 'address.street-address',
            postalCode: 'address.postal-code',
            city: 'address.locality',
            phone: 'organization.organization-phone',
            email: 'organization.organization-email',
            website: 'link',
            latitude: 'location.latitude',
            longitude: 'location.longitude',
            type: 'organization.organization-desc',
            services: 'organization.services'
        }
    }
};

/**
 * Helper function to get nested property value
 */
export function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}
