import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import './scss/style.scss'

import { PurpleTheme, } from './theme/LightTheme'


export const BerryUI = createVuetify({
  // components,
  // directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },

  theme: {
    defaultTheme: 'PurpleTheme',
    themes: {
      PurpleTheme,
    }
  },
})
