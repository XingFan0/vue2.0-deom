<template>
  <div id="Getters">
    <el-button @click="addSub" type='primary'>添加科目</el-button>
    <p>已完成科目</p>
    <ul>
      <li v-for="sub in doneTodos" :key="sub.id">{{ sub.text }}</li>
    </ul>
    <p>未完成科目</p>
    <ul>
      <li v-for="sub in NotDoneTodos" :key="sub.id">{{ sub.text }}</li>
    </ul>
    <p>主要科目</p>
    <ul>
      <li v-for="sub in mainSub" :key="sub.id">{{ sub.text }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Getters",
  computed: {
    mainSub: function () {
      return this.$store.getters.mainSub(3);
    },
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters({
      doneTodos: "doneTodos",
      NotDoneTodos: "NotDoneTodos",
    }),
  },
  methods: {
    addSub: function () {
      this.$store.commit("changeTodos", { id: 7, text: "政治", done: false });
    },
  },
};
</script>

<style>
p {
  margin: 0;
  padding: 5px;
}
ul {
  margin: 0;
}
</style>
