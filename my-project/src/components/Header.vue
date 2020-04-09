<template>
  <header v-on:click = "change">
      <h1>{{title1}}{{title}}</h1>
  </header>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  props: { 
    title:{
      type: String
    }
     },
  data () {
    return {
        title1:"Vue.js Demo"
    }
  },
  methods:{
    change:function (){
      // this.title = "change"
      this.$emit("titlechanged","子向父组件传值")//子组件这里注册一个方法
    }
  },
  beforeCreate:function () {
    alert("组件实例化之前执行的函数,beforeCreate");
  },
  created:function() {
    alert("组件实例化完毕，页面还未显示,created");
  },
  beforeMount:function(){
    alert("组件挂载前，页面仍未展示，但是虚拟demo已经配置完,beforeMount");
  },
  mounted:function(){
    alert("此方法执行后，页面显示,mounted");
  },
  beforeUpdate:function(){
    alert("组件更新前，页面仍未更新，但是虚拟dom已经配置,beforeUpdate");
  },
  updated:function(){
    alert("组件更新，此方法执行后，页面显示,updated");
  },
  beforeDestroy:function(){
    alert("组件销毁前,beforeDestroy");
  },
  destroyed:function(){
    alert("组件销毁前,destroyed");
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        background: lightgreen;
        padding: 10px;
    }
    h1{
        color: #222;
        text-align: center;
    }
</style>
