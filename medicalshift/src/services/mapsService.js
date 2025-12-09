import apiClient from './api';

/**
 * Servicio para obtener URLs de Google Maps
 */
export const mapsService = {
    /**
     * Obtener URL de embed para una búsqueda
     * @param {string} query - Búsqueda (ej: "Mar del Plata" o dirección)
     * @returns {Promise<{url: string, error?: string}>} - URL del mapa embed o error
     */
    async getEmbedUrl(query) {
        try {
            console.log('🔍 Obteniendo URL de mapa para:', query);
            const response = await apiClient.get('/maps/embed', {
                params: { q: query }
            });
            console.log('✅ URL de mapa obtenida:', response.url ? 'OK' : 'NULL');
            return { url: response.url, error: null };
        } catch (error) {
            console.error('❌ Error obteniendo URL de mapa:', error);
            const errorMessage = error.message || 'Error desconocido';
            return { url: null, error: errorMessage };
        }
    },

    /**
     * Obtener URL de embed para una dirección específica
     * @param {string} address - Dirección completa
     * @returns {Promise<{url: string, error?: string}>} - URL del mapa embed o error
     */
    async getPlaceEmbedUrl(address) {
        try {
            console.log('🔍 Obteniendo URL de mapa para dirección:', address);
            const response = await apiClient.get('/maps/embed/place', {
                params: { address }
            });
            console.log('✅ URL de mapa obtenida:', response.url ? 'OK' : 'NULL');
            return { url: response.url, error: null };
        } catch (error) {
            console.error('❌ Error obteniendo URL de mapa para lugar:', error);
            const errorMessage = error.message || 'Error desconocido';
            return { url: null, error: errorMessage };
        }
    },
};

export default mapsService;

