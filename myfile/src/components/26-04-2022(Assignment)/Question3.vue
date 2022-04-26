<template>
  <div align="center">
      <h1>CRUD Operations</h1>
    <b-row class="w-50">
        <b-col>
        <b-card>
          <b-form id="form">
            Enter First Name:<b-form-input id="sample1" v-model="value1" placeholder="enter Firstname"></b-form-input>
            Enter LastName:<b-form-input id="sample2" v-model="value2" placeholder="enter Lastname"></b-form-input>

            <b-button @click="Add()">Add</b-button>

            <b-button @click="Delete()">Delete</b-button>

            <b-button @click="Update()">Update</b-button>
          </b-form>

          <b-table striped hover :items="items" :fields="fields"></b-table> 
          </b-card>
          </b-col>
          </b-row>
  </div>
</template>

<script>
export default {
  name: "VenkY",
  data() {
    return {
      items: [{ firstname: "", lastname: "" }],

      fields: ["firstname", "lastname"],

      value1: "",
    };
  },
  methods: {
    Add() {
      this.items.push({
        firstname: document.getElementById("sample1").value,

        lastname: document.getElementById("sample2").value,
      });
    },
    Delete() {
      this.items.pop();
    },
    Update() {
        this.items.update({
        firstname: document.getElementById("sample1").value,

        lastname: document.getElementById("sample2").value, 
        })
    },
    
  },
};
</script>


<style scoped>
div {
  align-content: center;

  padding-left: 45px;
}
</style>