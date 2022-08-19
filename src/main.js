import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store/index";
Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "small", zIndex: 3000 });
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
