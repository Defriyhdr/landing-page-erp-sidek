<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
const props = defineProps({
    tooltip: String,
})
const emits = defineEmits(['click'])

</script>

<template>
    <v-tooltip :text="props.tooltip" location="top">
        <template v-slot:activator="{ props }">
            <v-btn @click="emits('click')" v-bind="props" variant="tonal" :size="36" color="#8C9498" class="mx-1">
                <slot></slot>
            </v-btn>
        </template>
    </v-tooltip>
</template>