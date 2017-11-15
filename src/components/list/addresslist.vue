<template>
  <div class="bodytex">

      <ul class="towmd tc bgf navcont">
          <li class="nobl " v-on:click="history()"><i class="iconfont icon-shangyiye"></i></li>
          <li class="conulpb">
              <span>管理收货地址</span>
          </li>
          <li class="nobl mright" ></li>
      </ul><!-- to="/screen"  <p v-for="(obj,index) in province">{{obj.name}}<b class="disno">{{obj.id}}</b></p>  -->
      <div class="boxpart"  v-for="(obj,index) in addresslist">
          <ul class="towmd">
              <li class="partname">
                  {{obj.consignee}}
              </li>
              <li class="pli mright">
                  {{obj.mobile}}
              </li>
          </ul>
          <div class="adinfor" >
             <span v-for="obj  in obj.address_content" > {{obj}}</span>
          </div>
          <ul class="towmd">
              <li class="partname" :icur="obj.is_default"   @click="szmr(obj,obj.is_default)">
                  <i v-if="obj.is_default == 0" class="iconfont icon-checkBox"></i>
                  <i v-else class="iconfont icon-fuxuankuang2"></i>
                  <span v-if="obj.is_default == 0" >设置为默认地址</span>
                  <span v-else>默认地址</span>
                  <!--1 是默认地址 -->
              </li>
              <li class="pli mright"  >
                  编辑
              </li>
              <li class="pli mright" @click="delet(obj)" >
                  删除
              </li>
          </ul>
      </div>
      <div class="boxpart">
          <ul class="towmd">
              <li class="partname">jason</li>
              <li class="pli mright">18279912527</li>
          </ul>
          <div class="adinfor">
              广东省 深圳市 南山区  科技中三路华富洋大厦 306室
          </div>
          <ul class="towmd">
              <li class="partname">
                  <i class="iconfont icon-checkBox"></i>默认地址
              </li>
              <li class="pli mright">
                  编辑
              </li>
              <li class="pli mright">
                  删除
              </li>
          </ul>
      </div>
      <div class="maskpay" @click=" ">
          <router-link to="/rt" class="w30 pay">添加收货地址</router-link>
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
export default {
  name: 'bottom',
  data () {
    return {
      addresslist:[]  //地址列表 数据储存
    }
  },
  methods:{
     history:function(){
        history.go(-1);
     },
     getdata:function(){//  获取 的地址列表
        var url = this.HOST + '/home/Orderaddress/getAddressList';
        this.$http.get(url, {
            params: {
            }
          })
          .then(function (res) {
            let data = eval("(" + res.bodyText + ")");
            this.addresslist = data.data;
          })
          .catch(function (response) {
            console.log(response);
          });
     },
     szmr:function(obj,numb){ //提交 需要的信息 
      if(numb==1){
          return false;
      }
      var url = this.HOST + '/home/Orderaddress/updateAddress';
        this.$http.get(url, {
            params: {
              address_id:obj.address_id,
              consignee:obj.consignee,
              mobile:obj.mobile,
              province:obj.province,
              city:obj.city,
              area:obj.area,
              street:obj.street,
              address:obj.address,
              is_default:1
            }
          })
          .then(function (res) {
            this.getdata();
          })
          .catch(function (response) {
            console.log(response);
          });
      //obj.address_id;
       //打算 提交  被点击的 参数
     },
     delet:function(obj){
        var url = this.HOST + '/home/Orderaddress/delAddress';
        this.$http.get(url, {
            params: {
              address_id:obj.address_id
            }
          })
          .then(function (res) {
            alert(eval("(" + res.bodyText + ")").msg);
          })
          .catch(function (response) {
            console.log(response);
          });
     }
     
  },
  created:function(){
      console.log('实例已经创建,msg变量还未渲染到模板')
      this.getdata();
  },
  mounted:function(){console.log('已经挂载到模板上:msg变量渲染到模板')
    /*主体部分基本*/
    $(".nav-container").hide();
    var that = this;   

  },
  updated:function(){
      console.log('实例更新啦')    
  },
  destroyed:function(){
      console.log('销毁啦')  
  }
}
</script>
<style scoped>
body,html,.bodytex{
  background:#f8f9fa;
}
.adinfor{
  font-size:14px;
  color:#55595F;
  line-height:20px;
  border-bottom:1px solid #e3e5e8;
  padding-bottom:8px;
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
  font-size:14px;
}
.pli .iconfont{
  font-size:14px;
  color:#a3a6ac;
}
.boxpart{
  border-top:1px solid #e3e5e8;
  padding-left:10px;
  padding-right:10px;
  background:#fff;
  margin-bottom:16px;
  border-bottom: 1px solid #e3e5e8;
}
.boxpart ul{
  padding:10px 0;
}
.borul{
  border-bottom:1px solid #e3e5e8;
}
.borul ul{
  border-bottom:none;
}
.partname{
  width:40%;
  color:#525457;
  font-size:14px;
}
.partname i{
  display:inline-block;
  margin-right:4px;
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
  background:#F34444;
  font-size:16px;
  text-align:center;
  border-radius:5px;
  line-height:34px;
  height:34px;
  margin:60px 10px 10px;
  color:#fff;
}
</style>
