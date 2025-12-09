import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function DashboardHeader() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        // Limpiar cualquier estado de navegación y redirigir al login
        navigate("/Login", { replace: true });
    };

    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Medicalshift" className="h-10 w-10" />
                        <div>
                            <h1 className="text-xl font-bold text-sky-500">Medicalshift</h1>
                            <p className="text-xs text-gray-500">COBERTURA MÉDICA</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="text-gray-700 hover:text-sky-500 font-medium"
                        >
                            Inicio
                        </button>
                        <button
                            onClick={() => navigate("/dashboard/gestiones")}
                            className="text-gray-700 hover:text-sky-500 font-medium"
                        >
                            Gestiones
                        </button>
                        <button
                            onClick={() => navigate("/dashboard/cartilla")}
                            className="text-gray-700 hover:text-sky-500 font-medium"
                        >
                            Cartilla
                        </button>
                        <button
                            onClick={() => navigate("/dashboard/perfil")}
                            className="text-gray-700 hover:text-sky-500 font-medium"
                        >
                            Perfil
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 font-medium"
                        >
                            Cerrar Sesión
                        </button>
                    </nav>

                    {/* Menú móvil */}
                    <div className="md:hidden">
                        <button className="text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

