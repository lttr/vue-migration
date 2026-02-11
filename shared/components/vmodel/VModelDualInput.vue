<template>
  <input
    class="dual-input"
    :value="internalValue"
    @input="onInput"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ value?: string; modelValue?: string }>()
const emit = defineEmits<{
  'input': [value: string]
  'update:modelValue': [value: string]
}>()

const internalValue = computed(() => props.modelValue ?? props.value ?? '')

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('input', val)
  emit('update:modelValue', val)
}
</script>

<style scoped>
.dual-input {
  padding: 8px 12px;
  border: 2px solid #0891b2;
  border-radius: 4px;
  font-size: 16px;
}
.dual-input:focus {
  outline: none;
  border-color: #0e7490;
}
</style>
