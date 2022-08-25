<template>
  <div id="Home">
    <p>Home</p>
    <el-button @click="getData">请求数据</el-button>
    <div>
      <p v-if="ishow">名字：{{ showData.name }}; 年龄：{{ showData.age }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: () => {
    return {
      showData: {},
    };
  },
  methods: {
    getData: function () {
      axios.get("http://localhost:8080/api1/getData").then((res) => {
        this.showData = res.data;
      });
    },
  },
  computed: {
    ishow: function () {
      return Object.keys(this.showData).length
    },
  },
  mounted: function () {
  },
};
</script>

<style>
#Home {
  height: 400px;
  border: 2px solid sandybrown;
}
</style>
