<template>
  <div>
    <b-nav id="top" class="navbar navbar-expand-lg fixed-top row">
      <b-button v-b-toggle.sidebar id="side" variant="light"
        ><b-icon
          icon="text-indent-right"
          variant="dark"
          scale="2"
          shift-v="-1.3"
        ></b-icon
      ></b-button>
      <h1 id="head">ROOT</h1>
      <b-icon icon="chevron-down" scale="1.5" shift-h="1660"></b-icon>
    </b-nav>
    <b-sidebar id="sidebar" bg-variant="dark" text-variant="light" shadow>
      <img
        class="image"
        src="https://avatars.githubusercontent.com/u/6128107?s=280&v=4"
        width="60"
        height="60"
      />
      <h2 id="title"><b>Logistics</b></h2>
      <br /><br />
      <b-button-group vertical id="group">
        <b-button squared size="lg" variant="dark" @click="Home"
          ><b-icon
            icon="house-door-fill"
            variant="secondary"
            shift-h="-19"
          ></b-icon
          >Home</b-button
        ><br />
        <b-button squared size="lg" variant="dark" @click="Product"
          ><b-icon icon="grid-fill" variant="secondary" shift-h="-6"></b-icon
          >Product<b-icon
            icon="chevron-up"
            variant="secondary"
            shift-h="40"
          ></b-icon></b-button
        ><br />
        <b-button squared size="lg" variant="dark">Inventory</b-button>
      </b-button-group>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {};
  },
  methods: {
    Home() {
      this.$router.push("/ProductHome");
    },

    Product() {
      this.$router.push("/Product");
    },
  },
};
</script>

<style>
#side {
  position: relative;
  left: 10px;
}
#group {
  top: 100px;
  width: 319px;
  border-radius: 1px;
}
#top {
  background-color: whitesmoke;
}
#head {
  position: relative;
  left: 1650px;
  top: 4px;
}
.image {
  position: fixed;
  left: 45px;
  top: 30px;
}
#title {
  position: fixed;
  left: 105px;
}
</style>