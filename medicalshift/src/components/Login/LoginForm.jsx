import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import googleLogo from "../../assets/social/google.png"
import facebookLogo from "../../assets/social/facebook.png"

export default function LoginForm({ onSwitch }) {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Determinar si es email o DNI
            const identifierType = identifier.includes("@") ? "email" : "documentNumber";
            
            await login(identifier, password, identifierType);
            
            // Redirigir a la ruta original si existe, o al dashboard por defecto
            const from = location.state?.from || "/dashboard";
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message || "Error al iniciar sesión. Verifique sus credenciales.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full space-y-6 animate-fade-in">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="identifier"
                    placeholder="Ingrese DNI/Email"
                    className="w-full px-4 py-2 border rounded-md"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                    disabled={loading}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Ingrese contraseña"
                    className="w-full px-4 py-2 border rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? "Ingresando..." : "Ingresar"}
                </button>
                <div
                    className="text-right text-sm text-sky-500 hover:underline cursor-pointer"
                    onClick={() => onSwitch("recovery")}
                >
                    Olvidé mi contraseña
                </div>
            </form>

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

            <div className="mt-6 text-sm text-gray-600 text-center">
                ¿No tenés cuenta de autogestión?{" "}
                <span
                    className="text-sky-500 hover:underline cursor-pointer"
                    onClick={() => onSwitch("register")}
                >
          Crear Cuenta
        </span>
            </div>
        </div>
    );
}