<template>
  <div>ここからはコードエディターだよ</div>
  <div>dbから取得したコード : {{ code }}</div>
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

<style></style>
