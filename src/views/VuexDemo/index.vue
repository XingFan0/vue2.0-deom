<template>
  <div id="VuexDemo">
    <p>VuexDemo</p>
    <p>vuex管理状态count值：{{ count }}</p>
    <el-button @click="changeCount">改变count值</el-button>
    <p>mapState中的countAlias监听vuex的count值：{{ countAlias }}</p>
    <p>
      mapState中的自定义函数监听组件的状态和vuex的count值：{{ initNumAddCount }}
    </p>
    <!-- <p>initNum:{{ initNumAddCount }}</p> -->
    <h4>核心属性getters</h4>
    <Getters></Getters>
    <h4>核心属性Actions</h4>
    <Actions></Actions>
    <h4>核心属性Modules</h4>
    <ModuleCom></ModuleCom>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Getters from "./Getters";
import Actions from "./Actions";
import ModuleCom from './ModuleCom'
export default {
  name: "VuexDemo",
  data: () => {
    return {
      initNum: 2,
    };
  },
  components: {
    Getters,
    Actions,
    ModuleCom
  },
  // created: function () {
  //   console.log(this.$store.state.count, "哈哈");
  // },

  // 通过vuex提供的mapState 辅助函数帮助我们生成计算属性

  //当映射的计算属性的名称与 state 的子节点名称相同时我们也可以给 mapState 传一个字符串数组
  // computed:mapState(['count'])

  computed: mapState({
    // 三个方式监听vuex的count值
    //1.箭头函数可使代码更简练
    count: (state) => state.count,

    //2.传字符串参数 'count' 等同于 `state => state.count`
    countAlias: "count",

    //3.为了能够使用 `this` 获取局部状态，必须使用常规函数
    initNumAddCount(state) {
      return state.count + this.initNum;
    },
  }),

  // computed: {
  //   initNumAddCount() {
  //     return this.initNum + this.$store.state.count;
  //   },
  //   // 使用对象展开运算符将此对象混入到外部对象中
  //   ...mapState({
  //     count: (state) => state.count,
  //     countAlias: "count",
  //     initNumAddCount(state) {
  //       return state.count + this.initNum;
  //     },
  //   }),
  // },

  methods: {
    changeCount: function () {
      this.$store.commit("increment", { addNum: 2 });
    },
  },
};
</script>

<style>
#VuexDemo {
  height: 500px;
  overflow-y: auto;
  border: 2px solid sandybrown;
}
p {
  margin: 0;
  padding: 10px;
}
h4 {
  margin: 0;
  padding: 10px;
}
</style>
