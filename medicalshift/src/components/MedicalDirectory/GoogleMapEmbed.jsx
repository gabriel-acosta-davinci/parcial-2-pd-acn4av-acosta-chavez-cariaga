import { useState, useEffect } from "react";
import mapsService from "../../services/mapsService";

/**
 * Componente para mostrar un mapa de Google Maps embebido
 * @param {string} query - Búsqueda o localidad para el mapa
 * @param {string} address - Dirección específica (opcional, tiene prioridad sobre query)
 * @param {string} className - Clases CSS adicionales
 * @param {number} height - Altura del mapa en píxeles
 */
export default function GoogleMapEmbed({ query, address, className = "", height = 400 }) {
    const [mapUrl, setMapUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMap = async () => {
            try {
                setLoading(true);
                setError(null);

                let result;
                if (address) {
                    // Si hay dirección específica, intentar usarla primero
                    console.log('📍 Intentando cargar mapa para dirección específica:', address);
                    result = await mapsService.getPlaceEmbedUrl(address);
                    
                    // Si falla la dirección específica, intentar con la localidad general
                    if (!result.url && query) {
                        console.log('⚠️ Dirección específica no encontrada, usando localidad general:', query);
                        result = await mapsService.getEmbedUrl(query);
                    }
                } else if (query) {
                    // Si no hay dirección específica, usar la búsqueda
                    console.log('📍 Cargando mapa para:', query);
                    result = await mapsService.getEmbedUrl(query);
                }

                if (result && result.url) {
                    setMapUrl(result.url);
                    console.log('✅ Mapa cargado exitosamente');
                } else {
                    const errorMsg = result?.error || "No se pudo cargar el mapa";
                    console.error('❌ Error:', errorMsg);
                    setError(errorMsg);
                }
            } catch (err) {
                console.error("❌ Error cargando mapa:", err);
                setError(err.message || "Error al cargar el mapa");
            } finally {
                setLoading(false);
            }
        };

        if (query || address) {
            loadMap();
        }
    }, [query, address]);

    if (loading) {
        return (
            <div 
                className={`rounded-lg overflow-hidden shadow bg-gray-100 flex items-center justify-center ${className}`}
                style={{ height: `${height}px` }}
            >
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500 mx-auto"></div>
                    <p className="mt-2 text-sm text-gray-600">Cargando mapa...</p>
                </div>
            </div>
        );
    }

    if (error || !mapUrl) {
        return (
            <div 
                className={`rounded-lg overflow-hidden shadow bg-gray-100 flex flex-col items-center justify-center p-4 ${className}`}
                style={{ height: `${height}px` }}
            >
                <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-gray-600 text-center">
                    {error || "No se pudo cargar el mapa"}
                </p>
                {error && error.includes("API Key") && (
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        Verifica que GOOGLE_MAPS_API_KEY esté configurada en el backend
                    </p>
                )}
            </div>
        );
    }

    return (
        <div 
            className={`rounded-lg overflow-hidden shadow ${className}`}
            style={{ height: `${height}px` }}
        >
            <iframe
                title="Mapa de Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapUrl}
            ></iframe>
        </div>
    );
}

