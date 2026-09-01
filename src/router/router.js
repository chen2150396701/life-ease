import { createRouter, createWebHistory } from "vue-router";
import beautify from "../views/beautify.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: beautify
    },
    {
      path: "/beautify",
      component: beautify
    },
    {
      path: "/optimization",
      component: () => import("../views/optimization.vue")
    },
    ,
    {
      path: "/carveQuickly",
      component: () => import("../views/carveQuickly.vue")
    },
    {
      path: "/keyboard",
      component: () => import("../views/keyboard.vue")
    },
    {
      path: "/settings",
      component: () => import("../views/settings.vue")
    }
  ]
});
export default router;
