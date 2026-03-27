<script setup lang="ts">
import type { SlideCard } from '~/types/SlideCard'
const route = useRoute()
const config = useRuntimeConfig()

const slideUrl = computed(() => {
  if (!route.params.slideId) return undefined
  return `/slides/${route.params.slideId}/`
})

const { apiFetch } = useApiFetch()

const { data: slide } = await useAsyncData('slide-detail', async () => {
  const slides = await apiFetch<SlideCard[]>(`/slides.json?t=${Date.now()}`)

  const found: SlideCard | undefined  = slides.find((s: SlideCard) => s.id === route.params.slideId)

  if (!found) {
    throw createError({ statusCode: 404 })
  }

  return found
})

useHead({
  title: slide.value?.title || 'Slide',
  meta: [
    {
      name: 'description',
      content: slide.value?.info || '',
    },
    {
      name: 'og:title',
      content: slide.value?.title || '',
    },
    {
      name: 'og:description',
      content: slide.value?.info || '',
    },
    {
      name: 'og:image',
      content: slide.value?.thumbnail ? `${config.public.siteUrl}${slide.value?.thumbnail}` : '',
    },
    {
      name: 'twitter:title',
      content: slide.value?.title || '',
    }
  ],
})
</script>

<template>
  <div>
    <div class="flex gap-4 mb-3">
      <h2 class="text-3xl font-bold">{{ slide?.title }}</h2>
      <CopyLinkIcon :link="slide?.link || ''" :size="'2.5em'" class="w-6 h-6 shrink-0" />
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
