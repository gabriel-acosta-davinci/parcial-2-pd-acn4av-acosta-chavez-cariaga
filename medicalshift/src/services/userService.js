import apiClient from './api';

/**
 * Servicio de usuarios
 */
export const userService = {
    /**
     * Obtener usuario actual
     */
    async getCurrentUser() {
        return await apiClient.get('/auth/me');
    },

    /**
     * Actualizar usuario actual
     * @param {Object} userData - Datos del usuario a actualizar
     */
    async updateCurrentUser(userData) {
        return await apiClient.put('/users/me', userData);
    },
};

export default userService;

