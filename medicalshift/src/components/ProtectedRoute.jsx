import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import authService from "../services/authService";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Verificar inmediatamente si hay token
        const token = authService.getToken();
        
        if (!token) {
            // No hay token, redirigir inmediatamente
            navigate("/Login", { 
                state: { from: location.pathname },
                replace: true 
            });
            return;
        }

        // Si no está cargando y no está autenticado, redirigir
        if (!loading && !isAuthenticated) {
            navigate("/Login", { 
                state: { from: location.pathname },
                replace: true 
            });
        }
    }, [loading, isAuthenticated, navigate, location.pathname]);

    // Verificar token en cada render para mayor seguridad
    useEffect(() => {
        const checkToken = () => {
            const token = authService.getToken();
            if (!token && !loading) {
                navigate("/Login", { 
                    state: { from: location.pathname },
                    replace: true 
                });
            }
        };

        // Verificar inmediatamente
        checkToken();

        // Verificar periódicamente (cada 30 segundos)
        const interval = setInterval(checkToken, 30000);

        return () => clearInterval(interval);
    }, [navigate, location.pathname, loading]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Cargando...</p>
                </div>
            </div>
        );
    }

    // Si no hay token o no está autenticado, no renderizar nada (ya se redirigió)
    const token = authService.getToken();
    if (!token || !isAuthenticated) {
        return null;
    }

    return children;
}

