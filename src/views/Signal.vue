<template>
  <div id="Signal">
    <SignalChild :meg="meg" @childValue="getVal"></SignalChild>
    <div class="show">子父$emit 通信的值展示:{{ showChildVal }}</div>
    <SignalChild2 :meg="meg" ref="SignalChild2"></SignalChild2>
    <div class="show">子父$emit 通信,ref绑定自定义事件:{{ showChildVal2 }}</div>
  </div>
</template>

<script>
import SignalChild from "../components/SignalChild";
import SignalChild2 from "../components/SignalChild2";
export default {
  name: "Signal",
  data: () => {
    return {
      meg: "父组件传递的信息",
      showChildVal: "",
      showChildVal2:""
    };
  },
  components: {
    SignalChild,
    SignalChild2,
  },
  methods: {
    getVal: function (Val) {
      this.showChildVal = Val;
    },
    getStudentName: function (Val) {
     this.showChildVal2 = Val;
    },
  },
  mounted() {
    // ref绑定自定义事件
    this.$refs.SignalChild2.$on("childValue2", this.getStudentName);
  },
};
</script>

<style>
#Signal {
  height: 400px;
  border: 2px solid sandybrown;
  display: flex;
  padding: 5px;
}
.show {
  width: 300px;
  height: 200px;
  border: 1px solid sienna;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
