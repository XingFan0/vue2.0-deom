<template>
  <div id="Computed">
    <p>Computed 和 Watch</p>
    <div>
      <p>{{ message }}</p>
      <p>computedMessage:{{ computedMessage }}</p>
      <input type="text" v-model="data" />
      <p>输入框内容：{{ showData }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => {
    return {
      message: "12345",
      data: "",
      showData: "",
    };
  },
  name: "Computed",
  computed: {
    computedMessage: function () {
      return this.message.split("").reverse().join(",");
    },
  },
  watch: {
    data: function (newQuestion, oldQuestion) {
      this.getAnswer();
    },
  },
  methods: {
    getAnswer: function () {
      var vm = this;
      axios
        .get("http://localhost:8080/api1/getData")
        .then(function (response) {
          vm.showData = response.data.name + vm.data;
        })
        .catch(function (error) {
          console.log(error, "error");
        });
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
