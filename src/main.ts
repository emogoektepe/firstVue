import './assets/base.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import ToastService from 'primevue/toastservice'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import 'primevue/resources/themes/aura-dark-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(ToastService)

app.component('InputText', InputText)
app.component('Button', Button)

app.mount('#app')
