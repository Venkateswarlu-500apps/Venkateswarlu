<template>
    <div>
        <h1>Question1</h1>
        <b-form-select align="left" v-model="value" :options="countries" class="w-50"></b-form-select>&nbsp;
        <b-button @click="fun()" variant="success">Click</b-button><br><br>
        <input type="text" id="Search" @keyup="search()" placeholder="Search here"/><br><br>
        <b-table stripped hover :items="res" :fields="fields"></b-table>
        <ul id="UL">
            <li><a></a></li>
            <li><a></a></li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
const { getNames } = require("country-list");
export default{
    name:'VenkY',
    data(){
        return{
            value: " ",
            res: " ",
            countries: [],
            fields:['university_name','domains','website_url','state_province']
        }
    },
    mounted(){
      var countries = getNames();
      this.countries = countries.map((row)=> {
          return { value : row, text : row}
      })
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
        search() {
            var input, filter, ul, li, a, i, txtValue;
            input=document.getElementById("Search");
            filter=input.value.toUpperCase();
            ul=document.getElementById("UL");
            li=ul.getElementsByTagName("li");
            for(i=0;i<li.length;i++)
            {
                a=li[i].getElementsByTagName("a")[0];
                txtValue=a.textContent||a.innerHTML;

                if(txtValue.toUpperCase().indexOf(filter)>-1){
                    li[i].style.display=" ";
                }
                else{
                    li[i].style.display="none";
                }
            }
        }
    }
}
</script>
