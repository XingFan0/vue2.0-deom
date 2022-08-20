const modulesOne = {
  namespaced: true,
  state: {
    Fruits: ["荔枝", "芒果", "香蕉", "苹果", "雪梨"],
  },
  mutations: {
    addFruits(state, payload) {
      state.Fruits = state.Fruits.concat(payload.name);
    },
  },
  actions: {
    someAction({ dispatch, commit, getters, rootGetters }) {
      dispatch("addFruits"); // -> 'foo/someOtherAction'
      dispatch("changePerson", null, { root: true }); // -> 'someOtherAction' //访问全局Actions

      commit("addFruits", { name: "火龙果" }); // -> 'foo/someMutation'
      commit("increment", { addNum: 2 }, { root: true }); // -> 'someMutation' //访问全局mutations
    },
    addFruits({ commit }) {
      setTimeout(() => {
        commit("addFruits", { name: "橘子" });
      }, 1000);
    },
  },
  getters: {
    filterFruits(state) {
      return state.Fruits.filter((todo, index) => index <= 2);
    },
    guangxiMainFruits(state, getters, rootState, rootGetters) {
      return rootGetters.guangxiFruits; // -> 'someOtherGetter' 访问全局getters
    },
  },
};

export default modulesOne;
