<template>
  <div class="dorpbox">
   	
	<slider :pages="pages" :sliderinit="sliderinit">
        <!-- slot  -->
    </slider>
   	<div class="width100 hidden" style="padding-top:4px;padding-bottom:4px;">
	  	<div class="width96 center" id="fenlei">
	        <router-link to="/service">
	            <p class="tcenter font12 c_33" style="margin-top:4px">24小时发货</p>
	        </router-link>
	        <router-link to="/service">
	            <p class="tcenter font12 c_33" style="margin-top:4px">1对1私人客服</p>
	        </router-link>
	        <router-link to="/service">
	            <p class="tcenter font12 c_33" style="margin-top:4px">退货保障</p>
	        </router-link>
	        <router-link to="/service">
	            <p class="tcenter font12 c_33" style="margin-top:4px">买退包邮</p>
	        </router-link>
	    </div>
	</div>
	<div class="width100 hidden" style="padding-top:4px;padding-bottom:4px;">
	  	<div class="width96 center tc" id="fenlei">
	        <router-link to="/list">
	      		<i>c</i>
	            <p class="tcenter font12 c_33" style="margin-top:4px">内衣</p>
	        </router-link>
	        <router-link to="/list">
	        	<i>c</i>
	            <p class="tcenter font12 c_33" style="margin-top:4px">小裤</p>
	        </router-link>
	        <router-link to="/list">
	        	<i>c</i>
	            <p class="tcenter font12 c_33" style="margin-top:4px">聚拢</p>
	        </router-link>
	        <router-link to="/list">
	        	<i>c</i>
	            <p class="tcenter font12 c_33" style="margin-top:4px">文胸套装</p>
	        </router-link>
	    </div>
	</div>
	<div class="width100 hidden">
		<ul class="towmd  boxtowdf">
			<li>
				<router-link to="/">
					<h4>如何选</h4>
					<p>90%的人都穿错衣服</p>
					<p>最适合你穿的</p>
				</router-link >
			</li>
			<li>
				<router-link to="/">
					<h4>怎么搭</h4>
					<p>内衣也可以穿出新时尚</p>
				</router-link >
			</li>
		</ul>
	</div>
	<ul class="smd towmd">
          <li>
              <a >
                  尺寸
              </a>
              <p> ccc</p>
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
    <div class="width100 hidden contime">
    	<strong>NISEIN 特卖</strong>
    	<span>距离结束时间</span>
    	<span id="divdown1"></span>
    </div>
	<div class="width100  " style="margin-top:12px;" id="box_show">
	    <!--按照最多3个的进行布局-->
	    <div class="width96 center  clearfix">
	      <a href="javascript:void(0)" class="ts">
	          <img src="./../../common/img/sp1.jpg">
	        </a>
	        <a href="javascript:void(0)" class="ts">
	          <img src="./../../common/img/sp2.jpg">
	        </a>
	        <a href="javascript:void(0)" class="ts">
	          <img src="./../../common/img/sp3.jpg">
	        </a>
	    </div>
	    <!--按照最多2个的进行布局-->
	    <!--按照最多1个的进行布局-->
	</div>
	<div class="width100"  >
	    <!--按照最多3个的进行布局-->
	    <ul class="towmd">
	    	<li class="ts conpl">
	    		<p>特卖</p>
	          	<ul class="towmd">
			    	<li class="ts">
			    		<img src="" width="50" height="80">
			    	</li>
			    	<li class="ts stlijl">
			    		<p>距离结束还有</p>
			    		<p>12:12:12</p>
			    	</li>
			    </ul>
	    	</li>
	    	<li class="ts">
	    		<ul class="towmd styulptb">
			    	<li class="ts stlilj">
			    		<p>了解</p>
			    		<p>NICEIN</p>
			    	</li>
			    	<li class="ts stlilg">
			    		<div>48小时发货</div>
			    		<p>7X15客服</p>
			    		<p>199包邮</p>
			    	</li>
			    </ul>
	    	</li>
	    </ul>
	</div>
	<div class="width96 center picbox">
        <a href="javascript:void(0)" class="pixcontbox">
          <img src="https://cdn.mielseno.com/view/photo/goods/20171018/5894565bf1638ddf3c2e0a80cfb4868e-750.jpg">
          <v-darg msgdrop="LOUIS VUITTON"></v-darg>
          <p class="conxqing">24小时轮廓潇洒</p>
        </a>
    </div>
   	<!-- -->
  </div>
