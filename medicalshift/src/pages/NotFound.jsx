import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-300 px-6">
            {/* Card */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full rounded-2xl shadow-2xl bg-white/70 backdrop-blur-md p-10 overflow-hidden">

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 via-gray-200/30 to-white/20 shine-effect" />

                {/* Contenido */}
                <img
                    src={logo}
                    alt="MedicalShift Logo"
                    className="w-20 h-20 mb-6 relative z-10"
                />

                <h1 className="text-7xl font-extrabold text-sky-700 tracking-tight mb-4 relative z-10">
                    404
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 relative z-10">
                    Página no encontrada
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                    Lo sentimos, no pudimos encontrar la página que estás buscando.
                </p>

                <Link
                    to="/"
                    className="relative z-10 px-8 py-3 rounded-full bg-sky-700 text-white font-medium shadow-lg hover:shadow-xl hover:bg-sky-800 transition-transform transform hover:scale-105"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
