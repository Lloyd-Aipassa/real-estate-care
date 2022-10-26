<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Completed">Completed</router-link> |
    <router-link to="/KnowledgeBase">KnowledgeBase</router-link> |
    <router-link to="/Scheduled">Scheduled</router-link> |
    <router-link to="/Settings">Settings</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #00AAA2;
}
</style>
