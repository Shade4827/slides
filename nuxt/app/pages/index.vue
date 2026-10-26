<script setup lang="ts">
const { data: slides, error } = await useSlides()

if (error.value) {
  throw error.value
}

const sortedSlides = computed(() =>
  [...(slides.value ?? [])].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)
</script>

<template>
  <section>
    <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <SlideCard v-for="(slide, index) in sortedSlides" :key="index" :slide-card="slide" />
    </div>
  </section>
</template>
