<template>
  <HeaderVue />
  <router-view class="main" />
  <FooterVue />
</template>

<script>
import HeaderVue from "./components/Header.vue"
import FooterVue from "./components/Footer.vue"

export default {
  components: {
    HeaderVue,
    FooterVue,
  },
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
html * {
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.main {
  margin: 0 300px;
}
</style>
