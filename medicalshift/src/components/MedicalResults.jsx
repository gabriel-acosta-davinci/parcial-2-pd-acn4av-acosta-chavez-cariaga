import providersByMedic from "../data/providersByMedic.json";

export default function MedicalResults({ filters }) {
    const { specialty, localidad } = filters;
    const data = providersByMedic[localidad]?.[specialty];

    if (!data) {
        return (
            <div className="mt-12 text-center text-gray-500">
                No se encontraron resultados
            </div>
        );
    }

    if (typeof data === "string") {
        return (
            <div className="mt-12 text-center text-gray-500">
                {data}
            </div>
        );
    }

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Cards */}
            <div className="space-y-6">
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition"
                    >
                        <h4 className="text-lg font-semibold text-sky-700 mb-2">
                            {item.nombre}
                        </h4>
                        <p className="text-gray-700">{item.direccion}</p>
                        <p className="text-gray-700">{localidad}</p>
                        <p className="text-sm text-gray-500 mt-1">Tel: {item.telefono}</p>
                        <button className="mt-4 text-sm text-sky-500 hover:underline">
                            Ver en mapa
                        </button>
                    </div>
                ))}
            </div>

            {/* Mapa */}
            <div className="rounded-lg overflow-hidden shadow h-[400px]">
                <iframe
                    title="Mapa de prestadores"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/search?key=TU_API_KEY&q=${encodeURIComponent(localidad)}`}
                ></iframe>
            </div>
        </section>
    );
}
