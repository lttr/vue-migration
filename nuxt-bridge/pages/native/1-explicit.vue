<template>
  <div>
    <h2>Pattern 1: Explicit .native modifier</h2>
    <p>Using <code>@click.native</code> to listen for native DOM events on component root.</p>

    <ChildButton @click.native="handleClick" />

    <p class="hint">Vue 2: fires on root element click. Vue 3: .native is deprecated (error or ignored).</p>
  </div>
</template>

<script setup lang="ts">
function handleClick() {
  console.log('[1-explicit] @click.native fired')
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
