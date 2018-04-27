import Vue from 'vue';

import Root from '~/components/root.vue';

import router from '~/router/router.js';

new Vue({
  el: '#index',

  router,

  render: h => h(Root),
})
