<template>
  <div class="bodytex">

      <ul class="towmd tc bgf navcont">
          <li class="nobl " v-on:click="history()"><i class="iconfont icon-shangyiye"></i></li>
          <li class="conulpb">
              <span>添加收货地址</span>
          </li>
          <li class="nobl mright" >完成</li>
      </ul><!-- to="/screen"  -->
      <div class="boxpart">
          <ul class="towmd">
              <li class="partname">
                  收件人姓名:
              </li>
              <li class="partcont">
                  <input type="text" value="" class="name_ad" placeholder="" v-on:blur="listening()" >
              </li>
              <li class="pli mright">
              </li>
          </ul>
          <ul class="towmd">
              <li class="partname">
                  手机号码:
              </li>
              <li class="partcont">
                  <input type="text" value="" placeholder="" class="phone_ad" v-on:blur="listening_ph()" >
              </li>
              <li class="pli mright">
              </li>
          </ul>
          <ul class="towmd" v-on:click="cityfn()"  >
              <li class="partname">
                  所在地址:
              </li>
              <li class="partcont contci">
                  省，市，区
              </li>
              <li class="pli mright">
                  <i class="iconfont icon-iconfontyoujiantou"></i>
              </li>
          </ul>
          <ul class="towmd" @click="streetfn()">
              <li class="partname">
                  街道:
              </li>
              <li class="partcont contstre">
                  街道
              </li>
              <li class="pli mright">
                  <i class="iconfont icon-iconfontyoujiantou"></i>
              </li>
          </ul>
          <ul class="towmd">
              <li class="partname">
                  详细地址:
              </li>
              <li class="partcont">
                  <input type="text" value="" placeholder="请填写详细地址，不少于5个字" class="address_ad" v-on:blur="listening_ad()" >
              </li>
              <li class="pli mright">
              </li>
          </ul>
      </div>
      <div class="boxpart borul">
          <ul class="towmd">
              <li class="partname colormr">
                  设置默认地址:
              </li>
              <li class="mright ">
                  <div class="switch_per" icur="0" @click="ckbox">
                      <span></span>
                  </div>
              </li>
          </ul>
      </div>
      <div class="maskpay" @click="postad">
          保存并使用
      </div>

    <div class="box_porvu" id="city" >
      <ul class="butbox towmd">
          <li class=""><a class="" @click="cancel()">取消</a></li>
          <li class="mright"><a class="" @click="confirmcity()">确认</a></li>
      </ul>
      <div class="porvu">
          <div></div>
      </div>
      <ul class="towmd porvul">
          <li class="boxpl">
            <p v-for="(obj,index) in province"><span>{{obj.name}}</span><b class="disno">{{obj.id}}</b></p>
          </li>
          <li class="boxpl2">
            <p v-for="(obj,index) in city"><span>{{obj.name}}</span><b class="disno">{{obj.id}}</b></p>
          </li>
          <li class="boxpl3">
            <p v-for="(obj,index) in area"><span>{{obj.name}}</span><b class="disno">{{obj.id}}</b></p>
          </li>
      </ul>
    </div>
    <div class="box_porvu" id="street" >
      <ul class="butbox towmd">
          <li class=""><a class="" @click="cancel()">取消</a></li>
          <li class="mright"><a class="" @click="confirm()">确认</a></li>
      </ul>
      <div class="porvu">
          <div></div>
      </div>
      <ul class="towmd porvul">
          <li class="boxpl4">
            <p v-for="(obj,index) in street"><span>{{obj.name}}</span><b class="disno">{{obj.id}}</b></p>
          </li>
      </ul>
    </div>

