import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ onQuoteClick }) {
    return (
        <nav className="bg-black/70 text-white px-6 py-4 flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-50">
            {/* Logo + título */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
                <div className="flex flex-col leading-tight">
                    <span className="text-lg font-semibold">Medicalshift</span>
                    <span className="text-xs text-gray-300">COBERTURA MÉDICA</span>
                </div>
            </div>

            {/* Menú de navegación */}
            <ul className="flex gap-6 items-center text-sm font-medium">
                <li><Link to="/" className="hover:text-sky-400 transition">Inicio</Link></li>
                <li><Link to="/About" className="hover:text-sky-400 transition">Quiénes Somos</Link></li>
                <li><Link to="/Planes" className="hover:text-sky-400 transition">Planes</Link></li>
                <li><Link to="/MedicalDirectory" className="hover:text-sky-400 transition">Cartilla</Link></li>
                <li><Link to="/Contact" className="hover:text-sky-400 transition">Contacto</Link></li>
                <li><Link to="/Login" className="hover:text-sky-400 transition">Mi cuenta</Link></li>
                <li>
                    <button
                        onClick={onQuoteClick}
                        className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1.5 rounded-md transition"
                    >
                        Cotizá y contratá
                    </button>
                </li>
            </ul>
        </nav>
    );
}