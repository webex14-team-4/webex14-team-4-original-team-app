<template>
  <div class="container">
    <div class="menu">
      <router-link :to="`/manager/${uid}`" class="btn delete"
        >delete</router-link
      >
      <div>
        <router-link to="/manager" class="btn temp-save"
          >下書き保存</router-link
        >
        <router-link
          :to="`/manager/${uid}`"
          class="btn save"
          @click="saveArticle"
          >Save</router-link
        >
      </div>
    </div>
    <div class="article_editor">
      <div class="basic-info">
        <div class="title">
          <label for="title">タイトル：</label>
          <input type="text" id="title" v-model="article.name" />
        </div>
        <div class="category">
          <label for="category">カテゴリ：</label>
          <input type="text" id="category" v-model="article.category" />
        </div>
      </div>
      <div class="md-edit">
        <div class="markdown">
          <textarea class="markdown_editor" v-model="article.mdText"></textarea>
          <div class="markdown_preview">
            <div v-html="compiledText"></div>
          </div>
        </div>
      </div>
      <AlgoViewerVue class="code-edit" :code="article.code" />
    </div>
  </div>
</template>

<script>
import AlgoViewerVue from "@/components/AlgoViewer.vue"

import { collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { marked } from "marked"

export default {
  components: {
    AlgoViewerVue,
  },
  props: {
    aid_uid: {
      type: String,
      default: "new",
    },
  },
  data() {
    return {
      aid: this.aid_uid.split("_")[0],
      uid: this.aid_uid.split("_")[1],
      article: {},
    }
  },
  computed: {
    compiledText: function () {
      const md = this.article.mdText
      return md !== undefined ? marked(md) : ""
    },
  },
  methods: {
    saveArticle() {
      if (this.aid === "new") {
        addDoc(collection(db, "article"), {
          name: this.article.name,
          category: this.article.category,
          mdText: this.article.mdText,
          code: "this.article.code",
          authorId: this.uid,
        })
      } else {
        setDoc(doc(db, "article", this.aid), {
          aid: this.aid,
          name: this.article.name,
          category: this.article.category,
          mdText: this.article.mdText,
          code: this.article.code,
          authorId: this.uid,
        })
      }
    },
  },
  created() {
    if (this.aid !== "new")
      getDocs(collection(db, "article")).then((docs) => {
        docs.forEach((doc) => {
          if (doc.id === this.aid) {
            this.article = { id: doc.id, ...doc.data() }
            this.mdText = this.article.mdText
            this.code = this.article.code
          }
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

.markdown {
  display: flex;
  justify-content: space-between;
  min-height: 300px;
}
.markdown > * {
  flex-grow: 1;
  width: 40%;
}
.markdown_editor {
  width: 50%;
  text-align: left;
  margin-right: 5px;
  background: #fff;
  border: none;
  resize: none;
  outline: none;
  min-height: 100%;
}
.markdown_preview {
  background: #fff;
  text-align: left;
}
</style>
