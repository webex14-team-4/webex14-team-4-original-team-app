<template>
  <div class="manager-page">
    <div class="container">
      <div class="manager-info">
        <div class="basic-info">
          <img class="manager-img" src="@/assets/account.png" alt="" />
          <p class="manager-name">{{ user.name }}（管理者）</p>
        </div>
      </div>
      <div class="manager-article">
        <div>
          <h2 class="under-line title">記事一覧</h2>
          <ArticleSectionVue
            class="article"
            v-for="article in articles"
            :key="article"
            :name="article.name"
            :aid="article.aid"
            :uid="uid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleSectionVue from "@/components/ArticleSection.vue"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

export default {
  components: {
    ArticleSectionVue,
  },
  props: {
    uid: String,
  },
  data() {
    return {
      articles: [],
      user: {},
    }
  },
  created() {
    getDocs(collection(db, "acount")).then((docs) => {
      docs.forEach((doc) => {
        if (doc.id === this.uid) this.user = { uid: doc.id, ...doc.data() }
      })
    })
    getDocs(collection(db, "article")).then((docs) => {
      docs.forEach((doc) => {
        if (doc.data().authorId === this.uid) {
          this.articles.push({ aid: doc.id, ...doc.data() })
        }
      })
    })
  },
}
</script>

<style scoped>
.manager-info > .basic-info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  background: linear-gradient(
    90deg,
    rgba(110, 166, 255, 0.1) 0%,
    rgba(209, 130, 253, 0.1) 100%
  );
  font-size: 1.5rem;
}
.manager-img {
  border: 1px solid rgb(148, 148, 148);
  border-radius: 50%;
  width: 100px;
  margin-right: 50px;
}
.manager-article {
  background: linear-gradient(
    -45deg,
    rgba(290, 130, 253, 1),
    rgba(110, 166, 255, 1)
  );
  padding: 6px;
  border-radius: 30px;
  width: 100%;
  margin: 50px auto;
}
.manager-article > div {
  background: #fff;
  padding: 1.1rem;
  border-radius: 20px;
  height: 300px;
}

.title {
  font-weight: normal;
  width: 100px;
  text-align: center;
  margin: 10px auto 30px;
  padding: 0 5px;
}
.article {
  margin-bottom: 20px;
}
.under-line {
  border-bottom: 3px solid #d182fd;
  border-image: bottom
    linear-gradient(
      90deg,
      #d182fd -2.77%,
      #6ca7ff -2.77%,
      #6ea6ff -2.76%,
      #c686fd 88.86%,
      #d182fd 101.92%,
      #d381fd 101.93%,
      #d481fd 101.94%,
      #d581fd 101.95%,
      #000000 101.95%,
      #000000 101.95%,
      #000000 101.95%,
      #000000 101.95%
    );
  border-image-slice: 1;
}
</style>
