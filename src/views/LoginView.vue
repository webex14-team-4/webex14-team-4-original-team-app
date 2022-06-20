<template>
  <div class="login">
    <h3 class="title">Login to <span class="algo-color">AlgoLearn</span></h3>
    <form class="login-form" @submit.prevent="login">
      <div class="login-id">
        <p>Email</p>
        <input type="email" class="login-input" v-model="email" />
      </div>
      <div class="login-password">
        <p>Password</p>
        <input type="password" class="login-input" v-model="password" />
      </div>
      <div class="login-submit">
        <router-link to="/manager" class="login-btn">Login</router-link>
      </div>
      <!-- <router-link to="/manager">
        <input class="login-btn" type="submit" value="Login" />
      </router-link> -->
    </form>
    <h3 class="signup">
      If you don't have an account <br />
      click <router-link to="/" class="algo-color">here</router-link>
    </h3>
  </div>
  {{ error.code }}
  {{ error.message }}
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase"

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        code: "",
        message: "",
      },
      isLogin: false,
    }
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          // ...
          if (user) {
            this.isLogin = true
          }
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          this.error.code = errorCode
          this.error.message = errorMessage
        })
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 40px;
  font-weight: 400;
  text-align: center;
}
form {
  width: 500px;
  margin: 0 auto;
  border: 1px solid rgba(61, 61, 61, 1);
  border-radius: 20px;
  padding-bottom: 30px;
}
.login-id,
.login-password,
.login-submit {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}
.login-id > p,
.login-password > p,
.login-btn {
  margin: 20px 0 0;
}
.login-input,
.login-btn {
  width: 300px;
  height: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
}
.login-input {
  border: 1px #000 solid;
  background: #fff;
}
.login-input:focus {
  outline: none;
  border: 2px rgba(4, 163, 214, 1) solid;
}
.login-btn {
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background: rgba(0, 179, 236, 1);
  border: 1px rgba(0, 179, 236, 1) solid;
}
.signup {
  margin-top: 40px;
  font-size: 25px;
  font-weight: 100;
  text-align: center;
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
