import googleIcon from "../../assets/social/google-play.png";
import appleIcon from "../../assets/social/app-store.png";

export default function DownloadHeader({ image, title, label1, button1, label2, button2 }) {
    return (
        <header
            className="relative w-full h-screen flex flex-col justify-center text-white px-6"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-5xl font-bold mb-8">{title}</h1>

                {/* Botones en fila alineados a la izquierda */}
                <div className="flex gap-4">
                    {/* Google Play */}
                    {button1 && (
                        <a
                            href={button1}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 bg-green-500/40 text-white font-medium rounded-full shadow-lg hover:bg-green-700/40 hover:scale-105 transition-transform"
                        >
                            <img src={googleIcon} alt="Google Play" className="w-6 h-6" />
                            {label1}
                        </a>
                    )}

                    {/* App Store */}
                    {button2 && (
                        <a
                            href={button2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 bg-sky-500/40 text-white font-medium rounded-full shadow-lg hover:bg-sky-700/40 hover:scale-105 transition-transform"
                        >
                            <img src={appleIcon} alt="App Store" className="w-6 h-6" />
                            {label2}
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}
