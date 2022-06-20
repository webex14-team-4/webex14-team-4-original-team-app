<template>
  <div class="container">
    <div class="code_contents">
      <div class="code">{{ code }}</div>
      <div class="block">コードに対応したブロック</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: "ここにコードを入力するよ",
    },
  },
}
</script>

<style scoped>
.code_contents {
  display: flex;
  justify-content: space-between;
}
.code_contents {
  /* padding: 10px 10px; */
}
.code_contents > * {
  /* margin: 0 20px; */
  /* padding: 20px 10px; */
  min-height: 200px;
  flex-grow: 1;
}
.code {
  background: #000;
  color: #fff;
  margin-right: 5px;
}
.block {
  background: #fff;
}
</style>
