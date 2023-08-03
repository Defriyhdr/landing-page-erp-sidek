<template>
    <div class="d-flex flex-column align-center">
        <h1 class="text-h1">Mohon maaf</h1>
        <p>
            <small>Data yang anda cari tidak ada</small>
        </p>
        <v-btn :to="{ name: 'CENTRAL_AUTH_LOGIN' }" color="error" size="small" variant="tonal" class="mt-4">
            Kembali Ke Panel
        </v-btn>
    </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
