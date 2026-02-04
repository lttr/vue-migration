<template>
  <div>
    <h2>Pattern 4: Fix B - Re-emit events</h2>
    <p>Child explicitly emits <code>click</code> event.</p>

    <ReEmitChild @click="handleClick" />

    <p class="hint">Works in both Vue 2 and Vue 3. Explicit emit.</p>
  </div>
</template>

<script setup lang="ts">
function handleClick() {
  console.log('[4-reemit] @click fired via explicit emit')
}
</script>

<style scoped>
.hint {
  margin-top: 16px;
  color: #666;
  font-size: 14px;
}
code {
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
