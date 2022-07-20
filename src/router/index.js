import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "../views/home-page.vue";
import aboutPage from "../views/about-page.vue";
import stayApp from "../views/stay-app.vue";
import stayEdit from "../views/stay-edit.vue";
import stayDetails from "../views/stay-details.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homePage,
    },
    {
      path: "/stay",
      name: "stay-app",
      component: stayApp,
    },
    {
      path: "/stay/:stayId",
      name: "stay-details",
      component: stayDetails,
    },
    {
      path: "/stay/edit/:stayId?",
      name: "stay-edit",
      component: stayEdit,
    },
    {
      path: "/about",
      name: "about",
      component: aboutPage,
    },
  ],
});

export default router;
