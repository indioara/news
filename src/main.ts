import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style.scss"
import  Components  from '@/components/UI/index'

const app = createApp(App)
Components.forEach(component => {
    app.component(component.name, component)
})

app.use(store).use(router).mount('#app')
