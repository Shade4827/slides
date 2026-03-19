<script setup lang="ts">
import type { SlideCard } from '~/types/SlideCard'
const route = useRoute()

const slideUrl = computed(() => {
  return `/slides/${route.params.slideId}/`
})

const { data: slides } = await useFetch<SlideCard[]>(`${useRequestURL().origin}/slides.json`)

const slide = slides.value?.find(slide => slide.link === route.params.slideId)

if (!slide) {
  throw createError({ statusCode: 404 })
}
</script>

<template>
  <div>
    <iframe
      :src="slideUrl"
      style="width:100%;height:100vh;border:none"
    />
  </div>
</template>
