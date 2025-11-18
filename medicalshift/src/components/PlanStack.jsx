import MedicalShiftLogo from "../assets/logo.png";

const gradientMap = {
    bronce: "from-[#f5e1c0] to-[#d2a679]",
    plata: "from-[#e0e0e0] to-[#b0b0b0]",
    oro: "from-[#fff4b0] to-[#f5d76e]",
    platino: "from-[#d0f0ff] via-[#b0d8e0] to-[#a0c4d4]"
};

export default function PlanStack({ plans, onSelectPlan }) {
    return (
        <div className="overflow-x-auto py-6">
            <div className="flex gap-6 px-2 min-w-max">
                {plans.map((plan) => {
                    const gradient = gradientMap[plan.id] || "from-sky-500 to-sky-700";

                    return (
                        <div
                            key={plan.id}
                            className={`min-w-[260px] max-w-xs rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-4 text-gray-800 bg-gradient-to-br ${gradient} flex flex-col justify-between transition hover:scale-[1.02]`}
                        >
                            {/* Header de la card */}
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-md font-semibold">{plan.name}</h4>
                                <img
                                    src={MedicalShiftLogo}
                                    alt="MedicalShift"
                                    className="w-8 h-8"
                                />
                            </div>

                            {/* Descripción corta */}
                            <p className="text-sm leading-relaxed">{plan.description}</p>

                            {/* Botón SABER MÁS */}
                            <div className="flex justify-center mt-6">
                                <div className="rounded-md p-[1.5px] bg-gradient-to-br from-[#d2a679] to-[#f5e1c0] inline-block">
                                    <button
                                        className="px-6 py-2 rounded-md bg-white border border-gray-100 hover:scale-[1.03] transition"
                                        onClick={() => onSelectPlan(plan.id)}
                                    >
                    <span
                        className={`bg-gradient-to-br ${gradient} bg-clip-text text-transparent font-medium`}
                    >
                      SABER MÁS
                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
