<template>
    <div>
        <h1>Watch</h1>
        <center>
        <b-card class="w-50">
        <b>Kilometers:</b>
        <input type="number" v-model="kilometers"/>&nbsp;
        <b>Meters:</b>
        <input type="number" v-model="meters"/>
        </b-card>
        </center>
    </div>
</template>
<script>

export default {
    name:'VenkY',
    data(){
        return{
            meters:0,
            kilometers:0,
        }
    },
    // methods:{
    //      function1(){
    //        this.value = this.kilometers ;
    //        this.value = this.meters*1000 ;
    //     }, 
    //     function2(){
    //         this.value = this.meters;
    //         this.value = this.kilometers/1000;
    //     }
    // },
    watch:{
        kilometers:function(value){
            this.kilometers = value;
            this.meters = value*1000;
        },
        meters:function(value){
            this.meters = value;
            this.kilometers = value/1000;
        }
    }
}
</script>
