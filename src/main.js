import { createApp } from 'vue'
import { createYmaps } from 'vue-yandex-maps';
import App from './App.vue'
import './registerServiceWorker'
import "@/assets/main.css";
import "@/assets/bootstrap/css/bootstrap.css";
import router from './router'
import store from './store'

createApp(App)
    .use(store)
    .use(router)
    .use(createYmaps({
        apikey: 'cfe00336-5623-4dc8-895a-9af4c1e63156',
    }))
    .mount('#app')
