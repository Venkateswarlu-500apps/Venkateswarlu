<template>
 <div>
  <b-button>Button</b-button>
  <b-button variant="danger">Danger</b-button>
  <b-button variant="success">Success</b-button>
  <b-button variant="outline-primary">Button</b-button><br> <br>

  <b-button variant="primary">Primary</b-button>
  <b-button variant="secondary">Secondary</b-button>
  <b-button variant="success">Success</b-button>
  <b-button variant="danger">Danger</b-button>
  <b-button variant="warning">Warning</b-button>
  <b-button variant="info">Info</b-button>
  <b-button variant="light">Light</b-button>
  <b-button variant="dark">Dark</b-button><br><br>

<h2>Hotel Menu</h2>
  <b-button-group>
    <b-button>Button</b-button>
    <b-dropdown right text="Menu">
      <b-dropdown-item>Rice</b-dropdown-item>
      <b-dropdown-item>Biryani</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Tiffin</b-dropdown-item>
    </b-dropdown>
    <b-dropdown right split text="Split Menu">
      <b-dropdown-item>Lemon Rice</b-dropdown-item>
      <b-dropdown-item>Chicken</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Dosa</b-dropdown-item>
    </b-dropdown>
  </b-button-group>
  <br><br>
  <h4>Table</h4>
   <b-table striped hover :items="items"></b-table>
 </div>  
</template>

<script>
        
export default{
    name:'HellO',
    data(){
        return{
    
        items: [
          { table_no: 1, orederd_item: 'Chicken Birayni', Bill: '250' },
          { table_no: 2, orederd_item: 'Lemon Rice', Bill: '50' },
          { table_no: 3, orederd_item: 'Dosa', Bill: '30' },
          { table_no: 4, orederd_item: 'Rice', Bill: '50' }
        ]
        }
    }
}
</script>

