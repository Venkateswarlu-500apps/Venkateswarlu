<template>
  <div>
    <h1>Question6:Finding the Most Frequent Item of an Array</h1>
    <button @click="fun()">Click</button><br /><br />
    Most Frequent Item of an Array is:{{ res }}
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
      var a1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
      var a = 1;
      var b = 0;
      var item;
      for (var i = 0; i < a1.length; i++) {
        for (var j = i; j < a1.length; j++) {
          if (a1[i] == a1[j]) b++;
          if (a < b) {
            a = b;
            item = a1[i];
          }
        }
        b = 0;
      }
      return (this.res = item + " ( " + a + " times ) ");
    },
  },
};
</script>