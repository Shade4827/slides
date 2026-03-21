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
    <iframe
      v-if="slideUrl"
      :key="slideUrl"
      :src="slideUrl"
      style="width:100%;height:100vh;border:none"
    />
  </div>
</template>
