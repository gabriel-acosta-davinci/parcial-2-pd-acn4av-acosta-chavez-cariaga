import HeaderCarousel from "../components/Home/HeaderCarousel.jsx";
import LoginHighlight from "../components/Home/LoginHighlight.jsx";

export default function Home() {
    return (
        <main className="animate-fade-in">
            <HeaderCarousel />
            <LoginHighlight />
        </main>
    );
}