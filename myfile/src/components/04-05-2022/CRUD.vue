<template>
    <div>
        <h1>CRUD Operations</h1>
        <b-form>
            FirstName:<input type="text" placeholder="Enter Your First Name"><br><br>
            LastName:<input type="text" placeholder="Enter Your Last Name"><br><br>
        </b-form>
        <b-button type="submit" @click="create()" variant="success">Create</b-button><br><br>
        <center>
        <b-table stripped hover :items="tabledata" :fields="fields" class="w-50">
        <b-button type="submit" @click="Update(data.data)" variant="warning">Update</b-button>&nbsp;
        <b-button type="submit" @click="Delete(data.data)" variant="danger">Delete</b-button>
        </b-table>
        </center>
    </div>
</template>

<script>
import axios from 'axios';
export default {
       name:'VenkY',
       data(){
           return{
             fields:['FirstName','LastName','Action'],
             updatedItem:this.formFields,
             Submitted:false,
             updatedIndex:-1,
             tabledata: []
           }
       },
       computed:{
         title() {
             return this.updatedIndex === -1 ? "New Item" : "Edit Item";
         }
       },
       methods:{
           create(){
               this.Submitted = true;
               this.updatedItem = Object.assign({}, this.formFields);
               this.updatedIndex = -1;
           },
           updated(data){
               this.Submitted = true;
               this.updatedItem = Object.assign({}, data);
               this.updatedIndex = this.tabledata.indexOf(data);
           },
           Delete(data){
               const index = this.tabledata.indexOf(data);
               confirm("Are You Confirm to Delete this Data?") && this.tabledata.splice(index, 1);
               axios.delete(this.endpoint + "/" + data.id);
           }
       },
       created(){
           axios(this.endpoint)
           .then((response) => (this.tabledata = response.data.data));
       }
}
</script>
