<template>
  <div class=" ">
    <div class="class-ui-title">
      <h3 >{{msgdrop}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      xx: '这个是 子组件 '
    }
  },
  props:['msgdrop']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.class-ui-title{
  background:#fff;
  text-align:center;
  padding:10px 0;
  font-size:14px;
}
.class-ui-title h3{
  display: inline-block;
  position: relative;
  height: 12px;
  line-height: 12px;
  font-size: 12px;
  vertical-align: middle;
  padding: 0 .92rem;
  color:#3a3a3a;
}
.class-ui-title h3:before {
  position: absolute;
  top: 5px;
  content: '';
  width: .72rem;
  height: 1px;
  background: #ccc;
  left: 0;
}
.class-ui-title h3:after{
  position: absolute;
  top: 5px;
  content: '';
  width: .72rem;
  height: 1px;
  background: #ccc;
  right: 0;
}
.class-ui-text .aui-col-xs-4 a img{
  width: 2.6rem;
  height: 2.6rem;
  margin:0 auto;
}
.class-ui-text .aui-col-xs-4 a p{
  text-align:center;
  color:#999;
  font-size:12px;
}
</style>
