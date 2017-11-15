<template>
  <div class="logo_container1">
    <div class="header-wrapper">
        <p class="back" @click="history()"></p>
        <p class="header-title">账号安全验证</p>
    </div><!-- to="/screen"  -->
    <div class="login_wrapper2">
      <div class="mobile_wrapper2">
        <p>短信已发送至：<span>{{mobile.slice(0,4)}}****{{mobile.slice(-3)}}</span></p>
      </div>
      <div class="pwd_wrapper2">
        <i></i>
        <input type="text" placeholder="输入短信验证码" class="password" v-model='code'>
        <span v-if="sendMsgDisabled" class="time-span">{{time+'秒后获取'}}</span>
        <span v-if="!sendMsgDisabled" @click='getPhonecode'>重新发送</span>
      </div>
      <div class="pwd_wrapper">
        <i></i>
        <input type="password" placeholder="输入新密码" class="password1" v-model = 'password'>
        <span :class="{'active':is_show1,'':!is_show1}" @click='isShowpassword1'></span>
      </div>
      <div class="pwd_wrapper">
        <i></i>
        <input type="password" placeholder="再次输入新密码" class="password" v-model='password2'>
        <span :class="{'active':is_show,'':!is_show}" @click='isShowpassword'></span>
      </div>
      <P style='font-size:12px;text-align:center;line-height:30px;'>*密码长度为8~16位，数字，字母，字符至少包含两种</P>
    </div>
      <div class="login-btn2" @click='login'>确定</div>
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
            mobile:window.localStorage.getItem('mobile'),
            time:60,
            sendMsgDisabled: true,
            code:'',
            is_show: false,
            is_show1: 0,
            password:'',
            password2:'',
            showDialog: false,
            dialogOption: {
              text: '',
              confirmButtonText: '确定'
            }
        }
      },
      mounted:function(){
        $(".nav-container").hide();
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
      methods: {
        history:function(){
            history.go(-1);
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
                          let me = this;
                          me.sendMsgDisabled = true;
                          let interval = window.setInterval(function() {
                           if ((me.time--) <= 0) {
                            me.time = 60;
                            me.sendMsgDisabled = false;
                            window.clearInterval(interval);
                           }
                          }, 1000);

                     }
                })
                .catch(function (response) {
                  console.log(response);
                });
        },
        login(){
          if(this.code == ''){
                let me = this;
                  me.showDialog = true;
                  me.dialogOption.text ='验证码不能为空'
                  me.$refs.dialog.confirm().then(() => {
                    me.showDialog = false;
                  }).catch(() => {
                    me.showDialog = false;
                  })
            }
            
            else if(this.password=='' || this.password2=='' ){
                let me = this;
                  me.showDialog = true;
                  me.dialogOption.text ='请输入密码'
                  me.$refs.dialog.confirm().then(() => {
                    me.showDialog = false;
                  }).catch(() => {
                    me.showDialog = false;
                  })
            }

            else if(this.password!=this.password2){
                let me = this;
                  me.showDialog = true;
                  me.dialogOption.text ='两次密码输入不一致'
                  me.$refs.dialog.confirm().then(() => {
                    me.showDialog = false;
                  }).catch(() => {
                    me.showDialog = false;
                  })
            }else{
              var url = this.HOST +'/home/User/findPwdByMobile'
              this.$http.get(url, {
                  params: {
                    mobile: this.mobile,
                    code:this.code,
                    password:this.password,
                    password2:this.password2,

                  }
                })
                .then(function (res) {
                    if(res.body.code==200){
                      let me = this;
                        me.showDialog = true;
                        me.dialogOption.text ='密码设置成功'
                        me.$refs.dialog.confirm().then(() => {
                          me.showDialog = false;
                          this.$router.push({ path: 'home' }) 
                        }).catch(() => {
                          me.showDialog = false;
                        })
                      window.localStorage.removeItem('mobile')
                     }else{
                      let me = this;
                        me.showDialog = true;
                        me.dialogOption.text =res.body.msg
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
        isShowpassword() {
          this.is_show= !this.is_show
             if(this.is_show==true){
                 $('.password').prop('type','text');
             }else{
                 $('.password').prop('type','password');
             };
        },
        isShowpassword1() {
          this.is_show1= !this.is_show1
             if(this.is_show1==1){
                 $('.password1').prop('type','text');
             }else{
                 $('.password1').prop('type','password');
             };
        },
      },
      components: {
          
          'v-dialog':dialog
      }
  }
</script>
<style >
  .logo_container1{height: 100vh;-webkit-text-size-adjust: none;color:#404245;    background: #fff;}
  .header-wrapper{padding:17px 0 13px 0;display: flex;justify-content: center;position: relative;
    border-bottom:1px solid  #E3E5E8;}
  .header-wrapper .back{width:9px;height: 16px;background: url(./../../common/img/back.png) no-repeat;
    background-size: 100% 100%;position: absolute;left:18px;bottom:14px;}
 
  .mobile_wrapper2,
  .pwd_wrapper2{
    height: 60px;
    position: relative;
    border-bottom:1px solid #D7DADE;
  }
  .mobile_wrapper2 p{position: absolute;left: 27px;font-size: 14px;top:21px;}
  .pwd_wrapper2 i{
      display: block;
      width:20px;
      height: 20.5px;
      position: absolute;
      top: 20px;
      left:30px;
  }
  .pwd_wrapper2 i{
    background: url(./../../common/img/code.png) no-repeat;
    background-size: 100% 100%;
  }
  .pwd_wrapper2 input{
    position: absolute;
    bottom: 17px;
    left: 60px;
    font-size: 16px;
    color: #C0C1C3;
  }
  .pwd_wrapper2 input::-webkit-input-placeholder{ /* WebKit browsers */
    color: #C0C1C3;
  }
  .pwd_wrapper2 input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #C0C1C3;
  }
  .pwd_wrapper2 input::-moz-placeholder{ /* Mozilla Firefox 19+ */
    color: #C0C1C3;
  }
  .pwd_wrapper2 input:-ms-input-placeholder{ /* Internet Explorer 10+ */
    color: #C0C1C3;
  }
  .pwd_wrapper2 span{
      display: block;
      width:80px;
      height: 28px;
      position: absolute;
      bottom: 14px;
      right:45px;
      border: 1px solid #404245;
      color: #404245;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
  }
  .pwd_wrapper2 .time-span{
    border: 1px solid #C0C1C2;
    color:#C0C1C2;
  }
 .pwd_wrapper{
    margin:0;
    height: 60px;
    position: relative;
    border-bottom:1px solid #D7DADE;
  }
  .pwd_wrapper i{
      display: block;
      width:17px;
      height: 23.5px;
      position: absolute;
      bottom: 16px;
      left:30px;
  }
  .pwd_wrapper i{
    background: url(./../../common/img/tuxing.png) no-repeat;
    background-size: 100% 100%;
  }
  .pwd_wrapper input{
    position: absolute;
    bottom: 14px;
    left: 60px;
    font-size: 16px;
    color: #C0C1C3;
  }
  .pwd_wrapper input::-webkit-input-placeholder { /* WebKit browsers */
    color: #C0C1C3;
  }
  .pwd_wrapper input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #C0C1C3;
  }
  .pwd_wrapper input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #C0C1C3;
  }
  .pwd_wrapper input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #C0C1C3;
  }
  .pwd_wrapper span{
      display: block;
      width:20px;
      height: 12px;
      position: absolute;
      top: 25px;
      right:19px;
      background: url(./../../common/img/hidden.png) no-repeat;
      background-size: 100% 100%;

  }
  .pwd_wrapper span.active{
      background: url(./../../common/img/block.png) no-repeat;
      background-size: 100% 100%;
  }
  .login-btn2{
    height: 40px;
    margin: 68px 30px 0;
    text-align: center;
    line-height: 40px;
    background: #404245;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
  .login-btn2 a{color:#fff;}
</style>