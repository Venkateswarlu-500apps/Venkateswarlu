<template>
    <div>
        <h1>Using Es6 Map Function Displaying the Array of Id's for All Users</h1>
        <button @click="fun()">Click Me</button><br>
                       {{res}}
    </div>
</template>
<script>

export default{
    name:'VenkY',
    data(){
        return{
            users:[{ id: 20, name: 'Captain Piett' }, 
                   { id: 24, name: 'General Veers' }, 
                   { id: 56, name: 'Admiral Ozzel' }, 
                   { id: 88, name: 'Commander Jerjerrod' }],
            res:""
        }
    },
    methods:{
        fun(){
            this.res=this.users.map(j=>{return j.id})
            return this.res;
        }
    }
}
</script>