<template>
  <div class="algorithm_show">
    <div class="algorithm_show_title">
      <h2>バブルソート</h2>
      <p>注意: 本ページはfirestoreから取得したデータを元に描画される</p>
    </div>
    <div class="algorithm_overview">概要</div>
    <div class="algorithm_explanation">アルゴリズム解説</div>
    <div class="algorithm_code_viewer">
      <div class="code_viewer">コードが入る</div>
      <div class="block_viewer">コードに対応したブロックのような図が入る</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.algorithm_overview,
.algorithm_explanation,
.algorithm_code_viewer {
  height: 200px;
  line-height: 200px;
  background-color: rgb(220, 220, 220);
  margin-bottom: 50px;
}

.algorithm_code_viewer {
  display: flex;
  justify-content: center;
}
.algorithm_code_viewer > * {
  border: 5px solid rgb(36, 53, 184);
  margin: 0 20px;
  width: 40%;
}
</style>
