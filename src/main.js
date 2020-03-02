import Vue from 'vue'
import App from './App'
import router from './router'
import Api from '../API/index.js';
Vue.prototype.$api = Api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
