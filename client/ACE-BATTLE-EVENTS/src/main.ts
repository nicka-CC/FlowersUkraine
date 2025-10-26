import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import global styles
import './assets/main.css'

const app = createApp(App)

// Use plugins
app.use(createPinia())
app.use(router)

// Mount the app
app.mount('#app')