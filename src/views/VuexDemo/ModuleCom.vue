<template>
  <div id="ModuleCom">
    <p>通过modules管理的vuex状态展示</p>
    <p>modulesOne</p>
    <el-button type="primary" @click="AddFruits">添加水果</el-button>
    <ul>
      <li v-for="name in modulesOne.Fruits" :key="name">{{ name }}</li>
    </ul>
    <p>南方水果</p>
    <ul>
      <li v-for="name in filterFruits" :key="name">{{ name }}</li>
    </ul>
    <p>广西水果</p>
    <ul>
      <li v-for="name in guangxiMainFruits" :key="name">{{ name }}</li>
    </ul>
    <el-button type="primary" @click="someAction">一些Actions操作</el-button>
    <el-button type="primary" @click="addBotany">添加植物</el-button>
     <ul>
      <li v-for="name in modulesTwo.Botany" :key="name">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ModuleCom",
  created: function () {
    console.log(this.$store, "哈哈哈");
  },
  computed: {
    ...mapState({
      modulesOne: "modulesOne",
      modulesTwo: "modulesTwo",
    }),
    ...mapGetters({
      filterFruits: "modulesOne/filterFruits",
      guangxiMainFruits: "modulesOne/guangxiMainFruits",
    }),
  },
  methods: {
    AddFruits: function () {
      this.$store.commit("modulesOne/addFruits", { name: "桃子" });
    },
    someAction: function () {
      this.$store.dispatch("modulesOne/someAction");
    },
    addBotany:function(){
      this.$store.dispatch("changeBotany");
    }
  },
};
</script>

<style></style>
