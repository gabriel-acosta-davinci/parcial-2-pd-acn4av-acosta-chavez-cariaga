import { useState } from "react";
import useLocalidades from "../hooks/useLocalidades";
import usePlans from "../hooks/usePlans";

export default function PharmacySearchForm({ onSearch }) {
    const {
        provincias,
        localidades,
        selectedProvincia,
        selectedLocalidad,
        setSelectedProvincia,
        setSelectedLocalidad,
    } = useLocalidades();

    const { plans } = usePlans();

    const [selectedPlan, setSelectedPlan] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            plan: selectedPlan,
            provincia: selectedProvincia,
            localidad: selectedLocalidad,
        });
    };

    const canSearch = selectedPlan && selectedLocalidad;

    return (
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-sky-700 mb-4">
                Buscar Farmacias
            </h3>

            <form
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
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

                {/* Botón */}
                <div className="mt-6 col-span-full">
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
