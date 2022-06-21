<template>
  <div class="index">
    <div class="container">
      <div class="algo">
        <h2 class="title">
          <span class="algo-color algo-text">Algorithm Index</span>
        </h2>
        <div class="list" v-for="article in articles" :key="article">
          <router-link :to="`/show/${article.aid}`" class="article">
            {{ article.name }}
          </router-link>
        </div>
      </div>
      <div class="data">
        <h2 class="title">
          <span class="algo-color algo-text">Data Structure</span>
        </h2>
        <div class="list">
          <router-link to="/index" class="article">coming soon...</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

export default {
  data() {
    return {
      articles: [],
    }
  },
  created() {
    getDocs(collection(db, "article")).then((docs) => {
      docs.forEach((doc) => {
        this.articles.push({ aid: doc.id, ...doc.data() })
      })
    })
  },
}
</script>

<style scoped>
.container {
  padding: 50px 0;
}
.algo,
.data {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
}
.title {
  background: #000;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  margin: 30px auto 30px;
}
.article {
  text-decoration: none;
  color: #000;
  display: block;
  margin-bottom: 20px;
  font-size: 24px;
}
.algo-color {
  background: linear-gradient(
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
}
.algo-text {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
