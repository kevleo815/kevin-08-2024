import { defineComponent } from "vue";
import SharedSideBar from "../components/sidebar/SharedSideBar.vue";
import type { MenuItem } from "@/interfaces";
import Row from "../components/row/Row.vue";
import Column from "../components/column/Column.vue";
import { useSharedStore } from "../composable/useSharedStore";


export default defineComponent({
    name: 'LayoutView',
    components: {
        SharedSideBar, Row, Column
    },
    setup() {

        //-------vamos a invocar el composable function------//
        const { title, subtitle, icon } = useSharedStore();



        //-------vamos a declarar los items del menu---------//
        const menuItems: MenuItem[] = [
            { text: 'inicio', name: 'index', icon: 'home' },
            { text: 'Equipo', name: 'team', icon: 'users' },
        ];


        return {
            menuItems,
            title,
            subtitle,
            icon,
        }
    }
})