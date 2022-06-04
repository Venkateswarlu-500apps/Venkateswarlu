<template>
    <div>
        <b class="mt-3">Current Page: {{ currentPage }}</b>
        <b-card no-body>
            <b-tabs card>
                <b-tab v-for="i in tabs" :key="i" :title="'Table' + i">
                    <b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">Close Tab</b-button>
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" 
        aria-controls="my-table" align="center"></b-pagination>
                    <b-table striped hover id="my-table" :items="res" :fields="fields" 
                    :per-page="perPage" :current-page="currentPage">
                    </b-table>
                </b-tab>
                <template #tabs-end>
                    <b-nav-item role="presentation" @click="newTab" href="#"><b>+</b></b-nav-item>
                </template>
            </b-tabs>
        </b-card>
    </div>
</template>
<script>

export default{
    name:'VenkY',
    data(){
        return{
            tabs:[],
            tabCounter:0,
            perPage:10,
            currentPage:1,
            fields:['id','userId','title','completed'],
            res:" "
        }
    },
    methods:{
        async newTab(){
            this.tabs.push(this.tabCounter++)
            let response=await fetch("https://jsonplaceholder.typicode.com/todos");
            this.res=await response.json()
        },
        closeTab(x){
            for(let i=0; i<this.tabs.length; i++){
                if(this.tabs[i] === x){
                    this.tabs.splice(i, 1)
                }
            }
        },
    },
    computed:{
            rows(){
                return this.res.length
            }
        }
}
</script>