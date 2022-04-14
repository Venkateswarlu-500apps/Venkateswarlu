<template>
  <div>
    <h1 align="left" >Data</h1>
   <ul align="left">
     <li v-for="item in list" :key="item.print">
     {{item.print}}
     </li>
  </ul>
  </div>
</template>
  <script>
    export default {
        name:'VenkY',                                                                                                                                                                                                                                                      
    data() {
    return {

    list: [
    {print:'name:Agile CRM'},
    {print:'description: A company of excellence'},
    {print:'yearsofexperience: 12'},
    {print:'location: Hyderabad'}
    ]
          }
          }
                  }
  </script>