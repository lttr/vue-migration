<template>
  <div>
    <h2>Pattern 2: Hidden behavior change</h2>
    <p>Parent uses <code>@click</code>, child doesn't emit or forward.</p>

    <SilentChild @click="handleClick" />

    <p class="hint">Vue 3: fires via fallthrough attrs. Vue 2: would do nothing.</p>
  </div>
</template>

<script setup lang="ts">
function handleClick() {
  console.log('[2-hidden] @click fired (Vue 3 fallthrough behavior)')
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
