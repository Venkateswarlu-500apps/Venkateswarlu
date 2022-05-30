<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top row">
      <b-icon icon="house-door-fill" scale="3" shift-h="20"></b-icon
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h1><b>Vue</b></h1>
      <b-card bg-variant="light" text-variant="primary" id="card"
        >Login Name: Venkateswarlu</b-card
      >
    </nav>
    <br /><br />
    <b-button v-b-modal.modal-1 variant="success" id="button1"
      >Add Details</b-button
    >
    <b-modal
      id="modal-1"
      v-model="Show"
      :title="Title"
      header-bg-variant="primary"
      body-bg-variant="info"
      hide-footer
    >
      <b-form @submit="savedData">
        Name:<b-form-input
          type="text"
          v-model="details.name"
          placeholder="Enter your Name"
          required
        ></b-form-input
        ><br />
        Age:<b-form-input
          type="number"
          v-model="details.age"
          placeholder="Enter your Age"
          required
        ></b-form-input
        ><br />
        Gender:<b-form-select
          v-model="details.gender"
          :options="options"
          required
        >
        </b-form-select
        ><br /><br />
        Date of Birth:<b-form-input
          type="date"
          v-model="details.dateofbirth"
          required
        ></b-form-input>

        <b-button
          type="submit"
          v-b-tooltip.hover.left
          title="Save"
          variant="primary"
          id="save"
          class="float-right"
        >
          <b-icon
            icon="save"
            scale="1.5"
            variant="warning"
            class="float-right"
            shift-v="1.5"
            shift-h="6"
          >
          </b-icon>
        </b-button>
      </b-form>
    </b-modal>
    <br /><br />
    <Card :result="result" @edit="Edit" @delete="Delete"></Card>
  </div>
</template>

<script>
import axios from "axios";
//import moment from "moment";
import Card from "./Card.vue";
export default {
  name: "VueHome",
  components: {
    Card,
  },
  data() {
    return {
      details: {
        name: "",
        age: "",
        gender: "",
        dateofbirth: "",
      },
      

      options: [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
      ],

      editDetails: this.details,
      Show: false,
      editIndex: -1,
      result: [],
    };
  },
  computed: {
    Title() {
      return this.editIndex === -1 ? "Add Details" : "Edit Details";
    },
  },
  methods: {
    savedData() {
      this.result.push(
         this.details
      );
      console.log(this.result);
      this.Close();
    },
    Close() {
      this.Show = false;
    },
    Edit(item) {
      this.Show = true;
      this.editIndex = this.result.indexOf(item);
      this.editDetails = Object.assign({}, item);
    },
    Delete(item) {
      this.item = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete details.", {
          title: "Delete Details",
          size: "sm",
          buttonSize: "sm",
          okVariant: "primary",
          okTitle: "YES",
          cancelVariant: "danger",
          cancelTitle: "NO",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value) {
            const index = this.result.indexOf(item);
            this.result.splice(index, 1);
            axios.delete(this.endpoint + "/" + value.id);
          } else return;
        });
    },
  },
};
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