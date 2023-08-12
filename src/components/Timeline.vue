<script setup lang="ts">
import { useDisplay } from 'vuetify';
// assets
import imgLayout1 from '@/shared/assets/images/landing/demo-dark.png';
import imgLayout2 from '@/shared/assets/images/landing/demo-rtl.png';
import imgLayout3 from '@/shared/assets/images/landing/demo-multi.png';
import imgLayoutGrid from '@/shared/assets/images/landing/img-lay-grid.png';
//plugins
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const { lgAndUp } = useDisplay();
const slideShow = [
  {
    bg: imgLayoutGrid,
    image: imgLayout1,
    title: 'Dark Layout',
    content: 'Modern, sleek and elegant dark color scheme that looks great in a dark variant.'
  },
  {
    bg: imgLayoutGrid,
    image: imgLayout2,
    title: 'Vue3+ Typescript',
    content: 'Made with Vuetifyjs with vite + vue3.'
  },
  {
    bg: imgLayoutGrid,
    image: imgLayout3,
    title: 'Multiple Apps',
    content: 'With Berry you can get Multiple functional Apps'
  }
];
</script>

<template>
  <div class="spacer pt-0" v-if="!lgAndUp">
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false">
      <Slide v-for="(slide, i) in slideShow" :key="i" class="pt-6">
        <div class="v-col-7">
          <div class="position-relative">
            <img alt="product" :src="slide.bg" class="w-100" />
            <img alt="product" :src="slide.image" class="imageGrid" />
          </div>

          <h4 class="text-h4 mt-11">{{ slide.title }}</h4>
          <p>{{ slide.content }}</p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  <div v-else>
    <div class="spacer">
      <v-row no-gutters>
        <v-col lg="5">
          <div class="position-relative">
            <img alt="product" :src="imgLayoutGrid" class="w-100 mt-n5" />
            <img alt="product" :src="imgLayout1" class="imageGridDesktop" />
          </div>
        </v-col>
        <v-col lg="1">
          <div class="dotDivider"></div>
        </v-col>
        <v-col lg="5">
          <h4 class="text-h4">Dark Layout</h4>
          <p>Modern, sleek and elegant dark color scheme that looks great in a dark variant.</p>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="5" class="text-right">
          <h4 class="text-h4">Vue3+ Typescript</h4>
          <p>Made with Vuetifyjs with vite + vue3.</p>
        </v-col>
        <v-col lg="1">
          <div class="dotDivider"></div>
        </v-col>
        <v-col lg="5">
          <div class="position-relative">
            <img alt="product" :src="imgLayoutGrid" class="w-100" />
            <img alt="product" :src="imgLayout2" class="imageGridDesktop" />
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="5">
          <div class="position-relative">
            <img alt="product" :src="imgLayoutGrid" class="w-100 mt-n5" />
            <img alt="product" :src="imgLayout3" class="imageGridDesktop" />
          </div>
        </v-col>
        <v-col lg="1">
          <div class="onlyDot"></div>
        </v-col>
        <v-col lg="5">
          <h4 class="text-h4">Multiple Apps</h4>
          <p>With Berry you can get Multiple functional Apps</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<style lang="scss">
.imageGrid {
  position: absolute;
  top: 50px;
  left: 0;
  width: 95%;
  height: 95%;
  animation: 5s wings ease-in-out infinite;
}

.imageGridDesktop {
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 100%;
  animation: 5s wings ease-in-out infinite;
}

.dotDivider {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  width: 1px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background: rgb(255, 255, 255);
    border: 6px solid rgb(var(--v-theme-secondary));
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 0px;
    left: -12px;
  }
}

.onlyDot {
  background: rgb(255, 255, 255);
  border: 6px solid rgb(var(--v-theme-secondary));
  width: 25px;
  height: 25px;
  border-radius: 50%;
  top: 0px;
  left: 37%;
  position: relative;
}
</style>
