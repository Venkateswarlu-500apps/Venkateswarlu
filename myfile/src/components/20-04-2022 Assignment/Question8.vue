<template>
    <div>
        <center>
        <h1>b-table</h1>
       <b-table :items="items" class="w-50">
       </b-table>
        </center>
    </div>
</template>

<script>
export default {
    name:'VenkY',
    data(){
        return{
            items:[
                {"email": "Eliseo@gardner.biz","id": 1,"name": "id labore ex et quam laborum"},
                {"email": "Jayne_Kuhic@sydney.com","id": 2,"name": "quo vero reiciendis velitsimiliqueearum"},
                {"email": "Nikita@garfield.biz","id": 3,"name": "odio adipisci rerum aut animi"},
                {"email": "Lew@alysha.tv","id": 4,"name": "alias odio sit"}
            ]
        }
    }
}
</script>
