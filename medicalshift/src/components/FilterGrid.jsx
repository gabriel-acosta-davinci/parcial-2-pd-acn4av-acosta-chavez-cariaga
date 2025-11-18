import filters from "../data/filters";
import FilterCard from "./FilterCard";

export default function FilterGrid({ onFilterSelect }) {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {filters.map((filter) => (
                    <FilterCard
                        key={filter.label}
                        icon={filter.icon}
                        label={filter.label}
                        onClick={() => onFilterSelect(filter.label)}
                    />
                ))}
            </div>
        </div>
    );
}
