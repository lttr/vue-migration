<template>
  <input
    class="define-model-input"
    v-model="model"
  />
</template>

<script setup lang="ts">
const model = defineModel<string>({ default: '' })
</script>

<style scoped>
.define-model-input {
  padding: 8px 12px;
  border: 2px solid #06b6d4;
  border-radius: 4px;
  font-size: 16px;
}
.define-model-input:focus {
  outline: none;
  border-color: #0891b2;
}
</style>
