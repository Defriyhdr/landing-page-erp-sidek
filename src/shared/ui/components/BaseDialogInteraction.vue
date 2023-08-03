<script setup lang="ts">
import { useProvideBaseDialog } from '../composeables/useBaseDialog'
const {
  dialog, component, dialogProps, componentOptions,
  overlay,
  confirmDialog, hideConfirmDialog, onConfirm
} = useProvideBaseDialog(false)

</script>

<template>
  <slot />

  <VDialog v-model="dialog" v-bind:="dialogProps">
    <component :is="component" v-bind="componentOptions?.props" v-on="{ ...componentOptions?.events }" />
  </VDialog>


  <v-overlay persistent class="align-center justify-center" :model-value="overlay">
    <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
  </v-overlay>


  <v-dialog v-model="confirmDialog">
    <v-card title="Perhatian" :width="300" class="d-flex align-center justify-center mx-auto" :elevation="2">
      <v-card-item class="text-center">
        Aksi yang anda lakukan tidak dapat dikembalikan seperti semula
      </v-card-item>
      <v-card-actions class="mt-4">
        <v-btn @click="hideConfirmDialog" color="#90A4AE">BATAL</v-btn>
        <v-btn @click="onConfirm" color="primary">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
