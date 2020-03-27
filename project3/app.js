// 实例化vue对象
// 数据与方法
new Vue({
    el:"#vue-app",
    data:{
        name:"hello world",
        job:"debug",
        web:"https://m42-orion.github.io/index.html",
        website:"<a href='https://m42-orion.github.io/index.html'>博客</a>"
    },
    methods: {
        greet: function(){
            return 'hello world ' + this.job;
        },
        say:function(time) {
            return "good " + time + "!";
        }
    },
});


/*
el: Element需要获取的元素，一定是html中的根容器元素
data: 用于存储数据
methods:用于存储各种方法
data-binding:给属性绑定对应的值
*/