import { useEffect, useState } from "react";

export default function useLocalidades() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("../src/data/localidades.json")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al cargar localidades:", err);
                setLoading(false);
            });
    }, []);

    return { localidadesPorProvincia: data, loading };
}
