<template>
  <div>
      <nav class="navbar navbar-expand-lg fixed-top row">
          <b-icon icon="house-door-fill" scale="3" shift-h="20"></b-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h1><b>Vue</b></h1>
      <b-card bg-variant="light" text-variant="primary" id="card">Login Name: Venkateswarlu</b-card>
      </nav><br><br>
      <b-button v-b-modal.modal-1 variant="success" id="button1">Add Details</b-button>
      <b-modal id="modal-1" title="Add Details" header-bg-variant="primary" body-bg-variant="info" hide-footer>
          <b-form @submit="savedData()">
              Name:<b-form-input type="text" v-model="details.name" placeholder="Name" required></b-form-input><br>
              Age:<b-form-input type="number" v-model="details.age" placeholder="Age" required></b-form-input><br/>
              Gender:<b-form-select v-model="details.gender" :options="options">
              </b-form-select><br/><br/>
              Date of Birth:<b-form-input type="date" v-model="details.dateofbirth" required></b-form-input>
              <b-button type="submit" v-b-tooltip.hover.left title="Save" variant="primary" id="save" class="float-right">
              <b-icon icon="save" scale="1.5" variant="warning" class="float-right" shift-v="1.5" shift-h="6">
              </b-icon >
              </b-button>
          </b-form>
      </b-modal>
      <br><br>
      <Card :result="result" ></Card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
    name:'VueHome',
    components: {
           Card
    },
    data() {
        return {
          details : {
              sno:"",
              name: "",
              age: "",
              gender: "",
              dateofbirth: "",
          },
          options: [
              { value:"Male", text: "Male" },
              { value:"Female", text: "Female" }
              ],
        //   result : [
        //     {
        //       Name: "",
        //       Age: "",
        //       Gender: "",
        //       DateofBirth: ""
        //     }
        // ]
        }
    },
    methods: {
            savedData() {
              console.log(this.details); 
              this.result.push(this.details);
              let sno = 1;
              this.result.forEach(details => {
                 details.sno = sno;
                 sno++; 
              });


             // this.details = null;

            //   this.result.push({Name: this.details.name, Age: this.details.age,
            //   Gender: this.details.gender, DateofBirth: this.details.dateofbirth});


            //document.getElementById("data").innerHTML= JSON.stringify(this.details);
            },
        },
        // mounted() {
        //     this.savedData();
        // }

}
</script>

<style>
#card {
    right: -1450px;
    height: 50px;
}
#button1 {
    position: absolute;
    left: 50px;
}
#save {
  position: relative;
  bottom: 385px;
  width: 30px;
  height: 30px;
  right: 30px;
}
</style>