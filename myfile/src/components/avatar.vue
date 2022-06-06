<template>
    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab v-for="i in tabs" :key="i" :title="'Table' + i">
                    <b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">Close Tab</b-button>&nbsp;
                    <b-button v-b-toggle.collapse-3 class="float-left">Hide</b-button><br><br>
                    <b-collapse visible id="collapse-3">
                    <b-table stripped hover id="my-table" :items="res" :fields="fields">
                        <template #cell(action)>
                             
                        </template>
                    </b-table>
                    </b-collapse>
                </b-tab>
                <template #tabs-end>
                    <b-nav-item role="presentation" @click="newTab" href="#"><b>+</b></b-nav-item>
                </template>
            </b-tabs>
        </b-card>
    </div>
</template>
<script>

import axios from 'axios';

export default{
    name:'VenkY',
    data(){
        return{
            tabs:[],
            tabCounter:0,
            fields:['id','userId','Avatar','title','completed',],
            res:" "
        }
    },
    methods:{
        async newTab(){
            this.tabs.push(this.tabCounter++)
            let response=await axios.get("https://jsonplaceholder.typicode.com/todos");
            this.res=await response.data
        },
        closeTab(x){
            for(let i=0; i<this.tabs.length; i++){
                if(this.tabs[i] === x){
                    this.tabs.splice(i, 1)
                }
            }
        },
    }
}
</script>