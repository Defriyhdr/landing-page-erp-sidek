<script>
import { defineComponent } from 'vue'

// ambil fungsionalitas profil akun
import { useProfilAkun } from '@/apps/central/composealbles/useProfilAkun'
const { GET_PROFIL, UPDATE_PROFIL } = useProfilAkun();

export default defineComponent({
  // WRITE ON MOUNTED
  mounted() { this.loadProfile() },

  // 1. WRITE STATE
  data: function () {
    return {
      isLoading: false,
      profilePayload: {
        name: null, //nullable 
        email: null,
        phone: null,
        foto: null, //nulable
        alamat: null, //nullable
        facebook: null, //nullable
        instagram: null, //nullable
        tiktok: null, //nullable
        sosmed_lain: null //nullable
      }
    }
  },

  // 2. WRITE METHODS
  methods: {

    onSubmit() {
      UPDATE_PROFIL
        .execute()
        .then()
        .catch()
    },

    // 3. loadprofile methods
    loadProfile() {
      this.isLoading = true;
      GET_PROFIL
        .execute(0)
        .then((res) => {
          this.profilePayload.name = res.data.data.nama;
          this.profilePayload.email = res.data.data.email;
          this.profilePayload.foto = res.data.data?.foto;
          this.isLoading = false;
        })
        .catch((error) => { console.log(error) })
    }
  },
})
</script>

<template>
  <v-card :loading="isLoading">
    <!-- <pre>{{ profilePayload }}</pre> -->
  </v-card>
</template>
<route setup lang="yaml">
   name : test
   meta : 
       title : test page
</route>
