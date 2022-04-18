<template>
  <div class="hello">
    <prop
      :message="message"
      :name="name"
      ref="ref"
      :number="number"
      :mantra="mantra"
    ></prop>
    <prop :message="message" :name="name" ref="refo" :Items="Items"></prop>
    hello world <button @click="click()">submit</button>
  </div>
</template>
<script>
import Prop from "@/components/18-04-2022/Props1.vue";
export default {
  name: "SaI",
  components: { Prop },
  data() {
    return {
      message: "identity",
      name: "venaktesh",
      number: "1177",
      Items: [
        { age: 23, firstname: "venaktesh", lastname: "tiruveedula" },
        { age: 24, firstname: "pawan", lastname: "kumar" },
      ],
      mantra: "mantra technologies",
    };
  },
  mounted: function () {},
  methods: {
    click() {
      this.$refs.ref.fun();
      this.$refs.refo.Items;
      console.log("i did it");
    },
  },
};
</script>