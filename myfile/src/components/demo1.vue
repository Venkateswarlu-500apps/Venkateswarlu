<template>
    <div>
        <h1>Hi Hello</h1>
        <button @click="call()">Click</button>
    </div>
</template>
<script>
export default {
  name:'ValuE',
data(){
  return{
    a:[1,2,3,4,5,6,8,9],
  }
},
methods:{
  call(){
    console.log(this.a[1]);
  }
}
}

</script>
