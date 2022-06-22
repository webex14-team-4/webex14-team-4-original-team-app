<template>
  <div class="show">
    <div class="container">
      <div class="title_contents">
        <h2 class="title">バブルソート</h2>
        <div class="bookmark"></div>
      </div>
      <div class="overview">
        <div class="subtitle">概要</div>
        <p>
          並び替える数列の中で大きい（または小さい）数字から順番に整列させていくアルゴリズム<br />
          大きな気泡（バブル）ほど水中を素早く浮上するようすから命名されている
        </p>
      </div>
      <div class="explanation">
        <div class="subtitle">アルゴリズム解説</div>
        <ul>
          <p>前提：左から右へ大きくなるように並び替えるとする</p>
          <li>step0. i=0 とする</li>
          <li>step1. 未整列の数列の i 番目の数字に着目する</li>
          <li>step2. i+1 番目の数字より大きければ数字同士を入れ替える</li>
          <li>step3. i = i + 1 する</li>
          <li>step4. step1~3 を i = 数列の長さ-1 まで繰り返す</li>
          <li>step5. step4 が終わったら、i=0 として、step1 に戻る</li>
          <li>step6. step1~5 を未整列の数字がなくなるまで繰り返す</li>
        </ul>
      </div>
      <div class="code_contents">
        <div class="algo-box">
          <iframe v-bind:src="kind" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframe: "",
      kind: "https://algorithm-visualizer.org/brute-force/bubble-sort",
    }
  },
  mounted() {
    document.querySelector("iframe").addEventListener("load", function () {
      this.iframe = document.getElementsByTagName("iframe")
      console.log(this.iframe[0])
    })
  },
}
</script>

<style scoped>
.show {
  background: linear-gradient(
    90deg,
    rgba(110, 166, 255, 0.2) 0%,
    rgba(209, 130, 253, 0.25) 100%
  );
  padding: 40px 60px;
}
.container {
  border: 2px solid rgba(217, 217, 217, 1);
  background: #fff;
  padding: 40px 60px;
}
.title {
  text-align: center;
  margin-bottom: 35px;
}
.subtitle {
  color: #fff;
  font-size: 16px;
  padding: 0 2px;
  text-align: center;
  margin: 5px auto;
  width: 150px;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    #d182fd -2.77%,
    #6ca7ff -2.77%,
    #6ea6ff -2.76%,
    #c686fd 88.86%,
    #d182fd 101.92%,
    #d381fd 101.93%,
    #d481fd 101.94%,
    #d581fd 101.95%,
    #000000 101.95%,
    #000000 101.95%,
    #000000 101.95%,
    #000000 101.95%
  );
}
.overview,
.explanation {
  border: 3px solid rgba(209, 130, 253, 1);
  border-image: linear-gradient(
    to right,
    rgba(110, 166, 255, 1) 0%,
    rgba(209, 130, 253, 1) 100%
  );
  border-image-slice: 1;
  padding: 0px 10px 30px;
  margin-bottom: 50px;
}
.code_contents {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    #d182fd -2.77%,
    #6ca7ff -2.77%,
    #6ea6ff -2.76%,
    #c686fd 88.86%,
    #d182fd 101.92%,
    #d381fd 101.93%,
    #d481fd 101.94%,
    #d581fd 101.95%,
    #000000 101.95%,
    #000000 101.95%,
    #000000 101.95%,
    #000000 101.95%
  );
}
.code_contents {
  display: block;
  padding: 10px 10px;
  height: 81.5vh;
  width: 65.5vw;
}
.code_contents > * {
  /* margin: 0 20px; */
  padding: 20px 10px;
  min-height: 200px;
  flex-grow: 1;
}
.code {
  background: #000;
  color: #fff;
  margin-right: 8px;
}
.block {
  background: #fff;
}

.algo-box {
  width: 80vw;
  height: 80vh;
  overflow: hidden;
  position: relative;
}

iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -4vh;
  left: -16vw;
}
</style>
