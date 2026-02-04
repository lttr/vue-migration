<template>
  <button class="forward-btn" v-bind="attrsAndListeners" v-on="$listeners">Click Me (ForwardChild)</button>
</template>

<script lang="ts">
export default {
  computed: {
    attrsAndListeners() {
      return this.$attrs
    }
  }
}
</script>

<style scoped>
.forward-btn {
  padding: 8px 16px;
  background: #16a34a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
