<template>
  <div>
      {{msg}}
  </div>
</template>

<script>
export default {
    name:'VenkY',
    data(){
        return{
            msg:'one'
        }
    },
    mounted(){
        
        this.msg = 'two';

        this.$nextTick(()=>{
            this.msg = 'three';
        });
    }
}
</script>