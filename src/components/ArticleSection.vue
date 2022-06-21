<template>
  <div class="article_section">
    <div class="manager_article_title">{{ name }}</div>
    <div class="manager_article_edit_button">
      <router-link class="link" :to="`/edit/${aid}_${uid}`">edit</router-link>
    </div>
    <div class="manager_article_delete_button" @click="delete_article">
      delete
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase"
import { doc, deleteDoc } from "firebase/firestore"

export default {
  props: {
    aid: String,
    name: String,
    uid: String,
  },
  methods: {
    delete_article() {
      deleteDoc(doc(db, "article", this.aid)).then(() => {
        this.redirect()
      })
    },
    redirect() {
      this.$router.go({ path: this.$router.currentRoute.path, force: true })
    },
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

.manager_article_edit_button {
  margin-right: 20px;
}

.manager_article_edit_button,
.manager_article_delete_button {
  font-size: 1.1rem;
  cursor: pointer;
}
.link {
  text-decoration: none;
  color: black;
}
.manager_article_edit_button:hover,
.link:hover,
.manager_article_delete_button:hover {
  color: #d182fd;
}
</style>
