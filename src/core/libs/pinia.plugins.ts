import type { PiniaPluginContext } from 'pinia'
import router from '../router'
import type { Router } from 'vue-router'

export function extendRoutePlugin(context: PiniaPluginContext) {
  // console.log('pinia extend route installed')
  context.store.$router = markRaw(router) as Router
}
