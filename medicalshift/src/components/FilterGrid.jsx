import FilterCard from "./FilterCard";
import filters from "../data/filters"; // lo armamos después

export default function FilterGrid() {
    const handleFilterClick = (label) => {
        console.log("Filtro seleccionado:", label);
        // Acá podrías disparar lógica para mostrar resultados
    };

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {filters.map((filter) => (
                    <FilterCard
                        key={filter.label}
                        icon={filter.icon}
                        label={filter.label}
                        onClick={() => handleFilterClick(filter.label)}
                    />
                ))}
            </div>
        </div>
    );
}
