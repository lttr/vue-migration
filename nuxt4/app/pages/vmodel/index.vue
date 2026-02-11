<template>
  <div class="patterns">
    <h1>v-model Patterns</h1>
    <p>Vue 2 <code>v-model</code> desugars to <code>value</code>/<code>input</code>.
      Vue 3 desugars to <code>modelValue</code>/<code>update:modelValue</code>.</p>
    <p class="note">Explicit bindings like <code>:value="x" @input="handler"</code> are regular props/events
      and work identically in both versions. Only the <code>v-model</code> <strong>shorthand</strong> changes behavior.
      API style (Options vs Composition) is irrelevant - the desugaring happens in the parent's template compiler.</p>

    <section class="danger">
      <h2>1. Legacy (broken in Vue 3)</h2>
      <p>Options API with <code>value</code> prop + <code>input</code> event.</p>
      <VModelLegacyInput v-model="legacyText" />
      <output>{{ legacyText }}</output>
      <p class="note"><strong>Silent breakage:</strong> In Vue 3, <code>v-model</code> passes <code>modelValue</code>
        (ignored) and listens for <code>update:modelValue</code> (never emitted).
        No error is thrown - the binding just stops working.</p>
    </section>

    <section class="fix">
      <h2>2. Explicit value/input binding (recommended)</h2>
      <p>Same <code>value</code>/<code>input</code> component - just skip <code>v-model</code> in the parent.</p>
      <VModelLegacyInput
        :value="explicitText"
        @input="explicitText = $event"
      />
      <output>{{ explicitText }}</output>
      <p class="note">Simplest fix: the component doesn't change at all. Since <code>:value</code> and
        <code>@input</code> are regular props/events (no desugaring), they work identically in Vue 2 and Vue 3.
        Cleanup: replace with <code>defineModel()</code>, parents switch to <code>v-model</code> shorthand.</p>
    </section>

    <section class="fix alt">
      <h2>3. Explicit modelValue binding</h2>
      <p>Uses <code>modelValue</code> + <code>update:modelValue</code>. Parents bind explicitly.</p>
      <VModelExplicitInput
        :model-value="modelValueText"
        @update:model-value="modelValueText = $event"
      />
      <output>{{ modelValueText }}</output>
      <p class="note">Pre-aligns the component with Vue 3's <code>v-model</code> contract.
        In Vue 2, event listener must be camelCase (<code>@update:modelValue</code>)
        because Vue 2 does not normalize event names.</p>
    </section>

    <section class="fix alt">
      <h2>4. Dual pattern (only if v-model shorthand required)</h2>
      <p>Accepts both <code>value</code> and <code>modelValue</code>, emits both events.</p>
      <VModelDualInput v-model="dualText" />
      <output>{{ dualText }}</output>
      <p class="note">Use only when parent <code>v-model</code> shorthand cannot be replaced with explicit binding
        (e.g. widely-used form atoms with many call sites). Same pattern applies to checkbox, select, etc.</p>
    </section>

    <section class="fix">
      <h2>5. Named fields (explicit props)</h2>
      <p>Multiple named props with <code>update:propName</code> events.</p>
      <VModelNamedFields
        :first-name="firstName"
        :last-name="lastName"
        @update:first-name="firstName = $event"
        @update:last-name="lastName = $event"
      />
      <output>{{ firstName }} {{ lastName }}</output>
      <p class="note">Compatible pattern for multiple v-models. Cleanup: replace with named <code>defineModel('firstName')</code>,
        parents use <code>v-model:first-name</code>.</p>
    </section>

    <section class="fix vue3">
      <h2>6. defineModel (Vue 3 only)</h2>
      <p>The <code>defineModel()</code> macro - cleanest Vue 3 approach.</p>
      <VModelDefineModelInput v-model="defineModelText" />
      <output>{{ defineModelText }}</output>
      <p class="note">No manual prop/emit boilerplate needed. This is the cleanup target for patterns 2-4.</p>
    </section>

    <section class="fix vue3">
      <h2>7. defineModel named (Vue 3 only)</h2>
      <p>Named <code>defineModel('firstName')</code> for multiple v-models.</p>
      <VModelDefineModelMulti
        v-model:first-name="dmFirstName"
        v-model:last-name="dmLastName"
      />
      <output>{{ dmFirstName }} {{ dmLastName }}</output>
      <p class="note">Cleanup target for pattern 5. Replaces the <code>.sync</code> modifier from Vue 2.</p>
    </section>

    <p class="back"><NuxtLink to="/">← Back to home</NuxtLink></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const legacyText = ref('hello')
const explicitText = ref('hello')
const modelValueText = ref('hello')
const dualText = ref('hello')
const firstName = ref('Jane')
const lastName = ref('Doe')
const defineModelText = ref('hello')
const dmFirstName = ref('Jane')
const dmLastName = ref('Doe')
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
section.alt {
  border-color: #eab308;
  background: #fefce8;
}
section.vue3 {
  border-color: #8b5cf6;
  background: #f5f3ff;
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
output {
  display: block;
  margin-top: 8px;
  padding: 4px 8px;
  background: #f9fafb;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
  color: #374151;
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
