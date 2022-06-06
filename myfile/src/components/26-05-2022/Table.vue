<template>
  <div>
      <h2><u>Students Data</u></h2>
    <center>
      <b-table
        striped
        hover
        :items="result"
        :fields="fields"
        class="w-50"
        bordered
      ></b-table>
    </center>
  </div>
</template>

<script>
export default {
  name: "TableData",
  props: {
    result: {
      type: Object,
    },
  },
  data() {
    return {
      fields: ["studentId", "date", "subject", "marks", "remarks"],
    };
  },
};
</script>

<style>

</style>