<!-- pop -->
      <div class="pof_mark">
          <div class="bgst"></div>
          <div class="cont_mark">
            
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
      msg: '',
      adnum:0,
      city2:1,
      province:[],
      city:[],
      area:[],
      street:[],
      allcity:'',
      allstre:''
    }
  },
  methods:{
     cityfn:function(){//城市
        $('#city').animate({left:0},300,function(){ });
     },
     streetfn:function(){//街道
        if(this.allcity==''){
            $('.pof_mark .cont_mark').html('请选择城市');
            $('.pof_mark').show().animate({marginTop:-350},1000,function(){
              $('.pof_mark').hide().css('margin-top',0);
            })
            return false;
        }
        $('#street').animate({left:0},300,function(){ });
     },
     confirmcity:function(){//确认城市
        //allcity
        //let theid = (-that.Y+topz)/lineheight;
        //theid = $(obj).find('p').eq(theid).find('b').html();
        let theid = parseInt($('.boxpl').css('top'))-40;
        theid = -theid/20;
        theid = $('.boxpl').find('p').eq(theid).find('span').html();

        let theid2 = parseInt($('.boxpl2').css('top'))-40;
        theid2 = -theid2/20;
        theid2 = $('.boxpl2').find('p').eq(theid2).find('span').html();
        let theid3 = parseInt($('.boxpl3').css('top'))-40;
        theid3 = -theid3/20;
        theid3 = $('.boxpl3').find('p').eq(theid3).find('span').html();
        var icur = theid+','+theid2+','+theid3;
        $('.contci').html(icur);
        this.allcity = icur;
        $('.box_porvu').animate({left:500},300,function(){ });
     },
     cancel:function(){//取消
        $('.box_porvu').animate({left:500},300,function(){ });
     },
     confirm:function(){//确认
        let theid4 = parseInt($('.boxpl4').css('top'))-40;
        theid4 = -theid4/20;
        theid4 = $('.boxpl4').find('p').eq(theid4).find('span').html();
        $('.contstre').html(theid4);
        this.allstre = theid4;
        $('.box_porvu').animate({left:500},300,function(){ });
     },
     history:function(){
        history.go(-1);
     },
     ckbox:function(that){
        let el = that.currentTarget;
        $(el).attr('icur');
        if($(el).attr('icur')==0||$(el).attr('icur')=='0'){
            $(el).find('span').animate({left:16},300,function(){
              $(el).css('background','#73e652');
            });
            $(el).attr('icur','1');
        }else{
            $(el).find('span').animate({left:0},300,function(){
              $(el).css('background','#fff');
            });
            $(el).attr('icur','0');
        }
     },
     getad:function(that){
        var url = this.HOST + '/manage/Common/getRegion';
        this.$http.get(url, {
            params: {
              parent_id:this.adnum
            }
          })
          .then(function (res) {
            let data = eval("(" + res.bodyText + ")");
            this.province = data.data;
            $('.boxpl').animate({top:40},1);
            let that = this;
            setTimeout(function(){
                 let theid = $('.boxpl').find('p').eq(0).find('b').html();
                 theid = parseInt(theid);
                 that.getad2(theid);
             },200);
          })
          .catch(function (response) {
            console.log(response);
          });
     },
     getad2:function(that){
        var url = this.HOST + '/manage/Common/getRegion';
        this.$http.get(url, {
            params: {
              parent_id:that
            }
          })
          .then(function (res) {
             let data = eval("(" + res.bodyText + ")");
             this.city = data.data;
             let that = this;
             $('.boxpl2').animate({top:40},1);
             $('.boxpl3').animate({top:40},1);
             setTimeout(function(){
                 let theid = $('.boxpl2').find('p').eq(0).find('b').html();
                 theid = parseInt(theid);
                 that.getad3(theid);
             },200);
          })
          .catch(function (response) {
            console.log(response);
          });
     },
     getad3:function(that){
        var url = this.HOST + '/manage/Common/getRegion';
        this.$http.get(url, {
            params: {
              parent_id:that
            }
          })
          .then(function (res) {console.log(res);
             let data = eval("(" + res.bodyText + ")");
             this.area = data.data;
             let that = this; 
             $('.boxpl3').animate({top:40},1);
             setTimeout(function(){
                 let theid = $('.boxpl3').find('p').eq(0).find('b').html();
                 theid = parseInt(theid);
                 that.getad4(theid);
             },200);
          })
          .catch(function (response) {
            console.log(response);
          });
     },
     getad4:function(that){
        var url = this.HOST + '/manage/Common/getRegion';
        this.$http.get(url, {
            params: {
              parent_id:that
            }
          })
          .then(function (res) {
             let data = eval("(" + res.bodyText + ")");
             this.street = data.data;
          })
          .catch(function (response) {
            console.log(response);
          });
     },
     listening:function(){//name_ad phone_ad phone_ad
      
         if($('.name_ad').val().length==''){
              $('.pof_mark .cont_mark').html('输入用户名');
              $('.pof_mark').show().animate({marginTop:-350},1000,function(){
                $('.pof_mark').hide().css('margin-top',0);
              })
            return false;
         }
         if($('.name_ad').val().length!='' && $('.address_ad').val().length>4){
            
         }
     },
     listening_ph:function(){//name_ad phone_ad phone_ad
         if($('.phone_ad').val().length!=11){
              $('.pof_mark .cont_mark').html('输入正确的手机号');
              $('.pof_mark').show().animate({marginTop:-350},1000,function(){
                $('.pof_mark').hide().css('margin-top',0);
              })
            return false;
         }
         if($('.name_ad').val().length!='' && $('.address_ad').val().length>4){
            
         }
     },
     listening_ad:function(){
        if($('.name_ad').val().length!='' && $('.address_ad').val().length>4){
            
        }
     },
     postad:function(){
       var url = this.HOST + '/home/Orderaddress/addAddress';
        this.$http.get(url, {
            params: {
              consignee:$('.name_ad').val(),
              mobile:$('.phone_ad').val(),
              province:$('.name_ad').val(),//省
              city:$('.name_ad').val(),//市
              area:$('.name_ad').val(),//区
              street:$('.name_ad').val(),//街
              address:$('.name_ad').val(),//详细
              is_default:$('.name_ad').val()//0 默认
            }
          })
          .then(function (res) {
            console.log(res.bodyText)
          })
          .catch(function (response) {
            console.log(response);
          });
      },
      touchfn:function(obj,that,numb){
        $(obj).on("touchstart", function(e) {
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
        $(obj).on("touchend", function(e) {   
            let topz = 40;
            let lineheight = 20;
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
            
            let theh = parseInt($(obj).height());
            theh = theh-topz-lineheight;// 到线的高度
            if (that.Y > 0) {//下滑
               
               that.Y=parseInt($(obj).css('top'))+that.Y;
               if(that.Y>theh){
                that.Y = theh;
               }
               if(theh<0){
                that.Y = topz;
               }

               that.Y = parseInt(that.Y/lineheight);
               that.Y = that.Y*lineheight;
               
            }else if (that.Y < 0 ) {//上滑

                that.Y=parseInt($(obj).css('top'))+that.Y;
                if(that.Y<-theh){
                  that.Y = -theh;
                }

                that.Y = parseInt(that.Y/lineheight);
                that.Y = that.Y*lineheight;
            }else if(that.Y==0){
              return false;
            }

            if(that.Y>topz){
              that.Y = topz;
            }
            
            $(obj).animate({top:that.Y});
            let theid = (-that.Y+topz)/lineheight;
            theid = $(obj).find('p').eq(theid).find('b').html();

            theid = parseInt(theid);

            if(numb==1){
              that.getad2(theid);
            }
            if(numb==2){
              that.getad3(theid);
            }
            if(numb==3){
              that.getad4(theid);
            }
           //$(".boxpl2").offset().top($(".boxpl2").offset().top()+that.Y);
        });
      }
  },
  created:function(){
      console.log('实例已经创建,msg变量还未渲染到模板')
      this.getad(0);
  },
  mounted:function(){console.log('已经挂载到模板上:msg变量渲染到模板')
    /*主体部分基本*/
    $(".nav-container").hide();
    var that = this;
    this.touchfn('.boxpl',that,1);
    this.touchfn('.boxpl2',that,2);
    this.touchfn('.boxpl3',that,3);
    this.touchfn('.boxpl4',that,4);
    
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
.disno{
  display:none;
}/**/
.butbox{
  height:30px;
  padding:0 10px;
  line-height:30px;
  font-size:13px;
}
.box_porvu{
    position: fixed;
    width: 100%;
    bottom: 0;
    left:100%;
    height:190px;
    background:#fff;
    z-index: 9;
}
.porvul li{
  width:33%;
  text-align:center;
  overflow:hidden;
}
.porvul li p{
  height:20px;
  font-size:13px;
  overflow:hidden;
}
.porvu{
    position:relative;
    height:110px;
    border-top:1px solid #e3e5e8;
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
.boxpl,.boxplp,.boxpl2,.boxplp2,.boxpl3,.boxpl4{
    position:absolute;
    line-height:20px;top:0;
}
.boxplp{
    top:40px;left:30%;
    line-height:20px;
    font-size:14px;
}
.boxplp2{
    top:40px;left:60%;
    font-size:14px;
    line-height:20px;
}
.boxpl{
  left:0;
}
.boxpl2{
    left:33%;
}
.boxpl3{
    left:66%;
}
.porvul .boxpl4{
    left:28%;
}
/**/
.switch_per {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    width:36px;
    height:20px;
    border:1px solid #e6e6e6;
    margin-right:10px;
    border-radius:20px;
}
.switch_per span{
    position:relative;
    left:0;
    background:#fff;
    display:inline-block;
    width:20px;
    height:20px;
    border-radius:20px;
    border:1px solid #e6e6e6;
}
.bgf{
  background:#fff;
}
.pli{
  padding-right:5%;
}
.pli .iconfont{
  font-size:14px;
  color:#a3a6ac;
}
.boxpart{
  border-top:1px solid #e3e5e8;
  padding-left:10px;
  background:#fff;
  margin-bottom:16px;
}
.boxpart ul{
  border-bottom:1px solid #e3e5e8;
  padding:10px 0;
}
.borul{
  border-bottom:1px solid #e3e5e8;
}
.borul ul{
  border-bottom:none;
}
.partname{
  width:25%;
  color:#525457;
  font-size:14px;
}
.colormr{
  color:#a3a6ac;
  width:35%;
}
.partcont{
  font-size:14px;
  color:#a3a6ac;
  width:60%;
}
.partcont input{
  display:inline-block;
  width:100%;
  background:none;  
   outline:none;  
   border:0px; 
   color:#a3a6ac;
}
.bodytex{
  padding-bottom:40px;
}
.tc{
  text-align:center;
}
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
}
.maskpay{
  background:#b8b8b8;
  font-size:16px;
  text-align:center;
  border-radius:5px;
  line-height:34px;
  height:34px;
  margin:160px 10px 10px;
  color:#fff;
}
</style>
