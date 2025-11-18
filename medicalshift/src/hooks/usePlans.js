import { useState, useEffect } from "react";
import plansData from "../data/plans.json";

export default function usePlans() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        // Aquí también simulamos un fetch, pero en realidad cargamos el JSON local
        setPlans(plansData);
    }, []);

    return { plans };
}
