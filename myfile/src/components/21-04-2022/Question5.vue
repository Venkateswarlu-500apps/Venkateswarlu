<template>
    <div>
        <h1>SELF INVOKABLE FUNCTION</h1>
        <button @click="fun()">Click</button>
    </div>
</template>
<script>
export default{
    name:'VenkY',
    data(){
        return{
         firstname:"Mantra",
         secondname:"technologies",
         fullname:""
        }
    },
    methods:{
        fun(){
            this.fullname=this.firstname+""+this.secondname;
            document.write(this.fullname);
        }
        
    } 
}
</script>
