<template>
<div class="component2">
    <button @click="count()">Click</button>&nbsp;
    <button @click="changename()">Click</button>
</div>
</template>

<script>

import { bus } from "../../../bus";

export default {
    name:'ComponenT2',
    data(){
        return{
            count1:0
        }
    },
    methods:{
        count(){
            this.count1+=1;
        bus.$emit("change",this.count);
        },
        changename(){
            bus.$emit("change",{name:"Venkateswarlu"});
        }
    }
}
</script>