</template>
<script>
import vDarg from "./../../publick/drop.vue";
document.title='NICE IN';
import slider from './slider'// 引入slider组件
export default {
   name: 'bottom',
   data () {
      return {
        //图片列表[arr]
        pages:[
          {
            title: 'slide1',
            style:{
             background:'url(./../../static/img/sp3.0a7504b.jpg)',
            }
          },
          {
           title: 'slide2',
           style:{
            background:'url(./../../static/img/sp3.0a7504b.jpg)',
            }
          }
        ],
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance:120,//滑动判定距离
          thresholdTime:1000,//滑动判定时间
          autoplay:2000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'',//vertical方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        }
      }
    },
	mounted:function(){console.log('已经挂载到模板上:msg变量渲染到模板')
/*
	$(".nav-container a").each(function(){
       $(this).css("color","#50556e");
    });
    $(".nav-container a:nth-child(1) i").attr("class","iconfont icon-shouye1");
    $(".nav-container a:nth-child(2) i").attr("class","iconfont icon-danpin");
    $(".nav-container a:nth-child(3) i").attr("class","iconfont icon-02");
    $(".nav-container a:nth-child(4) i").attr("class","iconfont icon-my");

     $(".nav-container a:nth-child(1) i").attr("class","iconfont icon-shouye-copy");
     $(".nav-container a:nth-child(1)").css("color","#b4bff9");


	    $(".nav-container").show();*/
	    
      

      	var interval = 1000; 
		function ShowCountDown(year,month,day,divname) 
		{ 
		var now = new Date(); 
		var endDate = new Date(year, month-1, day); 
		var leftTime=endDate.getTime()-now.getTime(); 
		var leftsecond = parseInt(leftTime/1000); 
		//var day1=parseInt(leftsecond/(24*60*60*6)); 
		var day1=Math.floor(leftsecond/(60*60*24)); 
		var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
		var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
		var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
		var cc = document.getElementById(divname); 
		cc.innerHTML = "："+day1+"天"+hour+"小时"+minute+"分"+second+"秒"; 
		} 
		var that = this;
		this.int = setInterval(function(){ShowCountDown(2017,11,11,'divdown1');}, interval); 
	},
    components: {
        slider,
        vDarg
    },
    destroyed:function(){
    	clearInterval(this.int);
        console.log('销毁啦')  
  	}
}

