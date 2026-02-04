<template>
  <button class="forward-btn" v-bind="attrs" v-on="listeners">Click Me (ForwardChild)</button>
</template>

<script setup lang="ts">
import { useAttrsWithListeners } from '../../composables/useAttrsWithListeners'

// Cross-compatible: useAttrsWithListeners handles Vue 2/3 differences
const { attrs, listeners } = useAttrsWithListeners()
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
