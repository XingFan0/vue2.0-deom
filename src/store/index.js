import Vue from "vue";
import Vuex from "vuex";

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
  },
  mutations: {
    increment(state, payload = { addNum: 1 }) {
      state.count = state.count + payload.addNum;
    },
    changeTodos(state, payload) {
      state.todos = state.todos.concat({ ...payload });
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
  },
});
export default store;
