import { useState } from "react";
import Header from "../components/Header";
import ContactImage from "../assets/contact.jpg";
import useLocalidades from "../hooks/useLocalidades";

export default function Contact() {
    const [provincia, setProvincia] = useState("");
    const { localidadesPorProvincia, loading } = useLocalidades();

    const todasLasLocalidades = Object.values(localidadesPorProvincia).flat();
    const localidadesFiltradas = provincia
        ? localidadesPorProvincia[provincia] || []
        : todasLasLocalidades;

    return (
        <div>
            <Header
                image={ContactImage}
                title="Estamos aquí para ayudarte"
                subtitle=""
            />

            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card del formulario */}
                <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
                    <h2 className="text-2xl font-semibold mb-6 text-sky-700 text-center">
                        Envíanos tu consulta
                    </h2>
                    <form className="space-y-4">
                        <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                            <option value="">Motivo de consulta</option>
                            <option value="planes">Planes</option>
                            <option value="cartilla">Cartilla médica</option>
                            <option value="administrativo">Administrativo</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full border rounded-md px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Apellido"
                            className="w-full border rounded-md px-4 py-2"
                        />

                        {/* Provincia */}
                        <select
                            className="w-full border rounded-md px-4 py-2"
                            value={provincia}
                            onChange={(e) => setProvincia(e.target.value)}
                            disabled={loading}
                        >
                            <option value="">Provincia</option>
                            {Object.keys(localidadesPorProvincia).map((prov) => (
                                <option key={prov} value={prov}>
                                    {prov}
                                </option>
                            ))}
                        </select>

                        {/* Localidad */}
                        <select
                            className="w-full border rounded-md px-4 py-2"
                            disabled={loading || !provincia}
                        >
                            <option value="">
                                {provincia
                                    ? "Seleccioná una localidad"
                                    : "Elegí una provincia primero"}
                            </option>
                            {localidadesFiltradas.map((loc) => (
                                <option key={loc} value={loc}>
                                    {loc}
                                </option>
                            ))}
                        </select>

                        <input
                            type="text"
                            placeholder="Nro de Documento"
                            className="w-full border rounded-md px-4 py-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border rounded-md px-4 py-2"
                        />

                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Prefijo"
                                className="w-1/3 border rounded-md px-4 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Celular"
                                className="w-2/3 border rounded-md px-4 py-2"
                            />
                        </div>

                        <textarea
                            placeholder="Mensaje"
                            rows="5"
                            className="w-full border rounded-md px-4 py-2 resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-md transition w-full"
                        >
                            Enviar consulta
                        </button>
                    </form>
                </div>

                {/* Texto lateral */}
                <div className="flex flex-col justify-start gap-3 mt-24">
                    <p className="text-gray-600 text-xl mb-4">
                        En <b className="text-sky-500">Medicalshift</b> pensamos y actuamos en función de nuestros asociados. Con nuestra amplia gama de planes procuramos un modelo de atención personalizado. Si tenés alguna consulta podés escribirnos a través de nuestros formularios de contacto.
                    </p>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        ¿Necesitás ayuda personalizada?
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Nuestro equipo está disponible para responder tus dudas sobre
                        planes, cartilla médica y cobertura.
                    </p>
                    <p className="text-gray-600">
                        También podés llamarnos al{" "}
                        <span className="font-semibold text-sky-600">
              +54 9 223 555-1234
            </span>{" "}
                        o escribirnos a{" "}
                        <span className="font-semibold text-sky-600">
              info@medicalshift.com
            </span>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
