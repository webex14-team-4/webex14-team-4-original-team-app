<template>
  <div class="header">
    <router-link class="link subtitle" to="/">algoLearn</router-link>
    <div class="menu">
      <router-link
        class="link"
        :to="menu.link"
        v-for="menu in menus"
        :key="menu"
      >
        {{ menu.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerMenus: {
        "": [
          { name: "一覧", link: "/index" },
          { name: "ログイン", link: "/login" },
        ],
        login: [
          { name: "一覧", link: "/index" },
          { name: "サインアップ", link: "/signup" },
        ],
        signup: [
          { name: "一覧", link: "/index" },
          { name: "ログイン", link: "/login" },
        ],
        manager: [
          { name: "投稿", link: "/edit/new" },
          { name: "ログアウト", link: "/" },
        ],
        edit: [
          { name: "破棄", link: "/manager" },
          { name: "一時保存", link: "/manager" },
          { name: "保存", link: "/manager" },
        ],
        index: [
          { name: "一覧", link: "/index" },
          { name: "ログイン", link: "/login" },
        ],
        show: [
          { name: "一覧", link: "/index" },
          { name: "ログイン", link: "/login" },
        ],
      },
    }
  },
  computed: {
    menus() {
      const paths = this.$route.path.split("/")
      return this.headerMenus[paths[1]]
    },
  },
}
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
