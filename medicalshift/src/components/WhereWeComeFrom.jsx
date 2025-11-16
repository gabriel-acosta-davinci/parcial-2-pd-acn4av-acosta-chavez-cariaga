import CardImage from "../assets/about/where-we-come-from.png"; // asegurate que esta imagen exista

export default function WhereWeComeFrom() {
    return (
        <div className="animate-fade-in px-6 py-12 space-y-8">
            {/* Frase destacada */}
            <h2 className="text-3xl font-bold text-sky-500 text-center">
                Los pies en el presente, la mirada en el futuro.
            </h2>

            {/* Card horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Imagen a la izquierda */}
                <div className="h-64 bg-gray-100 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${CardImage})` }}></div>

                {/* Texto a la derecha */}
                <div>
                    <p className="text-gray-700 text-lg mb-4">
                        Nacimos hace 5 años para cuidar la salud de todos los bonaerenses. Con el tiempo, crecimos y expandimos nuestra cobertura desde la provincia de Buenos Aires a toda la nación, acompañando a familias, profesionales y personas que buscaban una medicina humana y de calidad.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Nuestra trayectoria nos permite brindar experiencia y profesionalismo, con una actitud abierta y flexible a las necesidades de nuestros asociados. En 2025, nos transformamos en Medicalshift, renovando nuestro compromiso de cuidar con eficiencia y calidez.
                    </p>
                </div>
            </div>
        </div>
    );
}
