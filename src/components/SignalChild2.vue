<template>
  <div id="SignalChild2">
    <p>SignalChild2</p>
    <p>{{ meg }}</p>
    <el-input v-model="childVal" type="text"></el-input>
    <p>展示SignalChild组件传递的数据：{{ shareData }}</p>
  </div>
</template>

<script>
import bus from "@/utils/bus";
export default {
  name: "SignalChild2",
  data: () => {
    return {
      childVal: "",
      shareData: "",
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
      this.$emit("childValue2", this.childVal);
    },
  },
  mounted: function () {
    bus.$on("shareData", (data) => {
      console.log(data,'data');
      this.shareData = data;
    });
  },
};
</script>

<style scoped>
#SignalChild2 {
  width: 300px;
  height: 200px;
  border: 1px solid sienna;
}
p {
  margin: 0;
  padding: 5px;
}
</style>
