import { useState, useEffect } from "react";
import specialtiesData from "../data/diagnosticSpecialties.json";

export default function useDiagnosticSpecialties() {
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        setSpecialties(specialtiesData);
    }, []);

    return { specialties };
}
