import { createApp } from 'vue'
import { createYmaps } from 'vue-yandex-maps';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App)
    .use(store)
    .use(router)
    .use(createYmaps({
        apikey: 'your-api-key',
    }))
    .mount('#app')
