import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Counter from '~/components/app/counter/counter.vue';
import Calculator from '~/components/app/calculator/calculator.vue'

const routes = [
  {path: '/counter', component: Counter},
  {path: '/calculator', component: Calculator},
];

export default new VueRouter({
  routes,
});