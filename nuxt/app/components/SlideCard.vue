<script setup lang="ts">
import type { SlideCard } from '~/types/SlideCard'

interface Props {
  slideCard: SlideCard
}

const { slideCard } = defineProps<Props>()
</script>

<template>
  <div>
    <a :href="`/slide-view/${slideCard.link}`" class="block">
      <div class="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
        <img
          v-if="slideCard.thumbnail"
          :src="slideCard.thumbnail"
          alt="Thumbnail"
          class="w-full h-full object-cover"
        >
      </div>
      <h2 class="text-xl font-semibold mt-4">{{ slideCard.title }}</h2>
    </a>
  </div>
</template>
