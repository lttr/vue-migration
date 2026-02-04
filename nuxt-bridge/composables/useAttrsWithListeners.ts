import { computed, getCurrentInstance } from 'vue'

/**
 * Vue 2.7 composable to merge $attrs and $listeners for forwarding.
 * In Vue 3, $listeners is merged into $attrs automatically.
 */
export function useAttrsWithListeners() {
  const instance = getCurrentInstance()

  return computed(() => {
    if (!instance) return {}

    const attrs = instance.proxy?.$attrs || {}
    const listeners = instance.proxy?.$listeners || {}

    return { ...attrs, ...listeners }
  })
}
