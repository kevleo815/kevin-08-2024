import { computed } from "vue";
import { pokemonStore } from "../stores/pokemonStore";
import type { Pokemon, PokemonList } from "@/interfaces";

export function usePokemonStore() {
    const store = pokemonStore();

    //--------------------States--------------------//

    const pokemon = computed(() => store.pokemon);
    const pokemonList = computed(() => store.pokemonList);
    const myTeam = computed(() => store.myTeam);
    //--------------------setters--------------------//

    const setPokemon = (data: Pokemon | null) => {
        store.setPokemon(data);
    };

    const setPokemonList = (data: PokemonList | null) => {
        store.setPokemonList(data);
    };

    const addPokemonToTeam = (pokemon: Pokemon) => {
        store.addPokemonToTeam(pokemon);
    };

    const removePokemonFromTeam = (pokemon: Pokemon) => {
        store.removePokemonFromTeam(pokemon);
    };

    //--------------------Getters--------------------//

    const getPokemon = () => {
        return store.getPokemon();
    };

    const getPokemonList = () => {
        return store.getPokemonList();
    };


    //--------------------Actions--------------------//

    /**
     * @description: Este metodo se encarga de obtener todos los pokemons.
     * @returns
     */

    const addPokemonList = async () => {

        if (pokemonList) {
            pokemonList.value!.results.forEach(async (item) => {
                await store.getPokemonByName(item.name)
                    .then((response) => {
                        item.pokemon = response;
                        item.image = response.height?.toString() ?? 'no hay';
                    })
            });

        }
    };


    /**
     * @description: Este metodo se encarga de obtener todos los pokemons.
     * @returns
     */

    const getAllPokemons = async () => {
        await store.getAllPokemons()
            .then(async (response) => {
                setPokemonList(response);
                await addPokemonList();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    /**
     * @description: funcion que se ejecuta cuando se selecciona 6 pokemones.
     * @returns
     */

    const selectPokemon = (name: string) => {

        

    }





    return {
        pokemon,
        pokemonList,
        myTeam,
        setPokemon,
        setPokemonList,
        addPokemonToTeam,
        removePokemonFromTeam,
        getPokemon,
        getPokemonList,
        getAllPokemons,
        selectPokemon
    }

}