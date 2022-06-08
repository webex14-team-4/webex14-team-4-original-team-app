<template>
  <div class="login">
    <h3>SignUp View</h3>
    <form class="login_form" @submit.prevent="signIn">
      <div class="login_id">
        <div class="login_label">Email</div>
        <input type="email" placeholder="email" v-model="email" />
      </div>
      <div class="login_password">
        <div class="login_label">Password</div>
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <input class="login_button" type="submit" />
    </form>
  </div>
  {{ error.message }}
  {{ error.code }}
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase"
export default {
  data() {
    return {
      email: "",
      password: "",
      user: "",
      error: {
        code: "",
        message: "",
      },
    }
  },
  methods: {
    signIn() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          // ...
          this.user = user
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          // ..
          this.error.code = errorCode
          this.error.message = errorMessage
        })
    },
  },
}
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
