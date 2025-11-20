export default function FilterCard({ icon, label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center w-56 h-28 bg-white rounded-lg shadow hover:shadow-md transition p-2 border border-gray-200 hover:border-sky-500"
        >
            <span className="text-sm font-medium text-gray-700 text-center mb-2">{label}</span>
            <img src={icon} alt={label} className="w-10 h-10 mb-2" />
        </button>
    );
}
