<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <div class="cover">
    <span class="corner tl" aria-hidden="true"></span>
    <span class="corner tr" aria-hidden="true"></span>
    <span class="corner bl" aria-hidden="true"></span>
    <span class="corner br" aria-hidden="true"></span>

    <div class="title">
      <h1 class="text-4xl font-bold text-center">{{ title }}</h1>
      <h2 class="text-lg text-center text-gray-500 font-bold">かげろん @shade4827</h2>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
  background: linear-gradient(135deg, #f0f9f8 0%, #e6f7f5 40%, #d1f0ff 100%);
}

.corner {
  position: absolute;
  width: 48px;
  height: 48px;
  color: #20b2aa;
  pointer-events: none;
}

.corner::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  background: currentColor;
  top: 0;
  left: 0;
}

.corner::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 100%;
  background: currentColor;
  top: 0;
  left: 0;
}

.corner.tl { top: 16px; left: 16px; }
.corner.tr { top: 16px; right: 16px; }
.corner.bl { bottom: 16px; left: 16px; }
.corner.br { bottom: 16px; right: 16px; }

.corner.tr::before { left: auto; right: 0; }
.corner.tr::after { left: auto; right: 0; }

.corner.bl::before { top: auto; bottom: 0; }
.corner.bl::after { top: auto; bottom: 0; }

.corner.br::before { left: auto; right: 0; top: auto; bottom: 0; }
.corner.br::after { left: auto; right: 0; top: auto; bottom: 0; }

h1 { margin: 0; }

.title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
</style>
