<template>
  <div class="main clearfloat" style="font-size:100px;">
    <div class="center-top clearfloat">
      <div class="pic">
        <img height="80rem" src="./../../common/img/51.png">
      </div>
      <p class="tit">- {{msg}} -</p>
    </div>
    <div class="center-bottom clearfloat">
      <div class="top clearfloat fl box-s">
        <ul class="towd box2">
          <li>
            <a >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-youhuiquan"></i>
              </p>
              <p class="tit">
                优惠券
              </p>
            </a>
          </li>
          <li>
            <a  >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-dingdan"></i>
              </p>
              <p class="tit">
                订单管理
              </p>
            </a>
          </li>
          <li>
            <a >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-dizhi"></i>
              </p>
              <p class="tit">
                我的地址
              </p>
            </a>
          </li>
          <li>
            <a >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-flyme_icon-"></i>
              </p>
              <p class="tit">
                我的收藏
              </p>
            </a>
          </li>
          <li>
            <a  >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-xiangji"></i>
              </p>
              <p class="tit">
                我的晒单
              </p>
            </a>
          </li>
          <li>
            <a >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-cloud-box"></i>
              </p>
              <p class="tit">
                盒子介绍
              </p>
            </a>
          </li>
          <li>
            <a >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-MeasureModelItem"></i>
              </p>
              <p class="tit">
                个人数据
              </p>
            </a>
          </li>
          <li>
            <a  >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-kefu"></i>
              </p>
              <p class="tit">
                联系客服
              </p>
            </a>
          </li>
          <li>
            <a >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-xiaoxi"></i>
              </p>
              <p class="tit">
                意见反馈
              </p>
            </a>
          </li>
          <li>
            <a >
              <p class="tu">
                <span></span>
                <i class="iconfont icon-tuichu"></i>
              </p>
              <p class="tit">
                退出登录
              </p>
            </a>
          </li>
          <li>
            <a >
              
            </a>
          </li>
          <li>
            <a >
              
            </a>
          </li>
        </ul>
      </div>
     
    </div>
  </div>
</template>
<script>
export default {
  name: 'bottom',
  data () {
    return {
      msg: '我是  me'
    }
  },
  created:function(){
      console.log('创建')
  },
  mounted:function(){console.log('挂载到模板上:msg渲染')
/*
    $(".nav-container a").each(function(){
       $(this).css("color","#50556e");
    });
    $(".nav-container a:nth-child(1) i").attr("class","iconfont icon-shouye1");
    $(".nav-container a:nth-child(2) i").attr("class","iconfont icon-danpin");
    $(".nav-container a:nth-child(3) i").attr("class","iconfont icon-02");
    $(".nav-container a:nth-child(4) i").attr("class","iconfont icon-my");

     $(".nav-container a:nth-child(4) i").attr("class","iconfont icon-wode1-copy");
     $(".nav-container a:nth-child(4)").css("color","#b4bff9");
*/
  },
  updated:function(){
      console.log('更新')    
  },
  destroyed:function(){
      console.log('销毁')  
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    background-color: #eff1f3;
    padding-bottom:12rem;
}
.nav-container{
  color:#b4bff9;
}
.nav-container a:nth-child(2){
  color:#b4bff9;
}
.pic{
  height:114px;
}
.center-top{
  text-align:center;
  background:#fff;
  padding-bottom:30px;
}
.center-bottom{
  background:#fff;
}
.box2{
  display:-webkit-flex;
  display:flex;
  margin:0;list-style:none;
  width:100%;
}
.tit{
  font-size:0.3rem;
}
.box2 li{width:33%;height:4rem;text-align:center;display:inline-block;margin-top:0.1rem;border-top: 1px solid rgba(228,229,235,.5);
    border-right: 1px solid rgba(228,229,235,.5);font-size:0.3rem;padding-top:2rem;}
.box2{
  -webkit-flex-wrap:wrap;
  flex-wrap:wrap;
}
</style>


