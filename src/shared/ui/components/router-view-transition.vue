<script setup lang="ts">
import { RouteLocationNormalized } from 'vue-router'

const getKey = (route: RouteLocationNormalized) => String(route.name)

</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition as string || 'fade'" mode="out-in">
      <!-- This div is required because <transition> requires a single children node -->
      <div :key="getKey(route)" class="router-view-transition-wrapper">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>
