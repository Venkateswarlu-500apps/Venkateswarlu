<template>
  <div>
    <h1>Remove Duplicate Items from an Array</h1>
    <button @click="fun()">Click</button><br /><br />
    {{ res }}
  </div>
</template>

<script>
export default {
  name: "VenkY",
  data() {
    return {
      res: " ",
    };
  },
  methods: {
    fun() {
      var arr = ["BMW", "AUDI", "BMW", "VOLVO", "BENZ", "BMW"];
      function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
      }
      return (this.res = removeDuplicates(arr));
    },
  },
};
</script>

