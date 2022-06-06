<template>
  <div>
    <h1>Axios using in promise</h1>
    {{ res }}

    <button @click="fun()">ClickMe</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VenkY",
  data() {
    return {
      res: "",
    };
  },
  methods: {
    fun() {
      new Promise((rejectionFun) => {
        axios.get("http://universities.hipolabs.com/search?country=")
        .then((response) => {
            this.res = response;
          })
          .catch((error) => {
            rejectionFun(error);
          });
      });
    },
  },
};
</script>