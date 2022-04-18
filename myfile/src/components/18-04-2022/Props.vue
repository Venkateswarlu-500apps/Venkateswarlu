<template>
  <div>
    <h3>This is props child</h3>
    <h1>message:{{ msg }}</h1>
    <h1>name:{{ name }}</h1>
    <h1>number:{{ number }}</h1>
  </div>
</template>
<script>
export default {
    name:"PropS",
            props:{
                msg:String,
                name:String,
                number:{
                default:1234345,
                type:Number
                },
            }
        }
</script>
