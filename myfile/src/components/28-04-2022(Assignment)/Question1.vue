<template>
    <div >
        <h1>Question1</h1>
        <b-form-select align="left" v-model="value" :options="countries" class="w-50"></b-form-select>&nbsp;
        <b-button @click="fun()" variant="success">Click</b-button>
        <b-container>
        <b-row>
        <b-col lg="6" class="my-3">
        <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0">
        <b-input-group size="sm">
        <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
        <b-input-group-append>
        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
        </b-input-group-append>
        </b-input-group>
        </b-form-group>
        </b-col>
        <b-col lg="6" class="my-1">
        <b-form-group v-model="sortDirection" label="Filter On" label-cols-sm="3" label-align-sm="right" label-size="sm"
          class="mb-0" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group v-model="filterOn" :aria-describedby="ariaDescribedby" class="mt-1">
            <b-form-checkbox value="name">university_name</b-form-checkbox>
            <b-form-checkbox value="domains">domains</b-form-checkbox>
            <b-form-checkbox value="website_url">website_url</b-form-checkbox>
            <b-form-checkbox value="state_province">state_province</b-form-checkbox>
        </b-form-checkbox-group>
        </b-form-group>
        </b-col>
        </b-row>
        </b-container>
        <b-table stripped hover :items="res" :fields="fields" :filter="filter" :sort-direction="sortDirection"
        :filter-included-fields="filterOn" >
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </b-table>
  <p v-for="item in res" :key="item">
    <span v-text="item">
      </span>
  </p>
  
  
    </div>
</template>
<script>
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';
const { getNames } = require("country-list");
export default{
    name:'VenkY',
    components:{
      InfiniteLoading
  },
    data(){
        return{
            value: " ",
            res: " ",
            countries: [],
            fields:['university_name','domains','website_url','state_province'],
            filter:null,
            filterOn:[],
        }
    },
    mounted(){
      var countries = getNames();
      this.countries = countries.map((row)=> {
          return { value : row, text : row}
      });
    },

    methods:{
        redirect(value){
            window.open(value,"_blank");
        },
        async fun() {
            var response=await axios.get("http://universities.hipolabs.com/search?country="+this.value);
            var responseText=await response.data;
             this.res=responseText.map((row) =>{
                return{
                    university_name : row.name,
                    domains : row.domains,
                    website_url : row.web_pages[0],
                    state_province : row["state-province"],
                }
            });
        },
        infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        for (let i = this.res.length + 1; i <= this.res.length + 20; i++) {
          temp.push(i);
        }
        this.res = this.res.concat(temp);
        $state.loaded();
      }, 1000);
    },
  },
  }
</script>
