<template>
  <div class="patterns">
    <h1>.native Modifier Patterns</h1>
    <p>Vue 2 → Vue 3 event handling differences. Open console to see output.</p>

    <section>
      <h2>1. Explicit .native</h2>
      <p><code>@click.native</code> - ignored in Vue 3, fires via fallthrough</p>
      <ChildButton @click.native="log('explicit', '@click.native fired (via fallthrough)')" />
    </section>

    <section>
      <h2>2. Hidden behavior</h2>
      <p><code>@click</code> on component that doesn't emit - fires via fallthrough in Vue 3</p>
      <SilentChild @click="log('hidden', '@click fired (Vue 3 fallthrough)')" />
    </section>

    <section>
      <h2>3. Fix A: Forward attrs</h2>
      <p>Child uses <code>v-bind="$attrs"</code></p>
      <ForwardChild @click="log('forward', '@click fired via forwarded $attrs')" />
    </section>

    <section>
      <h2>4. Fix B: Re-emit</h2>
      <p>Child explicitly emits <code>click</code> event</p>
      <ReEmitChild @click="log('reemit', '@click fired via explicit emit')" />
    </section>

    <section class="danger">
      <h2>5. Double-fire danger</h2>
      <p>Child has internal <code>@click</code>, parent also adds <code>@click</code></p>
      <DoubleFireChild @click="log('double', 'PARENT handler fired')" />
      <p class="hint">Vue 2: only internal fires. Vue 3: BOTH fire!</p>
    </section>

    <section class="fix">
      <h2>6. Fix: defineEmits</h2>
      <p>Declaring <code>click</code> in emits prevents fallthrough</p>
      <DoubleFireFixed @click="log('fixed', 'PARENT handler fired')" />
      <p class="success">Parent's @click won't fire - not forwarded as fallthrough</p>
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
section.danger {
  border-color: #ef4444;
  background: #fef2f2;
}
section.fix {
  border-color: #22c55e;
  background: #f0fdf4;
}
.hint {
  margin-top: 12px;
  font-size: 14px;
  color: #dc2626;
}
.success {
  margin-top: 12px;
  font-size: 14px;
  color: #16a34a;
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
.back {
  margin-top: 24px;
}
</style>
