---
status: draft
---

# Fix $listeners Shim Pattern

## Problem

`v-bind="allAttrs"` can't bind event handlers in Vue 2 — they serialize to strings.

## Changes

### 1. Fix composable to return separate attrs/listeners

**File:** `nuxt-bridge/composables/useAttrsWithListeners.ts`

```ts
export function useAttrsWithListeners() {
  const attrs = useAttrs()
  if (isVue3) return { attrs, listeners: {} }

  const instance = getCurrentInstance()
  const listeners = computed(() => (instance?.proxy as any)?.$listeners || {})
  return { attrs, listeners }
}
```

### 2. Update shim component to use v-bind + v-on

**File:** `nuxt-bridge/components/listeners/ListenersShimInput.vue`

```vue
<input class="shim-input" v-bind="attrs" v-on="listeners" />

<script setup>
const { attrs, listeners } = useAttrsWithListeners()
</script>
```

Same for `nuxt4/app/components/listeners/ListenersShimInput.vue` (listeners will be empty obj in Vue 3).

### 3. Add Options API example component

**New files:**
- `nuxt-bridge/components/listeners/ListenersOptionsInput.vue`
- `nuxt4/app/components/listeners/ListenersOptionsInput.vue`

```vue
<template>
  <input class="options-input" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
```

Vue 3 version uses only `v-bind="$attrs"` (listeners merged).

### 4. Update demo pages

Add third section showing Options API pattern.

## Verification

```bash
# Vue 2.7
browser-console --url http://localhost:5001/listeners/
# Trigger events on all 3 inputs, verify logs

# Vue 3
browser-console --url http://localhost:5002/listeners/
# Same verification
```
