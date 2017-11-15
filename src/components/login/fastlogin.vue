<template>
  <div class="logo_container">
    <div class="login_top">
      <div class="logo"><img src="./../../common/img/LOGO.png" alt="" width='57.5' height="69"></div>
    </div>
    <div class="login_wrapper">
      <div class="error_msg" style="display:none">{{error_msg}}</div>
      <div class="mobile_wrapper">
        <i></i>
        <input type="text" placeholder="输入手机号" v-model="mobile" v-on:blur='checkPhone'>
      </div>
      <div class="imgcode_wrapper">
          <i></i>
          <input  placeholder="输入图形验证码" type='text' v-model="captcha" v-on:input='checkImgcode'/>
          <span class='img-code' @click='changeImg'><img :src='igmSrc' alt="" width='70' height="30"/></span>
          <span class='refresh' @click='changeImg'></span>
      </div>
      <div class="pwd_wrapper1" style="display:none">
        <i></i>
        <input type="text" placeholder="输入短信验证码" class="password" v-model="code">
        <span v-if="sendMsgDisabled" class="time-span">{{time+'秒后获取'}}</span>
        <span v-if="!sendMsgDisabled" @click='getPhonecode'>重新发送</span>
      </div>
      <div class="login-btn" @click='login'>登录</div>
      <div class="extra">
        <p><router-link to='/login'>切换密码登录</router-link></p>
        <p><router-link to='/forgetPwd'>忘记密码？</router-link></p>
      </div>
      <p class="tips">第三方登录</p>
      <div class="extra-login">
        <div class="vxlogo"><img src="./../../common/img/weixin.png" alt=""></div>
        <div>微信登录</div>
      </div>
    </div>
    <p class="explain">注册账号表示您同意并遵守Nice in <a href="">用户协议</a>和<a href="">隐私政策</a></p>
    
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
            mobile:'',
            code:'',
            igmSrc:this.HOST+'/home/Captcha/index',
            captcha:'',
            time:60,
            sendMsgDisabled: false,
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
      created(){
         
        
      },
      methods: {
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
                      $('.imgcode_wrapper').hide();
                      $('.pwd_wrapper1').show();
                       this.getPhonecode();
                    }else{
                      let me = this;
                        me.showDialog = true;
                        me.dialogOption.text ='请输入正确的图片验证码'
                        me.$refs.dialog.confirm().then(() => {
                          me.showDialog = false;
                          // this.$router.push({ path: 'home' }) 
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
           this.sendMessgae();
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
        sendMessgae(){
            let me = this;
            me.sendMsgDisabled = true;
            let interval = window.setInterval(function() {
             if ((me.time--) <= 0) {
              me.time = 60;
              me.sendMsgDisabled = false;
              window.clearInterval(interval);
             }
            }, 1000);
        },

        login(){

              var url = this.HOST +'/home/User/loginBycode'
              this.$http.get(url, {
                  params: {
                    mobile: this.mobile,
                    code:this.code
                  }
                })
                .then(function (res) {
                    if(res.body.code==200){
                      let me = this;
                        me.showDialog = true;
                        me.dialogOption.text ='登录成功'
                        me.$refs.dialog.confirm().then(() => {
                          me.showDialog = false;
                          this.$router.push({ path: 'home' }) 
                        }).catch(() => {
                          me.showDialog = false;
                        })
                      
                     }else{
                      let me = this;
                        me.showDialog = true;
                        me.dialogOption.text ='请输入正确的短信验证码'
                        me.$refs.dialog.confirm().then(() => {
                          me.showDialog = false;
                          // this.$router.push({ path: 'home' }) 
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
      components: {
          'v-dialog':dialog
      }
  }
</script>
<style >
  .logo_container{height: 100vh;-webkit-text-size-adjust: none;background: #fff;}
  .login_wrapper{padding: 0 40px;}
  .login_top{padding: 45px 0 65px;}
  .logo{text-align: center;}
  .error_msg{font-size: 14px;margin-bottom:5px;text-align: center;background: #FFEEEE;color: #F34444;}
  .mobile_wrapper,
  .pwd_wrapper1,
  .imgcode_wrapper{
    height: 30px;
    position: relative;
    border-bottom:1px solid #D7DADE;
  }
  .pwd_wrapper1,.imgcode_wrapper{ margin-top: 25px;}
  .mobile_wrapper i,
  .pwd_wrapper1 i,
  .imgcode_wrapper i{
      display: block;
      width:20px;
      height: 20.5px;
      position: absolute;
      top: 5px;
  }
  .mobile_wrapper i{
    background: url(./../../common/img/shouji.png) no-repeat;
    background-size: 100% 100%;
  }
  .pwd_wrapper1 i,
  .imgcode_wrapper i{
    background: url(./../../common/img/tuxing.png) no-repeat;
    background-size: 100% 100%;
  }
  .mobile_wrapper input,
  .pwd_wrapper1 input,
  .imgcode_wrapper input{
    height: 100%;
    width: 100%;
    text-indent: 2em;
    font-size: 16px;
    color: #C0C1C3;
  }
  .mobile_wrapper input::-webkit-input-placeholder,
  .pwd_wrapper1 input::-webkit-input-placeholder,
  .imgcode_wrapper input::-webkit-input-placeholder { /* WebKit browsers */
    color: #C0C1C3;
  }
  .mobile_wrapper input:-moz-placeholder,
  .pwd_wrapper1 input:-moz-placeholder,
  .imgcode_wrapper input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #C0C1C3;
  }
  .mobile_wrapper input::-moz-placeholder,
  .pwd_wrapper1 input::-moz-placeholder,
  .imgcode_wrapper input::-moz-placeholder{ /* Mozilla Firefox 19+ */
    color: #C0C1C3;
  }
  .mobile_wrapper input:-ms-input-placeholder,
  .pwd_wrapper1 input:-ms-input-placeholder,
  .imgcode_wrapper input:-ms-input-placeholder{ /* Internet Explorer 10+ */
    color: #C0C1C3;
  }
  .pwd_wrapper1 span{
      display: block;
      width:80px;
      height: 28px;
      position: absolute;
      bottom: 0px;
      right:0px;
      border: 1px solid #404245;
      color: #404245;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
  }
  .pwd_wrapper1 .time-span{
    border: 1px solid #C0C1C2;
    color:#C0C1C2;
  }

  .imgcode_wrapper span.img-code{
      display: block;
      width:70px;
      height: 30px;
      position: absolute;
      bottom: 6px;
      right:0px;
      line-height: 30px;
      background: #ccc;
  }
  .imgcode_wrapper span.refresh{
      display: block;
      width:12px;
      height: 12px;
      position: absolute;
      bottom: 15px;
      right:-20px;
      background: url(./../../common/img/refresh.png) no-repeat;
      background-size: 100% 100%;
  }
  .login-btn{
    /*height: 49px;*/
    margin-top: 25px;
    text-align: center;
    /*line-height: 49px;*/
    padding: 10px 0;
    background: #404245;
    border-radius: 2.5px;
    color: #fff;
    cursor: pointer;
  }
  .extra{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
  }
  .extra p:nth-child(2){text-decoration: underline;}
  .tips{text-align: center;font-size: 14px;color: #404245;margin-top: 40px;}
  .extra-login{width:50px;margin:20px auto 0;font-size: 11px;text-align: center;color: #5D6470;transform:scale(0.91);} 
  .vxlogo{height: 35px;width:35px;margin:0 auto 5px;}
  .vxlogo img{width:100%;height:100%;}
  .explain{font-size:10px;color: #7A7F87;text-align: center;margin-top: 10px; transform:scale(0.83)}
  .explain a{text-decoration:underline;font-size: 11px;color: #1C0000; transform:scale(0.91);}
  .modalback{
    /*wid*/
  }
</style>