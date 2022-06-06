<template>
  <div>
      <h1>University Data</h1>
    <b-form-input v-model="text" placeholder="Enter country" required></b-form-input><br />

    <b-button @click="getData()" variant="success">Click here!</b-button><br /><br />

    <b-card>
      <b-card v-for="data in posts" :key="data.id">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>University Name:{{ data.university_name }}</b-col>
          </b-row>
          <b-row>
            <b-col>Domains:{{ data.domains }}</b-col>&nbsp;
            <b-col @click="redirect(data.website_url)">
            Website:<b-link href=" " redirect>{{ data.website_url }}</b-link>
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
    redirect(data){
      window.open(data,"_blank");
    },
    async getData() {
        let response = await fetch("http://universities.hipolabs.com/search?country=" + this.text);
        let responseText = await response.json();
        this.posts = responseText.map((row) => {
          return{
            university_name: row.name,
            domains: row.domains,
            website_url: row.web_pages[0],
            state_province: row["state-province"],
          };
        });
    },
  },

  created() {
    this.getData();
  },
};
</script>


