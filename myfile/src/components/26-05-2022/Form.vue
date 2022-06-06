<template>
  <div id="page">
    <nav class="navbar navbar-expand-lg fixed-top row" variant="info">
      <center><h1 id="center">Home</h1></center>
    </nav>
    <b-button v-b-toggle.sidebar-1 variant="primary" id="button"
      ><b-icon icon="plus-lg" variant="light" scale="1.5"></b-icon></b-button
    ><br />
    <b-sidebar id="sidebar-1" title="Side Bar" bg-variant="warning" shadow>
      <h1 style="color: brown"><u>Student Form</u></h1>
      <marquee width="400" style="color: red"
        >*Please Fill Student Details Carefully*</marquee
      >
      <center>
        <b-container>
          <b-card bg-variant="info" border-variant="dark">
            <b-form @submit="onSubmit()">
              <b-row>
                <b-col align="left"> <b>Student Details:</b></b-col> </b-row
              ><b-form-select
                id="studentId"
                v-model="StudentDetails.studentId"
                :options="details"
                value-field="id"
                text-field="Name"
                required
              ></b-form-select
              ><br /><br /><b-row>
                <b-col align="left"> <b>Subjects:</b></b-col> </b-row
              ><b-form-select
                id="subject"
                v-model="StudentDetails.subject"
                :options="options"
                required
              ></b-form-select>
              <br /><br />
              <b-row>
                <b-col align="left"><b>Date Picker:</b></b-col>
              </b-row>

              <b-form-input
                type="date"
                id="date1"
                v-model="StudentDetails.date"
                required
              ></b-form-input
              ><br />
              <b-row>
                <b-col align="left"><b>Marks:</b></b-col>
              </b-row>

              <b-form-input
                id="marks"
                v-model="StudentDetails.marks"
                type="number"
                min="0"
                max="100"
                placeholder="Enter Student Marks"
                required
              ></b-form-input
              ><br />
              <b-row>
                <b-col align="left"><b>Remarks:</b></b-col>
              </b-row>

              <b-form-textarea
                id="remarks"
                v-model="StudentDetails.remarks"
                type="text"
                placeholder="Enter Student Remarks"
                required
              ></b-form-textarea>
              <br />
              <b-button type="submit" variant="success">Submit</b-button>
            </b-form>
          </b-card>
        </b-container>
      </center>
      <br /><br />
    </b-sidebar>
    <br />
    <Table :result="result"></Table>
  </div>
</template>

<script>
import Table from "./Table.vue";
export default {
  name: "StudentForm",
  components: {
    Table,
  },
  data() {
    return {
      options: [
        { value: 0, text: "Please Select an Subject", disabled: true },
        { value: 1, text: "English" },
        { value: 2, text: "Mathematics" },
        { value: 3, text: "Electronics" },
      ],
      StudentDetails: {
        studentId: "",
        date: "",
        subject: "",
        marks: "",
        remarks: "",
      },
      result: [
        {
          studentId: "",
          date: "",
          subject: "",
          marks: "",
          remarks: "",
        },
      ],
      details: [],
      locales: " ",
    };
  },
  methods: {
    onSubmit() {
      this.result.push({
        studentId: this.StudentDetails.studentId,
        date: this.StudentDetails.date,
        subject: this.StudentDetails.subject,
        marks: this.StudentDetails.marks,
        remarks: this.StudentDetails.remarks,
      });
    },
    async link() {
      const response = await fetch(
        "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );
      this.details = await response.json();
    },
  },
  async created() {
    await this.link();
  },
};
</script>

<style>
#button {
  position: fixed;
  height: 80px;
  width: 80px;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  border-color: blue;
}
#page {
  background-color: lightseagreen;
  height: 920px;
}
#center {
  position: relative;
  left: 872px;
}
</style>