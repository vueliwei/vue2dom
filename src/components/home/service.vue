<template>
  <div class="dorpbox">
   	<div class="width100 hidden smingpic">
		<img src="" />
	</div>
	<div class="boxdivgh">
		<ul class="towmd">
			<li class="mright">
				<p class="conlinep">xxxsssddd</p>
				<p class="conhp"><i>ccc</i><span>1350</span></p>
			</li>
			<li ><img src="" width="100" height="100" /></li>
		</ul>
	</div>
	<div class="boxdivgh">
		<ul class="towmd">
			<li class="mright">
				<p class="conlinep">xxxsssddd</p>
				<p class="conhp"><i>ccc</i><span>1350</span></p>
			</li>
			<li ><img src="" width="100" height="100" /></li>
		</ul>
	</div>
   	<!-- -->
  </div>
</template>
<script>
import vDarg from "./../../publick/drop.vue";
document.title='NICE IN';
import slider from './slider'
export default {
   name: 'bottom',
   data () {
      return {
       
      }
    },
	mounted:function(){console.log('已经挂载到模板上:msg变量渲染到模板')
	    
	},
    components: {
        slider,
        vDarg
    }
}
</script>
<style>
html,body{
  background:#f5f4f9;
}
.conlinep{
	line-height:80px;
}
.smingpic{

}
.smingpic img{
	width:100%;
	height:80px;
	display:inline-block;
}
.conhp{
}
.boxdivgh{
	border:1px solid #ccc;
	margin-top:20px;
	padding:8px 0;
}
.boxdivgh li{
	width:30%;
	text-align:center;
}
.boxdivgh .mright{
	width:60%;
	text-align:left;
	margin-left:6%;
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
</style>