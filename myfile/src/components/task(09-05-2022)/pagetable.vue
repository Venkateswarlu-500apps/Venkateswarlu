<template>
    <div>
        <h1>Pagination and B-Table</h1>
        <b-button variant="primary" @click="onclick">Click</b-button><br><br>
        <b class="mt-3">Current Page: {{ currentPage }}</b><br>
        <b-container class="w-75" >
            <b-card border-variant="danger" bg-variant="success">
        <b-table striped hover id="my-table" :items="res" :fields="fields" 
        :per-page="perPage" :current-page="currentPage"></b-table>
            </b-card>
        </b-container><br><br>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" 
        aria-controls="my-table" align="center"></b-pagination>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    name:'VenkY',
    data(){
        return{
            perPage:10,
            currentPage:1,
            fields:['id','userId','title','completed'],
            res:" "
        }
    },
    methods:{
        async onclick(){
            let response=await axios.get("https://jsonplaceholder.typicode.com/todos");
            this.res=await response.data
        }
    },
    computed:{
        rows(){
        return this.res.length
        }
    }        
}
</script>
