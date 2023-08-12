<script setup lang="ts">
import { mdiInstagram, mdiWhatsapp, mdiGmail } from '@mdi/js'

</script>

<template>
  <v-row class="bg-primary">
    <v-col cols="12">
      <v-container class="maxWidth">
        <v-row class="align-center text-center text-md-left">
          <v-col md="6" cols="12" class="my-3">
            Sistem Informasi Debit dan Kredit
            <br />
            <small>
              Fakultas Ekonomika dan Bisnis Universitas Gadjah Mada
              <br /> Jln. Sosio Humaniora No.1. Bulaksumur, Yogyakarta, Indonesia 55281
            </small>
          </v-col>
          <v-col md="6" cols="12" class="text-center text-md-right">
            <ul class="d-flex flex-column flex-md-row justify-start justify-md-end gap-4 customlink">
              <li>
                <router-link to="https://blog.berrydashboard.io/" target="_blank">
                  <v-icon :icon="mdiInstagram" class="mr-1" />
                  <span class="text-caption">Sidek-erp</span>
                </router-link>
              </li>
              <li>
                <router-link to="https://www.facebook.com/codedthemes" target="_blank">
                  <v-icon :icon="mdiWhatsapp" class="mr-1" />
                  <span class="text-caption">0821-xxx-xxx</span>
                </router-link>
              </li>
              <li>
                <router-link to="https://twitter.com/codedthemes" target="_blank">
                  <v-icon :icon="mdiGmail" class="mr-1" />
                  <span class="text-caption">sidek.erp@gmail.com</span>
                </router-link>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="12" class="bg-dark">
      <v-container class="maxWidth"><small> ©
          {{ new Date().getFullYear() }}
          Faculty of Economics and Business </small>
      </v-container>
    </v-col>
  </v-row>
</template>
<style lang="scss">
.customlink {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: white;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.1);
}

.rowbg {
  background: linear-gradient(90deg, rgb(227, 242, 253) 65%, rgb(255, 255, 255) 65%);
}
</style>
