<template>
  <div class="licontbox">
      <ul class="towmd tc bgf">
          <li class="w33 nobl tlml" v-on:click="history()"><i class="iconfont icon-arrow-fine-left"></i></li>
          <li class="w33 conulpb">
              <span>全部商品</span>
          </li>
          <li class="w33 trml">
             <span class="screen">筛选<i class="iconfont icon-zhankai"></i></span>
          </li>
      </ul><!-- to="/screen"  -->
      <ul class="towmd biqoaianbox tc">
          <li class="w50 now">
              <a class="zabor"  >全部商品</a>
              <b></b>
          </li>
          <li class="w50">
              <a >为你推荐</a>
              <b></b>
          </li>
      </ul>
      <ul class="towmd brands">
          <li class="contul3" ><i class="brandslogo"><img src="../../common/img/brandslogo.png" width="100" height="60"></i></li>
          <li class="contul4" >1886 年成立于德国的 黛安芬，从125年前 一个厂房生产到....</li>
          <li class="contul3 jinru" >进入品牌<i class="iconfont icon-iconfontyoujiantou"></i></li>
      </ul>
      <ul class="towmd contpai tc bgf">
          <li class="w33 now"><span>最新</span><b></b></li>
          <li class="w33"><span>推荐</span><b></b></li>
          <li class="w33"><span>价格</span><b></b>
             <span class="conticon "><i class="iconfont icon-congdidaogaopaixu"></i><i class="iconfont icon-conggaodaodipaixu"></i></span>
          </li>
      </ul>
      <div class="popupbox">
        <ul class="towmd cxiao tc bgf">
            <li class="w33">
               <a href="javascript:;" class="bounceInDown havegq">品牌<i class="iconfont icon-zhankai przk"></i></a>
            </li>
            <li class="w33">
               <a href="javascript:;" class="bounceInDown havegq">有钢圈<i class="iconfont icon-zhankai przk"></i></a>
            </li>
            <li class="w33">
               <a href="javascript:;" class="bounceInDown havegq">功能<i class="iconfont icon-zhankai przk"></i></a>
            </li>
        </ul><!-- 弹出层 -->
        <div class="popupcon" >
            <ul class="towmd conttexz">
                <li class="now"><div><a>cxbb <i class="iconfont icon-o3"></i></a></div></li>
                <li class=""><div><a>cxbb <i class="iconfont icon-o3"></i></a></div></li>
                <li class=""><div><a>cxbb <i class="iconfont icon-o3"></i></a></div></li>
                <li class=""><div><a>cxbb <i class="iconfont icon-o3"></i></a></div></li>
                <li class=""><div><a>cxbb <i class="iconfont icon-o3"></i></a></div></li>
            </ul>
            <ul   class="towmd butboxi2"  >
              <li  ><a  >重置</a></li> 
              <li  ><a  >确定</a></li>
            </ul>
            <div class="neibumack"></div>
        </div>
      </div>
      <ul class="towmd conttuij">
          <li class="contcy">
            <div><a>根据您的尺码助手资料 NICE IN为你推荐合适的商品，目前尺码为:<strong>70A</strong></a></div>
          </li>
          <li class="contbut">
            <div class="sizebut">更换尺码</div>
          </li>
      </ul>
      <ul class="towmd contli">
          <li class="w50">
            <div class="borli">
            <router-link to="/detail">
              <span class="zpic"><img src="https://cdn.mielseno.com/view/photo/goods/20170929/f929a9ecdf35c771385699d20649e124-325.jpg" ></span>
              <p>cont cont</p>
              <p>cont cont</p>
              <p><strong>￥300</strong><span class="tlthrough">￥630</span></p></router-link>
              <ol class="towmd scli">
                <li class=""><span class="newtext">新品</span></li>
                <li class="mright"><i class="iconfont icon-xin"></i></li>
              </ol>
            </div>
          </li>
          <li class="w50">
            <div class="borli">
            <router-link to="/detail">
              <span class="zpic"><img src="https://cdn.mielseno.com/view/photo/goods/20170929/f929a9ecdf35c771385699d20649e124-325.jpg" ></span>
              <p>cont cont</p>
              <p>cont cont</p>
              <p><strong>￥300</strong><span class="tlthrough">￥630</span></p></router-link>
              <ol class="towmd scli">
                <li class=""> </li>
                <li class="mright"><i class="iconfont icon-xin1"></i></li>
              </ol>
            </div>
          </li>
          <li class="w50">
            <div class="borli">
            <router-link to="/detail">
              <span class="zpic"><img src="https://cdn.mielseno.com/view/photo/goods/20170929/f929a9ecdf35c771385699d20649e124-325.jpg" ></span>
              <p>cont cont</p>
              <p>cont cont</p>
              <p><strong>￥300</strong></p></router-link>
              <ol class="towmd scli">
                <li class=""> </li>
                <li class="mright"><i class="iconfont icon-xin1"></i></li>
              </ol>
            </div>
          </li>
          <li class="w50">
            <div class="borli">
            <router-link to="/detail/id/222">
              <span class="zpic"><img src="https://cdn.mielseno.com/view/photo/goods/20170929/f929a9ecdf35c771385699d20649e124-325.jpg" ></span>
              <p>cont ccccvvvv</p>
              <p>cont cont</p>
              <p><strong>￥300</strong></p></router-link>
              <ol class="towmd scli">
                <li class=""> </li>
                <li class="mright"><i class="iconfont icon-xin"></i></li>
              </ol>
            </div>
          </li>
      </ul>
      <div class="box">
        <div id="dialogBg" style="width: 1920px; height: 871px; display: none;"></div>
        <div id="dialog" class="animated claseDialogBtn bounceOutUp" style="display: none;">
          <div class="dialogTop">
            <a href="javascript:;" class="claseDialogBtn">关闭</a>
          </div>
          <form action="" method="post" id="editForm">
            <ul class="editInfos">
              &nbsp;&nbsp;&nbsp;xxx
              <li></li>
            </ul>
          </form>
        </div>
      </div>
      <!-- 点击尺寸 滑动出来的遮罩 -->
      <div class="sizebox">
        <ul class="towmd butxxf">
            <li class=""><span class="cancel">取消</span></li>
            <li class="mright"><a class="">完成</a></li>
        </ul>
        <ul class="towmd titlehs">
           <li class="">底围</li>
           <li class="">罩杯</li>
        </ul>
        <div class="porvu">
            <div></div>
        </div>
        <ul class="towmd porvul">
            <li class="boxpl">
              <p>60</p>
              <p>60</p>
              <p>60</p>
              <p>60</p>
              <p>60</p>
            </li>
            <li class="boxpl2">
              <p>A</p>
              <p>B</p>
              <p>C</p>
              <p>D</p>
              <p>E</p>
            </li>
        </ul>
      </div>
      <!-- 点击筛选 滑动出来的遮罩 -->
      <div class="mask">
          <ul class="towmd cons nobcons">
              <li class="">价格区间</li>
              <li class="mright"></li>
          </ul>
          <div class="demo">
              <input class="range-slider" type="hidden" value="0,70"/>
          <!-- <button id="g2">获取值</button> -->
          </div>
          <ul class="towmd cons">
              <li class="">功能</li>
              <li class="mright">全部<i class="iconfont icon-zhankai"></i></li>
          </ul>
          <ul class="mixiuli towmd">
              <li class="now">
                  <a >
                      xxxxx
                      <i class="iconfont icon-guanbi"></i>
                  </a>
              </li>
             <li>
                  <a >
                      尺寸
                  </a>
              </li>
              <li>
                  <a >
                      尺寸
                  </a>
              </li>
              <li>
                  <a >
                      尺寸
                  </a>
              </li>
             <li>
                  <a >
                      尺寸
                  </a>
              </li>
              <li>
                  <a >
                      尺寸
                  </a>
              </li>
          </ul>
          <ul class="towmd cons">
              <li class="">品牌</li>
              <li class="mright">全部<i class="iconfont icon-zhankai"></i></li>
          </ul>
          <ul class="mixiuli towmd">
              <li>
                  <a >
                      尺寸
                  </a>
              </li>
             <li>
                  <a >
                      尺寸
                  </a>
              </li>
              <li>
                  <a >
                      尺寸
                  </a>
              </li>
          </ul>
          <ul class="towmd cons">
              <li class="">有无钢圈</li>
              <li class="mright"></li>
          </ul>
          <ul class="mixiuli towmd">
              <li>
                  <a >
                      尺寸
                  </a>
              </li>
             <li>
                  <a >
                      尺寸
                  </a>
              </li>
              <li>
                  <a >
                      尺寸
                  </a>
              </li>
          </ul>
          <ul class="towmd butboxi">
              <li><a >重置</a></li>
              <li><a >确定</a></li>
          </ul>
      </div>
  </div>
