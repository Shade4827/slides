<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-4">
    <h1 class="text-6xl">{{ error.status }}</h1>
    <NuxtLink to="/" class="text-lg">Go back home</NuxtLink>
  </div>
</template>
