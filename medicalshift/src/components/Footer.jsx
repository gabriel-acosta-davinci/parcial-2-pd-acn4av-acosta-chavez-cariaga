import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import facebookLogo from "../assets/social/facebook.png";
import linkedinLogo from "../assets/social/linkedin.png";
import youtubeLogo from "../assets/social/youtube.png";
import instagramLogo from "../assets/social/instagram.png";

export default function Footer() {
    return (
        <footer className="bg-black/80 text-gray-300 mt-12">
            {/* Banner superior */}
            <div className="bg-sky-500 text-white px-6 py-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Emergencias */}
                    <div>
                        <h4 className="text-lg font-semibold mb-1">Emergencias</h4>
                        <p className="text-sm">0800 222 2223</p>
                    </div>

                    {/* Atención telefónica */}
                    <div>
                        <h4 className="text-lg font-semibold mb-1">Atención telefónica</h4>
                        <p className="text-sm">0810 222 SALUD (78567)</p>
                    </div>

                    {/* Suscripción */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Recibí novedades de Medicalshift</h4>
                        <form className="flex gap-2">
                            <input type="email" placeholder="Email" className="w-full border rounded-md px-4 py-2" />
                            <button
                                type="submit"
                                className="bg-white text-sky-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
                            >
                                ENVIAR
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* 🔳 Contenido principal del footer */}
            <div className="px-6 py-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Logo + branding */}
                    <div className="flex flex-col items-center">
                        <img src={logo} alt="Logo" className="h-20 w-20 mb-2" />
                        <h3 className="text-4xl font-semibold text-white">Medicalshift</h3>
                        <p className="text-sm">Cobertura médica confiable y cercana.</p>
                    </div>

                    {/* Quiénes somos */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">QUIÉNES SOMOS</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/Planes" className="hover:text-sky-400">Nosotros</Link></li>
                            <li><Link to="/Cartilla" className="hover:text-sky-400">De dónde venimos</Link></li>
                            <li><Link to="/Centros" className="hover:text-sky-400">Grupo Asociativo</Link></li>
                            <li><Link to="/Contacto" className="hover:text-sky-400">Cooperativismo</Link></li>
                        </ul>
                    </div>

                    {/* Menú rápido */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Menú Rápido</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/Planes" className="hover:text-sky-400">Planes</Link></li>
                            <li><Link to="/Cartilla" className="hover:text-sky-400">Cartillas</Link></li>
                            <li><Link to="/Centros" className="hover:text-sky-400">Mi cuenta online</Link></li>
                        </ul>
                    </div>

                    {/* Información útil */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">INFORMACIÓN ÚTIL</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/Planes" className="hover:text-sky-400">Emergencias</Link></li>
                            <li><Link to="/Cartilla" className="hover:text-sky-400">Asistencia al viajero</Link></li>
                            <li><Link to="/Centros" className="hover:text-sky-400">Preguntas frecuentes</Link></li>
                            <li><Link to="/Contacto" className="hover:text-sky-400">Código de ética</Link></li>
                        </ul>
                    </div>

                    {/* Contacto + redes */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Contacto</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Línea de denuncias</li>
                            <li>0800-555-0066</li>
                            <li>Atención al asociado</li>
                            <li>0810 333 SALUD (78567)</li>
                            <li>info@medicalshift.com</li>
                        </ul>
                        <br />
                        <h4 className="text-white font-semibold mb-3">Seguinos</h4>
                        <div className="flex gap-4 items-center">
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn" className="h-6 w-6 hover:opacity-80 transition" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img src={facebookLogo} alt="Facebook" className="h-6 w-6 hover:opacity-80 transition" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                <img src={youtubeLogo} alt="YouTube" className="h-6 w-6 hover:opacity-80 transition" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <img src={instagramLogo} alt="Instagram" className="h-6 w-6 hover:opacity-80 transition" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea final */}
                <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} Medicalshift. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}