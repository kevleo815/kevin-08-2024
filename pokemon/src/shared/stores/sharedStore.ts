import { defineStore } from "pinia";
import { ref } from "vue";

export const sharedStore = defineStore(('sharedStore'), () => { //nombre de la store
    //----------states----------//

    //------elementos de la plantilla ---------//
    const loading = ref<boolean>(false);
    const textloading = ref<string>('');
    const title = ref<string>('Titulo por defecto');
    const subtitle = ref<string>('Subtitulo por defecto');
    const icon = ref<string>('');

    //-----------setters---------------//

    const setLoading = (load: boolean) => {
        loading.value = load;
    };

    const setTextLoading = (text: string) => {
        textloading.value = text;
    };

    const setTitle = (text: string) => {
        title.value = text;
    };

    const setSubtitle = (text: string) => {
        subtitle.value = text;
    };

    const setIcon = (text: string) => {
        icon.value = text;
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



});