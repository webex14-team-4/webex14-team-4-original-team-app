<template>
  <div class="article_section">
    <div class="manager_article_title">{{ title }}</div>
    <div class="manager_article_edit_button">
      <router-link class="link" to="/edit">編集</router-link>
    </div>
    <div class="manager_article_delete_button" @click="delete_article">
      削除
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase"

export default {
  props: {
    id: String,
    title: String,
    category: String,
    mdText: String,
    code: String,
  },
  methods: {
    delete_article() {
      db.collection("tetsuya-test-article-db")
        .doc(this.id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!")
        })
        .catch((error) => {
          console.error("Error removing document: ", error)
        })
    },
  },
  created() {
    console.log(this.id)
  },
}
</script>

<style>
.article_section {
  display: flex;
  width: 50%;
  margin: 0 auto;
}
.manager_article_title {
  font-size: 1.2rem;
  flex-grow: 1;
}

.manager_article_edit_button,
.manager_article_delete_button {
  cursor: pointer;
  width: 10%;
}
.link {
  text-decoration: none;
  color: black;
}
.manager_article_edit_button:hover,
.manager_article_delete_button:hover {
  background-color: aqua;
}
</style>
