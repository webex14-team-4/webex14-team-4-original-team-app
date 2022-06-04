<template>
  <div class="header">
    <router-link class="link subtitle" to="/">algoLearn</router-link>
    <div class="menu">
      <router-link class="link index" to="">一覧</router-link>
      <router-link class="link login" to="login">ログイン</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  border-bottom: 1px solid gray;
}
.header > .subtitle {
  font-size: 2rem;
}
.header .link {
  text-decoration: none;
  color: black;
}
.menu {
  display: flex;
  justify-content: space-between;
}
.menu > * {
  margin: 0 20px;
}
</style>
