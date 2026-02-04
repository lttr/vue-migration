<template>
  <button class="silent-btn">Click Me (SilentChild)</button>
</template>

<script setup lang="ts">
// Intentionally: no emit, no v-bind="$attrs" forwarding
// In Vue 2: parent @click does nothing (it's not native, component doesn't emit)
// In Vue 3: @click becomes a fallthrough attr and fires on root element
</script>

<style scoped>
.silent-btn {
  padding: 8px 16px;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
