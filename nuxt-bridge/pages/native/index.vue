<template>
  <div>
    <h1>.native Modifier Patterns</h1>
    <p>Demonstrating Vue 2 → Vue 3 event handling differences.</p>

    <nav>
      <ul>
        <li><NuxtLink to="/native/explicit">Pattern 1: Explicit .native</NuxtLink></li>
        <li><NuxtLink to="/native/hidden">Pattern 2: Hidden behavior</NuxtLink></li>
        <li><NuxtLink to="/native/forward-attrs">Pattern 3: Fix A - Forward attrs</NuxtLink></li>
        <li><NuxtLink to="/native/reemit">Pattern 4: Fix B - Re-emit</NuxtLink></li>
      </ul>
    </nav>

    <p><NuxtLink to="/">← Back to home</NuxtLink></p>
  </div>
</template>

<style scoped>
nav ul {
  list-style: none;
  padding: 0;
}
nav li {
  margin: 8px 0;
}
nav a {
  color: #4f46e5;
}
</style>
