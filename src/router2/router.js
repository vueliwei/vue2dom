import Vue from 'vue'
import Router from 'vue-router'
import rt from '@/components/list/rt'

import axios from 'axios'

Vue.use(Router)

let abc = 1;

Router.prototype.goBack = function () {
 this.isBack = true;
 window.history.go(-1);
}
export default new Router({  
  routes: [
    {
      path: '/rt',
      name: 'rt',
      component: rt
    }
  ]
})
