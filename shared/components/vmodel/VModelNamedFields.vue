<template>
  <div class="named-fields">
    <input
      class="named-input"
      placeholder="First name"
      :value="firstName"
      @input="onFirstName"
    />
    <input
      class="named-input"
      placeholder="Last name"
      :value="lastName"
      @input="onLastName"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  firstName?: string
  lastName?: string
}>()
const emit = defineEmits<{
  'update:firstName': [value: string]
  'update:lastName': [value: string]
}>()

function onFirstName(e: Event) {
  emit('update:firstName', (e.target as HTMLInputElement).value)
}
function onLastName(e: Event) {
  emit('update:lastName', (e.target as HTMLInputElement).value)
}
</script>

<style scoped>
.named-fields {
  display: flex;
  gap: 8px;
}
.named-input {
  padding: 8px 12px;
  border: 2px solid #4f46e5;
  border-radius: 4px;
  font-size: 16px;
  flex: 1;
}
.named-input:focus {
  outline: none;
  border-color: #4338ca;
}
</style>
