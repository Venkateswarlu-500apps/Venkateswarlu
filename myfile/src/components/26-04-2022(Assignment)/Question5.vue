<template>
  <div>
      <h1>University Data</h1>
    <b-form-input v-model="text" placeholder="Enter country" required></b-form-input><br />

    <b-button @click="getData()" variant="success">Click here!</b-button><br /><br />

    <b-card>
      <b-card v-for="data in posts" :key="data.id">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>University Name:{{ data.name }}</b-col>
          </b-row>

          <b-row>
            <b-col>Domains:{{ data.domains }}</b-col>&nbsp;

            <b-col>
                Website:<b-link href="#http://universities.hipolabs.com/search?country=">{{ data.web_pages[0] }}</b-link>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "VenkY",

  data() {
    return {
      posts: "",
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("http://universities.hipolabs.com/search?country=" + this.text);

        this.posts = await response.json();
      } 
      catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData1();
  },
};
</script>


