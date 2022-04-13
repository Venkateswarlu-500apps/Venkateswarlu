<template>
  <div>
    <h1 align="left">Table</h1>
      <b-table :items="tabledata" :fields="fields" class="w-50"></b-table>
  </div>
</template>
  <script>
    export default {
    name:'VenkY',                                                                                                                                                                                                                                                        
    data() {
    return {
    
    tabledata: [
    { name:'Agile CRM', description: 'A company of excellence',index:0},
    { name:'mantra technologies', description: '500apps',index:1},
    { name:'500apps Python', description: 'Backend built using python',index:2},
    { name:'500apps infinity', description: 'Builtusing vue JS',index:3}],
    fields:['name','index']           
          }
          }
                  }
  </script>