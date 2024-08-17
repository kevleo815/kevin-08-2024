import type { Pokemon } from "@/interfaces";
import { defineComponent, onMounted, ref, toRefs } from "vue";
import DiagramBarVue from "../diagramBar/DiagramBar.vue";

export default defineComponent({
    name: 'CardView',
    props: {
        pokemon: {
            type: Object as () => Pokemon,
            required: true
        }
    },
    components: {
        DiagramBarVue
    },
    setup(props) {

        const { pokemon } = toRefs(props);
        const stats = ref<{ name: string, value: number }[]>([]);
        /* ------aqui vamos a recorrer los stats y extraer el base_stat y de stat el name---- */

        onMounted(() => {
            stats.value = pokemon.value.stats?.map(stat => {
                return {
                    name: stat.stat.name,
                    value: stat.base_stat
                }
            }) || []
        })





        return {
            stats
        }
    }
})