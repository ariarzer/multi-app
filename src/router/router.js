import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Counter from '~/components/app/counter/counter.vue';

const routes = [
  {path: '/counter', component: Counter},
];

export default new VueRouter({
  routes,
});