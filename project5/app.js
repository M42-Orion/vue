new Vue({
    el:"#vue-app",
    data:{
        age:30,
        X:0,
        Y:0,
    },
    methods: {
        add:function(n){
            this.age+=n;
        },
        subtract:function(n){
            this.age-=n;
        },
        updateXY:function(event) {
            // console.log(event);
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },
        alert:function(){
            alert("无法跳转");
        }
    },
});

