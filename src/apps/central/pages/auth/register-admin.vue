<script setup lang="ts">
import { useCentralAdminStore } from '@/apps/central/stores'
import { useCentralAdminApi } from '@/apps/central/api/central.admin.api'
import { Field, Form } from 'vee-validate';
import OfficialLogo from '@/shared/assets/official-full-logo.svg'
import * as yup from 'yup';
import { mdiEye, mdiEyeOff } from '@mdi/js'

const store = useCentralAdminStore()

const schema = yup.object({
  name: yup.string().required('wajib diisi'),
  phone: yup.string().required('wajib diisi').max(14),
  email: yup.string().required('wajib diisi').email(),
  password: yup.string().required('wajib diisi'),
  repeat_password: yup.string().required('wajib diisi').oneOf([yup.ref('password')], 'Konfirmasi Password tidak sesuai'),
});


const REGISTER_ADMIN_ACTION = useAsyncState(useCentralAdminApi().auth.register, null, {
  immediate: false, throwError: true, resetOnExecute: true, onSuccess(res) {
    store.currentAdmin.email = res?.data?.data?.email
    store.currentAdmin.token = res?.data?.data?.token
    store.currentAdmin.name = res?.data?.data?.name
    store.currentAdmin.role = res?.data?.data?.role
    store.currentAdmin.perusahaan_id = res?.data.data?.perusahaan_id
    store.currentAdmin.step_installasi_perusahaan = res?.data.data?.step_installasi_perusahaan
  }
})
const hasLoading = computed(() => REGISTER_ADMIN_ACTION.isLoading.value)
const loadingAttrs = computed(() => ({
  'loading': hasLoading.value,
  'disabled': hasLoading.value
}))
const showPassword = ref(false)
const togglePassword = () => showPassword.value = !showPassword.value
const passwordAttrs = computed(() => ({
  'type': showPassword.value ? 'text' : 'password',
  'append-inner-icon': showPassword.value ? mdiEye : mdiEyeOff
}))

const onSubmit = (payload: any) => {
  REGISTER_ADMIN_ACTION.execute(0, payload)
}
</script>


<template>
  <div class="h-100vh d-flex align-center authbg">

    <template v-if="[200, 201].some(it => REGISTER_ADMIN_ACTION.state.value?.status)">
      <v-card class="mx-auto withbg text-center fade-in-bck" width="450">
        <v-card-title class="my-3">Akun anda berhasil didaftarkan </v-card-title>
        <v-divider />
        <v-card-text class="text-h4" style="font-weight: normal;">
          Silahkan hubungi customer service via Whatsapp, untuk mengkonfirmasi pembayaran dan mengaktivasi akun anda
        </v-card-text>
        <v-card-actions>
          <v-btn block variant="tonal" color="primary" to="/">Kembali ke halaman depan</v-btn>
        </v-card-actions>
      </v-card>
    </template>

    <template v-else>
      <Form as="v-form" class="mx-auto" :validation-schema="schema" @submit="onSubmit">

        <v-card class="withbg fade-in-bck" elevation="0" height="530" width="400" v-bind:="loadingAttrs"
          variant="outlined">

          <v-img class="mx-auto mt-10" :src="OfficialLogo" width="64" height="auto" />
          <div class="d-flex mt-3">
            <span class="mx-auto text-center font-weight-bold text-h3">Registrasi</span>
          </div>

          <v-card-text class="mb-0 pa-0 px-7 pb-7">
            <Field name="name" v-slot="{ field, errors }">
              <v-text-field :hide-details="true" v-bind="field" :error-messages="errors" label="Nama" density="compact" />
            </Field>

            <Field name="phone" v-slot="{ field, errors }">
              <v-text-field :hide-details="true" v-bind="field" :error-messages="errors" type="phone" label="Nomor HP"
                density="compact" />
            </Field>
            <Field name="email" v-slot="{ field, errors }">
              <v-text-field :hide-details="true" v-bind="field" :error-messages="errors" type="email" label="Email"
                density="compact" />
            </Field>
            <Field name="password" v-slot="{ field, errors }">
              <v-text-field :hide-details="true" :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? mdiEye : mdiEyeOff" v-bind="field" :error-messages="errors"
                label="Password" density="compact" @click:append-inner="togglePassword" />
            </Field>

            <Field name="repeat_password" v-slot="{ field, errors }">
              <v-text-field :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? mdiEye : mdiEyeOff" v-bind="field" :error-messages="errors"
                label="Ulangi Password" :hide-details="true" density="compact" @click:append-inner="togglePassword" />
            </Field>

            <v-row class="mt-10" no-gutters>
              <v-col class="d-flex justify-start">
                <v-btn color="#000000" variant="plain" to="/">Kembali</v-btn>
              </v-col>
              <v-col class="d-flex justify-end">
                <v-btn color="primary" :elevation="0" type="submit">Daftar</v-btn>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </Form>
    </template>
  </div>
</template>


<style scoped>
.fade-in-bck {
  -webkit-animation: fade-in-bck 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fade-in-bck 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2023-5-9 17:43:59
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in-bck
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-bck {
  0% {
    -webkit-transform: translateZ(80px);
    transform: translateZ(80px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

@keyframes fade-in-bck {
  0% {
    -webkit-transform: translateZ(80px);
    transform: translateZ(80px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>

<route lang="yaml">
name : CENTRAL_AUTH_REGISTER_ADMIN
meta : 
    title : ERP Sidek | Bergabung
</route>
