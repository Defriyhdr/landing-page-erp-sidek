<script setup lang="ts">
import 'aos/dist/aos.css';
import AOS from 'aos';
import Appbar from './components/Appbar.vue';
import HomeBanner from './components/HomeBanner.vue';
import Features from './components/Features.vue';
import ModuleInfo from './components/ModuleInfo.vue';
import Testimoni from './components/Testimoni.vue';
import TheFooter from './components/TheFooter.vue';

onMounted(() => {
  AOS.init();
});

</script>

<template>
  <VApp>
    <v-layout>
      <Appbar />
      <v-main class="ma-0">
        <v-container class="maxWidth">
          <HomeBanner />
          <Features />
          <ModuleInfo />
          <Testimoni />
        </v-container>
        <TheFooter />
      </v-main>
    </v-layout>
  </VApp>
</template>
