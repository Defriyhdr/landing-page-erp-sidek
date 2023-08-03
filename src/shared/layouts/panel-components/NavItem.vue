<script setup>
import SvgIcon from './Icon.vue';

const props = defineProps({ item: Object, level: Number });
</script>

<template>
  <!---Single Item-->
  <v-list-item :to="item.to" rounded class="mb-1" color="secondary" :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''" style="margin: 0;padding: 0;">
    <!---If icon-->
    <template v-slot:prepend>
      <SvgIcon :item="item.icon" />
    </template>
    <v-list-item-title>{{ item.title }}</v-list-item-title>
    <!---If Caption-->
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ item.subCaption }}
    </v-list-item-subtitle>
    <!---If any chip or label-->
    <template v-slot:append v-if="item.chip">
      <v-chip :color="item.chipColor" class="sidebarchip hide-menu" :size="item.chipIcon ? 'small' : 'default'"
        :variant="item.chipVariant" :prepend-icon="item.chipIcon">
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>
</template>
