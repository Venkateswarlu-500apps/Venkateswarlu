<template>
  <div
    style="background-color: turquoise; padding-bottom: 900px"
    id="resolution"
  >
    <br />
    <center>
      <!-- New Note-Pad Opening in Card-->
      <b-card
        v-for="i in note"
        :key="'dyn-note-' + i"
        :header="'Note-Pad:-' + i"
        class="w-50 text-left"
        bg-variant="success"
        border-variant="dark"
        header-bg-variant="dark"
        header-text-variant="white"
        @show="resetTab"
        @hidden="resetTab"
      >
        <!-- Close Button -->
        <b-button
          variant="dark"
          class="float-right"
          @click="closeNote(i)"
          id="close"
          ><b-icon
            icon="x-circle"
            scale="1.5"
            variant="danger"
            @click="close(i)"
            shift-h="-6.5"
            shift-v="2"
          ></b-icon
        ></b-button>

        <!-- Note Form -->
        <b-form @submit="saveNote" class="Note">
          <b>Title:</b
          ><b-form-input
            type="text"
            id="title"
            v-model="title"
            placeholder="Title"
            required
          ></b-form-input
          ><br />
          <b>Content:</b
          ><b-form-textarea
            type="text"
            id="content"
            v-model="content"
            placeholder="Type here your content"
            required
          ></b-form-textarea
          ><br />
          <b-form-file
            accept=".jpg, .png, .gif"
            v-model="file"
            plain
          ></b-form-file>

          <!-- Save Button -->
          <b-button
            type="submit"
            @click="
              saveNote();
              closeNote(i);
            "
            variant="dark"
            id="save"
            class="float-right"
          >
            <b-icon
              icon="check-square"
              scale="1.5"
              variant="primary"
              class="float-right"
              shift-v="1.5"
              shift-h="6"
            ></b-icon
          ></b-button>
        </b-form>
      </b-card>
    </center><br>

    <!-- New Form Adding Button -->
    <b-button type="submit" id="mybutton" variant="success" @click="newNote">
      <b-icon icon="plus-lg" variant="light" scale="2.5"></b-icon
    ></b-button>

    <!-- Using Emit for Child to Parent & Imported Side Bar  -->
    <SideBar @clear="clearAll()" @save="saveAll()"></SideBar>

      <h3>{{ notedTitle }}</h3><br />
      <h3>{{ notedContent }}</h3>
  
  </div>
</template>


<script>
import SideBar from "./SideBar.vue";
export default {
  name: "HomePage",
  components: {
    SideBar,
  },
  Props: {},
  data() {
    return {
      title: "",
      content: "",
      note: [],
      noteNo: 0,
      notedTitle: "",
      notedContent: "",
      file: "",
    };
  },
  methods: {
    // <!-- Note Close Function -->
    closeNote(x) {
      for (let i = 0; i < this.note.length; i++) {
        if (this.note[i] === x) {
          this.note.splice(i, 1);
        }
      }
    },

    // <!-- New Note Function -->
    newNote() {
      this.note.push(this.noteNo++);
    },

    // <!-- Save Note Function -->
    saveNote() {
      // <!-- Saving in Local Storage -->

      localStorage.setItem("Title", JSON.stringify(this.title));
      localStorage.setItem("Content", JSON.stringify(this.content));
      localStorage.setItem("File", JSON.stringify(this.file));

      // <!-- Saving in Session Stotage -->
      sessionStorage.setItem("Title", JSON.stringify(this.title));
      sessionStorage.setItem("Content", JSON.stringify(this.content));
    },
    saveAll() {
      this.notedTitle = "Title:" + JSON.parse(localStorage.getItem("Title"));
      this.notedContent = "Content:" + JSON.parse(localStorage.getItem("Content"));

      return this.notedTitle && this.notedContent;
    },

    clearAll() {
      this.notedTitle = localStorage.removeItem("title");
      this.notedContent = localStorage.removeItem("content");

      return this.notedTitle && this.notedContent;
    },

    resetTab() {
      this.title= '',
      this.content= ''
    }
  },
};
</script>



<style>
#mybutton {
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border-color: rgb(7, 7, 7);
}
#close {
  position: relative;
  bottom: 60px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
#save {
  position: relative;
  bottom: 292px;
  width: 30px;
  height: 30px;
  right: 40px;
}
#resolution {
  position: relative;
}
</style>


