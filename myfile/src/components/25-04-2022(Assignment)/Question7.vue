<template>
    <div>
        <h1>Finding the Index of Id:88</h1>
        <button type="submit" @click="fun()">Click</button><br>
                      {{"The Index of Id is:"+" "+res}}
    </div>
</template>
<script>
export default{
    name:'VenkY',
    data(){
        return{
            users:[{id: 20, name: 'Captain Piett' },
                  { id: 24, name: 'General Veers' },
                  { id: 56, name:'Admiral Ozzel' }, 
                  { id: 88, name: 'Commander Jerjerrod'}],
            res:"",
        }
    },
    methods:{
        fun(){
            this.res=this.users.findIndex(row=>
            row.id==88)
            return this.res
        }
    }
}
</script>
