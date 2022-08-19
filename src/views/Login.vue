<template>
  <div id="login">
    <p>login</p>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button type="primary" @click="logout">登出</el-button>
  </div>
</template>

<script>
let redirectUrl;
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    login: function () {
      localStorage.setItem("login", true);
      this.$router.push(redirectUrl);
    },
    logout: function () {
      localStorage.removeItem("login");
    },
  },
  // 局部守卫登录后返回
  beforeRouteEnter(to, from, next) {
    if (to.query && to.query.redirect) {
      redirectUrl = to.query.redirect;
    } else {
      redirectUrl = from.fullPath;
    }
    next(); // 这个不写的话无法显示login页面
  },
};
</script>

<style>
#login {
  height: 400px;
  border: 2px solid sandybrown;
}
</style>
