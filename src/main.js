// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from 'vue-router';
import rt from './router/index';

Vue.use(router)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: rt,
  components: { App },
  template: '<App/>'
})
