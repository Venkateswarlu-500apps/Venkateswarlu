<template>
  <div>
    <SideBar></SideBar><br /><br />
    <b-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp5vyJ547bs1rO66BLtMiX7r-2YtGavG7hha1xcX5nOpsYmmw-t7Bw9yRGUBb1hwYJQI&usqp=CAU"
      width="1000"
      height="700"
      alt="placeholder"
    ></b-img>
    <h1>
      <a href="#"><u>Welcome to Vue Products</u></a>
    </h1>
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
    return {};
  },
};
</script>
