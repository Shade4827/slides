<script setup lang="ts">
import type { SlideCard } from '~/types/SlideCard'

const { apiFetch } = useApiFetch()

const { data: slides } = await useAsyncData('slide-list', async () => {
  const slides = await apiFetch<SlideCard[]>(`/slides.json?t=${Date.now()}`)

  return slides.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
})
</script>

<template>
  <section>
    <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <SlideCard
        v-for="(slide, index) in slides"
        :key="index"
        :slide-card="slide"
      />
    </div>
  </section>
</template>
