<template>
  <div>
    <!-- <b-card
      id="data"
      class="w-25"
      header="Saved Details"
      header-bg-variant="success"
      header-text-variant="light"
    >
      <b-button v-b-tooltip.hover.left title="Edit" id="edit" variant="success"
        ><b-icon icon="server" scale="1.5"></b-icon
      ></b-button>
      <b-button
        v-b-tooltip.hover.right
        title="Delete"
        id="delete"
        variant="success"
        ><b-icon icon="trash-fill" scale="1.5"></b-icon
      ></b-button>
      <b-card-text>
        <p v-text="result"></p>
      </b-card-text>
    </b-card> -->
 
      <b-card-text>
        <p v-text="result[0]"></p>
      </b-card-text>
 <b-card-group deck v-for="obj in result[0]" :key="obj">
    <p> {{obj.name}}</p>
 </b-card-group>

  </div>
</template>

<script>
export default {
  name: "DataCard",
  props: {
    result: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    //  card() {
    //      this.$emit("carddata");
    //  }
  },
};
</script>

<style>
#data {
  position: relative;
  left: 25px;
}
#edit {
  position: relative;
  top: -63.5px;
  left: 180px;
}
#delete {
  position: relative;
  top: -63.5px;
  left: 185px;
}
</style>