import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginImage from "../assets/login-image.jpg";
import logo from "../assets/logo.png";
import googleLogo from "../assets/google.png";
import facebookLogo from "../assets/facebook.png";

export default function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ identifier: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de autenticación con backend
        console.log("Login con:", form);
        navigate("/home"); // Redirige al home tras login exitoso
    };

    return (
        <div className="flex h-screen">
            {/* Sección izquierda: card con formulario */}
            <div className="w-1/2 flex justify-center items-center bg-gradient-to-br from-gray-100 to-white">
                <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md">
                    {/* Logo + título */}
                    <div className="flex items-center gap-4 mb-6">
                        <img src={logo} alt="Logo Medicalshift" className="h-12 w-12 object-contain" />
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold text-sky-500 leading-tight">Medicalshift</h1>
                            <p className="text-sm text-gray-500">COBERTURA MÉDICA</p>
                        </div>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="identifier"
                            placeholder="Ingrese DNI/Email"
                            value={form.identifier}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Ingrese contraseña"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600"
                        >
                            Ingresar
                        </button>
                        <div className="text-right text-sm text-sky-500 hover:underline cursor-pointer">
                            Olvidé mi contraseña
                        </div>
                    </form>

                    {/* Botones sociales */}
                    <div className="mt-6 text-sm text-gray-600 text-center">
                        Por ser asociado, podés ingresar con:
                        <div className="flex flex-col items-center gap-3 mt-4">
                            <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-md shadow hover:shadow-md w-full justify-center">
                                <img src={googleLogo} alt="Google" className="h-5 w-5" />
                                <span className="text-gray-700 font-medium">Ingresar con Google</span>
                            </button>
                            <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-md shadow hover:shadow-md w-full justify-center">
                                <img src={facebookLogo} alt="Facebook" className="h-5 w-5" />
                                <span className="text-gray-700 font-medium">Ingresar con Facebook</span>
                            </button>
                        </div>
                    </div>

                    {/* Link de registro */}
                    <div className="mt-6 text-sm text-gray-600 text-center">
                        ¿No tenés cuenta de autogestión?{" "}
                        <span className="text-sky-500 hover:underline cursor-pointer">Crear Cuenta</span>
                    </div>
                </div>
            </div>

            {/* Sección derecha: imagen y mensaje */}
            <div className="w-1/2 relative">
                <img
                    src={loginImage}
                    alt="Bienvenida"
                    className="object-cover w-full h-full"
                />
                <div className="absolute bottom-10 left-10 text-white p-4 rounded-md">
                    <h2 className="text-4xl font-semibold">Bienvenido</h2>
                    <p className="text-3xl">Accedé a la información que necesitás, en cualquier momento y lugar.</p>
                </div>
                <div className="absolute top-4 right-4 text-white text-sm bg-sky-500/80 px-3 py-1 rounded-md">
                    ATENCIÓN TELEFÓNICA AL 0810 333 SALUD (78567)
                </div>
            </div>
        </div>
    );
}