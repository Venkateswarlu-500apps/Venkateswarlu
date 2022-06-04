<template>
  <div>
    <h3>fetch api</h3>
    <b-table striped hover :items=user :fields="fields"></b-table>

    <!-- <button @click="getData()">click</button> -->
  </div>
</template>
<script>
import userData from '../21-04-2022/user.json'
export default {
  name: "VenkY",
  data() {
    return {
      user:userData,
      // value: "",
      // items: [],
      // posts: " ",
      fields: ["name", "email"],
    };
  },
  // methods: {
  //   async getData() {
  //     let response = await fetch(
  //       "http://www.json-generator.com/api/json/get/bSldINskRK=" + this.value
  //     );
  //     this.posts = await response.json();
  //   },
  // },
  // created() {
  //   this.getData();
  // },
};
</script>


