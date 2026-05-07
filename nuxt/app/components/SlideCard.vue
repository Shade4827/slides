<script setup lang="ts">
import type { SlideCard } from '~/types/SlideCard'

interface Props {
  slideCard: SlideCard
}

const { slideCard } = defineProps<Props>()
</script>

<template>
  <div class="mb-2">
    <NuxtLink
      :to="`/slide-view/${slideCard.link}`"
      class="transition hover:opacity-50 block"
    >
      <div class="w-full h-60 bg-gray-200 rounded-lg overflow-hidden mb-2">
        <img
          v-if="slideCard.thumbnail"
          :src="slideCard.thumbnail"
          alt="Thumbnail"
          class="w-full h-full object-cover"
        >
      </div>
    </NuxtLink>
    <div class="flex gap-2">
      <p class="text-xl font-semibold flex-1 min-w-0 truncate">{{ slideCard.title }}</p>    
      <CopyLinkIcon :link="slideCard.link" class="w-6 h-6 shrink-0"/>
    </div>
  </div>
</template>
