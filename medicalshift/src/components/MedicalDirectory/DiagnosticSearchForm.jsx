import { useState } from "react";
import useLocalidades from "../../hooks/useLocalidades.js";
import useDiagnosticSpecialties from "../../hooks/useDiagnosticSpecialties.js";
import usePlans from "../../hooks/usePlans.js";

export default function DiagnosticSearchForm({ onSearch }) {
    const {
        provincias,
        localidades,
        selectedProvincia,
        selectedLocalidad,
        setSelectedProvincia,
        setSelectedLocalidad,
    } = useLocalidades();

    const { specialties } = useDiagnosticSpecialties();
    const { plans } = usePlans();

    // Estados para plan y especialidad
    const [selectedPlan, setSelectedPlan] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            plan: selectedPlan,
            specialty: selectedSpecialty,
            provincia: selectedProvincia,
            localidad: selectedLocalidad,
        });
    };

    return (
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-sky-700 mb-4 text">
                Diagnóstico y Tratamiento
            </h3>

            <form
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
                onSubmit={handleSubmit}
            >
                {/* Plan */}
                <select
                    className="border rounded-md p-2 text-gray-700"
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                >
                    <option value="">¿Cuál es tu credencial?</option>
                    {plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                            {plan.name}
                        </option>
                    ))}
                </select>

                {/* Especialidad */}
                <select
                    className="border rounded-md p-2 text-gray-700"
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                    <option value="">Seleccioná especialidad</option>
                    {specialties.map((spec) => (
                        <option key={spec} value={spec}>
                            {spec}
                        </option>
                    ))}
                </select>

                {/* Provincia */}
                <select
                    className="border rounded-md p-2 text-gray-700"
                    value={selectedProvincia}
                    onChange={(e) => setSelectedProvincia(e.target.value)}
                >
                    <option value="">Provincia</option>
                    {provincias.map((prov) => (
                        <option key={prov} value={prov}>
                            {prov}
                        </option>
                    ))}
                </select>

                {/* Localidad */}
                {selectedProvincia && (
                    <select
                        className="border rounded-md p-2 text-gray-700"
                        value={selectedLocalidad}
                        onChange={(e) => setSelectedLocalidad(e.target.value)}
                    >
                        <option value="">Localidad</option>
                        {localidades.map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                    </select>
                )}
                <div className="mt-6">
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
