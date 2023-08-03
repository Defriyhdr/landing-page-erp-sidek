<script setup>
const props = defineProps({ item: Object });
</script>

<template>
  <v-list-subheader color="darkText" class="smallCap mt-4">{{ props.item.header }}</v-list-subheader>
  <!-- custom divider -->
  <div class="mb-3" style="height: 1px; width: 90%; background-color: #d4d7d787;"></div>
</template>
