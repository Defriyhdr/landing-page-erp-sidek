<script setup lang="ts">
import Cloud from '@/shared/assets/images/landing/clouds.gif'
import Target from '@/shared/assets/images/landing/target.gif'
import Responsive from '@/shared/assets/images/landing/responsive.gif'
import Clock from '@/shared/assets/images/landing/clock.gif'
import Stats from '@/shared/assets/images/landing/design-stats-animate.svg'

</script>

<template>
  <v-row>
    <v-col md="6" cols="12" data-aos="fade-up" data-aos-duration="800">
      <v-img :src="Stats" />
    </v-col>
    <v-col md="6" cols="12" data-aos="fade-up" data-aos-duration="800">
      <h2 class="text-h2 my-3">Mengapa menggunakan SIDEK-ERP ?</h2>
      <v-row>
        <v-col cols="6" data-aos="fade-up" data-aos-duration="800">
          <v-card variant="outlined" class="text-center pa-5" height="250">
            <v-sheet elevation="0" rounded="md" class="bg-lightprimary mx-auto" height="90" width="90">
              <v-img :src="Clock" />
            </v-sheet>
            <p class="my-3 text-body-2">Menghasilkan laporan keuangan <br /> secara realtime</p>
          </v-card>
        </v-col>
        <v-col cols="6" data-aos="fade-up" data-aos-duration="800">
          <v-card variant="outlined" class="text-center pa-5" height="250">
            <v-sheet elevation="0" rounded="md" class="bg-lightsecondary mx-auto" height="90" width="90">
              <v-img :src="Target" />
            </v-sheet>
            <p class="my-3 text-body-2">
              Pencatatan akuntansi otomatis <br /> yang akurat
            </p>
          </v-card>
        </v-col>
        <v-col cols="6" data-aos="fade-up" data-aos-duration="800">
          <v-card variant="outlined" class="text-center pa-5" height="250">
            <v-sheet elevation="0" rounded="md" class="bg-lightsuccess mx-auto" height="90" width="90">
              <v-img :src="Cloud" />
            </v-sheet>
            <p class="my-3 text-body-2">Layanan aplikasi <br />berbasis cloud</p>
          </v-card>
        </v-col>
        <v-col cols="6" data-aos="fade-up" data-aos-duration="800">
          <v-card variant="outlined" class="text-center pa-5" height="250">
            <v-sheet elevation="0" rounded="md" class="bg-lightsuccess mx-auto" height="90" width="90">
              <v-img :src="Responsive" />
            </v-sheet>
            <p class="my-3 text-body-2">Pantau bisnis kapan saja dan dimana saja melalui smartphone</p>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

  </v-row>
</template>
