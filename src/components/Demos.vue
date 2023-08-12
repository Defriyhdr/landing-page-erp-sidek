<script setup lang="ts">
// assets
import imgDemo1 from '@/shared/assets/images/landing/img-demo-1.jpg';
import imgDemo2 from '@/shared/assets/images/landing/img-demo-2.jpg';
import imgDemo3 from '@/shared/assets/images/landing/img-demo-3.jpg';
</script>

<template>
  <div class="spacer">
    <v-row>
      <v-col md="6" cols="12">
        <h5 class="text-h5 text-primary">Demos</h5>
        <h2 class="text-h2 my-3">Pre-build Dashboard & Apps</h2>
        <p>Berry has customized pages with Material-UI components, Apps, Forms and lots more to explore.</p>
      </v-col>
      <v-col md="12"></v-col>
      <v-col md="4" cols="12" data-aos="fade-up" data-aos-duration="800">
        <img :src="imgDemo1" alt="demos" class="w-100" />
      </v-col>
      <v-col md="4" cols="12" data-aos="fade-up" data-aos-duration="800">
        <img :src="imgDemo2" alt="demos" class="w-100" />
      </v-col>
      <v-col md="4" cols="12" data-aos="fade-up" data-aos-duration="800">
        <img :src="imgDemo3" alt="demos" class="w-100" />
      </v-col>
      <v-col md="12" class="text-center">
        <v-btn variant="outlined" color="primary"> Explore Components</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
