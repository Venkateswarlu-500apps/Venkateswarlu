<template>
  <div>
    
    <SideBar></SideBar>
    <br />
    <input type="file" ref="doc" id="file" />
    <b-form id="form">
      <b-form-input
        type="text"
        id="product"
        placeholder="Enter product"
        v-model="filter"
      >
      </b-form-input>
      <b-form-input
        type="text"
        id="sku"
        placeholder="Enter sku"
        v-model="filter"
      ></b-form-input>
      <b-form-input
        type="text"
        id="type"
        placeholder="Enter type"
        v-model="filter"
      ></b-form-input>
      <b-icon icon="person" id="person" scale="1.5"></b-icon>
      <b-icon icon="envelope" id="envelope" scale="1.5"></b-icon>
      <b-icon icon="cursor" id="cursor" variant="dark" scale="1.5"></b-icon>
      <b-button
        type="submit"
        id="search"
        variant="primary"
        :disabled="!filter"
        @click="filter = ''"
        >Search</b-button
      >
      <b-button type="submit" id="show" variant="warning">Show All</b-button>
    </b-form>

    <b-button type="submit" @click="Create()" variant="success" id="add"
      >Add <b-icon icon="plus-circle"></b-icon> </b-button
    ><br />
    <b-button type="submit" variant="danger" id="multiple" @click="Delete"
      >Multiple delete <b-icon icon="dash-circle"></b-icon
    ></b-button>
    <b-button type="submit" variant="primary" id="import" @click="read_File()"
      >Import

      <b-icon
        icon="arrow-bar-down
"
      ></b-icon
    ></b-button>
    <b-button type="submit" variant="primary" id="export" @click="Export()"
      >Export
      <b-icon
        icon="arrow-bar-up
"
      ></b-icon></b-button
    ><br />

    <center>
      <b-table
        striped
        hover
        id="table"
        :items="tableData"
        :fields="columns"
        :filter="filter"
        bordered
        head-row-variant="secondary"
      >
        <template #cell(operation)="data">
          <b-button @click="Edit(data.item)" variant="success"
            >Edit
            <b-icon
              icon="pencil-square
"
            ></b-icon></b-button
          >&nbsp;
          <b-button
            @click="Delete(data.item)"
            v-b-modal="'edit-modal'"
            variant="danger"
            >Delete
            <b-icon
              icon="file-earmark-excel
"
            ></b-icon
          ></b-button>
        </template>
      </b-table>
    </center>
    <b-modal
      v-model="Show"
      :title="Title"
      header-bg-variant="primary"
      body-bg-variant="info"
      hide-footer
    >
      <b-form @submit.prevent="Save">
        <slot :formdata="editedItem" name="input-fields"> </slot>

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
          </b-icon> </b-button
        ><br />
      </b-form>
    </b-modal>

    <!-- <div id="file">{{ content }}</div> -->
  </div>
</template>

<script>
import axios from "axios";
import exportFromJSON from "export-from-json";
import SideBar from "./SideBar.vue";
export default {
  name: "TableData",
  props: ["columns", "formFields"],
  components: {
    SideBar,
  },
  data() {
    return {
      editedItem: this.formFields,
      Show: false,
      editedIndex: -1,
      tableData: [],
      filter: null,
      file: null,
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
      this.editedItem = Object.assign({}, this.formFields);
      this.editedIndex = -1;
    },

    Edit(item) {
      this.Show = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },

    Delete(item) {
      this.item = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete item.", {
          title: "Delete Item",
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
            const index = this.tableData.indexOf(item);
            this.tableData.splice(index, 1);
            axios.delete("/" + value.id);
          } else return;
        });
    },

    Close() {
      this.Show = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.formFields);
        this.editedIndex = -1;
      }, 300);
    },

    Save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableData[this.editedIndex], this.editedItem);
        axios.put(this.endpoint + "/" + this.editedItem.id, this.editedItem);
      } else {
        this.tableData.push(this.editedItem);
        axios.post(this.editedItem);
      }
      this.Close();
    },

    read_File() {
      this.file = this.$refs.doc.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".txt")) {
        reader.onload = (res) => {
          this.tableData = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        this.tableData = ["check the console for file output"];
        reader.onload = (res) => {
          //document.getElementById("file").innerHTML = res.target.result;
          const csvtoobject = (csv) => {
            const myArray = csv.split("\n");
            const keys = myArray[0].split(",");
            return myArray.splice(1).map((myArray) => {
              return myArray.split(",").reduce((acc, cur, i) => {
                const toAdd = {};
                toAdd[keys[i]] = cur;
                return { ...acc, ...toAdd };
              }, {});
            });
          };
          const converted = res.target.result;
          console.log(csvtoobject(converted));
          this.tableData = csvtoobject(converted);
          console.log(this.tableData);
          return this.tableData;
        };
        reader.onerror = (err) => console.log(err)
        reader.readAsText(this.file)
      }
    },

    Export() {
      const objectToCsv = function (data) {
        const csvRows = [];
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(","));
        for (const row of data) {
          const values = headers.map((header) => {
            const val = row[header];
            return `"${val}"`;
          });
          csvRows.push(values.join(","));
        }
        return csvRows.join("\n");
      };
      const data = this.tableData;
      const csvData = objectToCsv(data);
      console.log(csvData);
      const fileName = "TableData";
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({ data, fileName, exportType });
    },
  },
  created() {
    axios().then((response) => (this.tableData = response.data.data));
  },
};
</script>

<style scoped>
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
  position: relative;
  width: 1780px;
  left: 0px;
  top: -70px;
}

#add {
  position: relative;
  left: -851px;
  top: -50px;
}

#multiple {
  position: relative;
  left: -630px;
  top: -88px;
}

#import {
  position: relative;
  left: -400px;
  top: -88px;
}

#export {
  position: relative;
  left: -380px;
  top: -88px;
}

#save {
  position: relative;
  top: -510px;
}

#person {
  position: relative;
  top: -94px;
  left: 270px;
}

#envelope {
  position: relative;
  top: -94px;
  left: 600px;
}

#cursor {
  position: relative;
  top: -94px;
  left: 935px;
}

#file {
  position: relative;
  top: 138px;
  left: -481px;
}
</style>