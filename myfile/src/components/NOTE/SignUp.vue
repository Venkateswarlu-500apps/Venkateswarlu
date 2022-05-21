<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top row" variant="info">
      <center><h1>Note</h1></center>
    </nav>
    <br />
    <b-container>
      <b-card
        header="Enter Your Details"
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="secondary"
        bg-variant="info"
        border-variant="dark"
      >
        <b-form @submit.prevent="signUp">
          <b-form-input
            type="text"
            id="User-Name"
            v-model="UserDetails.UserName"
            class="UN"
            placeholder="UserName"
            required
          ></b-form-input
          ><br />
          <b-form-input
            type="password"
            id="User-Password"
            v-model="UserDetails.Password"
            class="UP"
            placeholder="Password"
            required
          ></b-form-input
          ><br />
          <b-button
            type="submit"
            variant="success"
            @click="signUp"
            v-b-modal.open
          >
            Sign Up
          </b-button>
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

      // localStorage.setItem("UserName", JSON.stringify(this.UserDetails.UserName));
      // localStorage.setItem("Password", JSON.stringify(this.UserDetails.Password));

      // sessionStorage.setItem("UserName", JSON.stringify(this.UserDetails.UserName));
      // sessionStorage.setItem("Password", JSON.stringify(this.UserDetails.Password));

      Array.from(document.getElementsByClassName("UN")).forEach(function (
        element
      ) {
        element.addEventListener("click", (e) => {
          // retrieve current cart if it exists. If it doesn't create an empty cart
          //this.UserDetails.UserName = JSON.parse(localStorage.getItem("UserName")) || [];
          //this.UserDetails.Password = JSON.parse(localStorage.getItem("Password")) || [];

          let newItem = {
            UserName: e.target.dataset.UserName,
            Password: e.target.dataset.Password,
          };
          this.UserDetails.UserName.push(newItem);
          this.UserDetails.Password.push(newItem);

          localStorage.setItem(
            "UserName",
            JSON.stringify(this.UserDetails.UserName)
          );
          localStorage.setItem(
            "Password",
            JSON.stringify(this.UserDetails.UserName)
          );
        });
      });
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