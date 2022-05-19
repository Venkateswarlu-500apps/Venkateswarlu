<template>
  <div>
      <nav class="navbar navbar-expand-lg fixed-top row" variant="info"><center><h1>Note</h1></center></nav><br>
    <b-container class="w-25">
      <b-card
        header="Enter Your Details"
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="secondary"
        bg-variant="info"
        border-variant="dark" style="height:300px"
      >
        <b-form>
          <b-form-input
            type="text"
            id="User-Name"
            v-model="UserDetails.UserName"
            placeholder="UserName"
            required
          ></b-form-input
          ><br />
          <b-form-input
            type="password"
            id="User-Password"
            v-model="UserDetails.Password"
            placeholder="Password"
            required
          ></b-form-input
          ><br />
          <b-button type="submit" variant="success" @click="signUp">
            Sign Up
          </b-button>
<!-- <router-link class-active="active" to="/Home">
          
</router-link> -->
        </b-form>
      </b-card>
    </b-container>
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
    signUp() {
      this.UserDetails.UserName = document.getElementById("User-Name").value;
      this.UserDetails.Password = document.getElementById("User-Password").value;
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

        localStorage.setItem("UserName",this.UserDetails.UserName);
        localStorage.setItem("Password",this.UserDetails.Password);

        sessionStorage.setItem("UserName", this.UserDetails.UserName);
        sessionStorage.setItem("Password",this.UserDetails.Password);
    },


  },
};
</script>
<style scoped>
nav {
  display: block;
  background-color:slategrey;
  color: aliceblue;
}
</style>
