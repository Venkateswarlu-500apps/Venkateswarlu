<template>
 <div>
     <h1>Checking the Type of Object is String</h1>
     <b-button @click="check" variant="info">Click</b-button><br><br>
     <b>Answer: {{s2}}</b>
 </div>
</template>

<script>
export default {
    name:'VenkY',
    data(){
        return{
            s1:"Mantra Technologies",
            s2:' '
        }
    },
    methods:{
        check(){
            this.s2= "It is"+" "+typeof this.s1
        }
    }
}
</script>