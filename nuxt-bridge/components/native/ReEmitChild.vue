<template>
  <button class="reemit-btn" @click="$emit('click', $event)">Click Me (ReEmitChild)</button>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<style scoped>
.reemit-btn {
  padding: 8px 16px;
  background: #0891b2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
