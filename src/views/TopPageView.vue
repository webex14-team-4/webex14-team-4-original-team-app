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
      <div class="how-to-use">
        <div>
          <p>1. 使い方の説明の短文</p>
          <p>2. 使い方の説明の短文</p>
          <p>3. 使い方の説明の短文</p>
        </div>
        <img src="@/assets/TopPage/pc.png" height="250px" alt="" />
      </div>
      <div class="feature">
        <div>
          <h3 class="algo-color algo-bg">AlgoLearnの特徴</h3>
          <ul>
            <li>xxx</li>
            <li>xxxx</li>
            <li>xxxxx</li>
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
