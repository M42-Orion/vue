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
      this.title = "change"
    }
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
