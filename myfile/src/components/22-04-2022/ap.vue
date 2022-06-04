<template>
    <div>
        <h1>Promise in Axios</h1>
        <button @click="fun()">click</button>
        <b-table striped hover :items="search" :fields="fields"></b-table>
    </div>
</template>
<script>

const axios=require('axios').default;
export default{
    name:'VenkY',
    data(){
        return{
            search:" ", 
            fields: ["name", "country", "web_pages"],
        }
    },
    // created(){
    // document.getElementById(this.search);
    // },
    methods:{
       async fun(){
              try{
              var res=await axios.get("http://universities.hipolabs.com/search?country=")
                  this.search=res.data;
              }
              catch(error){
               console.log("Something is Missing")
              }
          }
    }
}
</script>
