import fs from "fs";
import path from "path";

// Cargar datos base
const specialties = JSON.parse(
    fs.readFileSync(path.resolve("src/data/diagnosticSpecialties.json"), "utf-8")
);
const localidadesPorProvincia = JSON.parse(
    fs.readFileSync(path.resolve("src/data/localidades.json"), "utf-8")
);

// Seeds reales/ficticios
const seedProviders = {
    "Mar del Plata": [
        {
            nombre: "Centro de Diagnóstico Atlántico",
            direccion: "Av. Independencia 1450",
            telefono: "223-4800001"
        }
    ],
    "La Plata": [
        {
            nombre: "Diagnóstico La Plata",
            direccion: "Calle 7 N°123",
            telefono: "221-4800002"
        }
    ],
    Rosario: [
        {
            nombre: "Imagen Diagnóstica Rosario",
            direccion: "Bv. Oroño 2345",
            telefono: "341-4800003"
        }
    ],
    Córdoba: [
        {
            nombre: "Centro Médico Córdoba",
            direccion: "Av. Colón 3000",
            telefono: "351-4800004"
        }
    ],
    Mendoza: [
        {
            nombre: "Diagnóstico por Imágenes Mendoza",
            direccion: "Av. San Martín 456",
            telefono: "261-4800005"
        }
    ],
    "San Miguel de Tucumán": [
        {
            nombre: "Clínica de Diagnóstico Tucumán",
            direccion: "Calle 25 de Mayo 789",
            telefono: "381-4800006"
        }
    ],
    "Bahía Blanca": [
    {
        nombre: "Centro Radiológico Bahía",
        direccion: "Av. Alem 321",
        telefono: "291-4800007"
    }
    ],
    "Posadas": [
    {
        nombre: "Diagnóstico Misiones",
        direccion: "Av. Mitre 654",
        telefono: "376-4800008"
    }
    ],
    "Neuquén": [
    {
        nombre: "Centro de Rehabilitación Neuquén",
        direccion: "Av. Argentina 987",
        telefono: "299-4800009"
    }
    ],
    "Salta": [
    {
        nombre: "EcoSalta",
        direccion: "Calle España 321",
        telefono: "387-4800010"
    }
    ],
    "Santa Fe": [
    {
        nombre: "Laboratorio Santa Fe",
        direccion: "Av. Aristóbulo del Valle 456",
        telefono: "342-4800011"
    }
    ],
    "Río Gallegos": [
    {
        nombre: "Diagnóstico Austral",
        direccion: "Av. Kirchner 789",
        telefono: "2966-4800012"
    }
    ],
    "San Juan": [
    {
        nombre: "Centro de Rehabilitación San Juan",
        direccion: "Av. Libertador 654",
        telefono: "264-4800013"
    }
    ],
    Formosa: [
    {
        nombre: "Diagnóstico Integral Formosa",
        direccion: "Av. 25 de Mayo 321",
        telefono: "370-4800014"
    }
    ],
    Ushuaia: [
    {
        nombre: "Clínica Fueguina de Diagnóstico",
        direccion: "Av. Maipú 456",
        telefono: "2901-4800015"
    }
    ]
};

// Generador
function buildProvidersByDiagnostic() {
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
const providersByDiagnostic = buildProvidersByDiagnostic();
fs.writeFileSync(
    path.resolve("src/data/providersByDiagnostic.json"),
    JSON.stringify(providersByDiagnostic, null, 2),
    "utf-8"
);

console.log("providersByDiagnostic.json generado con éxito.");
