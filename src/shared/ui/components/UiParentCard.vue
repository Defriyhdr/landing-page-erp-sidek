<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

// ===============================|| Ui Parent Card||=============================== //
<template>
  <v-card variant="outlined" elevation="1" class="withbg" min-height="90vh" v-bind="props" title="">
    <v-card-item>
      <div class="d-flex align-center justify-space-between">
        <slot name="left-action"></slot>
        <v-card-title class="mx-auto">
          <template v-if="title">{{ title }}</template>
          <slot name="title-with-action"></slot>
        </v-card-title>
        <!-- <template v-slot:append> -->
        <slot name="action"></slot>
        <!-- </template> -->
      </div>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>
