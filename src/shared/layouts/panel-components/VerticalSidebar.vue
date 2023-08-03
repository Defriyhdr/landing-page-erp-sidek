<script setup lang="ts">
import { useCustomizerStore } from '@/shared/ui/stores/customizer.store';

import NavGroup from './NavGroup.vue';
import NavItem from './NavItem.vue';
import NavCollapse from './NavCollapse.vue';
import Logo from '@/shared/ui/components/Logo.vue';
import type { ISiderbarMenu } from '@/shared/types'

const customizer = useCustomizerStore();

const props = defineProps<{
  sidebarMenu: ISiderbarMenu[]
}>()

const dark = computed(() => {
  if (
    customizer.actTheme === 'DarkPurpleTheme' ||
    customizer.actTheme === 'DarkGreenTheme' ||
    customizer.actTheme === 'DarkSpeechBlueTheme' ||
    customizer.actTheme === 'DarkOliveGreenTheme' ||
    customizer.actTheme === 'DarkPinkTheme' ||
    customizer.actTheme === 'DarkYellowTheme' ||
    customizer.actTheme === 'DarkSeaGreenTheme'
  ) {
    return true;
  } else {
    return false;
  }
});

</script>

<template>
  <v-navigation-drawer left v-model="customizer.Sidebar_drawer" elevation="0" rail-width="80" mobile-breakpoint="960" app
    class="leftSidebar" :rail="customizer.mini_sidebar" expand-on-hover>

    <div class="pl-3" style="height: 60px; box-shadow: rgb(0 0 0 / 9%) -1px 1px 13px 2px;">


      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <Logo />
          <p :style="{ color: dark ? 'white' : '#073C64' }" class="ml-6 text-h2 Montserrat">SIDEK</p>
        </div>

      </div>
    </div>


    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div class="scrollnavbar">
      <v-list style="margin-top: -7px;">
        <!---Menu Loop -->
        <template v-for="(item) in props.sidebarMenu">
          <!---Item Sub Header -->
          <NavGroup :item="item" v-if="item.header" :key="item.title" />
          <!---Item Divider -->
          <v-divider class="my-3" v-else-if="item.divider" />
          <!---If Has Child -->
          <NavCollapse :item="item" :level="0" v-else-if="item.children" />
          <!---Single Item-->
          <NavItem :item="item" v-else />
          <!---End Single Item-->
        </template>
      </v-list>

    </div>
  </v-navigation-drawer>
</template>
