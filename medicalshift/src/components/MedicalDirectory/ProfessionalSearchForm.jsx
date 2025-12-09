import { useState } from "react";
import useMedicSpecialties from "../../hooks/useMedicSpecialties.js";

export default function ProfessionalSearchForm({ onSearch, defaultPlan = "", defaultLocalidad = "" }) {
    const { specialties } = useMedicSpecialties();
    const [selectedSpecialty, setSelectedSpecialty] = useState("");
    const [searchName, setSearchName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            plan: defaultPlan,
            specialty: selectedSpecialty,
            localidad: defaultLocalidad,
            nombre: searchName.trim(), // puede estar vacío
        });
    };

    const canSearch = selectedSpecialty;

    return (
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-sky-700 mb-4">
                Búsqueda por Profesional
            </h3>

            <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                onSubmit={handleSubmit}
            >
                {/* Especialidad */}
                <select
                    className="border rounded-md p-2 text-gray-700"
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    required
                >
                    <option value="">Seleccioná especialidad</option>
                    {specialties.map((spec) => (
                        <option key={spec} value={spec}>
                            {spec}
                        </option>
                    ))}
                </select>

                {/* Nombre o institución */}
                <input
                    type="text"
                    placeholder="Nombre del profesional o institución (opcional)"
                    className="border rounded-md p-2 text-gray-700"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />

                {/* Botón */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        disabled={!canSearch}
                        className={`px-6 py-2 rounded-md transition text-white ${
                            canSearch
                                ? "bg-sky-500 hover:bg-sky-600"
                                : "bg-gray-300 cursor-not-allowed"
                        }`}
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </section>
    );
}
