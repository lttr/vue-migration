<template>
  <button class="forward-btn" v-bind="$attrs">Click Me (ForwardChild)</button>
</template>

<script setup lang="ts">
// Vue 3: $attrs already includes listeners, just forward it
</script>

<style scoped>
.forward-btn {
  padding: 8px 16px;
  background: #16a34a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
