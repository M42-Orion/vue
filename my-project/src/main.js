// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 控制容器是谁
  el: '#app',
  // 组件
  components: { App },
  // 模板
  template: '<App/>'
})

// index.html -> main.js --> App.vue