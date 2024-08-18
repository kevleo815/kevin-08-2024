/* import './assets/main.css' */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/*-------importacion de iconos-------- */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Añadir todos los iconos sólidos a la biblioteca
library.add(fas);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