</template>
<script>
import detectPrefixes from './../../common/js/jquery-1.7.2.min.js'
import iconfont from './../../common/css/font/iconfontj.css'

import range from './../../common/js/jquery.range.js'
import css from './../../common/css/jquery.range.css'

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
  mounted:function(){
    let aaa = this.$route.params.num;
    $('.screen').click(function(){
       $('#dialogBg').show();
       $('.mask').animate({right:0});
    });
    let cont = '-100%';
    let cont2 = '100%';
    $('#dialogBg').click(function(){
       $('#dialogBg').hide();
       
       $('.mask').animate({right:cont});
       $('.sizebox').animate({bottom:cont});
    });/**/
    $('.cancel').click(function(){
       $('#dialogBg').hide();
       let cont = '-100%';
       $('.mask').animate({right:cont});
       $('.sizebox').animate({bottom:cont});
    });/**/
    $('.sizebut').click(function(){
       $('#dialogBg').show();
       $('.sizebox').animate({bottom:0});
    });
    $('.havegq').click(function(){
        $('.popupcon').animate({left:0});
    });
    $('.neibumack').click(function(){
      $('.popupcon').animate({left:cont2});
    });


/************************/
var that = this;
    $(".boxpl2").on("touchstart", function(e) {
        // 判断默认行为是否可以被禁用
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }   
        that.startX = e.originalEvent.changedTouches[0].pageX,
        that.startY = e.originalEvent.changedTouches[0].pageY;
        
    });
    $(".boxpl2").on("touchend", function(e) {   
      console.log('tend')
          
        // 判断默认行为是否可以被禁用
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }               
        that.moveEndX = e.originalEvent.changedTouches[0].pageX,
        that.moveEndY = e.originalEvent.changedTouches[0].pageY,
        that.X = that.moveEndX - that.startX;
        that.Y = that.moveEndY - that.startY;
        
        //左滑
        //alert($(".boxpl2").css('top'));
        //alert(that.Y);
        //下滑
        //$(".boxpl2").offset({top:-that.Y});
        let theh = parseInt($(".boxpl2").height());
        theh = theh-50;// 到线的高度
        if (that.Y > 0) {
           that.Y=parseInt($(".boxpl2").css('top'))+that.Y;
           if(that.Y>theh){
            that.Y = theh;
           }
           that.Y = parseInt(that.Y/20);
           that.Y = that.Y*20;
        }else if (that.Y < 0 ) {//上滑
            that.Y=parseInt($(".boxpl2").css('top'))+that.Y;
            if(that.Y<-theh){
              that.Y = -theh;
            }
            that.Y = parseInt(that.Y/20);
            that.Y = that.Y*20;
        }

        
             
        $(".boxpl2").animate({top:that.Y});

       //$(".boxpl2").offset().top($(".boxpl2").offset().top()+that.Y);
    });
    $(".boxpl").on("touchstart", function(e) {
        // 判断默认行为是否可以被禁用
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }   
        that.startX = e.originalEvent.changedTouches[0].pageX,
        that.startY = e.originalEvent.changedTouches[0].pageY;
        
    });
    $(".boxpl").on("touchend", function(e) {   
      console.log('tend')
          
        // 判断默认行为是否可以被禁用
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }               
        that.moveEndX = e.originalEvent.changedTouches[0].pageX,
        that.moveEndY = e.originalEvent.changedTouches[0].pageY,
        that.X = that.moveEndX - that.startX;
        that.Y = that.moveEndY - that.startY;
        
        let theh = parseInt($(".boxpl").height());
        theh = theh-50;// 到线的高度
        if (that.Y > 0) {
           that.Y=parseInt($(".boxpl").css('top'))+that.Y;
           if(that.Y>theh){
            that.Y = theh;
           }
           that.Y = parseInt(that.Y/20);
           that.Y = that.Y*20;
        }else if (that.Y < 0 ) {//上滑
            that.Y=parseInt($(".boxpl").css('top'))+that.Y;
            if(that.Y<-theh){
              that.Y = -theh;
            }
            that.Y = parseInt(that.Y/20);
            that.Y = that.Y*20;
        }

        
             
        $(".boxpl").animate({top:that.Y});

    });
