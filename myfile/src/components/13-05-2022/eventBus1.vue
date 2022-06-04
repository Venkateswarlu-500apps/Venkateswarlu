<template>
<div class="eventBus1">
    <button @click="count">Click</button>
</div>
</template>

<script>

import EventBus from './EventBus';

export default {
    name:'eventBus1',
    data(){
        return{
            nclick:0,
        };
    },
    methods:{
        count(){
            this.nclick =1;
            EventBus.$emit("change_n",this.nclick);
        },
    },
}
</script>
