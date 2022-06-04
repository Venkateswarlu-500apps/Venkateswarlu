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
            arr:[{name:'Venky'},{name:'Krishna'},{name:'Sai'},{ name:'Mahesh'}]
        }
    },
    methods:{
        fun(){
            var value=this.arr.find((row)=>{
                console.log(row.name);
                return this.row.includes("K");
            });
            console.log(value);
        },
    }
}
</script>
