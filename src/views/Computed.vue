<template>
  <div id="Computed">
    <p>Computed 和 Watch</p>
    <div>
      <p>{{ message }}</p>
      <p>computedMessage:{{ computedMessage }}</p>
      <input type="text" v-model="inputData" />
      <p>输入框内容：{{ showData }}</p>

      <span>姓氏：</span><input type="text" v-model="firstName" />
      <span>名字：</span><input type="text" v-model="lastName" />
      <p>姓名：{{ name }}</p>
      <el-button @click="changeName">改变名字</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => {
    return {
      message: "12345",
      inputData: "",
      showData: "",
      lastName: "",
      firstName: "",
    };
  },
  name: "Computed",
  computed: {
    computedMessage: function () {
      return this.message.split("").reverse().join(",");
    },
    name: {
      get: function () {
        return this.firstName + this.lastName;
      },
      set: function (val) {
        this.lastName = val.slice(1, 3);
        this.firstName = val.slice(0, 1);
      },
    },
  },
  watch: {
    inputData: function (newQuestion, oldQuestion) {
      this.getAnswer();
    },
  },
  methods: {
    getAnswer: function () {
      var vm = this;
      axios
        .get("http://localhost:8080/api1/getData")
        .then(function (response) {
          vm.showData = response.data.name + vm.inputData;
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    },
    changeName: function () {
      this.name = "侯桂芬";
    },
  },
};
</script>

<style>
#Computed {
  height: 400px;
  border: 2px solid sandybrown;
}
</style>
