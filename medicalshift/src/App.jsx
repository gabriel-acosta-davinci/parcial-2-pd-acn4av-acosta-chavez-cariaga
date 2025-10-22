import Navbar from "./Components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
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