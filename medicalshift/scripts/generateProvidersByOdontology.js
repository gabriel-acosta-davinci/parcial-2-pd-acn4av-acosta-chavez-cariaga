import fs from "fs";
import path from "path";

// Cargar datos base
const specialties = JSON.parse(
    fs.readFileSync(path.resolve("src/data/odontologySpecialties.json"), "utf-8")
);
const localidadesPorProvincia = JSON.parse(
    fs.readFileSync(path.resolve("src/data/localidades.json"), "utf-8")
);

// Seeds
const seedProviders = {
    "Mar del Plata": [
        {
            nombre: "Clínica Dental Atlántico",
            direccion: "Av. Independencia 1200",
            telefono: "223-4800301"
        }
    ],
    "La Plata": [
        {
            nombre: "Odontología Integral La Plata",
            direccion: "Calle 10 N°456",
            telefono: "221-4800302"
        }
    ],
    "Rosario": [
        {
            nombre: "Centro Odontológico Rosario",
            direccion: "Bv. Oroño 2100",
            telefono: "341-4800303"
        }
    ],
    "Córdoba": [
        {
            nombre: "Consultorio Dental Córdoba",
            direccion: "Av. Colón 2800",
            telefono: "351-4800304"
        }
    ],
    "Mendoza": [
        {
            nombre: "Clínica Odontológica Mendoza",
            direccion: "Av. San Martín 600",
            telefono: "261-4800305"
        }
    ],
    "San Miguel de Tucumán": [
        {
            nombre: "Odontología Tucumán",
            direccion: "25 de Mayo 850",
            telefono: "381-4800306"
        }
    ],
    "Bahía Blanca": [
    {
        nombre: "Centro Dental Bahía",
        direccion: "Av. Alem 400",
        telefono: "291-4800307"
    }
    ],
    "Posadas": [
    {
        nombre: "Clínica Dental Misiones",
        direccion: "Av. Mitre 700",
        telefono: "376-4800308"
    }
    ],
    "Neuquén": [
    {
        nombre: "Odontología Neuquén",
        direccion: "Av. Argentina 1100",
        telefono: "299-4800309"
    }
    ],
    "Salta": [
    {
        nombre: "Consultorio Dental Salta",
        direccion: "Calle España 500",
        telefono: "387-4800310"
    }
    ],
    "Santa Fe": [
    {
        nombre: "Clínica Dental Santa Fe",
        direccion: "Av. Aristóbulo del Valle 600",
        telefono: "342-4800311"
    }
    ],
    "Río Gallegos": [
    {
        nombre: "Odontología Austral",
        direccion: "Av. Kirchner 850",
        telefono: "2966-4800312"
    }
    ],
    "San Juan": [
    {
        nombre: "Centro Dental San Juan",
        direccion: "Av. Libertador 700",
        telefono: "264-4800313"
    }
    ],
    "Formosa": [
    {
        nombre: "Clínica Dental Formosa",
        direccion: "Av. 25 de Mayo 500",
        telefono: "370-4800314"
    }
    ],
    "Ushuaia": [
    {
        nombre: "Odontología Fueguina",
        direccion: "Av. Maipú 600",
        telefono: "2901-4800315"
    }
    ]
};

// Generador
function buildProvidersByOdontology() {
    const result = {};

    Object.values(localidadesPorProvincia).forEach((localidades) => {
        localidades.forEach((localidad) => {
            result[localidad] = {};

            specialties.forEach((spec) => {
                const base = (seedProviders[localidad] || []).slice(0, 1);

                if (base.length > 0) {
                    result[localidad][spec] = base;
                } else {
                    result[localidad][spec] = "Servicio no disponible aún";
                }
            });
        });
    });

    return result;
}

// Guardar archivo
const providersByOdontology = buildProvidersByOdontology();
fs.writeFileSync(
    path.resolve("src/data/providersByOdontology.json"),
    JSON.stringify(providersByOdontology, null, 2),
    "utf-8"
);

console.log("providersByOdontology.json generado con éxito.");
