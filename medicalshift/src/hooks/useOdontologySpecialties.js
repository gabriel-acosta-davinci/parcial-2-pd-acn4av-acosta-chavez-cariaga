import { useState, useEffect } from "react";
import specialtiesData from "../data/odontologySpecialties.json";

export default function useOdontologySpecialties() {
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        setSpecialties(specialtiesData);
    }, []);

    return { specialties };
}
