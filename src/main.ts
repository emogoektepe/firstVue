import './assets/base.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import ToastService from 'primevue/toastservice'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu'

import 'primevue/resources/themes/aura-dark-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue, { ripple: true })
app.use(router)
app.use(ToastService)

app.component('InputText', InputText)
app.component('PrimeButton', Button)
app.component('TabMenu', TabMenu)

app.mount('#app')
