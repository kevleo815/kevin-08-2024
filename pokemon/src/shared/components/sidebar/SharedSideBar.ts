import type { MenuItem } from "@/interfaces";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'SharedSideBar',

    props: {
        menuItems: {
            type: Array as () => MenuItem[],
            required: true
        }

    },

    setup() {
        return {
            /*  menuItems: [
                 { text: 'Home', link: '#' },
                 { text: 'About', link: '#' },
                 { text: 'Services', link: '#' },
                 { text: 'Contact', link: '#' },
             ], */
        }
    }
})