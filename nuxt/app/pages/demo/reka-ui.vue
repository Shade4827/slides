<script setup lang="ts">
const query = ref('')
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Reka UI Demo</h1>
    <RekaDialog />
    <RekaSuggest />
    <Rekaas-child v-model="query"/>
  </div>
</template>
