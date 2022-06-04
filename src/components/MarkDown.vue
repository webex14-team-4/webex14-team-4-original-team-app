<!-- 
  学習用メモ

  marked.js : (ライブラリ) MarkDownのテキストをHTMLに変換してくれるライブラリ
  → 利用する場合、ターミナルで "npm install marked" と打ち、インストールする必要がある

  v-html : (ディレクティブ) html形式の文章をコンパイルしてくれる 

-->

<template>
  <h1>マークダウンエディターの試作</h1>

  <form id="post-form">
    <div id="editor">
      <textarea
        v-model="markdownText"
        @input="compile"
        placeholder="ここに入力するよ"
      ></textarea>
    </div>
    <div id="preview">
      <div v-html="compiledText"></div>
    </div>
  </form>
</template>
<script>
import { marked } from "marked"

export default {
  name: "postForm",
  data() {
    return {
      markdownText: "",
      compiledText: "",
    }
  },
  methods: {
    compile() {
      this.compiledText = marked(this.markdownText)
    },
  },
}
</script>

<style></style>
