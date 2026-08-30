import { Mood, GeneroMusical } from "./types.js";

export const moods: Record<string, Mood> = {
    curiosa: "curiosa",
    melancolica: "melancolica",
    euforica: "euforica",
    serena: "serena", 
    resignada: "resignada"
};

export const generos: Record<string, GeneroMusical> = {
    rockAlternativo: "Rock alternativo",
    kpop: "K-pop",
    postHardcore: "Post-hardcore",
    urbanoLatino: "Urbano latino",
    hipHop: "Hip-hop"
};