<template>
  <div>
    <h1 align="center">This is Question 1</h1>
    <b-form-select v-model="value" :options="countries"></b-form-select
    ><br /><br />
    <b-button variant="warning" @click="getData">Get Data</b-button><br /><br />
    <b-table striped hover :items="items">
      <p>university_name:-- {{ value.university_name }}</p>
      <p>domains:{{ value.domains }}</p>
      <p @click="redirect(value.website_url)">
        website_url:{{ value.website_url }}
      </p>
      <p>state_province:{{ value.state_province }}</p>
    </b-table>
  </div>
</template>
<script>
const { getNames } = require("country-list");
export default {
  name: "QuE6",
  data() {
    return {
      value: "",
      items: [],

      countries: [],
    };
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
    if (this.countries.length) this.value = this.countries[0].text;
  },
  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },
    async getData() {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=" + this.value,
        {
          method: "GET",
        }
      );
      const responseText = await response.json();
      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,

          website_url: row.web_pages[0],

          state_province: row["state-province"],
        };
      });
    },
  },
};
</script>

