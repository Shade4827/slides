<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <section>
    <h2 class="text-xl font-semibold mb-3">1. ダイアログ</h2>

    <DialogRoot v-model:open="open">
      <DialogTrigger as-child>
        <button class="btn">モーダルを開く</button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay class="overlay" />

        <DialogContent class="content">
          <DialogTitle class="font-bold">タイトル</DialogTitle>

          <DialogDescription>Reka UIの基本的なダイアログです</DialogDescription>

          <DialogClose as-child class="mt-4">
            <button class="btn">閉じる</button>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </section>
</template>

<style scoped>
.btn {
  padding: 8px 16px;
  background: #333;
  color: white;
  border-radius: 6px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
}
.content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background: white;
  padding: 20px;
}
</style>
