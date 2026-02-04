<template>
  <div>
    <h2>Pattern 3: Fix A - Forward attrs</h2>
    <p>Child uses <code>v-bind="$attrs"</code> (listeners included in Vue 3).</p>

    <ForwardChild @click="handleClick" />

    <p class="hint">Works in both Vue 2 (with composable) and Vue 3. Explicit forwarding.</p>
  </div>
</template>

<script setup lang="ts">
function handleClick() {
  console.log('[3-forward] @click fired via forwarded $attrs')
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
