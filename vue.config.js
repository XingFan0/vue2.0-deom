const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:"./",
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api1": {
        // 匹配所有以 '/api1'开头的请求路径
        target: "http://localhost:7793", // 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { "^/api1": "" },
      },
    },
  },
});
