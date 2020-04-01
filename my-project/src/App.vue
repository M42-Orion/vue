<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users></users>
  </div>
</template>

<script>
// 行为，处理逻辑
// 局部注册组件
import Users from "./components/Users";

export default {
  name: "app",
  data() {
    return {
      title: "这是我的第一个vue脚手架项目！"
    };
  },
  components: {
    // 起名字不能跟系统标签冲突
    Users
  }
};
</script>

<style scoped>
/* scoped标明样式的作用域 */
h1 {
  color: purple;
}
</style>
