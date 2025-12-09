import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import userService from "../services/userService";

export default function Reintegros() {
    const { isAuthenticated, loading, user } = useAuth();
    const navigate = useNavigate();
    const [currentCBU, setCurrentCBU] = useState("");
    const [newCBU, setNewCBU] = useState("");
    const [showEditForm, setShowEditForm] = useState(false);
    const [loadingCBU, setLoadingCBU] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate("/Login");
        }
    }, [loading, isAuthenticated, navigate]);

    useEffect(() => {
        if (isAuthenticated && user) {
            loadUserCBU();
        }
    }, [isAuthenticated, user]);

    const loadUserCBU = async () => {
        try {
            setLoadingCBU(true);
            setError("");
            const userData = await userService.getCurrentUser();
            setCurrentCBU(userData.cbu || "");
        } catch (error) {
            console.error("Error cargando CBU:", error);
            setError("Error al cargar el CBU actual");
        } finally {
            setLoadingCBU(false);
        }
    };

    const handleUpdateCBU = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!newCBU || newCBU.length < 22) {
            setError("Ingresá un CBU válido (22 dígitos)");
            return;
        }

        try {
            setSaving(true);
            await userService.updateCurrentUser({ cbu: newCBU });
            setSuccess("CBU actualizado correctamente");
            setCurrentCBU(newCBU);
            setNewCBU("");
            setShowEditForm(false);
            // Actualizar el usuario en el contexto
            const updatedUser = await userService.getCurrentUser();
            // El AuthContext debería actualizarse automáticamente
        } catch (error) {
            console.error("Error actualizando CBU:", error);
            setError(error.message || "Error al actualizar el CBU. Por favor, intenta nuevamente.");
        } finally {
            setSaving(false);
        }
    };

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <DashboardHeader />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <button
                        onClick={() => navigate("/dashboard/perfil")}
                        className="text-sky-600 hover:text-sky-700 font-medium flex items-center gap-2 mb-4"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Volver a Mi Perfil
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">Cuenta de Reintegro</h1>
                    <p className="text-gray-600 mt-2">Gestiona tu CBU para recibir reintegros</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                            {success}
                        </div>
                    )}

                    {/* CBU Actual */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            CBU Actual
                        </label>
                        {loadingCBU ? (
                            <div className="animate-pulse bg-gray-200 h-10 rounded"></div>
                        ) : (
                            <input
                                type="text"
                                value={currentCBU || "No configurado"}
                                disabled
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                            />
                        )}
                    </div>

                    {/* Botón para cambiar cuenta */}
                    {!showEditForm && (
                        <button
                            onClick={() => setShowEditForm(true)}
                            className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 font-medium"
                        >
                            Cambiar Cuenta
                        </button>
                    )}

                    {/* Formulario de edición */}
                    {showEditForm && (
                        <form onSubmit={handleUpdateCBU} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nuevo CBU <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={newCBU}
                                    onChange={(e) => setNewCBU(e.target.value)}
                                    placeholder="Ingresá tu CBU (22 dígitos)"
                                    maxLength={22}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    El CBU debe tener 22 dígitos
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowEditForm(false);
                                        setNewCBU("");
                                        setError("");
                                        setSuccess("");
                                    }}
                                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                                    disabled={saving}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="flex-1 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {saving ? "Guardando..." : "Enviar Solicitud"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
