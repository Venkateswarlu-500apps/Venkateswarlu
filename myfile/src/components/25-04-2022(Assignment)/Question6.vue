<template>
    <div>
    <h1 class="ml-50">Displaying the below Data in Cards using b-card(vue bootstrap card) and v-for</h1>
    <center>
    <b-card v-for="user in data" :key="user.id" class="w-25">
       <b-card-text>Name: {{user.Name}} </b-card-text>
       <b-card-text>Description: {{user.Description}} </b-card-text>
    </b-card>
    </center>
    </div>
</template>
<script>
export default{
    name:'VenkY',
    data(){
        return{
              data:[{Name : "Agile CRM", Description : "A Company of Excellence"},
                    {Name : "Mantra Technologies", Description : "500apps"},
                    {Name : "500apps Python", Description : "Backend built using python"},
                    {Name : "500apps Infinity", Description : "Builtusing vue JS"}]
        }
    }
}
</script>
