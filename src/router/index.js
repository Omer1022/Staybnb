import { createRouter, createWebHashHistory } from "vue-router";
import stayApp from "../views/stay-app.vue";
import stayEdit from "../views/stay-edit.vue";
import stayDetails from "../views/stay-details.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "stay-app",
      component: stayApp,
    },
    {
      path: "/:stayId",
      name: "stay-details",
      component: stayDetails,
    },
    {
      path: "/edit/:stayId?",
      name: "stay-edit",
      component: stayEdit,
    },
  ],
});

export default router;
