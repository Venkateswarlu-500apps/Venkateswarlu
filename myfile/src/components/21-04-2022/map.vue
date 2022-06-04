<template>
    <div>
        <button @click="fun()">click</button>
    </div>
</template>
<script>

export default{
    name:'VenkY',
    data(){
        return{
            arr:[{name:"Venky"},{name:"Krishna"},{name:"Sai"}]
        }
    },
    methods:{
    fun(){
        var value=this.arr.map(j=>{return j.name})
        console.log(value)
    }
    }
}
</script>
