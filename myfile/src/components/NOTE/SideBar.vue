<template>
  <div>
    <!-- Nav Bar -->
    <nav class="navbar navbar-expand-lg fixed-top row">
      <center><h1>Note</h1></center>
      <b-avatar variant="info" id="avatar"></b-avatar>
      <div>
        <!-- Side Bar Button -->
        <b-button
          v-b-toggle.sidebar-1
          class="float-left"
          id="sidebar"
          variant="outline-secondary"
        >
          <b-icon
            icon="justify"
            variant="light"
            class="float-left"
            scale="4"
            shift-v="1"
            shift-h="8"
          ></b-icon>
        </b-button>

        <!-- Side Bar -->
        <b-sidebar id="sidebar-1" bg-variant="dark" text-variant="light">
          <b-button-group vertical id="my">
            <!-- Save All Button -->
            <b-button
              type="button"
              squared
              variant="outline-light"
              size="lg"
              @click="saveAll()"
              >Save All</b-button
            ><br />

            <!-- Clear All Button -->
            <b-button
              type="button"
              squared
              variant="outline-light"
              size="lg"
              @click="clearAll()"
              >Clear All</b-button
            ><br />

            <!-- Log Out Button -->
            <b-button
              type="button"
              squared
              variant="outline-light"
              size="lg"
              @click="logOut()"
              >Log Out</b-button
            >
          </b-button-group>
        </b-sidebar>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  components: {},
  data() {
    return {

    };
  },
  methods: {
    logOut() {
      this.$router.push("/Login");
    },
    clearAll() {
      this.$emit("clear");
    },
    saveAll() {
      this.$emit("save");
      alert("Opening");
    },
    over() {
     
    }
  },
};
</script>

<style scoped>
nav {
  display: block;
  background-color: slategrey;
  color: aliceblue;
  height: 70px;
}
#sidebar {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 70px;
  width: 70px;
  border-color: slategray;
}
#my {
  top: 30px;
  width: 319px;
  border-radius: 1px;
}
#avatar {
  position: fixed;
  top: 13px;
  right: 15px;
}
</style>