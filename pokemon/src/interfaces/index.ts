/**
 * @description: Este archivo se encarga de exportar todas las interfaces que son utilizadas en el proyecto.
 * 
 */

export interface MenuItem {
    text: string;
    link?: string;
    name?: string;
}


export interface Pokemon {
    id: number;
    name: string;
    types?: string[];
    stats?: Stat[];
    cries?: Cries;
    height?: number;
    weight?: number;
    description?: string;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            }
        },
    },

}

export interface PokemonList {
    count: number;
    next: string;
    previous: string;
    results: {
        name: string;
        url: string;
        image?: string;
        pokemon?: Pokemon;
        selected?: boolean;
    }[];
}



export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url?: string;
    }
}

export interface Cries {
    latest: string;
    legacy: string;
}