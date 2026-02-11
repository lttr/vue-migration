<template>
  <div class="define-model-multi">
    <input
      class="named-input"
      placeholder="First name"
      v-model="firstName"
    />
    <input
      class="named-input"
      placeholder="Last name"
      v-model="lastName"
    />
  </div>
</template>

<script setup lang="ts">
const firstName = defineModel<string>('firstName', { default: '' })
const lastName = defineModel<string>('lastName', { default: '' })
</script>

<style scoped>
.define-model-multi {
  display: flex;
  gap: 8px;
}
.named-input {
  padding: 8px 12px;
  border: 2px solid #ec4899;
  border-radius: 4px;
  font-size: 16px;
  flex: 1;
}
.named-input:focus {
  outline: none;
  border-color: #db2777;
}
</style>
