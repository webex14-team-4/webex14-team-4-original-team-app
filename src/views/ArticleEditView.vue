<template>
  <h1>記事作成</h1>

  <form class="post_form">
    <div class="editor">
      <textarea v-model="markdownText" @input="compile"></textarea>
    </div>
    <div class="preview">
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
      markdownText: "# ここに入力するよ",
      compiledText: "",
    }
  },
  methods: {
    compile() {
      this.compiledText = marked(this.markdownText)
    },
  },
  created() {
    this.compile()
  },
}
</script>

<style>
.post_form {
  display: flex;
  justify-content: space-between;
  min-height: 500px;
}
.editor {
  width: 50%;
  text-align: left;
}
.editor textarea {
  resize: none;
  border: 1px solid gray;
  outline: none;
  min-width: 100%;
  min-height: 100%;
}
.preview {
  width: 45%;
  text-align: left;
}
</style>
