// 1. Unión literal para representar el mood de las canciones
export type Mood = "curiosa" | "melancolica" | "euforica" | "serena" | "resignada";

// 2. Unión literal para los géneros
export type GeneroMusical = "Rock alternativo" | "K-pop" | "Post-hardcore" | "Urbano latino" | "Hip-hop" | "Emo/Rock";

// 3. Interface para definir la estructura de la canción
export interface Cancion {
    id: number | string;
    nombre: string;
    género: GeneroMusical;
    energia: number;
    mood: Mood;
}

// 4. Interface para el contador de consultas
export interface ContadorConsultas {
    registrar: () => number;
    obtenerTotal: () => number;
}