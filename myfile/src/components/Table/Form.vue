<template>
  <div>
    <Table
      :columns="['id', 'product', 'sku', 'type', 'quality', 'operation']"
      :form-fields="{ id: '', product: '', sku: '', type: '', quality: '' }"
    >
      <!-- your form input fields in this slot-->
      <template v-slot:input-fields="{ formdata }">
        <label><b>Id:</b></label>
        <b-form-input
          type="number"
          v-model="formdata.id"
          placeholder="Id"
          required
        ></b-form-input
        ><br />
        <label><b>Product:</b></label>
        <b-form-input
          type="text"
          v-model="formdata.product"
          placeholder="Product"
          required
        ></b-form-input
        ><br />
        <label><b>Sku:</b></label>
        <b-form-input
          type="text"
          v-model="formdata.sku"
          placeholder="Sku"
          required
        ></b-form-input
        ><br />
        <label><b>Type:</b></label>
        <b-form-input
          type="text"
          v-model="formdata.type"
          placeholder="Type"
          required
        ></b-form-input
        ><br />
        <label><b>Quality:</b></label>
        <b-form-input
          type="number"
          v-model="formdata.quality"
          placeholder="Quality"
          required
        ></b-form-input>
      </template>
    </Table>
  </div>
</template>
 
<script>
import Table from "./Table.vue";

export default {
  name: "FormData",
  components: { Table },
};
</script>