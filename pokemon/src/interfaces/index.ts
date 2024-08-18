/**
 * @description: Este archivo se encarga de exportar todas las interfaces que son utilizadas en el proyecto.
 * 
 */

export interface MenuItem {
    text: string;
    link?: string;
    name?: string;
    icon?: string;
}


export interface Pokemon {
    id: number;
    name: string;
    types?: {
        slot: number;
        type: {
            name: string;
            url: string;
        }
    }[];
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
    results: DetailListPokemon[];
}

export interface DetailListPokemon {
    name: string;
    url: string;
    image?: string;
    pokemon: Pokemon;
    selected?: boolean;
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

export interface Evolution {
    id: number,
    baby_trigger_item: any,
    chain: Chain,
}

export interface Chain {
    evolution_details: any,
    evolves_to: Chain[],
    species: {
        name: string;
        url: string;
    }
}