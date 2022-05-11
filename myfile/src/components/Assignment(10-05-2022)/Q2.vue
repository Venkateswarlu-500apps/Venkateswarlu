<template>
    <div>
        <h1>Watch</h1>
        <center>
        <b-card class="w-50">
        <b>TextBox:1</b>
        <input type="text" v-model="tb1"/>&nbsp;
        <b>TextBox:2</b>
        <input type="'text' required readonly value='watch'" v-model="tb2"/>
        </b-card>
        </center>
    </div>
</template>
<script>

export default {
    name:'VenkY',
    data(){
        return{
            tb1:' ',
            tb2:' '
        }
    },
    watch:{
        tb1:function(value){
            this.tb1 = value;
            this.tb2 = value+this.tb1;
        },
        tb2:function(value){
            this.tb2 = value;
            this.tb1 = value-this.tb2;
        }
    }
}
</script>
