<template>
  <div class="top-page">
    <div class="container">
      <div class="what-is">
        <img src="@/assets/TopPage/algorithm.png" height="250px" alt="" />
        <h2>
          <span class="algo-color algo-text">AlgoLearn</span
          >では<br />アルゴリズムの実際のソートコードから<br />実践的な学習を行うことができます
        </h2>
      </div>
      <h3 class="algo-color algo-bg">AlgoLearnの使い方</h3>
      <div class="how-to-use">
        <div>
          <ul>
            <li>1. 概要を読んで、アルゴリズムの大枠を掴む</li>
            <li>2. 解説を読んで、より理論的に詳細まで租借</li>
            <li>3. ソースコードと動作を見て、実践的に理解</li>
          </ul>
        </div>
        <img src="@/assets/TopPage/pc.png" height="250px" alt="" />
      </div>
      <div class="feature">
        <div>
          <h3 class="algo-color algo-bg">AlgoLearnの特徴</h3>
          <ul>
            <li>初心者向けの内容で分かりやすい！</li>
            <li>フローだけでなく、実際のコードまで掲載！</li>
            <li>実際のコードと動作を見て、視覚的に理解できる！</li>
          </ul>
        </div>
      </div>
      <div class="login">
        <div>
          <p>
            <router-link to="/login" class="btn algo-color">Login</router-link>
            to <span class="algo-color algo-text">AlgoLearn </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* common */
ul {
  list-style: none;
}
.container > * {
  margin-bottom: 50px;
}
.what-is > h2,
.how-to-use > div {
  flex-grow: 1;
}
.what-is,
.how-to-use {
  display: flex;
  align-items: center;
}

/* what-is */
.what-is > img {
  padding: 30px;
}
.what-is > h2 {
  font-weight: normal;
}

/* how-to-use */
.how-to-use {
  background: rgba(110, 166, 155, 0.1);
}
.how-to-use > div {
  text-align: center;
}

/* feature */
.feature {
  background: linear-gradient(
    -45deg,
    rgba(290, 130, 253, 1),
    rgba(110, 166, 255, 1)
  );
  padding: 6px;
  border-radius: 30px;
  margin: 0 auto;
}
.feature > div {
  background: #fff;
  padding: 1.1rem;
  border-radius: 20px;
  height: 300px;
}
.feature > div > ul {
  margin: 0 auto;
  width: 70%;
  height: 80%;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

/* login */
.login {
  display: flex;
}
.login > div {
  margin: 50px auto 0;
  font-size: 46px;
}

/* AlgoLearn */
.algo-color {
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
.algo-text {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.feature > div > h3 {
  /* -webkit-background-clip: text; */
  color: #fff;
  /* -webkit-text-fill-color: transparent; */
  border-radius: 20px;
  text-align: center;
  margin: 0 auto;
  width: 190px;
  font-weight: normal;
}
.feature > div > h3 {
  color: #fff;
  border-radius: 20px;
  text-align: center;
  margin: 0 auto;
  width: 190px;
  font-weight: normal;
}
.login > div > p > .btn {
  color: #fff;
  border-radius: 15px;
  text-align: center;
  margin: 0 auto;
  width: 190px;
  font-weight: normal;
  text-decoration: none;
  padding: 0 35px;
}
</style>
