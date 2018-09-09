import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import todoList from './app/todo-list.js';

export default new Vuex.Store({
  modules: {
    todoList,
  }
})