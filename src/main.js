import { createApp } from 'vue'
import App from './App.vue'
import routes from './route'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import mitt from 'mitt'

const emitter = mitt();
const pinia = createPinia()
const router = createRouter({
    history: createWebHistory('/quiz/'),
    // history: createWebHistory(''),
    routes, // short for `routes: routes`
})

const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(pinia);
app.mount('#app');
