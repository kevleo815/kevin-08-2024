import { defineStore } from "pinia";
import { ref } from "vue";

export const sharedStore = defineStore(('sharedStore'), () => {
    //----------states----------//

    //------elementos de la plantilla ---------//
    const loading = ref<boolean>(false);
    const textloading = ref<string>('');
    const title = ref<string>('Titulo por defecto');
    const subtitle = ref<string>('Subtitulo por defecto');


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



    return {
        loading,
        textloading,
        title,
        subtitle,
        setLoading,
        setTextLoading,
        setTitle,
        setSubtitle
    };



});