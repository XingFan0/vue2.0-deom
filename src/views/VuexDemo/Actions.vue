<template>
  <div id="Actions">
    <el-button @click="changePerson" type="primary">改变person</el-button>
    <p>
      学生名字：{{ person.name }};年龄：{{ person.age }};性别：{{ person.sex }}
    </p>
    <p>学生：{{ person.name }}的成绩</p>
    <ul>
      <li v-for="sub in GradeList" :key="sub.Grade">
        {{ sub.subject }}:{{ sub.Grade }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Actions",
  computed: {
    ...mapState({
      person: (state) => state.person,
      GradeList: "GradeList",
    }),
  },
  methods: {
    changePerson: function () {
      this.$store.dispatch("changePerson", { sex: "男" }).then((res) => {
        this.$store.dispatch("getGradeList");
      });
    },
  },
};
</script>

<style>
p {
  margin: 0;
  padding: 5px;
}
</style>
