<template>
  <div id="app">
    <app-header v-on:titlechanged="titlechanged($event)" v-bind:title="title"></app-header>/
    <!-- 父组件titlechanged($event)接收方法传递过来的值 -->
    <!-- <h1>{{title}}</h1> -->
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>

    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// 行为，处理逻辑
// 局部注册组件
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  data() {
    return {
      // title: "这是我的第一个vue脚手架项目！"
      users: [
        { name: "Henry", position: "web开发", show: false },
        { name: "Bucky", position: "web开发", show: false },
        { name: "Emily", position: "web开发", show: true }
      ],
      title: "传递的是一个值"
    };
  },
  methods: {
    titlechanged: function(title) {
      // 父组件利用传递过来的值对变量进行修改
      this.title = title;
    }
  },
  components: {
    // 起名字不能跟系统标签冲突
    users: Users,
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style scoped>
/* scoped标明样式的作用域 */
h1 {
  color: purple;
}
</style>
