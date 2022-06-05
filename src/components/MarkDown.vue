<template>
  <div class="markdown">
    <div class="markdown_editor">
      <textarea v-model="markdownText" @input="compile"></textarea>
    </div>
    <div class="markdown_preview">
      <div v-html="compiledText"></div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked"

export default {
  name: "markDown",
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
.markdown {
  display: flex;
  justify-content: space-between;
  min-height: 500px;
}
.markdown_editor {
  width: 50%;
  text-align: left;
}
.markdown_editor textarea {
  resize: none;
  border: 1px solid gray;
  outline: none;
  min-width: 100%;
  min-height: 100%;
}
.markdown_preview {
  width: 45%;
  text-align: left;
}
</style>
