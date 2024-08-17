import { usePokemonStore } from "@/pokemons/composable/usePokemonStore";
import { defineComponent } from "vue";
import CardViewVue from "@/pokemons/components/card/CardView.vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: 'TeamView',
    components: {
        CardViewVue
    },
    setup() {

        const { myTeam, pokemonList } = usePokemonStore();
        const router= useRouter();

        const removeMember = (pokemonName: string) => {
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

        const handleIndividualShow = (pokemonId: number) => {
            router.push({ name: 'show-pokemon', params: { id: pokemonId } });
        }


        return {
            handleIndividualShow,
            removeMember,
            myTeam
        }
    }
})