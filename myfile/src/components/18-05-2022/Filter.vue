<template>
<div>
    <input type="text" v-model="res">&nbsp;
    <b-button type="submit" @click="filter">Click</b-button>&nbsp;
    <b-button type="submit" @click="filter1">Click1</b-button>&nbsp;
    <b-button type="submit" @click="filter2">Click2</b-button>
</div>
</template>

<script>
export default {
    name:'FilterFilter',
    data(){
        return{
            cars:["Benz", "BMW", "Audi", "Volks", "Jaquar", "Suzuki", "Tesla", "RR", "Ferrari"],
            arr:[10,20,30,40,50,60,70,80,90,100],
            name:[{id:1177,name:"Venky"},
            {id:1176,name:"Teja"},
            {id:1178,name:"Krishnaiah"},
            {id:1175,name:"Mahesh"},
            {id:1185,name:"Abhi"}],
            res:" "
        }
    },
    methods:{
        filter(){
            let value=this.cars.filter(name => { 
                return name.includes();
            });
            console.log(value)
        },
        filter1(){
            this.res=this.arr.filter(val =>{
                console.log(val*10);
            });
        },
        filter2(){
            this.res=this.name.filter(nam =>{
                console.log(nam);
            });
            return this.res
        }
    }

}
</script>