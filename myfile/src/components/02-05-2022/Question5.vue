<template>
    <div>
        <h1>Question5:Join All Elements of the Following Array into a String</h1>
        <button @click="fun()">Click</button><br><br>
        {{res}}<br><br>
        {{res1}}<br><br>
        {{res2}}
    </div>
</template>
<script>

export default {
    name:'VenkY',
    data(){
        return{
          myColors:["Red", "Green", "White", "Black"],
          res:" ",
          res1:" ",
          res2:" "
        }
    },
    methods:{
        fun(){
          this.res=this.myColors.toString();
          this.res1=this.myColors.join(" ");
          this.res2=this.myColors.join('+')
        }
    }
}
</script>
