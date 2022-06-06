<template>
    <div>
        <b-card v-for="item in data" :key="item.print">
            {{item.print}}
        </b-card>
    </div>
</template>
<script>

export default{
  
    name:'VenkY',
    data(){
        return{
            data : [{print:"name:Agile CRM, description:A company of excellence"},<br/>,
                   {print:"name:mantra technologies, description:500apps"},<br/>,
                   {print:"name:500apps Python, description:Backend built using python"},<br/>,
                   {print:"name:500apps infinity,description:Builtusing vue JS"}]
              }
         }
              }
</script>
