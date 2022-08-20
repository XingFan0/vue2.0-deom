import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import modules from "./modules";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: "数学", done: true },
      { id: 2, text: "英语", done: false },
      { id: 3, text: "语文", done: true },
      { id: 4, text: "物理", done: false },
      { id: 5, text: "化学", done: true },
      { id: 6, text: "生物", done: false },
    ],
    person: {
      name: "zhuzhu",
      age: 20,
      sex: "未知",
    },
    GradeList: [],
    Fruits: ["荔枝", "芒果", "香蕉", "苹果", "雪梨"],
  },
  // 处理同步
  mutations: {
    increment(state, payload = { addNum: 1 }) {
      state.count = state.count + payload.addNum;
    },
    changeTodos(state, payload) {
      state.todos = state.todos.concat({ ...payload });
    },
    changePerson(state, payload) {
      state.person = { ...payload };
    },
    getGradeList(state, payload) {
      state.GradeList = { ...payload };
    },
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    NotDoneTodos: (state) => {
      return state.todos.filter((todo) => !todo.done);
    },
    mainSub: (state) => (id) => {
      return state.todos.filter((todo) => todo.id <= id);
    },
    guangxiFruits: (state) => {
      return state.Fruits.filter((todo, index) => index <= 1);
    },
  },
  // 处理异步
  actions: {
    changePerson({ commit, dispatch }, payload) {
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:8080/api1/getData").then((res) => {
          commit("changePerson", { ...res.data, ...payload });
          resolve({ ...res.data });
          dispatch('getGradeList')
        });
      });
    },
    getGradeList(context, payload) {
      axios.get("http://localhost:8080/api1/getGrade").then((res) => {
        context.commit("getGradeList", { ...res.data });
      });
    },
  },
  modules,
});
export default store;
