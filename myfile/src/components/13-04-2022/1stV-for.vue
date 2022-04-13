<template>
  <div>
    <h1 align="left">Table</h1>
    <table class="table table-striped table-bordered w-50">
        <thead>
        <tr>
            <th>name</th>
            <th>index</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in tabledata" :key="user.id">
        <td>{{user.name}}</td>
        <td>{{user.index}}</td>  
        </tr>
        </tbody>
    </table>
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
          }
          }
                  }
  </script>