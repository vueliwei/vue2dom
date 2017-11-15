// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.HOST = '/api'
Vue.use(VueResource);


var instance = axios.create({
baseURL: 'http://192.168.1.211:8003',
timeout: 1000,
headers: {'X-Custom-Header': 'foobar'}
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



