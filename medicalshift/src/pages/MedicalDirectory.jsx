import Header from "../components/Header";
import FilterGrid from "../components/FilterGrid";
import headerImage from "../assets/directory/medical-directory.jpg";

export default function MedicalDirectory() {
    return (
        <div className="animate-fade-in">
            <Header
                image={headerImage}
                title="Cartilla online"
                subtitle=""
            />

            <main className="px-6 py-12">
                <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Buscá por localidad</h2>
                <FilterGrid />
                {/* Aquí irán los resultados dinámicos según el filtro */}
            </main>
        </div>
    );
}
