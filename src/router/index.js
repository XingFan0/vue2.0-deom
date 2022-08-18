import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Detail from "../views/Detail";
import Mine from "../views/Mine";

import GoodOne from "../views/Detail/GoodOne";
import GoodTwo from "../views/Detail/GoodTwo";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/Home" },
  { path: "/Home", component: Home },
  { path: "/Login", component: Login },
  {
    path: "/Detail",
    component: Detail,
    children: [
      {
        path: "GoodOne/:id",
        component: GoodOne,
      },
      {
        path: "GoodTwo/:id",
        component: GoodTwo,
      },
    ],
  },
  { path: "/Mine", component: Mine },
];
const router = new VueRouter({
  routes,
});

export default router;
