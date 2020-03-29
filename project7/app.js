new Vue({
    el:"#vue-app",
    data:{
        name:"",
        age:""
    },
    methods: {
        logName:function(){
            // alert("正在输入名字");
            // console.log("正在输入名字");
            // console.log(this.$refs.name.values);
            this.name = this.$refs.name.value;
        },
        logAge:function(){
            // alert("正在输入名字");
            // console.log(this.$refs.age);
            this.age = this.$refs.age.value;
        }
    },
});

