<template>
    <div>
        <center class="w-50">
        <h1>Displaying the Data in a Table using v-for</h1><br>
        <table class="table table-striped table-bordered w-50">
            <tr>
               <th>Name</th>
               <th>Index</th>
            </tr>
            <tr v-for="user in tabledata" :key="user.id">
                <td>{{user.name}}</td>
                <td>{{user.index}}</td>
            </tr>
        </table>
        </center>
    </div>
</template>
<script>
export default{
    name:'VenkY',
    data(){
        return{
            tabledata:[{name:" Agile CRM" , description:" A company of excellence",index:0},
                      {name:"mantra technologies", description:"500apps",index:1},
                      {name:"500apps Python", description:"Backend built using python",index:2},
                      {name:"500apps infinity", description:"Built using vue JS",index:3}]

        }
    }
}
</script>
