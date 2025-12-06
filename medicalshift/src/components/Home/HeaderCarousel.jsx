import { useState } from "react";
import Header from "../Header.jsx";
import header1 from "../../assets/home/hire-your-coverage.webp";
import header2 from "../../assets/home/download.jpg";

const headers = [
    {
        image: header1,
        title: "De tu lado para cuidarte",
        subtitle: "Contratá tu cobertura online",
        subtitleLink: "/Contact"
    },
    {
        image: header2,
        title: "Renovamos nuestra app. Más fácil. Más ágil.",
        subtitle: "Descargar",
        subtitleLink: "/Download"
    }
];

export default function HeaderCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % headers.length);
    const prev = () => setIndex((index - 1 + headers.length) % headers.length);

    // 🔑 Esta línea faltaba
    const current = headers[index];

    return (
        <div className="relative">
            <Header
                image={current.image}
                title={current.title}
                subtitle={current.subtitle}
                subtitleLink={current.subtitleLink}
            />

            {/* Navegación */}
            <div className="absolute inset-0 flex justify-between items-center px-4">
                <button
                    onClick={prev}
                    className="bg-white/70 hover:bg-white text-sky-700 px-3 py-1 rounded-full shadow"
                >
                    ←
                </button>
                <button
                    onClick={next}
                    className="bg-white/70 hover:bg-white text-sky-700 px-3 py-1 rounded-full shadow"
                >
                    →
                </button>
            </div>
        </div>
    );
}
