<template>
  <div class="users">
    <h1>Hello users</h1>
    <ul>
      <li v-for="user in users" >
        <h2 v-on:click="user.show = !user.show">{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
    <button v-on:click = "deleteUser">删除</button>
  </div>
</template>
// 传值：strin number boolean
// 引用：array object

<script>
export default {
  name: "users",
  props:{
      users:{
          type:Array,
          required:true
      }
  },
  data() {
    return {
      
    };
  },
  methods: { 
    deleteUser:function (){
      this.users.pop();
    }
   }
};
</script>

<style scoped>
/* scoped标明样式的作用域 */
h1 {
  color: green;
}
.uesers{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
}
</style>
    
