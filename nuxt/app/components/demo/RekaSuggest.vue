<script setup lang="ts">
interface Item {
  id: number
  label: string
}

const items = Array.from({ length: 10000 }).map<Item>((_, i) => ({
  id: i,
  label: `Item ${i}`
}))

const inputValue = ref('')
const selectedValue = ref<Item | null>(null)

const filteredItems = computed(() => {
  if (!inputValue.value) return items
  return items.filter(item =>
    item.label.toLowerCase().includes(inputValue.value.toLowerCase())
  )
})
</script>

<template>
  <section>
    <div class="flex items-center mb-3">
      <h2 class="text-xl font-semibold">
        2. サジェスト機能(Combobox)
      </h2>
      <OpenNewTabIcon
        url="https://reka-ui.com/docs/guides/virtualization" 
        class="ml-2 mt-2"
      />
    </div>

    <ComboboxRoot v-model="selectedValue">
      <ComboboxInput
        v-model="inputValue"
        placeholder="入力してください"
        class="input"
      />

      <ComboboxContent class="dropdown">
        <ComboboxViewport class="max-h-80 overflow-y-auto">
          <ComboboxVirtualizer
            v-slot="{ option }"
            :options="filteredItems"
            :estimate-size="32"
            :text-content="(opt) => opt.label"
          >
            <ComboboxItem
              :key="option.id"
              :value="option"
              class="item text-black"
              @select="selectedValue = option"
            >
              {{ option.label }}
            </ComboboxItem>
          </ComboboxVirtualizer>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxRoot>

    <p class="mt-2">
      選択値: {{ selectedValue?.label ?? 'なし' }}
    </p>
  </section>
</template>

<style scoped>
.input {
  padding: 8px;
  border: 1px solid #ccc;
  width: 200px;
}

.dropdown {
  background: white;
  border: 1px solid #ccc;
  margin-top: 4px;
}

.item {
  padding: 0 8px;
  height: 32px;
  cursor: pointer;
}

.item[data-highlighted] {
  background: #eee;
}

.item:hover {
  background: #eee;
}
</style>
