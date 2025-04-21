import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Add this line to import your router

const app = createApp(App)
app.use(router)
app.mount('#app')