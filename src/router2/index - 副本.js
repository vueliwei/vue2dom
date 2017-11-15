import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
import HelloWorld from '@/components/HelloWorld'
import user from '@/components/user/user'
import shop from '@/components/shop/shop'
import mixiu from '@/components/mixiu/mixiu'
import list from '@/components/list/list'
import home from '@/components/home/home'
import detail from '@/components/list/detail'
import screen from '@/components/list/screen'
import Brandp from '@/components/home/brandp'
import Brand from '@/components/home/brand'
import howColloca from '@/components/home/howColloca'  
import howSelect from '@/components/home/howSelect'
import service from '@/components/home/service'
import speSale from '@/components/home/speSale'
import login from '@/components/login/login'
import fastlogin from '@/components/login/fastlogin'
import comment from '@/components/list/comment'

Vue.use(Router)

Router.prototype.goBack = function () {
 this.isBack = true
 window.history.go(-1)
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
      }, {
        path: '/detail',
        component: detail
      }, {
        path: '/screen',
        component: screen
      }, {
        path: '/brandp',
        component: Brandp
      }, {
        path: '/comment',
        component: comment
      }, {
        path: '/brand',
        component: Brand
      }, {
        path: '/howcolloca',
        component: howColloca
      }, {
        path: '/howselect',
        component: howSelect
      }, {
        path: '/service',
        component: service
      }, {
        path: '/spesale',
        component: speSale
      },{
        path: '/login',
        name: 'login',
        component: login,
      },{
        path: '/fastlogin',
        name: 'fastlogin',
        component: fastlogin,
      }]
    }
  ]
})
