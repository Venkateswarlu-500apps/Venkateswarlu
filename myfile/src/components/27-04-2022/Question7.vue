<template>
    <div>
        <form>
            <button type="submit" @click="getdata()">Click</button>
        </form>
    </div>
</template>
<script>
export default{
    name:'VenkY',
    data(){
        return{
            res:" "

        }
    },
    methods:{
        async getdata(){
           let response=await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
           this.res=await response.json();
        }
    }
}
</script>
