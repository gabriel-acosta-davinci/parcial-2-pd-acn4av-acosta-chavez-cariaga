export default function RegisterForm({ onSwitch }) {
    return (
        <div className="w-full space-y-6 animate-fade-in">
            <form className="space-y-4">
                <input type="text" placeholder="Nombres" className="w-full px-4 py-2 border rounded-md" />
                <input type="text" placeholder="Apellidos" className="w-full px-4 py-2 border rounded-md" />
                <input type="text" placeholder="Número de asociado" className="w-full px-4 py-2 border rounded-md" />
                <input type="text" placeholder="Número de documento" className="w-full px-4 py-2 border rounded-md" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
                <input type="password" placeholder="Contraseña" className="w-full px-4 py-2 border rounded-md" />
                <button type="submit" className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600">
                    Crear Cuenta
                </button>
            </form>
            <div className="mt-6 text-sm text-gray-600 text-center">
                ¿Ya tenés cuenta?{" "}
                <span className="text-sky-500 hover:underline cursor-pointer" onClick={() => onSwitch("login")}>
          Iniciar sesión
        </span>
            </div>
        </div>
    );
}