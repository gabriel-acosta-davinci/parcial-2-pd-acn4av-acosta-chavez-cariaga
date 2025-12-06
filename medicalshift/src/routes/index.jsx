import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MedicalDirectory from "../pages/MedicalDirectory";
import Plans from "../pages/Plans";
import Download from "../pages/Download.jsx";
import NotFound from "../pages/NotFound.jsx";

export const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/About", element: <About /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/MedicalDirectory", element: <MedicalDirectory /> },
    { path: "/Plans", element: <Plans /> },
    { path: "/Download", element: <Download /> },
    { path: "/*", element: <NotFound /> },
];

export const isolatedRoutes = [
    { path: "/Login", element: <Login /> },
];
