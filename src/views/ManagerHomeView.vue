<template>
  <div class="manager">
    <h1>管理者画面</h1>
    <div class="manager_info">管理者の情報</div>
    <div class="manager_article">
      <div>記事一覧</div>
      <div>ここにfirestoreから取得した記事データが反映される</div>
      <ArticleSectionVue />
      <!-- <ArticleSectionVue :title="" v-for="" /> -->
    </div>
  </div>

  <div class="test_firestore">
    <!-- <button @click="post_db">firestoreにデータを送信!!!</button> -->
    <button @click="get_db">firestoreのデータを受信!!!</button>
  </div>
</template>

<script>
import ArticleSectionVue from "@/components/ArticleSection.vue"
import { collection, getDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  components: {
    ArticleSectionVue,
  },
  methods: {
    get_db() {
      console.log(getDoc(collection(db, "tetsuya-test-article-db")))
    },
  },
}
</script>

<style>
.manager_info {
  background-color: rgb(224, 222, 222);
  margin-bottom: 50px;
  height: 300px;
}
.manager_info {
  line-height: 300px;
}
</style>
