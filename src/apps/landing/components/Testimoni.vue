<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useDisplay } from 'vuetify';
const { mdAndDown } = useDisplay()



const carousel = ref(0)
const data = Array(12).fill(null).map((it, index) => ({
  bisnis: 'PT. Mencari Cinta Sejati',
  user: `Bambang Suyatman ${index + 1}`,
  message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus possimus dignissimos ratione at aspernatur ullam atque sunt vero quos"
}))

</script>

<template>
  <div data-aos="fade-up" data-aos-duration="800">


    <h5 class="text-h5 text-primary">Testimoni</h5>
    <h2 class="text-h2 mb-5">Kata mereka tentang SIDEK-ERP</h2>

    <Carousel class="my-10" :itemsToShow="mdAndDown ? 1 : 3.5" :wrapAround="true" :transition="500" :autoplay="5000">
      <template #addons>
        <Navigation />
        <!-- <Pagination /> -->
      </template>

      <Slide v-for="item, i in data" :key="i">
        <v-card max-width="400" style="border : solid 1px  rgba(0, 0, 0, 0.355);" variant="plain" height="250"
          :title="item.user" :subtitle="item.bisnis">
          <v-card-text class="py-2 text-caption">
            {{ item.message }}
          </v-card-text>
        </v-card>
      </Slide>
    </Carousel>
  </div>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.7;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 0.7;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 0.7;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>
