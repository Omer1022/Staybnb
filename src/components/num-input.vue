<template>
<section class="num-input-cmp">
   <div class="item-label">
       <span class="title">test-title</span>
       <br>
    <span class="sub-title">test-subtitle</span>
   </div>
    <div class="plus-minus-btn">
        <button @click="updateNumOfitems(-1)" :disabled="numOfItems === 0">-</button>
        <input type="number" v-model="numOfItems">
        <button @click="updateNumOfitems(1)">+</button>
    </div>
        </section>

        
</template>
<script>
export default {
    name: 'plusMinusInput',
    props:{
        subject: Object
    },
    data(){
        return {
            numOfItems: 0,
        }
    },
    methods: {
        updateNumOfitems(dir) {
            this.numOfItems += dir
        }
    },
}
</script>
