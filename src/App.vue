<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div style="marginBottom: 10px">
      <el-button type="primary" @click="goto('Home')">首页</el-button>
      <el-button type="primary" @click="goto('Login')" style="marginRight: 10px">登录</el-button
      >
      <router-link to="/Detail" tag="button" style="marginRight: 10px">详情</router-link>
      <router-link to="/Mine" tag="button">我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    goto: function (type) {
      switch (type) {
        case "Home":
          this.$router.push({
            path: "/Home",
            query: { name: "baozi", age: "18" },
          });
          break;
        case "Login":
          this.$router.push({
            path: "/Login",
            query: { isLogin: false },
          });
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
