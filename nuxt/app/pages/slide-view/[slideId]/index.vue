<script setup lang="ts">
import type { SlideCard } from '~/types/SlideCard'
const route = useRoute()

const slideUrl = computed(() => {
  if (!route.params.slideId) return undefined
  return `/slides/${route.params.slideId}/`
})

const { data: slide } = await useFetch<SlideCard>(`/api/slides/${route.params.slideId}`)

if (!slide) {
  throw createError({ statusCode: 404 })
}
</script>

<template>
  <div>
    <div class="flex gap-4 mb-3">
      <h2 class="text-3xl font-bold">{{ slide?.title }}</h2>
      <CopyLinkIcon :link="slide?.link || ''" :size="'2.5em'" />
    </div>
    <p class="text-gray-400 mb-6">{{ slide?.info }}</p>
    <div class="w-full max-w-5xl mx-auto mb-4">
      <div class="aspect-video w-full">
        <iframe
          v-if="slideUrl"
          :key="slideUrl"
          :src="slideUrl"
          class="w-full h-full shadow-lg"
        />
      </div>
    </div>
  </div>
</template>
