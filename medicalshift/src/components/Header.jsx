export default function Header({ image, title, subtitle }) {
    return (
        <header
            className="relative w-full h-full py-56 flex flex-col items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 pt-[64px]">
                <h1 className="text-5xl font-bold">{title}</h1>
                {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
            </div>
        </header>
    );
}
