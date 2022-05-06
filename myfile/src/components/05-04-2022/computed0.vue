<template>
    <div>
        <h1>Computed Properties</h1>
        <button v-on:click="a++">Add to A</button>&nbsp;
        <button v-on:click="b++">Add to B</button><br><br>
         <p>A-Value:{{a}}</p>
         <p>B-Value:{{b}}</p>
         <p>A-Age:{{AddtoA}}</p>
         <p>B-Age:{{AddtoB}}</p>
    </div>
</template>
<script>

export default {
    name:'VenkY',
    data(){
        return{
            a:0,
            b:0,
          age:20,
        }
    },
    computed:{
    AddtoA:function(){
          console.log('Hi');
          return this.age+this.a;
      },
      AddtoB(){
          console.log('Hello');
          return this.age+this.b
      }
    }
}
</script>
