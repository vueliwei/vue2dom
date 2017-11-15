<template>
  <div class="licontbox">
      <ul class="towmd pjiaul">
          <li class="" v-on:click="history()"><i class="iconfont icon-shangyiye"></i></li>
          <li class="w33 conulpb">
              <span>评价</span>
          </li>
          
      </ul><!-- to="/screen"  -->
      <div class="boxdf2">
          <p class="contfip">w***ry</p>
          <p class="contfip">刚在这里买了个内衣，高端大气上档次</p>
          <p class="contfigh">wetrertyery&nbsp;黑色&nbsp;70B</p>
      </div>
      <div class="boxdf2">
          <p class="contfip">w***ry</p>
          <p class="contfip">刚在这里买了个内衣，高端大气上档次</p>
          <p class="contfigh">wetrertyery&nbsp;黑色&nbsp;70B</p>
      </div>
      <div class="boxdf2">
          <p class="contfip">w***ry</p>
          <p class="contfip">刚在这里买了个内衣，高端大气上档次</p>
          <p class="contfigh">wetrertyery&nbsp;黑色&nbsp;70B</p>
      </div>
      <div class="boxdf2">
          <p class="contfip">w***ry</p>
          <p class="contfip">刚在这里买了个内衣，高端大气上档次</p>
          <p class="contfigh">wetrertyery&nbsp;黑色&nbsp;70B</p>
      </div>
      
      
  </div>
</template>
<script>
import slider from './slider'// 引入slider组件
export default {
  name: 'bottom',
  data () {
    return {
        
      }
  },
  methods:{//
     history:function(){
        history.go(-1);
     }
  },
  created:function(){
      console.log('实例已经创建,msg变量还未渲染到模板')
  },
  mounted:function(){console.log('xx:msg变量渲染到模板')
    ///$(".nav-container").addClass("thathide");
    $(".nav-container").hide();


  },
  components: {
        slider
  },
  updated:function(){
      console.log('实例更新啦')    
  },
  destroyed:function(){
      console.log('销毁啦')  
  }
}
</script>
<style scoped>
.pjiaul{
  background:#fff;
  padding:10px 0;
  border-bottom:1px solid #e3e5e8;
}
.pjiaul li{
  width:10%;
  text-align:center;
}
.pjiaul .conulpb{
   width:80%;
   
}
/**************************************/
html,body,.licontbox{
  background:#f5f4f9;
}
#editForm{
  
}
.titlexq{
  padding-top:20px;
}
.titlexq li{
  font-size:22px;
  color:#404245;
}
.titlexq .mright{
  width:20px;
  padding-top:12px;
  border-bottom:2px solid #404245;
}
.introd{
  border-left:2px solid #000;
  height:22px;margin-top:30px;
  margin-bottom:20px;
}
.introd li{
  display:inline-block;
  background:#000;
  color:#fff;height:22px;
  font-size:14px;
  padding:0 4px;
  margin-left:3px;
}
.mdxq{
   border-bottom: 1px solid #e3e5e8;
   padding-bottom:20px;
}
.mdxq p{
  font-size:13px;
  color:#8E8E8E;
  line-height:22px;
}
.picxq{
  margin-top:10px;
}
.picxq img{
  width:100%;
  height:200px;
}
.boxxqing{
  padding:10px;
  background:#fff;
}
.navul{
  border-bottom: 1px solid #e3e5e8;
}
.navul li{
  padding:5px 0;
}
.navul .now{
  font-size:22px;
  color:#404245;
  position:relative;
}
.navul b{
  display:none;
  width:40px;bottom:0px;
  left:50%;margin-left:-20px;
  position:absolute;
  border-bottom:2px solid #333;
}
.navul .now b{
  display:inline-block;
}
.bgf{
  background:#fff;
}
.contfip{
  color:#404245;
  font-size:12px;
  line-height:24px;
}
.contfigh{
  color:#94969B;
  font-size:12px;
  line-height:24px;
}
.service{
  background:#f9f9f9;
  margin-bottom:10px;
  margin-top: 10px;
  padding-top:8px;

}
.boxdf{
    border-top:1px solid #e3e5e8;
    border-bottom:1px solid #e3e5e8;
    margin-bottom:10px;
    margin-top: 10px;
    padding-left:10px;
    padding-right:10px;
    background:#fff;
}
div.nomb{
    margin-bottom:0;
}
.boxdf2{
    border-bottom:1px solid #e3e5e8;
    padding-left:10px;margin-top:0;
    padding-right:10px;
    background:#fff;
}
.boxdf3{
    border-bottom:1px solid #e3e5e8;
    padding-left:10px;
    color:#4E545D;
    padding-right:10px;
    position:relative;
    margin-bottom:30px;
    margin-top:30px;
}
.boxdf3 h5{
    position:absolute;
    width:100%;
    font-size:15px;
    text-align:center;
    left:0;top:-10px;
}
.boxdf3 h5 span{
  display:inline-block;
  background:#f9f9f9;
}
.cxiao{
  padding:10px 0 10px;
}
.cxiao .mright{
  color:#94969B;
  font-size:13px;
  margin-top:3px;
}
.cxiao strong{
  font-weight:normal;
}
.biaoti{
    width:12%;
}
.contw{
    width:88%;
    font-size:12px;
}
</style>
