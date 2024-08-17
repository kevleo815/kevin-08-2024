import type { Evolution, Pokemon, PokemonList } from "@/interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";
import { pokemonAPI } from "../apis";

export const pokemonStore = defineStore(('pokemonStore'), () => {
    /** 
     * @description: Aqui se van a presentar el store de los pokemons empezando por los states.
    */

    const pokemon = ref<Pokemon | null>(null);
    const pokemonList = ref<PokemonList | null>(null);
    const myTeam = ref<Pokemon[]>([]);
    const evolutions = ref<Pokemon[]>([]);

    const totalPokemons = ref<number>(0);
    const currentPage = ref<number>(1);
    const itemsPerPage = ref<number>(10);

    /**
     * @description: vamos a realizar los setters y getters de los pokemons.
     */

    /**
     * @description: Este metodo se encarga de obtener los pokemons.
     * @param pokemonData 
     */


    function setPokemon(pokemonData: Pokemon | null) {
        pokemon.value = pokemonData;
    }

    /**
     * @description: Este metodo se encarga de obtener los pokemons.
     * @param pokemonData 
     */

    function setPokemonList(pokemonData: PokemonList | null) {
        pokemonList.value = pokemonData;
    }

    const setEvolutions = (data: Pokemon[]) => {
        evolutions.value = data
    }


    const addPokemonToTeam = (pokemon: Pokemon) => {
        myTeam.value.push(pokemon);
    }

    const removePokemonFromTeam = (pokemon: Pokemon) => {
        const index = myTeam.value.findIndex((poke) => poke.id === pokemon.id);
        if (index !== -1) {
            myTeam.value.splice(index, 1);
        }
    }

    const setCurrentPage = (page: number) => {
        currentPage.value = page;
    }

    const setTotalPokemons = (total: number) => {
        totalPokemons.value = total;
    }

    const setItemsPerPage = (items: number) => {
        itemsPerPage.value = items;
    }


    /**
     * @description: Este metodo se encarga de obtener el pokemon.
     * @returns 
     */

    function getPokemon() {
        return pokemon.value;
    }


    /**
     * @description: Este metodo se encarga de obtener los pokemons.
     * @returns 
     */

    function getPokemonList() {
        return pokemonList.value;
    }


    /**
     * Aqui se van a presentar los actions que se comunican con el api de pokemon.
     */

    /**
     * @description: Este metodo se encarga de obtener todos los pokemons.
     * @return { Promise<PokemonList> } 
     */


    const getAllPokemons = async (offset: number = 0, itemsPerPage: number = 2): Promise<PokemonList> => {
        try {
            const resp = await pokemonAPI.get<PokemonList>(`/pokemon?offset=${offset}&limit=${itemsPerPage}`);
            return resp.data;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * @description: Funcion que se encarga de traer la imagen de un pokemon por su name.
     * @param name
     * @returns { Promise<string> }
     */

    const getPokemonByName = async (name: string): Promise<Pokemon> => {
        try {
            const resp = await pokemonAPI.get<Pokemon>(`/pokemon/${name}`);
            return resp.data;
        } catch (error: any) {
            throw error;
        }
    }


    /**
     * @description: El siguiente metodo se encarga de obtener la especie de un pokemon.
     * @param id:number
     * 
     */

    const getPokemonSpecies = async (id: number): Promise<string> => {
        try {
            const resp = await pokemonAPI.get<any>(`/pokemon-species/${id}`);
            return resp.data.evolution_chain.url;
        } catch (error: any) {
            throw error;
        }
    }


    /**
     * @description: El siguiente metodo se encarga de obtener las evoluciones de un pokemon.
     * @param id:number
     * @returns { Promise<Evolution> }
     */

    const getEvolutions = async (id: string): Promise<Evolution> => {
        try {
            const resp = await pokemonAPI.get<Evolution>(`/evolution-chain/${id}`);
            return resp.data;
        } catch (error: any) {
            throw error;
        }
    }






    return {
        //state
        currentPage,
        totalPokemons,
        evolutions,
        pokemonList,
        pokemon,
        myTeam,
        itemsPerPage,
        //getters
        getPokemon,
        getPokemonList,
        setEvolutions,
        //setters
        setPokemon,
        setPokemonList,
        addPokemonToTeam,
        removePokemonFromTeam,
        setCurrentPage,
        setTotalPokemons,
        setItemsPerPage,
        //actions
        getAllPokemons,
        getPokemonByName,
        getEvolutions,
        getPokemonSpecies

    }


})