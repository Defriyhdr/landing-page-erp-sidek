<script setup lang="ts">
import Invoice from '@/shared/assets/images/landing/invoice-animate.svg'
import { CircleCheckFilledIcon } from 'vue-tabler-icons';
</script>

<template>
  <v-row class="spacer" justify="space-evenly">
    <v-col cols="12" lg="6" md="5">
      <div class="pr-lg-4">
        <h1 class="bannerText my-5" data-aos="fade-up" data-aos-duration="500">
          Kelola Usahamu
          dengan
          <br />
          <span class="text-primary">SIDEK-ERP</span>
        </h1>
        <p data-aos="fade-up" data-aos-duration="800">
          Manfaat dari SIDEK-ERP
        </p>

        <v-list lines="two" density="compact" data-aos="fade-up" data-aos-duration="800">
          <v-list-item>
            <CircleCheckFilledIcon style="color: #5FEDB1;" class="mr-4" />Memudahkan analisis data keuangan
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <CircleCheckFilledIcon style="color: #5FEDB1;" class="mr-4" />
            </template>
            <template v-slot:title>Meminimalisir resiko kesalahan pencatatan</template>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <CircleCheckFilledIcon style="color: #5FEDB1;" class="mr-4" />
            </template>
            <template v-slot:title>Memudahkan pelaku UMKM dalam melakukan pembukuan</template>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <CircleCheckFilledIcon style="color: #5FEDB1;" class="mr-4" />
            </template>
            <template v-slot:title>
              Membantu penyusunan laporan keuangan secara mudah,
              <br />cepat, dan andal
            </template>
          </v-list-item>
        </v-list>

        <div data-aos="fade-up" data-aos-duration="1000" class="mt-8">
        </div>
      </div>
    </v-col>
    <v-col cols="12" lg="6" md="7" class="d-none d-md-block">
      <div class="position-relative d-flex justify-end" data-aos="fade-up" data-aos-duration="800">
        <img :src="Invoice" alt="dashboard" />
      </div>

    </v-col>
  </v-row>
  <!-- <div class="spacer"></div> -->
</template>
<style lang="scss">
// .bannerText {
//   font-size: 4rem;
// }

.HeaderImage {
  height: 350px;
  width: auto;
  border-radius: 20px;
  transform: scale(1.5);
  transform-origin: 0 25%;
}

.widget1 {
  position: absolute;
  top: -40px;
  right: -170px;
  width: 290px;
  animation: 10s slideY linear infinite;
}

.widget2 {
  position: absolute;
  bottom: -90px;
  left: 300px;
  width: 280px;
  animation: 10s slideY linear infinite;
  animation-delay: 2s;
}

.widgetImages {
  max-width: 100%;
  filter: drop-shadow(0px 0px 50px rgb(33 150 243 / 30%));
}

// @media (max-width: 800px) {
//   .bannerText {
//     font-size: 2rem;
//   }
// }

ul li {
  list-style: none;
}
</style>
