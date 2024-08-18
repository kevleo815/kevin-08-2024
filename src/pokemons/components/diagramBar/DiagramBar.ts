import { defineComponent } from "vue";
import Row from "@/shared/components/row/Row.vue";
import Column from "@/shared/components/column/Column.vue";

export default defineComponent({
    name: 'DiagramBar',
    components: {
        Row, Column
    },
    props: {
        diagramData: {
            type: Array as () => Array<{ name: string, value: number }>,
            default: () => [
                { name: 'HP', value: 0 },
                { name: 'Attack', value: 0 },
                { name: 'Defense', value: 0 },
                { name: 'Special-attack', value: 0 },
                { name: 'Special-defense', value: 0 },
                { name: 'Speed', value: 0 },
            ]
        }
    },

    setup() {


        return {



        }
    }
})