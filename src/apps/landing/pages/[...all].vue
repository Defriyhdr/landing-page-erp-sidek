<template>
    <div class="d-flex flex-column align-center">
        <h1 class="text-h1">Mohon maaf</h1>
        <p>
            <small>Halaman yang anda cari tidak ada</small>
        </p>
        <v-btn :to="{ name: 'LANDING_PAGE' }" color="error" size="small" variant="tonal" class="mt-4">
            Kembali Ke Halaman Utama
        </v-btn>
    </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
