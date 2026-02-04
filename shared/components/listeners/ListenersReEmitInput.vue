<template>
  <input
    class="reemit-input"
    v-bind="$attrs"
    @input="onInput"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
  />
</template>

<script lang="ts">
export default { inheritAttrs: false }
</script>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'input', event: Event): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()

const onInput = (e: Event) => {
  emit('input', e)
}
</script>

<style scoped>
.reemit-input {
  padding: 8px 12px;
  border: 2px solid #0891b2;
  border-radius: 4px;
  font-size: 16px;
}
.reemit-input:focus {
  outline: none;
  border-color: #0e7490;
}
</style>
