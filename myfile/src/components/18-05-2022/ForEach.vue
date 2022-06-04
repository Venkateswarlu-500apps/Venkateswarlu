<template>
<div>
    <b-button type="submit" @click="foreach">Click</b-button>&nbsp;
    <b-button type="submit" @click="foreach1">Click1</b-button>&nbsp;
    <b-button type="submit" @click="foreach2">Click2</b-button>
</div>
</template>

<script>
export default {
    name:'ForEach',
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
        foreach(){
            this.res=this.cars.forEach(name => { 
                console.log(name+" "+"super");
            });
        },
        foreach1(){
            this.res=this.arr.forEach(val =>{
                console.log(val*10);
            });
        },
        foreach2(){
            this.res=this.name.forEach(nam =>{
                console.log(nam);
            });
            return this.res
        }
    }
}
</script>