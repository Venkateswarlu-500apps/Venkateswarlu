<template>
<div>
    <eventBus0></eventBus0>
    <eventBus1></eventBus1>
</div>
</template>

<script>

import eventBus0 from './eventBus0.vue'
import eventBus1 from './eventBus1.vue'

export default {
    components:{ eventBus0, eventBus1},
    name:'VenkY',
    data(){
        return{

        }
    }
}
</script>