import AnimatedAssistant from "../assets/animated-assistant.gif";

export default function ConfirmationModal() {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg text-center animate-fade-in relative">
                {/* Ícono animado */}
                <div className="mb-4">
                    <img
                        src={AnimatedAssistant}
                        alt="Confirmación"
                        className="h-16 w-16 mx-auto animate-bounce"
                    />
                </div>
                <p className="text-lg font-medium text-gray-700">
                    En breve un asesor comercial se pondrá en contacto contigo.
                </p>
            </div>
        </div>
    );
}
