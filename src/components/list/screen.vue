<template>
  <div class="">
    <ul class="towmd cons">
        <li class="">罩杯</li>
        <li class="mright"><i class="iconfont icon-zhankai"></i></li>
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
    <div class="demo">
        <input class="range-slider" type="hidden" value="10,89"/>
    <!-- <button id="g2">获取值</button> -->
    </div>
    <ul class="towmd cons">
        <li class="">罩杯</li>
        <li class="mright"><i class="iconfont icon-zhankai"></i></li>
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
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
import detectPrefixes from './../../common/js/jquery-1.7.2.min.js'
import range from './../../common/js/jquery.range.js'
import css from './../../common/css/jquery.range.css'

export default {
  name: 'bottom',
  data () {
    return {
      msg: ''
    }
  },
  created:function(){
      console.log('实例已经创建,msg变量还未渲染到模板')
  },
  mounted:function(){console.log('已经挂载到模板上:msg变量渲染到模板')
    $('.range-slider').jRange({
        from: 0,
        to: 100,
        step: 1,
        scale: [0,25,50,75,100],
        format: '%s',
        width: 300,
        showLabels: true,
        isRange : true
      });
      $("#g2").click(function(){
        var aa = $(".range-slider").val();
        alert(aa);
      });
      $('.slider-container').height(40);
      $('.slider-container').css("padding","16px 10px 0");
      $('.slider-container').css("margin","6px auto 0");
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
div.slider-container{
  height:36px;
  padding-top:10px;
}
.cons{
  padding:4px 22px;
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
  width:60px;
  border:1px solid #ccc;
  font-size:12px;
  height:28px;
  line-height:28px;
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
</style>
