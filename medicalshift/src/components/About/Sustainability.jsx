import SustainabilityCard1 from "../../assets/about/sustainability-card-1.jpg";
import SustainabilityCard2 from "../../assets/about/sustainability-card-2.jpg";
import SustainabilityCard3 from "../../assets/about/sustainability-card-3.jpg";

export default function Sustainability() {
    return (
        <div className="animate-fade-in px-6 py-12 space-y-12">
            {/* Card 1*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texto a la izquierda */}
                <div>
                    <h2 className="text-3xl font-bold text-sky-700 mb-4">Un presente con futuro</h2>
                    <p className="text-gray-700 text-lg">
                        Asumimos el desafío de transformar nuestro modelo de negocio en un entorno que exige estrategias sostenibles. Cada decisión importa, y cada paso refuerza una gestión que no solo cuida, sino que crea valor hoy y hacia el futuro.
                    </p>
                </div>

                {/* Imagen a la derecha */}
                <div className="h-64 bg-gray-100 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${SustainabilityCard1})` }}></div>
            </div>

            {/* Card 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Imagen a la izquierda */}
                <div className="h-64 bg-gray-100 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${SustainabilityCard2})` }}></div>

                {/* Texto a la derecha */}
                <div>
                    <h3 className="text-2xl font-semibold text-sky-700 mb-4">Salud y bienestar para la sostenibilidad</h3>
                    <p className="text-gray-700 text-lg">
                        Trabajamos para que el cuidado de la salud y el desarrollo sostenible avancen en armonía. Cada acción contempla el impacto económico, social y ambiental de forma indivisible, con el bienestar como eje de prosperidad para las personas, el planeta y las comunidades.
                    </p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texto a la izquierda */}
                <div>
                    <h3 className="text-2xl font-semibold text-sky-700 mb-4">Integridad en cada acción</h3>
                    <p className="text-gray-700 text-lg">
                        Actuamos con convicción y coherencia, procurando transparencia y responsabilidad en nuestras decisiones. Incorporamos la sostenibilidad a nuestra visión estratégica y evolucionamos para que nuestro desempeño de triple impacto proyecte un crecimiento consciente, justo y equilibrado.
                    </p>
                </div>

                {/* Imagen a la derecha */}
                <div className="h-64 bg-gray-100 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${SustainabilityCard3})` }}></div>
            </div>
        </div>
    );
}
