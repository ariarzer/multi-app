import Vue from 'vue';

export default {
  state: {
    list: [],
  },
  mutations: {
    addItem: (state, payload) =>
      Vue.set(state.list, state.list.length, {date: payload.date, text: payload.text, isDone: false,}),
    isDone: (state, index) => state.list[index].isDone = !state.list[index].isDone,
  }
}