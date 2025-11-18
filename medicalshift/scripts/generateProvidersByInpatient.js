import fs from "fs";
import path from "path";

// Cargar datos base
const specialties = JSON.parse(
    fs.readFileSync(path.resolve("src/data/inpatientSpecialties.json"), "utf-8")
);
const localidadesPorProvincia = JSON.parse(
    fs.readFileSync(path.resolve("src/data/localidades.json"), "utf-8")
);

// Seeds
const seedProviders = {
    "Mar del Plata": [
        {
            nombre: "Clínica del Mar",
            direccion: "Av. Independencia 1500",
            telefono: "223-4800201"
        }
    ],
    "La Plata": [
        {
            nombre: "Sanatorio Platense",
            direccion: "Calle 8 N°456",
            telefono: "221-4800202"
        }
    ],
    "Rosario": [
        {
            nombre: "Instituto de Internación Rosario",
            direccion: "Bv. Oroño 3000",
            telefono: "341-4800203"
        }
    ],
    "Córdoba": [
        {
            nombre: "Clínica Mediterránea",
            direccion: "Av. Colón 3500",
            telefono: "351-4800204"
        }
    ],
    "Mendoza": [
        {
            nombre: "Hospital Central Mendoza",
            direccion: "Av. San Martín 789",
            telefono: "261-4800205"
        }
    ],
    "San Miguel de Tucumán": [
        {
            nombre: "Centro de Internación Tucumán",
            direccion: "25 de Mayo 987",
            telefono: "381-4800206"
        }
    ],
    "Bahía Blanca": [
    {
        nombre: "Sanatorio Bahía",
        direccion: "Av. Alem 654",
        telefono: "291-4800207"
    }
    ],
    "Posadas": [
    {
        nombre: "Clínica Misiones",
        direccion: "Av. Mitre 789",
        telefono: "376-4800208"
    }
    ],
    "Neuquén": [
    {
        nombre: "Internación Neuquén",
        direccion: "Av. Argentina 1200",
        telefono: "299-4800209"
    }
    ],
    "Salta": [
    {
        nombre: "Clínica Salta Norte",
        direccion: "Calle España 456",
        telefono: "387-4800210"
    }
    ],
    "Santa Fe": [
    {
        nombre: "Hospital Santa Fe",
        direccion: "Av. Aristóbulo del Valle 789",
        telefono: "342-4800211"
    }
    ],
    "Río Gallegos": [
    {
        nombre: "Internación Austral",
        direccion: "Av. Kirchner 987",
        telefono: "2966-4800212"
    }
    ],
    "San Juan": [
    {
        nombre: "Clínica San Juan",
        direccion: "Av. Libertador 789",
        telefono: "264-4800213"
    }
    ],
    "Formosa": [
    {
        nombre: "Centro Psiquiátrico Formosa",
        direccion: "Av. 25 de Mayo 654",
        telefono: "370-4800214"
    }
    ],
    "Ushuaia": [
    {
        nombre: "Clínica Fueguina de Internación",
        direccion: "Av. Maipú 789",
        telefono: "2901-4800215"
    }
    ]
};

// Generador
function buildProvidersByInpatient() {
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
const providersByInpatient = buildProvidersByInpatient();
fs.writeFileSync(
    path.resolve("src/data/providersByInpatient.json"),
    JSON.stringify(providersByInpatient, null, 2),
    "utf-8"
);

console.log("providersByInpatient.json generado con éxito.");
