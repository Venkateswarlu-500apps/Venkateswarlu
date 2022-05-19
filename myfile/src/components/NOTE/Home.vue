<template>
  <div>
      <center>
      <b-form class="w-50">
          Title:<b-form-input></b-form-input>
          Content:<b-form-textarea></b-form-textarea>
      </b-form><br>
      </center>
      <b-button type="submit" @click="newPad" variant="success"><b>+</b></b-button>&nbsp;
      <b-button type="submit" @click="savePad" variant="primary">Save</b-button>&nbsp;
      <b-button type="submit" @click="deletePad" variant="danger">Delete</b-button>
  </div>
</template>

<script>
export default {
    name:"HomePage",
    data(){
        return{
            page:[ ],
            pageNo:0
        }
    },
    methods:{
        newPad(){
            this.page.push({
                Title:' ',
                Content:' '
            })
            this.pageNo = this.page.length - 1
        },
        changePad(pageNo){
            this.pageNo = pageNo
        },
        savePad(){

        },
        deletePad(){
            this.page.splice(this.pageNo,1)
            this.pageNo = Math.max(this.index -1, 0)
        }
       
    }
}
</script>

<style>

</style>