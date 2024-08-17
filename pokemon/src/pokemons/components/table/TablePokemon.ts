import type { DetailListPokemon, Pokemon } from "@/interfaces";
import { usePokemonStore } from "@/pokemons/composable/usePokemonStore";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TablePokemon',
    setup() {

        //--------composable functions--------//
        const { pokemonList, selectPokemon, myTeam } = usePokemonStore();

        //---------Metodos o Funciones ----------//

        const handleSelectPokemon = (pokemonSelected: DetailListPokemon) => {

            //validamos que esten maximo 6 pokemons

            if (myTeam.value.length >= 6 && pokemonSelected.selected) {
                alert('No puedes seleccionar mas de 6 pokemons');
                return;
            }


            if (pokemonSelected.selected)
                myTeam.value.push(pokemonSelected.pokemon);
            else {
                const index = myTeam.value.findIndex(pokemon => pokemon.name === pokemonSelected.pokemon.name);
                if (index !== -1) {
                    myTeam.value.splice(index, 1);
                }
            }



        }



        return {
            myTeam,
            pokemonList,
            handleSelectPokemon,
        }
    }
})