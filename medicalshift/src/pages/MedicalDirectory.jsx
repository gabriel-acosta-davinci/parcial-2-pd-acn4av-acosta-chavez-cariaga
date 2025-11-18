import { useState, useEffect } from "react";
import Header from "../components/Header";
import FilterGrid from "../components/FilterGrid";
import MedicalSearchForm from "../components/MedicalSearchForm";
import MedicalResults from "../components/MedicalResults.jsx";
import DiagnosticSearchForm from "../components/DiagnosticSearchForm";
import DiagnosticResults from "../components/DiagnosticResults.jsx";
import ProfessionalSearchForm from "../components/ProfessionalSearchForm.jsx";
import ProfessionalResults from "../components/ProfessionalResults.jsx";
import UrgencySearchForm from "../components/UrgencySearchForm";
import UrgencyResults from "../components/UrgencyResults.jsx";
//import PharmacySearch from "../components/PharmacySearch";
// Agregá más componentes según los filtros que tengas

import headerImage from "../assets/directory/medical-directory.jpg";

export default function MedicalDirectory() {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [searchParams, setSearchParams] = useState(null);
    const [results, setResults] = useState([]);

    // 🔄 Resetear búsqueda al cambiar de filtro
    useEffect(() => {
        setSearchParams(null);
        setResults([]);
    }, [selectedFilter]);

    const renderSelectedComponent = () => {
        switch (selectedFilter) {
            case "Especialidades Médicas":
                return (
                    <>
                        <MedicalSearchForm onSearch={setSearchParams} />
                        {searchParams && (
                            <MedicalResults filters={searchParams} results={results} />
                        )}
                    </>
                );
            case "Diagnóstico y Tratamiento":
                return (
                    <>
                        <DiagnosticSearchForm onSearch={setSearchParams} />
                        {searchParams && (
                            <DiagnosticResults filters={searchParams} results={results} />
                        )}
                    </>
                );
            case "Búsqueda por Profesional":
                return (
                    <>
                        <ProfessionalSearchForm onSearch={setSearchParams} />
                        {searchParams && (
                            <ProfessionalResults filters={searchParams} results={results} />
                        )}
                    </>
                );
            case "Servicio de Guardia":
                return (
                    <>
                        <UrgencySearchForm onSearch={setSearchParams} />
                        {searchParams && (
                            <UrgencyResults filters={searchParams} results={results} />
                        )}
                    </>
                );
            case "Farmacias":
                return <PharmacySearch />;
            // Agregá más casos según tus filtros
            default:
                return null;
        }
    };

    return (
        <div className="animate-fade-in">
            <Header
                image={headerImage}
                title="Cartilla online"
                subtitle=""
            />

            <main className="px-6 py-12 space-y-12">
                <h2 className="text-2xl font-bold text-sky-700">Servicios disponibles</h2>
                <FilterGrid onFilterSelect={setSelectedFilter} />
                {renderSelectedComponent()}
            </main>
        </div>
    );
}