</script>
<style>
html,body{
  background:#f5f4f9;
}
.boxtowdf{
	border:1px solid #ccc;
}
.boxtowdf li{
	width:50%;
	padding-top:10px;
	height:80px;
	text-indent:6px;
}
.boxtowdf li a{
	
}
.boxtowdf li p{
	font-size:13px;
}
.contime{
	font-size:12px;
}
.smd{
  padding-bottom:8px;
}
.smd li{
  width:33%;
  text-align:center;
  margin-top:8px;
}
.smd a{
  display:inline-block;
  width:60px;
  border:1px solid #ccc;
  font-size:12px;
  height:28px;
  line-height:28px;
  border-radius:4px;
}
.smd p i{
 width:12px;
 height:10px;margin-right:6px;
 display:inline-block;
 background:#ccc;
}
.smd p span{
  font-size:12px;
}
h4{
	font-size:18px;
	font-weight:bold;
	color:#333;
}
.picboxtouch{
	position:relative;
	left:0;
}
.tc{
	text-align:center;
}
.dorpbox{
	padding-bottom:60px;
}
.pixcontbox a,.pixcontbox img{
	display:inline-block;
	width:100%;
}
div.picbox{
	border-radius:10px;
	overflow:hidden;
	margin-top:10px;
}
.picbox a{
	text-decoration: none;
	color:#85888d;
}
.conxqing{
	height:30px;
	line-height:30px;
	background:#f9fafc;
	text-indent:20px;
	font-size:12px;
}
.conpl{
	font-size:12px;
	padding-left:6px;
}
.stlijl{
	padding-top:10px;
	line-height:30px;
}
.styulptb{
	padding-top:12px;
	font-size:12px;
}
.stlilj{
	padding-top:30px;
	text-align:center;
	border-right:1px solid #ccc;
	padding-bottom:30px;
}
.stlilg{
	text-indent:6px;
}
.stlilg div{
	padding-bottom:10px;
}
.stlilg p{
	line-height:36px;
}
/**/
.width96 {
    width: 96%!important;
}
.center {
    margin: 0 auto;
}
.hidden {
    overflow: hidden;
}
.ts:nth-child(1) {
    width: 49%;
}
.ts {
    display: block;
    overflow: hidden;
    float: left;
}
.ts:nth-child(1) img {
    width: 100%;
}
.ts:nth-child(2) {
    width: 49%;
    float: right;
    margin-bottom: 2%;
}
.ts:nth-child(2) img {
    width: 100%;
}
.ts:nth-child(3) {
    width: 49%;
    float: right;
}
.ts:nth-child(3) img {
    width: 100%;
}
/**/
/**/
input{outline:medium;}
.block{display:block;}
#return{
	display:block;
	width:16px;
	height:27px;
	position:absolute;
	top:8px;
	left:6px;
	background-size:cover;
	}
#vip_centers a:nth-last-child(1){border-bottom:none;}	
.fff{color:#fff;}
.width100{width:100%!important;}
.width96{width:96%!important;}
.width50{width:50%!important;}
.width49{width:49%!important;}
.width25{width:25%!important;}
.width33{width:33.3%!important;}
.bj_fff{background:#fff;}
.bj_red{background:red;}
.border{border:1px solid #ddd;}
.borderb{border-bottom:1px solid #ddd;}
.hidden{overflow:hidden;}
.center{margin:0 auto;}
.tcenter{text-align:center;}
.relative{position:relative;}
.absolute{position:absolute;}
.font12{font-size:12px!important;}
.font13{font-size:13px!important;}
.font14{font-size:14px!important;}
.font16{font-size:16px!important;}
.font18{font-size:18px!important;}
.font20{font-size:20px!important;}
.font24{font-size:24px!important;}
.font27{font-size:27px!important;}
.c_33{color:#333;}
.c_66{color:#666;}
.c_99{color:#999;}
.c_dd{color:#ddd;}
.red{color:#fa3745;}
.left{float:left;}
.right{float:right;}
.font100{font-weight:100;}
.jiachu{font-weight:bold;}
.fixed{position:fixed;}
.yihang{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#box{width:600%;height:auto;overflow:hidden;}
#box img{float:left;opacity:1;}
#fenlei a{
	display:block;
	width:25%;
	float:left;
	overflow:hidden;
}
#fenlei1 a{
	display:block;
	width:20%;
	float:left;
	overflow:hidden;
}
#fenlei a b{
	display:block;
	width:40px;
	height:40px;
	border-radius:20px;
	overflow:hidden;
	margin:0 auto;
	}
#fenlei a b img{
	width:40px;
	height:auto;
	}
#fenlei a b{
	box-shadow:3px 3px 6px rgba(254,48,96,0.2);
	}	
#fenlei a:nth-child(2) b img{
	margin-top:-40px;
	}
#fenlei a:nth-child(3) b img{
	margin-top:-80px;
	}
#fenlei a:nth-child(4) b img{
	margin-top:-120px;
	}
#fenlei a:nth-child(2) b{
	box-shadow:3px 3px 6px rgba(254,179,52,0.2);
	}
#fenlei a:nth-child(3) b{
	box-shadow:3px 3px 6px rgba(121,214,47,0.2);
	}
#fenlei a:nth-child(4) b{
	box-shadow:3px 3px 6px rgba(38,149,239,0.2);
	}
.ts{ 
	display:block;
	overflow:hidden;
	float:left;
	}
</style>