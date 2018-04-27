import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const app1 = {template: '<div>App1!!!</div>'};
const app2 = {template: '<div>App2!!!</div>'};

const routes = [
  {path: '/app1', component: app1},
  {path: '/app2', component: app2},
];

export default new VueRouter({
  routes,
});