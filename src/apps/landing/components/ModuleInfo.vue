<script setup lang="ts">
import { IconSet } from '@/shared/assets/iconset'

import Dummy1 from '@/shared/assets/images/landing/dummies/1.jpg'
import Dummy2 from '@/shared/assets/images/landing/dummies/2.jpg'
import Dummy3 from '@/shared/assets/images/landing/dummies/3.jpg'
import Dummy4 from '@/shared/assets/images/landing/dummies/4.jpg'
import Dummy5 from '@/shared/assets/images/landing/dummies/5.jpg'
import Dummy6 from '@/shared/assets/images/landing/dummies/6.jpg'

const iconset = IconSet.set('colored')
const selected = ref<number>(0)
const setSelected = (value: number) => selected.value = value


const modules = [
  {
    id: 'AKUNTANSI',
    title: 'Akuntansi',
    icon: iconset.get().akuntansi,
    contents: [
      {
        type: 'iframe',
        src: 'https://www.youtube.com/embed/SXv9UEpYuww'
      },
      {
        type: 'image',
        src: Dummy1
      },
      {
        type: 'image',
        src: Dummy2
      },
    ]
  },
  {
    id: 'KEUANGAN',
    title: 'Keuangan',
    icon: iconset.get().keuangan,
    contents: [
      {
        type: 'iframe',
        src: 'https://www.youtube.com/embed/bPZNqiyC9oI'
      },
      {
        type: 'image',
        src: Dummy2
      },
      {
        type: 'image',
        src: Dummy3
      },
    ]
  },
  {
    id: 'PEMBELIAN',
    title: 'Pembelian',
    icon: iconset.get().pembelian,
    contents: [
      {
        type: 'image',
        src: Dummy3
      },
      {
        type: 'iframe',
        src: 'https://www.youtube.com/embed/WOil2HoGasE'
      },
      {
        type: 'image',
        src: Dummy4
      },
    ]
  },
  {
    id: 'PENJUALAN',
    title: 'Penjualan',
    icon: iconset.get().penjualan,
    contents: [
      {
        type: 'image',
        src: Dummy4
      },
      {
        type: 'iframe',
        src: 'https://www.youtube.com/embed/Cq-IvDTxk-w'
      },
      {
        type: 'image',
        src: Dummy5
      },
    ]
  },
  {
    id: 'PERSEDIAAN',
    title: 'Persediaan',
    icon: iconset.get().persediaan,
    contents: [
      {
        type: 'image',
        src: Dummy5
      },
      {
        type: 'iframe',
        src: 'https://www.youtube.com/embed/Xi91T7Kmis4'
      },
      {
        type: 'image',
        src: Dummy6
      },
    ]
  },
  {
    id: 'MANUFAKTUR',
    title: 'Manufaktur',
    icon: iconset.get().manufaktur,
    contents: [
      {
        type: 'image',
        src: Dummy1
      },
      {
        type: 'image',
        src: Dummy3
      },
      {
        type: 'iframe',
        src: 'https://www.youtube.com/embed/3tfbJkCGUpo'
      }
    ]
  },
  {
    id: 'KARYAWAN',
    title: 'Karyawan',
    icon: iconset.get().karyawan,
    contents: [
      {
        type: 'image',
        src: Dummy4
      },
      {
        type: 'image',
        src: Dummy6
      },
    ]
  }
]


</script>

<template>
  <v-sheet class="pa-10" elevation="10" style="margin-top: 100px; margin-bottom: 100px;" :rounded="10" data-aos="fade-up"
    data-aos-duration="800">
    <v-row>
      <v-col md="5" cols="12">
        <h1 class="text-h3 mb-4 text-center"> Modul </h1>

        <v-row style="cursor: pointer;">
          <v-col v-for="item, i in modules" @click="setSelected(i)" md="4" cols="4">
            <v-card density="compact" :class="{ 'selected': selected == i }" variant="plain">
              <v-card-item class="mx-auto text-center pa-0 ma-0">
                <v-img class="mx-auto" :src="item.icon" cover />
                <span class="text-caption mx-auto">{{ item.title }}</span>
              </v-card-item>

            </v-card>
            <!-- <div :class="{ 'selected': selected == i }" class="d-flex flex-column justify-start"> <v-img :src="item.icon" style="background-color: red;" /><span style="background-color: pink;" class="text-caption mx-auto">{{ item.title }}</span> </div> -->
          </v-col>

        </v-row>
      </v-col>
      <v-col cols="12" md="7" class="d-flex align-center">
        <v-carousel hide-delimiter-background hide-delimiters>
          <v-carousel-item v-for="item in modules[selected].contents">
            <v-responsive :aspect-ratio="4 / 3">
              <template v-if="item.type == 'image'">
                <v-img :src="item.src" />
              </template>
              <template v-else>
                <v-aspect-ratio></v-aspect-ratio>
                <iframe style="width: 100%; height: 100%;" :src="item.src"></iframe>
              </template>
            </v-responsive>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style scoped>
.selected {
  border: 1px solid rgba(24, 179, 214, 0.203);
  border-radius: 5%;
  background-color: rgba(24, 179, 214, 0.145);
}
</style>
