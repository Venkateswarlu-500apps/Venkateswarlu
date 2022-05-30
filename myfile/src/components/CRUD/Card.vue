<template>
  <div>
    <div v-if="result.length">
      <b-card
        id="data"
        class="w-25"
        header="Saved Details"
        header-bg-variant="success"
        header-text-variant="light"
        :key="index"
        v-for="(data,index) in result"
      >
      <label><b>Name:</b> {{Name=data.name}}</label><br>
      <label><b>Age:</b> {{data.age}}</label><br>
      <label><b>Gender:</b>{{data.gender}}</label><br>
      <label><b>Date of Birth:</b>{{data.dateofbirth}}</label>
    
        <b-button
          v-b-tooltip.hover.left
          title="Edit"
          type="click"
          id="edit"
          variant="success"
          @click="Edit"
          ><b-icon icon="server" scale="1.5"></b-icon
        ></b-button>

        <b-button
          v-b-tooltip.hover.right
          title="Delete"
          id="delete"
          variant="success"
          @click="Delete"
          ><b-icon icon="trash-fill" scale="1.5"></b-icon
        ></b-button>

      </b-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "DataCard",
  props: {
    result:Array
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    Edit() {
      this.$emit("edit");
    },
    Delete() {
      this.$emit("delete");
    },
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
  top: -160px;
  left: 45px;
}
#delete {
  position: relative;
  top: -160px;
  left: 48px;
}
</style>