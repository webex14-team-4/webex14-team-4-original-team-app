<!-- TODO 現在いるページに合わせて適切なヘッダーに変更する 

【ヘッダーの仕様】

〇ヘッダーは全3パターンで想定
- パターン1. ログイン前ページ：TopPage
- パターン2. ログイン関連ページ：LoginPage , SignUpPage
- パターン3. ログイン後ページ：上記以外全てのページ

〇全3パターンのヘッダータイトルとヘッダーメニューについて
- パターン1の場合(TopPage). 
  - ヘッダータイトル → AlgoLearn
  - ヘッダーメニュー → ログイン , サインアップ

- パターン2の場合(LoginPage , SignUpPage). 
  - ヘッダータイトル → なし
  - ヘッダーメニュー → なし

- パターン3の場合(その他ページ). 
  - ヘッダータイトル → AlgoLearn
  - ヘッダーメニュー → ホーム , 一覧 , ログアウト

〇実施手順
1. masterからheaderブランチを切って移動
2. methodのpath関数とcomputedのmenus関数の挙動を確認する
3. 現在のパスの情報に応じて、v-ifを使ってパターン1,2,3を分岐するhtmlを書く
4. 分岐先で現在のパスに対応したヘッダー内容が表示されるようにhtmlを書く
5. 分岐先で適切なスタイルが適応されるようにcssを書く

-->

<template>
  <div class="header">
    <router-link to="/" class="link subtitle algo-color">AlgoLearn</router-link>
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
  methods: {
    path() {
      /** 現在のパスを返します
       * 例：http://localhost:8080/index → index , http://localhost:8080/user/t5QaIsxhHHT0btDNyMMFJGFk2NL2 → user
       */
      return this.$route.path.split("/")[1]
    },
  },
  computed: {
    menus() {
      /** 現在のパスに対応したheaderMenusで定義されたヘッダーメニューの「名前」と「リンク」のObjectを返します
       * 例：pathがindex →[{ name: "一覧", link: "/index" },{ name: "ログイン", link: "/login" },]
       */
      return this.headerMenus[this.path()]
    },
  },
}
</script>

<style scoped>
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
  font-weight: normal;
}
.menu {
  display: flex;
  justify-content: space-between;
}
.menu > * {
  margin: 0 20px;
}

.algo-color {
  background: linear-gradient(90deg, #6ca7ff 0%, #d182fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
