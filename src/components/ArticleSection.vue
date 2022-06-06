<template>
  <div class="article_section">
    <div class="article_title">{{ title }}</div>
    <div><router-link to="/edit">編集</router-link></div>
    <div @click="delete_article">削除</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    delete_article() {},
  },
}
</script>

<style></style>
