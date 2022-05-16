<template>
  <div>
    <h1>Student Details</h1>
    <b-form-select
      v-model="StudentDetails.studentid"
      class="w-25"
      :options="details"
      value-field="id"
      text-field="Name"
    ></b-form-select
    >&nbsp;

    <b-form-select
      v-model="StudentDetails.subject"
      :options="options"
      class="w-25"
    ></b-form-select
    ><br /><br />

    <center>
      <b-card class="w-25" bg-variant="info" border-variant="dark">
        <b-form>
          <b>Date Picker:</b>

          <b-form-datepicker
            v-model="StudentDetails.date" 
            required
          ></b-form-datepicker>

          <b>Marks:</b>

          <b-form-input
            v-model="StudentDetails.marks"
            type="number"
            min="0"
            max="100"
            required
          ></b-form-input>

          <b>Remarks:</b>

          <b-form-input
            v-model="StudentDetails.remarks"
            type="text"
            placeholder="Text Area"
            required
          ></b-form-input> </b-form
        ><br />
        <b-button type="submit" variant="success" @click="onSubmit()"
          >Submit</b-button
        >
      </b-card>
    </center>
    <br /><br />
    <p id="demo"></p>
  </div>
</template>

<script>
export default {
  name: "VenkY",
  data() {
    return {
      options: [
        { value: null, text: "Please Select an Subject" },
        { value: 1, text: "English" },
        { value: 2, text: "Mathematics" },
        { value: 3, text: "Electronics" },
      ],
      StudentDetails: {
        studentid: "",
        date: "",
        subject: "",
        marks: "",
        remarks: "",
      },
      details: [],
    };
  },
  methods: {
    onSubmit() {
      document.getElementById("demo").innerHTML = JSON.stringify(
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