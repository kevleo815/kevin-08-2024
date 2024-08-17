import { usePokemonStore } from "@/pokemons/composable/usePokemonStore";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TablePokemon',
    setup() {

        //--------composable functions--------//
        const { pokemonList, selectPokemon, myTeam } = usePokemonStore();

        //---------Metodos o Funciones ----------//

        const handleSelectPokemon = (name: string) => {
            selectPokemon(name);
        }



        return {
            myTeam,
            pokemonList,
            handleSelectPokemon,
        }
    }
})