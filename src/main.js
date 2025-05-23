import { createApp } from '../node_modules/vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')