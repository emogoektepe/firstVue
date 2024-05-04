import './assets/base.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import ToastService from 'primevue/toastservice'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu'
import Chart from 'primevue/chart'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tooltip from 'primevue/tooltip'

import 'primevue/resources/themes/aura-dark-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue, { ripple: true })
app.use(router)
app.use(ToastService)

app.directive('tooltip', Tooltip)

app.component('InputText', InputText)
app.component('PrimeButton', Button)
app.component('TabMenu', TabMenu)
app.component('PrimeChart', Chart)
app.component('DataTable', DataTable)
app.component('PrimeColumn', Column)

app.mount('#app')
