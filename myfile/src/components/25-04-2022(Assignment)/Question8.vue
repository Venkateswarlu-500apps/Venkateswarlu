<template>
    <div>
        <h1>Filtering the Data and Display the Data with the Name:General Veers</h1>
        <button @click="fun()">Click Me</button><br>
                       {{res}}
    </div>
</template>
<script>

export default{
    name:'VenkY',
    data(){
        return{
            officers:[{id: 20, name: 'Captain Piett' }, 
                      { id: 24, name: 'General Veers' }, 
                      { id: 56, name: 'Admiral Ozzel' }, 
                      { id: 88, name: 'Commander Jerjerrod'}],
            res:"",          
        }
    },
    methods:{
        fun(){
            this.res=this.officers.filter(row=>
            row.name=='General Veers')
            return this.res
        }
    }
}
</script>
