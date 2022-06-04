<template>
    <div>
        <h1>Question9</h1>
        <button @click="fun()">Click</button><br><br>
        Sum:{{res}}
    </div>
</template>
<script>

export default{
    name:'VenkY',
    data(){
        return{
            res:" "
        }
    },
    methods:{
        fun(){
            function array_sum(a1,a2){
            var a = 0;
            var b = 0;
            var result = [ ]
            if(a1.length === 0)
            return "a1 is Empty";

            if(a2.length === 0)
            return "a2 is Empty";

            while(a < a1.length && a < a2.length)
            {
                result.push(a1[a] + a2[a]);
                a++;
            }
            if(a === a1.length)
            {
                for (b = a; b < a2.length; b++){
                    result.push(a2[b]);
                }
            }
            else
            {
                for (b = a; b < a1.length; b++){
                    result.push(a1[b]);
                }
            }
            return result;
            }
          this.result=(array_sum([1,0,2,3,4],[3,5,6,7,8,13]));
          return this.res=this.result
        }
        
    },
}
</script>
