<template>
  <div class=" ">
   
   
    <router-link to="/home">
      <i></i>
      <span>去首页</span>
    </router-link> 
       
  </div>
</template>
<script>
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
  mounted:function(e){console.log('已经挂载到模板上:msg变量渲染到模板')
    
    

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
a{
  display:block;
  text-align:center;
  margin-top:30px;
}
body,html,.hello{
  background:#eee;
}
h1, h2 {
  font-weight: normal;
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
}
.boxsx{
  width:50%;
}
</style>
