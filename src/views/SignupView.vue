<template>
  <div class="login">
    <form class="login_form">
      <div class="login_id">
        <div class="login_label">Name</div>
        <input type="text" placeholder="id" />
      </div>
      <div class="login_password">
        <div class="login_label">Password</div>
        <input type="password" placeholder="password" />
      </div>
      <router-link to="/manager">
        <input class="login_button" type="submit" value="SignUp" />
      </router-link>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style>
.login_id,
.login_password {
  display: flex;
  justify-content: center;
  height: 2rem;
  line-height: 2rem;
}
.login_id,
.login_password,
.login_button {
  margin-bottom: 50px;
}
.login_label {
  width: 100px;
}
.login_button {
  border-style: none;
  padding: 8px 50px;
  border-radius: 10%;
  cursor: pointer;
}
.login_button:hover {
  background-color: rgb(180, 180, 180);
}
.login_form {
  margin: 100px 0;
}
</style>
