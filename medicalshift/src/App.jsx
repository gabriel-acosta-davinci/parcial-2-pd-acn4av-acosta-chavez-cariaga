import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<h1 className="text-3xl p-4">Home Page</h1>} />
                <Route path="/Login" element={<Login />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;