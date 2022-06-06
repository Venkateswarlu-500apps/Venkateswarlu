<template>
<div>
    <p class="content"><b>Selected:</b> {{ selected }}</p>

    <b-field label="Find a JS framework">
      <b-autocomplete
        rounded
        v-model="name"
        :data="filteredDataArray"
        placeholder="e.g. jQuery"
        icon="magnify"
        clearable
        @select="(option) => (selected = option)"
      >
        <template #empty>No results found</template>
      </b-autocomplete>
    </b-field>
</div>
</template>


<script>
export default {
    name:'VenkY',
  data() {
    return {
      data: [
        "Angular",
        "Angular 2",
        "Aurelia",
        "Backbone",
        "Ember",
        "jQuery",
        "Meteor",
        "Node.js",
        "Polymer",
        "React",
        "RxJS",
        "Vue.js",
      ],
      name: "",
      selected: null,
    };
  },

  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>