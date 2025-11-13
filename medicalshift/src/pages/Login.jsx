import { useState } from "react";
import loginImage from "../assets/login-image.jpg";
import logo from "../assets/logo.png";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import RecoveryForm from "../components/RecoveryForm";

export default function Login() {
    const [activeForm, setActiveForm] = useState("login"); // "login", "register", "recovery"

    return (
        <div className="flex h-screen">
            {/* Sección izquierda */}
            <div className="w-1/2 flex justify-center items-center bg-gradient-to-br from-gray-100 to-white">
                <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md transition-all duration-500">
                    {/* Logo + título */}
                    <div className="flex items-center gap-4 mb-6">
                        <img src={logo} alt="Logo Medicalshift" className="h-12 w-12 object-contain" />
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold text-sky-500 leading-tight">Medicalshift</h1>
                            <p className="text-sm text-gray-500">COBERTURA MÉDICA</p>
                        </div>
                    </div>

                    {/* Formulario dinámico */}
                    <div className="min-h-[360px] flex items-center justify-center transition-all duration-500">
                        <div className="w-full">
                            {activeForm === "login" && <LoginForm onSwitch={setActiveForm} />}
                            {activeForm === "register" && <RegisterForm onSwitch={setActiveForm} />}
                            {activeForm === "recovery" && <RecoveryForm onSwitch={setActiveForm} />}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección derecha */}
            <div className="w-1/2 relative">
                <img src={loginImage} alt="Bienvenida" className="object-cover w-full h-full" />
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
