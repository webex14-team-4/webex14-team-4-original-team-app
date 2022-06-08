<template>
  <div class="article_section">
    <div class="manager_article_title">{{ title }}</div>
    <div class="manager_article_edit_button">
      <router-link to="/edit">編集</router-link>
    </div>
    <div class="manager_article_delete_button" @click="delete_article">
      削除
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    category: String,
    mdText: String,
    code: String,
  },
  methods: {
    delete_article() {},
  },
}
</script>

<style>
.article_section {
  display: flex;
}
.manager_article_title {
  font-size: 1.2rem;
}

.manager_article_edit_button,
.manager_article_delete_button {
}
</style>
