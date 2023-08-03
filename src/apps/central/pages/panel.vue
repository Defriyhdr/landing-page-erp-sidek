<script setup lang="ts">
import RouterViewTransition from '@/shared/ui/components/router-view-transition.vue';
import VerticalHeader from '@/shared/layouts/panel-components/VerticalHeader.vue';
import VerticalSidebar from '@/shared/layouts/panel-components/VerticalSidebar.vue';
import BaseDialog from '@/shared/ui/components/BaseDialogInteraction.vue'
import { useCustomizerStore } from '@/shared/ui/stores/customizer.store';
import Customizer from '@/shared/ui/components/Customizer.vue';
import { useOnline } from '@vueuse/core'
import type { ISiderbarMenu } from '@/shared/types';
import { SettingsIcon, LogoutIcon, LayoutBoardIcon, UserCircleIcon } from 'vue-tabler-icons';
import { mdiAccount } from '@mdi/js'

import { IconSet, type T_ICONSET_VARIANT } from '@/shared/assets/iconset'

onMounted(() => customizer.SET_MINI_SIDEBAR(true))


const online = useOnline()
const customizer = useCustomizerStore();
const route = useRoute()
const centralAdminStore = useCentralAdminStore();

const selectedTheme = computed(() => customizer.iconsetTheme)
const iconset = IconSet.set(selectedTheme.value as T_ICONSET_VARIANT);
watch(selectedTheme, () => window.location.reload())

// PROVIDE STATE FROM THE STORE
const logout = async () => {
  centralAdminStore.RESET_CURRENT_ADMIN()
  window.location.href = '/'
}


const sidebarMenu: ISiderbarMenu[] = [
  {
    icon: iconset.get().home,
    title: 'Home',
    to: { name: 'CENTRAL_PANEL_DASHBOARD' },
  },
  {
    id: 'AKUNTANSI',
    title: 'Akuntansi',
    icon: iconset.get().akuntansi,
    to: { name: 'CENTRAL_PANEL_AKUNTANSI' },
    submenu: {
      "Akuntansi": [
        {
          text: 'Daftar Akun',
          to: { name: 'CENTRAL_PANEL_AKUNTANSI_DAFTAR_AKUN' },
        },
        {
          text: 'Saldo Awal',
          to: { name: 'CENTRAL_PANEL_AKUNTANSI_SALDO_AWAL' },
        },
        {
          text: 'Daftar Jurnal',
          to: { name: 'CENTRAL_PANEL_AKUNTANSI_DAFTAR_JURNAL' },
        },
        {
          text: 'Buku Besar',
          to: { name: 'CENTRAL_PANEL_AKUNTANSI_BUKU_BESAR' },
        },

      ],
      "Laporan": [
        {
          text: 'Laporan Keuangan',
          to: { name: 'CENTRAL_PANEL_AKUNTANSI_LAPORAN_KEUANGAN' },
        },
      ],
      "Konfigurasi": [
        {
          text: 'Jurnal Keuangan',
          to: { name: 'CENTRAL_PANEL_AKUNTANSI_KONFIGURASI_JURNAL_KEUANGAN' },
        },
        {
          text: 'Jurnal Persediaan',
          to: { name: 'CENTRAL_PANEL_AKUNTANSI_KONFIGURASI_JURNAL_PERSEDIAAN' },
        },
        {
          text: 'Jurnal Pembelian',
          to: { name: 'CENTRAL_PANEL_AKUNTANSI_KONFIGURASI_JURNAL_PEMBELIAN' },
        },
        {
          text: 'Jurnal Penjualan',
          to: { name: 'CENTRAL_PANEL_AKUNTANSI_KONFIGURASI_JURNAL_PENJUALAN' },
        },
      ]
    }
  },
  {
    id: 'KEUANGAN',
    title: 'Keuangan',
    icon: iconset.get().keuangan,
    to: { name: 'CENTRAL_PANEL_KEUANGAN' },
    submenu: {
      "Kas": [
        {
          text: 'Pengaturan Kas',
          to: { name: 'CENTRAL_PANEL_KEUANGAN_SETTING_KAS' }
        },
        // {
        //   text: 'Laproan Kas',
        //   to: { name: 'CENTRAL_PANEL_KEUANGAN_LAPORAN_KAS' }
        // }
      ]
    }
  },
  {
    title: 'Pembelian',
    id: 'PEMBELIAN',
    icon: iconset.get().pembelian,
    to: { name: 'CENTRAL_PANEL_PEMBELIAN' },
    submenu: {
      "Pembelian": [
        {
          text: 'Diskon',
          to: { name: 'CENTRAL_PANEL_PEMBELIAN_DISKON' }
        },
        {
          text: 'Pajak',
          to: { name: 'CENTRAL_PANEL_PEMBELIAN_PAJAK' }
        }
      ],
      "Pemasok": [
        {
          text: 'Daftar Pemasok',
          to: { name: 'CENTRAL_PANEL_PEMBELIAN_DAFTAR_PEMASOK' }
        },
        {
          text: 'Daftar Utang',
          to: { name: 'CENTRAL_PANEL_PENJUALAN_BUKU_UTANG' }
        }
      ]
    }
  },
  {
    id: 'PENJUALAN',
    title: 'Penjualan',
    icon: iconset.get().penjualan,
    to: { name: 'CENTRAL_PANEL_PENJUALAN' },
    submenu: {
      "Penjualan": [
        {
          text: 'Diskon',
          to: { name: 'CENTRAL_PANEL_PENJUALAN_DISKON' }
        },
        {
          text: 'Pajak',
          to: { name: 'CENTRAL_PANEL_PENJUALAN_PAJAK' }
        }
      ],
      "Pelanggan": [
        {
          text: 'Daftar Pelanggan',
          to: { name: 'CENTRAL_PANEL_PENJUALAN_DAFTAR_CUSTOMER' }
        },
        {
          text: 'Daftar Piutang',
          to: { name: 'CENTRAL_PANEL_PENJUALAN_BUKU_PIUTANG' }
        }
      ]
    }
  },
  {
    id: 'PERSEDIAAN',
    title: 'Persediaan',
    icon: iconset.get().persediaan,
    to: { name: 'CENTRAL_PANEL_PERSEDIAAN' },
    submenu: {
      "Produk": [
        {
          text: 'Kategori Produk',
          to: { name: 'CENTRAL_PANEL_PERSEDIAAN_KATEGORI_PRODUK' }
        },
        {
          text: 'Satuan Produk',
          to: { name: 'CENTRAL_PANEL_PERSEDIAAN_SATUAN_PRODUK' }
        },
        {
          text: 'Daftar Produk',
          to: { name: 'CENTRAL_PANEL_PERSEDIAAN_PRODUK' }
        }
      ]
    }
  },
  {
    title: 'Manufaktur',
    icon: iconset.get().manufaktur,
    to: { name: 'CENTRAL_PANEL_MANUFAKTUR' }
  },
  {
    title: 'Karyawan',
    icon: iconset.get().karyawan,
    to: { name: 'CENTRAL_PANEL_KARYAWAN' }
  }
]
const currentSubmenu = computed(() => sidebarMenu.find(it => it.id == route.meta.modul)?.submenu)


