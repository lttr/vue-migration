<template>
  <input class="options-input" v-bind="attrs" v-on="listeners" />
</template>

<script lang="ts">
import { useAttrsWithListeners } from '~/composables/useAttrsWithListeners'

// Options API with composable shim
// TODO(vue3-cleanup): replace with useAttrs() + v-bind="$attrs"
export default {
  inheritAttrs: false,
  setup() {
    const { attrs, listeners } = useAttrsWithListeners()
    return { attrs, listeners }
  }
}
</script>

<style scoped>
.options-input {
  padding: 8px 12px;
  border: 2px solid #9333ea;
  border-radius: 4px;
  font-size: 16px;
}
.options-input:focus {
  outline: none;
  border-color: #7e22ce;
}
</style>
