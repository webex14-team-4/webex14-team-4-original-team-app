<template>
  <h1>アルゴリズムの記事一覧画面</h1>
  <p>注意: 本ページはfirestoreから取得したデータを元に描画される</p>
  <div class="algorithm index">
    <h2>Algorithm Index</h2>
    <router-link to="/show">Sort(押すとshow画面に遷移)</router-link>
    <p>Search Strings</p>
    <p>Back Track</p>
  </div>
  <div class="data_structure index">
    <h2>Data Structure</h2>
    <p>Stack</p>
    <p>Graph</p>
    <p>List</p>
  </div>
</template>

<script>
export default {}
</script>

<style>
.index {
  height: 200px;
  background-color: rgb(216, 213, 213);
}
</style>
