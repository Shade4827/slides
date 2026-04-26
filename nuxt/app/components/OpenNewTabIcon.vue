<script setup lang="ts">
interface Props {
  url: string
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 20
})
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon
        name="material-symbols:open-in-new"
        :size="size"
    />
  </a>
</template>