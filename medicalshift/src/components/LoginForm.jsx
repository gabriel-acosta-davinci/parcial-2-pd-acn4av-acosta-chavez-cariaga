import googleLogo from "../assets/social/google.png"
import facebookLogo from "../assets/social/facebook.png"

export default function LoginForm({ onSwitch }) {
    return (
        <div className="w-full space-y-6 animate-fade-in">
            <form className="space-y-4">
                <input
                    type="text"
                    name="identifier"
                    placeholder="Ingrese DNI/Email"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Ingrese contraseña"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600"
                >
                    Ingresar
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