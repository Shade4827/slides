<script setup lang="ts">
useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const query = ref('')
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Reka UI Demo</h1>
    <RekaDialog />
    <RekaSuggest />
    <RekaAsChild v-model="query"/>
  </div>
</template>
