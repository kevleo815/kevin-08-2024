import type { Pokemon } from "@/interfaces";
import { usePokemonStore } from "@/pokemons/composable/usePokemonStore";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import CardViewVue from '@/pokemons/components/card/CardView.vue';

export default defineComponent({
    name: "ShowView",
    components: {
        CardViewVue
    },
    setup() {

        const route = useRoute();
        const router = useRouter();
        const { myTeam, getEvolutions, evolutions } = usePokemonStore();

        //--vamos a obtener el uid de la url------//
        const poekemonId = parseInt(route.params.id.toString()) ?? null;
        const pokemon = ref<Pokemon | null>(null);
        const pokemonEvolutions = ref<Pokemon[]>([]);

        onMounted(async () => {
            if (!myTeam.value.some((pokemon) => pokemon.id === poekemonId)) {
                router.push({ name: "index" }).catch(() => { });
            }
            pokemon.value = myTeam.value.find((pokemon) => pokemon.id === poekemonId) ?? null;

            if (poekemonId !== null) {
                await getEvolutions(poekemonId);
            }



        });


        return {
            pokemon,
            pokemonEvolutions,
            evolutions
        }
    },
})