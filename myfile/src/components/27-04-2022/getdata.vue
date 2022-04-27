<template>
  <div>
    <center>
    <h3>fetch api</h3>
    <b-form-input v-model="value" placeholder="Enter country name"></b-form-input>
     <b-button @click="getData()" variant="success">click</b-button>
    <b-table class="w-75" striped hover :items="posts" :fields="fields"></b-table>
    </center>
  </div>
</template>
<script>
export default {
  name: "FetchapI",
  data() {
    return {
      posts: " ",
      fields: ["name", "country", "web_pages","domains"],
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch("http://universities.hipolabs.com/search?country=" + this.value);
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style>
