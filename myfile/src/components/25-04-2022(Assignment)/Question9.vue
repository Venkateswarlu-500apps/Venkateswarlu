<template>
  <div>
    <h1>Spread Operator</h1>
    <button @click="fun()">Click Me</button>
    {{ans}}
  </div>
</template>

<script>
export default {
  name: "VenkY",

  data() {
    return {
      array1: [1, 2, 3, 4, 5, 6, 7],
      ans: "",
    };
  },

  methods: {
    fun() {
      this.ans = ['a',...this.array1];
      return this.ans;
    },
  },
};
</script>

