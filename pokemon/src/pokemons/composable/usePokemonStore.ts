import { computed } from "vue";
import { pokemonStore } from "../stores/pokemonStore";
import type { Chain, Evolution, Pokemon, PokemonList } from "@/interfaces";

export function usePokemonStore() {
    const store = pokemonStore();

    //--------------------States--------------------//

    const pokemon = computed(() => store.pokemon);
    const pokemonList = computed(() => store.pokemonList);
    const myTeam = computed(() => store.myTeam);
    const evolutions = computed(() => store.evolutions);
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
     * @description: Este metodo se encarga de consultar las evolucioes de un pokemon.
     * @param id 
     * @returns {Evolution[]}
     * 
     */

    const getEvolutions = async (id: number): Promise<void> => {
        try {
            let chain = (await store.getEvolutions(id)).chain;
            store.setEvolutions([]);

            let count = 1;
           /*  while (count > 0) {

                if (chain.evolves_to.length > 0) {
                    chain.evolves_to.forEach(async (item) => {
                        const pokemon = await store.getPokemonByName(item.species.name);
                        evolutions.value.push(pokemon);
                        chain = item;
                    });
                } else {
                    count = 0;

                }

            } */

            /*  const pokemon = await store.getPokemonByName(resp.chain.species.name);
            evolutions.value.push(pokemon); */

        } catch (error: any) {
            throw error;
        }
    }






    return {
        pokemon,
        pokemonList,
        myTeam,
        evolutions,
        setPokemon,
        setPokemonList,
        addPokemonToTeam,
        removePokemonFromTeam,
        getPokemon,
        getPokemonList,
        getAllPokemons,
        getEvolutions,

    }

}