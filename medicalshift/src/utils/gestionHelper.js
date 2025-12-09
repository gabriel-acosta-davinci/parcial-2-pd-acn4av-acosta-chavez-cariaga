import gestionService from '../services/gestionService';
import storageService from '../services/storageService';
import authService from '../services/authService';

/**
 * Helper para crear gestiones y subir archivos
 * @param {string} nombreGestion - Nombre de la gestión
 * @param {string|null} fechaAplicacion - Fecha en formato dd/MM/yyyy o null
 * @param {File|null} archivo - Archivo a subir o null
 * @returns {Promise<string>} - ID de la gestión creada
 */
export async function crearGestionYSubirArchivo(nombreGestion, fechaAplicacion, archivo) {
    try {
        // Obtener userId del token
        const token = authService.getToken();
        if (!token) {
            throw new Error('Sesión expirada. Por favor, inicia sesión nuevamente.');
        }

        // Obtener userId del usuario actual
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const userId = user.documentNumber || user.uid;
        
        if (!userId) {
            throw new Error('No se pudo obtener el ID del usuario');
        }

        // Formatear fecha para el backend (en milisegundos)
        let fechaTimestamp = null;
        if (fechaAplicacion) {
            // Parsear fecha en formato dd/MM/yyyy
            const [day, month, year] = fechaAplicacion.split('/');
            const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            fechaTimestamp = date.getTime();
        } else {
            fechaTimestamp = Date.now();
        }

        // Crear la gestión
        const gestionResponse = await gestionService.create({
            estado: 'pendiente',
            nombre: nombreGestion,
            fecha: fechaTimestamp,
            userId: userId,
        });

        if (!gestionResponse.gestion || !gestionResponse.gestion.id) {
            throw new Error('No se pudo crear la gestión');
        }

        const gestionId = gestionResponse.gestion.id;

        // Si hay archivo, subirlo
        if (archivo) {
            try {
                console.log('Subiendo archivo para gestión:', {
                    gestionId,
                    fileName: archivo.name,
                    fileSize: archivo.size,
                    fileType: archivo.type
                });
                const uploadResult = await storageService.uploadFileForGestion(gestionId, archivo);
                console.log('Archivo subido exitosamente:', uploadResult);
            } catch (error) {
                // La gestión se creó pero falló la subida del archivo
                console.error('Error subiendo archivo:', error);
                // Lanzar el error para que el usuario lo vea
                throw new Error(`La gestión se creó pero falló la subida del archivo: ${error.message}`);
            }
        }

        return gestionId;
    } catch (error) {
        console.error('Error creando gestión:', error);
        throw error;
    }
}

