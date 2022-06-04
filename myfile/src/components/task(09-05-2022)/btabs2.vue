<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab v-for="i in tabs" :key="i" :title="'Form' + i">
          <b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">Close Tab</b-button>
          <b-button v-b-toggle.sidebar-right>Click Here for Form</b-button><br><br>
          <b-sidebar id="sidebar-right" title="Form" align="left" right shadow>
          <div class="px-3 py-2">
          <b-form>
          First Name:<b-form-input type="text" v-model="fname" placeholder="Enter your First Name" required></b-form-input>

          Last Name:<b-form-input type="text" v-model="lname" placeholder="Enter your Last Name" required></b-form-input>
          
          Enter Password:<b-form-input type="password" v-model="Epassword" placeholder="Enter your Password" required></b-form-input>
          
          Confirm Password:<b-form-input type="password" v-model="Cpassword" placeholder="Enter your Confirm Password" required></b-form-input>
          
          Email:<b-form-input type="email" v-model="Email" placeholder="Enter your Email" required></b-form-input><br>
            
           <b-button  type="submit" variant="success" v-on:click="onSubmit()">Submit</b-button>&nbsp;

          <b-button  type="clear" aria-controls="my-table" variant="secondary" @click="clearForm()">Clear</b-button>
          </b-form>
          </div>
          </b-sidebar>
          <b-table stripped hover id="my-table" :items="res" :fields="fields"></b-table>
        </b-tab>
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "VenkY",
  data() {
    return {
      tabs: [],
      tabCounter: 0,
      fields:['Email','FirstName','LastName','EnterPassword','ConfirmPassword'],
      res:[{FirstName:"", LastName:"",Email:"",ConfirmPassword:"",EnterPassword:" "}],
      fname:" ",
      lname:" ",
      Epassword:"",
      Cpassword:"",
      Email:" "
    };
  },
  methods: {
    newTab() {
      this.tabs.push(this.tabCounter++);
    },
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
    onSubmit() {

      this.res.push({Email:this.Email, FirstName:this.fname, LastName:this.lname, EnterPassword:this.Epassword,
      ConfirmPassword:this.Cpassword,})

      this.fname=" ",
      this.lname=" ",
      this.Epassword=" ",
      this.Cpassword=" ",
      this.Email=" "

      this.clearForm();
    },

    clearForm() {
      this.fname=" ",
      this.lname=" ",
      this.Epassword=" ",
      this.Cpassword=" ",
      this.Email=" "
    },
  },
};
</script>
