import type { DetailListPokemon, Pokemon } from "@/interfaces";
import { usePokemonStore } from "@/pokemons/composable/usePokemonStore";
import { defineComponent } from "vue";

import Row from "@/shared/components/row/Row.vue";
import Column from "@/shared/components/column/Column.vue";


export default defineComponent({
    name: 'TablePokemon',
    components: {
        Row, Column,
    },
    setup() {

        //--------composable functions--------//
        const { pokemonList, myTeam, currentPage, totalPokemons, setCurrentPage, setTotalPokemons, itemsPerPage, getAllPokemons, } = usePokemonStore();

        //---------Metodos o Funciones ----------//

        const handleSelectPokemon = (pokemonSelected: DetailListPokemon) => {

            pokemonSelected.selected = !pokemonSelected.selected;


            //validamos que esten maximo 6 pokemons
            if (myTeam.value.length >= 6 && pokemonSelected.selected) {
                alert('No puedes seleccionar mas de 6 pokemons');
                pokemonSelected.selected = false;
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

        const handlePageChange = async (page: number) => {
            setCurrentPage(page);
            await getAllPokemons(((currentPage.value - 1) * itemsPerPage.value), itemsPerPage.value);

        }

        return {
            myTeam,
            pokemonList,
            handleSelectPokemon,
            handlePageChange,
            currentPage,
            totalPokemons,
            itemsPerPage
        }
    }
})