import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import './scss/style.scss'

import {
  PurpleTheme,
  GreenTheme,
  PinkTheme,
  YellowTheme,
  SeaGreenTheme,
  OliveGreenTheme,
  SpeechBlueTheme
} from './theme/LightTheme'

import {
  DarkPurpleTheme,
  DarkGreenTheme,
  DarkSpeechBlueTheme,
  DarkOliveGreenTheme,
  DarkPinkTheme,
  DarkYellowTheme,
  DarkSeaGreenTheme
} from './theme/DarkTheme'

export const BerryUI = createVuetify({
  components,
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
      GreenTheme,
      PinkTheme,
      YellowTheme,
      SeaGreenTheme,
      OliveGreenTheme,
      SpeechBlueTheme,
      DarkPurpleTheme,
      DarkGreenTheme,
      DarkSpeechBlueTheme,
      DarkOliveGreenTheme,
      DarkPinkTheme,
      DarkYellowTheme,
      DarkSeaGreenTheme
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg',
      variant: 'outlined',
      density: 'comfortable'
    },
    VSelect: {
      rounded: 'lg',
      variant: 'outlined',
      density: 'comfortable'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
})
