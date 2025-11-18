import { useState, useEffect } from "react";
import specialtiesData from "../data/urgencySpecialties.json";

export default function useUrgencySpecialties() {
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        setSpecialties(specialtiesData);
    }, []);

    return { specialties };
}
