import TablePokemonVue from "@/pokemons/components/table/TablePokemon.vue";
import { usePokemonStore } from "@/pokemons/composable/usePokemonStore";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: 'Index',
    components: {
        TablePokemonVue,
    },
    setup() {

        const { pokemonList, getAllPokemons } = usePokemonStore();


        onMounted(async () => {
            if (pokemonList.value === null)
                await getAllPokemons();


        })

        return {
            pokemonList,
        }
    }
})