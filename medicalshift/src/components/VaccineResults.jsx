import providersByVaccine from "../data/providersByVaccine.json";

export default function VaccineResults({ filters }) {
    const { plan, localidad } = filters;
    const data = providersByVaccine[localidad]?.[plan];

    if (!data) {
        return (
            <div className="mt-12 text-center text-gray-500">
                No se encontraron vacunatorios para tu búsqueda.
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
        </section>
    );
}