/* cont 筛选*/ 

    $('.range-slider').jRange({
        from: 0,
        to: 100,
        step: 1,
        scale: [0,25,50,75,100],
        format: '%s',
        width:240,
        showLabels: true,
        isRange : true
      });
      $("#g2").click(function(){
        var aa = $(".range-slider").val();
        alert(aa);
      });
      $('.slider-container').height(8);
      $('.slider-container').css("padding","16px 10px 0");
      $('.slider-container').css("margin","6px auto 0");

/*主体部分基本*/
    //弹窗
    var w,h,className;
    function getSrceenWH(){
      w = $(window).width();
      h = $(window).height();
      $('#dialogBg').width(w).height(h);
    }

    window.onresize = function(){  
      getSrceenWH();
    }  
    $(window).resize();  

    $(function(){
      getSrceenWH();
      
      //显示弹框
      /*$('.licontbox a').click(function(){
        className = $(this).attr('class');
        $('#dialogBg').fadeIn(300);
        $('#dialog').removeAttr('class').addClass('animated '+className+'').fadeIn();
      });*/
      
      //关闭弹窗
      $('.claseDialogBtn').click(function(){
        $('#dialogBg').fadeOut(300,function(){
          $('#dialog').addClass('bounceOutUp').fadeOut();
        });
      });
    });
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
h1, h2 {
  font-weight: normal;
}
.conttexz li{
  width:50%;
}
.conttexz li div{
  display:block;
  padding:6px 10px 6px 20px;
}
.conttexz li div a{
  display:block;
  font-size:12px;
  position:relative;
  border-bottom:1px solid #fff;
}
.conttexz li div a i{
  position:absolute;
  right:5px;
  display:none;
  font-size:12px;
  color:#F34444;
  top:3px;
}
.conttexz li.now div a i{
  display:inline-block;
}
.conttexz li.now div a{
  color:#F34444;
  border-bottom:1px solid #F34444;
}
.butboxi2{
  width:100%;
  background:#fff;
}
.butboxi2 li{
  width:50%;
}
.butboxi2 li a{
  display:block;
  height:36px;
  line-height:36px;
  font-size:14px;
  text-align:center;
  border-top:1px solid #ececec;
}
.butboxi2 li:nth-child(2) a{
  background:#404245;
  color:#fff;
  border-top:1px solid #404245;
}
.neibumack{
    background-color: #000000;
    opacity: .6;
    filter: alpha(opacity=60);
    position:relative;
    bottom:00px;height:400px;
    left: 0;
    z-index:9;
}
.titlehs li{
  width:50%;
  text-align:center;
  font-size:14px;
  padding:10px 0;
}
.titlehs a{

}
.popupbox{
  position:relative;
}
.popupcon{
  position:absolute;
  bottom:-100px;
  border-top:1px solid #e3e5e8;
  height:100px;width:100%;
  background:#fff;
  z-index:999999;
  left:100%;
}
.stsp{
  display:inline-block;
  margin-left:10px;
  margin-top:5px;
}
h6{
  font-size:20px;
  text-align:center;
  font-weight:bold;
  line-height:60px;
}
p{
  font-size:12px;
}
div.tc{
  width:90%;
  margin:0 auto;
  background:#ccc;
  padding:4px 0;
  border-radius:6px;
  margin-top:10px;
  color:#fff;
}/**/
.porvu{
    position:relative;
    height:110px;
    border-top:1px solid #ededed;
}
.porvu div{
    border-top:1px solid #ccc;
    height:20px;
    margin-top:50px;
    border-bottom:1px solid #ccc;
}
.boxsx{
    width:50%;
}
.butxxf{
    font-size:14px;
    padding:6px 10px;
    background:#fff;
}
.porvul{
    position:relative;
    text-align:center;
    top:-100px;
    height:140px;
    overflow:hidden;
}
.porvul li{
    width:50%;
    text-align:center;
}
.boxpl,.boxplp,.boxpl2,.boxplp2{
    position:absolute;
    line-height:20px;top:0;
}
.boxplp{
    top:40px;left:30%;
    line-height:20px;
    font-size:14px;
}
.boxpl{

}
.boxplp2{
    top:40px;left:60%;
    font-size:14px;
    line-height:20px;
}
.boxpl2{
    left:50%;
}/**/
div.slider-container{
  height:36px;
  padding-top:10px;
}
.butboxi{
  position:absolute;
  bottom:0;
  width:100%;
}
.butboxi li{
  width:50%;
}
.butboxi li a{
  display:block;
  height:36px;
  line-height:36px;
  font-size:14px;
  text-align:center;
  border-top:1px solid #ececec;
}
.butboxi li:nth-child(2) a{
  background:#404245;
  color:#fff;
  border-top:1px solid #404245;
}
.mixiuli a{
  position:relative;
  overflow:hidden;
}
.mixiuli li.now a{
  background:#ffeeee;
  color:#f34444;
}
.mixiuli li.now .icon-guanbi{
  display:inline-block;
}
.mixiuli .icon-guanbi{
  color:#f34444;
  position:absolute;
  display:none;
  bottom:-5px;right:0;
}
.cons{
  padding:10px 22px 4px 0;
  margin-left:10px;
  margin-top:10px;
  font-size:13px;
  border-top:1px solid #e3e5e8;
}
.nobcons{
  border-top:none;
  margin-top:0;
}
.cons .mright{
  color:#acacac;
}
.cons .mright i{
  display:inline-block;
  top:2px;
  font-size:12px;
  margin-left:4px;
}
body,html,.hello{
  background:#eee;
}
h1, h2 {
  font-weight: normal;
}
.mixiuli{
  padding-bottom:8px;
}
.mixiuli li{
  width:33%;
  text-align:center;
  margin-top:8px;
}
.mixiuli a{
  display:inline-block;
  width:80px;
  background:#f5f5f5;
  font-size:12px;
  height:26px;
  line-height:26px;
  border-radius:4px;
}
.mixiuli p i{
 width:12px;
 height:10px;margin-right:6px;
 display:inline-block;
 background:#ccc;
}
.mixiuli p span{
  font-size:12px;
}
.demo{
  padding:14px 10px;
}
/**/
body,html,.licontbox{
  background:#f8f9fa;
}
.licontbox{
  width:100%;
  overflow-x:hidden;
}
.sizebox{
   position:fixed;
   height:210px;left:0;
   bottom:-100%;
   background:#ededed;
   width:100%;
   z-index:999999;
}
.mask{
   position:fixed;
   width:88%;top:0;
   right:-100%;
   background:#fff;
   height:100%;
   z-index:999999;
}
.tlthrough{
    text-decoration: line-through;
    color: #909090;
    font-size: 12px;
    display: inline-block;
    margin-bottom: 10px;
}
.conttuij {
  background:#fff;
  margin-top:10px;
  padding-top:8px;
  padding-bottom:8px;
}
.contbut{
  width:35%;
  font-size:13px;
  text-align:center;
}
.contbut div{
  display:inline-block;
  border:1px solid #f74747;
  color:#f74747;
  border-radius:5px;
  padding:4px 7px;
  margin-top:4px;
}
.contcy{
  width:65%;
}
.contcy div{
  padding:0 0px 0 10px;
  font-size:12px;
  line-height:20px;
}
.contcy strong{
  font-size:18px;
  font-weight:normal;
  color:#333;
}
.cxiao li{
  padding:6px 0;
}
.newtext{
  display:inline-block;
  border:1px solid #F35E5E;
  padding:2px 4px;
  border-radius:5px;
  font-size:12px;
  color:#F35E5E;
}
.przk{
  position:relative;
  top:2px;left:3px;
  font-size:12px;
}
.contpai .conticon{
  display:inline-block;
  width:13px;
  padding:0px;
  height:18px;
  font-size:12px;
  position:relative;
}
.conticon i:nth-child(1){
  position:absolute;
  top:0px;
  color:#a8a8a8;
}
.conticon i:nth-child(2){
  position:absolute;
  top:9px;
  color:#d8d8d8;
}
.conticonnow i:nth-child(2){
  color:#a8a8a8;
}
.conticonnow i:nth-child(1){
  color:#d8d8d8;
}
.brands{
  margin-top:10px;
  margin-bottom:10px;
  background:#fff;
  border-top:1px solid #ececec;
  border-bottom:1px solid #ececec;
}
.brands .jinru{
  color:#F35E5E;
  padding-top:28px;
  font-size:13px;
}
.brands .jinru i{
  color:#ccc;
  position:relative;
  top:0px;font-size:12px;
  left:4px;
  display:inline-block;
}
.brands li{
  padding:10px 0;
}
.brandslogo{
  display:inline-block;
}
.bgf{
  background:#fff;
}
.contul3{
  width:30%;
  text-align:center;
}
.brands .contul4{
  width:38%;padding-left:2%;
  line-height:18px;
  font-size:12px;
  height:30px;
  overflow:hidden;
  padding-top:20px;
}
.biqoaianbox{
  background:#fff;
}
.biqoaianbox li.now{
  position:relative;
}
.biqoaianbox li.now a{
  color:#404245;
}
li.now b{
  display:inline-block;
  position:absolute;
  border-bottom:2px solid #404245;
  width:30px;margin-left:-15px;
  bottom:0;left:50%;
}
.zabor{
  display:inline-block;
  border-right:1px solid #ececec;
  width:100%;
}
.conulpb{
  padding-bottom:5px;
  font-size:15px;
}
.tlml{
  text-align:left;
}
.tlml i{
  margin-left:10px;
}
.trml{
  text-align:right;
  font-size:15px;
}
.trml i{
  margin-left:5px;
  margin-right:5px;
}
.w50{
  width:50%;
}
.zpic{
  display:inline-block;
  width:100%;
  padding-top:10px;
  text-align:center;
}
.zpic img{
  display:inline-block;
  width:80%;
}
.contli{
  margin-top:10px;
  background:#fff;
  border-top:1px solid #e3e5e8;
}
.contli li .borli{
  border-right:1px solid #e3e5e8;
  border-bottom:1px solid #e3e5e8;
  position:relative;
}
.borli .icon-xin{
  color:#F35E5E;
}
.borli .scli{
  position:absolute;
  top:10px;
  width:90%;
  padding:0 5%;
}
.contli a{
  text-decoration:none;
}
.contli p{
  color:#666;
}
.contli p strong{
  color:#f74747;
  font-size:16px;
}
.contli p,.contli div{
  text-align:center;
  font-size:13px;
}
.licontbox{
  padding-bottom:50px;
}
.w33{
  width:33%;
}
.biqoaianbox li{
  padding:5px 0;
  border-top:1px solid #ececec;
  border-bottom:1px solid #ececec;
  font-size:14px;
}
.biqoaianbox li a{
    color:#8F959D;
}
.contpai{

}
.contpai li{
  border-bottom:1px solid #ececec;
  font-size:13px;color:#8F959D;
  position:relative;
}
.contpai li.now{
  color:#404245;
}
.contpai li span{
  padding:8px 0;
  display:inline-block;
}
.contpai .nobl{
  border-left:none;
}
.cxiao{
  font-size:13px;
}
</style>
