<template>
  <div class="container-fluid loginbg">
    <div class="login-box">
      <div class="login-box-details">
        <h1 class="login-box-heading">Login</h1>
        <hr class="line" />
        <div class="">
          <input
            type="text"
            class="inputtext"
            placeholder="Email or phone number"
            v-model="email"
          />
          <input
            type="password"
            class="inputpassword"
            placeholder="Password"
            v-model="password"
          />
          <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
          <p class="login-paragraph">
            You don’t have an account?
            <router-link to="/registration">
              <span class="span-1">Sign up!</span>
            </router-link>
          </p>
        </div>
        <button type="button" class="login-btn" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMsg = ref("");
const user = ref(null);  // Added user ref to store user data
const router = useRouter();

const login = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      user.value = userCredential.user;  // Store the user data
      console.log("Successfully signed in!", user.value);
      localStorage.setItem('token',user.value)
      router.push({ path: "/home" });  // Pass user data to the home route
    })
    .catch((error) => {
      console.error(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errorMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errorMsg.value = "No account with this email was found";
          break;
        case "auth/wrong-password":
          errorMsg.value = "Incorrect password";
          break;
        default:
          errorMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>

<style scoped>
.loginbg {
  background-image: url("../../src/assets/imges/bgg.avif");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 0;
  height: 100vh;
}
.login-box {
  background-color: rgba(203, 203, 203, 0.67);
  padding: 2rem;
  width: 40%;
  text-align: center;
  border-radius: 1rem;
  margin: 0 auto;
}
.login-box-details {
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  width: 100%;
  margin: 0 auto;
}
.login-box-heading {
  color: #333333;
  font-size: 2.5rem;
  font-weight: 600;
}
.line {
  border-bottom: 1px solid #e3e3e9;
  margin-bottom: 20px;
}
.inputtext, .inputpassword {
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #e3e3e9;
  border-radius: 5px;
  padding: 10px 8px 10px 10px;
}
::placeholder {
  font-size: 1rem;
  color: #333333;
  font-weight: 500;
}
.inputtext:focus,
.inputpassword:focus {
  outline: none;
}
.login-paragraph {
  font-size: 1rem;
  color: #9fabb0;
  font-weight: 500;
}
.span-1 {
  font-size: 1rem;
  color: #e84242;
  font-weight: 700;
}
.error {
  color: red;
}
.login-btn {
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  background-color: #e84242;
  margin-top: 1rem;
  padding: 5px 2rem;
  border-radius: 5px;
}
</style>
