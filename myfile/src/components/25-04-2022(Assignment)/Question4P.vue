<template>
  <div>
    <child :msg="message" :name="name"/>
  </div>
</template>

<script>
import Child from './Question4C.vue'
export default {
  name: "PropsParent",
  components: {
    Child,
    },
  data() {
    return {
      message: "Hello",
      name: "Venkatesh"
    };
  },
};
</script>