<template>
  <div>
      <h1>Child to Parent Component using Emit Event</h1>
    <button @click="fun()">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "EmiTchild",

  methods: {
    fun() {
      this.$emit("Clickme");
    },
  },
};
</script>