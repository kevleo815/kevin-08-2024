import TablePokemonVue from "@/pokemons/components/table/TablePokemon.vue";
import { usePokemonStore } from "@/pokemons/composable/usePokemonStore";
import { useSharedStore } from "@/shared/composable/useSharedStore";
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
    name: 'Index',
    components: {
        TablePokemonVue,
    },
    setup() {

        //---------invocamos los composables functions---------//
        const { pokemonList, getAllPokemons, itemsPerPage, currentPage } = usePokemonStore();
        const { setSubtitle, setTitle } = useSharedStore();


        //-----------eventos del ciclo de vida de la pagina---------//

   
        onMounted(async () => { 

            //---------seteamos el titulo y el subtitulo de la pagina---------//
            setTitle('Lista de Pokemons'); 
            setSubtitle('Lista de los pokemons disponibles');

            if (pokemonList.value === null) // si la lista de pokemons es nula, entonces vamos a obtener los pokemons.
                await getAllPokemons(currentPage.value, itemsPerPage.value); // obtenemos los pokemons.
        })


        
        onUnmounted(() => { // cuando la pagina se desmonte, vamos a setear el titulo y el subtitulo a vacio.
            setTitle('');
            setSubtitle('');
        });


        return {
            pokemonList,
        }
    }
})