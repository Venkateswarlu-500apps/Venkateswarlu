<template>
    <div>
        <h1>Question-1:Comparing Two Strings and Confirm whether they both contain Same Letters</h1>
        <b-button @click="check()" variant="success">Click</b-button><br><br>
     <b>Answer:{{s3}}</b>
    </div>
</template>
<script>

export default {
    name:'VenkY',
    data(){
        return{
            s1:"Life",
            s2:"File",
            s3:' '
        }
    },
    methods:{
        check(){
            this.s3 = 
            this.s1.length === this.s2.length && 
            this.s1.split("Life").sort().join() == this.s2.split("File").sort().join();
        }
    }
}
</script>

