import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 1
  },
  mutations: {
    incrementCounter(state, value) {
      state.counter += value;
    },
    decrementCounter(state, value) {
      state.counter -= value;
    }
  }
});
