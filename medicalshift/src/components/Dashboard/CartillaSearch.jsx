import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartillaSearch({ onViewAll }) {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/dashboard/cartilla?search=${encodeURIComponent(searchTerm)}`);
        } else {
            navigate("/dashboard/cartilla");
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Cartilla Médica</h3>
                <button
                    onClick={onViewAll}
                    className="text-sky-500 hover:text-sky-600 font-medium text-sm"
                >
                    Ver cartilla completa →
                </button>
            </div>

            <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar profesional, especialidad..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                    <svg
                        className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <button
                    type="submit"
                    className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 font-medium transition-colors"
                >
                    Buscar
                </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Búsquedas rápidas:</p>
                <div className="flex flex-wrap gap-2">
                    {["Cardiología", "Pediatría", "Clínica Médica", "Traumatología"].map(
                        (especialidad) => (
                            <button
                                key={especialidad}
                                onClick={() => {
                                    setSearchTerm(especialidad);
                                    navigate(`/MedicalDirectory?search=${encodeURIComponent(especialidad)}`);
                                }}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                            >
                                {especialidad}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

