<script setup lang="ts">
import { BrandFacebookIcon, BrandTiktokIcon, BrandInstagramIcon, LayoutGridIcon, SquareIcon, SquareCheckIcon } from 'vue-tabler-icons'
import type { TablerIconComponent } from 'vue-tabler-icons'
import { useCentralAdminApi } from '@/apps/central/api/central.admin.api';
import { usePerusahaanStore } from '@/apps/central/stores';
import { BENTUK_USAHA } from '@/core/constant'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

import type { TJENIS_ENTITAS } from '@/shared/types';

const store = usePerusahaanStore();
const api = useCentralAdminApi();

interface ISocmedItem {
  name: string,
  title: string,
  icon: TablerIconComponent,
  color?: string,
  modelValue?: string
}

const route = useRoute()
const router = useRouter()

const socmedList: ISocmedItem[] = [
  {
    name: 'facebook',
    title: 'Facebook',
    icon: markRaw(BrandFacebookIcon),
  },
  {
    name: 'instagram',
    title: 'Instagram',
    icon: markRaw(BrandInstagramIcon),
  },
  {
    name: 'tiktok',
    title: 'Tiktok',
    icon: markRaw(BrandTiktokIcon),
  },
  {
    name: 'sosmed_lain',
    title: 'Lain-lain',
    icon: markRaw(LayoutGridIcon)
  }
]
const selectedSocmed = ref<ISocmedItem[]>([])
const appendSocmed = (newSocmed: ISocmedItem) => {
  selectedSocmed.value = [...selectedSocmed.value, newSocmed]
}
const removeFromSelectedSocmed = (clickedSocmed: ISocmedItem) => {
  const index = selectedSocmed.value.findIndex(it => it.name == clickedSocmed.name)
  selectedSocmed.value[index].modelValue = undefined;
  selectedSocmed.value = selectedSocmed.value.filter(it => it.name != clickedSocmed.name)
}


const entitasValue = ref<TJENIS_ENTITAS>();
const entitasItems = [
  { key: 'Bisnis', value: 'bisnis' },
  { key: 'Sosial', value: 'sosial' }
]
watchDebounced(entitasValue, (value) => {
  form.jenis_usaha_id = null
  tipeJenisState.execute(0, value as TJENIS_ENTITAS)
}, { maxWait: 10000, debounce: 400, immediate: true })
const tipeJenisState = useAsyncState(api.jenisUsaha.all, null, { immediate: false });
const tipeJenisUsahaItems = computed(() => tipeJenisState.state.value?.data.data ?? [])

const omsetItems = computed(() => [
  { title: 'Kurang dari 300 Juta', value: 299_999_999 },
  { title: '300 Juta - 2,5 Miliar', value: 2_499_999_999 },
  { title: '2,5 Miliar - 50 Miliar', value: 49_999_999_999 },
  { title: 'Lebih dari 50 Miliar', value: 999_999_999_999 },
])
const karyawanItems = computed(() => [
  { title: '50 sampai 100', value: 51 },
  { title: '100 sampai  150', value: 101 },
  { title: 'Lebih dari 150', value: 151 },
])

const tab = ref(0)
const goToNext = () => {
  if (tab.value < 3) tab.value = tab.value + 1
}
const goPrev = () => {
  if (tab.value != 0) tab.value = tab.value - 1
}

// helper
const onJenisUsahaChange = (id: any) => {
  const selected = tipeJenisUsahaItems.value.find(it => it.id == id);
  if (selected?.is_lain_lain == 1) {
    isMiscJenisUsahaInputDisabled.value = false;
  }
  else {
    isMiscJenisUsahaInputDisabled.value = true
  }
}
const isMiscJenisUsahaInputDisabled = ref<boolean>(true)

