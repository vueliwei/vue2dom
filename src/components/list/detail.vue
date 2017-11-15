$<template>
  <div class="licontbox">
      <div class="por">
          <div class="porim">
            <slider :pages="pages" :sliderinit="sliderinit">
                <!-- slot  -->
            </slider>
          </div>
          <ul class="towmd poac">
              <li v-on:click="history()"><i class="iconfont icon-shangyiye"></i></li>
              <li class="mright">
                  <i class="iconfont icon-fenxiang"></i>
              </li>
              <li class="mright collect_status" icon="" @click="collect()" >
                  <i class="iconfont icon-xing"  ></i>
              </li>
          </ul>
          <div class="poa2con">
            <input type="button" value="视频" />&nbsp;
            <input type="button" value="图片" />
          </div>
      </div>
      <div class="conboxzh">
          <ul class="towmd">
              <li class="spname"><h5>good_name</h5></li>
              <li class="splogo"><a ><img src="../../common/img/brandslogo.png"  /></a></li>
          </ul>
          <p class="lineg">good_name_short</p>
          <p class=""><strong >￥shop_price</strong><span class="tlthrough">￥market_price</span></p>
          <p class="biaoq"><span>销售标签</span><span>标签</span><span>标签</span></p>
          <ul class="towmd service">
              <li class="biaoti">服务:</li>
              <li class="contw">
                  <ul class="towmd">
                      <li class="mr5"><i class="iconfont icon-baozhang"></i><span>7天无理由退款</span></li>
                      <li class="mr5"><i class="iconfont icon-ccgl-zhouzhuanxiang-4"></i><span>满xx包邮</span></li>
                      <li class=""><i class="iconfont icon-kefu"></i><span>7X15小时客服</span></li>
                      <li class=""><i class="iconfont icon-kuaidi"></i><span class="sfkdml"> 顺风快递</span></li>
                      <li class=""><i class="iconfont icon-liwuhezi"></i><span>试衣盒子</span></li>
                  </ul>
              </li>
          </ul>
      </div>
      <!--<div class="contboxw">
          <p class="biaoq"><strong>￥300</strong><span>销售标签</span></p>
          <span class="tlthrough">￥630</span>
          <p><strong>LA por</strong>拼接蕾丝印花内衣</p>
          <div>LA PERLA 是一场梦 一个贵族梦 一个女人 啊内容填充一个贵族梦 一个女人 啊内容填充一个贵族梦 一个女人 啊内容填充一个贵族梦 一个女人 啊内容填充一个贵族梦 一个女人 啊内容填充一个贵族梦 一个女人 啊内容填充</div>
      </div> -->
      <ul class="towmd contpai">
          <li class="w16xd"><a ><img src="../../common/img/brandslogo.png"  /></a></li>
          <li class="w60xd">
              <strong>Myla</strong>
              <p>contf</p>
          </li>
          <li class="w30 tar">
             <span>进入品牌</span>
            <i class="iconfont icon-iconfontyoujiantou"></i>
          </li>
      </ul>
      <div class="boxdf shop">
          <ul class="towmd cxiao">
              <li class=" "><strong>规格选择</strong></li>
              <li class="mright">
                 <i class="iconfont icon-iconfontyoujiantou"></i>
              </li>
              <li class="mright">
                  已选黑色、79B
              </li>
          </ul>
      </div>
      <div class="boxdf">
          <ul class="towmd cxiao">
              <li class=" "><strong>情侣惊喜</strong></li>
              <li class="mright">
                 <i class="iconfont icon-iconfontyoujiantou"></i>
              </li>
              <li class="mright">
                  不知道他的内衣尺码也能送她内衣
              </li>
          </ul>
      </div>
      <div class="boxdf nomb">
          <ul class="towmd cxiao"><!-- comment -->
              <li class=" "><router-link to="/comment"><strong>用户评价</strong></router-link> </li>
              <li class="mright">
                 <router-link to="/comment"><i class="iconfont icon-iconfontyoujiantou"></i></router-link>
              </li>
              <li class="mright">
                 <router-link to="/comment"> 234235人评价</router-link>
              </li>
          </ul>
      </div>
      <div class="boxdf2">
          <p class="contfip">w***ry</p>
          <p class="contfip">刚在这里买了个内衣，高端大气上档次</p>
          <p class="contfigh">wetrertyery&nbsp;黑色&nbsp;70B</p>
      </div>
      <div class="boxdf3">
          <h5><span>上拉查看图文详情</span></h5>
      </div>
      <ul class="towmd bgf navul">
          <li class="w33nv now">详情
            <b></b>
          </li>
          <li class="w33nv">参数<b></b></li>
          <li class="w33nv">售后<b></b></li>
      </ul>
      <div class="boxxqing">
          <div>
                <video src="" controls="controls">
                您的浏览器不支持 video 标签。
                </video>
          </div>
          <div class="picxq">
                <img src="" width="" height="200" />
          </div>
          <div class="mdxq"><!-- contbox -->
              <ul class="towmd titlexq">
                <li>规格参数</li>
                <li class="mright"></li>
              </ul>
              <ul class="towmd introd">
                <li class=""><span>商品信息</span></li>
              </ul>
              <p v-for="site in attrlist">attr_name<span v-for="obj in site.attr_values">attr_value</span> </p>
          </div>
          <div class="mdxq"><!-- contbox -->
              <ul class="towmd titlexq">
                <li>售后／运费</li>
                <li class="mright"></li>
              </ul>
              <ul class="towmd introd">
                <li class=""><span>商品信息</span></li>
              </ul>
              <p>dsgfhdgfj</p>
              <p>dsgfhdgfj</p>
              <p>dsgfhdgfj</p>
              <p>dsgfhdgfj</p>
          </div>
          <div class="mdxq"><!-- contbox -->
              <ul class="towmd titlexq">
                <li>服务亮点</li>
                <li class="mright"></li>
              </ul>
              <ul class="towmd introd">
                <li class=""><span>商品信息</span></li>
              </ul>
              <p>dsgfhdgfj</p>
              <p>dsgfhdgfj</p>
              <p>dsgfhdgfj</p>
              <p>dsgfhdgfj</p>
          </div>
      </div>
      <div class="">
          <div class="boxhg" >
              <h5>相关推荐</h5>
              <p>RELATED RECOMMEND</p>
          </div>
          <ul class="towmd contli nomt">
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
              <router-link to="/detail">
                <span class="zpic"><img src="https://cdn.mielseno.com/view/photo/goods/20170929/f929a9ecdf35c771385699d20649e124-325.jpg" ></span>
                <p>cont cont</p>
                <p>cont cont</p>
                <p><strong>￥300</strong></p></router-link>
                <ol class="towmd scli">
                  <li class=""> </li>
                  <li class="mright"><i class="iconfont icon-xin"></i></li>
                </ol>
              </div>
            </li>
        </ul>
      </div>
      <div class="nav-list">
         <router-link to="" class="w20">
            <i class="iconfont icon-xiaoxi"></i>
            <span>客服</span>
         </router-link> 
         <router-link to="" class="w20">
            <i class="iconfont icon-gouwuchekong"></i>
            <span>购物车</span>
        </router-link> 
         <router-link to="" class="w30">
            <span class="shop">加入购物车</span>
        </router-link> 
        <router-link to="" class="w30 pay">
            <span>立即支付</span>
        </router-link> 
      </div>
      <div class="box">
        <!--
        <div class="demo">
          <a href="javascript:;" class="bounceIn">DEMO1</a>
          <a href="javascript:;" class="rollIn">DEMO2</a>
          <a href="javascript:;" class="bounceInDown">DEMO3</a>
          <a href="javascript:;" class="flipInX">DEMO4</a>
        </div>-->
        <div id="dialogBg" style="width: 1920px; height: 871px; display: none;"></div>
        <div id="dialog" class="animated claseDialogBtn bounceOutUp" style="display: none;top:0px;margin-top:40px;height:auto;">
          
          <form action="" method="post" id="editForm">
            <div class="dialogTop">
            <a href="javascript:;" class="claseDialogBtn"><i class="iconfont icon-guanbi1"></i></a>
          </div>

          </form>
        </div>
      </div>
      <!-- 点击筛选 滑动出来的遮罩 -->
      <div class="maskgoum">
          <div class="contboxw bg">
              <ul class="towmd">
                  <li class="porpic">
                    <img src="../../common/img/03.png" width="100" />
                  </li>
                  <li style="width:180px;position:relative;">
                    <span class="fork"><i class="iconfont icon-cha"></i></span>
                    <p class="biaoq mony"><strong>￥shop_price</strong><a class="tlthrough">￥market_price</a></p>
                    <p>库存 store_count件</p>
                    <ul class="towmd jians">
                        <li class="">已选：choose_state</li>
                        <li class="mright"><i class="iconfont icon-jia"></i></li>
                        <li class="mright">1</li>
                        <li class="mright"><i class="iconfont icon-jian"></i></li>
                    </ul>
                  </li>
              </ul>
            </div>
            <div class="contboxw2 bg">
                <ul class="towmd pri">
                    <li><i class="iconfont icon-checkBox" @click="trywear($event)" icur="0" ></i></li>
                    <li><h5>试穿服务</h5></li>
                    <li><span>你可以选择一件同款内衣的姐妹码</span></li>
                    <li><i class="iconfont icon-question"></i></li>
                </ul>
                <div class="jiansbox disno">
                    <ul class="towmd jians ">
                        <li><i class="iconfont icon-checkBox" @click="choose_try($event)" icur="0" ></i></li>
                        <li class="first_cm"><span class="biaojisp"></span></li>
                        <li class=""><i class="iconfont icon-jian"></i></li>
                        <li class="contghd"><span></span></li>
                        <li class=""><i class="iconfont icon-jia"></i></li>
                        <li class="last_cm"><span class="biaojisp2"> </span></li>
                        <li class="contghjk">￥try_price</li>
                    </ul>
                    <div class="boxdfcont">
                       <ul class="towmd">
                          <li v-for="obj in try_stock">try_stock</li>
                       </ul>
                    </div>
                </div>
            </div>
            <div class="attrlist bg">
                <div class="contboxw3" v-for="site in speclist">
                  <h6>{{ site.name }}</h6>
                  <ul class="towmd colorst"  >
                      <li class="x" v-for="(obj,index) in site.itemlist"  @click="jointog($event)"><a  >{{obj.item}}</a><b class="disno">{{ site.name }}:{{obj.item}}</b><i class="disno">{{index}}</i></li>
                  </ul>
                </div>
            </div>
            <div class="butqr">
                <router-link to="/generOrder" class="w20"> 确认</router-link>
            </div>
      </div>
      <div class="pof_mark">
          <div class="bgst"></div>
          <div class="cont_mark">
            
          </div>
      </div>
  </div>
