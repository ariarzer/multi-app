import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import TodoList from '~/components/app/todo-list/todo-list.vue';
import Calculator from '~/components/app/calculator/calculator.vue'

const routes = [
  {path: '/calculator', component: Calculator},
  {path: '/todo-list', component: TodoList},
];

export default new VueRouter({
  routes,
});