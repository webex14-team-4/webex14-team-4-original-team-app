<template>
  <div class="manager">
    <h1>管理者画面</h1>
    <div class="manager_info">
      後続タスク：ログイン情報に基づいて管理者の情報
    </div>
    <div class="manager_article">
      <h2>記事一覧</h2>
      <ArticleSectionVue
        v-for="article in articles"
        :key="article"
        :title="article.title"
        :id="article.id"
      />
    </div>
  </div>

  <div class="test_firestore"></div>
</template>

<script>
import ArticleSectionVue from "@/components/ArticleSection.vue"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

export default {
  components: {
    ArticleSectionVue,
  },
  data() {
    return {
      articles: [],
    }
  },
  created() {
    getDocs(collection(db, "tetsuya-test-article-db")).then((docs) => {
      docs.forEach((doc) => {
        this.articles.push({ id: doc.id, ...doc.data() })
      })
    })
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
