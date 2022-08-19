<template>
  <div id="Home">
    <p>Home</p>
    <el-button @click="getData">请求数据</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  methods: {
    getData: function () {
      axios.get('http://localhost:8080/api1/getData')
    },
  },
};
</script>

<style>
#Home {
  height: 400px;
  border: 2px solid sandybrown;
}
</style>
