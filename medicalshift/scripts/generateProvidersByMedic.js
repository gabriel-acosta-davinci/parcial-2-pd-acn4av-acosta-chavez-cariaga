import fs from "fs";
import path from "path";

// Cargamos specialties y localidades
const specialties = JSON.parse(
    fs.readFileSync(path.resolve("src/data/medicSpecialties.json"), "utf-8")
);
const localidadesPorProvincia = JSON.parse(
    fs.readFileSync(path.resolve("src/data/localidades.json"), "utf-8")
);

// Seeds iniciales: 15 ejemplos distribuidos en distintas localidades/especialidades
const seedProviders = {
    "Mar del Plata": [
        {
            nombre: "Clínica del Corazón Atlántico",
            direccion: "Av. Independencia 1234, Mar del Plata",
            telefono: "223-4000000",
        },
    ],
    "La Plata": [
        {
            nombre: "Consultorio Pediátrico La Plata",
            direccion: "Calle 12 N°456, La Plata",
            telefono: "221-4000001",
        },
    ],
    Rosario: [
        {
            nombre: "Instituto Neurológico Rosario",
            direccion: "Bv. Oroño 789, Rosario",
            telefono: "341-4000002",
        },
    ],
    Cordoba: [
        {
            nombre: "Centro Dermatológico Córdoba",
            direccion: "Av. Colón 1500, Córdoba",
            telefono: "351-4000003",
        },
    ],
    "Bahia Blanca": [
        {
            nombre: "Consultorio Urológico Bahía Blanca",
            direccion: "Av. Alem 200, Bahía Blanca",
            telefono: "291-4000004",
        },
    ],
    Mendoza: [
        {
            nombre: "Instituto Oncológico Mendoza",
            direccion: "Av. San Martín 300, Mendoza",
            telefono: "261-4000005",
        },
    ],
    "San Miguel de Tucuman": [
        {
            nombre: "Centro Endocrinológico Tucumán",
            direccion: "Calle 25 de Mayo 400, San Miguel de Tucumán",
            telefono: "381-4000006",
        },
    ],
    Posadas: [
        {
            nombre: "Clínica Gastroenterológica Posadas",
            direccion: "Av. Mitre 500, Posadas",
            telefono: "376-4000007",
        },
    ],
    Neuquen: [
        {
            nombre: "Centro Traumatológico Neuquén",
            direccion: "Av. Argentina 600, Neuquén",
            telefono: "299-4000008",
        },
    ],
    Salta: [
        {
            nombre: "Instituto Oftalmológico Salta",
            direccion: "Calle España 700, Salta",
            telefono: "387-4000009",
        },
    ],
    "Santa Fe": [
        {
            nombre: "Centro Hematológico Santa Fe",
            direccion: "Av. Aristóbulo del Valle 800, Santa Fe",
            telefono: "342-4000010",
        },
    ],
    "Rio Gallegos": [
        {
            nombre: "Consultorio Ginecológico Río Gallegos",
            direccion: "Av. Kirchner 900, Río Gallegos",
            telefono: "2966-4000011",
        },
    ],
    "San Juan": [
        {
            nombre: "Instituto Psiquiátrico San Juan",
            direccion: "Av. Libertador 1000, San Juan",
            telefono: "264-4000012",
        },
    ],
    Formosa: [
        {
            nombre: "Centro de Alergia e Inmunología Formosa",
            direccion: "Av. 25 de Mayo 1100, Formosa",
            telefono: "370-4000013",
        },
    ],
    Ushuaia: [
        {
            nombre: "Hospital Regional Ushuaia - Cirugía",
            direccion: "Av. Maipú 1200, Ushuaia",
            telefono: "2901-4000014",
        },
    ],
};

// Función generadora
function buildProvidersByLocality() {
    const result = {};

    Object.values(localidadesPorProvincia).forEach((localidades) => {
        localidades.forEach((localidad) => {
            result[localidad] = {};

            specialties.forEach((spec) => {
                // Si hay seeds para la localidad, los usamos en todas las especialidades
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

// Generamos el archivo JSON
const providersByLocality = buildProvidersByLocality();
fs.writeFileSync(
    path.resolve("src/data/providersByMedic.json"),
    JSON.stringify(providersByLocality, null, 2),
    "utf-8"
);

console.log("providersByMedic.json generado con éxito.");
