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
    },
    barcelona: {
        name: 'Barcelona Open Data',
        region: 'Barcelona',
        url: 'https://opendata-ajuntament.barcelona.cat/data/dataset/f36b60f2-9541-4d08-b0f9-b0a9313fab3d/resource/d0471a29-821f-42aa-b631-19a76052bdff/download',
        format: 'json',
        fieldMapping: {
            id: 'register_id',
            name: 'name',
            street: 'addresses_road_name',
            postalCode: 'addresses_zip_code',
            city: 'addresses_town',
            phone: 'phone_number',
            email: 'email_address',
            latitude: 'geo_epgs_4326_y',
            longitude: 'geo_epgs_4326_x',
            type: 'equipment_type_name'
        }
    },
    andalucia: {
        name: 'Junta de Andalucía',
        region: 'Andalucía',
        url: 'https://www.juntadeandalucia.es/datosabiertos/portal/dataset/e039df22-4b82-4d0d-9884-0ab5952e24e4/resource/b5924e81-0b53-4418-9d93-b1f39ba1ef65/download/da_centros.csv',
        format: 'csv',
        fieldMapping: {
            id: 'codigo',
            name: 'D_DENOMINA',
            street: 'D_DOMICILIO',
            postalCode: 'C_POSTAL',
            city: 'D_LOCALIDAD',
            phone: 'N_TELEFONO',
            email: 'Correo_e',
            latitude: 'N_LATITUD',
            longitude: 'N_LONGITUD',
            type: 'D_TIPO'
        }
    }
};

/**
 * Helper function to get nested property value
 */
export function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}
