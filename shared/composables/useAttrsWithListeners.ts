import { useAttrs, computed, version, getCurrentInstance } from 'vue'

const isVue3 = version.startsWith('3')

/**
 * @deprecated Uses getCurrentInstance() — only for Vue 2→3 migration
 * Remove in cleanup phase, replace with useAttrs()
 */
export function useAttrsWithListeners() {
  const attrs = useAttrs()

  if (isVue3) {
    return { attrs, listeners: computed(() => ({})) }
  }

  const instance = getCurrentInstance()
  const listeners = computed(() => (instance?.proxy as any)?.$listeners || {})

  return { attrs, listeners }
}
