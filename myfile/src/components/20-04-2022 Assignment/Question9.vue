<template>
    <div>
        <center>
        <h1>b-form</h1>
        <b-form name="form" @submit="fun()">
        
        NAME:<b-form-input type="text"  name="name" placeholder="Enter Your Name" required class="w-25"></b-form-input><br><br>

        EMAIL:<b-form-input type="email"  name="email" placeholder="Enter Your Email" required class="w-25"></b-form-input><br><br>

        Age:<b-form-input type="number"  name="number" placeholder="Enter Your Age" required class="w-25"></b-form-input><br><br>

        Contact Number:<b-form-input type="number"  name="Cnumber" placeholder="Enter Your Number" required class="w-25"></b-form-input><br><br>

        <b-button type="submit" variant="primary" value="Login">Submit</b-button>

        </b-form>
        </center>
    </div>
</template>

<script>
export default{
    name:'VenkY',
    data(){
        return{
        }
    },
    methods:{
        fun(){
        document.write("NAME:"+"&nbsp"+document.form.name.value+"<br>"+"<br>"+"EMAIL:"+"&nbsp"+document.form.email.value+
        "<br>"+"<br>"+"Age:"+"&nbsp"+document.form.number.value+"<br>"+"<br>"+"Contact Number:"+"&nbsp"+document.form.Cnumber.value);
        }
    }
}
</script>
