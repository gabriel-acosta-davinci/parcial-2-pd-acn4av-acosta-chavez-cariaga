import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MedicalDirectory from "../pages/MedicalDirectory";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/Login", element: <Login /> },
    { path: "/About", element: <About /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/MedicalDirectory", element: <MedicalDirectory /> },
];

export default routes;
