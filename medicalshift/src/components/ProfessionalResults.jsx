import professionals from "../data/professionals.json";

export default function ProfessionalResults({ filters }) {
    const { specialty, localidad, nombre } = filters;

    // Filtrado base
    let results = professionals.filter(
        (p) =>
            p.localidad === localidad &&
            p.especialidad === specialty
    );

    // Filtrado opcional por nombre o institución
    if (nombre) {
        const query = nombre.toLowerCase();
        results = results.filter(
            (p) =>
                p.nombre.toLowerCase().includes(query) ||
                p.institucion.toLowerCase().includes(query)
        );
    }

    if (results.length === 0) {
        return (
            <div className="mt-12 text-center text-gray-500">
                No se encontraron profesionales que coincidan con tu búsqueda.
            </div>
        );
    }

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
                {results.map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition"
                    >
                        <h4 className="text-lg font-semibold text-sky-700 mb-2">
                            {item.nombre}
                        </h4>
                        <p className="text-gray-700">{item.especialidad}</p>
                        <p className="text-gray-700">{item.institucion}</p>
                        <p className="text-gray-700">{item.direccion}</p>
                        <p className="text-gray-700">{item.localidad}</p>
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
