import HeaderCarousel from "../components/HeaderCarousel";
import LoginHighlight from "../components/LoginHighlight.jsx";

export default function Home() {
    return (
        <main className="animate-fade-in">
            <HeaderCarousel />
            <LoginHighlight />
        </main>
    );
}