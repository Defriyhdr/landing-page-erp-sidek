<script setup lang="ts">
// assets
import imgMail from '@/shared/assets/images/landing/img-groupmail.png';
</script>

<template>
  <div class="rowbg spacer">
    <v-container class="maxWidth">
      <v-row class="align-center">
        <v-col lg="5" cols="12" md="5" class="text-right d-md-block d-none">
          <img alt="product" :src="imgMail" class="subimg" />
        </v-col>
        <v-col lg="7" cols="12" md="7">
          <v-card elevation="10" class="pa-lg-15 pa-6">
            <h1 class="text-h1 mb-3">Subscribe</h1>
            <p class="text-body-1">Subscribe for the latest news & updates of Berry admin template. We never send spam
              newsletters.</p>
            <div class="d-flex gap-3 mt-6 mb-8">
              <v-text-field variant="outlined" color="primary" hide-details label="Email Address" />
              <v-btn color="primary" size="large">Subscribe</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.subimg {
  width: 330px;
  animation: 5s wings ease-in-out infinite;
  max-width: 100%;
}

.rowbg {
  background: linear-gradient(90deg, rgb(227, 242, 253) 65%, rgb(255, 255, 255) 65%);
}
</style>
