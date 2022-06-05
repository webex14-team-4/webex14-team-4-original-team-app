<template>
  <div class="manager">
    <h1>管理者画面</h1>
    <div class="manager_info">管理者の情報</div>
    <div class="manager_article">
      <div>記事一覧</div>
      <div>ここにfirestoreから取得した記事データが反映される</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.manager_info,
.manager_article {
  background-color: rgb(224, 222, 222);
  margin-bottom: 50px;
  height: 300px;
}
.manager_info {
  line-height: 300px;
}
.manager_article {
  line-height: 150px;
}
</style>
