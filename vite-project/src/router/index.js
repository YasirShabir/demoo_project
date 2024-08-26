import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: { requiresAuth: true },
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/home",
      name: "home",
      meta: { requiresAuth: true },
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      meta: { requiresAuth: true },
      component: () => import("../views/about.vue"),
    },
    {
      path: "/product",
      name: "product",
      meta: { requiresAuth: true },
      component: () => import("../components/product.vue"),
    },
    {
      path: "/singalProduct/:id",
      name: "singalProduct",
      meta: { requiresAuth: true },
      component: () => import("../components/singalProduct.vue"),
    },
    {
      path: "/pement",
      name: "pement",
      meta: { requiresAuth: true },
      component: () => import("../components/pement.vue"),
    },
    {
      path: "/contactUs",
      name: "contactUs",
      meta: { requiresAuth: true },
      component: () => import("../components/contactUs.vue"),
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../components/admine.vue"),
    },
    {
      path: "/Registration",
      name: "Registration",
      component: () => import("../views/Registration.vue"),
    },
  ],
});

// Simulated authentication function
function userIsAuthenticated() {
  if (localStorage.getItem('token')) {
   
    return true; // For example, always return true for the sake of this example
  }
 }
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the user is authenticated (you can implement your own logic here)
    if (!userIsAuthenticated()) {
      // Redirect to the login page or another route
      next('/login');
    } else {
      // Continue with the navigation
      next();
    }
  } else {
    // If the route doesn't require authentication, continue with the navigation
    next();
  }
});
export default router;
