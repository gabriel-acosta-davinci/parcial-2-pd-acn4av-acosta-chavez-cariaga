import { Link } from "react-router-dom";
import icon from "../assets/icons/login-highlight-icon.png";
import background from "../assets/home/login-highlight-background.jpg";

export default function LoginHighlight() {
    return (
        <section
            className="relative w-full h-[500px] flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Overlay opcional */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Contenido centrado */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 max-w-2xl">
                {/* Ícono animado */}
                <img
                    src={icon}
                    alt="Ícono destacado"
                    className="w-16 h-16 animate-bounce"
                />

                {/* Título */}
                <h2 className="text-3xl font-bold">Tu cuenta Online</h2>

                {/* Párrafo */}
                <p className="text-lg leading-relaxed">
                    Gestioná tus trámites y accedé a la información que necesitás en cualquier momento, desde cualquier lugar.
                </p>

                {/* Botón */}
                <Link
                    to="/cuenta"
                    className="inline-block px-6 py-2 bg-white text-sky-700 font-medium rounded-md hover:bg-sky-100 transition"
                >
                    Conocer más
                </Link>
            </div>
        </section>
    );
}
