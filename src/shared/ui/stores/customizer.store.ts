import { defineStore } from 'pinia'
import config from '../config'
// @ts-ignore
export const useCustomizerStore = defineStore({
  id: 'APP/SHARED/THEME_CUSTOMIZER',
  state: () => ({
    Sidebar_drawer: useStorage('Sidebar_drawer', config.Sidebar_drawer),
    Customizer_drawer: useStorage('Customizer_drawer', config.Customizer_drawer),
    mini_sidebar: useStorage('mini_sidebar', config.mini_sidebar),
    setHorizontalLayout: useStorage('setHorizontalLayout', config.setHorizontalLayout),
    actTheme: useStorage('actTheme', config.actTheme),
    fontTheme: useStorage('fontTheme', config.fontTheme),
    inputBg: useStorage('inputBg', config.inputBg),
    boxed: useStorage('boxed', config.boxed),
    iconsetTheme: useStorage('iconset', 'colored')
  }),

  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.Sidebar_drawer = !this.Sidebar_drawer
    },
    SET_MINI_SIDEBAR(payload: any) {
      this.mini_sidebar = payload
    },
    SET_CUSTOMIZER_DRAWER(payload: any) {
      this.Customizer_drawer = payload
    },

    SET_LAYOUT(payload: any) {
      this.setHorizontalLayout = payload
    },
    SET_THEME(payload: any) {
      this.actTheme = payload
    },
    SET_FONT(payload: any) {
      this.fontTheme = payload
    }
    , SET_ICONSET_THEME(payload: any) {
      this.iconsetTheme = payload;
    }
  }
})
