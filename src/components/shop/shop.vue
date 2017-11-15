<template>
  <div class="boxshop">
      <ul class="towmd tc bgf navcont">
          <li class="nobl " v-on:click="history()"><i class="iconfont icon-shangyiye"></i></li>
          <li class="conulpb">
              <span>添加收货地址</span>
          </li>
          <li class="nobl mright" >完成</li>
      </ul><!-- to="/screen"  -->
      <ul class="towmd service bgf">
          <li><i class="iconfont icon-baozhang"></i><span data-v-1edc3b9c="">7天无理由退款</span></li>
          <li><i class="iconfont icon-ccgl-zhouzhuanxiang-4"></i><span data-v-1edc3b9c="">满xx包邮</span></li>
          <li><i class="iconfont icon-kuaidi"></i><span data-v-1edc3b9c="">顺风快递</span></li>
      </ul>
      <div class="lisboxdf">
          <div class="lisbox">
              <ul class="towmd goodsdt">
                  <li class="picbg"><span class=""><img src="../../common/img/03.png" ></span></li>
                  <li class="contlet ">
                    <p>曼妮芬旗下加一尚品无痕内衣 聚拢调整侧收隐形钢圈半杯女文胸M12</p>
                    <b class="">黛安芬</b>
                    <ul class="towmd">
                        <li class="mony"><span class=""></span>￥456</li>
                        <li class="mright number"><span class="logfont">x</span>1</li>
                    </ul>
                  </li>
                  <li class="shanc">
                      <i class="iconfont icon-shangyiye"></i>
                  </li>
              </ul>
          </div>
          <div class="lisbox_xiugai">
              <ul class="towmd goodsdt">
                  <li class="chekbox"><i class="iconfont icon-checkBox"></i></li>
                  <li class="picbg"><span class=""><img src="../../common/img/03.png" ></span></li>
                  <li class="contlet ">
                    <p>曼妮芬旗下加一尚品无痕内衣 聚拢调整侧收隐形钢圈半杯女文胸M12</p>
                    <b class="">黛安芬</b>
                    <ul class="towmd">
                        <li class="mony"><span class=""></span>￥456</li>
                        <li class="mright number"><span class="logfont">x</span>1</li>
                    </ul>
                  </li>
                  <li class="shanc">
                      <i class="iconfont icon-shangyiye"></i>
                  </li>
              </ul>
          </div>
          <div class="contboxw2 bg">
              <ul class="towmd pri">
                  <li><i class="iconfont icon-checkBox"   icur="0" ></i></li>
                  <li><h5>试穿服务</h5></li>
                  <li><span>你可以选择一件同款内衣的姐妹码</span></li>
                  <li><i class="iconfont icon-question"></i></li>
              </ul>
              <div class="jiansbox disno">
                  <ul class="towmd jians ">
                      <li><i class="iconfont icon-checkBox"   icur="0" ></i></li>
                      <li class="first_cm"><span class="biaojisp"></span></li>
                      <li class=""><i class="iconfont icon-jian"></i></li>
                      <li class="contghd"><span></span></li>
                      <li class=""><i class="iconfont icon-jia"></i></li>
                      <li class="last_cm"><span class="biaojisp2"> </span></li>
                      <li class="contghjk">￥ </li>
                  </ul>
                  <div class="boxdfcont">
                     <ul class="towmd">
                         <li></li>
                     </ul>
                  </div>
              </div>
          </div>
      </div>
   
      <div class="maskpay">
          <ul class="towmd">
              <li class="monymas">
                  <ul class="">
                      <li class=""><i class="iconfont icon-checkBox"></i><a>全选</a></li>
                      <li class="mright"><b>总价:</b>￥<span>6457457</span></li>
                  </ul>
              </li>
              <li class="paymas"><router-link to="/pop">去付款</router-link></li>
          </ul>
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
  methods:{
     history:function(){
        history.go(-1);
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

     $(".nav-container a:nth-child(3) i").attr("class","iconfont icon-gouwudai");
     $(".nav-container a:nth-child(3)").css("color","#b4bff9");*/
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
/**/
.disno{
  display:none;
}
.contboxw2 .pri i.icon-checkBox,.contboxw2 .pri i.icon-fuxuankuang2{
  font-size:18px;
  position:relative;
  top:2px;
}
.contboxw2 .jians i.icon-checkBox,.contboxw2 .jians i.icon-fuxuankuang2{
  font-size:18px;
  position:relative;
  top:0px;
  margin-right:6px;display:inline-block;
}
.contboxw2{
  padding:10px 0;
  margin:0 10px;
  border-top:1px solid #e3e5e8;
}
.contboxw2 .icon-checkBox{
  font-size:22px;
  color:#979797;
}
.contboxw2 h5{
  font-size:16px;
  margin-right:8px;
  margin-left:6px;
}
.contboxw2 span{
  font-size:12px;
  color:#94969B;
}
.contboxw2 .icon-question{
  font-size:16px;
  margin-top:4px;
  display:inline-block;
}
.contboxw2 .jians{
  margin-left:6px;
  margin-top:20px;
}
/**/
.boxshop{
  padding-bottom:50px;
  background:#f8f9fa;
}.bgf{
  background:#fff;
}
.chekbox{
  width:10%;
  text-align:center;
  line-height:70px;
  color:#979797;
}
.service{
  border-top:1px solid #e3e5e8;
  border-bottom:1px solid #e3e5e8;
  padding:10px 0;
  margin:8px 0;
}
.service li{
  width:33.3%;
  font-size:12px;
  text-align:center;
}
.shanc{
  width:10%;
  text-align:center;
}
.icon-baozhang{
  color:#999;
  position:relative;
  top:1px;margin-left:2px;
}
.icon-ccgl-zhouzhuanxiang-4,.icon-kuaidi{
  position:relative;
  top:2px;
  margin-right:2px;
}
.icon-kuaidi{
  top:1px;
}/**/
.maskpay{
    position: fixed;
    width: 100%;
    bottom:47px;
    right:0;
    background:#fff;
    z-index: 9;
}
.monymas{
  width:60%;
  color:#f34444;
  background:#fff;
  border-top:1px solid #e3e5e8;
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
.monymas i{
  display:inline-block;
  margin-right:4px;
  margin-left:4px;
  position:relative;
  color:#979797;
  top:4px;
}
.monymas a{
  position:relative;
  top:3px;
}
.paymas{
  width:40%;
  padding:8px 0;
  background:#f34444;
  text-align:center;
  color:#fff;
}/**/   /*nav  上一页*/
.navcont{
  padding:8px 0;
}
.navcont .nobl{
  width:10%;
  font-size:13px;
}
.navcont .mright{
  text-align:left;
}
.navcont .conulpb{
  width:80%;
  padding-bottom:5px;
  font-size:15px;
}/**/
.lisboxdf{
  border-top:1px solid #e3e5e8;
  border-bottom:1px solid #e3e5e8;
  background:#fff;
}
.lisbox,.lisbox_xiugai{
  overflow:hidden;
}
.lisbox_xiugai .goodsdt,.lisbox .goodsdt{
  width:110%;
  position:relative;
}
.lisbox .goodsdt{
  padding-left:3%;
}
.lisbox .contlet{
  width:57%;
  padding-left:3%;
}
.lisbox_xiugai .contlet{
  width:48%;
  padding-left:5%;
}
.contlet p{
  font-size:13px;
  color:#404245;
  height:36px;
  overflow:hidden;
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
  text-align:center;
}
.picbg span,.picbg img{
  display:inline-block;
  width:100%;
  max-height:300px;
}
.goodsdt{
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
}/**/
.slideBox .hd {
  position: absolute;
  height: 20px;
  line-height: 20px;
  bottom: 0;
  left: 80px;
  right: 80px;
  z-index: 1;
}
.slideBox .hd ul {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.slideBox .hd li {
  display: block;
  width: 8px;
  height: 8px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #fff;
  text-indent: -9999px;
  overflow: hidden;
  margin: 1px 6px;
}
.slideBox .hd li.on {
  width: 10px;
  height: 10px;
  background: transparent;
  border: 1px solid #fff;
  margin: 0 6px;
}
.slideBox .bd {
  position: relative;
  z-index: 0;
}
.slideBox .bd li {
  position: relative;
  text-align: center;
}
.slideBox .bd li img {
  display: block;
  vertical-align: top;
  width: 100%;
  min-height: 200px;
  /* 图片宽度100%，达到自适应效果 */
}
.slideBox .bd li a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.slideBox .bd li .tit {
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
  text-indent: 10px;
  height: 28px;
  line-height: 28px;
  color: #fff;
  text-align: left;
}
.main_con {
  width: 100%;
  overflow: hidden;
  margin-bottom: 50px;
}
.main_con_allchoose {
  width: 100%;
  height:48px;
  line-height: 40px;
}
.main_con_allchoose img {
  width: 24px;
  height: 24px;
  float: right;
  margin: 8px 15px;
  display: none;
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #bab9b9;
  border-radius: 50%;
  display: block;
  float: left;
  margin: 12px;
}
.main_con_goods ul li {
  padding: 10px 0;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: auto;
  text-align: left;
}
.main_con_goods ul li .circle {
  float: left;
  margin: 42px 12px;
}
.main_con_goods ul li img {
  width: 100px;
  height: 100px;
  float: left;
}
.main_con_goods ul li div {
  float: right;
}
.main_con_goods ul li div .title font {
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
}
.main_con_goods ul li div .money {
  margin-top: 10px;
}
.main_con_goods ul li div .money font {
  width: 65px;
  font-weight: 600;
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
  color: #bf392a;
  float: left;
}
.main_con_goods ul li div .money input {
  width: 50px;
  height: 20px;
  text-align: center;
  display: inline-block;
  float: right;
  margin: 0px;
  padding: 0px;
  font-size: 24px;
  color: #888;
  border: none;
  border-radius: 0;
  font-weight: normal;
}
.main_con_goods ul li div .money .add {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABaElEQVR4nO3dwW3CQBRFUUpxia8zpiPoAHfgbIyQEDax8qW58dwjvb3NFSibr1wukiRJkqRfSzIluSa5rbsmmXo/15DWGI8ky9seRukgSfsQ47nW+/mGsxNjSbL0fr7hGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgEZuggeV277n4IbnN118HZvnZ1x1ZzHZz9a1d3bH+/Do7fjsrdKoLMgBc5y+4VQRrgRc6ykp+sKX5LKjan+C+tBnip/7pWFoPq24fQ+/mGYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAxH/fzZLt6+A5Zz+wpMrrOvi+rhlDkiRJko75AaDiZPIVl7kvAAAAAElFTkSuQmCC');
  background-size: 18px;
  width: 30px;
  height: 20px;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  border: none;
  border-radius: 0;
}
.main_con_goods ul li div .money .num {
  position: relative;
  z-index: 2;
  border: none;
  border-radius: 0;
  font-size: 18px;
  font-weight: normal;
}
.main_con_goods ul li div .money .del {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAArklEQVR4nO3RQQ3CUBBFUSQgoRKQUEnPCUhAQp1UQiuhDmDTFWEB6ZB8fs5JnoCZezoBAAAAAAAAAAAAAAAAAAAAAMA7Sc5JrknmJA/7avP+u3NlDCFqwhyPkuTewDG97FYRZGngkF62VATZGjikl20VQaYGDullU0WQSwOH9LLL4SB7lDHJ2sBB/7o1yVgS4yXMsMexzzeUhwAAAAAAAAAAAAAAAAAAAAAAAH7oCbsYdZ8AL345AAAAAElFTkSuQmCC');
  background-size: 18px;
  width: 30px;
  height: 20px;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  border: none;
  border-radius: 0;
}
.main_con_goods ul li div .money b {
  float: right;
  font-size: 14px;
  font-weight: 100;
  margin-top: 5px;
  margin-left: 2px;
  margin-right: 2px;
}
.main_con_goods ul li {
  margin-bottom: 10px;
}
.main_con_goods ul li h2 {
  font-weight: normal;
  font-size: 14px;
  color: #666;
}
.main_con_goods ul li .aui-o {
  color: #999;
  font-size: 12px;
}
.settlement {
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 99;
  bottom: 0px;
  left: 0px;
  background-color: #f6f6f6;
}
.settlement_left {
  width: 50%;
  height: 50px;
  line-height: 20px;
  overflow: hidden;
  float: left;
  font-size: 12px;
  color: #9b9b9c;
  padding: 5px 0px;
}
.settlement_left .zongji {
  margin-left: 10px;
  font-size: 18px;
  color: #030000;
}
.settlement_left .money {
  font-size: 18px;
  color: #ff7800;
}
.settlement_right {
  width: 50%;
  overflow: hidden;
  float: right;
}
.settlement_right a {
  text-align: center;
  width: 80%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  float: right;
  border: 0px ;
  border-radius: 0;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #feab47), color-stop(1, #ff5200));
  color: #FFF;
}
/*删除弹窗*/
.del_tc {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 100;
  display: none;
}
.del_tc_box {
  width: 60%;
  height: 100px;
  background-color: #FFF;
  position: fixed;
  bottom: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -30%;
  z-index: 100;
}
.del_tc_box_title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
.del_tc_box_content {
  width: 100%;
  height: 40px;
}
.del_tc_box_content .cancel {
  width: 50%;
  height: 40px;
  border: 0px;
  background-color: #adadac;
  color: #FFF;
  float: left;
}
.del_tc_box_content .ok {
  width: 50%;
  height: 40px;
  border: 0px;
  background-color: #bf392a;
  color: #FFF;
  float: left;
}
.no_goods {
  margin-bottom: 50px;
  text-align: center;
  display: none;
}
.no_goods p {
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #999;
}
.no_goods a {
  width: 120px;
  height: 50px;
  line-height: 50px;
  margin: 0px auto;
  display: block;
  background-color: #bf392a;
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
}
.no_goods a:hover {
  text-decoration: none;
}
.aui-crl {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.aui-redd {
  color: #ff8746;
}
.main_con_goods ol li {
  background: #f5f5f5;
  padding: 10px 0;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: auto;
  text-align: left;
}
.main_con_goods ol li .circle {
  float: left;
  margin: 42px 12px;
}
.main_con_goods ol li img {
  width: 100px;
  height: 100px;
  float: left;
}
.main_con_goods ol li div {
  float: right;
}
.main_con_goods ol li div .title font {
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
}
.main_con_goods ol li div .money {
  margin-top: 10px;
}
</style>
