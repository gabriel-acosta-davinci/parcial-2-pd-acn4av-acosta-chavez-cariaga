import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import CartillaFilterGrid from "../components/Dashboard/CartillaFilterGrid";
import CartillaSearchResults from "../components/Dashboard/CartillaSearchResults";

export default function Cartilla() {
    const { user, isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [searchParams, setSearchParams] = useState(null);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate("/Login");
        }
    }, [loading, isAuthenticated, navigate]);

    // Resetear búsqueda al cambiar de filtro
    useEffect(() => {
        setSearchParams(null);
    }, [selectedFilter]);

    if (loading || !isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Cargando...</p>
                </div>
            </div>
        );
    }

    // Obtener plan y localidad del usuario
    const userPlan = user?.plan || "";
    // La localidad puede estar en address.city o directamente en localidad
    const userLocalidad = user?.address?.city || 
                         user?.localidad || 
                         user?.["Domicilio de Residencia"]?.["Localidad"] || 
                         "";

    const handleFilterSelect = (filterLabel) => {
        setSelectedFilter(filterLabel);
    };

    const handleSearch = (params) => {
        setSearchParams({
            ...params,
            plan: userPlan,
            localidad: userLocalidad,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <DashboardHeader />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Cartilla Médica</h1>
                </div>

                {!selectedFilter ? (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Servicios disponibles</h2>
                        <CartillaFilterGrid onFilterSelect={handleFilterSelect} />
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={() => {
                                setSelectedFilter(null);
                                setSearchParams(null);
                            }}
                            className="mb-6 text-sky-500 hover:text-sky-600 font-medium flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Volver a filtros
                        </button>
                        <CartillaSearchResults
                            filterType={selectedFilter}
                            userPlan={userPlan}
                            userLocalidad={userLocalidad}
                            onSearch={handleSearch}
                            searchParams={searchParams}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

