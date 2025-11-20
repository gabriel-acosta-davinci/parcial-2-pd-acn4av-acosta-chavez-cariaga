import { useState, useEffect } from "react";
import Header from "../components/Header";
import FilterGrid from "../components/MedicalDirectory/FilterGrid.jsx";
import MedicalSearchForm from "../components/MedicalDirectory/MedicalSearchForm.jsx";
import MedicalResults from "../components/MedicalDirectory/MedicalResults.jsx";
import DiagnosticSearchForm from "../components/MedicalDirectory/DiagnosticSearchForm.jsx";
import DiagnosticResults from "../components/MedicalDirectory/DiagnosticResults.jsx";
import ProfessionalSearchForm from "../components/MedicalDirectory/ProfessionalSearchForm.jsx";
import ProfessionalResults from "../components/MedicalDirectory/ProfessionalResults.jsx";
import UrgencySearchForm from "../components/MedicalDirectory/UrgencySearchForm.jsx";
import UrgencyResults from "../components/MedicalDirectory/UrgencyResults.jsx";
import InpatientSearchForm from "../components/MedicalDirectory/InpatientSearchForm.jsx";
import InpatientResults from "../components/MedicalDirectory/InpatientResults.jsx";
import OdontologySearchForm from "../components/MedicalDirectory/OdontologySearchForm.jsx";
import OdontologyResults from "../components/MedicalDirectory/OdontologyResults.jsx";
import PharmacySearchForm from "../components/MedicalDirectory/PharmacySearchForm.jsx";
import PharmacyResults from "../components/MedicalDirectory/PharmacyResults.jsx";
import OpticsModal from "../components/MedicalDirectory/OpticsModal.jsx";
import VaccineSearchForm from "../components/MedicalDirectory/VaccineSearchForm.jsx";
import VaccineResults from "../components/MedicalDirectory/VaccineResults.jsx";

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
