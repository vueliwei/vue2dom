import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
import HelloWorld from '@/components/HelloWorld'
import user from '@/components/user/user'
import shop from '@/components/shop/shop'
import mixiu from '@/components/mixiu/mixiu'
import list from '@/components/list/list'
import home from '@/components/home/home'


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
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        path: '',
        component: HelloWorld
      }, {
        path: '/user',
        component: user
      }, {
        path: '/shop',
        component: shop
      }, {
        path: '/mixiu',
        component: mixiu
      }, {
        path: '/list',
        component: list
      }, 
      {
        path: '/home',
        title:'x',
        meta:{title:'xxdd'},
        component: home
      }]
    }
  ]
})




