<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink to="/about" class="navbar-brand">YCYG</RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/home" class="nav-link" active-class="active">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" active-class="active">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/product" class="nav-link" active-class="active">Products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contactUs" class="nav-link" active-class="active">Contact Us</RouterLink>
          </li>
          <li class="nav-item">
            <a @click="showAdminLogin" class="nav-link" href="javascript:void(0)">Admin</a>
          </li>
        </ul>
        <form class="d-flex">
          <button @click="handleSignOut" v-if="isLoggedIn" class="btn btn-signout">Sign out</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- Admin Login Modal -->
  <div class="modal fade" id="adminLoginModal" tabindex="-1" aria-labelledby="adminLoginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="adminLoginModalLabel">Admin Login</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="adminLogin">
            <div class="mb-3">
              <label for="adminEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="adminEmail" v-model="adminEmail" required>
            </div>
            <div class="mb-3">
              <label for="adminPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="adminPassword" v-model="adminPassword" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'; 
import { useRouter } from 'vue-router';
import { Modal } from 'bootstrap';

const isLoggedIn = ref(false);
const adminEmail = ref('');
const adminPassword = ref('');
const auth = getAuth();
const router = useRouter();
let adminLoginModal;

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });

  adminLoginModal = new Modal(document.getElementById('adminLoginModal'));
});

const showAdminLogin = () => {
  adminLoginModal.show();
};

const adminLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, adminEmail.value, adminPassword.value);
    const user = userCredential.user;
    adminLoginModal.hide();
    router.push({ path: "/admin" });
  } catch (error) {
    console.error('Admin login failed:', error);
  }
};

const handleSignOut = () => {
  localStorage.clear();
  signOut(auth).then(() => {
    router.push('/Login');
  });
};
</script>

<style scoped>
.nav-link {
  padding: 10px 15px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #555555;
  transition: color 0.3s, background-color 0.3s;
}

.nav-link:hover {
  color: #ffffff;
  background-color: #dc3545;
  border-radius: 5px;
}

.nav-link.active {
  color: #ffffff;
  background-color: #dc3545;
  border-radius: 5px;
}

.navbar-brand {
  font-size: 1.5rem;
  padding-left: 1rem;
  font-weight: 500;
  color: #dc3545;
}

.navbar-nav .nav-item {
  margin: 0 10px;
}

.btn-signout {
  padding: 10px 20px;
  border: 2px solid #dc3545;
  border-radius: 10px;
  background-color: #ffffff;
  color: #dc3545;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  font-size: 1rem;
  font-weight: 600;
}

.btn-signout:hover {
  background-color: #dc3545;
  color: #ffffff;
  border-color: #dc3545;
}
</style>
