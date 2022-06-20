<template>
  <div class="user-page">
    <div class="container">
      <div class="user-info">
        <div class="basic-info">
          <img class="user-img" src="@/assets/account.png" alt="" />
          <p class="user-name">ユーザーネーム</p>
        </div>
      </div>
      <div class="user-bookmark">
        <h3 class="under-line title">Saved article</h3>
        <div class="saved-article">
          <div class="article under-line">Babble sort</div>
          <div class="article under-line">Selection sort</div>
          <div class="article under-line">Insert sort</div>
          <div class="article under-line">Insert sort</div>
        </div>
      </div>
      <router-link to="/manager" class="btn">
        <div class="post-article">記事を投稿する</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.btn {
  text-decoration: none;
}
.user-info > .basic-info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  background: linear-gradient(
    90deg,
    rgba(110, 166, 255, 0.1) 0%,
    rgba(209, 130, 253, 0.1) 100%
  );
  font-size: 1.5rem;
}
.user-img {
  border: 1px solid rgb(148, 148, 148);
  border-radius: 50%;
  width: 100px;
  margin-right: 50px;
}
.title {
  font-weight: normal;
  display: inline-block;
  margin: 40px 15px 20px;
  padding: 0 5px;
}
.saved-article {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.article {
  cursor: pointer;
  font-size: 20px;
  width: 30%;
  height: 80px;
  line-height: 80px;
  margin-bottom: 40px;
  text-align: center;
  border: 1px solid rgb(100, 100, 100);
  background: #fff;
  transition: all 0.35s;
}
.article:hover {
  color: #fff;
  background: #d182fd;
  opacity: 0.8;
}
.under-line {
  border-bottom: 3px solid #d182fd;
  border-image: bottom
    linear-gradient(
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
  border-image-slice: 1;
}

.post-article {
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
  color: #fff;
  border-radius: 5px;
  text-align: center;
  padding: 5px 25px;
  width: 150px;
  margin: 20px auto;
  font-size: 20px;
  cursor: pointer;
}
</style>
