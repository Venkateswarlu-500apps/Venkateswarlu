<template>
  <div>
    <h1>Filter</h1>
    <input type="search" @keyup="search()"/>
  </div>
</template>
<script>
export default{
  name:'VenkY',
  data(){
    return{
      arr:[{name:'agile'},{name:'crm'},{name:'mantra'},{name:'technologies'},{name:'500apps'},{name:'infinity'}]
    }
  },
  methods:{
    search(){
     var res=this.arr.filter((value)=>{
       document.getElementById("search()");
       document.getElementById(typeof(value));
       return value=="gi"||value=="i";
     });
     document.getElementById(res);
    }
  }
}
</script>
