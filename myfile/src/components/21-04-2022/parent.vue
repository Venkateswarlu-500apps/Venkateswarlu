<template>
  <div class="hello">
    <child :name="name" ref="ref1"></child>
    <button @click="click()">submit</button>
  </div>
</template>

<script>
import child from "./child.vue";
export default {
  name: "VenkY",
  components: { child },
  data() {
    return {
      name: "Venky",
    };
  },
  mounted: function () {},

  methods: {
    click() {
      this.$refs.ref1.fun();
    },
  },
};
</script>