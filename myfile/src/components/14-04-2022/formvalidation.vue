<template>
    <div>
    <form name="form" @submit="fun()" >
            <label type="text">FirstName:</label>
            <input  type="text" name="fname" placeholder="Enter your FName" required><br><br>

            <label type="text">LastName:</label>
            <input type="text" name="lname" placeholder="Enter your LName" required><br><br>

            <label type="text">EnterPassword:</label>
            <input type="password" name="Epassword" placeholder="Enter your Password" required><br><br>

            <label type="text">ConfirmPassword:</label>
            <input type="password" name="Cpassword" placeholder="Enter your ConfirmPassword" required><br><br>

            <label type="text">Email:</label>
            <input type="Email" name="Email" placeholder="Enter your Email" required>

            <input type="submit" value="Login" /><br><br>
            
        </form>
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
    document.write("First Name:"+document.form.fname.value+"</br> "+"Last Name:"+document.form.lname.value+
"<br>"+"Password:"+document.form.Epassword.value+"<br>"+"CPassword:"+document.form.Cpassword.value+"<br>"+"Email:"+document.form.Email.value);
    }
}     
     }   
</script>
