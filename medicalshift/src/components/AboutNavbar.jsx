export default function AboutNavbar({ active, setActive }) {
    const links = [
        "Nosotros",
        "De dónde venimos",
        "Grupo asociativo",
        "Cooperativismo",
        "Sostenibilidad",
    ];

    return (
        <nav className="flex flex-wrap justify-center gap-4 py-6 bg-sky-50 shadow-sm">
            {links.map((label) => (
                <button
                    key={label}
                    onClick={() => setActive(label)}
                    className={`px-4 py-2 rounded-md font-medium transition ${
                        active === label
                            ? "bg-sky-500 text-white"
                            : "bg-white text-sky-700 hover:bg-sky-100"
                    }`}
                >
                    {label}
                </button>
            ))}
        </nav>
    );
}
