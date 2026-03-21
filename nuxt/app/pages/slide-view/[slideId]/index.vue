<script setup lang="ts">
const route = useRoute()

const slideUrl = computed(() => {
  if (!route.params.slideId) return undefined
  return `/slides/${route.params.slideId}/`
})
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
