<template>
    <div>
        <h1>Displaying users list in alphabetical and reverse order in UI </h1>
         <button @click="start()">Alphabatical Order</button><br><br>
         <button @click="runreverse()">Reverse Order</button><br><br>
         {{res}}<br><br>
         {{res1}}
    </div>
</template>
<script>
export default{
    name:'VenkY',
    data(){
        return{
         Users:[{name:'500apps',id:1},
                {name:'Technologies',id:2},
                {name:'Agile',id:3},
                {name:'Mantra',id:4},
                {name:'Clockly',id:5},
                {name:'CRM',id:6},
                {name:'500apps',id:7}],
         field:['name'],
         res:" ",
         res1:" "        
        }
    },
    methods:{
        start(){
        this.res=this.Users.sort((a,b) => (a[this.field] || "").toString().localeCompare((b[this.field] || "").toString()));
        document.write(JSON.stringify(this.res))
        },
        runreverse(){
        this.res1=this.Users.sort((a,b) => (a[this.field] || "").toString().localeCompare((b[this.field] || "").toString()));
        document.write(JSON.stringify(this.res1.reverse()))
        }
    }
}
</script>
