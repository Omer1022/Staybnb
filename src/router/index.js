import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/home-page.vue";
import about from "../views/about-page.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
  ],
});

export default router;
