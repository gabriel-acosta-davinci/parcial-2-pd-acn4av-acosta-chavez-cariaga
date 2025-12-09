import { useState } from "react";
import authService from "../../services/authService";

export default function RecoveryForm({ onSwitch }) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setLoading(true);

        try {
            await authService.recovery(email);
            setMessage("Si el email existe, se enviarán instrucciones de recuperación a tu correo.");
        } catch (err) {
            setError(err.message || "Error al solicitar recuperación. Por favor intente nuevamente.");
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
            {message && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    {message}
                </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email asociado a tu cuenta"
                    className="w-full px-4 py-2 border rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Recuperar contraseña"}
                </button>
            </form>
            <div className="mt-6 text-sm text-gray-600 text-center">
                ¿Recordaste tu contraseña?{" "}
                <span className="text-sky-500 hover:underline cursor-pointer" onClick={() => onSwitch("login")}>
                    Volver al login
                </span>
            </div>
        </div>
    );
}