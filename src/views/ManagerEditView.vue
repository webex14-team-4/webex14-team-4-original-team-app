<template>
  <div class="container">
    <div class="menu">
      <router-link to="/manager" class="btn delete">delete</router-link>
      <div>
        <router-link to="/manager" class="btn temp-save"
          >下書き保存</router-link
        >
        <router-link to="/manager" class="btn save">Save</router-link>
      </div>
    </div>
    <div class="article_editor">
      <div class="basic-info">
        <div class="title">
          <label for="title">タイトル：</label>
          <input type="text" id="title" :value="article.title" />
        </div>
        <div class="category">
          <label for="category">カテゴリ：</label>
          <input type="text" id="category" :value="article.category" />
        </div>
      </div>
      <MarkDownVue class="md-edit" :mdText="article.mdText" />
      <AlgoViewerVue class="code-edit" :code="article.code" />
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

<style scoped>
.container {
  padding-bottom: 30px;
}
.article_editor {
  background: linear-gradient(
    90deg,
    rgba(110, 166, 255, 0.2) 0%,
    rgba(209, 130, 253, 0.2) 100%
  );
  margin-bottom: 20px;
}
.basic-info {
  text-align: center;
  /* display: flex;
  justify-content: space-between; */
  padding-top: 20px;
}
.md-edit,
.code-edit {
  margin: 20px;
}
.md-edit {
  margin-bottom: 30px;
}
.menu {
  display: flex;
  margin: 20px 0;
}
.btn {
  border-radius: 5px;
  text-decoration: none;
  padding: 5px 20px;
}
.delete {
  color: #fff;
  background: #000;
}
.temp-save {
  color: #000;
  border: 2px solid rgba(209, 130, 253, 1);
  padding: 3px 15px;
  margin-right: 15px;
}
.save {
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(110, 166, 255, 1) 0%,
    rgba(209, 130, 253, 1) 100%
  );
}
</style>
