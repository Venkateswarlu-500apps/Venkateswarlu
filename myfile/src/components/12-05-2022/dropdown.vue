<template>
<div>
    <b-dropdown id="item" text="Menu" variant="info">
        <b-dropdown-item class="my-table">Tiffins</b-dropdown-item>
        <b-dropdown-item>Veg Items</b-dropdown-item>
        <b-dropdown-item>Non-Veg Menu</b-dropdown-item>
    </b-dropdown>
    <b-table striped hover id="my-table" v-for="user in tiffinmenu" :key="user.id"></b-table>
</div>
</template>

<script>
export default {
    name:'VenkY',
    data(){
        return{
            tiffinmenu:[
                {item:'Idly', price:20},
                {item:'Dosa', price:25},
                {item:'Vada', price:30},
                {item:'Bonda', price:30},
                {item:'Puri', price:30},
                {item:'Chapathi', price:35}
            ],
            vegmenu:[
                {item:'Full Meals', price:100},
                {item:'Half Meals', price:50},
                {item:'Lemon Rice', price:40},
                {item:'White Rice', price:30},
                {item:'Curd Rice', price:30},
                {item:'Tomato Rice', price:40}
            ],
            nonvegmenu:[
                {item:'Chicken Biryani', price:150},
                {item:'Chicken Dum Biryani', price:250},
                {item:'Chicken Curry', price:100}
            ]
        }
    }

}
</script>