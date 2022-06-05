<template>
  <div class="article_editor">
    <h1>記事作成</h1>
    <div class="editor_component">
      <MarkDownVue />
      <AlgoViewerVue />
    </div>
  </div>
</template>

<script>
import MarkDownVue from "@/components/MarkDown.vue"
import AlgoViewerVue from "@/components/AlgoViewer.vue"

export default {
  components: {
    MarkDownVue,
    AlgoViewerVue,
  },
}
</script>

<style>
.editor_component {
  margin: 30px 0;
}
.editor_component > :first-child {
  margin-bottom: 30px;
}
</style>
