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

    const totalPokemons = computed(() => store.totalPokemons);
    const currentPage = computed(() => store.currentPage);
    const itemsPerPage = computed(() => store.itemsPerPage);

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

    const setCurrentPage = (page: number) => {
        store.setCurrentPage(page);
    };

    const setTotalPokemons = (total: number) => {
        store.setTotalPokemons(total);
    };

    const setItemsPerPage = (items: number) => {
        store.setItemsPerPage(items);
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

    const getAllPokemons = async (offset: number = 0, itemsPerPage: number = 2) => {
        await store.getAllPokemons(offset, itemsPerPage)
            .then(async (response) => {
                setTotalPokemons(response.count);
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

    const getEvolutions = async (id: number): Promise<Pokemon[]> => {
        try {
            let pokemons: Pokemon[] = [];
            let urlEvolution = (await store.getPokemonSpecies(id));

            // de urlEvolution vamos a sacar el id de la cadena de evolucion

            let chainId = urlEvolution.replace("https://pokeapi.co/api/v2/evolution-chain/", "");

            let chain = (await store.getEvolutions(chainId)).chain;

            pokemons.push(await store.getPokemonByName(chain.species.name));


            //vamos a sacar todos los evolves_to dentro de los chains

            let evolves_to: Chain[] = [];

            while (chain.evolves_to.length > 0) {
                evolves_to.push(...chain.evolves_to);
                chain = chain.evolves_to[0];
                console.log(chain.species.name);
            }

            //vamos a sacar todos los species de los evolves_to

            let species: string[] = [];

            evolves_to.forEach((item) => {
                species.push(item.species.name);
            });

            //vamos a sacar los pokemons de los species



            for (let i = 0; i < species.length; i++) {
                pokemons.push(await store.getPokemonByName(species[i]));
            }

            return pokemons;

        } catch (error: any) {
            throw error;
        }
    }






    return {
        itemsPerPage,
        totalPokemons,
        currentPage,
        pokemon,
        pokemonList,
        myTeam,
        evolutions,
        setPokemon,
        setPokemonList,
        setCurrentPage,
        setTotalPokemons,
        setItemsPerPage,
        addPokemonToTeam,
        removePokemonFromTeam,
        getPokemon,
        getPokemonList,
        getAllPokemons,
        getEvolutions,

    }

}