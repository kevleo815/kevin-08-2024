import { defineComponent } from "vue";

export default defineComponent({
    name: 'SharedTable',
    props: {
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        return {
            columns: props.columns,
            data: props.data
        }
    }
})