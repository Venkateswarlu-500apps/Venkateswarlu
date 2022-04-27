<template>
    <div>
        <b-form-input v-model="text" placeholder="Enter country" required></b-form-input><br />
        <b-button @click="fun" variant="success">Click</b-button>
        <b-table :items="res" :fields="fields"></b-table>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:'VenkY',
    data(){
        return{
          res:"",
          fields:["name", "country", "web_pages","domains"]
        }
    },
    methods:{
       async fun(){
        let response = await axios.get("http://universities.hipolabs.com/search?country="+ this.text);
        this.res = await response.json(); 
        },
    },
    created(){
        this.fun();
    }
}
</script>
