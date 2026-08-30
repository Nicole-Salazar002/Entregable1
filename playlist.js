export function crearContadorConsultas() {
    let total = 0;

    return {
        registrar() {
            total += 1;
            return total;
        },

        obtenerTotal() {
            return total;
        }
    };
}

// Función de Orden Superior

export function filtrarPorMood(lista, mood) {
    return lista.filter((cancion) => cancion.mood === mood);
}

export function calcularEnergiaPromedio(lista) {
    if (lista.length === 0) {
        return 0;
    }

    const suma = lista.reduce(
        (acumulado, cancion) => acumulado + cancion.energia,
        0
    );

    return Math.round(suma / lista.length);
}

export function combinarCanciones(cancionA, cancionB) {

    const {
        energia: energiaA,
        ...restoA
    } = cancionA;

    const {
        energia: energiaB
    } = cancionB;

    return {
        ...restoA,
        ...cancionB,

        id: `${cancionA.id}-${cancionB.id}`,

        nombre: `${cancionA.nombre} + ${cancionB.nombre}`,

        energia: Math.round(
            (energiaA + energiaB) / 2
        ),

        mood: cancionA.mood,

        género: cancionA.género
    };
}

// Promesa

function simularCargaCancion(cancion) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (!cancion || !cancion.mood) {

                reject(
                    new Error(
                        `Canción inválida (id: ${cancion?.id})`
                    )
                );

                return;
            }

            resolve(cancion);

        }, 200);

    });
}

// Async y Await

export async function cargarCanciones(lista) {

    try {

        const cancionesCargadas = await Promise.all(
            lista.map((cancion) =>
                simularCargaCancion(cancion)
            )
        );

        return cancionesCargadas;

    } catch (error) {

        console.error(
            "No se pudieron cargar las canciones:",
            error.message
        );

        return [];
    }
}