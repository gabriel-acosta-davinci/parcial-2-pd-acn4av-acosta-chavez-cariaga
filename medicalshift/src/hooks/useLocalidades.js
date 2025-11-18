import { useState, useEffect } from "react";
import localidadesData from "../data/localidades.json";

export default function useLocalidades() {
    const [provincias, setProvincias] = useState([]);
    const [localidades, setLocalidades] = useState([]);
    const [selectedProvincia, setSelectedProvincia] = useState("");
    const [selectedLocalidad, setSelectedLocalidad] = useState("");

    useEffect(() => {
        setProvincias(Object.keys(localidadesData));
    }, []);

    useEffect(() => {
        if (selectedProvincia) {
            setLocalidades(localidadesData[selectedProvincia] || []);
            setSelectedLocalidad("");
        } else {
            setLocalidades([]);
        }
    }, [selectedProvincia]);

    return {
        localidadesPorProvincia: localidadesData, // para ContactForm
        provincias,                               // para MedicalSearchForm
        localidades,
        selectedProvincia,
        selectedLocalidad,
        setSelectedProvincia,
        setSelectedLocalidad,
    };
}
