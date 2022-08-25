<template>
  <div id="SignalChild">
    <p>SignalChild</p>
    <p>{{ meg }}</p>
    <el-input v-model="childVal" type="text"></el-input>
    <el-button @click="sentData">传递数据</el-button>
  </div>
</template>

<script>
import bus from "@/utils/bus";
export default {
  name: "SignalChild",
  data: () => {
    return {
      childVal: "",
      SignalChildData: "SignalChild数据",
    };
  },
  props: {
    meg: {
      type: String,
      required: true,
    },
  },
  watch: {
    childVal: function () {
      this.$emit("childValue", this.childVal);
    },
  },
  methods: {
    sentData: function () {
      // 通过bus总线进行兄弟组件通信 bus.$emit('自定义事件',值)
      bus.$emit("shareData", this.SignalChildData);
    },
  },
};
</script>

<style scoped>
#SignalChild {
  width: 300px;
  height: 200px;
  border: 1px solid sienna;
}
p {
  margin: 0;
  padding: 5px;
}
</style>
