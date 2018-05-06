import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Counter from '~/components/app/counter/counter.vue';
import TodoList from '~/components/app/todo-list/todo-list.vue';

const routes = [
  {path: '/counter', component: Counter},
  {path: '/todo-list', component: TodoList},
];

export default new VueRouter({
  routes,
});