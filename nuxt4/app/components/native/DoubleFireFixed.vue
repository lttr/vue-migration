<template>
  <button class="fixed-btn" @click="handleInternalClick">Click Me (Fixed)</button>
</template>

<script setup lang="ts">
// Declaring click in emits prevents fallthrough
defineEmits<{
  click: [event: MouseEvent]
}>()

function handleInternalClick() {
  console.log('[fixed] INTERNAL handler fired')
}
</script>

<style scoped>
.fixed-btn {
  padding: 8px 16px;
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
