import { useState } from "react";
import useUrgencySpecialties from "../../hooks/useUrgencySpecialties.js";

export default function UrgencySearchForm({ onSearch, defaultPlan = "", defaultLocalidad = "" }) {
    const { specialties } = useUrgencySpecialties();
    const [selectedSpecialty, setSelectedSpecialty] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            plan: defaultPlan,
            specialty: selectedSpecialty,
            localidad: defaultLocalidad,
        });
    };

    return (
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-sky-700 mb-4">
                Servicio de Guardia
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

                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-md transition"
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </section>
    );
}
