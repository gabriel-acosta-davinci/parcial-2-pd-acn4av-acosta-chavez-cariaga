import bronceImg from "../assets/plans/bronze-plan.jpg";
import plataImg from "../assets/plans/silver-plan.jpg";
import oroImg from "../assets/plans/gold-plan.jpg";
import platinoImg from "../assets/plans/platinum-plan.jpg";

const imageMap = {
    bronce: bronceImg,
    plata: plataImg,
    oro: oroImg,
    platino: platinoImg
};

export default function PlanDetailVisual({ plan }) {
    const imageSrc = imageMap[plan.id];

    return (
        <section className="flex flex-col lg:flex-row items-center justify-center px-6 py-20 bg-gray-50 gap-12">
            {/* Imagen a la izquierda */}
            <div className="w-full max-w-md">
                <img
                    src={imageSrc}
                    alt={`Visualización del ${plan.name}`}
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>

            {/* Texto a la derecha */}
            <div className="max-w-xl flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-sky-700">{plan.name}</h2>
                <div className="text-gray-700 text-lg leading-relaxed flex flex-col gap-4">
                    {plan.learnMore.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}
