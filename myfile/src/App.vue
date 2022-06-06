<template>
  <div id="app">
    
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>!-->
    <router-view/>
    <!-- <emitchild/> -->
    <!--<Btable/>!-->
    <!--<Que1/>!-->
    <!-- <Props msg="hello" name="venkat" number="09775"></Props> -->
    <!-- <Ref ref="name" name="venkat">{{name}}</Ref> -->

  <!-- <question-5/>     -->
    <!-- <button @click="fun1()">click</button> -->
    <!--<props :msg="message" :name="name" /> -->
    <!-- <b5/> -->
   
  </div>
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue'
//import demo1 from "./components/demo1.vue"
//import bcard from './components/bcard.vue'
//import Button from './components/Button.vue'
//import FirstQuestion from './components/FirstQuestion.vue'
//import class1 from './components/class1.vue'
// import Btable from './components/Btable.vue'
//import Que1 from './components/13-04-2022/1stV-for.vue'
// import Emitchild from './components/18-04-2022/emitchild.vue'
// import Props from './components/18-04-2022/Props.vue'
// import Ref from './components/18-04-2022/Ref.vue'

//import Question5 from './components/21-04-2022/Question5.vue';
//import Props from "./components/25-04-2022(Assignment)/Question3C.vue";
//import b5 from '../src/components/26-04-2022(Assignment)/Question5.vue'



export default {
  name: 'App',
  
  data(){

    return{
      // msg:"hello",
      // name:"Venkat",
      // number:"0987654"
    }
  },
  components: {
    
    //HelloWorld,
    //bcard,
    //Button,
    //FirstQuestion,
    //class1,
    //Btable,
    //Que1,
    // Emitchild,
    //Props,
    //Ref,
    //self
    //Question5
    //b5


  },
  methods:{
    fun1(){
      this.$refs.name.fun().name;
      console.log(parent);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
