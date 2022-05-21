<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top row">
      <center><h1>Note</h1></center>
      <b-avatar variant="info" id="avatar"></b-avatar>
      <div>
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
        <b-sidebar id="sidebar-1" bg-variant="dark" text-variant="light">
          <b-button-group vertical id="my">
            <b-button type="button" squared variant="outline-light" size="lg"
              >Save All</b-button
            ><br />

            <b-button type="button" squared variant="outline-light" size="lg"
              >Clear All</b-button
            ><br />

            <b-button type="button" squared variant="outline-light" size="lg"
              >Log Out</b-button
            >
          </b-button-group>
        </b-sidebar>
      </div>
    </nav>
    <b-collapse> </b-collapse>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  components: {},
  data() {
    return {
      //active: false
    };
  },
  methods: {
    // mouseover(){
    //     this.active = !this.active;
    // }
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