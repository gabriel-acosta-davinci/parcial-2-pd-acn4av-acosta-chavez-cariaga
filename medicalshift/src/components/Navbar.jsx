import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex gap-4">
                <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                <li><Link to="/Login" className="hover:text-blue-300">Log in</Link></li>
                <li><Link to="/About" className="hover:text-blue-300">About</Link></li>
                <li><Link to="/Contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
        </nav>
    );
}
