<script setup lang="ts">
interface IColorSet {
    create: string;
    edit: string;
    delete: string;
    default: string;
    warning: string,
    null: string
}
const props = defineProps({
    buttonType: { type: String, default: 'default' }
})
const emits = defineEmits({})
const colorSet: IColorSet = {
    create: '#3FB0AC',
    edit: '#5AB8E3',
    delete: '#DC6967',
    default: 'secondary',
    warning: '#DB9328',
    null: 'secondary',
}
// @ts-ignore
const getColor = computed(() => colorSet[props.buttonType])
</script>

<template>
    <v-btn v-on="{ ...emits }" v-bind="props" variant="tonal" :color="getColor"
        :style="{ border: `2px solid ${getColor}` }">
        <slot />
    </v-btn>
</template>
