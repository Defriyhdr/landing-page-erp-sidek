<script setup lang="ts">
import { vMaska } from 'maska'
import type { MaskaDetail, MaskInputOptions } from 'maska'

const props = defineProps(['modelValue', 'disabled', 'bgColor', 'placeholder', 'alignRight', 'readonly'])
const emits = defineEmits(['update:modelValue'])

const options: MaskInputOptions = {
  preProcess: (val: string) => {
    return val.replace(/\D/g, '');
  },
  postProcess: (val: string) => {
    return Intl.NumberFormat('id-ID', {
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(parseInt(val) || 0);
  },
  mask: '0.9',
  tokens: {
    '0': { pattern: /[0-9]/gim, multiple: true },
    '9': { pattern: /[0-9]/gim, optional: true }
  },
  onMaska: (detail: MaskaDetail) => {
    const numberValue = parseInt(detail.unmasked) || undefined;
    emits('update:modelValue', numberValue)
  }
}

const isFocused = ref<boolean>(false)
const toggleFocus = (value: boolean) => isFocused.value = value
</script>

<template>
  <div :style="{ backgroundColor: props.bgColor }"
    style="display: flex;align-items: center;justify-content: space-between; border: 1px solid rgba(0, 0, 0, 0.1); height: 36px;  border-radius: 5px;">
    <span style="padding-left: 14px;">
      <p v-show="isFocused">Rp </p>
    </span>
    <!-- max length dibuat maksimal 1 trilliun -->
    <!-- length 1 trilliun = 12, ditambah jumlah separator . jadinya length 15  -->
    <input :readonly="readonly ?? false" :style="{ textAlign: props.alignRight ? 'right' : 'initial' }" :maxlength="15"
      :placeholder="props.placeholder" :disabled="props.disabled" @focusin="toggleFocus(true)" @blur="toggleFocus(false)"
      :value="modelValue" v-maska:[options] />
  </div>
</template>

<style scoped >
input {
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
}
</style>
