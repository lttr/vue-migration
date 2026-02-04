<template>
  <button class="forward-btn" v-bind="attrsWithListeners">Click Me (ForwardChild)</button>
</template>

<script setup lang="ts">
import { useAttrsWithListeners } from '~/composables/useAttrsWithListeners'

const attrsWithListeners = useAttrsWithListeners()
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
