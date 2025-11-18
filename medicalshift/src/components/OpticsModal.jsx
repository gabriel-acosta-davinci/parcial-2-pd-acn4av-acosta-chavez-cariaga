import OpticsIcon from "../assets/icons/optics.gif";

export default function OpticsModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg text-center animate-fade-in relative">
                {/* Ícono animado */}
                <div className="mb-4">
                    <img
                        src={OpticsIcon}
                        alt="Ópticas"
                        className="h-16 w-16 mx-auto animate-bounce"
                    />
                </div>
                <p className="text-lg font-medium text-gray-700">
                    Contamos con cobertura en Óptica. Podrás acercarte a la que elijas para efectuar tu compra o pedido y posteriormente gestionar el reintegro con Medicalshift. El monto del mismo será el que te corresponda de acuerdo al plan que tengas.
                </p>
                {/* Botón de cierre dentro del modal */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
