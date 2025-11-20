import ContactForm from "../Contact/ContactForm.jsx";

export default function PlanContact({ plan }) {
    return (
        <section className="flex flex-col lg:flex-row items-start justify-center px-6 py-20 bg-gray-50 gap-12">
            {/* Texto a la izquierda */}
            <div className="max-w-xl flex flex-col gap-6">
                <h3 className="text-2xl font-semibold text-sky-700">¿Querés saber más sobre el {plan.name}?</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Completá el formulario y nuestro equipo se pondrá en contacto con vos para brindarte toda la información que necesitás.
                </p>
            </div>

            {/* Formulario a la derecha */}
            <div className="w-full max-w-md">
                <ContactForm plan={plan.id} />
            </div>
        </section>
    );
}
