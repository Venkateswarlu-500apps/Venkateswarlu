<template>
  <div>
    <h1>Spread Operator</h1>
    <button @click="fun()">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "VenkY",
  data() {
    return {
      arr: [1, 2, 3, 4, 5,],
      arr2: [6,7, 8, 9,10],
      res: [],
    };
  },
  methods: {
    fun() {
      (this.res = [this.arr,this.arr2]), 
       document.write(this.res);
    },
  },
};
</script>