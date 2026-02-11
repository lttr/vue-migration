<template>
  <input
    class="explicit-input"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script setup lang="ts">
defineProps<{ modelValue?: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped>
.explicit-input {
  padding: 8px 12px;
  border: 2px solid #16a34a;
  border-radius: 4px;
  font-size: 16px;
}
.explicit-input:focus {
  outline: none;
  border-color: #15803d;
}
</style>
