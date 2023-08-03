export type ConfigProps = {
  Sidebar_drawer: any
  Customizer_drawer: boolean
  mini_sidebar: boolean
  setHorizontalLayout: boolean
  actTheme: string
  fontTheme: string
  inputBg: boolean
  boxed: boolean
}

const config: ConfigProps = {
  Sidebar_drawer: null,
  Customizer_drawer: false,
  mini_sidebar: !false,
  setHorizontalLayout: false, // Horizontal layout
  actTheme: 'SpeechBlueTheme',
  fontTheme: 'Poppins',
  inputBg: false,
  boxed: false
}

export default config
