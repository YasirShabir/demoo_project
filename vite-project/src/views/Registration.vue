<template>
  <div class="container-fluid loginbg">
    <div class="login-box">
      <div class="login-box-detils">
        <h1 class="login-box-hading">Signup</h1>
        <hr class="line" />
        <div class="">
          <input
            type="text"
            class="inputtext"
            placeholder="Email"
            v-model="email"
            name=""
            id="a"
          />
          <input
            type="password"
            class="inptpaswerd"
            placeholder="password must be 6 characters long"
            v-model="password"
            name=""
            id="s"
          />
          <hr class="line" />
          <p class="login-pregraf">
            You have an account?
            <router-link to="/Login">
              <span class="span-1">Login!</span></router-link
            >
          </p>
        </div>
        <button type="button" class="Sign-btn" @click="register">
          Sign up
        </button>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showSuccessModal = false">&times;</span>
        <p>Your account is created successfully!</p>
      </div>
    </div>

    <!-- Error Modal -->
    <div v-if="showErrorModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showErrorModal = false">&times;</span>
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const showSuccessModal = ref(false);
const showErrorModal = ref(false);
const errorMessage = ref("");
const router = useRouter();

const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log("Successfully registered account");
      showSuccessModal.value = true; // Show the success modal
      setTimeout(() => {
        showSuccessModal.value = false; // Hide the modal after 3 seconds
        router.push("/home"); // Navigate to the Feed page
      }, 3000);
    })
    .catch((error) => {
      console.error(error.code);
      errorMessage.value = error.message; // Set the error message
      showErrorModal.value = true; // Show the error modal
    });
};

const signInWithGoogle = () => {
  // Implement the logic for signing in with Google
};
</script>

<style scoped>
/* Modal styles */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  text-align: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.loginbg {
  background-image: url("../../src/assets/imges/bgg.avif");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 0;
  height: 100vh;
}
.login-box {
  background-color: #cbcbcbab;
  padding: 2rem;
  width: 40%;
  text-align: center;
  border-radius: 1rem;
  margin: 0 auto;
}
.log-img {
  width: 220px;
}
.login-box-detils {
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  width: 100%;
  margin: 0 auto;
}
.login-box-hading {
  color: #333333;
  font-size: 2.5rem;
  font-weight: 600;
}
.line {
  border-bottom: 1px solid #e3e3e9;
  margin-bottom: 20px;
}
.inputtext {
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #e3e3e9;
  border-radius: 5px;
  padding: 10px 8px 10px 10px;
  width: 100%;
}
.inptpaswerd {
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #e3e3e9;
  border-radius: 5px;
  padding: 10px 8px 10px 10px;
  width: 100%;
}
::placeholder {
  font-size: 1rem;
  color: #333333;
  font-weight: 500;
}
.inputtext:focus,
.inptpaswerd:focus {
  outline: none;
}

.login-pregraf {
  font-size: 1rem;
  color: #9fabb0;
  font-weight: 500;
}
.span-1 {
  font-size: 1rem;
  color: #e84242;
  font-weight: 700;
}

.Sign-btn {
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
