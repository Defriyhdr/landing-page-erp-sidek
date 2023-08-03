<script setup lang="ts">
import { useInjectBaseDialog } from '../composeables/useBaseDialog'
import { mdiClose } from '@mdi/js'

const dialog = useInjectBaseDialog()
const props = defineProps({ title: String });
const emits = defineEmits(['hide'])

const hideDialog = () => {
    emits('hide');
    dialog?.hide();
}
</script>

<template>
    <!-- -------------------------------------------------------------------- -->
    <!-- Card with Header, Footer, closeable dialog -->
    <!-- -------------------------------------------------------------------- -->
    <v-card v-bind="props" title="">
        <v-card-item>
            <div class="d-flex align-center justify-space-between">
                <v-card-title class="text-18 mx-auto">{{ title }}</v-card-title>
                <v-btn @click="hideDialog" variant="text" color="error" :icon="mdiClose" />


            </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>
            <slot />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-end">
            <slot name="footer" />
        </v-card-actions>
    </v-card>
</template>
