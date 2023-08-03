<script setup>
import { ref } from 'vue';
import { useCustomizerStore } from '../stores/customizer.store';
import { ChecksIcon } from 'vue-tabler-icons';

const customizer = useCustomizerStore();

// themes color options
const themeColors = ref([
  {
    name: 'PurpleTheme',
    bg: 'themeBluePurple'
  },
  {
    name: 'GreenTheme',
    bg: 'themeGreenDark'
  },
  {
    name: 'PinkTheme',
    bg: 'themePink'
  },
  {
    name: 'YellowTheme',
    bg: 'themeYellow'
  },
  {
    name: 'SeaGreenTheme',
    bg: 'themeSeaGreen'
  },
  {
    name: 'OliveGreenTheme',
    bg: 'themeOliveGreen'
  },
  {
    name: 'SpeechBlueTheme',
    bg: 'themeSpeechBlue'
  }
]);

// Dark Theme Colors
const DarkthemeColors = ref([
  { name: 'DarkPurpleTheme', bg: 'themeDarkPurple' },
  { name: 'DarkGreenTheme', bg: 'themeDarkGreen' },
  { name: 'DarkPinkTheme', bg: 'themeDarkPink' },
  { name: 'DarkYellowTheme', bg: 'themeDarkYellow' },
  { name: 'DarkSeaGreenTheme', bg: 'themeDarkSeaGreen' },
  { name: 'DarkOliveGreenTheme', bg: 'themeDarkOliveGreen' },
  { name: 'DarkSpeechBlueTheme', bg: 'themeDarkSpeechBlue' }
]);

// themes font Family options
const fontFamily = ref(['Roboto', 'Poppins', 'Inter']);

// iconsets 
const iconsets = ref(['bluesky', 'colored'])
</script>

<!------------------------------------->
<!-- Customizer -->
<!------------------------------------->
<template>
  <v-navigation-drawer app temporary elevation="10" location="right" v-model="customizer.Customizer_drawer" width="280">

    <v-row class="pa-3">
      <v-col cols="12">
        <!------------------------------------->
        <!-- Preset color -->
        <!------------------------------------->
        <v-card variant="outlined">
          <v-card-item class="py-3">
            <v-card-title class="text-subtitle-1 font-weight-medium">Tema Cerah</v-card-title>
          </v-card-item>
          <v-divider class="border-light"></v-divider>
          <v-card-text>
            <v-item-group mandatory v-model="customizer.actTheme">
              <v-item v-slot="{ isSelected, toggle }" v-for="theme in themeColors" :key="theme.name" :value="theme.name">
                <v-avatar rounded="sm" :class="theme.bg" class="mr-2 cursor-pointer ma-2" size="40" @click="toggle">
                  <ChecksIcon color="white" v-if="isSelected" />
                </v-avatar>
              </v-item>
            </v-item-group>
          </v-card-text>
        </v-card>
        <!------------------------------------->
        <!-- end Preset color -->
        <!------------------------------------->
      </v-col>
      <v-col cols="12">
        <!------------------------------------->
        <!-- Dark Preset color -->
        <!------------------------------------->
        <v-card variant="outlined">
          <v-card-item class="py-3">
            <v-card-title class="text-subtitle-1 font-weight-medium">Tema Gelap</v-card-title>
          </v-card-item>
          <v-divider class="border-light"></v-divider>
          <v-card-text>
            <v-item-group mandatory v-model="customizer.actTheme">
              <v-item v-slot="{ isSelected, toggle }" v-for="theme in DarkthemeColors" :key="theme.name"
                :value="theme.name">
                <v-avatar rounded="sm" :class="theme.bg" class="mr-2 cursor-pointer ma-2" size="40" @click="toggle">
                  <ChecksIcon color="white" v-if="isSelected" />
                </v-avatar>
              </v-item>
            </v-item-group>
          </v-card-text>
        </v-card>
        <!------------------------------------->
        <!-- end Preset color -->
        <!------------------------------------->
      </v-col>


      <v-col cols="12">
        <!------------------------------------->
        <!-- Iconset -->
        <!------------------------------------->
        <v-card variant="outlined">
          <v-card-item class="py-3">
            <v-card-title class="text-subtitle-1 font-weight-medium">Tema Icon</v-card-title>
          </v-card-item>
          <v-divider class="border-light"></v-divider>
          <v-card-text>
            <v-radio-group v-model="customizer.iconsetTheme" hide-details>
              <v-radio v-for="icon in iconsets" :key="icon" :label="icon" :value="icon" color="primary"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
        <!------------------------------------->
        <!-- end Font Family -->
        <!------------------------------------->
      </v-col>

      <v-col cols="12">
        <!------------------------------------->
        <!-- Font Family -->
        <!------------------------------------->
        <v-card variant="outlined">
          <v-card-item class="py-3">
            <v-card-title class="text-subtitle-1 font-weight-medium">Jenis Font</v-card-title>
          </v-card-item>
          <v-divider class="border-light"></v-divider>
          <v-card-text>
            <v-radio-group v-model="customizer.fontTheme" hide-details>
              <v-radio v-for="font in fontFamily" :key="font" :label="font" :value="font" color="primary"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
        <!------------------------------------->
        <!-- end Font Family -->
        <!------------------------------------->
      </v-col>


      <!------------------------------------->
      <!-- Boxed Container -->
      <!------------------------------------->
      <v-col cols="12">
        <!-- Box Container -->
        <v-card variant="outlined">
          <v-card-item class="py-3">
            <v-card-title class="text-subtitle-1 font-weight-medium">Fokus Area kerja</v-card-title>
          </v-card-item>
          <v-divider class="border-light"></v-divider>
          <v-card-text>
            <v-switch color="primary" v-model="customizer.boxed" hide-details
              :label="customizer.boxed ? 'Terfokus' : 'Penuh'"></v-switch>
          </v-card-text>
        </v-card>
        <!------------------------------------->
        <!-- End Box Container -->
        <!------------------------------------->
      </v-col>
    </v-row>

  </v-navigation-drawer>
</template>

<style lang="scss">
</style>
