<template>
  <div>
    <h1>Nuxt 4 (Vue 3.5)</h1>
    <p>Component migration testing</p>

    <nav>
      <ul>
        <li><NuxtLink to="/native/">.native modifier patterns</NuxtLink></li>
        <li><NuxtLink to="/listeners/">$listeners patterns</NuxtLink></li>
        <li><NuxtLink to="/vmodel/">v-model patterns</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
nav ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
nav a {
  color: #4f46e5;
}
</style>
