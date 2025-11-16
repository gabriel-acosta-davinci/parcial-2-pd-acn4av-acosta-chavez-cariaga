import AboutCard1 from "../assets/about/about-card-1.png";
import AboutCard2 from "../assets/about/about-card-2.png";

export default function AboutUs() {
    return (
        <div className="animate-fade-in px-6 py-12 space-y-12">
            {/* Card 1: Historia y pertenencia */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texto a la izquierda */}
                <div>
                    <h2 className="text-3xl font-bold text-sky-700 mb-4">Nosotros</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Somos una empresa de medicina prepaga comprometida con el bienestar y la salud de nuestros asociados.
                        Brindamos cobertura médica de primer nivel en cada rincón del país.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Formamos parte de un gran <b>Grupo Asociativo</b> conformado por HealthHub y Medicalshift.
                        Nuestros valores cooperativos expresan nuestro origen y propósito: comprender que los asociados, antes que asociados, son personas.
                    </p>
                </div>

                {/* Imagen o espacio visual a la derecha */}
                <div className="h-64 bg-gray-100 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${AboutCard1})` }}></div>
            </div>

            {/* Card 2: Propósito y valores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Imagen a la izquierda */}
                <div className="h-64 bg-gray-100 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${AboutCard2})` }}></div>

                {/* Texto a la derecha */}
                <div>
                    <h2 className="text-3xl font-bold text-sky-700 mb-4">Nuestro propósito</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Cuidar y mantener la salud de nuestros asociados, garantizando el acceso a una cobertura nacional e integrada.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                        <li><b>Vocación de servicio</b>: compromiso auténtico con cada persona.</li>
                        <li><b>Sentido de pertenencia</b>: arraigo profundo con la organización.</li>
                        <li><b>Respeto</b>: consideración por las perspectivas del otro.</li>
                        <li><b>Responsabilidad y honestidad</b>: transparencia en cada acción.</li>
                        <li><b>Equidad</b>: trato justo bajo las mismas circunstancias.</li>
                        <li><b>Solidaridad</b>: buscamos el bien común en cada prestación.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
