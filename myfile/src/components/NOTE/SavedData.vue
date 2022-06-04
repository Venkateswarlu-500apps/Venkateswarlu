<template>
  <div>
      <h1>jkjkjk</h1>
      <!-- <Home ref="refo"></Home>
      <b-button @click="saved()"></b-button>
      <SideBar @save="saved()"></SideBar> -->
  </div>
</template>

<script>
//import Home from './Home.vue'
//import SideBar from './SideBar.vue'
export default {
    name:"SavedData",
    components: {
        //Home, 
        //SideBar
    },
    data(){
     return {

     }
   },
   methods: {
       saved() {
           this.$refs.refo.saveNote();
           alert ("Saved Content is Opening")
       }
   }
}
</script>

<style>

</style>