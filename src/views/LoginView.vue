<template>
  <div class="login">
    <h2 class="title">Login to <span class="algo-color">AlgoLearn</span></h2>
    <form class="login_form" @submit.prevent="login">
      <div class="login_id">
        <div class="login_label">Email</div>
        <input type="email" placeholder="email" v-model="email" />
      </div>
      <div class="login_password">
        <div class="login_label">Password</div>
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <router-link to="/manager">
        <input class="login_button" type="submit" value="Login" />
      </router-link>
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
  font-size: 60px;
  font-weight: 400;
  text-align: center;
}
.signup {
  font-size: 30px;
  font-weight: 100;
  text-align: center;
}
form {
  border: 1px solid rgba(61, 61, 61, 1);
  border-radius: 20px;
}
form > div > input {
  border: 1px #000 solid;
  border-radius: 5px;
  background: #fff;
}
form > div > input:active {
  border: 1px rgba(4, 163, 214, 1) solid;
}
input {
  display: block;
}
.login_id,
.login_password {
  /* display: flex;
  justify-content: center;
  height: 2rem;
  line-height: 2rem; */
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
