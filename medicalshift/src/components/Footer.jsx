import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // tu logo

export default function Footer() {
    return (
        <footer className="bg-black/80 text-gray-300 px-6 py-10 mt-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo + branding */}
                <div className="flex flex-col items-start">
                    <img src={logo} alt="Logo" className="h-10 w-10 mb-2" />
                    <h3 className="text-lg font-semibold text-white">Medicalshift</h3>
                    <p className="text-sm">Cobertura médica confiable y cercana.</p>
                </div>

                {/* Menú rápido */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Menú</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/Planes" className="hover:text-sky-400">Planes</Link></li>
                        <li><Link to="/Cartilla" className="hover:text-sky-400">Cartilla</Link></li>
                        <li><Link to="/Centros" className="hover:text-sky-400">Centros de atención</Link></li>
                        <li><Link to="/Contacto" className="hover:text-sky-400">Contacto</Link></li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Contacto</h4>
                    <ul className="space-y-2 text-sm">
                        <li>📍 Av. Siempre Viva 123, Mar del Plata</li>
                        <li>📞 +54 9 223 555-1234</li>
                        <li>✉️ info@medicalshift.com</li>
                    </ul>
                </div>

                {/* Redes sociales */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Seguinos</h4>
                    <div className="flex gap-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-sky-400">🌐</a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-sky-400">📸</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400">🐦</a>
                    </div>
                </div>
            </div>

            {/* Línea final */}
            <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Medicalshift. Todos los derechos reservados.
            </div>
        </footer>
    );
}