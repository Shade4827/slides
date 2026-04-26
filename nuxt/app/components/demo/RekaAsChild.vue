<template>
  <section>
    <div class="flex items-center mb-3">
      <h2 class="text-xl font-semibold">3. as-child</h2>
      <OpenNewTabIcon
        url="https://reka-ui.com/docs/guides/composition" 
        class="ml-2 mt-2"
      />
    </div>

    <DialogRoot>
      <DialogTrigger as-child>
        <a href="#" class="link">
          リンクでモーダルを開く
        </a>
      </DialogTrigger>

      <DialogTrigger as-child class="mt-4">
        <img
          src="/og-image.png"
          alt="モーダルを開くトリガーを設定したOG画像"
          class="w-64 cursor-pointer"
        >
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay class="overlay" />

        <DialogContent class="content">
          <DialogTitle class="font-bold">タイトル</DialogTitle>

          <DialogDescription>as-childにより任意の要素に機能を付与できる</DialogDescription>

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

.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>