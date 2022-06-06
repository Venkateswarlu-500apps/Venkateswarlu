<template>
    <div>
        <h1>Promises</h1>
        <button @click="fun()">click</button>
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
           var promise=new Promise(function(resolve,reject){
               const x="MantraTechnologies";
               const y="MantraTechnologie"
               if(x==y){
                   resolve();
               }
               else{
                   reject();
               }
       });
       promise.
               then(function(){
                 console.log('Success');
               }).
               catch(function(){
                 console.log('Something is Missing');
               });
       }    
   }
}
</script>
