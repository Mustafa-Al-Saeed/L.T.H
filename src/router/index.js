import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Testing from "../views/Testing.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: false },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { requiresAuth: false },
    },
    {
      path: "/Testing",
      name: "testing",
      component: Testing,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const appToken = window.localStorage.getItem("userToken");

  if (to.meta.requiresAuth && appToken) {
    next();
  } else if (!to.meta.requiresAuth) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
