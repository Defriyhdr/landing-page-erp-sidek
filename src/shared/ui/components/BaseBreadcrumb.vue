<script setup lang="ts">
import { ChevronRightIcon } from 'vue-tabler-icons';
import { mdiHome } from '@mdi/js'
const props = defineProps({
  title: String,
  breadcrumbs: Array<any>,
  icon: String
});
</script>

// ===============================|| Theme Breadcrumb ||=============================== //
<template>
  <v-card variant="outlined" elevation="1" class="px-4 py-3 withbg mb-3" style="overflow-x: auto;">
    <v-breadcrumbs :items="props.breadcrumbs" class="text-h5 pa-1">
      <template v-slot:divider>
        <div class="d-flex align-center">
          <ChevronRightIcon size="17" />
        </div>
      </template>
      <template v-slot:prepend>
        <v-icon size="small" :icon="mdiHome" class="text-secondary"></v-icon>
        <div class="d-flex align-center">
          <ChevronRightIcon size="17" />
        </div>
      </template>
    </v-breadcrumbs>

  </v-card>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>
