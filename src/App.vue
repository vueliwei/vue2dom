<template>
  <div id="app" >
    <transition name='transitionName' keep-alive>
      <v-page><router-view ></router-view> </v-page>
    
  </transition>
    <!--<vbottom></vbottom>-->
    <div class="nav-container">
       <router-link to="/home">
          <i class="iconfont icon-shouye1"></i>
          <span>首页</span>
       </router-link> 
       <router-link to="/list">
          <i class="iconfont icon-danpin"></i>
          <span>商城</span>
      </router-link> 
       <router-link to="/shop">
          <i class="iconfont icon-02"></i>
          <span>购物袋</span>
      </router-link> 
      <router-link to="/user">
          <i class="iconfont icon-my"></i>
          <span>我的</span>
      </router-link> 
    </div>
  </div>
</template>
<script>
import vPage from './components/vPage.vue'
import vbottom from './components/bottom/bottom.vue'
import css from './common/css/base.css'
import iconfont from './common/css/font/iconfont.css'
 export default {
    components : {
      vbottom,
      vPage
    }
 }
</script>
<style>
.nav-container{
  
}
.nav-container a{
  text-align:center;
}
</style>
