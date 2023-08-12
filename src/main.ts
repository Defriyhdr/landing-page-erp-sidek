import { createApp } from 'vue'

import App from './App.vue'
import { BerryUI } from '@/shared/ui'
const app = createApp(App)

app.use(BerryUI).mount('#app')
