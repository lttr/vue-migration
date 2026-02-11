<template>
  <label class="dual-checkbox">
    <input
      type="checkbox"
      :checked="internalValue"
      @change="onChange"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value?: boolean
  modelValue?: boolean
  label?: string
}>()
const emit = defineEmits<{
  'input': [value: boolean]
  'update:modelValue': [value: boolean]
}>()

const internalValue = computed(() => props.modelValue ?? props.value ?? false)

function onChange(e: Event) {
  const val = (e.target as HTMLInputElement).checked
  emit('input', val)
  emit('update:modelValue', val)
}
</script>

<style scoped>
.dual-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 2px solid #9333ea;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.dual-checkbox input {
  width: 18px;
  height: 18px;
  accent-color: #9333ea;
}
</style>
