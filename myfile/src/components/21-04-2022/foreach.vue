<template>
    <div>
        <h1>ForEach</h1>
        <button @click="fun()">click</button><br><br>
        <button @click="fun1()">click</button><br><br>
        <button @click="fun2()">click</button>
    </div>
</template>
<script>

export default{
    name:'VenkY',
    data(){
        return{
        arr:[10,20,30,40,50,60],
        arr1:["Venky","Mantra","Technologies"],
        arr2:[{name:"Venky"},{name:"Krishna"},{name:"Sai"}]
        }
    },
    methods:{
       fun(){
        this.arr.forEach((row)=>{
            console.log(row);
        })
       },
       fun1(){
        this.arr1.forEach((row1)=>{
            console.log(row1);
        })
       },
       fun2(){
        this.arr2.forEach((row2)=>{
            console.log(row2.name);
           })
       }
    }
}
</script>
