<template>
  <div>
    <h3>This is Props</h3>

    <p>{{ name }}</p>

    <p>{{ number }}</p>

    <p>{{ email }}</p>

    <p> {{ items }}</p>

    <b-button @click="Child()">Click</b-button>
  </div>
</template>

<script>
export default {
  name: "PropsChild",

  props: {
    name: String,
    number: Number,
    email: String,
    items: Array,
  },
  data(){
    return{
      count:0
    }
  },
  methods: {
    Child() {
      console.log("This Prop Child");
    },
  },
};
</script>