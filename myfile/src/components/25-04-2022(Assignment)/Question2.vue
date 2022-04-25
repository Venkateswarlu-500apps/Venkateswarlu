<template>
    <div>
        <h1 align="left">Displaying the Data using v-for</h1><br>
        <ul align="left">
        <li v-for="user in tabledata" :key="user.res">
        {{user.res}}
        </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:'VenkY',
    data(){
        return{
            tabledata:[{res:"Name : Agile CRM"}, 
                       {res:"Description : A Company of Excellence"},
                       {res:"Years of Experience : 12"}, 
                       {res:"Location : Hyderabad"}]
        }
    }
}
</script>
