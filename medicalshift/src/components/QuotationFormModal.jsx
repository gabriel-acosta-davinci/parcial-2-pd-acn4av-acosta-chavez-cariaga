import { useState } from "react";
import useLocalidades from "../hooks/useLocalidades";

export default function QuotationFormModal({ onClose, onSubmit }) {
    const [provincia, setProvincia] = useState("");
    const { localidadesPorProvincia, loading } = useLocalidades();

    const todasLasLocalidades = Object.values(localidadesPorProvincia).flat();
    const localidadesFiltradas = provincia
        ? localidadesPorProvincia[provincia] || []
        : todasLasLocalidades;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-xl animate-fade-in relative">
                <h2 className="text-xl font-bold mb-4 text-center">Cotizador de Medicina Prepaga</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nombre" className="border rounded-md px-4 py-2" />
                    <input type="text" placeholder="Apellido" className="border rounded-md px-4 py-2" />

                    <select className="border rounded-md px-4 py-2">
                        <option value="">Sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>

                    <input type="date" placeholder="Fecha de nacimiento" className="border rounded-md px-4 py-2" />
                    <input type="text" placeholder="Número de documento" className="border rounded-md px-4 py-2" />

                    <select className="border rounded-md px-4 py-2">
                        <option value="">Situación laboral</option>
                        <option value="Empleado">Empleado</option>
                        <option value="Monotributista">Monotributista</option>
                        <option value="Desempleado">Desempleado</option>
                        <option value="Estudiante">Estudiante</option>
                    </select>

                    {/* Provincia */}
                    <select
                        className="border rounded-md px-4 py-2"
                        value={provincia}
                        onChange={(e) => setProvincia(e.target.value)}
                        disabled={loading}
                    >
                        <option value="">Provincia</option>
                        {Object.keys(localidadesPorProvincia).map((prov) => (
                            <option key={prov} value={prov}>{prov}</option>
                        ))}
                    </select>

                    {/* Localidad */}
                    <select className="border rounded-md px-4 py-2" disabled={loading || !provincia}>
                        <option value="">Localidad</option>
                        {localidadesFiltradas.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <input type="text" placeholder="Cód. área" className="border rounded-md px-4 py-2" />
                    <input type="text" placeholder="Teléfono (sin 15)" className="border rounded-md px-4 py-2" />
                    <input type="email" placeholder="Email" className="border rounded-md px-4 py-2" />

                    <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-sky-600"
                        >
                            Continuar
                        </button>
                    </div>
                </form>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
