<template>
  <div class="article_editor">
    <h1>記事作成</h1>
    <div class="editor_component">
      <div class="atricle_basic_info">
        <div class="article_title">
          <label for="title">記事のタイトル</label>
          <input type="text" id="title" :value="article.title" />
        </div>
        <div class="article_category">
          <label for="category">記事のカテゴリー</label>
          <input type="text" id="category" :value="article.category" />
          <!-- <select name="" id="category">
            <option :value="article.category">{{ article.category }}</option>
          </select> -->
        </div>
      </div>
      <MarkDownVue :mdText="article.mdText" />
      <AlgoViewerVue :code="article.code" />
    </div>
  </div>
</template>

<script>
import MarkDownVue from "@/components/MarkDown.vue"
import AlgoViewerVue from "@/components/AlgoViewer.vue"

import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

export default {
  components: {
    MarkDownVue,
    AlgoViewerVue,
  },
  props: {
    aid: {
      type: String,
      default: "new",
    },
  },
  data() {
    return {
      article: {},
    }
  },
  created() {
    if (this.aid !== "new")
      getDocs(collection(db, "tetsuya-test-article-db")).then((docs) => {
        docs.forEach((doc) => {
          if (doc.id === this.aid) this.article = { id: doc.id, ...doc.data() }
        })
      })
  },
}
</script>

<style>
.atricle_basic_info {
  text-align: left;
}

.editor_component {
  margin: 30px 0;
}
.editor_component > :first-child {
  margin-bottom: 30px;
}
</style>