const form = reactive({
  nama: "",
  nama_pemilik: '',
  email: '',
  jenis_usaha_id: null,
  alamat: "",
  telepon: "",
  kategori: ["jasa", "dagang"],
  bentuk_usaha: null as any,
  mode: 1,
  kecamatan_id: null,
  omset: null,
  jumlah_karyawan: null as any,
  periode_akuntansi: 'bulanan',
  skala: 'mikro',
  detil_jenis_usaha: ""
})
const convertArrayToObject = (array: Array<ISocmedItem>, key: string) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      // @ts-ignore
      [item[key]]: item?.modelValue ? item?.modelValue : '',
    };
  }, initialValue);
};

const toggleSkDialog = () => skDialog.value = !skDialog.value
const skDialog = ref(false)

const isAgreed = ref(false)
const toggleIsAgreed = () => {
  // ubah ke tidak setuju
  if (isAgreed.value == true) {
    isAgreed.value = false
    return;
  }
  isAgreed.value = false
  toggleSkDialog()
}
const agreeSk = () => {
  isAgreed.value = true
  skDialog.value = false
}


const hasLoading = computed(() => store.REGISTER_PERUSAHAAN_ACTION.isLoading)
const loadingAttrs = computed(() => ({
  'loading': hasLoading.value,
  'disabled': hasLoading.value
}))
function onSubmit() {
  const socmedAsObject = convertArrayToObject(socmedList, 'name')
  const formattedForm = structuredClone(toRaw(form))


  // !DEPRECATED
  // combobox use case
  // jika user menginput data dengan value yang dipilih maka set jumlah_karyawan dengan nilai yang dipilih
  // if (typeof formattedForm.jumlah_karyawan?.value == 'number') { formattedForm.jumlah_karyawan = formattedForm.jumlah_karyawan?.value }

  store.REGISTER_PERUSAHAAN_ACTION.execute(0, { ...socmedAsObject, ...formattedForm })
    .then(response => {
      if (!response?.data.data?.id) throw new Error('tidak memiliki id')

      const idPerusahaanBaru = response?.data.data?.id
      router.replace({ name: 'CENTRAL_AUTH_INSTALLASI', params: { ID_PERUSAHAAN: idPerusahaanBaru } })

    })
}

const setRegionName = (type: '1' | '2' | '3', payload: any) => {
  if (type == '1') {
    selectedRegionName.provinsi = payload
  }
  else if (type == '2') {
    selectedRegionName.kabupaten = payload
  }
  else if (type == '3') {
    selectedRegionName.kecamatan = payload
  }
  else {
    throw new Error('region type not found must be in 1,2, or 3')
  }
}
const selectedRegionName = reactive({
  provinsi: null,
  kabupaten: null,
  kecamatan: null
})
</script>

