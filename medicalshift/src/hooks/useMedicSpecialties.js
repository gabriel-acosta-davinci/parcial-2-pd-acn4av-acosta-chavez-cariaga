import { useState, useEffect } from "react";
import specialtiesData from "../data/medicSpecialties.json";

export default function useMedicSpecialties() {
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        // Simulamos fetch, pero en realidad cargamos el JSON local
        setSpecialties(specialtiesData);
    }, []);

    return { specialties };
}
