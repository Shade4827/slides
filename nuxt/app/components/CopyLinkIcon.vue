<script setup lang="ts">
interface Props {
  link: string
}

const { link } = defineProps<Props>()
const copied = ref(false)

const copyLink = async () => {
  try {
    if (copied.value) return

    await navigator.clipboard.writeText(`${window.location.origin}/slide-view/${link}`)
    
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <Icon
    :name="copied ? 'material-symbols:check' : 'material-symbols:link'"
    :class="copied ? 'text-green-500' : 'text-gray-500'"
    class="transition hover:opacity-50 cursor-pointer"
    size="2em"
    @click="copyLink"
  />
</template>