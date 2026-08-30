import { canciones } from "./canciones.js";

import {
    crearContadorConsultas,
    cargarCanciones,
    filtrarPorMood,
    calcularEnergiaPromedio,
    combinarCanciones
} from "./playlist.js";

async function main() {

    console.log(
        "=== Playlist de Canciones (versión JavaScript) ===\n"
    );

    const contador = crearContadorConsultas();

    contador.registrar();
    contador.registrar();

    console.log(
        `Consultas registradas: ${contador.registrar()}`
    );

    const cancionesCargadas =
        await cargarCanciones(canciones);

    console.log(
        `\nCanciones cargadas: ${cancionesCargadas.length}`
    );

    const euforicas =
        filtrarPorMood(
            cancionesCargadas,
            "euforica"
        );

    console.log(
        `\nCanciones eufóricas: ${
            euforicas
                .map((cancion) => cancion.nombre)
                .join(", ")
        }`
    );

    const promedio =
        calcularEnergiaPromedio(
            cancionesCargadas
        );

    console.log(
        `Energía promedio de la playlist: ${promedio}`
    );

    const hibrida =
        combinarCanciones(
            cancionesCargadas[0],
            cancionesCargadas[2]
        );

    console.log("\nCanción híbrida generada:");

    console.log(hibrida);
}

main();