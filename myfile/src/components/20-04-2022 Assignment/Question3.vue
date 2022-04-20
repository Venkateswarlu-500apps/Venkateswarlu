<template>
  <div>
    <h1>Set Time Out</h1>
    <p>{{ time }}</p>
    <button @click="fun()">click</button>
  </div>
</template>

<script>
export default {
  name: "VenkY",
  
  data() {
    return {
      time: "",
    };
  },

  methods: {
    fun() {
      setTimeout(() => {
        this.time = new Date();
      }, 5000);

      setInterval(() => {
        this.time = new Date();
      }, 6000);
    },
  },
};
</script>