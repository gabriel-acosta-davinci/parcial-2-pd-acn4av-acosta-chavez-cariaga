import { useState } from "react";
import Header from "../components/Header";
import AboutNavbar from "../components/AboutNavbar";
import Nosotros from "../components/AboutUs";
import WhereWeComeFrom from "../components/WhereWeComeFrom.jsx";
import AssociativeGroup from "../components/AssociativeGroup.jsx";
import Cooperativism from "../components/Cooperativism.jsx";
import Sustainability from "../components/Sustainability.jsx";
import AboutImage from "../assets/about/about-us.png";
import AboutUs from "../components/AboutUs.jsx";

export default function About() {
    const [active, setActive] = useState("Nosotros");

    const renderSection = () => {
        switch (active) {
            case "Nosotros":
                return <AboutUs />;
            case "De dónde venimos":
                return <WhereWeComeFrom />;
            case "Grupo asociativo":
                return <AssociativeGroup />;
            case "Cooperativismo":
                return <Cooperativism />;
            case "Sostenibilidad":
                return <Sustainability />;
            default:
                return <Nosotros />;
        }
    };

    return (
        <div>
            <Header
                image={AboutImage}
                title="Quiénes somos"
                subtitle="Conocé nuestra historia, valores y compromiso"
            />
            <AboutNavbar active={active} setActive={setActive} />
            <div className="max-w-5xl mx-auto">{renderSection()}</div>
        </div>
    );
}
