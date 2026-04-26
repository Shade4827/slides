<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import QRCode from 'qrcode'

interface Props {
  url: string
}

const props = defineProps<Props>()

const canvasRef = ref<HTMLCanvasElement | null>(null)

watchEffect(async () => {
  if (!canvasRef.value) return

  await QRCode.toCanvas(canvasRef.value, props.url, {
    width: 200,
    margin: 2,
  })
})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>
