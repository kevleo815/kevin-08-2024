import { usePokemonStore } from "@/pokemons/composable/usePokemonStore";
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useSharedStore } from "@/shared/composable/useSharedStore";

import CardViewVue from "@/pokemons/components/card/CardView.vue";
import Row from "@/shared/components/row/Row.vue";
import Column from "@/shared/components/column/Column.vue";

export default defineComponent({
    name: 'TeamView',
    components: {
        CardViewVue, Row, Column
    },
    setup() {

        //---------invocamos los composables functions---------//
        const { myTeam, pokemonList } = usePokemonStore();
        const { setTitle, setSubtitle, setIcon } = useSharedStore();
        const router = useRouter();


        //--------------Funciones de la pagina-----------------//
        const removeMember = (pokemonName: string) => { // vamos a remover un pokemon de nuestro equipo.
            const index = myTeam.value.findIndex(pokemon => pokemon.name === pokemonName);
            if (index !== -1) {
                myTeam.value.splice(index, 1);
                // vamos a buscar el pokemon en la lista de pokemons y cambiar el selected a false
                const indexPokemon = pokemonList.value!.results.findIndex(pokemon => pokemon.name === pokemonName);
                if (indexPokemon !== -1) {
                    pokemonList.value!.results[indexPokemon].selected = false;
                }

            }
        }

        const handleIndividualShow = (pokemonId: number) => { // vamos a mostrar la informacion de un pokemon.
            router.push({ name: 'show-pokemon', params: { id: pokemonId } });
        }



        //-----------eventos del ciclo de vida de la pagina---------//

        onMounted(() => { // cuando la pagina se monte, vamos a setear el titulo y el subtitulo de la pagina.   
            setTitle('Tú Equipo Pokemón');
            setSubtitle('En esta sección puedes ver tu equipo de pokemones seleccionados, puedes desvincular del equipo si lo deseas. Para ver más detalles de un pokemón, haz clic en la tarjeta.');
            setIcon('users');
        });

        onUnmounted(() => { // cuando la pagina se desmonte, vamos a setear el titulo y el subtitulo a vacio.   
            setTitle('');
            setSubtitle('');
            setIcon('');
        });

        return {
            handleIndividualShow,
            removeMember,
            myTeam
        }
    }
})