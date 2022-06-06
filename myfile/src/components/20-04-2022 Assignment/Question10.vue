<template>
  <div>
    <button @click="fun()">click</button>
  </div>
</template>

<script>
export default {
  name: "VenkY",
  data(){
  return{

  }
  },
  methods: {
    fun() {
      try {
        this.out = this.count * 5;

        document.write("printing count ", this.count);
      } catch {
        document.write("count ");
      }
    },
  },
}
</script>