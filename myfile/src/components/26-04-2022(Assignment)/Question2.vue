<template>
    <div>
        <h1>Multiplication and Division of Two Numbers</h1><br>
        1st Number:<input type="number" id="a" placeholder="Enter Your Number"/><br><br>
        2nd Number:<input type="number" id="b" placeholder="Enter Your Number"/><br><br>
        <button type="submit" value="Multiple" @click="Multiple()">Multiply</button>&nbsp;
        <button type="submit" value="Divison" @click="Divide()">Divide</button>
    </div>
</template>

<script>
export default{
    name:'VenkY',
    data(){
        return{

         }
    },
    methods:{
        Multiple(){
         let a=document.getElementById("a").value;
         let b=document.getElementById("b").value;
         document.write("The Result is:"+" "+a*b)
         
        },
        Divide(){
         let a=document.getElementById("a").value;
         let b=document.getElementById("b").value;
         document.write("The Result is:"+" "+a/b)
        }
    }
}
</script>
