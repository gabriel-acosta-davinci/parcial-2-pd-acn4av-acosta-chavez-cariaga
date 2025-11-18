import { useState } from "react";
import Header from "../components/Header";
import PlanStack from "../components/PlanStack";
import PlanFan from "../components/PlanFan.jsx";
import PlanDetailVisual from "../components/PlanDetailVisual";
import PlanContact from "../components/PlanContact";
import headerImage from "../assets/plans/plans-image.jpg";
import plans from "../data/plans.json";

export default function Plans() {
    const [selectedPlanId, setSelectedPlanId] = useState(null);
    const selectedPlan = plans.find((p) => p.id === selectedPlanId);

    return (
        <div className="animate-fade-in">
            <Header
                image={headerImage}
                title="Planes Médicos para tu salud"
                subtitle=""
            />

            <main className="px-6 py-12 space-y-16 bg-gray-50">
                <section>
                    <PlanStack plans={plans} onSelectPlan={setSelectedPlanId} />
                </section>
                {selectedPlan && (
                    <>
                        <section>
                            <PlanDetailVisual plan={selectedPlan} />
                        </section>
                        <section>
                            <PlanContact plan={selectedPlan} />
                        </section>
                    </>
                )}
                <section>
                    <PlanFan />
                </section>
            </main>
        </div>
    );
}
