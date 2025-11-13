export default function RecoveryForm({ onSwitch }) {
    return (
        <div className="w-full space-y-6 animate-fade-in">
            <form className="space-y-4">
                <input type="text" placeholder="Número de documento" className="w-full px-4 py-2 border rounded-md" />
                <input type="email" placeholder="Email asociado a tu cuenta" className="w-full px-4 py-2 border rounded-md" />
                <button type="submit" className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600">
                    Recuperar contraseña
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