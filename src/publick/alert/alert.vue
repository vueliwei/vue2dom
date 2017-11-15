<template>
  <div class=" ">

      <div class="box">
        <div class="demo">
          <a href="javascript:;" class="bounceIn">DEMO1</a>
          <a href="javascript:;" class="rollIn">DEMO2</a>
          <a href="javascript:;" class="bounceInDown">DEMO3</a>
          <a href="javascript:;" class="flipInX">DEMO4</a>
        </div>
        
        <div id="dialogBg" style="width: 1920px; height: 871px; display: none;"></div>
        <div id="dialog" class="animated claseDialogBtn bounceOutUp" style="display: none;">
          <div class="dialogTop">
            <a href="javascript:;" class="claseDialogBtn">关闭</a>
          </div>
          <form action="" method="post" id="editForm">
            <ul class="editInfos">
              &nbsp;&nbsp;&nbsp;xxx
              <li><input type="submit" value="确认提交" class="submitBtn"></li>
            </ul>
          </form>
        </div>
      </div>
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
  created:function(){
      console.log('实例已经创建,msg变量还未渲染到模板')
  },
  mounted:function(){console.log('已经挂载到模板上:msg变量渲染到模板')
    //
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
      $('.box a').click(function(){
        className = $(this).attr('class');
        $('#dialogBg').fadeIn(300);
        $('#dialog').removeAttr('class').addClass('animated '+className+'').fadeIn();
      });
      
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

</style>
