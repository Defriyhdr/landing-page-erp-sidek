<script setup>
// import { computed } from 'vue';
// import { useCustomizerStore } from '../stores/customizer.store';
import OfficialFullLogo from '@/shared/assets/official-full-logo.svg'

// const customizer = useCustomizerStore();

// //const dark = ref(false);
// const dark = computed(() => {
//   if (
//     customizer.actTheme === 'DarkPurpleTheme' ||
//     customizer.actTheme === 'DarkGreenTheme' ||
//     customizer.actTheme === 'DarkSpeechBlueTheme' ||
//     customizer.actTheme === 'DarkOliveGreenTheme' ||
//     customizer.actTheme === 'DarkPinkTheme' ||
//     customizer.actTheme === 'DarkYellowTheme' ||
//     customizer.actTheme === 'DarkSeaGreenTheme'
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// });
</script>
<template>
  <img :src="OfficialFullLogo" style="width: 64px;height: 64px;" />
</template>
