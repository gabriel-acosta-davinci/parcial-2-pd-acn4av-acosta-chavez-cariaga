import PrinciplesImage from "../../assets/about/cooperativism-principles.png";
import ValuesImage from "../../assets/about/cooperativism-values.jpg";

export default function Cooperativism() {
    return (
        <div className="animate-fade-in px-6 py-12 space-y-12">
            {/* Bloque 1: Principios cooperativos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texto a la izquierda */}
                <div>
                    <h2 className="text-3xl font-bold text-sky-700 mb-4">Cooperativismo</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Somos una cooperativa: una empresa en la que todos nuestros asociados son parte y dueños. Nuestro fin no es el lucro, sino el cuidado de la salud de las personas. Nuestros principios son pilares que nos sostienen y nos guían.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                        <li>Membresía abierta y voluntaria</li>
                        <li>Autonomía e independencia</li>
                        <li>Control democrático de los miembros</li>
                        <li>Educación, entrenamiento e información</li>
                    </ul>
                </div>

                {/* Imagen a la derecha */}
                <div className="h-64 bg-gray-100 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${PrinciplesImage})` }}></div>
            </div>

            {/* Bloque 2: Valores cooperativos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Imagen a la izquierda */}
                <div className="h-64 bg-gray-100 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${ValuesImage})` }}></div>

                {/* Texto a la derecha */}
                <div>
                    <h3 className="text-2xl font-semibold text-sky-700 mb-4">Nuestros valores</h3>
                    <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                        <li>Vocación de servicio</li>
                        <li>Sentido de pertenencia</li>
                        <li>Respeto</li>
                        <li>Responsabilidad y honestidad</li>
                        <li>Equidad</li>
                        <li>Solidaridad</li>
                    </ul>
                    <p className="text-gray-700 text-lg mt-4">
                        Cada decisión que tomamos busca el bienestar común, respetando la diversidad y promoviendo el desarrollo humano.
                    </p>
                </div>
            </div>
        </div>
    );
}
