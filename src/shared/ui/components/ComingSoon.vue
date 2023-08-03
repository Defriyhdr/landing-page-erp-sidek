<template>
  <v-row no-gutters class="h-100vh">
    <v-col class="d-flex align-center justify-center">
      <div class="text-center">
        <div class="CardMediaWrapper">
          <img src="@/shared/assets/images/maintenance/img-error-bg.svg" alt="grid" class="w-100" />
          <img src="@/shared/assets/images/maintenance/img-error-blue.svg" alt="grid" class="CardMediaParts" />
          <img src="@/shared/assets/images/maintenance/img-build.svg" alt="build" class="CardMediaBuild" />
          <img src="@/shared/assets/images/maintenance/img-error-purple.svg" alt="build" class="CardMediaBuild" />
        </div>
        <main>
          <RouterView />
        </main>
      </div>
    </v-col>
  </v-row>
</template>
<style lang="scss">
.CardMediaWrapper {
  max-width: 720px;
  margin: 0 auto;
  position: relative;
}

.CardMediaBuild {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: 5s bounce ease-in-out infinite;
}

.CardMediaParts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: 10s blink ease-in-out infinite;
}
</style>
