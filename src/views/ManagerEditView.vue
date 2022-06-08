<template>
  <div class="article_editor">
    <h1>記事作成</h1>
    <div class="editor_component">
      <div class="atricle_basic_info">
        <div class="article_title">
          <label for="title">記事のタイトル</label>
          <input type="text" id="title" value="dbから取得した値が入る" />
        </div>
        <div class="article_category">
          <label for="category">記事のカテゴリー</label>
          <select name="" id="category">
            <option value="dbから取得した値が入る">
              dbから取得した値が入る
            </option>
            <option value="dbから取得した値が入る">
              dbから取得した値が入る
            </option>
          </select>
        </div>
      </div>
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
.atricle_basic_info {
  text-align: left;
}

.editor_component {
  margin: 30px 0;
}
.editor_component > :first-child {
  margin-bottom: 30px;
}
</style>
