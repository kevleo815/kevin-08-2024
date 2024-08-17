import { defineComponent } from "vue";
import SharedSideBar from "../components/sidebar/SharedSideBar.vue";
import type { MenuItem } from "@/interfaces";

export default defineComponent({
    name: 'LayoutView',
    components: {
        SharedSideBar
    },
    setup() {


        /**
         * @description: Vamos a declarar las rutas que tiene nuestra aplicación y estan son utilizadas en el sidebar.
         */

        const menuItems: MenuItem[] = [
            { text: 'Incio', name: 'index' },
            { text: 'Equipo', name: 'team' },
        ];


        return {
            menuItems
        }
    }
})