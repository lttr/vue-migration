<template>
  <div class="patterns">
    <h1>$listeners Patterns</h1>
    <p>Two approaches to handle $listeners removal in Vue 3. Open console.</p>

    <section>
      <h2>1. Shim approach (useAttrsWithListeners)</h2>
      <p>Composable merges <code>$attrs</code> + <code>$listeners</code></p>
      <ListenersShimInput
        placeholder="Type here..."
        @input="log('shim', 'input event')"
        @focus="log('shim', 'focus event')"
        @blur="log('shim', 'blur event')"
      />
      <p class="note">Transitional — uses getCurrentInstance() antipattern</p>
    </section>

    <section>
      <h2>2. Re-emit approach (recommended)</h2>
      <p>Child explicitly emits each event it supports</p>
      <ListenersReEmitInput
        placeholder="Type here..."
        @input="log('reemit', 'input event')"
        @focus="log('reemit', 'focus event')"
        @blur="log('reemit', 'blur event')"
      />
      <p class="note">No deprecated APIs, TypeScript-friendly</p>
    </section>

    <section>
      <h2>3. Options API (native pattern)</h2>
      <p>Uses <code>v-bind="$attrs" v-on="$listeners"</code> directly</p>
      <ListenersOptionsInput
        placeholder="Type here..."
        @input="log('options', 'input event')"
        @focus="log('options', 'focus event')"
        @blur="log('options', 'blur event')"
      />
      <p class="note">Vue 2: requires both. Vue 3: only v-bind="$attrs"</p>
    </section>

    <p class="back"><NuxtLink to="/">← Back to home</NuxtLink></p>
  </div>
</template>

<script setup lang="ts">
function log(pattern: string, message: string) {
  console.log(`[${pattern}] ${message}`)
}
</script>

<style scoped>
.patterns {
  max-width: 600px;
}
section {
  margin: 24px 0;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}
h2 {
  margin: 0 0 8px;
  font-size: 18px;
}
p {
  margin: 0 0 12px;
  color: #666;
}
code {
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
}
.note {
  margin-top: 12px;
  font-size: 14px;
  color: #6b7280;
  font-style: italic;
}
.back {
  margin-top: 24px;
}
</style>
