import type { Pokemon } from "@/interfaces";
import { usePokemonStore } from "@/pokemons/composable/usePokemonStore";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSharedStore } from "@/shared/composable/useSharedStore";
import CardViewVue from '@/pokemons/components/card/CardView.vue';
import Row from "@/shared/components/row/Row.vue";
import Column from "@/shared/components/column/Column.vue";

export default defineComponent({
    name: "ShowView",
    components: {
        CardViewVue, Row, Column
    },
    setup() {

        //--------invocamos los composables functions---------//
        const route = useRoute();
        const router = useRouter();
        const { myTeam, getEvolutions, evolutions } = usePokemonStore();
        const { setTitle, setSubtitle, setIcon } = useSharedStore();


        //--vamos a obtener el uid de la url------//
        const poekemonId = parseInt(route.params.id.toString()) ?? null;
        const pokemon = ref<Pokemon | null>(null);
        const pokemonEvolutions = ref<Pokemon[]>([]);


        //--------------Funciones de la pagina-----------------//


        //-----------eventos del ciclo de vida de la pagina---------//
        onMounted(async () => { // cuando la pagina se monte, vamos a setear el titulo y el subtitulo de la pagina.



            if (!myTeam.value.some((pokemon) => pokemon.id === poekemonId)) {
                router.push({ name: "index" }).catch(() => { });
            }
            pokemon.value = myTeam.value.find((pokemon) => pokemon.id === poekemonId) ?? null;

            setTitle(`Información del Pokemón ${pokemon.value?.name.toUpperCase()}`);
            setSubtitle("En esta sección puedes ver el detalle del pokemón seleccionado, en la parte inferior se muestra las evoluciones del pokemón seleccionado.");
            setIcon("user");

            if (poekemonId !== null) {
                pokemonEvolutions.value = await getEvolutions(poekemonId);
            }



        });


        return {
            pokemon,
            pokemonEvolutions,
            evolutions,

        }
    },
})