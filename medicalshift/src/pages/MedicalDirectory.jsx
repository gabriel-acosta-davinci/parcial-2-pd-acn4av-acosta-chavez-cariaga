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
import InpatientSearchForm from "../components/InpatientSearchForm.jsx";
import InpatientResults from "../components/InpatientResults.jsx";
import OdontologySearchForm from "../components/OdontologySearchForm.jsx";
import OdontologyResults from "../components/OdontologyResults.jsx";
import PharmacySearchForm from "../components/PharmacySearchForm";
import PharmacyResults from "../components/PharmacyResults.jsx";
import OpticsModal from "../components/OpticsModal.jsx";
import VaccineSearchForm from "../components/VaccineSearchForm.jsx";
import VaccineResults from "../components/VaccineResults.jsx";

import headerImage from "../assets/directory/medical-directory.jpg";

export default function MedicalDirectory() {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [searchParams, setSearchParams] = useState(null);
    const [results, setResults] = useState([]);

    // Resetear búsqueda al cambiar de filtro
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
            case "Servicio de Internación":
                return (
                    <>
                        <InpatientSearchForm onSearch={setSearchParams} />
                        {searchParams && (
                            <InpatientResults filters={searchParams} results={results} />
                        )}
                    </>
                );
            case "Odontología":
                return (
                    <>
                        <OdontologySearchForm onSearch={setSearchParams} />
                        {searchParams && (
                            <OdontologyResults filters={searchParams} results={results} />
                        )}
                    </>
                );
            case "Farmacias":
                return (
                    <>
                        <PharmacySearchForm onSearch={setSearchParams} />
                        {searchParams && (
                            <PharmacyResults filters={searchParams} results={results} />
                        )}
                    </>
                );
            case "Ópticas":
                return (
                    <OpticsModal onClose={() => setSelectedFilter(null)} />
                );
            case "Vacunatorios":
                return (
                    <>
                        <VaccineSearchForm onSearch={setSearchParams} />
                        {searchParams && (
                            <VaccineResults filters={searchParams} results={results} />
                        )}
                    </>
                );
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
