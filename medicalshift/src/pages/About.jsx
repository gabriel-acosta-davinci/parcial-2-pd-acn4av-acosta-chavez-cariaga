import { useState } from "react";
import Header from "../components/Header";
import AboutNavbar from "../components/About/AboutNavbar.jsx";
import Nosotros from "../components/About/AboutUs.jsx";
import WhereWeComeFrom from "../components/About/WhereWeComeFrom.jsx";
import AssociativeGroup from "../components/About/AssociativeGroup.jsx";
import Cooperativism from "../components/About/Cooperativism.jsx";
import Sustainability from "../components/About/Sustainability.jsx";
import AboutImage from "../assets/about/about-us.png";
import AboutUs from "../components/About/AboutUs.jsx";

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