<template>
  <div class="h-100vh d-flex align-center authbg">
    <v-form ref="Regform" class="mx-auto" @submit.prevent="onSubmit">
      <v-card class="fade-in-bck" elevation="0" width="500" v-bind:="loadingAttrs">
        <v-card-text>
          <div class="d-flex justify-center flex-column align-center">

          </div>
          <v-window v-model="tab">
            <v-window-item :value="0" style="height: 600px;">
              <div class="d-flex flex-column align-center justify-center h-100">

                <h2 class="text-h2">Selamat Datang</h2>
                <span class="text-h5 mt-2 text-center" style="font-weight: normal; line-height: 28px;">
                  "Sukseskan UMKM Bersama SIDEK-ERP" <br />
                  "Kembangkan UMKM Melalui SIDEK-ERP" <br />
                  "Kelola Laporan Usahamu dengan SIDEK-ERP"
                </span>
                <v-btn color="primary" :elevation="0" class="px-10 mt-10" @click="goToNext">next</v-btn>
              </div>

            </v-window-item>
            <v-window-item :value="1" style="overflow-y: scroll; height: 600px;">

              <h4 class="my-4 text-h4 text-center">Identitas Usaha</h4>
              <v-text-field v-model="form.nama" label="Nama usaha*" density="compact" />
              <v-text-field v-model="form.nama_pemilik" label="Pemilik*" density="compact" />
              <v-text-field v-model="form.telepon" label="Nomor telepon*" density="compact" />
              <v-text-field v-model="form.email" label="Email*" density="compact" />
              <v-textarea v-model="form.alamat" label="Alamat*" variant="outlined" density="compact" />

              <select-region v-model="form.kecamatan_id" @setRegionName="setRegionName" />

              <h5 class="text-disabled my-4">Sosial media (opsional)</h5>
              <v-text-field v-model="socmed.modelValue" v-for="socmed in selectedSocmed" :label="socmed.title"
                density="compact">
                <template v-slot:prepend>
                  <v-btn :elevation="1" size="small" icon @click="removeFromSelectedSocmed(socmed)">
                    <component :is="socmed.icon" />
                  </v-btn>
                </template>
              </v-text-field>
              <v-btn v-for="socmed in socmedList.filter(it => selectedSocmed.every(s => s.name != it.name))"
                :key="socmed.name" :elevation="1" size="small" icon class="mr-3" @click="appendSocmed(socmed)">
                <component :is="socmed.icon" />
              </v-btn>

              <div class="d-flex justify-space-between mt-4">
                <v-btn color="grey" variant="text" @click="goPrev" :prepend-icon="mdiChevronLeft"
                  class="mr-2">back</v-btn>
                <v-btn color="primary" variant="text" :append-icon="mdiChevronRight" :elevation="0"
                  @click="goToNext">next</v-btn>
              </div>

            </v-window-item>
            <v-window-item :value="2" style="height: 600px;position: relative;">

              <h4 class="my-4 text-h4 text-center">Klasifikasi Usaha</h4>
              <v-select v-model="entitasValue" :items="entitasItems" label="Entitas" density="compact"
                class="text-capitalize" item-title="key" item-value="value">
                <template v-slot:item="{ props }">
                  <v-list-item v-bind="props"></v-list-item>
                </template>
              </v-select>
              <v-select :loading="tipeJenisState.isLoading.value" v-model="form.jenis_usaha_id"
                @update:model-value="onJenisUsahaChange" :items="tipeJenisUsahaItems" item-title="jenis_usaha"
                item-value="id" label="Jenis Usaha" density="compact" />
              <v-text-field :disabled="isMiscJenisUsahaInputDisabled" v-model="form.detil_jenis_usaha" label="Lain-lain"
                density="compact" />

              <v-select v-model="form.bentuk_usaha" :items="BENTUK_USAHA" label="Bentuk Usaha" density="compact" />

              <v-select v-model="form.omset" :items="omsetItems" label="Omset Tahunan" density="compact" />

              <!-- <v-combobox v-model="form.jumlah_karyawan" clearable persistent-clear :items="karyawanItems" label="Jumlah Karyawan" density="compact" variant="outlined" /> -->
              <v-text-field v-model="form.jumlah_karyawan" label="Jumlah Karyawan" density="compact" variant="outlined"
                type="number" :rules="[(v: any) =>
                  (v && v.length <= 10) || 'Pastikan Menginput data yang sesuai']" />



              <div style="position: absolute; bottom: 0px;width: 100%;">
                <div class="d-flex justify-space-between mt-4">
                  <v-btn color="grey" variant="text" @click="goPrev" :prepend-icon="mdiChevronLeft"
                    class="mr-2">back</v-btn>
                  <v-btn color="primary" variant="text" :append-icon="mdiChevronRight" :elevation="0"
                    @click="goToNext">next</v-btn>
                </div>
              </div>
            </v-window-item>
            <v-window-item :value="3" style="height: 600px; position: relative;">
              <h4 class="my-4 text-h4 text-center">Rangkuman</h4>
              <div style="overflow-y: scroll; height: 400px;">
                <h6 class="text-disabled my-4">Identitas Usaha</h6>
                <v-text-field :model-value="form.nama" :disabled="true" label="Nama usaha*" density="compact" />
                <v-text-field :model-value="form.telepon" :disabled="true" label="Nomor telepon*" density="compact" />
                <v-textarea :model-value="form.alamat" :disabled="true" label="Alamat*" variant="outlined"
                  density="compact" />

                <v-text-field :model-value="selectedRegionName.provinsi" :disabled="true" label="Provinsi*"
                  density="compact" />
                <v-text-field :model-value="selectedRegionName.kabupaten" :disabled="true" label="Kabupaten/kota*"
                  density="compact" />
                <v-text-field :model-value="selectedRegionName.kecamatan" :disabled="true" label="Kecamatan*"
                  density="compact" />

                <h6 class="text-disabled my-4">Sosial media (opsional)</h6>
                <v-text-field :model-value="socmed.modelValue" :disabled="true" v-for="socmed in selectedSocmed"
                  :label="`username ${socmed.name}`" density="compact" class="text-lowercase">
                  <template v-slot:prepend>
                    <component :is="socmed.icon" />
                  </template>
                </v-text-field>

                <h6 class="text-disabled my-4">Klasifikasi Usaha</h6>
                <v-select :model-value="entitasValue" :disabled="true" :items="entitasItems" label="Entitas"
                  density="compact" item-title="key" item-value="value" />
                <v-select :model-value="form.jenis_usaha_id" :disabled="true" :items="tipeJenisUsahaItems"
                  label="Jenis Usaha" density="compact" item-title="jenis_usaha" item-value="id" />

                <v-text-field disabled :model-value="form.detil_jenis_usaha" label="Lain-lain" density="compact" />

                <v-select disabled :model-value="form.bentuk_usaha" :items="BENTUK_USAHA" label="Bentuk Usaha"
                  density="compact" />
                <v-select :model-value="form.omset" :disabled="true" :items="omsetItems" label="Omset"
                  density="compact" />
                <v-select :model-value="form.jumlah_karyawan" :disabled="true" :items="karyawanItems"
                  label="Jumlah Karyawan" density="compact" />

              </div>

              <div>
                <v-btn icon variant="text" @click="toggleIsAgreed">
                  <SquareIcon v-if="!isAgreed" />
                  <SquareCheckIcon v-else />
                </v-btn>
                Saya menyetujui
                <v-btn @click="toggleSkDialog" variant="text" class="ma-0 pa-0" color="primary">
                  syarat dan ketentuan!
                </v-btn>

              </div>

              <div style="position: absolute; bottom: 0px;width: 100%;">
                <div class="d-flex justify-space-between mt-4">
                  <v-btn color="grey" variant="text" @click="goPrev" :prepend-icon="mdiChevronLeft"
                    class="mr-2">back</v-btn>
                  <v-btn :disabled="!isAgreed" type="submit" color="primary" :elevation="0">Simpan</v-btn>
                </div>
              </div>

            </v-window-item>

          </v-window>
        </v-card-text>
      </v-card>
    </v-form>

  </div>

  <v-dialog v-model="skDialog" width="600" scrollable>
    <v-card>
      <v-card-title class="text-center">Syarat dan ketentuan</v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque animi magni. Iusto libero incidunt hic,
        eos aspernatur excepturi unde voluptatum! Illum exercitationem alias vitae voluptas nesciunt ipsa ab
        laudantium.

        <ol class="mt-4 ml-6 text-caption">
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime eaque quam excepturi eius
            repellat quos nisi provident molestias magnam quis impedit, facilis, laborum reiciendis sunt
            pariatur ea, qui itaque?</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime eaque quam excepturi eius
            repellat quos nisi provident molestias magnam quis impedit, facilis, laborum reiciendis sunt
            pariatur ea, qui itaque?</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime eaque quam excepturi eius
            repellat quos nisi provident molestias magnam quis impedit, facilis, laborum reiciendis sunt
            pariatur ea, qui itaque?</li>
        </ol>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="agreeSk" color="primary" :elevation="0">Mengerti</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<style>
.v-input {
  margin-top: 1px !important;
  margin-bottom: 1px !important;
}

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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>


<route lang="yaml">
name : CENTRAL_AUTH_REGISTER_USAHA
meta : 
    title : ERP Sidek | Daftar Usaha
</route>
