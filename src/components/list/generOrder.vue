<template>
  <div class="bodytex">
      <ul class="towmd tc bgf navcont">
          <li class="nobl " v-on:click="history()"><i class="iconfont icon-shangyiye"></i></li>
          <li class="conulpb">
              <span>填写订单</span>
          </li>
      </ul><!-- to="/screen"  -->
      <div class="address" >
           <div class="box1">
              <router-link to="/addressm"><i class="iconfont icon-jia"></i>
              <p>您还没有收货地址，点击这里添加</p></router-link>
           </div>
          <div>
              <!--<router-link to="/addresslist"><i class="iconfont icon-jia"></i>
              <p>地址列表</p></router-link>-->
           </div> 
      </div>
      <div class="boxgood">
          <ul class="towmd">
              <li><span class="logobg"><img src="../../common/img/brandslogo.png" width="40" height="22"></span></li>
              <li><span class="logfont">黛安芬</span></li>
          </ul>
          <ul class="towmd goodsdt">
              <li class="picbg"><span class=""><img src="../../common/img/03.png" ></span></li>
              <li class="contlet mright">
                <p>曼妮芬旗下加一尚品无痕内衣 聚拢调整侧收隐形钢圈半杯女文胸M12</p>
                <b class="">黛安芬</b>
                <ul class="towmd">
                    <li class="mony"><span class=""></span>￥456</li>
                    <li class="mright number"><span class="logfont">x</span>1</li>
                </ul>
              </li>
          </ul>
          <ul class="towmd">
              <li><span class="logobg"><img src="../../common/img/brandslogo.png" width="40" height="22"></span></li>
              <li><span class="logfont">黛安芬</span></li>
          </ul>
          <ul class="towmd goodsdt">
              <li class="picbg"><span class=""><img src="../../common/img/03.png" ></span></li>
              <li class="contlet mright">
                <p>曼妮芬旗下加一尚品无痕内衣 聚拢调整侧收隐形钢圈半杯女文胸M12</p>
                <b class="">黛安芬</b>
                <ul class="towmd">
                    <li class="mony"><span class=""></span>￥456</li>
                    <li class="mright number"><span class="logfont">x</span>1</li>
                </ul>
              </li>
          </ul>
          <ul class="towmd voucher">
             <li class="">优惠券</li>
             <li class="mright">
               3张可用<i class="iconfont icon-iconfontyoujiantou"></i>
             </li>
          </ul>
      </div>
      <div class="boxgood pricebox">
          <ul class="towmd allprice">
             <li class="">订单总额</li>
             <li class="mright"><span>￥</span>518.00</li>
          </ul>
          <ul class="towmd ">
             <li class="">商品总额</li>
             <li class="mright">
               <span>￥</span>498.00
             </li>
          </ul>
          <ul class="towmd ">
             <li class="">运费金额</li>
             <li class="mright">
               <span>￥</span>10.00
             </li>
          </ul>
          <ul class="towmd ">
             <li class="">商家红包</li>
             <li class="mright">
               <span>-￥</span>0.00
             </li>
          </ul>
          <ul class="towmd ">
             <li class="">积分抵扣</li>
             <li class="mright">
               <span>-￥</span>0.20
             </li>
          </ul>
      </div>
      <div class="maskpay">
          <ul class="towmd">
              <li class="monymas">
                  <b>总价:</b>￥<span>6457457</span>
              </li>
              <li class="paymas">去付款</li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'bottom',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
     history:function(){
        history.go(-1);
     }
  },
  created:function(){
      console.log('实例已经创建,msg变量还未渲染到模板')
  },
  mounted:function(){console.log('已经挂载到模板上:msg变量渲染到模板')
    /*主体部分基本*/
    
  },
  updated:function(){
      console.log('实例更新啦')    
  },
  destroyed:function(){
      console.log('销毁啦')  
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,html,.bodytex{
  background:#f8f9fa;
}
.bodytex{
  padding-bottom:40px;
}
.tc{
  text-align:center;
}
.maskpay{
    position: fixed;
    width: 100%;
    bottom: 0;
    right:0;
    background:#fff;
    z-index: 9;
}
.monymas{
  width:60%;
  color:#f34444;
  background:#fff;
  border-top:1px solid #cacbcd;
  font-size:12px;
  padding:8px 0;
  text-align:right;
}
.monymas span{
  font-size:16px;
  display:inline-block;
  margin-right:10px;
}
.monymas b{
  color:#55595f;
  display:inline-block;
  margin-right:8px;
  font-weight:normal;
}
.paymas{
  width:40%;
  padding:8px 0;
  background:#f34444;
  text-align:center;
  color:#fff;
}
.bgf{
  background:#fff;
}
.voucher{
  font-size:14px;
  padding-top:10px;
  color:#04245;
}
.voucher .mright{
  color:#55595F;
  font-size:12px;
}
.voucher .iconfont{
  font-size:12px;
}
.pricebox li{
    color:#a2a6ad;
    font-size:12px;
    width:23%;
    text-align:right;
    line-height:28px;
}
.pricebox .allprice li{
    font-size:16px;
    color:#404245;
}
.pricebox .mright{
    color:#a2a6ad;
    width:30%;
    font-size:12px;
}
.allprice li.mright{
  color:#f34444;
}
.navcont{
  padding:8px 0;
}
.navcont .nobl{
  width:10%;
}
.navcont .conulpb{
  width:80%;
  padding-bottom:5px;
  font-size:15px;
}
.address{
  background:#fff;
  border-top:1px solid #cacbcd;
  border-bottom:1px solid #e3e5e8;
  margin-bottom:16px;
}
.address .box1{
  text-align:center;
  padding-top:18px;
}
.address .box1 .iconfont{
  font-size:24px;
  display:inline-block;
  color:#55595f;
}
.address .box1 p{
  padding-top:18px;
  padding-bottom:16px;
  font-size:14px;
}/**/
.boxgood{
  padding:10px;
  background:#fff;
  margin-bottom:16px;
}
.logobg{
  position:relative;
  top:2px;
  margin-right:10px;
}
.logfont{
  font-size:16px;
  display:inline-block;
}/**/
.contlet{
  width:71%;
}
.contlet p{
  font-size:13px;
  color:#404245;
}
.contlet b{
  font-size:12px;
  display:inline-block;
  font-weight:normal;
  margin-right:6px;
  color:#979797;
}
.picbg{
  width:25%;
}
.picbg span,.picbg img{
  display:inline-block;
  width:100%;
  max-height:300px;
}
.goodsdt{
  border-bottom:1px solid #e3e5e8;
  padding:10px 0;
}
.contlet .mony{
  font-size:14px;
  color:#f34444;
}
.contlet .number{
  font-size:14px;
  color:#55595f;
}
.contlet .mony span,.contlet .number span{
  display:inline-block;
  font-size:12px;
}
</style>
