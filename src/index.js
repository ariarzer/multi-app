import Vue from 'vue';

import Root from '~/components/root.vue';

import router from '~/router/router.js';

import store from '~/store/storage.js';

new Vue({
  el: '#index',

  router,
  store,

  render: h => h(Root),
})
