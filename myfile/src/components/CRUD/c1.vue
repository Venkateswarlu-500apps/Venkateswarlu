<template>
<div>
<center>
<contactchild
:columns="['Name', 'mobile_number', 'countryname']"
:form-fields="{ Name: '',mobile_number:'',country:'' }"
@user_data="user_dataa"
>
<b-card>{{contactchild}}</b-card>
<template v-slot:input-fields="{ formdata }">
Name:
<b-form-input id="input-1" v-model="formdata.Name" required placeholder="Enter name"></b-form-input>
<br />mobile_number:
<b-form-input
id="value"
placeholder="Enter Mobile Number"
v-model="formdata.mobile_number"
required
></b-form-input>
<br />countryname:
<b-form-select text="countryname" v-model="formdata.countryname" :options="getNames"></b-form-select>
</template>
</contactchild>
</center>login users data
<div v-if="user_data.length">
<b-card style="max-width: 20rem;" :key="index" v-for="(data, index) in user_data">
Name: {{Name=data.Name}}
<br />
Mobile: {{data.mobile_number}}
<br />
Country: {{data.countryname}}
</b-card>
</div>
</div>
</template>
<script>
const { getNames } = require("country-list");
import contactchild from "./contactchild.vue";
export default {
name: "contact_parent",
components: { contactchild },
computed: {
getNames
},
data() {
return {
Name: "",
mobile_number: " ",
country: "",
user_data: []
};
},
methods: {
user_dataa(data) {
this.user_data = data;
console.log("4589964126", data);
}

}

};

</script>