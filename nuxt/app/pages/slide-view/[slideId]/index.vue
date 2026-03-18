<script setup lang="ts">
const route = useRoute()

const slideUrl = computed(() => {
  return `/slides/${route.params.slideId}/`
})
</script>

<template>
  <div>
    <iframe
      :src="slideUrl"
      style="width:100%;height:100vh;border:none"
    />
  </div>
</template>
