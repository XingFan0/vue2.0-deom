import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import Home from "../views/Home";
import Login from "../views/Login";
import Detail from "../views/Detail";
import Mine from "../views/Mine";
const Smarty = () => import("../views/Smarty");
const Computed = () => import("../views/Computed");

import GoodOne from "../views/Detail/GoodOne";
import GoodTwo from "../views/Detail/GoodTwo";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/Home" },
  { path: "/Home", component: Home },
  { path: "/Login", component: Login, name: "Login" },
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
  { path: "/Smarty", component: Smarty },
  { path: "/Computed", component: Computed },
];
const router = new VueRouter({
  routes,
});
// 解决点击多次报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 全局守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem("login");
  console.log(isLogin, "isLogin");
  if (isLogin) {
    next();
  } else {
    to.path === "/login" ? next() : next("/login");
  }
});
export default router;
