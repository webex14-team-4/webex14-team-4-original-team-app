<!-- 
  学習用メモ

  marked.js : (ライブラリ) MarkDownのテキストをHTMLに変換してくれるライブラリ
  → 利用する場合、ターミナルで "npm install marked" と打ち、インストールする必要がある

  v-html : (ディレクティブ) html形式の文章をコンパイルしてくれる 

-->

<template>
  <form id="post-form">
    <div id="editor">
      <textarea v-model="markdownText">ここに入力するよ</textarea>
    </div>
    <div id="preview">
      <div v-html="compiledMarkdown"></div>
    </div>
  </form>
</template>
<script>
import marked from "marked"

export default {
  name: "postForm",
  data() {
    return {
      markdownText: "",
    }
  },
  computed: {
    compiledMarkdown: () => marked(this.markdownText),
  },
}
</script>

<style></style>
