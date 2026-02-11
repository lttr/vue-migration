<template>
  <select
    class="dual-select"
    :value="internalValue"
    @change="onChange"
  >
    <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
  </select>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value?: string
  modelValue?: string
  options: string[]
}>()
const emit = defineEmits<{
  'input': [value: string]
  'update:modelValue': [value: string]
}>()

const internalValue = computed(() => props.modelValue ?? props.value ?? '')

function onChange(e: Event) {
  const val = (e.target as HTMLSelectElement).value
  emit('input', val)
  emit('update:modelValue', val)
}
</script>

<style scoped>
.dual-select {
  padding: 8px 12px;
  border: 2px solid #f59e0b;
  border-radius: 4px;
  font-size: 16px;
  background: white;
}
.dual-select:focus {
  outline: none;
  border-color: #d97706;
}
</style>