</script>

<template>
  <v-app :theme="customizer.actTheme" :class="[
    customizer.actTheme,
    customizer.fontTheme,
    customizer.mini_sidebar ? 'mini-sidebar' : '',
    customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
    customizer.inputBg ? 'inputWithbg' : ''
  ]">
    <BaseDialog>

      <VerticalSidebar :sidebar-menu="sidebarMenu" />
      <VerticalHeader>

        <template #submenu>

          <template v-for="values, key of currentSubmenu" :key="key">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn variant="plain" v-bind="props">
                  {{ key }}
                </v-btn>
              </template>
              <v-sheet rounded="md" elevation="2">
                <v-list>
                  <v-list-item v-for="sub in values" :key="sub.text" :to="sub.to">
                    <!-- <template v-slot:prepend> <v-icon :icon="sub.icon"></v-icon> </template> -->
                    <v-list-item-title class="font-weight-regular">
                      {{ sub?.text ?? '-' }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-menu>
          </template>
        </template>


        <!-- -------------------------------------------------------------- -->
        <!-- actions adalah element yang ditampilkan disebelah kanan header -->
        <!-- -------------------------------------------------------------- -->
        <template #actions>
          <v-menu :close-on-content-click="true">
            <template v-slot:activator="{ props }">
              <v-btn color="#546E7A" variant="text" rounded="pill" v-bind="props" class="px-1">
                <v-avatar size="30" class="mr-2 py-2" color="secondary">
                  <v-icon :icon="mdiAccount" />
                </v-avatar>

                <div class="hidden-md-and-down d-md-flex align-md-center">
                  <span class="mr-3">{{ centralAdminStore.currentAdmin.name ?? '-' }}</span>
                  <SettingsIcon />
                </div>
              </v-btn>
            </template>
            <v-sheet rounded="md" width="330" elevation="2">
              <div class="pa-4">

                <v-list class="mt-3">
                  <v-list-item color="secondary" rounded="md">
                    <v-list-item-title class="text-subtitle-1"> {{ centralAdminStore.currentAdmin.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="mt-2">{{ centralAdminStore.currentAdmin.email }}</v-list-item-subtitle>
                  </v-list-item>

                  <v-divider class="my-3"></v-divider>

                  <v-list-item :to="{ name: 'profile-pengguna' }" color="secondary" rounded="md">
                    <template v-slot:prepend>
                      <UserCircleIcon size="20" class="mr-2" />
                    </template>
                    <v-list-item-title  class="text-subtitle-2"> Profile</v-list-item-title>
                  </v-list-item>


                  <v-list-item color="secondary" rounded="md"
                    @click="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)">
                    <template v-slot:prepend>
                      <LayoutBoardIcon size="20" class="mr-2" />
                    </template>
                    <v-list-item-title class="text-subtitle-2"> Antarmuka</v-list-item-title>
                  </v-list-item>


                  <v-list-item @click="logout" color="secondary" rounded="md">
                    <template v-slot:prepend>
                      <LogoutIcon size="20" class="mr-2" />
                    </template>
                    <v-list-item-title class="text-subtitle-2"> Logout</v-list-item-title>
                  </v-list-item>
                </v-list>

              </div>
            </v-sheet>
          </v-menu>
        </template>
      </VerticalHeader>
      <Customizer />


      <!-- OFFLINE DETECTOR -->
      <div v-show="!online" style="position: fixed;top: 0;width: 100%; z-index: 1000000;" id="offline-alert-wrapper">
        <v-alert density="compact" type="warning" title="Perhatian" text="anda sedang offline"></v-alert>
      </div>

      <v-main>
        <v-container fluid class="page-wrapper">
          <div :class="customizer.boxed ? 'maxWidth' : ''">
            <!-- Global Interaction Component Provider -->

            <RouterViewTransition />

          </div>
        </v-container>
      </v-main>
    </BaseDialog>
  </v-app>
</template>

<route lang="yaml">
    name : CENTRAL_PANEL
    meta : 
      title : Panel Admin Pusat
      layout : blank
</route>
