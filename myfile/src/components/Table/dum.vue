<template>
  <div>
    <hr />
    <b-form id="form">
      <b-form-input id="product"></b-form-input>
      <b-form-input id="sku"></b-form-input>
      <b-form-input id="type"></b-form-input>
      <b-button id="search" variant="primary">Search</b-button>
      <b-button id="show" variant="warning">Show All</b-button>
    </b-form>

    <b-button @click="Create()" variant="success" id="add"
      >Add </b-button
    ><br />
    <b-button variant="danger" id="multiple">Multiple delete </b-button>
    <b-button variant="primary" id="import">Import </b-button>
    <b-button variant="primary" id="export">Export </b-button><br />
    <b-modal
      header-bg-variant="primary"
      body-bg-variant="info"
      v-model="Show"
      hide-footer
    >
      <b-form @submit.prevent="save">
      <slot :table="editedItem" name="input-fields"> </slot>
        Id:<b-form-input
          type="number"
          v-model="table.id"
          placeholder="Enter your Id"
          required
        ></b-form-input
        ><br />
        Product:<b-form-input
          type="text"
          v-model="table.product"
          placeholder="Enter your Product"
          required
        ></b-form-input
        ><br />
        Sku:<b-form-input
          type="text"
          v-model="table.sku"
          placeholder="Enter your Sku"
          required
        >
        </b-form-input
        ><br />
        Type:<b-form-input
          type="text"
          v-model="table.type"
          placeholder="Enter your Type"
          required
        ></b-form-input
        ><br />
        Quality:<b-form-input
          type="text"
          v-model="table.quality"
          placeholder="Enter your Quality"
          required
        ></b-form-input>
        <b-button
          type="submit"
          v-b-tooltip.hover.left
          title="Save"
          variant="primary"
          id="save"
          class="float-right"
          @click="save()"
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
    <center>
      <b-table
        striped
        hover
        :title="Title"
        :items="tableData"
        :fields="fields"
        bordered
        id="table"
        head-row-variant="secondary"
      >
       <template #cell(action)="data">
        <b-button @click="Edit(data.item)" variant="info">Edit</b-button>
        <b-button @click="Delete(data.item)" v-b-modal="'edit-modal'" variant="danger">Delete</b-button>
    </template>
      </b-table>
    </center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableData",
  data() {
    return {
      table: {
        id: "",
        product: "",
        sku: "",
        type: "",
        quality: "",
      },
      fields: ["⬜", "ID", "Product", "Sku", "Type", "Quality", "Operation"],
      editedItem: this.tableData,
      Show: false,
      editedIndex: -1,
      tableData: [],
    };
  },
   computed: {
    Title() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  methods: {
    Create() {
      this.Show = true;
      this.editedItem = Object.assign({}, this.tableData);
      this.editedIndex = -1;
    },
    Edit(item) {
      this.Show = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    Delete(item) {
      const index = this.tableData.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.tableData.splice(index, 1);
      axios.delete(this.endpoint + "/" + item.id);
      
    },
    close() {
      this.Show = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.tableData);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableData[this.editedIndex], this.editedItem);
        axios.put(this.endpoint + "/" + this.editedItem.id, this.editedItem);
      } else {
        this.tableData.push(this.editedItem);
        axios.post(this.endpoint, this.editedItem);
      }
      this.close();
    },
  },
  created() {
    axios(this.endpoint).then(
      (response) => (this.tableData = response.data.data)
    );
  },
};
</script>


<style>
#form {
  width: 300px;
}

#product {
  position: relative;
  left: 50px;
  top: 18px;
}

#sku {
  position: relative;
  left: 400px;
  top: -20px;
}

#type {
  position: relative;
  left: 750px;
  top: -58px;
}

#search {
  position: relative;
  left: 1000px;
  top: -96px;
}

#show {
  position: relative;
  left: 1030px;
  top: -96px;
}

#table {
  position: fixed;
  width: 1780px;
  left: 50px;
  top: 230px;
}

#add {
  position: relative;
  left: -863px;
  top: -50px;
}

#multiple {
  position: relative;
  left: -690px;
  top: -88px;
}

#import {
  position: relative;
  left: -660px;
  top: -88px;
}

#export {
  position: relative;
  left: -630px;
  top: -88px;
}
</style>