<template>
  <div id="app">
    <app-header></app-header>
    <h1>{{title}}</h1>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
// 行为，处理逻辑
// 局部注册组件
import Users from "./components/Users"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: "app",
  data() {
    return {
      title: "这是我的第一个vue脚手架项目！"
    };
  },
  components: {
    // 起名字不能跟系统标签冲突
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  }
};
</script>

<style scoped>
/* scoped标明样式的作用域 */
h1 {
  color: purple;
}
</style>
