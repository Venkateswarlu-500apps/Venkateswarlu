<template>
 <div class="component1">
     <h1>You have clicked{{text}}times</h1><br><br>
     <p>name:{{name}}</p>
 </div>
</template>

<script>

import { bus } from '../../../bus';

export default {
    name:'ComponenT1',
    data(){
        return{
            text:" ",
            name:"Change the name"

        }
    },
    created(){
        bus.$on("change",this.fun1);
        bus.$on("change",this.fun2)
    },
    destroyed(){
        bus.$off("change",this.fun1);
        bus.$off("change",this.fun2)
    },
    methods:{
        fun1(n){
            this.text = n;
        },
        fun2(changename){
            this.name = changename.name;
        }
    }
}
</script>
