import { useState, useEffect } from "react";
import MedicalSearchForm from "../MedicalDirectory/MedicalSearchForm";
import MedicalResults from "../MedicalDirectory/MedicalResults";
import DiagnosticSearchForm from "../MedicalDirectory/DiagnosticSearchForm";
import DiagnosticResults from "../MedicalDirectory/DiagnosticResults";
import ProfessionalSearchForm from "../MedicalDirectory/ProfessionalSearchForm";
import ProfessionalResults from "../MedicalDirectory/ProfessionalResults";
import UrgencySearchForm from "../MedicalDirectory/UrgencySearchForm";
import UrgencyResults from "../MedicalDirectory/UrgencyResults";
import InpatientSearchForm from "../MedicalDirectory/InpatientSearchForm";
import InpatientResults from "../MedicalDirectory/InpatientResults";
import OdontologySearchForm from "../MedicalDirectory/OdontologySearchForm";
import OdontologyResults from "../MedicalDirectory/OdontologyResults";
import PharmacySearchForm from "../MedicalDirectory/PharmacySearchForm";
import PharmacyResults from "../MedicalDirectory/PharmacyResults";
import OpticsModal from "../MedicalDirectory/OpticsModal";
import VaccineSearchForm from "../MedicalDirectory/VaccineSearchForm";
import VaccineResults from "../MedicalDirectory/VaccineResults";

export default function CartillaSearchResults({ filterType, userPlan, userLocalidad, onSearch, searchParams }) {
    const [localSearchParams, setLocalSearchParams] = useState(null);

    // Función wrapper para onSearch que automáticamente agrega plan y localidad
    const handleSearch = (params) => {
        const paramsWithUserData = {
            ...params,
            plan: userPlan,
            localidad: userLocalidad,
        };
        setLocalSearchParams(paramsWithUserData);
        if (onSearch) {
            onSearch(paramsWithUserData);
        }
    };

    // Para filtros que no necesitan formulario, ejecutar búsqueda automáticamente
    useEffect(() => {
        const filtersWithoutForm = ["Vacunatorios", "Farmacias"];
        if (filtersWithoutForm.includes(filterType) && !localSearchParams && userPlan && userLocalidad) {
            const paramsWithUserData = {
                plan: userPlan,
                localidad: userLocalidad,
            };
            setLocalSearchParams(paramsWithUserData);
            if (onSearch) {
                onSearch(paramsWithUserData);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterType]);

    // Usar searchParams externos si existen, sino usar los locales
    const finalSearchParams = searchParams || localSearchParams;

    const renderSearchForm = () => {
        switch (filterType) {
            case "Especialidades Médicas":
                return (
                    <>
                        <MedicalSearchForm 
                            onSearch={handleSearch}
                            defaultPlan={userPlan}
                            defaultLocalidad={userLocalidad}
                        />
                        {finalSearchParams && (
                            <div className="mt-6">
                                <MedicalResults filters={finalSearchParams} />
                            </div>
                        )}
                    </>
                );
            case "Diagnóstico y Tratamiento":
                return (
                    <>
                        <DiagnosticSearchForm 
                            onSearch={handleSearch}
                            defaultPlan={userPlan}
                            defaultLocalidad={userLocalidad}
                        />
                        {finalSearchParams && (
                            <div className="mt-6">
                                <DiagnosticResults filters={finalSearchParams} />
                            </div>
                        )}
                    </>
                );
            case "Búsqueda por Profesional":
                return (
                    <>
                        <ProfessionalSearchForm 
                            onSearch={handleSearch}
                            defaultPlan={userPlan}
                            defaultLocalidad={userLocalidad}
                        />
                        {finalSearchParams && (
                            <div className="mt-6">
                                <ProfessionalResults filters={finalSearchParams} />
                            </div>
                        )}
                    </>
                );
            case "Servicio de Guardia":
                return (
                    <>
                        <UrgencySearchForm 
                            onSearch={handleSearch}
                            defaultPlan={userPlan}
                            defaultLocalidad={userLocalidad}
                        />
                        {finalSearchParams && (
                            <div className="mt-6">
                                <UrgencyResults filters={finalSearchParams} />
                            </div>
                        )}
                    </>
                );
            case "Servicio de Internación":
                return (
                    <>
                        <InpatientSearchForm 
                            onSearch={handleSearch}
                            defaultPlan={userPlan}
                            defaultLocalidad={userLocalidad}
                        />
                        {finalSearchParams && (
                            <div className="mt-6">
                                <InpatientResults filters={finalSearchParams} />
                            </div>
                        )}
                    </>
                );
            case "Odontología":
                return (
                    <>
                        <OdontologySearchForm 
                            onSearch={handleSearch}
                            defaultPlan={userPlan}
                            defaultLocalidad={userLocalidad}
                        />
                        {finalSearchParams && (
                            <div className="mt-6">
                                <OdontologyResults filters={finalSearchParams} />
                            </div>
                        )}
                    </>
                );
            case "Farmacias":
                return (
                    <>
                        {finalSearchParams && (
                            <div className="mt-6">
                                <PharmacyResults filters={finalSearchParams} />
                            </div>
                        )}
                    </>
                );
            case "Ópticas":
                return <OpticsModal onClose={() => {}} />;
            case "Vacunatorios":
                return (
                    <>
                        {finalSearchParams && (
                            <div className="mt-6">
                                <VaccineResults filters={finalSearchParams} />
                            </div>
                        )}
                    </>
                );
            default:
                return null;
        }
    };

    return <div className="mt-6">{renderSearchForm()}</div>;
}

