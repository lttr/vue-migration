<template>
  <button class="double-btn" @click="handleInternalClick">Click Me (DoubleFireChild)</button>
</template>

<script setup lang="ts">
function handleInternalClick() {
  console.log('[double] INTERNAL handler fired')
}
</script>

<style scoped>
.double-btn {
  padding: 8px 16px;
  background: #f59e0b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
