<script setup lang="ts">
import type { SlideCard } from '~/types/SlideCard'

const { apiFetch } = useApiFetch()

const slides = await apiFetch<SlideCard[]>(`/slides.json?t=${Date.now()}`)
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
