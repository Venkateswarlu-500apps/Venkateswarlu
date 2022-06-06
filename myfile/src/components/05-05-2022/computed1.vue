<template>
    <div>
        <h1>Computed Properties</h1>
        <center>
        <b-table stripped hover :items="data"  class="w-50">
            {{data.a}}
            <template v-slot:cell(actPageRules)="">
    <b-button size="sm" @click="info(row)" class="mr-1" variant="warning">
      Page Rules
    </b-button>
            </template>
        </b-table>
        </center>
    </div>
</template>
<script>

export default{
       name:'VenkY',
       data(){
           return{
                a:0,
                b:0,
                age:20,
                data:[
                      {Value:'A-Value:', Action:''},
                      {Value:'B-Value:'},
                      {Value:'AB-Value:'},
                      {Value:'A-Age:'},
                      {Value:'B-Age:'},
                      {Value:'AB-Age'}],
                fields:['Values','Action']
           }
       },
       methods:{
           addtoa(){
               return this.age+this.a
           },
           addtob(){
               return this.age+this.b
           }
       }
}
</script>
