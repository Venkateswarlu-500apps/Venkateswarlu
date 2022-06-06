<template>
    <div>
        <h1>University-Data</h1>
        <form>
        Search Country:<input type="text" placeholder="Enter Country Name">
        <button @click="UData()">Click</button>
        </form>
    </div>
</template>
<script>
export default{
    name:'VenkY',
    data(){
       return{
           res:"",
       };
    },
    methods:{
        async UData(){
        let output = await fetch( "http://universities.hipolabs.com/search?country=country-list="+this.text );
 let res=await output.json();
        console.log(res);
        }
        },
    }
</script>
