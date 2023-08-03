// GLOBAL COMPONENTS
import BaseButton from '@/shared/ui/components/BaseButton.vue'
import BaseIconButton from '@/shared/ui/components/BaseIconButton.vue'
import BaseBreadcrumb from '@/shared/ui/components/BaseBreadcrumb.vue'
import UiParentCard from '@/shared/ui/components/UiParentCard.vue'
import CardDialog from '@/shared/ui/components/CardDialog.vue'

// calendar
import { setupCalendar } from 'v-calendar';

// LIBRARIES
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

import Toast, { POSITION, type PluginOptions } from 'vue-toastification'
const toastOpt: PluginOptions = {
  position: POSITION.TOP_CENTER,
  timeout: 2000,
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter((t) => t.type === toast.type).length !== 0) {
      // Returning false discards the toast
      return false
    }
    // You can modify the toast if you want
    return toast
  }
}
import 'vue-toastification/dist/index.css'

import { createPinia } from 'pinia'
import { extendRoutePlugin } from './pinia.plugins'

import type { App } from 'vue'
export default function bootstrapLibs(app: App) {
  const Pinia = createPinia()
  Pinia.use(extendRoutePlugin)
  app.use(Pinia)

  app.component('BaseButton', BaseButton)
  app.component('BaseIconButton', BaseIconButton)
  app.component('BaseBreadcrumb', BaseBreadcrumb)
  app.component('UiParentCard', UiParentCard)
  app.component('CardDialog', CardDialog)
  app.use(setupCalendar, {})

  app.use(Toast, toastOpt)

  
  app.component('EasyDataTable', Vue3EasyDataTable)

  return app
}
