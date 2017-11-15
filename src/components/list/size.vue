<template>
  <div class=" ">
    <ul class="towmd tc">
        <li class="w33 nobl" v-on:click="history()"><span class="stsp"><i class="iconfont icon-arrow-fine-left"></i></span></li>
    </ul>
    <h6>请选择 你常穿的内衣品牌尺码</h6>
    <div class="porvu">
        <div></div>
    </div>
    <ul class="towmd porvul">
        <li class="boxsx contouch">
            <ul class="towmd">
              <li class="boxpl">
                <p>60</p>
                <p>60</p>
                <p>60</p>
                <p>60</p>
                <p>60</p>
              </li>
              <li class="boxplp">
                  底围
              </li>
            </ul>
        </li>
        <li class="boxsx contouch2">
            <ul class="towmd">
              <li class="boxpl2">
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
                <p>E</p>
              </li>
              <li class="boxplp2">
                  罩杯
              </li>
            </ul>
        </li>
    </ul>
    <div class="mPicker hide"><div class="mPicker-mask hide"></div></div>
    <p class="tc">隐私和版权生命</p>
    <div class="tc">保存</div>
  </div>
</template>
<script>
import detectPrefixes from './../../common/js/jquery.min.js'
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
    $(".nav-container").hide();
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
body,html,.hello{
  background:#eee;
}
h1, h2 {
  font-weight: normal;
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
    border-top:1px solid #000;
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
.porvul{
    position:relative;
    top:-100px;
    padding-left:20%;
    height:140px;
    overflow:hidden;
}
.porvul ul{
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
}
</style>
