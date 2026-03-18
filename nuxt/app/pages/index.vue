<script setup lang="ts">
import type { SlideCard } from '~/types/SlideCard'

const slides: SlideCard[] = [
  {
    title: 'sample',
    link: 'sample',
    thumbnail: '/favicon.ico',
    details: 'This is the sample slide',
  },
  {
    title: 'Why Choose Sapporo',
    link: 'why-choose-sapporo',
  },
  {
    title: 'Slide 3',
    link: 'slide-3',
  },
]
</script>

<template>
  <section>
    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <SlideCard
        v-for="(slide, index) in slides"
        :key="index"
        :slide-card="slide"
      />
    </div>
  </section>
</template>
