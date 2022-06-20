<template>
  <div class="markdown">
    <textarea
      class="markdown_editor"
      v-model="markdownText"
      @input="compile"
    ></textarea>
    <div class="markdown_preview">
      <div v-html="compiledText"></div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked"
import _ from "lodash"

export default {
  name: "markDown",
  props: {
    mdText: {
      type: String,
      default: "## ここに入力するよ",
    },
  },
  data() {
    return {
      markdownText: this.mdText,
      compiledText: marked(this.mdText),
    }
  },
  methods: {
    compile: _.debounce(function () {
      this.compiledText = marked(this.markdownText)
    }, 300),
  },
}
</script>

<style>
.markdown {
  display: flex;
  justify-content: space-between;
  min-height: 300px;
}
.markdown > * {
  flex-grow: 1;
  width: 45%;
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
