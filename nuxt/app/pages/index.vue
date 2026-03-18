<script setup lang="ts">
import type { SlideCard } from '~/types/SlideCard'

const slides: SlideCard[] = [
  {
    title: 'sample',
    link: '/slide-view/sample',
    thumbnail: '/favicon.ico',
    details: 'This is the sample slide',
  },
  {
    title: 'Slide 2',
    link: '/slide-2',
  },
  {
    title: 'Slide 3',
    link: '/slide-3',
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
