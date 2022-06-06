<template>
<div>
<h1>Vue Cocept</h1>
<button @click="fun()">Click Me</button>
</div>
</template>
<script>
export default {
  name:'VuE',
data(){
  return{
    array :[5,6,8,9],
  }
},
methods:{
  fun(){
    console.log(this.array);
  }
}
}
</script>
