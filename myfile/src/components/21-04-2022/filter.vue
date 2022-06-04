<template>
    <div>
        <button @click="fun()">click</button><br><br>
        <button @click="fun1()">click</button>
    </div>
</template>
<script>

export default{
  
    name:'VenkY',
    data(){
        return{
        arr:[10,20,30,40,50,60],
        arr1:[{name:"Venky"},{name:"Krishna"},{name:"Sai"}]
        }
    },
    methods:{
        fun(){
            var values=this.arr.filter((row)=>{
                return row==1||row==5
            })
            console.log(values);
        },
        fun1()
        {
            var value=this.arr1.filter((row)=>{
                return row.name='Venky'
            })
            console.log(value[0].name)
        }
    }
}
</script>
