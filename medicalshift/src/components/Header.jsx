import { Link } from "react-router-dom";

export default function Header({ image, title, subtitle, subtitleLink }) {
    return (
        <header
            className="relative w-full h-full py-56 flex flex-col items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}
        >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Contenido */}
            <div className="relative z-10 pt-[64px]">
                <h1 className="text-5xl font-bold">{title}</h1>

                {subtitleLink ? (
                    <Link
                        to={subtitleLink}
                        className="mt-4 inline-block px-6 py-2 bg-white text-sky-700 font-medium rounded-md hover:bg-sky-100 transition"
                    >
                        {subtitle}
                    </Link>
                ) : (
                    subtitle && <p className="mt-2 text-lg">{subtitle}</p>
                )}
            </div>
        </header>
    );
}
