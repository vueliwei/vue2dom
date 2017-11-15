import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'home')
const user = r => require.ensure([], () => r(require('@/components/user/user')), 'user')
const shop = r => require.ensure([], () => r(require('@/components/shop/shop')), 'shop')
const mixiu = r => require.ensure([], () => r(require('@/components/mixiu/mixiu')), 'mixiu')
const home = r => require.ensure([], () => r(require('@/components/home/home')), 'home')

const list = r => require.ensure([], () => r(require('@/components/list/list')), 'list')
const detail = r => require.ensure([], () => r(require('@/components/list/detail')), 'detail')
const screen = r => require.ensure([], () => r(require('@/components/list/screen')), 'screen')
const service = r => require.ensure([], () => r(require('@/components/home/service')), 'service')

const comment = r => require.ensure([], () => r(require('@/components/list/comment')), 'comment')
const generOrder = r => require.ensure([], () => r(require('@/components/list/generOrder')), 'generOrder')
const addressm = r => require.ensure([], () => r(require('@/components/list/addressm')), 'addressm')
const pop = r => require.ensure([], () => r(require('@/components/list/pop')), 'pop')
const addresslist = r => require.ensure([], () => r(require('@/components/list/addresslist')), 'addresslist')

Vue.use(Router)

Router.prototype.goBack = function () {
 this.isBack = true
 window.history.go(-1)
}
export default new Router({ 
  routes: [
    {
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
      path: '/home',
      component: home
    }, {
      path: '/list',
      component: list
    }, {
      path: '/detail',
      component: detail,
      children: [{
        path: "/detail/id/:num",
        component: detail
      }]
    }, {
      path: '/screen',
      component: screen
    }, {
      path: '/service',
      component: service
    }, {
      path: '/comment',
      component: comment
    }, {
      path: '/generOrder',
      component: generOrder
    }, {
      path: '/addressm',
      component: addressm
    }, {
      path: '/pop',
      component: pop
    }, {
      path: '/addresslist',
      component: addresslist
    }]
  })
