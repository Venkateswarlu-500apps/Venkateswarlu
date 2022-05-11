<template>
    <div>
        <h1><b>Product Details</b></h1>
        <center>
        <b-modal v-model="modalShow" :title="Title" hide-footer>

        <b-form class="w-50">

        Product Name:<b-form-input type="text" v-model="ProductName" placeholder="Enter Your Product Name"></b-form-input>

        Price:<b-form-input type="text" v-model="Price" placeholder="Enter Your Price"></b-form-input>

        Product Category:<b-form-input type="text" v-model="ProductCategory" placeholder="Enter Your Product Category"></b-form-input><br><br>

        <!-- <slot :formdata="editedItem" name="input-fields"> </slot> -->

        <b-button type="submit" variant="success" @click="table()">Add</b-button>

        </b-form><br><br>
        </b-modal>

        <b-card class="w-75">

        <b-table striped hover :items="res" :fields="fields">

        <template #cell(action)="data">

        <b-button @click="Edit(data.item)" variant="info">Edit</b-button>
        
        </template>
        </b-table>
        </b-card>
        </center>

    </div>
</template>
<script>

export default{
    name:'VenkY',
    data(){
        return{
            fields:['ProductName','Price','ProductCategory','Action'],
            res:[{ProductName:" ",Price:" ",ProductCategory:" "}],
            ProductName:" ",
            Price:" ",
            ProductCategory:" ",

            editedItem: this.fields,
            modalShow: false,
            editedIndex: -1,
            tableData: []
        }
    },
    methods:{
        table(){
            this.res.push({ProductName:this.ProductName, Price:this.Price, ProductCategory:this.ProductCategory});
            this.ProductName=" ",
            this.Price=" ",
            this.ProductCategory=" "
        },

        Edit(item) {
            this.modalShow = true;
            this.editedIndex = this.tableData.indexOf(item);
            this.editedItem = Object.assign({}, item);
        },
    },

    computed: {
    Title() {
      return this.editedIndex === -1 ? "New Item" : "Old Item";
    },
  },
}
</script>
