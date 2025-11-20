import GroupImage from "../../assets/about/associative-group.png";

export default function AssociativeGroup() {
    return (
        <div className="animate-fade-in px-6 py-12 space-y-8">
            {/* Título destacado */}
            <h2 className="text-3xl font-bold text-sky-500 text-center">
                Unidos somos más fuertes.
            </h2>

            {/* Card horizontal */}
            <div className="h-120 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texto a la izquierda */}
                <div>
                    <h3 className="text-2xl font-semibold text-sky-700 mb-4">Grupo asociativo</h3>
                    <p className="text-gray-700 text-lg mb-4">
                        Formamos parte de un Grupo Asociativo basado en los principios del cooperativismo, compuesto por HealthHub y Medicalshift.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Esta alianza nos permite generar sinergias estratégicas, uniéndonos bajo un mismo norte: favorecer el desarrollo social y económico de las personas, en un marco de sustentabilidad.
                    </p>
                </div>

                {/* Imagen a la derecha */}
                <div className="h-full bg-gray-100 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${GroupImage})` }}></div>
            </div>
        </div>
    );
}
