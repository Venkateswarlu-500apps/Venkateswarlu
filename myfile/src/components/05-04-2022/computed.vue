<template>
    <div>
        <h1>Computed Properties</h1>
        <b-button v-on:click="a++" variant="success">Add to A</b-button>&nbsp;
        <b-button v-on:click="b++" variant="success">Add to B</b-button><br><br>
        <b-button v-on:click="a--" variant="danger">Remove to A</b-button>&nbsp;
        <b-button v-on:click="b--" variant="danger">Remove to B</b-button><br><br>
        <b-container>
        <b-card>
        <p>A-Value:{{a}}</p>
        </b-card>
        <b-card>
        <p>B-Value:{{b}}</p>
        </b-card>
        <b-card>
        <p>AB-Value:{{ab}}</p>
        </b-card>
        <b-card>
        <p>A-Age:{{AddtoA}}</p>
        </b-card>
        <b-card>
        <p>B-Age:{{AddtoB}}</p>
        </b-card>
        <b-card>
        <p>AB-Age:{{AddtoAB}}</p>
        </b-card>
        </b-container>
    </div>
</template>
<script>

export default{
    name:'VenkY',
        data(){
        return{
            a:0,
            b:0,
          age:20,
        }
    },
    methods:{
    //   ab(){
    //    return this.a+this.b
    //   },
    //   AddtoA(){
    //       return this.age+this.a
    //   },
    //   AddtoB(){
    //       return this.age+this.b
    //   },
    //   AddtoAB(){
    //       return this.age+this.a+this.b
    //   }
    },
    computed:{
        ab(){
       return this.a+this.b
      },
      AddtoA(){
          return this.age+this.a
      },
      AddtoB(){
          return this.age+this.b
      },
      AddtoAB(){
          return this.age+this.a+this.b
      }
    }
   
}
</script>
