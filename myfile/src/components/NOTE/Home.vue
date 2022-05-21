<template>
  <div>
    <center>
      <b-modal id="modal-lg" size="lg" hide-footer>
        <template #modal-header="{ close }">
          <div class="w-100">
            <h3 class="float-left"><b>Note-Pad</b></h3>
            <b-icon
              icon="x-circle"
              scale="2"
              variant="danger"
              @click="close()"
              class="float-right"
              shift-v="-10"
            ></b-icon>
            <!-- <b-icon
              icon="check-square"
              scale="2"
              variant="success"
              class="float-right"
              shift-v="-10"
              shift-h="-25"
            ></b-icon> -->
          </div>
        </template>
        <b-form>
          <b>Title:</b
          ><b-form-input
            type="text"
            v-model="note.Title"
            placeholder="Title"
          ></b-form-input>

          <b>Content:</b
          ><b-form-textarea
            type="text"
            v-model="note.Content"
            placeholder="Type here your content"
          ></b-form-textarea> </b-form
        ><br />
        <b-button type="submit" @click="savePad" variant="primary"
          >Save</b-button
        > </b-modal
      ><br />
    </center>

    <b-button
      type="submit"
      @click="newPad()"
      v-b-modal.modal-lg
      id="mybutton"
      variant="success"
    >
      <b-icon icon="plus-lg" variant="warning" scale="3"></b-icon
    ></b-button>

    <SideBar />
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
export default {
  name: "HomePage",
  components: {
    SideBar,
  },
  data() {
    return {
      note: {
        Title: "",
        Content: "",
      },
      page: [],

      pageNo: 0,
    };
  },

  methods: {
    newPad() {
      this.page.push(this.pageNo++);

      // this.pageNo = this.page.length - 1;
    },

    changePad(pageNo) {
      this.pageNo = pageNo;
    },

    savePad() {
      localStorage.setItem("Title", JSON.stringify(this.note.Title));
      localStorage.setItem("Content", JSON.stringify(this.note.Content));

      sessionStorage.setItem("Title", JSON.stringify(this.note.Title));
      sessionStorage.setItem("Content", JSON.stringify(this.note.Content));
    },

    close(x) {
      for (let i = 0; i < this.page.length; i++) {
        if (this.page[i] === x) {
          this.page.splice(i, 1);
        }
      }
    },
  },
};
</script>



<style>
nav {
  display: block;
  background-color: slategrey;
  color: aliceblue;
}
#mybutton {
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border-color: rgb(245, 5, 5);
}
</style>