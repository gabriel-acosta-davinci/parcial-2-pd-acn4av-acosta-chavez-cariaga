import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuotationFormModal from "./components/QuotationFormModal";
import ConfirmationModal from "./components/ConfirmationModal";
import routes from "./routes";
import { useState } from "react";
import "./App.css";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleCotizarSubmit = () => {
        setShowModal(false);
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 3000);
    };

    return (
        <div className="App flex flex-col min-h-screen">
            <Navbar onQuoteClick={() => setShowModal(true)} />

            {showModal && (
                <QuotationFormModal
                    onClose={() => setShowModal(false)}
                    onSubmit={handleCotizarSubmit}
                />
            )}
            {showConfirmation && <ConfirmationModal />}

            {/* Contenido principal */}
            <div className="flex-grow">
                <Routes>
                    {routes.map((route, i) => (
                        <Route key={i} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
