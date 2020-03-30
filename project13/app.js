var one = new Vue({
    el: "#vue-app-one",
    data: {
        title:"app one",
    },
    methods: {
       
    },
    computed:{
        greet:function(){
            return "title two";
        }
    }
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title:"app two",
    },
    methods: {
        // 通过第二个对象修改第一个对象
        changetitleone:function(){
            one.title = "change one";
        }
    },
    computed:{
        greet:function(){
            return "title one";
        },
    }
});

