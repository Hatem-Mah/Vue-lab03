import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/Products.vue";
import Cart from "../components/Cart.vue";

const routes = [
  {
    path: "/",
    name: "products",
    component: Products,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
