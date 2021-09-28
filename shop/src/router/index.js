import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base:
    process.env.VUE_APP_MODE === "production"
      ? "./"
      : "/clothing_store_vue_cli_vuex/",
  routes,
});

export default router;
