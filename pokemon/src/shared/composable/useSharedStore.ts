import { computed } from "vue";
import { sharedStore } from "../stores/sharedStore";

export function useSharedStore() {
    const store = sharedStore();

    //--------------------States--------------------//

    const loading = computed(() => store.loading);
    const textloading = computed(() => store.textloading);
    const title = computed(() => store.title);
    const subtitle = computed(() => store.subtitle);
    const icon = computed(() => store.icon);
    //--------------------setters--------------------//

    const setLoading = (load: boolean) => {
        store.setLoading(load);
    };

    const setTextLoading = (text: string) => {
        store.setTextLoading(text);
    };

    const setTitle = (text: string) => {
        store.setTitle(text);
    };

    const setSubtitle = (text: string) => {
        store.setSubtitle(text);
    };

    const setIcon = (text: string) => {
        store.setIcon(text);
    };

    return {
        loading,
        textloading,
        title,
        subtitle,
        icon,
        setLoading,
        setTextLoading,
        setTitle,
        setSubtitle,
        setIcon
    };
}