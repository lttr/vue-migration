<template>
  <div>
    <h2>Pattern 1: Explicit .native modifier</h2>
    <p>Using <code>@click.native</code> - this syntax is invalid in Vue 3.</p>

    <!-- This will cause a warning/error or be ignored in Vue 3 -->
    <ChildButton @click.native="handleClick" />

    <p class="hint">Vue 3: .native modifier removed. Event either errors or gets silently ignored.</p>
  </div>
</template>

<script setup lang="ts">
function handleClick() {
  console.log('[1-explicit] @click.native fired (should not see this in Vue 3)')
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
