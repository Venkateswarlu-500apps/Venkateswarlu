<template>
  <div style="background-color: powderblue">
    <nav class="navbar navbar-expand-lg fixed-top row" variant="info">
      <center><h1>Note</h1></center>
    </nav>
    <br />
    <br /><marquee width="400" style="color: green"
      ><b>*Welcome to the Note-Pad*</b></marquee
    >
    <br /><br />
    <!-- Sign Up Form -->
    <b-container class="w-25">
      <b-card
        header="Enter Your Details"
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="secondary"
        bg-variant="info"
        border-variant="dark"
        style="height: 20rem"
      >
        <b-form @submit="signUp">
          <b-row
            ><b-col align="left"> <b>UserName:</b></b-col></b-row
          ><b-form-input
            type="text"
            id="User-Name"
            v-model="UserDetails.UserName"
            class="UN"
            placeholder="UserName"
            required
          ></b-form-input
          ><br />
          <b-row
            ><b-col align="left"><b>Password:</b></b-col></b-row
          ><b-form-input
            type="password"
            id="User-Password"
            v-model="UserDetails.Password"
            class="UP"
            placeholder="Password"
            required
          ></b-form-input
          ><br /><br />

          <b-button type="submit" variant="success" @click="signUp()">
            Sign Up
          </b-button>
        </b-form>
      </b-card>
    </b-container>
    <div style="margin-top: 390px">
      <p>Copyright 1999-2022 by V Technologies. All Rights Reserved.</p>
      <center>
        <b-card bg-variant="danger" style="max-width: 25rem; height: 4rem"
          ><b-icon
            icon="chat-left-text"
            variant="warning"
            scale="2"
            shift-h="-20"
            shift-v="-4"
          ></b-icon
          ><b>Powered by V Technologies Pvt.Ltd</b> <b-icon icon="fade"></b-icon
        ></b-card>
      </center>
    </div>
  </div>
</template>


<script>
export default {
  name: "SignUp",
  data() {
    return {
      UserDetails: {
        UserName: "",
        Password: "",
      },
    };
  },
  methods: {
    // <!-- Sign Up Function -->
    signUp() {
      // <!-- Validation -->
      if (this.UserDetails.UserName && this.UserDetails.Password) {
        alert("Sign Up Succesfully");
        this.$router.push("/Home");
        //window.location.assign("http://localhost:8080/#/Home");
      } else {
        alert("Please fill the below details");
      }

      // <!-- Cookies -->
      this.UserDetails.UserName = document.getElementById("User-Name").value;
      this.UserDetails.Password =
        document.getElementById("User-Password").value;
      var today = new Date();
      var expire = new Date();
      expire.setTime(today.getTime() + 3600000 * 24 * 15);
      document.cookie =
        "username=" +
        this.UserDetails.UserName +
        ";path=/" +
        ";expires=" +
        expire.toUTCString();

      document.cookie =
        "password=" +
        encodeURI(this.UserDetails.Password) +
        ";path=/" +
        ";expires=" +
        expire.toUTCString();

      // <!-- Local Storage -->
      localStorage.setItem(
        "UserName",
        JSON.stringify(this.UserDetails.UserName)
      );
      localStorage.setItem(
        "Password",
        JSON.stringify(this.UserDetails.Password)
      );

      // <1-- Session Storage -->
      sessionStorage.setItem(
        "UserName",
        JSON.stringify(this.UserDetails.UserName)
      );
      sessionStorage.setItem(
        "Password",
        JSON.stringify(this.UserDetails.Password)
      );
    },
  },
};
</script>

<style scoped>
nav {
  display: block;
  background-color: slategrey;
  color: aliceblue;
}
</style>