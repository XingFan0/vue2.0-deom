const modulesTwo = {
  namespaced: true,
  state: {
    Botany: ["玫瑰花", "水仙花", "牡丹花"],
  },
  mutations: {
    changeBotany(state, payload) {
      state.Botany = state.Botany.concat("月季花");
    },
  },
  actions: {
    changeBotany: {
      root: true,
      handler: function addBotany(
        { dispatch, commit, getters, rootGetters },
        payload
      ) {
        setTimeout(() => {
          commit("changeBotany");
        }, 1000);
      },
    },
  },
  getters: {},
};

export default modulesTwo;
