import { defineComponent, toRefs } from "vue";

export default defineComponent({
    name: 'DiagramBar',

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