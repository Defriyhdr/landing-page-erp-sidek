<script setup lang="ts">
import { useCustomizerStore } from '@/shared/ui';
import { Menu2Icon } from 'vue-tabler-icons';


const customizer = useCustomizerStore();
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);

watch(priority, (newPriority) => {
  // yes, console.log() is a side effect
  priority.value = newPriority;
});


</script>

<template>
  <v-app-bar app :elevation="0" :priority="priority" height="60" dense>

    <v-btn class="hidden-lg-and-up" @click="customizer.SET_SIDEBAR_DRAWER" icon>
      <Menu2Icon size=" 20" />
    </v-btn>

    <slot name="submenu"></slot>



    <v-spacer />
    <!-- ---------------------------------------------- -->
    <!---right part -->
    <!-- ---------------------------------------------- -->



    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <slot name="actions" />
  </v-app-bar>
</template>
