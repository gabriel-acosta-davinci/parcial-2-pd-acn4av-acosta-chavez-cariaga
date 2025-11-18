import { useState, useEffect } from "react";
import specialtiesData from "../data/inpatientSpecialties.json";

export default function useInpatientSpecialties() {
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        setSpecialties(specialtiesData);
    }, []);

    return { specialties };
}
