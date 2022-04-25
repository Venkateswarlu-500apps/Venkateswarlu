<template>
  <div>
    <h1>Parent and Child Component using Props</h1>
    Message:{{ msg }}<br>
    Name:{{ name }}
  </div>
</template>

<script>
export default {
  name: "VenkY",
  components:{},
  props: {
    msg: String,
    name: String,
  },
};
</script>