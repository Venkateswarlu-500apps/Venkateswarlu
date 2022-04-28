<template>
    <div>
        <h1>Question1</h1>
        <b-form-select align="left" v-model="value" :options="countries" class="w-50"></b-form-select>&nbsp;
        <b-button @click="fun()" variant="success">Click</b-button><br><br>
        <input type="text" id="Search" @keyup="search()" placeholder="Search here"/><br><br>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
        <b-table id="my-table" :per-page="perPage" :current-page="currentPage" stripped hover :items="res" :fields="fields"></b-table>
<b-container mt=5>
<div class="row mt=3">
<div class="col-md-3">
<div class="p-2 alert alert-secondary">
<h3>University List1</h3>
<draggable class="list-group kanban-column" group="tasks" :per-page="perPage" :current-page="currentPage">
<div class="list-group-item" v-for="value in res" :key="value.domains">
<b-card id="sample2" v-for="value in res" :key="value.domains" class="mb-2">
<b-card-text>university_name: {{ value.university_name }} </b-card-text>
<p>domains: {{ value.domains }}</p>
<a :href="value.website_url" _target="blank">{{value.website_url}}</a>
<p>state_province: {{ value.state_province }}</p>
</b-card>
</div>
</draggable>
</div>
</div>

<div class="col-md-3">
<div class="p-2 alert alert-success" :per-page="perPage" :current-page="currentPage">
<h3>University List2</h3>
<draggable class="list-group kanban-column" :list="countries" id="sample" group="tasks" :per-page="perPage" :current-page="currentPage">
<div class="list-group-item" v-for="value in res" :key="value.domain">
</div>
</draggable>
</div>
</div>
</div>
</b-container>
</div>
</template>
<script>
import axios from "axios";
const { getNames } = require("country-list");
import draggable from "vuedraggable";
export default {
  name: "VenkY",
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      value: " ",
      res: " ",
      countries: [],
      fields: ["university_name", "domains", "website_url", "state_province"],
    };
  },
  mounted() {
    var countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
  },

  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },
    async fun() {
      var response = await axios.get(
        "http://universities.hipolabs.com/search?country=" + this.value
      );
      var responseText = await response.data;
      this.res = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
  },
  computed: {
    rows() {
      return this.res.length;
    },
  },
  components:{
      draggable
  }
};
</script>
