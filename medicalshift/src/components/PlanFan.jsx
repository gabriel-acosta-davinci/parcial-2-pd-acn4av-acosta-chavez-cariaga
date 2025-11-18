import planImage from "../assets/plans/plans-fan.png";

export default function PlanFan() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center px-6 py-20 bg-gray-50 gap-12">
            {/* Texto a la izquierda */}
            <div className="max-w-xl flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-sky-700 leading-snug">
                    En MedicalShift encontrarás los mejores planes en medicina prepaga
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Pensamos y actuamos en función de nuestros asociados. Con nuestra amplia gama de Planes Médicos procuramos un modelo de atención en su concepto más amplio, apuntando claramente a la promoción de la salud, educando en la prevención y auspiciando conductas saludables para disminuir los factores de riesgo.
                </p>
            </div>

            {/* Imagen a la derecha */}
            <div className="w-full max-w-md">
                <img
                    src={planImage}
                    alt="Visualización de planes MedicalShift"
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
}
