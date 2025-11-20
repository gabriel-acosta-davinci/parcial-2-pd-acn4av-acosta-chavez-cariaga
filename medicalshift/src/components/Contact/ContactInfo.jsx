export default function ContactInfo() {
    return (
        <div className="flex flex-col justify-start gap-3 mt-24">
            <p className="text-gray-600 text-xl mb-4">
                En <b className="text-sky-500">Medicalshift</b> pensamos y actuamos en
                función de nuestros asociados. Con nuestra amplia gama de planes
                procuramos un modelo de atención personalizado. Si tenés alguna consulta
                podés escribirnos a través de nuestros formularios de contacto.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
                ¿Necesitás ayuda personalizada?
            </h3>
            <p className="text-gray-600 mb-4">
                Nuestro equipo está disponible para responder tus dudas sobre planes,
                cartilla médica y cobertura.
            </p>
            <p className="text-gray-600">
                También podés llamarnos al{" "}
                <span className="font-semibold text-sky-600">+54 9 223 555-1234</span>{" "}
                o escribirnos a{" "}
                <span className="font-semibold text-sky-600">
          info@medicalshift.com
        </span>
                .
            </p>
        </div>
    );
}
