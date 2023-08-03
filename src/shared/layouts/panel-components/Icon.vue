<script setup>
const props = defineProps(['item', 'level']);
const isStringPath = computed(() => typeof props.item == 'string')
</script>

<template>
  <template v-if="isStringPath">
    <v-avatar rounded="0" size="62"> <v-img sizes="62" :src="item" /> </v-avatar>
  </template>

  <template v-else>
    <template v-if="level > 0">
      <component :is="item" size="5" fill="currentColor" stroke-width="1.5" class="iconClass"></component>
    </template>
    <template v-else>
      <component :is="item" size="20" stroke-width="1.5" class="iconClass"></component>
    </template>
  </template>
</template>
