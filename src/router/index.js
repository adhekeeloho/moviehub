import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingpage",
      component: LandingPage,
    },
    {
      path: "/about/:id",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/Signup.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        requireAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => {
    return new Promise ((resolve, reject) => {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          resolve(user);
        },
        reject
      );
    });
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
      if (await getCurrentUser()) {
        next();
      } else{
        alert("you have to register or login have access");
        next("/")
      }
  } else {
    next();
  }
});

export default router
