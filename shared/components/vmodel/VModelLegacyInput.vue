<template>
  <input
    class="legacy-input"
    :value="value"
    @input="onInput"
  />
</template>

<script lang="ts">
export default {
  props: {
    value: { type: String, default: '' },
  },
  emits: ['input'],
  methods: {
    onInput(e: Event) {
      this.$emit('input', (e.target as HTMLInputElement).value)
    },
  },
}
</script>

<style scoped>
.legacy-input {
  padding: 8px 12px;
  border: 2px solid #ef4444;
  border-radius: 4px;
  font-size: 16px;
}
.legacy-input:focus {
  outline: none;
  border-color: #dc2626;
}
</style>
