import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/Login", element: <Login /> },
    { path: "/About", element: <About /> },
    { path: "/Contact", element: <Contact /> },
];

export default routes;
