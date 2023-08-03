import { createApp } from 'vue'

import App from './App.vue'
import Router from './core/router'
import bootstrapLibs from './core/libs'
import { BerryUI } from '@/shared/ui'
import { setupAppErrorHandler } from './core/error'


const VueInstance = createApp(App)

bootstrapLibs(VueInstance)
setupAppErrorHandler(VueInstance);

VueInstance.use(BerryUI).use(Router).mount('#app')
