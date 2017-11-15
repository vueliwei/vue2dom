import home from '@/components/home/home'
import receive from '@/components/list/receive'
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
import forgetPwd from '@/components/login/forgetPwd'
import checkCode from '@/components/login/checkCode'
import comment from '@/components/list/comment'
import generOrder from '@/components/list/generOrder'
import addressm from '@/components/list/addressm'
import pop from '@/components/list/pop'
const routes = [{
  path: '/home',
  title: 'x',
  meta: {
    title: 'xxdd'
  },
  component: home
}, {
  path: '/receive',
  name: 'receive',
  component: receive
}, {
  path: '/detail',
  component: detail,
  children: [{
    path: "/detail/game/:num",
    component: detail
  }]
}, {
  path: '/comment',
  component: comment
}, {
  path: '/screen',
  component: screen
}, {
  path: '/brandp',
  component: Brandp
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
}, {
  path: '/login',
  name: 'login',
  component: login,
}, {
  path: '/fastlogin',
  name: 'fastlogin',
  component: fastlogin
}, {
  path: '/forgetPwd',
  name: 'forgetPwd',
  component: forgetPwd
}, {
  path: '/checkCode',
  name: 'checkCode',
  component: checkCode
}, {
  path: '/generOrder',
  name: 'generOrder',
  component: generOrder
}, {
  path: '/addressm',
  name: 'addressm',
  component: addressm
}, {
  path: '/pop',
  name: 'pop',
  component: pop
}]
export default routes