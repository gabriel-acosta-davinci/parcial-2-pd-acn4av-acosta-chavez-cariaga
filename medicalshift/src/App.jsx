import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuotationFormModal from "./components/QuotationFormModal";
import ConfirmationModal from "./components/ConfirmationModal";
import { publicRoutes, isolatedRoutes } from "./routes";
import { useState } from "react";
import "./App.css";

function App() {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleCotizarSubmit = () => {
        setShowModal(false);
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 3000);
    };

    // Detectar si la ruta actual es aislada
    const isIsolated = isolatedRoutes.some((r) => r.path === location.pathname);

    return (
        <div className="App flex flex-col min-h-screen">
            {!isIsolated && <Navbar onQuoteClick={() => setShowModal(true)} />}

            {showModal && (
                <QuotationFormModal
                    onClose={() => setShowModal(false)}
                    onSubmit={handleCotizarSubmit}
                />
            )}
            {showConfirmation && <ConfirmationModal />}

            <div className="flex-grow">
                <Routes>
                    {[...publicRoutes, ...isolatedRoutes].map((route, i) => (
                        <Route key={i} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </div>

            {!isIsolated && <Footer />}
        </div>
    );
}

export default App;
