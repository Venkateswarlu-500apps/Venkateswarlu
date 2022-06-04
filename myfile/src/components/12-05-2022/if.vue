<template>
  <div>
      <input type="number"   placeholder="Type here">
      <button type="submit" @click="check()">Click</button>
  </div>
</template>

<script>
export default {
    name:'VenkY',
    data(){
        return{

        }
    },

    methods:{
        check(){
            let s3=typeof this.value
            console.log(s3)
        }
    }
}
</script>