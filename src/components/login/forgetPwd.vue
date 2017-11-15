<template>
  <div class="logo_container">
    <div class="header-wrapper">
        <p class="back" @click="history()"></p>
        <p class="header-title">账号安全验证</p>
    </div><!-- to="/screen"  -->
      <div class="error_msg" style="display:none">{{error_msg}}</div>
    <div class="login_wrapper1">
      <div class="mobile_wrapper1">
        <i></i>
        <input type="text" placeholder="输入手机号" v-model='mobile' v-on:blur='checkPhone'>
      </div>
      <div class="imgcode_wrapper1">
          <i></i>
          <input  placeholder="输入图形验证码" type='text' v-model="captcha" />
          <span class='img-code' @click='changeImg'><img :src='igmSrc' alt="" width='70' height="30"/></span>
          <span class='refresh' @click='changeImg'></span>
      </div>
    </div>
      <div class="login-btn1" @click='checkImgcode'>确定</div>
    <v-dialog v-show="showDialog" :dialog-option="dialogOption" ref="dialog"></v-dialog>
  </div>

</template>
<script>
  import detectPrefixes from './../../common/js/jquery-1.7.2.min.js'
  import dialog from "../../publick/dialog.vue";
  document.title='NICE IN';
  export default {
     name: 'bottom',
     data () {
        return {
            captcha:'',
            mobile:'',
            igmSrc:this.HOST+'/home/Captcha/index',
            error_msg:'',
            showDialog: false,
            dialogOption: {
              text: '',
              confirmButtonText: '确定'
            }
        }
      },
      mounted:function(){
        $(".nav-container").hide();
       
      },
      methods: {
        history:function(){
            history.go(-1);
        },
        changeImg(){
          $('.img-code img').attr("src",this.HOST+'/home/Captcha/index?rdn='+Math.random())
        },
        checkPhone(){
            let reg =/^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/
            let isMobile = reg.test(this.mobile)
            if(!isMobile || this.mobile==''){
                this.error_msg ='请输入正确手机号'
                $('.error_msg').show()
            }else{
                $('.error_msg').hide()
                window.localStorage.setItem('mobile',this.mobile)
                console.log(window.localStorage.getItem('mobile'))
            }
        },
        checkImgcode(){
          let data ={captcha:this.captcha}
          if(this.captcha.length==4){
             var url = this.HOST + '/home/Captcha/captchaCheck'
                this.$http.get(url, {
                    params: {
                      captcha: this.captcha
                    }
                  })
                  .then(function (res) {
                    console.log(res)
                    if(res.body.code==200){
                      this.getPhonecode()
                      this.$router.push({ path: 'checkCode' }) 
                    }
                    else{
                      let me = this;
                        me.showDialog = true;
                        me.dialogOption.text ='请输入正确的图片验证码'
                        me.$refs.dialog.confirm().then(() => {
                          me.showDialog = false;
                        }).catch(() => {
                          me.showDialog = false;
                        })
                    }
                  })
                  .catch(function (response) {
                    console.log(response);
                  });

          }
        },

        getPhonecode(){
          console.log(this.mobile)
            var url = this.HOST +'/service/Sms/sendMsg'
              this.$http.get(url, {
                  params: {
                    mobile: this.mobile
                  }
                })
                .then(function (res) {
                    if(res.body.code==200){
                     }
                })
                .catch(function (response) {
                  console.log(response);
                });
        },
      },
      components: {
          'v-dialog':dialog
          
      }
  }
</script>
<style >
  .logo_container1{height: 100vh;-webkit-text-size-adjust: none;    background: #fff;}
  .header-wrapper{padding:17px 0 13px 0;display: flex;justify-content: center;color:#404245;position: relative;
    border-bottom:1px solid  #E3E5E8;}
  .header-wrapper .back{width:9px;height: 16px;background: url(./../../common/img/back.png) no-repeat;
    background-size: 100% 100%;position: absolute;left: 18px;bottom:14px;}
  .login_wrapper1{padding: 0 0 0 30px;border-bottom:1px solid #D7DADE;}
  .error_msg{font-size: 14px;margin-bottom:5px;text-align: center;background: #FFEEEE;color: #F34444;}
  .mobile_wrapper1,
  .imgcode_wrapper1{
    height: 60px;
    position: relative;
  }
  .mobile_wrapper1{ 
    border-bottom:1px solid #D7DADE;}
  .mobile_wrapper1 i,
  .imgcode_wrapper1 i{
      display: block;
      position: absolute;
      top: 23px;
  }
  .mobile_wrapper1 i{
    width:20px;
    height: 20.5px;
    background: url(./../../common/img/shouji.png) no-repeat;
    background-size: 100% 100%;
  }
  .imgcode_wrapper1 i{
    width:17px;
    height: 23.5px;
    background: url(./../../common/img/tuxing.png) no-repeat;
    background-size: 100% 100%;
  }
  .mobile_wrapper1 input,
  .imgcode_wrapper1 input{
    position: absolute;
    bottom: 15px;
    left: 30px;
    font-size: 16px;
    color: #C0C1C3;
  }
  .mobile_wrapper1 input::-webkit-input-placeholder,
  .imgcode_wrapper1 input::-webkit-input-placeholder { /* WebKit browsers */
    color: #C0C1C3;
  }
  .mobile_wrapper1 input:-moz-placeholder,
  .imgcode_wrapper1 input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #C0C1C3;
  }
  .mobile_wrapper1 input::-moz-placeholder,
  .imgcode_wrapper1 input::-moz-placeholder{ /* Mozilla Firefox 19+ */
    color: #C0C1C3;
  }
  .mobile_wrapper1 input:-ms-input-placeholder,
  .imgcode_wrapper1 input:-ms-input-placeholder{ /* Internet Explorer 10+ */
    color: #C0C1C3;
  }
  .imgcode_wrapper1 span.img-code{
      display: block;
      width:70px;
      height: 30px;
      position: absolute;
      bottom: 12px;
      right:54.5px;
      line-height: 30px;
      background: #ccc;
  }
  .imgcode_wrapper1 span.refresh{
      display: block;
      width:12px;
      height: 12px;
      position: absolute;
      bottom: 21px;
      right:33px;
      background: url(./../../common/img/refresh.png) no-repeat;
      background-size: 100% 100%;
  }
  .login-btn1{
    height: 40px;
    margin: 188px 50px 0;
    text-align: center;
    line-height: 40px;
    background: #404245;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
  .login-btn1 a{color:#fff;}
</style>