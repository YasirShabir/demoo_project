import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSjcfbQEqnxh8OS3KEG38HudmLFPwQMsg",
  authDomain: "login-65ccb.firebaseapp.com",
  projectId: "login-65ccb",
  storageBucket: "login-65ccb.appspot.com",
  messagingSenderId: "763807193130",
  appId: "1:763807193130:web:9d32715c3a3622e7118b53"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const vueApp = createApp(App)

vueApp.use(createPinia())
vueApp.use(router)

vueApp.mount('#app')