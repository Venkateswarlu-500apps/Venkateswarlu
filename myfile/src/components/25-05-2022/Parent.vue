<template>
  <div>
<ParentC :name="name" :number="number" :email="email" :items="items"></ParentC>
  </div>
</template>

<script>
import ParentC from './PropsC.vue'
export default {
    name:'ParentAll',
    components: {
        ParentC
    },
    data(){
        return{
         name:"Name: Venkateswarlu",
         number:1177,
         email:"Email: venkateswarlu.tiruveedula@500apps.com",
         items:[
             {name: "500apps", id: 1},
             {name: "Agile", id: 2},
             {name: "CRM", id: 3}
         ]
        }
    },
    methods:{

    }
}
</script>

<style>

</style>