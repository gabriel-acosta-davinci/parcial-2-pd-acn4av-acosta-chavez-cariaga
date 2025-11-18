import fs from "fs";
import path from "path";

// Cargar datos base
const specialties = JSON.parse(
    fs.readFileSync(path.resolve("src/data/urgencySpecialties.json"), "utf-8")
);
const localidadesPorProvincia = JSON.parse(
    fs.readFileSync(path.resolve("src/data/localidades.json"), "utf-8")
);

// Seeds
const seedProviders = {
    "Mar del Plata": [
        {
            nombre: "Guardia Clínica Atlántico",
            direccion: "Av. Independencia 1450",
            telefono: "223-4800101"
        }
    ],
    "La Plata": [
        {
            nombre: "Emergencias La Plata",
            direccion: "Calle 7 N°321",
            telefono: "221-4800102"
        }
    ],
    "Rosario": [
        {
            nombre: "Guardia Médica Rosario",
            direccion: "Bv. Oroño 2345",
            telefono: "341-4800103"
        }
    ],
    "Córdoba": [
        {
            nombre: "Urgencias Córdoba",
            direccion: "Av. Colón 3000",
            telefono: "351-4800104"
        }
    ],
    "Mendoza": [
        {
            nombre: "Centro de Guardia Mendoza",
            direccion: "Av. San Martín 456",
            telefono: "261-4800105"
        }
    ],
    "San Miguel de Tucumán": [
        {
            nombre: "Clínica de Guardia Tucumán",
            direccion: "25 de Mayo 789",
            telefono: "381-4800106"
        }
    ],
    "Bahía Blanca": [
    {
        nombre: "Emergencias Bahía",
        direccion: "Av. Alem 321",
        telefono: "291-4800107"
    }
    ],
    "Posadas": [
    {
        nombre: "Guardia Misiones",
        direccion: "Av. Mitre 654",
        telefono: "376-4800108"
    }
    ],
    "Neuquén": [
    {
        nombre: "Urgencias Neuquén",
        direccion: "Av. Argentina 987",
        telefono: "299-4800109"
    }
    ],
    "Salta": [
    {
        nombre: "Guardia Salta",
        direccion: "Calle España 321",
        telefono: "387-4800110"
    }
    ],
    "Santa Fe": [
    {
        nombre: "Emergencias Santa Fe",
        direccion: "Av. Aristóbulo del Valle 456",
        telefono: "342-4800111"
    }
    ],
    "Río Gallegos": [
    {
        nombre: "Guardia Austral",
        direccion: "Av. Kirchner 789",
        telefono: "2966-4800112"
    }
    ],
    "San Juan": [
    {
        nombre: "Urgencias San Juan",
        direccion: "Av. Libertador 654",
        telefono: "264-4800113"
    }
    ],
    "Formosa": [
    {
        nombre: "Guardia Integral Formosa",
        direccion: "Av. 25 de Mayo 321",
        telefono: "370-4800114"
    }
    ],
    "Ushuaia": [
    {
        nombre: "Clínica Fueguina de Guardia",
        direccion: "Av. Maipú 456",
        telefono: "2901-4800115"
    }
    ]
};

// Generador
function buildProvidersByUrgency() {
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
const providersByUrgency = buildProvidersByUrgency();
fs.writeFileSync(
    path.resolve("src/data/providersByUrgency.json"),
    JSON.stringify(providersByUrgency, null, 2),
    "utf-8"
);

console.log("providersByUrgency.json generado con éxito.");
