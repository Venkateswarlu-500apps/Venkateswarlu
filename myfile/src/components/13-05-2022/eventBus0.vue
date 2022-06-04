<template>
<div class="eventBus0">
    <h1>You have clicked {{labelText}} times</h1>
</div>
</template>

<script>

import EventBus from './EventBus';

export default {
    name:'eventBus0',
    data(){
        return{
            labelText:0,
        };
    },
    methods:{
        change_n(n){
            this.labelText = n;
        }
    },
    created(){
        EventBus.$on("change_n",this.change_n);
    },
    destroyed(){
        EventBus.$off("change_n",this.change_n);
    }
}
</script>
