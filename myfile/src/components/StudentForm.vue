<template>
  <div>
    <h1 style="color: brown">Student Form</h1>
    <marquee width="400" style="color: red"
      >*Please Fill Student Details Carefully*</marquee
    >
    <center>
      <b-container class="w-50">
        <b-card class="w-50" bg-variant="info" border-variant="dark">
          <b-form @submit="onSubmit()" v-on:click="document.getElementById('date1').innerHTML = Date()">
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
            <b-button type="submit" variant="success" >Submit</b-button>
          </b-form>
        </b-card>
      </b-container>
    </center>
    <br /><br />
    <p id="form"></p>
  </div>
</template>

<script>
export default {
  name: "StudentForm",
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
      details: [],
      locales: " ",
    };
  },
  methods: {
    onSubmit() {
      document.getElementById("form").innerHTML = JSON.stringify(
        this.StudentDetails
      );
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