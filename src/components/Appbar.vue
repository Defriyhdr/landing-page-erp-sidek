<script lang="ts" setup>
import OfficialLogo from '@/shared/assets/images/landing/official-logo.png'
import { Menu2Icon } from 'vue-tabler-icons';
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay();
const drawer = ref(false);
</script>

<template>
  <v-app-bar elevation="0" flat height="74" class="border-bottom position-fixed">
    <v-container class="fill-height maxWidth">
      <div class="d-flex gap-3 align-center justify-space-between w-100">
        <v-img :src="OfficialLogo" width="0" />
        <!---/Search part -->
        <v-spacer />
        <!-- ---------------------------------------------- -->
        <!---right part -->
        <!-- ---------------------------------------------- -->
        <template v-if="mdAndUp">
          <v-btn color="#000000" class="mr-4" variant="plain" to="/">Tentang Sidek ERP</v-btn>
          <v-btn width="80" href="" variant="outlined" color="primary">Masuk</v-btn>
          <v-btn width="80" href="" variant="flat" color="primary">Daftar</v-btn>
        </template>
        <template v-else>
          <v-btn color="lightsecondary" icon rounded="sm" variant="flat" size="small" @click="drawer = true">
            <Menu2Icon size="20" />
          </v-btn>
        </template>
      </div>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="right" floating v-if="!mdAndUp">
    <v-list color="primary">

      <v-list-item title="Tentang SIDEK-ERP" />
      <v-list-item title="Masuk" />
      <v-list-item title="Daftar" />

    </v-list>
  </v-navigation-drawer>
</template>
