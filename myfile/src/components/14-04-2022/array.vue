<template>
    <div :item="amyArr">
      
    </div>
</template>

<script>
export default{
    name:'VenkY',
    data(){
        return{
        amyArr : [
            {
                name: 'object-1',
                nestedArr: ['apple', 'banana']
            },
            {
                name: 'object-2',
                nestedArr: ['grapes', 'orange']
            }
        ]
    }
}
}
</script>