</template>
<script>
import slider from './slider'// 引入slider组件

export default {
  name: 'bottom',
  data () {
    return {
        reviewId:this.$route.params.num,
        id:'',//
        goodInfo:[],//基本信息
        taglist:[],//标签
        stocklistc:[],//尺寸
        stocklist:[],//尺寸处理
        speclist:[],//颜色 尺寸
        attrlist:[],
        collect_zt:'',//收藏的提交状态
        store_count:'',//库存
        choose_state:'',//选择状态  选择的颜色 尺寸 
        choose_size:'',//选择的尺码
        try_stock:'',//试穿 尺码
        json:{a:'apple',b:'banana',c:'orange'},
        // 列表内容
        good_detail:[],//good_detail商品细节图
        brand:[],//品牌数据
        comment:[],// 评论数据
        comment_number:[],
        good_sn:'',
        attribute:[],//属性数据
        hidemixiu:false,
        relate_goods:'',//相关商品
        spec_data:'',//规格数据
        pages:[
          {
            //title: 'slide1',
            style:{
             background:'url(https://cdn.mielseno.com/view/photo/goods/20171018/692659b99ef693a4967a4a444ccdcd99-750.jpg)',
            }
          },
          {
           //title: 'slide2',
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
  methods:{//
     history:function(){
        history.go(-1);
     },
     getdata:function(){
       var url = this.HOST + '/home/good/goodDetail?=';
        this.$http.get(url, {
            params: {
              good_id: this.reviewId
            }
          })
          .then(function (res) {
            var data = res.bodyText;
              data = eval("(" + data+ ")"); 
            this.goodInfo = data.data.goodInfo;

           
          })
          .catch(function (response) {
            console.log(response);
          });

      },
      jointog:function(that){//尺码 颜色 点击 选取
        

      },
      collect:function(){
          var url = this.HOST + '/home/Collect/collect';
          this.$http.get(url, {
            params: {
              category_id:1,
              content_id:this.reviewId,
              status:this.collect_zt
            }
          })
          .then(function (res) {
           

          })
          .catch(function (response) {
            console.log(response);
          });
      },
      trywear:function(that){// 试穿服务  pri
        
       
      },
      choose_try:function(that){// 
        
       
      
      }
     
  },
  created:function(){
      console.log('实例已经创建,msg变量还未渲染到模板');
      this.getdata();
  },
  mounted:function(){console.log('xx:msg变量渲染到模板')
  /*匹配 库存*/



  },
  components: {
        slider
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
.contboxw2 .pri i.icon-checkBox,.contboxw2 .pri i.icon-fuxuankuang2{
  font-size:18px;
  position:relative;
  top:2px;
}
.butqr{
  display:block;
  width:100%;

}
.jiansbox .jians{
  position:relative;
  z-index:8;
}
.boxdfcont {
  position:relative;
  z-index:0;
  font-size:12px;
  line-height:16px;
  left:20px;
  color:#94969B;
  top:-22px;
  width:180px;
  overflow:hidden;
}
.boxdfcont ul{
  width:1000%;
  position:relative;
  left:0px;
}
.boxdfcont li{
    width:57px;
    text-align:center;
}
.contboxw2 .jians i.icon-checkBox,.contboxw2 .jians i.icon-fuxuankuang2{
  font-size:18px;
  position:relative;
  top:0px;
  margin-right:6px;display:inline-block;
}
.butqr{
    background: #404245;
    color: #fff;
    border-top: 1px solid #404245;
    text-align:center;
    padding:10px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
    right:-100%;
}
.butqr a{
  color:#fff;
}
.disno{
  display:none;
}
.jians{
  width:100%;
  padding-top:3px;
}
.jians li{
  color:#55595F;
  font-size:12px;
}
.jians .mright{
  margin-left:6px;
}
.jians .icon-jia{
  background:#404245;
  color:#fff;
}
.contw li{
  position:relative;
}
.jians .icon-jian{
  background:#404245;
  color:#fff;
}
.fork{
  position:absolute;
  right:0;top:-4px;
}
.contboxw p.mony strong{
  color:#F34444;
}
.maskgoum{
   position:fixed;
   width:100%;bottom:0;
   right:-100%;
   max-height:500px;
   overflow-y: scroll;
  padding-top:80px;
   z-index:999999;
}
.bg{
   background:#fff;
}
.tar{
  text-align:right;
}
ul.nomt{
  margin-top:0;
}
.boxhg{
  text-align:center;
  background:#fff;
  padding-bottom:10px;
}
.boxhg h5{
  font-size:22px;
  font-weight:normal;
}
.boxhg p{
  font-size:12px;
}
.contghd{
  margin:0 12px;
  width:10px;
  height:12px;
}
.biaojisp{
  display:inline-block;
  border:1px solid #979797;
  font-size:12px;
  width:30px;
  height:16px;
  margin-right:10px;
}
.biaojisp2{
  display:inline-block;
  border:1px solid #979797;
  font-size:12px;
  width:30px;
  height:16px;
  margin-left:10px;
  margin-right:10px;
}
.jians .contghjk{
  font-size:15px;
  color:#F34444;
  margin-left:20px;
  position:relative;
  top:-2px;
}
.nav-list span:nth-child(1),.nav-list span:nth-child(2){
    display: block;
    font-size: 0.5rem;
}
/**/
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
      border-top: 1px solid #e3e5e8;
    border-bottom: 1px solid #e3e5e8;
  margin-top:10px;
}
.contpai li{
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
/**************************************/
html,body,.licontbox{
  background:#f5f4f9;
}
#editForm{
  
}
.titlexq{
  padding-top:20px;
}
.titlexq li{
  font-size:22px;
  color:#404245;
}
.titlexq .mright{
  width:20px;
  padding-top:12px;
  border-bottom:2px solid #404245;
}
.introd{
  border-left:2px solid #000;
  height:22px;margin-top:30px;
  margin-bottom:20px;
}
.introd li{
  display:inline-block;
  background:#000;
  color:#fff;height:22px;
  font-size:14px;
  padding:0 4px;
  margin-left:3px;
}
.mdxq{
   border-bottom: 1px solid #e3e5e8;
   padding-bottom:20px;
}
.mdxq p{
  font-size:13px;
  color:#8E8E8E;
  line-height:22px;
}
.picxq{
  margin-top:10px;
}
.picxq img{
  width:100%;
  height:200px;
}
.boxxqing{
  padding:10px;
  background:#fff;
}
.navul{
  border-bottom: 1px solid #e3e5e8;
}
.navul li{
  padding:5px 0;
}
.navul .now{
  font-size:22px;
  color:#404245;
  position:relative;
}
.navul b{
  display:none;
  width:40px;bottom:0px;
  left:50%;margin-left:-20px;
  position:absolute;
  border-bottom:2px solid #333;
}
.navul .now b{
  display:inline-block;
}
.bgf{
  background:#fff;
}
.contfip{
  color:#404245;
  font-size:12px;
  line-height:24px;
}
.contfigh{
  color:#94969B;
  font-size:12px;
  line-height:24px;
}
.service{
  background:#f9f9f9;
  margin-bottom:10px;
  margin-top: 10px;
  padding-top:8px;

}
.boxdf{
    border-top:1px solid #e3e5e8;
    border-bottom:1px solid #e3e5e8;
    margin-bottom:10px;
    margin-top: 10px;
    padding-left:10px;
    padding-right:10px;
    background:#fff;
}
div.nomb{
    margin-bottom:0;
}
.boxdf2{
    border-bottom:1px solid #e3e5e8;
    margin-bottom:10px;
    padding-left:10px;margin-top:0;
    padding-right:10px;
    background:#fff;
}
.boxdf3{
    border-bottom:1px solid #e3e5e8;
    padding-left:10px;
    color:#4E545D;
    padding-right:10px;
    position:relative;
    margin-bottom:30px;
    margin-top:30px;
}
.boxdf3 h5{
    position:absolute;
    width:100%;
    font-size:15px;
    text-align:center;
    left:0;top:-10px;
}
.boxdf3 h5 span{
  display:inline-block;
  background:#f9f9f9;
}
.cxiao{
  padding:10px 0 10px;
}
.cxiao .mright{
  color:#94969B;
  font-size:13px;
}
.cxiao strong{
  font-weight:normal;
}
.biaoti{
    width:12%;
    text-align:center;
    font-size:12px;
    color:#A2A6AD;
}
.contw{
    width:88%;
    font-size:10px;
}
.contw span{
    font-size:12px;
}
.contw li{
  margin-bottom:10px;
}
.sfkdml{
  margin-left:18px;
  margin-right:34px;
}
.icon-kuaidi{
    display:inline-block;
    margin-top:0px;
    position:absolute;
    font-size:18px;
}
.icon-liwuhezi{
    font-size:14px;
    margin-right:3px;
}
.icon-kefu{
    top:2px;
    position:relative;
}
.icon-ccgl-zhouzhuanxiang-4{
    top:2px;
    position:relative;
}
.icon-baozhang{
    top:1px;
    position:relative;
}
.newtext{
    display: inline-block;
    border: 1px solid #F35E5E;
    padding: 2px 4px;
    border-radius: 5px;
    font-size: 12px;
    color: #F35E5E;
}
.mr5{
  margin-right:5px;
}
.spname{
  padding-top:10px;
  width:82%;
  font-size:16px;
  line-height:20px;
  height:38px;
  overflow:hidden;
}
.spname h5{
  font-size:18px;
}
.splogo{
  width:18%;
}
.splogo a{
  display:block;
  padding-top:8px;
  text-align:center;
}
.splogo a img{
  display:inline-block;
  width:90%;
}
div.conboxzh{
  padding:10px;
  background:#fff;
}
div.conboxzh p{
    color: #636363;
    font-size: 14px;
}
div.conboxzh p.lineg{
    line-height:24px;
    font-size:12px;
}
div.conboxzh p strong{
    font-size:18px;
    color:#F34444;
    font-weight:normal;
}
.dialogTop{
  position:relative;
  height:0px;
  padding:0;
}
.dialogTop a{
  display:inline-block;
  width:18px;
  height:18px;
  position:absolute;
  right:-20px;
  top:-11px;
  line-height:15px;
  font-size:20px;
  border-radius:50%;
  background:#fff;
}
.porpic{
  position:relative;
  top:-30px;
  margin-right:10px;
}
.contboxw h6{
  font-weight:bold;
  color:#111;
  font-size:15px;
}
.colorst{
  padding-top:10px;
}
.colorst a{
  border:1px solid #ccc;
  display:inline-block;
  padding:2px 10px;
  border-radius:12px;
  font-size:13px;
  margin-right:10px;
}
.colorst .now a{
  color:#fff;
  background:#000;
}
body,html,.hello{
  background:#eee;
}
.licontbox{
  padding-bottom:50px;
}
.nav-list .w30{
  width:30%;
  color:#fff;
  background:#F35E5E;
  line-height:34px;
}
.w20{
  width:20%;
}
.nav-list .pay{
  background:#333;
}
.nav-list{
    position: fixed;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    z-index: 3;
    border-top:1px solid #eee;
    text-align: center;
    background-color: #fff;
    bottom: 0;
    padding-top: 0;
}
.nav-list span {
    display: block;
    font-size: 0.9rem;
}
.nav-list a{
  display:inline-block;
  padding-top:0;
  text-decoration:none;
  color:#333;
  padding-top:6px;
}
.nav-list i {
    display: inline-block;
    height: 1rem;
}
.yunf{
  text-align:center;
  font-size:13px;
}
.contsm{
  text-align:center;
  font-size:12px;
  color:#909090;
  line-height:20px;
}.contsm h5{
    font-size:14px;
}
.boxcontpic{

}
.boxcontpic p{
  font-size:14px;
  text-align:center;
}
.boxcontpic div{
  font-size:12px;
  color:#909090;
  padding:10px;
  text-align:center;
}
.w33nv{
  width:33%;
  text-align:center;
  line-height:30px;
  font-size:14px;
  height:30px;
}
.video{
  border:1px solid #cdcdcd;
  margin-bottom:10px;
  height:200px;
}
.butdiv{
  border:1px solid #cdcdcd;
  padding:10px 0 8px;
  text-align:center;
  margin-top:20px;
  color:#909090;
  font-size:13px;
}
.reviewcont{
  color:#909090;
  font-size:12px;
}
.reviewcont li{
  margin-right:12px;
}
.contboxw .cor6{
  color:#636363;
} 
.lh28{
  line-height:36px;
}
.review{
  border-bottom:1px solid #cdcdcd;
}
.guig{
  border:1px solid #cdcdcd;
  padding:10px 0 8px;
  border-top:none;
  margin-bottom:20px;
}
.guig strong{
  display:inline-block;
  text-indent:14px;
}
.contpai{
    font-size:12px;
    background:#fff;
  padding:6px 0 8px;
}
.contpai a{
  display:block;
  text-align:center;
}
.contpai a img{
  width:90%;
}
.contpai strong{
    font-size:16px;
    color:#333;
}
.contpai .w20{
  padding-top:10px;
}
.w16xd{
  width:16%;
  text-align:center;
}
.w60xd{
  width:50%;
  color:#909090;
}
.biqoaianbox{
  border:1px solid #cdcdcd;
  padding:6px 0 8px;
  border-top:none;
}
.biqoaianbox strong{
  color:#909090;
}
.w30{
  width:30%;
}
.w20{
  width:20%;
  text-align:center;
}
.w80co{
  width:80%;
  font-size:13px;
  color:#636363;
}
.w80co span{
  display:inline-block;
  width:30%;
}/**/
.licontbox{
  top:-20px;
}
.porim,.por{
  position:relative;
}
.porim{
  background:#f2f2f2;
}
.porim img{
  width:100%;
}
.poac{
  position:absolute;
  top:0px;z-index:99;
  width:90%;
  padding-left:5%;
  padding-top:10px;
  font-size:12px;
}
.poac .mright{
  margin-left:9px;
}
.poac .icon-fenxiang{
  color: #999;
}
.poac .icon-xing{
  color:#F34444;
}
.poac .icon-shangyiye{
  color:#686868;
}
.poa2con{
  position:absolute;
  text-align:center;
  bottom:50px;width:100%;
}
.poa2con input{
    display:inline-block;
}/**/
.contboxw{
  border-top:1px solid #cdcdcd;
  border-bottom:1px solid #cdcdcd;
  padding:10px 10px 0px;
}
.attrlist{
  padding-bottom:60px;
}
.contboxw3{
  border-bottom:1px solid #cdcdcd;
  padding:10px 0px 10px 20px;
}
.contboxw3 h6{
  font-size:13px;
  color:#A9A9A9;
}
.contboxw2{
  padding:10px 10px 10px;
  border-bottom:1px solid #cdcdcd;
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
.tlthrough{
  text-decoration:line-through;
  color:#909090;
  font-size:12px;display:inline-block;
  margin-bottom:10px;
}
a.tlthrough{
 margin-bottom:0
}
.contboxw div{
  color:#909090;
  font-size:12px;
  margin-top:5px;
}
.contboxw p{
  color:#636363;
  font-size:14px;
}
.contboxw p strong{
  color:#636363;
  display:inline-block;
  margin-right:6px;
}
.contboxw .biaoq strong{
  font-size:16px;
  color:#333;
}
.biaoq span{
  font-size:12px;
  border:1px solid #F34444;
  padding:2px 4px;color:#F34444;
  display:inline-block;
  margin-right:8px;
  line-height:16px;
  margin-bottom:8px;
}
</style>
