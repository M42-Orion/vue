Vue.component("greeting",{
    template:`
    <p>
        {{name}}:大家好，给大家介绍一下我的女朋友@杨杭
        <button v-on:click="changeName">改名</button>
    </p>
    `,
    data:function() {
        return {
            name:"刘家委",
        }
    },
    methods: {
        changeName:function () {
            this.name = "刘韬";
        }
    },
})

new Vue({
    el: "#vue-app-one",
    
});

new Vue({
    el: "#vue-app-two",
});

