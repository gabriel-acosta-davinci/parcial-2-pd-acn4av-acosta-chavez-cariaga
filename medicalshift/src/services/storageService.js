import apiClient from './api';

/**
 * Servicio de storage para subir archivos
 */
export const storageService = {
    /**
     * Subir archivo para una gestión
     * @param {string} gestionId - ID de la gestión
     * @param {File} file - Archivo a subir
     */
    async uploadFileForGestion(gestionId, file) {
        const formData = new FormData();
        formData.append('file', file);

        // No establecer Content-Type manualmente - el navegador lo hace automáticamente con el boundary
        return await apiClient.post(`/storage/gestion/${gestionId}`, formData);
    },
};

export default storageService;

