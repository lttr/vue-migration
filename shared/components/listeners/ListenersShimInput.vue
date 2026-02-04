<template>
  <input class="shim-input" v-bind="attrs" v-on="listeners" />
</template>

<script lang="ts">
export default { inheritAttrs: false }
</script>

<script setup lang="ts">
import { useAttrsWithListeners } from '../../composables/useAttrsWithListeners'

// TODO(vue3-cleanup): replace with useAttrs() + v-bind="$attrs"
const { attrs, listeners } = useAttrsWithListeners()
</script>

<style scoped>
.shim-input {
  padding: 8px 12px;
  border: 2px solid #16a34a;
  border-radius: 4px;
  font-size: 16px;
}
.shim-input:focus {
  outline: none;
  border-color: #15803d;
}
</style>
