<template>
  <div>
    <h5>Question8:Displaying the Colors in the Following Way</h5>
    <button @click="fun()">Click</button><br /><br />
    {{ res }}
  </div>
</template>

<script>
export default {
  name: "VenkY",
  data() {
    return {
      color: ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],
      res: " ",
    };
  },
  methods: {
    fun() {
      function Format(n) {
        var o = ["th", "st", "nd", "rd"],
          x = n % 100;
        return x + (o[(x - 20) % 10] || o[x] || o[0]);
      }
      for (this.n = 0; this.n < this.color.length; this.n++) {
        var format = this.n + 1;
        this.res = Format(format) + " choice is " + this.color[this.n] + ".";
        return this.res;
      }
    }
  }
}
</script>